package ss.nscube.webshare.ui.utils

import ss.nscube.webshare.utils.log

object TimeCal {
    val programMap = HashMap<String, Program>()
    val AppStart = "appStart"
    val Example = "example"

    fun test() {
        Thread() {
            Thread.sleep(10)
            start(Example)
            Thread.sleep(10)
            stop(this, Example)
            Thread.sleep(10)
            start(Example)
            Thread.sleep(10)
            stop(this, Example)
            start(Example)
            Thread.sleep(10)
            stop(this, Example)
        }.start()
    }

    fun getName(any: Any) = any::class.java.simpleName

    fun createOrget(key: String): Program? {
        return if (programMap.containsKey(key)) programMap[key]
        else {
            val program = Program()
            programMap[key] = program
            program
        }
    }

    fun start(key: String) {
        createOrget(key)?.start()
    }

    fun stop(any: Any, key: String) {
        programMap[key]?.stop(key, if (any is String) any else any.javaClass.simpleName)
    }

    fun getDuration(time: Long): String {
        val taken = time
        val millis = taken % 1000
        var secs = taken / 1000
        var mins = secs / 60
        val hour = mins / 60
        secs %= 60
        mins %= 60
        val hms = "${getIfNonZero(hour, "h")}${getIfNonZero(mins, "m")}${getIfNonZero(secs, "s")}".trim()
        return (if (hms.isEmpty()) " ${millis}millis" else "$hms ${getIfNonZero(millis, "millis")}").trim()
    }

    fun getIfNonZero(time: Long, text: String): String {
        return if (time == 0L) "" else "$time$text "
    }
}

class Program {
    var difStartTime: Long = -1
    var difTime: Long = -1
    var startTime: Long = -1
    var totalTime: Long = 0

    fun start() {
        startTime = System.currentTimeMillis()
        difTime = System.currentTimeMillis() - difStartTime
        if (difStartTime > 0) totalTime += difTime
    }

    fun stop(key: String, log: String) {
        val time = System.currentTimeMillis() - startTime
        val difText = if (difStartTime == -1L) "start" else "dif: ${TimeCal.getDuration(difTime)}"
        totalTime += time
        log("TIME $key:$log $difText, time: ${TimeCal.getDuration(time)}, total: ${TimeCal.getDuration(totalTime)}")
        difStartTime = System.currentTimeMillis()
    }

}