package ss.nscube.webshare.server.user

import ss.nscube.webshare.server.HTTPServer
import ss.nscube.webshare.server.file.AppFile
import ss.nscube.webshare.server.file.WebFile
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.log
import kotlin.collections.ArrayList

class FileManager(val server: HTTPServer) {
    val mutex = Any()
    val files: ArrayList<WebFile> = ArrayList()
    val observers: ArrayList<SelectionUpdateObserver> = ArrayList()

    val selectedFiles: ArrayList<WebFile>
        get() {
            return files.filter {
                it.fileType == WebFileUtil.TypeSelected
            } as ArrayList<WebFile>
        }

    val maxFileCount = 2000

    fun getReceivedFilesLength(): Long {
        var length = 0L
        for (file in files) if (file.fileType == WebFileUtil.TypeReceived) length += file.length
        return length
    }

    private fun add(file: WebFile): Boolean {
        if (files.size >= maxFileCount) return false
        synchronized(mutex) {
            files.add(file)
        }
        return true
    }

    fun remove(appFile: AppFile) {
        val file = files.find { it.file == appFile.file  } ?: return
        remove(file)
    }

    fun remove(file: WebFile) {
        synchronized(mutex) {
            files.remove(file)
        }
        server.signedUrlList.removeFile(file)
    }
    
    fun get(id: Int): WebFile? {
        val index = files.binarySearch { it.id - id }
        return if (index < 0) null
        else files[index]
    }
    
    fun addReceived(file: WebFile): Boolean {
        file.fileType = WebFileUtil.TypeReceived
        val result = add(file)
//        callOnUpdate()
        return result
    }

    fun addSelection(file: WebFile): Boolean {
        file.fileType = WebFileUtil.TypeSelected
        val result = add(file)
        callOnUpdate()
        return result
    }

    fun removeSelection(file: WebFile, callBack: Boolean = true) {
        remove(file)
        if (callBack) callOnRemoved(file)
        callOnUpdate()
    }

    fun removeAllSelection() {
        val removeFiles = HashSet<WebFile>()
        for (file in files) if (file.fileType == WebFileUtil.TypeSelected) removeFiles.add(file)
        synchronized(mutex) { files.removeAll(removeFiles) }
        for (file in removeFiles) server.signedUrlList.removeFile(file)
        callOnRemovedAll()
        callOnUpdate()
    }

    fun callOnUpdate() {
        log("SELECTION callOnUpdate ${observers.size}")
        for (listener in observers) listener.onUpdate()
    }

    fun callOnRemoved(file: WebFile) {
        log("SELECTION callOnRemoved ${observers.size}")
        for (listener in observers) listener.onRemoved(file)
    }

    fun callOnRemovedAll() {
        log("SELECTION callOnRemovedAll ${observers.size}")
        for (listener in observers) listener.onRemovedAll()
    }
}

interface SelectionUpdateObserver {
    fun onUpdate()
    fun onRemoved(file: WebFile)
    fun onRemovedAll()
}

//    fun updateBitmap(file: WebFile) {
//        if (file.extension?.equals("apk") == true) {
//            val appFile = file
////            appFile.imageBitmap = WebFileUtil.getBitmap()
//            //            if (appFile.getImageByteArray() != null) Log.d("TAG", "updateBitmap: " + appFile.getImageByteArray().length);
//            return
//        }
//        val myOptions = RequestOptions()
//            .centerCrop()
//            .override(300, 300)
//        if (file.type == WebFileUtil.Image || file.type == WebFileUtil.Video) {
////            long start = System.currentTimeMillis();
//            try {
//                Glide
//                    .with(context)
//                    .asBitmap()
//                    .apply(myOptions)
//                    .load(file.uri)
//                    .into(object : CustomTarget<Bitmap?>() {
//                        override fun onResourceReady(
//                            resource: Bitmap,
//                            transition: Transition<in Bitmap?>?
//                        ) {
//                            CoroutineScope(Dispatchers.IO).async {
//                                val out = ByteArrayOutputStream()
//                                resource.compress(Bitmap.CompressFormat.PNG, 100, out)
//                                //                                    Log.d("TAG", "run: " + (System.currentTimeMillis() - start));
//                            }
//                        }
//
//                        override fun onLoadCleared(placeholder: Drawable?) {}
//                    })
//            } catch (e: Exception) {
//            }
//        }
//    }