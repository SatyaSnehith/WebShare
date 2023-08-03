package ss.nscube.webshare.ui

import android.content.Context
import android.content.res.ColorStateList
import android.graphics.drawable.GradientDrawable
import android.os.Build
import android.transition.Slide
import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import android.widget.PopupWindow
import com.google.android.material.color.MaterialColors
import ss.nscube.webshare.R
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.ui.views.IconTextItemLinearLayout

class MenuPopup(var context: Context): PopupWindow() {
    private val itemLinearLayout = IconTextItemLinearLayout(context)
    val uiUtil = UiUtil.getInstance()

    init {
        contentView = itemLinearLayout
        width = ViewGroup.LayoutParams.WRAP_CONTENT
        height = ViewGroup.LayoutParams.WRAP_CONTENT
        val popupBg = GradientDrawable()
        popupBg.cornerRadius = uiUtil._6dp.toFloat()
        popupBg.color = ColorStateList.valueOf(MaterialColors.getColor(itemLinearLayout, R.attr.popupBackgroundColor))
        setBackgroundDrawable(popupBg)
        elevation = 10f
        isFocusable = true

        itemLinearLayout.isTopAndBottomRound = true
        itemLinearLayout.minimumWidth = uiUtil.dp(200).toInt()
        itemLinearLayout.setPadding(0, uiUtil._6dp, 0, uiUtil._6dp)

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            enterTransition = Slide().also {
                it.duration = 200
                it.slideEdge = Gravity.TOP
            }
            exitTransition = Slide().also {
                it.duration = 150
                it.slideEdge = Gravity.TOP
            }
        }
    }

    fun addMenuItem(id: Int, imageSrc: Int, text: String, isDisabled: Boolean = false) {
        itemLinearLayout.addMenuItem(id, imageSrc, text, isDisabled)
    }

    fun showAtLocation(parent: View) {
        val location = IntArray(2)
        parent.getLocationOnScreen(location)
        val top = location[1] + parent.height
        showAtLocation(parent, (Gravity.TOP or Gravity.END) , uiUtil.dp(10).toInt(), top)
    }

    fun count() = itemLinearLayout.itemLayoutList.size

    fun onItemClick(onClick: (Int) -> Unit) {
        itemLinearLayout.onItemClick = {
            onClick(it)
            dismiss()
        }
    }
}

