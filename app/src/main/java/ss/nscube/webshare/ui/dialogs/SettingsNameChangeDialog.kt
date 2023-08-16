package ss.nscube.webshare.ui.dialogs

import android.annotation.SuppressLint
import android.app.Dialog
import android.os.Bundle
import android.widget.Button
import androidx.core.os.bundleOf
import androidx.core.widget.addTextChangedListener
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.FragmentManager
import androidx.fragment.app.setFragmentResult
import com.google.android.material.textfield.TextInputEditText
import com.google.android.material.textfield.TextInputLayout
import ss.nscube.webshare.R
import ss.nscube.webshare.WebShareApp
import ss.nscube.webshare.ui.frags.ServerSettingsFragment
import ss.nscube.webshare.ui.utils.UiUtil

class SettingsNameChangeDialog: DialogFragment() {
    val uiUtil = UiUtil.getInstance()

    @SuppressLint("SetTextI18n")
    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = Dialog(requireContext())
        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)
        dialog.setContentView(R.layout.dialog_name_change)

        val server = (requireActivity().application as WebShareApp).server

        val nameInputLayout = dialog.findViewById<TextInputLayout>(R.id.filledTextField)
        val nameEditText = dialog.findViewById<TextInputEditText>(R.id.name_et)

        nameEditText.setText(server.mainUser.name)

        nameEditText.addTextChangedListener {
            nameInputLayout.error = null
        }
        nameEditText.postDelayed({
            ss.nscube.webshare.ui.utils.Util.openSoftKeyboard(nameEditText)
        }, 100)
        nameEditText.setSelection(nameEditText.text?.length ?: 0)
        dialog.findViewById<Button>(R.id.cancel_btn).setOnClickListener {
            dismiss()
        }
        dialog.findViewById<Button>(R.id.update_btn).setOnClickListener {
            val name = nameEditText.text.toString()
            val error = server.userManager.validateName(name)
            if (error == null) {
                server.mainUser.name = name
                server.preferencesUtil.adminUserName = name
                ss.nscube.webshare.ui.utils.Util.toast(context, "Username updated")
                setFragmentResult(ServerSettingsFragment.UpdateDescription, bundleOf(ServerSettingsFragment.ItemId to ServerSettingsFragment.NameDescription))
                dismiss()
            } else {
                nameInputLayout.error = error
            }
        }
        return dialog
    }

    companion object {
        val Tag = SettingsNameChangeDialog::class.java.simpleName
        fun show(fragmentManager: FragmentManager) {
            SettingsNameChangeDialog().show(fragmentManager, Tag)
        }
    }
}
