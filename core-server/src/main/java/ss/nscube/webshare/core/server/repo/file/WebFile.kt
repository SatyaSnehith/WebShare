package ss.nscube.webshare.core.server.repo.file

import android.content.Context
import android.graphics.Bitmap
import android.graphics.drawable.Drawable
import android.net.Uri
import android.util.Base64
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import ss.nscube.webshare.core.server.log
import ss.nscube.webshare.core.server.repo.FileType
import ss.nscube.webshare.core.server.repo.FileUtil
import ss.nscube.webshare.core.server.repo.SelectionType
import ss.nscube.webshare.core.server.repo.TransferState
import ss.nscube.webshare.core.server.repo.WebFileUtil
import ss.nscube.webshare.core.server.repo.user.User
import java.io.*
import java.util.*

class WebFile() {
    var id: Int = -1

    var uri: Uri? = null

    var file: File? = null

    var name: String = ""
        set(value) {
            field = value
            val lastDotIndex = value.lastIndexOf('.')
            val extension = if (lastDotIndex == -1) null else value.substring(lastDotIndex + 1).lowercase(Locale.getDefault())
            mime = FileUtil.getMimeTypeFromExtension(extension)
            type = FileUtil.getFileType(extension, mime)
            base64Name = Base64.encodeToString(value.toByteArray(), Base64.NO_WRAP)
        }

    var base64Name: String = ""

    var type: FileType = FileType.Document

    var fileType: SelectionType = SelectionType.TypeNone

    var mime: String = FileUtil.OctetStream

    var length: Long = -1

    var user: User? = null

    var appPackageName: String? = null

    var duration: Int? = null

    var resolution: String? = null

    var uploadedTime: Long = System.currentTimeMillis()

    var state: TransferState = TransferState.Completed

    var imageByteArray: ByteArray? = null

    var drawable: Drawable? = null
        set(value) {
            field = value
            if (value == null) {
                imageByteArray = null
                return
            }
            MainScope().launch(Dispatchers.IO) {
                val imageBitmap = WebFileUtil.getBitmap(field)
                val stream = ByteArrayOutputStream()
                imageBitmap?.compress(Bitmap.CompressFormat.PNG, 100, stream)
                imageByteArray = stream.toByteArray()
            }
        }

    init {
        updateId()
    }

    fun updateId() {
        id = synchronized(counterMutex) { idCounter++ }
    }

    fun getInputStream(context: Context): InputStream? {
        return if (uri != null) context.contentResolver.openInputStream(uri!!) else if (file != null) FileInputStream(file) else null
    }

    fun getOutputStream(context: Context): OutputStream? {
        return if (uri != null) context.contentResolver.openOutputStream(uri!!) else if (file != null) FileOutputStream(file) else null
    }

    override fun equals(other: Any?): Boolean {
        if (other == null ||
            other !is WebFile ||
            type != other.type) return false
        log("FILE $id == ${other.id} \n $name == ${other.name} \n $type == ${other.type} \n $uri == ${other.uri} \n $file == ${other.file}")
        if (id == other.id) return true
        if (other.uri?.equals(this.uri) == true) return true
        if (other.file?.absolutePath?.equals(this.file?.absolutePath) == true) return true
        if (appPackageName?.equals(other.appPackageName) == true) return true
        return false
    }

    override fun hashCode(): Int {
        return id.hashCode()
    }

    companion object {
        var idCounter: Int = 0
        val counterMutex = Any()
    }
}
