package ss.nscube.webshare.ui.dialogs

import android.annotation.SuppressLint
import android.app.Dialog
import android.content.DialogInterface
import android.content.res.ColorStateList
import android.os.Bundle
import android.text.InputType
import android.view.View
import android.widget.*
import androidx.core.os.bundleOf
import androidx.core.widget.addTextChangedListener
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.Fragment
import androidx.fragment.app.setFragmentResult
import androidx.fragment.app.setFragmentResultListener
import com.google.android.material.color.MaterialColors
import com.google.android.material.materialswitch.MaterialSwitch
import ss.nscube.webshare.R
import ss.nscube.webshare.WebShareApp
import ss.nscube.webshare.server.HTTPServer
import ss.nscube.webshare.ui.utils.UiUtil

class SecurityDialog: DialogFragment() {
    val uiUtil = UiUtil.getInstance()
    private var switch: MaterialSwitch? = null
    private var securityLayout: LinearLayout? = null
    private var pinEditText: EditText? = null
    private var errorTextView: TextView? = null
    private var showPwdImageView: ImageView? = null
    private var generateButton: Button? = null
    private var noSecurityLayout: LinearLayout? = null
    private var switchLayout: LinearLayout? = null
    val server: HTTPServer
        get() {
            return (requireActivity().application as WebShareApp).server
        }
    private var isPwdVisible = false

    @SuppressLint("SetTextI18n")
    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = Dialog(requireContext())
        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)
        dialog.setContentView(R.layout.dialog_security)
        dialog.setCancelable(false)
        dialog.setCanceledOnTouchOutside(false)
        switch = dialog.findViewById(R.id.item_switch)
        securityLayout = dialog.findViewById(R.id.security_layout)
        pinEditText = dialog.findViewById(R.id.pin_et)
        errorTextView = dialog.findViewById(R.id.error_tv)
        showPwdImageView = dialog.findViewById(R.id.show_pwd_iv)
        generateButton = dialog.findViewById(R.id.generate_btn)
        noSecurityLayout = dialog.findViewById(R.id.no_security_layout)
        switchLayout = dialog.findViewById(R.id.switch_layout)
        switch?.isClickable = false

        val isSecured = server.isSecured
        switch?.isChecked = isSecured

        enableSecurity(isSecured)
        switchLayout?.setOnClickListener {
            switch?.let { switch ->
                switch.isChecked = !switch.isChecked
                enableSecurity(switch.isChecked)
            }
        }
        pinEditText?.addTextChangedListener {
            errorTextView?.text = ""
            errorTextView?.visibility = View.GONE
        }
        showPwdImageView?.setOnClickListener {
            if (isPwdVisible) {
                pinEditText?.inputType = InputType.TYPE_CLASS_NUMBER or InputType.TYPE_NUMBER_VARIATION_PASSWORD
                showPwdImageView?.setImageResource(R.drawable.icon_show)
            } else {
                pinEditText?.inputType = InputType.TYPE_CLASS_NUMBER
                showPwdImageView?.setImageResource(R.drawable.icon_hide)
            }
            pinEditText?.setSelection(pinEditText?.text?.length ?: 0)
            isPwdVisible = !isPwdVisible
        }

        generateButton?.setOnClickListener {
            pinEditText?.setText(generateRandomPin())
            pinEditText?.setSelection(pinEditText?.text?.length ?: 0)
        }

        dialog.findViewById<Button>(R.id.cancel_btn).setOnClickListener {
            dismiss()
        }
        dialog.findViewById<Button>(R.id.update_btn).setOnClickListener {
            if (switch?.isChecked == true) {
                val pin = pinEditText?.text?.toString()
                server.enableSecurity(pin?.toInt())
                if (pin?.length == 6) {
                    dismiss()
                } else {
                    errorTextView?.visibility = View.VISIBLE
                    errorTextView?.text = "The security pin must be 6-digit"
                }
            } else {
                server.enableSecurity(null)
                dismiss()
            }
        }
        return dialog
    }

    override fun onDismiss(dialog: DialogInterface) {
        super.onDismiss(dialog)
        setFragmentResult(OnDismissRequestKey, bundleOf(Dismiss to true))
        dialog.dismiss()
    }

    private fun enableSecurity(enable: Boolean) {
        updateSwitchStyle()
        updateSecurityLayoutVisibility(enable)
        pinEditText?.setText(if (server.pin == null) generateRandomPin() else String.format("%06d", server.pin))
    }

    private fun generateRandomPin() = String.format("%06d", (Math.random() * 999999).toInt())

    private fun updateSecurityLayoutVisibility(show: Boolean) {
        securityLayout?.visibility = if (show) View.VISIBLE else View.GONE
        noSecurityLayout?.visibility = if (show) View.GONE else View.VISIBLE
    }

    private fun updateSwitchStyle() {
        switch?.let { switch ->
            val on = switch.isChecked
            switch.thumbTintList = ColorStateList.valueOf(MaterialColors.getColor(switch, if (on) android.R.attr.colorPrimary else R.attr.switchOffThumbColor))
            switch.trackTintList = ColorStateList.valueOf(MaterialColors.getColor(switch, if (on) R.attr.primaryRippleColor else R.attr.switchOffTrackColor))
        }
    }

    companion object {
        val Tag: String = SecurityDialog::class.java.simpleName
        const val OnDismissRequestKey = "OnDismissRequestKey"
        const val Dismiss = "Dismiss"
        fun show(fragment: Fragment, onDismiss: () -> Unit) {
            val securityDialog = SecurityDialog()
            fragment.setFragmentResultListener(OnDismissRequestKey) { _, bundle ->
                if (bundle.getBoolean(Dismiss))
                    onDismiss()
            }
            securityDialog.show(fragment.parentFragmentManager, Tag)
        }
    }
}
