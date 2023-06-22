package ss.nscube.webshare.server.file

interface FileTransferObserver {
    fun onFileAdded()
    fun onFileRemoved(file: WebFile, removedIndex: Int)
    fun onStatusChanged(fileIndex: Int)
}