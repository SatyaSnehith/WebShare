package ss.nscube.webshare.core.server.repo.item

abstract class WSItem(
    val id: Int = createId()
) {

    companion object {
        private var currentId = 0
        private val mutex = Any()

        fun createId(): Int {
            synchronized(mutex) {
                return currentId++
            }
        }
    }
}