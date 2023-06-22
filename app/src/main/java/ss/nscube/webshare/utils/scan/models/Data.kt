package ss.nscube.webshare.utils.scan.models

import android.net.Uri

abstract class Data {
    abstract val name: String
    abstract val length: Long
    abstract val uri: Uri
    open var isSelected = false
}

class Document(override val name: String, override val length: Long, override val uri: Uri) : Data()