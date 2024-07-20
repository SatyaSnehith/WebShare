package ss.nscube.webshare.server.file

import android.content.Context
import android.graphics.drawable.Drawable
import android.net.Uri
import android.os.Environment
import android.os.StatFs
import kotlinx.coroutines.*
import ss.nscube.webshare.server.HTTPServer
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.ui.utils.TimeCal
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.log
import ss.nscube.webshare.utils.scan.models.Data
import java.io.File

class AppFolderManager(val server: HTTPServer) {
    val context: Context = server.application
    // path of main directory
    private val webShareFolder = if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.Q) {
        context.getExternalFilesDir(HTTPServer.SERVER_NAME)
    } else {
        File(Environment.getExternalStorageDirectory(), HTTPServer.SERVER_NAME)
    }
    lateinit var imagesFolder: File
    lateinit var videosFolder: File
    lateinit var documentsFolder: File
    lateinit var audioFolder: File
    lateinit var appsFolder: File

    val imageList: ArrayList<AppFile> = ArrayList()
    val videoList: ArrayList<AppFile> = ArrayList()
    val audioList: ArrayList<AppFile> = ArrayList()
    val appList: ArrayList<AppFile> = ArrayList()
    val documentList: ArrayList<AppFile> = ArrayList()

    private val listenerList: ArrayList<AppFolderScanListener> = ArrayList()

    fun addListener(listener: AppFolderScanListener) {
        listenerList.add(listener)
        if (scanCompleted) listener.callScan()
    }

    fun removeListener(listener: AppFolderScanListener) {
        listenerList.remove(listener)
    }

    fun getAvailableSpace(): Long {
        return StatFs(webShareFolder?.absolutePath).availableBytes
    }

    private var scanCompleted = false

    fun initFolders() = webShareFolder?.let { appFolder ->
        MainScope().launch(Dispatchers.IO) {
            createFolder(appFolder)
            imagesFolder = File(appFolder, HTTPServer.SERVER_NAME + " Images")
            createFolder(imagesFolder)
            videosFolder = File(appFolder, HTTPServer.SERVER_NAME + " Video")
            createFolder(videosFolder)
            documentsFolder = File(appFolder, HTTPServer.SERVER_NAME + " Documents")
            createFolder(documentsFolder)
            audioFolder = File(appFolder, HTTPServer.SERVER_NAME + " Audio")
            createFolder(audioFolder)
            appsFolder = File(appFolder, HTTPServer.SERVER_NAME + " Apps")
            createFolder(appsFolder)
            val jobList = startScan(this)
            log("JOB_LIST ${jobList.size}")
            jobList.awaitAll()

            scanCompleted = true
            for (listener in listenerList) {
                if (!listener.isCalled) listener.callScan()
            }
            log("JOB_LIST AWAIT ${jobList.size}")
        }
    }

    fun getAllFileByDate(): ArrayList<AppFile> {
        TimeCal.start("AllFile")
        val allList: ArrayList<AppFile> = ArrayList()
        allList.addAll(imageList)
        allList.addAll(videoList)
        allList.addAll(audioList)
        allList.addAll(documentList)
        allList.addAll(appList)
        allList.sortByDescending { it.lastModified }
        TimeCal.stop("allFiles: ${allList.size}", "AllFile")
        return allList
    }

    fun deleteAllFiles(files: List<AppFile>): ArrayList<AppFile> {
        val deletedFiles = ArrayList<AppFile>()
        for (file in files) if (deleteFile(file)) deletedFiles.add(file)
        return deletedFiles
    }

    fun deleteFile(file: AppFile): Boolean {
        if (file.isDownloaded) { // check if the file is downloaded in current WebShare session
            for (webFile in server.downloadManager.files) {
                if (webFile.file == file.file) {
                    log("DELETE FILE ${webFile.name}")
                    server.downloadManager.remove(webFile)
                    listFromType(file.folderType).remove(file)
                    return true
                }
            }
        } else if (file.file.delete()) {
            server.fileManager.remove(file)
            listFromType(file.folderType).remove(file)
            return true
        }
        return false
    }

    private fun createFolder(file: File) {
        if (file.isFile) {
            file.delete()
        }
        if (!file.exists()) {
            file.mkdir()
        }
    }

    private fun startScan(coroutineScope: CoroutineScope) = listOf(
        scanAndAdd(coroutineScope, imageList, imagesFolder, WebFileUtil.Image),
        scanAndAdd(coroutineScope, videoList, videosFolder, WebFileUtil.Video),
        scanAndAdd(coroutineScope, audioList, audioFolder, WebFileUtil.Audio),
        scanAndAdd(coroutineScope, appList, appsFolder, WebFileUtil.App),
        scanAndAdd(coroutineScope, documentList, documentsFolder, WebFileUtil.Document)
    )

    private fun scanAndAdd(coroutineScope: CoroutineScope, files: ArrayList<AppFile>, folder: File, folderType: String) = coroutineScope.async(Dispatchers.IO) {
        TimeCal.start("FolderScan")
        files.clear()
        val fileList = folder.listFiles()
        if (fileList != null) for (file in fileList) {
            val name = file.name
            val type = FileUtil.getFileType(name)
            files.add(
                AppFile(
                    name,
                    file.length(),
                    type,
                    folderType,
                    file,
                    file.lastModified(),
                    if (type == WebFileUtil.App) WebFileUtil.getAppIconFromFile(context, file.absolutePath) else null
                )
            )
            files.sortByDescending { it.lastModified }
        }
        TimeCal.stop("${folder.name}: ${files.size}", "FolderScan")
    }

    fun listFromType(type: String): ArrayList<AppFile> {
        return when (type) {
            WebFileUtil.Image -> imageList
            WebFileUtil.Video -> videoList
            WebFileUtil.Audio -> audioList
            WebFileUtil.App -> appList
            else -> documentList
        }
    }

    fun folderFromType(type: String): File {
        return when (type) {
            WebFileUtil.Image -> imagesFolder
            WebFileUtil.Video -> videosFolder
            WebFileUtil.Audio -> audioFolder
            WebFileUtil.App -> appsFolder
            else -> documentsFolder
        }
    }

    fun createFile(name: String, file: WebFile): File {
        val updatedName = validateFileName(name, file.type)
        file.name = updatedName
        val folder = folderFromType(file.type)
        if (!folder.exists()) createFolder(folder)
        return File(
            folder,
            updatedName
        )
    }

    private fun validateFileName(fileName: String, type: String): String {
        val extension = FileUtil.getExtension(fileName)
        val name = if (extension != null) fileName.removeSuffix(".$extension") else fileName
        val list = listFromType(type)
        var newName = fileName
        var counter = 1
        while (true) {
            if (list.find { it.name == newName } == null) break
            newName = "$name(${counter++})${if (extension == null) "" else ".$extension"}"
        }
        return newName
    }
}

fun ArrayList<AppFile>.totalSize(): Long {
    var size = 0L
    for (file in this) {
        size += file.length
    }
    return size
}


abstract class AppFolderScanListener {
    var isCalled = false

    fun callScan() {
        isCalled = true
        onScanned()
    }

    abstract fun onScanned()
}

class AppFile(
    override var name: String,
    override val length: Long,
    val type: String,
    val folderType: String,
    var file: File,
    val lastModified: Long,
    val appIconDrawable: Drawable? = null,
    val isDownloaded: Boolean = false,
    var inSelection: Boolean = false
): Data() {
    override val uri: Uri = Uri.EMPTY
}