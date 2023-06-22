package ss.nscube.webshare.utils.scan.models

import android.net.Uri

class Image(
    override val name: String,
    override val length: Long,
    override val uri: Uri,
    val resolution: String,
    val date: Long,
    override var isSelected: Boolean = false
): Data()