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
import androidx.core.net.toUri
import androidx.documentfile.provider.DocumentFile
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.bumptech.glide.request.target.CustomTarget
import com.bumptech.glide.request.transition.Transition
import ss.nscube.webshare.server.file.AppFile
import ss.nscube.webshare.server.file.WebFile
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.utils.scan.models.*
import java.io.ByteArrayOutputStream
import java.io.File
import java.security.AccessController.getContext


object WebFileUtil {
    const val Image = "image"
    const val Audio = "audio"
    const val Video = "video"
    const val App = "app"
    const val Document = "document"
//    const val File = "file"

    const val TypeNone = 0
    const val TypeSelected = 1
    const val TypeReceived = 2

    fun addImage(context: Context, file: WebFile) {
        val myOptions = RequestOptions()
            .centerCrop()
            .override(300, 300)
        Glide
            .with(context)
            .asBitmap()
            .apply(myOptions)
            .load(file.uri)
            .into(object : CustomTarget<Bitmap?>() {
                override fun onResourceReady(
                    resource: Bitmap,
                    transition: Transition<in Bitmap?>?
                ) {
                    val out = ByteArrayOutputStream()
                    resource.compress(Bitmap.CompressFormat.PNG, 100, out)
                    file.imageByteArray = out.toByteArray()
                }

                override fun onLoadCleared(placeholder: Drawable?) {}
            })
    }

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
        var fileData: Data? = null
        var name: String? = null
        var size: Long? = null
        context.contentResolver.query(uri, nameSizeProjection, null, null, null)?.use { cursor ->
            cursor.moveToFirst()
            val nameIndex = cursor.getColumnIndex(OpenableColumns.DISPLAY_NAME)
            val sizeIndex = cursor.getColumnIndex(OpenableColumns.SIZE)
            name = if (nameIndex > -1) cursor.getString(nameIndex) else null
            size = if (sizeIndex > -1) cursor.getLong(sizeIndex) else null
        }
        if (name == null || size == null) return null
        log("URI getFile $name $size")
//        val documentFile = DocumentFile.fromSingleUri(context, uri) ?: return null
        fileData = when(FileUtil.getFileType(name!!)) {
            Image -> Image(name!!, size!!, uri, "", 0L)
            Video -> Video(name!!, size!!, 0, uri, 0L)
            Audio -> Audio(name!!, size!!, 0, uri, 0L)
            App -> getAppFromUri(context, uri, name!!)
            else -> Document(name!!, size!!, uri)
        }
        return fileData
    }

    fun getAppFromUri(context: Context, uri: Uri, fileName: String): App? {
        var app: App? = null
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
            val fileDescriptor = context.contentResolver.openFileDescriptor(uri, "r") ?: return null
            val packageArchiveInfo = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                context.packageManager.getPackageArchiveInfo("/proc/self/fd/" + fileDescriptor.fd, PackageManager.PackageInfoFlags.of(0L))
            } else {
                context.packageManager.getPackageArchiveInfo("/proc/self/fd/" + fileDescriptor.fd, 0)
            }
            log("AppLog got APK info?${packageArchiveInfo != null}")
            if (packageArchiveInfo != null) {
//                packageArchiveInfo.activities[0].labelRes
                val applicationInfo = packageArchiveInfo.applicationInfo
                var name = fileName
                if (name.endsWith(".apk", ignoreCase = true)) {
                    name = name.removeSuffix(".apk")
                }
//                if (packageArchiveInfo.applicationInfo.activityInfo.labelRes != 0) {
//                    context.packageManager.getResourcesForApplication(applicationInfo).getString(ri.activityInfo.labelRes)
//                } else {
//                    applicationInfo.loadLabel(context.packageManager).toString() ?: fileName
//                }
                val apkFile = File(applicationInfo.publicSourceDir)
                log("AppLog appLabel: $name $fileName ${fileName.endsWith(".apk")}")
                app = App(
                        "${name}.apk",
                        name,
                        apkFile.length(),
                        applicationInfo.loadIcon(context.packageManager),
                        applicationInfo,
                        apkFile.toUri()
                    )
            }
            fileDescriptor.close()
        } catch (e: Exception) {
            e.printStackTrace()
            log("AppLog failed to get app info: $e")
        }
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

    private fun getFormattedDuration(duration: Int) : String =
        when {
            duration == 0 -> {
                "00"
            }
            duration < 10 -> {
                "0$duration"
            }
            else -> {
                "$duration"
            }
        }

    fun getAppIconFromFile(context: Context, path: String): Drawable? {
        val start = System.currentTimeMillis()
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
        var imageBitmap: Bitmap? = null
        if (drawable is BitmapDrawable) {
            imageBitmap = (drawable as? BitmapDrawable)?.bitmap
        }
        if (imageBitmap == null && Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val icon = drawable as? AdaptiveIconDrawable

            val drr = arrayOfNulls<Drawable>(2)
            drr[0] = icon?.background
            drr[1] = icon?.foreground

            val layerDrawable = LayerDrawable(drr)
            val bitmap = Bitmap.createBitmap(Math.max(icon?.intrinsicWidth ?: 1, 1), Math.max(icon?.intrinsicHeight ?: 1, 1), Bitmap.Config.ARGB_8888)

            val canvas = Canvas(bitmap!!)

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