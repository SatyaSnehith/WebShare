package ss.nscube.webshare.server.accounts

import android.util.Base64

class Text(val fromAccount: Account, val value: String, val id: Int, val time: Long) {
    var isSelected = false
    var valueBase64 = Base64.encodeToString(value.toByteArray(), Base64.NO_WRAP)
}