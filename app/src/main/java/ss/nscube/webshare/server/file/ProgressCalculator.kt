package ss.nscube.webshare.server.file

import ss.nscube.webshare.utils.log

class ProgressCalculator(val length: Long, var onProgressUpdate: (Int, Long, Long) -> Unit = {_,_,_ ->}) {
    private var read = 0L
    var time = System.currentTimeMillis()
    val frequecy = 1000
    var percent = 0
    var transferred = 0L
    var eta = 0L

    fun init() {
        read = 0L
        time = System.currentTimeMillis()
    }

    fun onRead(totalRead: Long, readLen: Int) {
        read += readLen
        val elapsedTime: Long = System.currentTimeMillis() - time
        if (elapsedTime >= frequecy) {
            val dif = frequecy - elapsedTime
            val transferSpeed = if (dif == 0L) {
                read
            } else {
                val perMilli = read / elapsedTime
                read - (perMilli * dif)
            }
            val remainingBytes = length - totalRead
            log("ETA $remainingBytes $transferSpeed ${remainingBytes / transferSpeed}")
            percent = ((totalRead.toFloat() / length) * 100).toInt()
            transferred = totalRead
            eta = remainingBytes / transferSpeed
            onProgressUpdate(percent, transferred, eta)
            //reset
            time = System.currentTimeMillis()
            read = 0L
        }
    }
}