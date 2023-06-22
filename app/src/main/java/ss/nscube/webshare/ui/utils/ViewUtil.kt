package ss.nscube.webshare.ui.utils

import android.content.Context
import android.graphics.Color
import android.view.Gravity
import android.view.ViewGroup
import android.widget.LinearLayout
import android.widget.TextView
import com.google.android.material.color.MaterialColors
import ss.nscube.webshare.R
import ss.nscube.webshare.utils.log

object ViewUtil {

    fun getTitleView(context: Context, title: String): TextView {
        val uiUtil = UiUtil.getInstance()
        val textView = TextView(context)
        textView.setPadding(uiUtil._25dp, uiUtil._8dp, 0, uiUtil._8dp)
        textView.text = title
        textView.setTextColor(MaterialColors.getColor(textView, android.R.attr.textColorPrimary))
        textView.setBackgroundColor(MaterialColors.getColor(textView, R.attr.backgroundColor))
        textView.typeface = uiUtil.regularTypeface
        textView.textSize = 14f
        textView.gravity = Gravity.CENTER_VERTICAL
        textView.layoutParams = ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT)
        return textView
    }
}