package ss.nscube.webshare.server.file

import ss.nscube.webshare.server.HTTPServer
import ss.nscube.webshare.utils.FileState
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.log
import java.io.InputStream

class DownloadManager(val server: HTTPServer): TransferManager() {

    fun downloadingCount(): Int {
        var count = 0
        for (file in files) {
            if (file.state == FileState.Loading) count++
        }
        return count
    }

    // file count available for download (upload from web). Includes currently downloading files
    fun availableFileCount(): Int {
        synchronized(mutex) {
            return server.fileManager.maxFileCount - fileCount()
        }
    }

    fun fileCount() = (downloadingCount() + server.fileManager.files.size)

    fun add(file: WebFile, inputStream: InputStream) {
        add(file)
        file.fileDownloader = FileDownloader(
            file,
            inputStream,
            file.getOutputStream(server.application) ?: throw Exception("outputStream is null for ${file.name}"),
            this
        )
        file.fileDownloader?.start()
        log("RECEIVE STARTED ${file.name}")
    }

    override fun remove(file: WebFile) {
        when(file.state) {
            FileState.Loading -> {
                file.fileDownloader?.stop()
            }
            FileState.Completed -> {
                server.fileManager.remove(file)
                val appFileList = server.appFolderManager.listFromType(file.type)
                for (appFile in appFileList)
                    if (appFile.file == file.file) {
                        appFileList.remove(appFile)
                        break
                    }
            }
            else -> {}
        }
        super.remove(file)
    }

//    fun deleteAndRemove(file: WebFile) {
//        server.fileManager.deleteReceived(file)
//        remove(file)
//    }

    val addFileMutex = Any()
    override fun onCompleted(file: WebFile) {
        super.onCompleted(file)
        synchronized(addFileMutex) {
            server.appFolderManager.listFromType(file.type).add(
                0,
                AppFile(
                    file.name,
                    file.length,
                    file.type,
                    file.type,
                    file.file!!,
                    System.currentTimeMillis(),
                    if (file.type == WebFileUtil.App && file.file != null) WebFileUtil.getAppIconFromFile(server.application, file.file!!.absolutePath) else null,
                    true
                )
            )
        }
    }
}