package ss.nscube.webshare.core.server.repo

import android.util.Base64
import ss.nscube.webshare.core.server.repo.user.User

class Text(val fromUser: User, val value: String, val id: Int, val time: Long) {
    var isSelected = false
    var valueBase64 = Base64.encodeToString(value.toByteArray(), Base64.NO_WRAP)
}