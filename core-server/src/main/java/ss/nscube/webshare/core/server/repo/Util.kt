package ss.nscube.webshare.core.server.repo

import java.text.SimpleDateFormat
import java.util.*

object Util {
    fun hasNull(vararg any: Any?) = null in any

    fun getInteger(num: String): Int {
        return try {
            num.toInt()
        } catch (e: Exception) {
            -1
        }
    }

    fun getLong(num: String): Long {
        return try {
            num.toLong()
        } catch (e: Exception) {
            -1
        }
    }

    fun isValidInactiveMinutes(minutes: Int): Boolean {
        if (minutes in arrayOf(15, 30, 45) || (minutes % 60 == 0 && (minutes / 60 in 1..24))) return true
        return false
    }

    var timeZone: String? = null

    fun getCurrentTimeZone(): String? {
        val cal = Calendar.getInstance()
        val milliDiff = cal[Calendar.ZONE_OFFSET]
        val ids = TimeZone.getAvailableIDs()
        var name: String? = null
        for (id in ids) {
            val tz = TimeZone.getTimeZone(id)
            if (tz.rawOffset == milliDiff) {
                name = id
                break
            }
        }
        return name
    }

    fun getZipDateName(): String {
        if (timeZone == null) timeZone = getCurrentTimeZone()
        val dateFormat = SimpleDateFormat("yyyyMMdd'T'HHmmssSSS'Z'", Locale.getDefault())
        if (timeZone != null) dateFormat.timeZone = TimeZone.getTimeZone(timeZone)
        return dateFormat.format(System.currentTimeMillis()) + ".zip"
    }
}