package ss.nscube.webshare.core.server.repo

import android.content.Context
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.graphics.Canvas
import android.graphics.drawable.AdaptiveIconDrawable
import android.graphics.drawable.BitmapDrawable
import android.graphics.drawable.Drawable
import android.graphics.drawable.LayerDrawable
import android.os.Build
import ss.nscube.webshare.core.server.repo.file.WebFile


object WebFileUtil {
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