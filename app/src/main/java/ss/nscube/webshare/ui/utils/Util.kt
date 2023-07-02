package ss.nscube.webshare.ui.utils

import android.animation.ObjectAnimator
import android.animation.PropertyValuesHolder
import android.app.Activity
import android.content.ActivityNotFoundException
import android.content.ClipData
import android.content.ClipDescription.MIMETYPE_TEXT_HTML
import android.content.ClipDescription.MIMETYPE_TEXT_PLAIN
import android.content.ClipboardManager
import android.content.Context
import android.content.Intent
import android.content.res.ColorStateList
import android.graphics.*
import android.graphics.drawable.Drawable
import android.net.Uri
import android.view.View
import android.view.inputmethod.InputMethodManager
import android.widget.EditText
import android.widget.FrameLayout
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.Toast
import androidx.core.content.FileProvider
import androidx.core.text.HtmlCompat
import coil.decode.SvgDecoder
import coil.dispose
import coil.load
import com.bumptech.glide.Glide
import com.bumptech.glide.load.resource.bitmap.CenterCrop
import com.bumptech.glide.load.resource.bitmap.RoundedCorners
import com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions
import com.google.android.material.color.MaterialColors
import com.google.zxing.EncodeHintType
import com.google.zxing.WriterException
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel
import com.google.zxing.qrcode.encoder.Encoder
import ss.nscube.webshare.R
import ss.nscube.webshare.server.HTTPServer
import ss.nscube.webshare.server.file.AppFile
import ss.nscube.webshare.server.file.WebFile
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.log
import ss.nscube.webshare.utils.scan.models.*
import java.io.File
import java.text.SimpleDateFormat
import java.util.*


object Util {
    var todayDate = Calendar.getInstance().apply {
        set(Calendar.HOUR_OF_DAY, 0)
        set(Calendar.MINUTE, 0)
        set(Calendar.MILLISECOND, 0)
    }.time

    fun openSoftKeyboard(editText: EditText?) {
        editText?.requestFocus()
        val imm: InputMethodManager? = editText?.context?.getSystemService(Context.INPUT_METHOD_SERVICE) as? InputMethodManager
        imm?.showSoftInput(editText, InputMethodManager.SHOW_IMPLICIT)
    }

    fun closeSoftKeyboard(view: View?) {
        val imm: InputMethodManager? = view?.context?.getSystemService(Context.INPUT_METHOD_SERVICE) as? InputMethodManager
        imm?.hideSoftInputFromWindow(view.windowToken, 0)
    }

    fun closeSoftKeyboard(activity: Activity) {
        var view = activity.currentFocus
        if (view == null) {
            view = View(activity);
        }
        val imm: InputMethodManager? = view.context?.getSystemService(Context.INPUT_METHOD_SERVICE) as? InputMethodManager
        imm?.hideSoftInputFromWindow(view.windowToken, 0)
    }

    fun openFile(context: Context?, file: File) {
        if (context == null) return
        try {
            val intent = Intent(Intent.ACTION_VIEW)
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
            intent.setDataAndType(
                FileProvider.getUriForFile(context, context.packageName + ".provider", file),
                FileUtil.getMimeTypeFromName(file.name)
            )
            context.startActivity(intent)
        } catch (e: ActivityNotFoundException) {
            Toast.makeText(context, "No app found to open this file", Toast.LENGTH_SHORT).show()
        }
    }

    fun sendMail(subject: String, launchActivity: Activity) {
        val intent = Intent(Intent.ACTION_SENDTO)
        intent.data = Uri.parse("mailto:")
        intent.putExtra(Intent.EXTRA_EMAIL, arrayOf("satyasnehith@gmail.com"))
        intent.putExtra(Intent.EXTRA_SUBJECT, subject)
        if (intent.resolveActivity(launchActivity.packageManager) != null) {
            launchActivity.startActivity(intent)
        }
    }

    fun updateTodayDate() {
        todayDate = Calendar.getInstance().apply {
            set(Calendar.HOUR_OF_DAY, 0)
            set(Calendar.MINUTE, 0)
            set(Calendar.MILLISECOND, 0)
        }.time
    }

    fun getDisplayTime(time: Long): String {
        val dateFormat = SimpleDateFormat("${if (Date(time).before(todayDate)) "MMM dd, yyyy " else ""}hh:mm a", Locale.getDefault())
        return dateFormat.format(time)
    }

    fun copyToClipboard(text: CharSequence, activity: Activity) {
        val clip = ClipData.newPlainText("WebShare Text", text)
        (activity.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager).setPrimaryClip(clip)
        Util.toast(activity, "Text copied to clipboard!")
    }

