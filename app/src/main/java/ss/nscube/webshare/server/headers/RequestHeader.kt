package ss.nscube.webshare.server.headers

import ss.nscube.webshare.server.BadRequestException
import ss.nscube.webshare.server.utils.Util
import kotlin.collections.ArrayList

class RequestHeader: Headers() {
    private val ranges: ArrayList<Range> = ArrayList()
    var contentType: ContentTypes? = null
    var contentLength: Long? = null
    var boundary: String? = null
    private var cookies: Cookies? = null
    var hasAuth: Boolean = false
    var contentDisposition: ContentDisposition? = null
    var auth: String? = null
    var pin: String? = null

    @Throws(Exception::class)
    override fun addHeader(header: Header) {
        super.add(header)
        when(header.name) {
            Range -> addRange(header.value)
            ContentType -> addContentType(header.value)
            Cookie -> addCookie(header.value)
            ContentLength -> addContentLength(header.value)
            Authorization -> addAuthorization(header.value)
            ContentDisposition -> addContentDisposition(header.value)
        }
    }

    @Throws(Exception::class)
    private fun addAuthorization(value: String) {
        val authParams = value.split(' ').filter { it.isNotEmpty() }
        if (authParams.size != 2) throw BadRequestException("Authorization header value not in format of {<auth-scheme> <credentials>} $value ")
        if (!authParams[0].equals("basic", true)) throw BadRequestException("Authorization header auth-scheme is not basic - $value ")
        hasAuth = true
        auth = authParams[1]
    }

    private fun addContentDisposition(value: String) {
        contentDisposition = getContentDisposition(value) ?:
            throw BadRequestException("file post request must contain contentDisposition")
        if (Util.hasNull(contentDisposition!!.fileName, contentDisposition!!.dataLength))
            throw BadRequestException("file post request must contain contentDisposition, filename and length")
    }

    private fun addContentLength(value: String) {
        contentLength = Util.getLong(value)
    }

    private fun addRange(value: String) {
        var start: Long = -1
        var end: Long = -1
        val rangeStr = value.substring(6)
        val str = rangeStr.split(',')
        for (i in str) {
            val str2 = i.trim().split('-')
            if (str2.isNotEmpty()) {
                start = Util.getLong(str2[0])
            }
            if (str2.size > 1) {
                end = Util.getLong(str2[1])
            }
            ranges.add(Range(start, end))
        }
    }

    fun getFirstRange() = if (ranges.size > 0) ranges[0] else null

    private fun addContentType(value: String) {
        val semiColonPos = value.indexOf(';')
        val type = if (semiColonPos == -1) {
           value
        } else {
            val list = value.split(';')
            evaluateBoundary(value)
            list[0]
        }
        contentType = ContentTypes.values().find { it.type == type }
    }

    private fun evaluateBoundary(contentType: String) {
        val boundaryPos = contentType.indexOf("boundary")
        if (boundaryPos == -1) return
        boundary = "--" + contentType.substring(boundaryPos + 9)
    }

    private fun addCookie(value: String) {
        cookies = Cookies()
        if (value.contains(';')) {
            val cookieStrings = value.split(';')
            for (pair in cookieStrings) cookies!!.add(pair.trim())
        } else {
            cookies!!.add(value.trim())
        }
    }

    companion object {
        private const val ContentDispositionName = "name="
        private const val ContentDispositionFileName = "filename="

        fun getContentDisposition(value: String): ContentDisposition? {
            if (value.contains(';')) {
                val parts = value.split(';')
                val type = parts[0].trim()
                var name: String? = null
                var fileName: String? = null
                for (i in 1 until parts.size) {
                    val part = parts[i].trim()
                    if (part.startsWith(ContentDispositionName)) {
                        name = part.removePrefix(ContentDispositionName).trim('"')
                    }
                    if (part.startsWith(ContentDispositionFileName)) {
                        fileName = part.removePrefix(ContentDispositionFileName).trim('"')
                    }
                }
                return ContentDisposition(type, name, fileName)
            }
            return null
        }
    }
}