package ss.nscube.webshare.server

import android.content.Intent
import android.content.res.AssetManager
import android.graphics.Bitmap
import android.graphics.drawable.BitmapDrawable
import android.graphics.drawable.Drawable
import android.os.Build
import android.util.Base64
import coil.ImageLoader
import coil.decode.SvgDecoder
import coil.request.ImageRequest
import coil.request.SuccessResult
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.bumptech.glide.request.target.CustomTarget
import com.bumptech.glide.request.transition.Transition
import com.squareup.moshi.Moshi
import com.squareup.moshi.Types
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import kotlinx.coroutines.*
import ss.nscube.webshare.ServerService
import ss.nscube.webshare.WebShareApp
import ss.nscube.webshare.server.events.ServerStatusListener
import ss.nscube.webshare.server.file.*
import ss.nscube.webshare.server.headers.*
import ss.nscube.webshare.server.models.*
import ss.nscube.webshare.core.server.models.Text
import ss.nscube.webshare.server.user.*
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.server.utils.ServerUtil
import ss.nscube.webshare.server.utils.TimerTaskManager
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.*
import java.io.*
import java.net.ServerSocket
import java.net.Socket
import java.util.*
import java.util.zip.ZipEntry
import java.util.zip.ZipOutputStream
import kotlin.collections.HashMap
import kotlin.random.Random
import kotlin.random.nextInt


/**
 * HTTPServer
 * Handles HTTP requests
 *
 * @author  Satya Snehith
 * @version 1.0
 * @since   2020-07-17
 */
class HTTPServer(val application: WebShareApp) {
    private val context = application.applicationContext
    val preferencesUtil = application.preferencesUtil
    private var serverSocket: ServerSocket? = null
    val userManager: UserManager = UserManager(preferencesUtil.adminUserName)
    val mainUser: User = userManager.mainUser
    val textManager: TextManager = TextManager()
    var fileManager: FileManager = FileManager(this)
    val signedUrlList = SignedUrlList()
    val assetManager: AssetManager = application.assets
    var isRunning = false
        private set
    val serverStatusListeners: ArrayList<ServerStatusListener> = ArrayList()
    val appFolderManager = AppFolderManager(this)
    val uploadManager: UploadManager = UploadManager(context)
    val downloadManager: DownloadManager = DownloadManager(this)
    private var startTime: Long = 0
    var isSecured = preferencesUtil.isSecured
    var pin: Int? = preferencesUtil.securityPin
        private set
    private var lastInactiveTime: Long = System.currentTimeMillis()
    var maxInactiveTimeInMinutes: Int = preferencesUtil.serverInactiveTime ?: 30
        private set
    var maxPinAttempts = preferencesUtil.maxPinAttempts
        private set
    private val PORT = 1111
    private var serverServiceIntent =  Intent(application, ServerService::class.java)
    private val timerTaskManager = TimerTaskManager()
    private val periodCallRemoveExpiredSignedUrl = 5 * 60 * 1000L
    private val periodServerInactivityCheck = 30 * 1000L
    var disableFileUpload = false
    var disableUserCreation = false
    val requestBuilder = Glide
            .with(context)
            .asBitmap()
            .apply(RequestOptions().centerCrop().override(140, 140))
    val assetLengthMap: HashMap<String, Long> = HashMap()
    val moshi: Moshi = Moshi.Builder()
        .addLast(KotlinJsonAdapterFactory())
        .build()

    companion object {
        private const val VERSION = "HTTP/1.0"
        private const val CRLF = "\r\n"
        const val SERVER_NAME = "WebShare"
        const val Get = "GET"
        const val Post = "POST"
        private val statusMessages: Array<String?> = arrayOfNulls(600)

        init {
            statusMessages[200] = "OK"
            statusMessages[201] = "Created"
            statusMessages[206] = "Partial Content"
            statusMessages[400] = "Bad Request"
            statusMessages[401] = "Unauthorized"
            statusMessages[403] = "Forbidden"
            statusMessages[404] = "Not Found"
        }
    }

    init {
        appFolderManager.initFolders()
        textManager.add(mainUser, "Hello", false)
//        for (i in 0..100) {
//            textManager.add(mainUser, getRandomString())
//        }
    }

