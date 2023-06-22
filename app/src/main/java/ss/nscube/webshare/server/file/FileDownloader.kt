package ss.nscube.webshare.server.file

import java.io.InputStream
import java.io.OutputStream

class FileDownloader (
    val file: WebFile,
    private val inputStream: InputStream?,
    private val outputStream: OutputStream,
    private val downloaderListener: FileTransferListener
    ) {
    private val length = file.length
    val progressCalculator = ProgressCalculator(length)
    var isCanceled = false
    private var isRunning = true

    fun setProgressUpdater(onProgressUpdate: (Int, Long, Long) -> Unit) {
        progressCalculator.onProgressUpdate = onProgressUpdate
    }


    fun start() {
        var bufLen = length.toInt().coerceAtMost(1024 * 8)
        var readLen: Int
        var totalRead: Long = 0
        var newBufLen: Long
        val buffer = ByteArray(bufLen)
        try {
            progressCalculator.init()
            while (isRunning) {
                readLen = inputStream!!.read(buffer, 0, bufLen)
                outputStream.write(buffer, 0, readLen)
                totalRead += readLen
                if (totalRead >= length) {
                    progressCalculator.onProgressUpdate(100, 0, 0)
                    break
                }
                progressCalculator.onRead(totalRead, readLen)
                if ((length - totalRead).also { newBufLen = it } < bufLen) {
                    bufLen = newBufLen.toInt()
                }
            }
            outputStream.close()
        } catch (e: Exception) {
            isCanceled = true
            downloaderListener.onCanceled(file)
        } finally {
            if (totalRead != length && !isCanceled) {
                downloaderListener.onCanceled(file)
            }
            if (!isCanceled) {
                downloaderListener.onCompleted(file)
            }
        }
    }

    fun stop() {
        isCanceled = true
        isRunning = false
    }
}