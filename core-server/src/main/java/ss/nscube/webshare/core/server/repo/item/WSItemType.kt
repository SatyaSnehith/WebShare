package ss.nscube.webshare.core.server.repo.item

enum class WSItemType(val typeName: String) {
    Text("text"),
    Image("image"),
    Video("video"),
    Audio("audio"),
    Document("document"),
    App("app");

    companion object {
        fun fromName(name: String): WSItemType? {
            return WSItemType.values().find { it.typeName == name }
        }
    }
}