    fun enableSecurity(mPin: Int?) {
        if (pin != mPin) {
            for (user in userManager.users) {
                user.authAttemptCount = 0
            }
        }
        isSecured = mPin != null
        preferencesUtil.isSecured = isSecured
        pin = mPin
        preferencesUtil.securityPin = pin
    }

    fun setMaxInactiveTime(minutes: Int) {
        if (!ss.nscube.webshare.server.utils.Util.isValidInactiveMinutes(minutes))
            throw IllegalArgumentException("setMaxInactiveTime arg must be in either 15, 30, 45 minutes or 1 - 24 hours")
        maxInactiveTimeInMinutes = minutes
        preferencesUtil.serverInactiveTime = minutes
    }

    fun getMaxInactiveTime(): String {
        if (maxInactiveTimeInMinutes in arrayOf(15, 30, 45)) return "$maxInactiveTimeInMinutes Minutes"
        val hours = maxInactiveTimeInMinutes / 60
        return "$hours Hour${if (hours == 1) "" else "s"}"
    }

    fun setMaxPinAttemptsLimit(value: Int) {
        maxPinAttempts = value
        preferencesUtil.maxPinAttempts = value
    }

    fun getRandomString(): String {
        val chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz          1234567890 !@#$%^&*()_+{}:\";'[]|\\?><,./~`_)+-`"
        val sb = StringBuilder()
        for (i in 1..500) {
            sb.append(chars[Random.nextInt(chars.indices)])
        }
        return sb.toString()
    }

    private fun notifyListenersForStarting() {
        for (serverStatusListener in serverStatusListeners) {
            serverStatusListener.onStarted()
        }
    }

    private fun notifyListenersForStopping() {
        for (serverStatusListener in serverStatusListeners) {
            serverStatusListener.onStopped()
        }
    }

    private fun checkServerInactivity() {
        log("checkServerInactivity lastInactiveTime: ${Util.getDisplayTime(lastInactiveTime)}, " +
                "maxInactiveTimeInMinutes: $maxInactiveTimeInMinutes, " +
                "isInactive: ${(System.currentTimeMillis() - lastInactiveTime) >= (maxInactiveTimeInMinutes * 60 * 1000)}")
        if ((System.currentTimeMillis() - lastInactiveTime) >= (maxInactiveTimeInMinutes * 60 * 1000)) {
            stop()
        }
    }

    private fun removeExpiredSignedUrls() {
        log("signedUrlList before remove ${Thread.currentThread().name} ${signedUrlList.signedUrls.size}")
        signedUrlList.removeExpiredUrls()
        log("signedUrlList after remove ${signedUrlList.signedUrls.size}")
    }

