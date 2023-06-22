package ss.nscube.webshare.server.file

import android.content.Context
import ss.nscube.webshare.utils.FileState
import java.io.OutputStream

class UploadManager(val context: Context): TransferManager() {

    @Throws(Exception::class)
    fun add(from: Long, sendLength: Long, file: WebFile, outputStream: OutputStream) {
        file.fileUploader = FileUploader(from, sendLength, file,
            file.getInputStream(context) ?: throw NullPointerException("InputStream is null of file ${file.name}"), outputStream, this)
        add(file)
        file.fileUploader?.start()
    }

    override fun remove(file: WebFile) {
        file.fileUploader?.stop()
        super.remove(file)
    }
}