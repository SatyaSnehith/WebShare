package ss.nscube.webshare.server.file

import java.io.IOException
import java.io.InputStream
import java.io.OutputStream
import java.lang.Exception

class FileUploader(
    val from: Long,
    val sendLength: Long,
    val file: WebFile,
    val inputStream: InputStream,
    val outputStream: OutputStream,
    private val uploaderListener: FileTransferListener
) {
    private val length = Math.min(sendLength, file.length)
    var transferredBytes: Long = 0
    val progressCalculator = ProgressCalculator(length)
    var isCanceled = false
    var updateProgressCallCount = 0
    var onProgressUpdate: (Int, Long, Long) -> Unit = {_,_,_ ->}

    private var isRunning = true
    fun start() {
        var bufLen = length.toInt().coerceAtMost(4096 * 4)
        val buffer = ByteArray(bufLen)
        var newBufLen: Long
        var readLen: Int
        var time: Long
        var totalRead: Long = 0
        try {
            if (from > 0) {
                skip(from)
            }
            while (inputStream.read(buffer, 0, bufLen).also { readLen = it } > 0 && isRunning) {
                time = System.currentTimeMillis()
                outputStream.write(buffer, 0, readLen)
                outputStream.flush()
                totalRead += readLen.toLong()
                transferredBytes = totalRead
                progressCalculator.onRead(totalRead, readLen)
                if ((length - totalRead).also { newBufLen = it } < bufLen) {
                    bufLen = newBufLen.toInt()
                }
            }
            inputStream.close()
        } catch (e: IOException) {
            isCanceled = true
            uploaderListener.onCanceled(file)
        } finally {
            if (!isCanceled) {
                uploaderListener.onCompleted(file)
            }
        }
    }

    @Throws(IOException::class)
    private fun skip(n: Long) {
        var n = n
        while (n > 0) {
            n -= inputStream.skip(n)
        }
    }

    fun stop() {
        isRunning = false
        try {
            outputStream.close()
        } catch (e: Exception) {
        }
    }
}
