package ss.nscube.webshare.core.server.repo.item

import android.util.Base64
import ss.nscube.webshare.core.server.repo.user.User
import java.util.Locale

abstract class WSFileItem(
    val user: User,
    val name: String,
    val length: Long
): WSItem() {
    val extension: String = getFileExtensionFromUrl(name)
    val mime: String = MimeTypes[extension]
    val itemType: WSItemType = getFileType(extension, mime)
    val base64Name: String = Base64.encodeToString(name.toByteArray(), Base64.NO_WRAP)
    val fromSelection = true

    companion object {
        fun getFileType(extension: String, mime: String): WSItemType {
            return when {
                mime.startsWith(WSItemType.Image.typeName) -> WSItemType.Image
                mime.startsWith(WSItemType.Video.typeName) -> WSItemType.Video
                mime.startsWith(WSItemType.Audio.typeName) -> WSItemType.Audio
                extension.equals("apk", true) -> WSItemType.App
                else -> WSItemType.Document
            }
        }

        fun getFileExtensionFromUrl(name: String): String {
            val lastDotIndex = name.lastIndexOf('.')
            return if (lastDotIndex == -1) "" else name.substring(lastDotIndex + 1).lowercase(
                Locale.getDefault())
        }
    }
}