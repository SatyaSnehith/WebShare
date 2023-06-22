package ss.nscube.webshare.server.headers

enum class ContentTypes(val type: String) {
    FORM("application/x-www-form-urlencoded"),
    MULTIPART("multipart/form-data"),
    JSON_DATA("application/json"),
    PLAIN_TEXT("text/plain")
}