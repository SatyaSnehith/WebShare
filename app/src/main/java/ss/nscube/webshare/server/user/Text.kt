package ss.nscube.webshare.server.user

import android.util.Base64

class Text(val fromUser: User, val value: String, val id: Int, val time: Long) {
    var isSelected = false
    var valueBase64 = Base64.encodeToString(value.toByteArray(), Base64.NO_WRAP)
}