    fun start() {
        if (!isRunning) {
            try {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    application.startForegroundService(serverServiceIntent)
                } else {
                    application.startService(serverServiceIntent)
                }
            } catch (e: Exception) {}

            lastInactiveTime = System.currentTimeMillis()
            timerTaskManager.schecule(periodCallRemoveExpiredSignedUrl, ::removeExpiredSignedUrls)
            timerTaskManager.schecule(periodServerInactivityCheck, ::checkServerInactivity)
            //port of the service
            launchIO {
                try {
                    serverSocket =
                        withContext(Dispatchers.IO) {
                            ServerSocket(PORT)
                        }
                    d("Http log started")
                    isRunning = true
                    startTime = System.currentTimeMillis()
                    notifyListenersForStarting()
                    while (isRunning) {
                        val start = System.currentTimeMillis()
                        handleSocket(withContext(Dispatchers.IO) {
                            serverSocket!!.accept()
                        })
                        log("Http log resTime ${System.currentTimeMillis() - start} ms")
                    }
                } catch (e: IOException) {
                    isRunning = false
                    d("Http log start error $e")
                    e.printStackTrace()
                }
            }
        }
    }

    fun launchIO(block: suspend () -> Unit) {
        MainScope().launch(Dispatchers.IO) { block() }
    }

    fun thread(run: () -> Unit) {
        object: Thread() {
            override fun run() {
                run()
            }
        }.start()
    }

    fun stop() {
        isRunning = false
        application.stopService(serverServiceIntent)
        timerTaskManager.cancelAll()
        launchIO {
            try {
//                    serverTime((System.currentTimeMillis() - startTime) / 1000)
                notifyListenersForStopping()
                userManager.clear()
                stopAllDownloadsAndUploads()
                withContext(Dispatchers.IO) {
                    serverSocket!!.close()
                }
            } catch (e: IOException) {
                e.printStackTrace()
            } catch (e: NullPointerException) {
                e.printStackTrace()
            }
        }
    }

    private fun stopAllDownloadsAndUploads() {
        downloadManager.stopAll()
        uploadManager.stopAll()
    }

    private fun handleSocket(socket: Socket) {
        d("Http log handleSocket")
        launchIO {
            try {
                Response(socket)
            } catch (e: Exception) {
                e.printStackTrace()
            }
            lastInactiveTime = System.currentTimeMillis()
        }
    }

    fun isAuthorized(user: User): Boolean {
        return !isSecured || user.hasAccess || user.pin == pin
    }

    inner class Request(private val inputStream: InputStream) {
        var method: String? = null
        private var pathString: String? = null
        var version: String? = null
        var header: RequestHeader = RequestHeader()
        var path: Path? = null
        var jsonString: String? = null
        var text: String? = null
        var file: WebFile? = null
        var hasNoMemory = false
        init {
            read()
            if (method == Post) readPostData()
        }

        @Throws(Exception::class)
        fun read() {
            addRequestLine()
            readRequestHeader()
        }

        @Throws(Exception::class)
        fun addRequestLine() {
            val line = ServerUtil.readLine(inputStream)
            httpRequest(line)
            val tokens = line.split(" ").toTypedArray()
            if (tokens.size == 3) {
                method = tokens[0]
                pathString = tokens[1]
                path = Path(pathString!!)
                version = tokens[2]
            } else {
                throw BadRequestException(line)
            }
        }

        @Throws(Exception::class)
        fun readRequestHeader() {
            var line: String?
            while (true) {
                line = ServerUtil.readLine(inputStream)
                if (line.isEmpty()) break
                httpRequest(line)
                header.addHeader(line!!)
            }
        }

        @Throws(Exception::class)
        fun readPostData() {
            when(header.contentType) {
                ContentTypes.JSON_DATA -> readJson()
                ContentTypes.PLAIN_TEXT -> readText()
                ContentTypes.MULTIPART -> readMultiPart()
                else -> {}
            }
        }

        @Throws(Exception::class)
        fun readJson() {
            if (header.contentLength == null || header.contentLength!! > Int.MAX_VALUE) throw BadRequestException("No content-Length header for $path")
            jsonString = ServerUtil.read(inputStream, header.contentLength!!.toInt())
        }

        @Throws(Exception::class)
        fun readText() {
            if (header.contentLength == null || header.contentLength!! > Int.MAX_VALUE) throw BadRequestException("No content-Length header for $path")
            text = ServerUtil.read(inputStream, header.contentLength!!.toInt())
        }


        private fun checkAuth(): Boolean {
            val user = if (!header.hasAuth || header.auth == null) null
            else userManager[header.auth!!]
            if (user == null) return false
            if (!isAuthorized(user) || user.isBlocked) return false
            return true
        }

        @Throws(Exception::class)
        fun readMultiPart() {
            val readLine = ServerUtil.readLine(inputStream)
            if (readLine == header.boundary) {
                var line: String?
                val formRequestHeader = RequestHeader()
                while (true) {
                    line = ServerUtil.readLine(inputStream)
                    if (line.isEmpty()) break
                    httpRequest(line)
                    formRequestHeader.addHeader(line!!)
                }
                val contentDisposition = formRequestHeader.contentDisposition!!
                val length = contentDisposition.dataLength!!
                if(disableFileUpload) return
                log("RECEIVE PRE-START ${contentDisposition.dataLength!!}")
                if (length >= appFolderManager.getAvailableSpace()) {
                    hasNoMemory = true
                    return
//                    throw MemoryLimitExceededException("Memory limit exceeded")
                }
                if (checkAuth()) {
                    file = WebFile()
                    file!!.name = contentDisposition.fileName!!
                    file!!.length = length
                    file!!.file = appFolderManager.createFile(contentDisposition.fileName, file!!)
                    downloadManager.add(file!!, inputStream)
                } else {
                    val file = WebFile()
                    file.length = length
                    val fileDownloader = FileDownloader(
                        file,
                        inputStream,
                        FileUtil.nullOutputStream(),
                        object : FileTransferListener {
                            override fun onCanceled(file: WebFile) {}
                            override fun onCompleted(file: WebFile) {}
                        })
                    fileDownloader.start()
                }
                log("LAST ${ServerUtil.readLine(inputStream)}")
                log("LAST ${ServerUtil.readLine(inputStream)}")
            }
        }
    }

    fun createUser(ip: String): User? {
        return if (disableUserCreation) null
        else userManager.createUser(ip)
    }

    inner class Response(private val socket: Socket) {
        private val inputStream: InputStream = socket.getInputStream()
        private val outputStream: OutputStream = socket.getOutputStream()
        private val responseHeader: ResponseHeader = ResponseHeader(VERSION, 200, statusMessages[200]!!)
        val headers = responseHeader.headers
        lateinit var path: Path
        lateinit var request: Request
        private lateinit var requestHeader: RequestHeader

        init {
            try {
                log("RECEIVE REQUEST")
                request = Request(inputStream)
                requestHeader = request.header
                path = request.path ?: throw BadRequestException("No Path")
                d("Http log Request ${path.path}")
                respond()
            } catch (e: Exception) {
                d("Http log ERROR (in class Response) ${e.javaClass.simpleName} ${e.message}")
                e.printStackTrace()
                sendErrorResponse(e)
            }
        }

        @Throws(Exception::class)
        private fun respond() {
            log("PATH ${path.path}")
            if (path.length == 0) {
                sendAsset("web/index.html")
            } else {
                if(path[0] == Path.Api) handleApi()
                else {
                    val qIndex = path.path.indexOf('?')
                    val fileName = if (qIndex > 0) {
                         path.path.substring(0, qIndex)
                    } else {
                        path.path
                    }
                    sendAsset("web$fileName")
                }
            }
        }

        @Throws(Exception::class)
        fun sendAssetFile(inputStream: InputStream) {
            val buffer = ByteArray(DEFAULT_BUFFER_SIZE)
//            inputStream.skip(from)
            while (true) {
                val length = inputStream.read(buffer)
                if (length <= 0) break
                outputStream.write(buffer, 0, length)
            }
            outputStream.write(CRLF.toByteArray())
            inputStream.close()
            outputStream.flush()
            outputStream.close()
        }

        @Throws(Exception::class)
        fun sendBitmap(bitmap: Bitmap?) {
            if (bitmap == null) {
                sendErrorResponse(FileNotFoundResException("No image"))
                return
            }
            val out = ByteArrayOutputStream()
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, out)
            sendBase64(out.toByteArray())
        }

        @Throws(Exception::class)
        fun sendBase64(byteArray: ByteArray) {
            headers.setContentType("text/plain")
            val base64 = Base64.encode(byteArray, Base64.NO_WRAP)
            headers.setContentLength(base64.size.toLong())
            sendResponseHeader()
            sendByteArray(base64)
        }

        @Throws(Exception::class)
        fun sendByteArray(byteArray: ByteArray) {
            outputStream.write(byteArray)
            outputStream.write(CRLF.toByteArray())
            outputStream.flush()
            outputStream.close()
            inputStream.close()
        }

        @Throws(Exception::class)
        fun sendResponseBodyText(text: String) {
            outputStream.write(text.toByteArray())
            outputStream.flush()
            outputStream.close()
        }

        @Throws(Exception::class)
        private fun sendResponseHeader() {
            // HTTP/1.0 200 OK
            var line = "${responseHeader.version} ${responseHeader.statusCode} ${responseHeader.statusMessage} $CRLF"
            outputStream.write(line.toByteArray())
            httpResponse(line)
            for (header in headers) {
                line = "${header.name}: ${header.value}$CRLF"
                outputStream.write(line.toByteArray())
                httpResponse(line)
            }
            outputStream.write(CRLF.toByteArray())
            outputStream.flush()
        }

        private fun updateRespondHeader(code: Int): ResponseHeader {
            val message = statusMessages.getOrNull(code) ?: throw IllegalArgumentException("$code not found in the status messages list")
            responseHeader.statusCode = code
            responseHeader.statusMessage = message
            return responseHeader
        }

        @Throws(Exception::class)
        fun sendErrorResponse(exception: Exception) {
            when(exception) {
                is BadRequestException -> {
                    updateRespondHeader(400)
                    sendJson(exception.errorResponse)
                }
                is UnauthorizedException -> {
                    updateRespondHeader(401)
                    sendJson(exception.errorResponse)
                }
                is FileNotFoundResException -> {
                    updateRespondHeader(404)
                    sendJson(exception.errorResponse)
                }
                else -> {
                    updateRespondHeader(404)
                    sendJson(ErrorResponse(ErrorResponse.TypeHide, exception.message))
                }
            }
        }

        @Throws(Exception::class)
        fun sendAsset(name: String) {
            val inputStream = assetManager.open(name)
            var length = if (assetLengthMap.containsKey(name)) {
                assetLengthMap[name]
            } else null
            if (length == null) {
                assetManager.openFd(name).use { length = it.length }
            }
            headers.setContentType(FileUtil.getMimeTypeFromName(name))
            if (length != null) headers.setContentLength(length!!)
            sendResponseHeader()
            sendAssetFile(inputStream)
        }

        private inline fun<reified T> getJson(): T {
            return moshi.adapter(T::class.java).fromJson(request.jsonString!!)!!
        }

        private inline fun<reified T> sendJson(t: T) {
            val json = moshi.adapter(T::class.java).toJson(t)
            sendJsonText(json)
        }

        private inline fun<reified T> sendListJson(t: List<T>) {
            val json = moshi.adapter<List<T>>(Types.newParameterizedType(java.util.List::class.java, T::class.java)).toJson(t)
            sendJsonText(json)
        }

        private fun sendJsonText(json: String) {
            headers.setContentType(FileUtil.JsonMimeType)
            headers.setContentLength(json.length.toLong())
            httpResponse(json)
            log("JSON RESPONSE SIZE: ${json.length}")
            sendResponseHeader()
            sendResponseBodyText(json)
        }

        @Throws(Exception::class)
        private fun handleApi() {
            val path1 = path[1] ?: throw FileNotFoundResException("invalid api")
            when(path1) {
                Path.Status -> {
                    assertMethod(Post)
                    assertJson()
                    val statusRequest: StatusRequest = getJson()
                    val ip = socket.inetAddress.hostAddress ?: throw BadRequestException("no ip address")

                    val user = if (statusRequest.userId != null) userManager[statusRequest.userId] ?: createUser(ip) else createUser(ip)
                    if (user == null) {
                        sendJson(ErrorResponse(ErrorResponse.TypeNoUserCreation, "User creation disabled"))
                    } else {
                        user.os = statusRequest.os
                        log("Http log ${user.base64Id.length}")
                        sendJson(StatusResponse(user.name, user.base64Id, isAuthorized(user), isSecured, user.isBlocked))
                    }
                }
                Path.Auth -> {
                    assertMethod(Post)
                    assertJson()
                    val user = assertUser()
                    val authRequest: AuthRequest = getJson()
                    user.pin = authRequest.pin
                    user.authAttemptCount++
                    val isCorrectPin = user.pin == pin
                    val hasAttempt = user.authAttemptCount <= maxPinAttempts
                    if (isCorrectPin && hasAttempt && !user.isBlocked) {
                        sendJson(AuthResponse(true, null))
                    } else {
                        var error = "PIN entered is incorrect. You have ${maxPinAttempts - user.authAttemptCount} attempts remaining."
                        if (!hasAttempt) error = "You have reached the maximum number of attempts allowed"
                        if (user.isBlocked) error = "Access denied"
                        sendJson(AuthResponse(false, error))
                    }
                }
                Path.SignedUrlFile -> {
                    assertMethod(Get)
                    val user = assertUser()
                    assertAuth(user)
                    val url = signedUrlList.addFile(getFileFromPath(), user)
                    sendJson(SignedUrlResponse(url.hash))
                }
                Path.SignedUrlZip -> {
                    assertMethod(Post)
                    val user = assertUser()
                    assertAuth(user)
                    val zipRequest: ZipRequest = getJson()
                    val url = signedUrlList.addZip(
                        ss.nscube.webshare.server.utils.Util.getZipDateName(),
                        zipRequest.ids ?: throw BadRequestException("id list not found"),
                        user
                    )
                    sendJson(SignedUrlResponse(url.hash))
                }
                Path.File -> {
                    assertMethod(Get)
                    val signedUrl = (getSignUrl() as? SignedUrlFile) ?: throw BadRequestException("invalid file path")
                    val file = signedUrl.file
                    val fileLen = file.length
                    val range = request.header.getFirstRange()
                    if (range != null) {
                        updateRespondHeader(206)
                        if (range.start == -1L && range.end > 0L) {
                            range.start = fileLen - range.end
                        }
                        if (range.end == -1L) {
                            range.end = fileLen - 1
                        }
                        range.updateLength()
                        headers.setContentRange(range.start, range.end, fileLen)
                        headers.setContentLength(range.length)
                    } else {
                        headers.setContentLength(fileLen)
                    }
                    headers.setContentType(file.mime)
                    headers.setExpires(signedUrl.expiredAt)
                    headers.setContentDisposition(Headers.ContentDispositionTypeInline, file.name)
                    sendResponseHeader()
                    if (range == null)
                        uploadManager.add(0, fileLen, file, outputStream)
                    else
                        uploadManager.add(range.start, range.length, file, outputStream)
                }
                Path.Zip -> {
                    assertMethod(Get)
                    val signedUrl = (getSignUrl() as? SignedUrlZip) ?: throw BadRequestException("invalid filename")
                    sendZip(signedUrl)
                }
                Path.Text -> {
                    assertMethod(Post)
                    assertJson()
                    val user = assertUser()
                    assertAuth(user)
                    val tpr: TextPaginationRequest = getJson()
                    if (tpr.fromId == -1 && textManager.isNotEmpty()) {
                        tpr.fromId = textManager.last().id + 1
                    }
                    val textArray = ArrayList<Text>()
                    log("TextManager ${textManager.size}")
                    if (textManager.isNotEmpty()) for (index in textManager.size-1 downTo  0) {
                        val text = textManager[index]
                        if (textArray.size >= tpr.count) break
                        if (text.id < tpr.fromId) {
                            textArray.add(Text(text.fromUser.name, text.valueBase64, text.time, text.id, text.fromUser.id == user.id))
                        }
                    }
                    sendListJson(textArray)
                }
                Path.AddText -> {
                    assertMethod(Post)
                    assertText()
                    val user = assertUser()
                    assertAuth(user)
                    if (request.text.isNullOrEmpty()) throw BadRequestException("text not received")
                    val text = textManager.add(user, request.text!!)
                    sendJson(AddTextResponse(true, null, Text(text.fromUser.name, text.valueBase64, text.time, text.id, true)))
                }
                Path.DeleteText -> {
                    assertMethod(Get)
                    val user = assertUser()
                    assertAuth(user)
                    val text = textManager.fromId(getIdFromPath()) ?: throw FileNotFoundResException("text not found")
                    if (text.fromUser != user) throw UnauthorizedException(ErrorResponse.TypeSnack, "access denied")
                    textManager.remove(text)
                    sendJson(DeletedResponse(true))
                }
                Path.Files -> {
                    assertMethod(Post)
                    assertJson()
                    val user = assertUser()
                    assertAuth(user)
                    val fpr: FilePaginationRequest = getJson()
                    val files = fileManager.files
                    log("FILE_API fromId ${fpr.fromId}")
                    if (fpr.fromId == -1 && files.isNotEmpty()) {
                        fpr.fromId = files.last().id + 1
                    }
                    val fileResponseArray = ArrayList<FileResponse>()
                    val filters = if (!fpr.filters.isNullOrEmpty()) fpr.filters else null
                    if (files.isNotEmpty()) for (fileIndex in files.size-1 downTo  0) {
                        val file = files[fileIndex]
                        log("FILE_API file list ${file.id}")
                        if (fileResponseArray.size >= fpr.count) break
                        if (
                            (file.id < fpr.fromId) &&
                            (filters == null || file.type in filters) &&
                            (fpr.search == null || file.name.contains(fpr.search, true))) {
                            log("FILE_API file add id:${file.id}")
                            fileResponseArray.add(FileResponse(
                                    file.base64Name,
                                    file.id,
                                    file.type,
                                    file.length,
                                    file.uploadedTime,
                                    file.user?.name ?: "",
                                    user.id == file.user?.id,
                                    file.duration,
                                    file.resolution
                                ))
                        }
                    }
                    sendJson(FileListResponse(files.size, fileResponseArray))
                }
                Path.MyFiles -> {
                    assertMethod(Post)
                    assertJson()
                    val user = assertUser()
                    assertAuth(user)
                    val mfpr: MyFilesPaginationRequest = getJson()
                    val files = fileManager.files
                    if (mfpr.fromId == -1 && files.isNotEmpty()) {
                        mfpr.fromId = files.last().id + 1
                    }
                    val fileResponseArray = ArrayList<FileResponse>()
                    log("FILE ${files.size}")
                    if (files.isNotEmpty()) for (fileIndex in files.size-1 downTo  0) {
                        val file = files[fileIndex]
                        if (fileResponseArray.size >= mfpr.count) break
                        if (user.id == file.user?.id && file.id < mfpr.fromId) {
                            fileResponseArray.add(
                                FileResponse(
                                    file.base64Name,
                                    file.id,
                                    file.type,
                                    file.length,
                                    file.uploadedTime,
                                    file.user?.name ?: "",
                                    true,
                                    file.duration,
                                    file.resolution
                                )
                            )
                        }
                    }
                    sendListJson(fileResponseArray)
                }
                Path.Image -> {
                    assertMethod(Get)
                    val user = assertUser()
                    assertAuth(user)
                    val file = getFileFromPath()
                    if (WebFileUtil.isSvg(file)) {
                        launchIO {
                            val loader = ImageLoader(context)
                            val req = ImageRequest.Builder(context)
                                .decoderFactory { result, options, _ -> SvgDecoder(result.source, options) }
                                .data(file.uri ?: file.file)
                                .build()
                            val result = loader.execute(req)
                            val bitmap = ((result  as? SuccessResult)?.drawable as? BitmapDrawable)?.bitmap

                            sendBitmap(bitmap)
                        }
                    } else if (file.type == WebFileUtil.Image || file.type == WebFileUtil.Video) {
                        requestBuilder
                            .load(file.uri ?: file.file)
                            .into(object : CustomTarget<Bitmap?>() {
                                override fun onResourceReady(resource: Bitmap, transition: Transition<in Bitmap?>?) {
                                    launchIO {
                                        sendBitmap(resource)
                                    }
                                }
                                override fun onLoadCleared(placeholder: Drawable?) {}
                            })
                    } else if (file.type == WebFileUtil.App) {
                        if (file.imageByteArray == null) throw FileNotFoundResException("image not found")
                        sendBase64(file.imageByteArray!!)
                    } else {
                        throw FileNotFoundResException("image not found")
                    }
                }
                Path.Info -> {
                    assertMethod(Get)
                    val user = assertUser()
//                    assertAuth(user)
                    sendJson(InfoResponse(user.name))
                }
                Path.UploadFile -> {
                    val file = request.file
                    try {
                        assertMethod(Post)
                        val user = assertUser()
                        assertAuth(user)
                        if (disableFileUpload) {
                            sendJson(ErrorResponse(ErrorResponse.TypeSnack,"file upload disabled"))
                        } else if (file != null && file.state == FileState.Completed) {
                            file.user = user
                            log("FILE_API file addReceived ${file.id}")
                            file.updateId() // to add the files in ascending order of id to filemanager
                            fileManager.addReceived(file)
                            sendJson(FileUploadResponse(
                                true,
                                FileResponse(
                                    file.name,
                                    file.id,
                                    file.type,
                                    file.length,
                                    file.uploadedTime,
                                    file.user?.name ?: "",
                                    user.id == file.user?.id,
                                    file.duration,
                                    file.resolution
                                ),
                                null,
                                false))
                        } else {
                            if (request.hasNoMemory) {
                                sendJson(FileUploadResponse(false, null, "no storage space available", true))
                            } else {
                                sendJson(FileUploadResponse(false, null, "file not uploaded", true))
                            }
                        }
                    } catch (e: Exception) {
                        file?.file?.delete()
                        throw e
                    }
                }
                Path.DeleteFile -> {
                    assertMethod(Get)
                    val user = assertUser()
                    assertAuth(user)
                    val file = getFileFromPath()
                    if (user != file.user) throw UnauthorizedException("file access denied")
//                    fileManager.deleteReceived(file)
                    downloadManager.remove(file)
                    sendJson(DeletedResponse(true))
                }
                Path.DeleteMultiFile -> {
                    assertMethod(Post)
                    assertJson()
                    val user = assertUser()
                    assertAuth(user)
                    val req: DeleteMultiRequest = getJson()
                    val ids = req.ids ?: throw BadRequestException("id list not found")
                    var isDeleted = true
                    for (id in ids) {
                        val file = getFile(id)
                        if (user.id != file.user?.id) throw BadRequestException("file is not accessible")
                        downloadManager.remove(file)
//                        if (!fileManager.deleteReceived(file)) isDeleted = false
                    }
                    sendJson(DeletedResponse(isDeleted))
                }
                Path.ChangeName -> {
                    assertMethod(Post)
                    assertJson()
                    val user = assertUser()
                    assertAuth(user)
                    val changeNameRequest: ChangeNameRequest = getJson()
                    val message = userManager.validateName(changeNameRequest.name)
                    if (message == null) user.updateName(changeNameRequest.name)
                    sendJson(UpdatedResponse(message == null, message))
                }
                Path.UploadInfo -> {
                    assertMethod(Get)
                    assertAuth(assertUser())
                    val availableCount = downloadManager.availableFileCount()
                    sendJson(UploadInfoResponse(!disableFileUpload, availableCount))
                }
                else -> {
                    throw BadRequestException("no such api")
                }
            }
        }

        @Throws(Exception::class)
        fun getSignUrl(): SignedUrl {
            val hash = path[2] ?: throw BadRequestException("incomplete filename")
            val signedUrl = signedUrlList[hash] ?: throw FileNotFoundResException("file not found")
            if (signedUrl.isExpired()) {
                signedUrlList.remove(signedUrl)
                throw FileNotFoundResException("url expired")
            }
            return signedUrl
        }

        @Throws(Exception::class)
        fun sendZip(signedUrlZip: SignedUrlZip) {
            headers.setContentType("application/zip")
            headers.setContentDisposition(Headers.ContentDispositionTypeAttachment, signedUrlZip.fileName)
            sendResponseHeader()
            val out = ZipOutputStream(outputStream)
            val buffer = ByteArray(DEFAULT_BUFFER_SIZE)
            for (id in signedUrlZip.idList) {
                val file = fileManager.get(id) ?: continue
                val e = ZipEntry(file.name)
                out.putNextEntry(e)
                val fileInputStream = file.getInputStream(context) ?: continue
                while (true) {
                    val length = fileInputStream.read(buffer)
                    if (length <= 0) break
                    out.write(buffer, 0, length)
                }
                out.closeEntry()
            }
            out.close()
        }

        @Throws(Exception::class)
        fun getIdFromPath() =  try { path[2]?.toInt() ?: throw BadRequestException("must contain id") }
        catch (e: Exception) { throw BadRequestException("id must be integer") }

        @Throws(Exception::class)
        fun getFileFromPath(): WebFile {
            return getFile(getIdFromPath())
        }

        @Throws(Exception::class)
        fun getFile(id: Int): WebFile {
            return fileManager.get(id) ?: throw FileNotFoundResException("file not found")
        }

        @Throws(BadRequestException::class)
        fun assertMethod(method: String) {
            if (request.method != method) throw BadRequestException("method not allowed")
        }

        @Throws(BadRequestException::class)
        fun assertJson() {
            if (request.header.contentType != ContentTypes.JSON_DATA) throw BadRequestException("invalid contentType for json")
            if (request.jsonString == null) throw BadRequestException("no json data")
        }

        @Throws(BadRequestException::class)
        fun assertText() {
            if (request.header.contentType != ContentTypes.PLAIN_TEXT) throw BadRequestException("invalid contentType for text")
            if (request.text == null) throw BadRequestException("no text data")
        }

        @Throws(UnauthorizedException::class)
        fun assertUser(): User {
            if (!requestHeader.hasAuth || requestHeader.auth == null) throw UnauthorizedException(ErrorResponse.TypeNoAccess, "invalid auth")
            return userManager[requestHeader.auth!!] ?: throw UnauthorizedException(ErrorResponse.TypeNoAccess, "no such user")
        }

        @Throws(UnauthorizedException::class)
        fun assertAuth(user: User) {
            if (!isAuthorized(user) || user.isBlocked) {
                throw UnauthorizedException(ErrorResponse.TypeNoAccess, "do not have access")
            }
        }
    }
}