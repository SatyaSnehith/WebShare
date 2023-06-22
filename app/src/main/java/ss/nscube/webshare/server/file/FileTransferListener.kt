package ss.nscube.webshare.server.file

interface FileTransferListener {
    fun onCanceled(file: WebFile)
    fun onCompleted(file: WebFile)
}