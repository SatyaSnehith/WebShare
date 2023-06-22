package ss.nscube.webshare.server.headers

import java.text.SimpleDateFormat
import java.util.*
import kotlin.collections.ArrayList

open class Headers : ArrayList<Header>() {

    @Throws(IllegalArgumentException::class)
    fun addHeader(line: String) {
        addHeader(getHeader(line))
    }

    open fun addHeader(header: Header) {
        add(header)
    }

    open fun addHeader(name: String, value: String) {
        addHeader(Header(name, value))
    }

    fun setServer(name: String) {
        addHeader(Server, name)
    }

    fun setContentRange(from: Long, end: Long, length: Long) {
        addHeader(ContentRange, "bytes $from-$end/$length")
    }

    fun setContentDisposition(type: String, fileName: String) {
        addHeader(ContentDisposition, "$type; filename=\"$fileName\"")
    }

    fun setContentType(type: String) {
        addHeader(ContentType, type)
    }

    fun setCacheControl(type: String) {
        addHeader(CacheControl, type)
    }

    fun setContentLength(length: Long) {
        addHeader(ContentLength, length.toString())
    }

    fun setExpires(time: Long) {
        val calendar: Calendar = Calendar.getInstance()
        calendar.timeInMillis = time
        val dateFormat = SimpleDateFormat("EEE, dd MMM yyyy HH:mm:ss z", Locale.US)
        dateFormat.timeZone = TimeZone.getTimeZone("GMT")
        addHeader(Expires, dateFormat.format(calendar.time))
    }

    fun getValue(name: String): String? {
        var value: String? = null
        for (i in 0 until size) if (this[i].name == name) value = this[i].value
        return value
    }

    operator fun contains(name: String): Boolean {
        for (i in 0 until size) if (this[i].name == name) return true
        return false
    }

    companion object {
        const val MaxAgeCache = "public, max-age=31536000"
        const val HourAgeCache = "max-age=3600"

        //common
        const val Connection = "Connection"
        const val ContentType = "Content-Type"

        //request headers
        const val Range = "Range"
        const val UserAgent = "User-Agent"
        const val Accept = "Accept"
        const val AcceptLanguage = "Accept-Language"
        const val Host = "Host"
        const val AcceptEncoding = "Accept-Encoding"
        const val CacheControl = "Cache-Control"
        const val Cookie = "Cookie"
        const val ContentDisposition = "Content-Disposition"
        const val Authorization = "Authorization"

        //response headers
        const val Server = "Server"
        const val ContentLength = "Content-Length"
        const val ContentRange = "Content-Range"
        const val ContentEncoding = "Content-Encoding"
        const val Expires = "Expires"
        const val Date = "Date"
        const val SetCookie = "Set-Cookie"
        const val Age = "Age"
        const val TransferEncoding = "Transfer-Encoding"
        const val Vary = "Vary"

        const val ContentDispositionTypeInline = "inline"
        const val ContentDispositionTypeAttachment = "attachment"

        @Throws(IllegalArgumentException::class)
        fun getHeader(line: String): Header {
            val split = line.indexOf(":")
            if (split != -1) {
                return Header(line.substring(0, split).trim(), line.substring(split + 1).trim())
            } else throw IllegalArgumentException()
        }
    }

}