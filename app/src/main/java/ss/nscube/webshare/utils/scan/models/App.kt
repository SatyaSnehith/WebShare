package ss.nscube.webshare.utils.scan.models

import android.graphics.drawable.Drawable
import android.net.Uri

class App(
    override val name: String,
    val label: String,
    override val length: Long,
    val drawable: Drawable?,
    override val uri: Uri,
): Data()