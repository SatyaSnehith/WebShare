package ss.nscube.webshare.core.server.repo

enum class FileType(val type: String) {
    Image("image"),
    Audio("audio"),
    Video("video"),
    App("app"),
    Document("document")
}