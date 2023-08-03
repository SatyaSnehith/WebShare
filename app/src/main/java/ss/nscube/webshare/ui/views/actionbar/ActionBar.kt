package ss.nscube.webshare.ui.views.actionbar

import android.content.Context
import android.content.res.ColorStateList
import android.graphics.Color
import android.util.AttributeSet
import android.view.Gravity
import android.view.View
import android.widget.EditText
import android.widget.FrameLayout
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.core.widget.addTextChangedListener
import com.google.android.material.color.MaterialColors
import ss.nscube.webshare.R
import ss.nscube.webshare.ui.frags.BaseFragment
import ss.nscube.webshare.ui.utils.UiUtil

class ActionBar(context: Context, attributeSet: AttributeSet?, style: Int): LinearLayout(context, attributeSet, style) {
    constructor(context: Context, attributeSet: AttributeSet?) : this(context, attributeSet, 0)
    constructor(context: Context) : this(context, null, 0)
    var uiUtil: UiUtil = UiUtil.getInstance()
    private val buttonSize = resources.getDimension(R.dimen.action_button_size).toInt()
    var titleTextView = TextView(context)
    var searchEditText = EditText(context)

    init {
        setBackgroundColor(MaterialColors.getColor(this, R.attr.actionBarColor))
        gravity = Gravity.CENTER_VERTICAL
    }

    private fun getIcon(iconRes: Int, name: String, size: Int = uiUtil._20dp): FrameLayout {
        val frameLayout = FrameLayout(context)
        frameLayout.setBackgroundResource(R.drawable.round_primary_ripple_25)
        frameLayout.setOnLongClickListener {
            toast(name)
            false
        }
        val imageView = ImageView(context)
        imageView.setImageResource(iconRes)
        imageView.imageTintList = ColorStateList.valueOf(Color.WHITE)
        val layoutParams = FrameLayout.LayoutParams(size, size)
        layoutParams.gravity = Gravity.CENTER
        frameLayout.addView(imageView, layoutParams)
        return frameLayout
    }

    fun addBackIcon(fragment: BaseFragment) {
        addBackIcon { fragment.onBackClicked() }
    }

    fun addBackIcon(onClick: () -> Unit) {
        val icon = getIcon(R.drawable.icon_back, "Back", uiUtil._18dp)
        icon.setOnClickListener { onClick() }
        addView(icon, createIconLayoutParams())
    }

    fun addCloseIcon(onClick: () -> Unit) {
        val icon = getIcon(R.drawable.icon_remove, "Close")
        icon.setOnClickListener { onClick() }
        addView(icon, createIconLayoutParams())
    }

    fun toast(text: String) = Toast.makeText(context, text, Toast.LENGTH_SHORT).show()

    fun addMenuIcon(fragment: BaseFragment) {
        val menuIcon = getIcon(R.drawable.icon_menu, "Menu")
        menuIcon.setOnClickListener(fragment::openMenu)
        addView(menuIcon, createIconLayoutParams())
    }

    fun addEndIcon(resource: Int, name: String, onClick: () -> Unit) {
        val endIcon = getIcon(resource, name, uiUtil._24dp)
        endIcon.setOnClickListener { onClick() }
        addView(endIcon, createIconLayoutParams())
    }

    private fun createIconLayoutParams() = LayoutParams(buttonSize, buttonSize).apply {
        setMargins(uiUtil._5dp, 0, uiUtil._5dp, 0)
    }

    fun addTitle(title: CharSequence) {
        titleTextView.setPadding(uiUtil._5dp, 0, uiUtil._5dp, 0)
        titleTextView.text = title
        titleTextView.setTextColor(Color.WHITE)
        titleTextView.typeface = uiUtil.regularTypeface
        titleTextView.textSize = 18f
        titleTextView.gravity = Gravity.CENTER_VERTICAL
        val layoutParams = LayoutParams(0, buttonSize)
        layoutParams.weight = 1f
        addView(titleTextView, layoutParams)
    }

    fun addSearch(hint: CharSequence, onTextChanged: (String) -> Unit) {
        val dummyLayout = LinearLayout(context)
        dummyLayout.isFocusable = true
        dummyLayout.isFocusableInTouchMode = true
        addView(searchEditText,  LayoutParams(0, 0))

        searchEditText = EditText(context)
        searchEditText.id = View.generateViewId()
        searchEditText.setPadding(uiUtil._5dp, 0, uiUtil._5dp, 0)
        searchEditText.hint = hint
        searchEditText.setHintTextColor(Color.LTGRAY)
        searchEditText.setTextColor(Color.WHITE)
        searchEditText.typeface = uiUtil.regularTypeface
        searchEditText.textSize = 18f
        searchEditText.background = null
        searchEditText.nextFocusUpId = searchEditText.id
        searchEditText.nextFocusLeftId = searchEditText.id
        searchEditText.gravity = Gravity.CENTER_VERTICAL
        searchEditText.addTextChangedListener {
            onTextChanged(it.toString())
        }
        val layoutParams = LayoutParams(0, buttonSize)
        layoutParams.weight = 1f
        addView(searchEditText, layoutParams)
    }

    fun setTitle(title: String) {
        titleTextView.text = title
    }

    fun updateMode(updateActionBar: ActionBar.() -> Unit) {
        removeAllViews()
        updateActionBar()
    }
}
