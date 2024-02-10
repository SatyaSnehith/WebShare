package ss.nscube.webshare.core.server.repo.item

import android.content.Context
import android.net.Uri
import ss.nscube.webshare.core.server.repo.user.User
import java.io.InputStream
import java.io.OutputStream

class WSUri(
    user: User,
    name: String,
    length: Long,
    val uri: Uri
): WSFileItem(user, name, length) {

    fun getInputStream(context: Context): InputStream? {
        return context.contentResolver.openInputStream(uri)
    }

    fun getOutputStream(context: Context): OutputStream? {
        return context.contentResolver.openOutputStream(uri)
    }

}