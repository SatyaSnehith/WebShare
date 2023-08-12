package ss.nscube.webshare.ui.utils

import android.content.Context
import android.content.res.Resources
import android.graphics.Color
import android.graphics.Typeface
import android.util.TypedValue
import androidx.core.content.ContextCompat
import androidx.core.content.res.ResourcesCompat
import androidx.core.graphics.ColorUtils
import com.google.android.material.color.MaterialColors
import okhttp3.internal.toHexString
import ss.nscube.webshare.R

class UiUtil(context: Context) {
    val red: Int = ContextCompat.getColor(context, R.color.red)
    val green: Int = ContextCompat.getColor(context, R.color.green)
    val blue: Int = ContextCompat.getColor(context, R.color.blue)
    val primaryColor: Int = ContextCompat.getColor(context, R.color.primary)
    val t50TabColor = ColorUtils.setAlphaComponent(Color.parseColor("#03A9F4"), percentToOpacity(50))
    var density: Float = context.resources.displayMetrics.density

    //dimensions
    val _5dp = dp(5).toInt()
    val _2dp = dp(2).toInt()
    val _7dp = dp(7).toInt()
    val _6dp = dp(6).toInt()
    val _8dp = dp(8).toInt()
    val _10dp = dp(10).toInt()
    val _15dp = dp(15).toInt()
    val _18dp = dp(18).toInt()
    val _20dp = dp(20).toInt()
    val _24dp = dp(24).toInt()
    val _25dp = dp(25).toInt()
    val _40dp = dp(40).toInt()

    //colors
    var _D8 = Color.parseColor("#D8D8D8")

    //fonts
    var boldTypeface: Typeface? = ResourcesCompat.getFont(context, R.font.roboto_bold)
    var mediumTypeface: Typeface? = ResourcesCompat.getFont(context, R.font.roboto_medium)
    var regularTypeface: Typeface? = ResourcesCompat.getFont(context, R.font.roboto_regular)

    fun percentToOpacity(opacity: Int): Int {
        return ((opacity / 100.0) * 255).toInt()
    }

    fun getHexPercent(percent: Int): String {
        val hex = Integer.toHexString(((percent / 100.0) * 255).toInt())
        return if (hex.length == 1) "0$hex" else hex
    }

    fun dp(dp: Int) = density * dp

    fun dp(dp: Float) = density * dp

    fun px(px: Int) = (px / density).toInt()

    companion object {
        const val ThemeSystem = 0
        const val ThemeLight = 1
        const val ThemeDark = -1

        private var uiUtil: UiUtil? = null

        fun backgroundColor(context: Context) = getThemeResource(context, R.attr.backgroundColor)

        fun selectableItemBackground(context: Context) = getThemeResource(context, android.R.attr.selectableItemBackground)

        fun primaryTextColor(context: Context) = MaterialColors.getColor(context, android.R.attr.textColorPrimary, Color.GRAY)

        fun secondaryTextColor(context: Context) = MaterialColors.getColor(context, android.R.attr.textColorSecondary, Color.LTGRAY)


        fun getThemeResource(context: Context, resource: Int): Int {
            val outValue = TypedValue()
            context.theme.resolveAttribute(resource, outValue, true)
            return outValue.resourceId
        }
        fun init(context: Context) {
            TimeCal.start("UiUtil")
            uiUtil = UiUtil(context)
            TimeCal.stop("", "UiUtil")
        }
        fun getInstance(): UiUtil {
            return uiUtil!!
        }
    }
}

val Int.dp
    get() = (Resources.getSystem().displayMetrics.density * this).toInt()
