package ss.nscube.webshare.server.headers

class ContentDisposition(val dataType: String, val name: String? = null, val fileName: String? = null) {
    var type: String? = null
    var dataLength: Long? = null
    init {
        val colonPos = name!!.indexOf(':')
        if (colonPos > -1) {
            type = name.substring(0, colonPos)
            dataLength = try { name.substring(colonPos + 1).toLong() } catch (e: Exception) { null }
        }
    }
}