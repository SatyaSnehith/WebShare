package ss.nscube.webshare.ui.views

import android.content.Context
import android.content.res.ColorStateList
import android.util.AttributeSet
import android.util.TypedValue
import android.view.Gravity
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import com.google.android.material.color.MaterialColors
import ss.nscube.webshare.R
import ss.nscube.webshare.ui.utils.LinearParams
import ss.nscube.webshare.ui.utils.UiUtil


class IconTextItemLinearLayout(context: Context, attr: AttributeSet?, style: Int) : LinearLayout(context, attr, style) {
    var onItemClick: (Int) -> Unit = {}
    var itemComponentName: String = "rippleBg"
    var imageComponentName: String = "image"
    var textComponentName: String = "text"
    var isTopAndBottomRound = false
    val uiUtil = UiUtil.getInstance()

    var imageSize = uiUtil.dp(24).toInt()

    var itemHeight = uiUtil.dp(50).toInt()

    val itemLayoutList = HashMap<Int, LinearLayout>()
    val primaryTextColor = MaterialColors.getColor(this, android.R.attr.textColorPrimary)
    val secondaryTextColor = MaterialColors.getColor(this, android.R.attr.textColorSecondary)

    init {
        orientation = VERTICAL
        layoutParams = LinearParams(LinearParams.WRAP_CONTENT, LinearParams.WRAP_CONTENT)
        setPadding(uiUtil._5dp, 0, uiUtil._5dp, 0)
        gravity = Gravity.CENTER_HORIZONTAL
    }

    private fun getItemLinearLayout(id: Int): LinearLayout {
        val linearLayout = LinearLayout(context)
        linearLayout.orientation = HORIZONTAL
        linearLayout.gravity = Gravity.CENTER_VERTICAL
        linearLayout.setOnClickListener {
            onItemClick(id)
        }
        itemLayoutList[id] = linearLayout
        return linearLayout;
    }

    fun addFeatureItem(imageSrc: Int, text: String) {
        val itemLinearLayout = LinearLayout(context)
        itemLinearLayout.orientation = HORIZONTAL
        itemLinearLayout.gravity = Gravity.CENTER_VERTICAL

        val image = ImageView(context)
        image.setImageResource(imageSrc)
        itemLinearLayout.addView(image, LinearParams(uiUtil._40dp, uiUtil._40dp).apply {
            setMargins(0, 0, uiUtil._10dp, 0)
        })

        val textView = TextView(context)
        textView.text = text
        textView.textSize = 14f
        textView.setTextColor(secondaryTextColor)
        itemLinearLayout.addView(textView, LinearParams(LinearParams.WRAP_CONTENT, LinearParams.WRAP_CONTENT).apply {
            weight = 1f
        })

        addView(itemLinearLayout, LinearParams(LinearParams.MATCH_PARENT, itemHeight))
    }

    fun addMenuItem(id: Int, imageSrc: Int, text: String, isDisabled: Boolean = false) {
        val itemLinearLayout = getItemLinearLayout(id)

        val image = ImageView(context)
        image.setImageResource(imageSrc)
        if (isDisabled) image.alpha = 0.7f
        image.imageTintList = ColorStateList.valueOf(primaryTextColor)
        itemLinearLayout.addView(image, LinearParams(imageSize, LinearParams.WRAP_CONTENT).apply {
            setMargins(uiUtil._15dp, 0, uiUtil._15dp, 0)
        })

        val textView = TextView(context)
        textView.text = text
        textView.textSize = 16f
        if (isDisabled) textView.alpha = 0.7f
        textView.setTextColor(primaryTextColor)
        itemLinearLayout.addView(textView, LinearParams(LinearParams.WRAP_CONTENT, LinearParams.WRAP_CONTENT).apply {
            setMargins(0, 0, uiUtil._15dp, 0)
        })

        if (!isDisabled) itemLinearLayout.setBackgroundResource(R.drawable.round_bg_ripple)

        addView(itemLinearLayout, LinearParams(LinearParams.MATCH_PARENT, itemHeight))
    }

    constructor(context: Context, attr: AttributeSet): this(context, attr, 0)

    constructor(context: Context): this(context, null, 0)
}