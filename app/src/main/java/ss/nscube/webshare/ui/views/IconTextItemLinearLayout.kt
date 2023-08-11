package ss.nscube.webshare.ui.views

import android.content.Context
import android.content.res.ColorStateList
import android.util.AttributeSet
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
    var isTopAndBottomRound = false
    val uiUtil = UiUtil.getInstance()

    private var imageSize = uiUtil.dp(24).toInt()

    private var itemHeight = uiUtil.dp(50).toInt()

    val itemLayoutList = HashMap<Int, LinearLayout>()
    private val primaryTextColor = MaterialColors.getColor(this, android.R.attr.textColorPrimary)

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
        return linearLayout
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