    fun textFromClipBoard(context: Context): CharSequence? {
        val clipboard = (context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager?) ?: return null
        var pasteData: CharSequence? = null
        if (!clipboard.hasPrimaryClip()) return null
        val primaryClipDescription = clipboard.primaryClipDescription ?: return null
        log("textFromClipBoard $primaryClipDescription")
        if (primaryClipDescription.hasMimeType(MIMETYPE_TEXT_PLAIN)) {
            pasteData = clipboard.primaryClip?.getItemAt(0)?.text
        } else if (primaryClipDescription.hasMimeType(MIMETYPE_TEXT_HTML)) {
            pasteData = HtmlCompat.fromHtml(clipboard.primaryClip?.getItemAt(0)?.htmlText ?: return null, HtmlCompat.FROM_HTML_MODE_COMPACT)
        }
        return pasteData
    }



    fun generateQR(url: String, color: Int): Bitmap? {
        try {
            val encodingHints: HashMap<EncodeHintType, Any?> = HashMap()
            encodingHints[EncodeHintType.CHARACTER_SET] = "UTF-8"
            val code = Encoder.encode(url, ErrorCorrectionLevel.L, encodingHints)
            val byteMatrix = code.matrix
            val diameter: Int
            val cWidth: Int = byteMatrix.width
            val cHeight: Int = byteMatrix.height
            val radius: Int = 5
            diameter = 2 * radius
            val gap: Int = 0
            val cPaint = Paint()
            cPaint.style = Paint.Style.FILL
            cPaint.isAntiAlias = true
            cPaint.color = color
            val x = diameter + gap
            val y = diameter + gap
            val bitmap =
                Bitmap.createBitmap((x + 1) * cWidth, (y + 1) * cHeight, Bitmap.Config.ARGB_8888)
            val canvas = Canvas()
            canvas.setBitmap(bitmap)
            var b: Byte
            var cx: Int
            var cy: Int
            for (i in 0 until cWidth) {
                for (j in 0 until cHeight) {
                    if (byteMatrix[i, j].also { b = it }.toInt() == 1) {
                        cx = (i + 1) * x
                        cy = (j + 1) * y
                        canvas.drawRect(
                            RectF(
                                cx.toFloat(), cy.toFloat(),
                                (cx + diameter).toFloat(), (cy + diameter).toFloat()
                            ),  cPaint
                        )
                        //                        canvas.drawCircle(cx, cy, radius, cPaint);
                    }
                }
            }
            return bitmap
        } catch (e: WriterException) {
            e.printStackTrace()
        }
        return null
    }

    fun getQrBitmap(context: Context, link: String): Bitmap? {
        val hints = HashMap<EncodeHintType, Any>()
        hints[EncodeHintType.ERROR_CORRECTION] = ErrorCorrectionLevel.Q
        hints[EncodeHintType.MARGIN] = 0
        hints[EncodeHintType.CHARACTER_SET] = "UTF-8"
        return QRCodeWriter().encode(
            context,
            link,
            hints,
        )
    }

