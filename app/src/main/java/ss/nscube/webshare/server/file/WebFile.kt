package ss.nscube.webshare.server.file

import android.content.Context
import android.graphics.Bitmap
import android.graphics.drawable.Drawable
import android.net.Uri
import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import ss.nscube.webshare.server.user.User
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.server.utils.PathUtil
import ss.nscube.webshare.utils.FileState
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.log
import ss.nscube.webshare.utils.scan.models.*
import java.io.*
import java.util.*

class WebFile() {
    var id: Int = -1

    var uri: Uri? = null

    var file: File? = null

    var name: String = ""
        set(value) {
            field = value
            val lastDotIndex = value.lastIndexOf('.')
            val extension = if (lastDotIndex == -1) null else value.substring(lastDotIndex + 1).lowercase(Locale.getDefault())
            mime = FileUtil.getMimeTypeFromExtension(extension)
            type = FileUtil.getFileType(extension, mime)
            encoded = PathUtil.encode(value)
        }

    var type: String = WebFileUtil.Document

    var fileType: Int = WebFileUtil.TypeNone

    var mime: String = FileUtil.OctetStream

    var encoded: String = ""

    var length: Long = -1

    var user: User? = null

    var appPackageName: String? = null

    var duration: Int? = null

    var resolution: String? = null

    var uploadedTime: Long = System.currentTimeMillis()

    var state: FileState = FileState.Completed

    var imageByteArray: ByteArray? = null

    @OptIn(DelicateCoroutinesApi::class)
    var drawable: Drawable? = null
        set(value) {
            field = value
            MainScope().launch(Dispatchers.IO) {
                val imageBitmap = WebFileUtil.getBitmap(field)
                val stream = ByteArrayOutputStream()
                imageBitmap?.compress(Bitmap.CompressFormat.PNG, 100, stream)
                imageByteArray = stream.toByteArray()
            }
        }

    var fileDownloader: FileDownloader? = null

    var fileUploader: FileUploader? = null

    init {
        updateId()
    }

    fun updateId() {
        id = synchronized(counterMutex) { idCounter++ }
    }

    fun exists(): Boolean {
        return file?.exists() ?: true
    }

    fun getInputStream(context: Context): InputStream? {
        return if (uri != null) context.contentResolver.openInputStream(uri!!) else if (file != null) FileInputStream(file) else null
    }

    fun getOutputStream(context: Context): OutputStream? {
        return if (uri != null) context.contentResolver.openOutputStream(uri!!) else if (file != null) FileOutputStream(file) else null
    }

    override fun equals(other: Any?): Boolean {
        if (other == null ||
            other !is WebFile ||
            type != other.type) return false
        log("FILE $id == ${other.id} \n $name == ${other.name} \n $type == ${other.type} \n $uri == ${other.uri} \n $file == ${other.file}")
        if (id == other.id) return true
        if (other.uri?.equals(this.uri) == true) return true
        if (other.file?.absolutePath?.equals(this.file?.absolutePath) == true) return true
        if (appPackageName?.equals(other.appPackageName) == true) return true
        return false
    }

    override fun hashCode(): Int {
        return id.hashCode()
    }

    companion object {
        var idCounter: Int = 0
        val counterMutex = Any()
        // use only to create a temporary webfile for removing a file from a list
        fun valueOf(uri: Uri, type: String): WebFile {
            val webFile = WebFile()
            webFile.uri = uri
            webFile.type = type
            return webFile
        }

        fun valueOf(uri: Uri, name: String, length: Long, user: User): WebFile {
            val webFile = WebFile()
            webFile.uri = uri
            webFile.name = name
            webFile.length = length
            webFile.user = user
            return webFile
        }

        fun fromData(data: Data, user: User): WebFile {
            val webFile = valueOf(data.uri, data.name, data.length, user)
            when(data) {
                is Image -> {
                    webFile.resolution = data.resolution
                }
                is Video -> {
                    webFile.duration = data.duration
                }
                is Audio -> {
                    webFile.duration = data.duration
                }
                is App -> {
                    webFile.drawable = data.drawable
                }
            }
            return webFile
        }

        fun valueOf(file: File): WebFile {
            val webFile = WebFile()
            webFile.file = file
            webFile.name = file.name
            webFile.length = file.length()
            return webFile
        }

        fun valueOf(name: String, length: Long, file: File): WebFile {
            val webFile = WebFile()
            webFile.name = name
            webFile.length = length
            webFile.file = file
            return webFile
        }

        fun valueOf(appFile: AppFile, user: User): WebFile {
            val webFile = WebFile()
            webFile.name = appFile.name
            webFile.length = appFile.length
            webFile.file = appFile.file
            webFile.user = user
            if (appFile.type == WebFileUtil.App) {
                webFile.drawable = appFile.appIconDrawable
            }

            return webFile
        }

    }
}
