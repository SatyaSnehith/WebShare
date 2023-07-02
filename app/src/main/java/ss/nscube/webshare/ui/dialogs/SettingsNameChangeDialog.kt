package ss.nscube.webshare.ui.dialogs

import android.annotation.SuppressLint
import android.app.Dialog
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.core.os.bundleOf
import androidx.core.widget.addTextChangedListener
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.FragmentManager
import androidx.fragment.app.setFragmentResult
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

        val nameEditText = dialog.findViewById<EditText>(R.id.name_et)
        val errorTextView = dialog.findViewById<TextView>(R.id.error_tv)

        nameEditText.setText(server.mainUser.name)

        nameEditText.addTextChangedListener {
            errorTextView.text = ""
            errorTextView.visibility = View.GONE
        }
        nameEditText.postDelayed(Runnable {
            ss.nscube.webshare.ui.utils.Util.openSoftKeyboard(nameEditText)
        }, 100)
        nameEditText.setSelection(nameEditText.text.length)
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
                errorTextView.visibility = View.VISIBLE
                errorTextView.text = error
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