    fun openBrowser(url: String?, context: Context?) {
        if (url == null || context == null) return
        try {
            context.startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(url)))
        } catch (e: Exception) {
            Toast.makeText(context, "No app found to Open", Toast.LENGTH_SHORT).show()
        }
    }

    fun updateSelectionImageView(root: View?, selectImageView: ImageView, isSelected: Boolean, animate: Boolean = true) {
        if (isSelected) {
            selectImageView.setBackgroundResource(R.drawable.icon_selected)
            selectImageView.setImageResource(R.drawable.icon_select_tick)
            root?.setBackgroundColor(MaterialColors.getColor(root, R.attr.selectionBackgroundColor))
            if (animate) {
                val animator: ObjectAnimator = ObjectAnimator
                    .ofPropertyValuesHolder(
                        selectImageView,
                        PropertyValuesHolder.ofInt("imageAlpha", 0, 255)
                    )
                animator.target = selectImageView
                animator.duration = 300
                animator.start()
            }

        } else {
            selectImageView.setBackgroundResource(R.drawable.icon_not_selected)
            selectImageView.setImageResource(0)
            root?.setBackgroundColor(MaterialColors.getColor(root, com.google.android.material.R.attr.colorOnPrimary))
//            if (animate) {
//                val animator: ObjectAnimator = ObjectAnimator
//                    .ofPropertyValuesHolder(
//                        selectImageView,
//                        PropertyValuesHolder.ofInt("imageAlpha", 255, 0)
//                    )
//                animator.target = selectImageView
//                animator.duration = 200
//                animator.start()
//            }
        }
    }

    fun updateSelection(server: HTTPServer, data: Data): Boolean {
        val fileManager = server.fileManager
        var result = true
        when(data) {
            is AppFile -> {
                if (data.isSelected) { //remove
                    fileManager.removeSelection(WebFile.valueOf(data.file), false)
                } else { // add
                    result = fileManager.addSelection(WebFile.valueOf(data, server.mainUser))
                }
            }
            is Audio, is Image, is Video, is App, is Document -> {
                if (data.isSelected) { //remove
                    fileManager.removeSelection(WebFile.valueOf(data.uri, WebFileUtil.typeFromData(data)), false)
                } else { // add
                    result = fileManager.addSelection(WebFile.fromData(data, server.mainUser))
                }
            }
        }
        if (result) data.isSelected = !data.isSelected
        else {
            Util.toast(server.application, "You have reached the maximum number of files allowed")
        }
        return result
    }

    fun setImage(root: FrameLayout, imageView: ImageView, iconView: ImageView, webFile: WebFile) {
        setImage(root, imageView, iconView, webFile.type, webFile.name, webFile.file, webFile.uri, webFile.drawable)
    }

    fun setImage(root: FrameLayout, imageView: ImageView, iconView: ImageView, appFile: AppFile) {
        log("APPFILE type: ${appFile.type == null}, name: ${appFile.name == null}, file: ${appFile.file == null}, uri: ${appFile.uri == null}, appIconDrawable: ${appFile.appIconDrawable == null},")
        setImage(root, imageView, iconView, appFile.type, appFile.name, appFile.file, null, appFile.appIconDrawable)
    }

    fun setAudioImage(root: FrameLayout, imageView: ImageView, iconView: ImageView) {
        setImage(root, imageView, iconView, WebFileUtil.Audio)
    }

    fun setImage(
        root: FrameLayout,
        imageView: ImageView,
        iconView: ImageView,
        type: String,
        name: String? = null,
        file: File? = null,
        uri: Uri? = null,
        drawable: Drawable? = null
    ) {
        imageView.setImageResource(0)
        iconView.setImageResource(0)
        root.backgroundTintList = null
        imageView.colorFilter = null
        var setTypeIcon = false
        when(type) {
            WebFileUtil.Image, WebFileUtil.Video -> {
                imageView.visibility = View.VISIBLE
                iconView.visibility = View.GONE
                if (uri != null) imageView.loadImage(name, uri)
                else if (file != null) imageView.loadImage(name, file)
                else setTypeIcon = true
            }
            WebFileUtil.Document, WebFileUtil.Audio -> {
                imageView.visibility = View.GONE
                iconView.visibility = View.VISIBLE
                setTypeIcon = true
            }
            WebFileUtil.App -> {
                if (drawable != null) {
                    imageView.visibility = View.VISIBLE
                    iconView.visibility = View.GONE
                    Glide.with(imageView).load(drawable).into(imageView);
                } else {
                    imageView.visibility = View.GONE
                    iconView.visibility = View.VISIBLE
                    setTypeIcon = true
                }
            }
        }
        if (setTypeIcon) {
            iconView.setImageResource(getIconResource(type))
            root.backgroundTintList = ColorStateList.valueOf(MaterialColors.getColor(root, R.attr.fileIconBackgroundColor))
        }
    }

    fun getIconResource(type: String): Int {
        return when(type) {
            WebFileUtil.Image -> R.drawable.icon_image
            WebFileUtil.Audio -> R.drawable.icon_audio
            WebFileUtil.Video -> R.drawable.icon_video
            WebFileUtil.App -> R.drawable.icon_app
            else -> R.drawable.icon_file
        }
    }

    fun joinWithDot(vararg strings: String): String {
        return strings.joinToString(" • ")
    }

    fun toast(context: Context?, s: String) {
        Toast.makeText(context, s, Toast.LENGTH_SHORT).show()
    }
}

fun ImageView.loadImage(data: Data) {
    loadImage(data.name, data.uri)
}

fun ImageView.loadImage(name: String?, file: File) {
    scaleType = ImageView.ScaleType.FIT_CENTER
    Glide.with(this).clear(this)
    dispose()
    if (name != null && name.endsWith(".svg")) loadSvg(file)
    else glideIcon(file)
}

fun ImageView.loadImage(name: String?, uri: Uri) {
    scaleType = ImageView.ScaleType.FIT_CENTER
    Glide.with(this).clear(this)
    dispose()
    if (name != null && name.endsWith(".svg")) loadSvg(uri)
    else glideIcon(uri)
}

//fun ImageView.loadSvg(uri: Uri) {
//    scaleType = ImageView.ScaleType.CENTER_CROP
//    load(uri) {
//        crossfade(true)
//        decoderFactory { result, options, _ -> SvgDecoder(result.source, options) }
//    }
//}

fun ImageView.loadSvg(any: Any) {
    scaleType = ImageView.ScaleType.CENTER_CROP
    load(any) {
        crossfade(true)
        decoderFactory { result, options, _ -> SvgDecoder(result.source, options) }
    }
}

fun ImageView.glideIcon(any: Any) {
    Glide
        .with(this)
        .load(any)
        .transform(CenterCrop())
        .transform(CenterCrop(), RoundedCorners(UiUtil.getInstance()._6dp))
        .transition(DrawableTransitionOptions.withCrossFade())
        .into(this)
}

typealias LinearParams = LinearLayout.LayoutParams