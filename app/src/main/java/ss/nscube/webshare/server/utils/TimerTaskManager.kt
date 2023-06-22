package ss.nscube.webshare.server.utils

import java.util.*
import kotlin.collections.ArrayList

class TimerTaskManager {
    val timer = Timer()
    val taskList = ArrayList<TimerTask>()

    fun schecule(period: Long, block: () -> Unit) {
        val task = createTask(block)
        taskList.add(task)
        timer.schedule(task, period, period)
    }

    fun cancelAll() {
        for (task in taskList) task.cancel()
    }

    fun createTask(block: () -> Unit) = object: TimerTask() {
        override fun run() {
            block()
        }
    }
}