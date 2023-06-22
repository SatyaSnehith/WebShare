package ss.nscube.webshare.server.file

import ss.nscube.webshare.utils.FileState
import ss.nscube.webshare.utils.log

open class TransferManager: FileTransferListener {
    var mutex: Any = Any()
    var files: ArrayList<WebFile> = ArrayList()
    val observerList = ArrayList<FileTransferObserver>()

    fun add(file: WebFile) {
        file.state = FileState.Loading
        synchronized(mutex) {
            files.add(file)
        }
        for (observer in observerList) observer.onFileAdded()
    }

    open fun remove(file: WebFile) {
        val fileIndex = files.indexOf(file)
        if (fileIndex == -1) return
        synchronized(mutex) {
            files.remove(file)
        }
        file.file?.delete()
        file.state = FileState.Canceled
        for ((i, f) in files.withIndex())
            log("RECEIVE onFileRemoved file $i ${f.name}")
        log("RECEIVE onFileRemoved remove ${file.name} $fileIndex")
        for (observer in observerList) observer.onFileRemoved(file, fileIndex)
    }

    fun stateChange(file: WebFile) {
        val fileIndex = files.indexOf(file)
        if (fileIndex == -1) return
        for (observer in observerList) observer.onStatusChanged(fileIndex)
    }

    override fun onCanceled(file: WebFile) {
        file.state = FileState.Canceled
        remove(file)
    }

    override fun onCompleted(file: WebFile) {
        file.state = FileState.Completed
        stateChange(file)
    }

    fun stopAll() {
        val removeFileList = ArrayList<WebFile>()
        for (file in files) if (file.state == FileState.Loading) removeFileList.add(file)
        for (file in removeFileList) remove(file)
    }
}