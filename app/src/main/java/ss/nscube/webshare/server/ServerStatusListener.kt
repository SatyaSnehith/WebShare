package ss.nscube.webshare.server

interface ServerStatusListener {
    fun onStarted()
    fun onStopped()
}