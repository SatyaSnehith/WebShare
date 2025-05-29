package ss.nscube.webshare.utils

import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.graphics.Canvas
import android.graphics.drawable.AdaptiveIconDrawable
import android.graphics.drawable.BitmapDrawable
import android.graphics.drawable.Drawable
import android.graphics.drawable.LayerDrawable
import android.net.Uri
import android.os.Build
import android.provider.OpenableColumns
import androidx.core.net.toFile
import androidx.core.net.toUri
import androidx.documentfile.provider.DocumentFile
import ss.nscube.webshare.server.file.AppFile
import ss.nscube.webshare.server.file.WebFile
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.utils.scan.models.*
import java.io.File


object WebFileUtil {
    const val Image = "image"
    const val Audio = "audio"
    const val Video = "video"
    const val App = "app"
    const val Document = "document"

    const val TypeNone = 0
    const val TypeSelected = 1
    const val TypeReceived = 2

    fun typeFromData(data: Data): String {
        return when(data) {
            is Image -> Image
            is Video -> Video
            is Audio -> Audio
            is App -> App
            is AppFile -> data.type
            else -> Document
        }
    }

    private val nameSizeProjection = arrayOf(
        OpenableColumns.DISPLAY_NAME,
        OpenableColumns.SIZE,
    )

    fun getFile(context: Context, uri: Uri): Data? {
        val file = try { uri.toFile() } catch (e: Exception) { null }
        var name: String? = file?.name
        var size: Long? = file?.length()
        if (name == null || size == null) context.contentResolver.query(
            uri,
            nameSizeProjection,
            null, null, null)?.use { cursor ->
            cursor.moveToFirst()
            val nameIndex = cursor.getColumnIndex(OpenableColumns.DISPLAY_NAME)
            val sizeIndex = cursor.getColumnIndex(OpenableColumns.SIZE)
            name = if (nameIndex > -1) cursor.getString(nameIndex) else null
            size = if (sizeIndex > -1) cursor.getLong(sizeIndex) else null
        }
        if (name == null || size == null) return null
        log("URI getFile $name $size")
//        val documentFile = DocumentFile.fromSingleUri(context, uri) ?: return null
        return when(FileUtil.getFileType(name!!)) {
            Image -> Image(name!!, size!!, uri, "", 0L)
            Video -> Video(name!!, size!!, 0, uri, 0L)
            Audio -> Audio(name!!, size!!, 0, uri, 0L)
            App -> getAppFromUri(context, uri, name!!, size!!)
            else -> Document(name!!, size!!, uri)
        }
    }

    private fun getAppFromUri(context: Context, uri: Uri, fileName: String, size: Long): App? {
        var app: App? = null
        var name = fileName
        if (name.endsWith(".apk", ignoreCase = true)) {
            name = name.removeSuffix(".apk")
        }
        try {
            val takeFlags = Intent.FLAG_GRANT_READ_URI_PERMISSION or Intent.FLAG_GRANT_WRITE_URI_PERMISSION
            context.grantUriPermission(
                context.packageName,
                uri,
                takeFlags
            )
            context.contentResolver.takePersistableUriPermission(uri, takeFlags)
            val isDocumentUri = DocumentFile.isDocumentUri(context, uri)
            if (!isDocumentUri) return null
            context.contentResolver.openFileDescriptor(uri, "r")?.use { fileDescriptor ->
                val packageArchiveInfo = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                    context.packageManager.getPackageArchiveInfo("/proc/self/fd/" + fileDescriptor.fd, PackageManager.PackageInfoFlags.of(0L))
                } else {
                    context.packageManager.getPackageArchiveInfo("/proc/self/fd/" + fileDescriptor.fd, 0)
                }
                log("AppLog got APK info $fileName ${fileDescriptor.fd} ${fileDescriptor.dup().fd} ${fileDescriptor.canDetectErrors()} ${fileDescriptor.statSize}    ${packageArchiveInfo != null}")
                if (packageArchiveInfo != null) {
    //                packageArchiveInfo.activities[0].labelRes
                    val applicationInfo = packageArchiveInfo.applicationInfo

                    val apkFile = File(applicationInfo.publicSourceDir)
                    log("AppLog appLabel: $name $fileName ${fileName.endsWith(".apk")}")
                    app = App(
                            "${name}.apk",
                            name,
                            apkFile.length(),
                            applicationInfo.loadIcon(context.packageManager),
                            apkFile.toUri()
                        )
                }
            }
        } catch (e: Exception) {
            e.printStackTrace()
            log("AppLog failed to get app info: $e")
        }
        if (app == null) app = App (
            "${name}.apk",
            name,
            size,
            null,
            uri
        )
        return app
    }

    fun getETA(duration: Long) : String {
        var sec = duration / 1000
        var min = sec / 60
        val hour = min / 60
        sec %= 60
        min %= 60
        return String.format("${if (hour > 1) "$hour hours " else ""}${if(min > 0) "$min mins " else ""}$sec secs")
    }

    fun getDuration(duration: Int) : String {
        var sec = (duration / 1000)
        val min = sec / 60
        sec %= 60
        return String.format("%02d : %02d", min, sec)
    }

    fun getAppIconFromFile(context: Context, path: String): Drawable? {
        val pm: PackageManager = context.packageManager
        val pi = if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU) pm.getPackageArchiveInfo(path, 0) else pm.getPackageArchiveInfo(path, PackageManager.PackageInfoFlags.of(0))
        if (pi != null) {
            pi.applicationInfo.sourceDir = path
            pi.applicationInfo.publicSourceDir = path
            return pi.applicationInfo.loadIcon(pm)
        }
        return null
    }

    fun getBitmap(drawable: Drawable?): Bitmap? {
        if (drawable == null) return null
        var imageBitmap: Bitmap? = null
        if (drawable is BitmapDrawable) {
            imageBitmap = drawable.bitmap
        }
        if (imageBitmap == null && Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val icon = drawable as? AdaptiveIconDrawable ?: return null

            val drr = arrayOfNulls<Drawable>(2)
            drr[0] = icon.background
            drr[1] = icon.foreground

            val layerDrawable = LayerDrawable(drr)
            val bitmap = Bitmap.createBitmap(
                icon.intrinsicWidth.coerceAtLeast(1),
                icon.intrinsicHeight.coerceAtLeast(1),
                Bitmap.Config.ARGB_8888
            )

            val canvas = Canvas(bitmap)

            layerDrawable.setBounds(0, 0, canvas.width, canvas.height)
            layerDrawable.draw(canvas)
            imageBitmap = bitmap
        }
        return imageBitmap
    }

    fun isSvg(webFile: WebFile): Boolean {
        return webFile.name.endsWith(".svg")
    }
}

enum class FileState {
    Loading,
    Completed,
    Canceled
}