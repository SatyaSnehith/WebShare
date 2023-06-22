package ss.nscube.webshare.server.headers

import android.util.Base64
import ss.nscube.webshare.server.BadRequestException
import ss.nscube.webshare.server.utils.ServerUtil
import ss.nscube.webshare.server.utils.Util
import ss.nscube.webshare.utils.log
import kotlin.collections.ArrayList

class RequestHeader: Headers() {
    val ranges: ArrayList<Range> = ArrayList()
    var contentType: ContentTypes? = null
    var contentLength: Long? = null
    var boundary: String? = null
    var cookies: Cookies? = null
    var hasAuth: Boolean = false
    var contentDisposition: ContentDisposition? = null
    var hasPin: Boolean = false
    var auth: String? = null
    var accountId: String? = null
    var pin: String? = null

    @Throws(Exception::class)
    override fun addHeader(header: Header) {
        super.add(header)
        evaluateHeader(header)
    }

    private fun evaluateHeader(header: Header) {
        when(header.name) {
            Range -> evaluateRange(header.value)
            ContentType -> evaluateContentType(header.value)
            Cookie -> evaluateCookie(header.value)
            ContentLength -> evaluateContentLength(header.value)
            Authorization -> evaluateAuthorization(header.value)
            ContentDisposition -> evaluateContentDisposition(header.value)
        }
    }

    @Throws(Exception::class)
    private fun evaluateAuthorization(value: String) {
        val authParams = value.split(' ').filter { it.isNotEmpty() }
        if (authParams.size != 2) throw BadRequestException("Authorization header value not in format of {<auth-scheme> <credentials>} $value ")
        if (!authParams[0].equals("basic", true)) throw BadRequestException("Authorization header auth-scheme is not basic - $value ")
        hasAuth = true
        auth = authParams[1]
//        val decoded = try { String(Base64.decode(authParams[1], Base64.NO_WRAP)) }
//        catch (e: Exception) { throw BadRequestException("Authorization header is not in base64 format - $value") }
//        if (decoded.contains(':')) {
//            val credentials = decoded.split(':')
//            if (credentials.size != 2) throw BadRequestException("Authorization header auth must contain a name and secret only - $value ($decoded) ")
//            hasPin = true
//            accountId = credentials[0]
//            pin = credentials[1]
//        } else {
//            accountId = decoded
//        }
    }

    private fun evaluateContentDisposition(value: String) {
        contentDisposition = getContentDisposition(value) ?:
        throw BadRequestException("file post request must contain contentDisposition")
        if (Util.hasNull(contentDisposition!!.fileName, contentDisposition!!.dataLength))
            throw BadRequestException("file post request must contain contentDisposition, filename and length")
    }

    private fun evaluateContentLength(value: String) {
        contentLength = Util.getLong(value)
    }

    private fun evaluateRange(value: String) {
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

    private fun evaluateContentType(value: String) {
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

    private fun evaluateCookie(value: String) {
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