package ss.nscube.webshare.core.server.repo.item

class WSFileManager: ArrayList<WSFileItem>() {
    private val lock = Any()

    override fun add(element: WSFileItem): Boolean {
        synchronized(lock) {
            return super.add(element)
        }
    }

    override fun removeAt(index: Int): WSFileItem {
        synchronized(lock) {
            return super.removeAt(index)
        }
    }


}