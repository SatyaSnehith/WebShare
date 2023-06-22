package ss.nscube.webshare.server.headers

data class Range(var start: Long, var end: Long) {
    var length: Long = -1

    init {
        updateLength()
    }

    fun updateLength() {
        length = end - start + 1
    }
}