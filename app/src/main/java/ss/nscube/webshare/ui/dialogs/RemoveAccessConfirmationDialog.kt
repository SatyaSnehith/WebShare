package ss.nscube.webshare.ui.dialogs

import android.app.Dialog
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.FragmentManager
import ss.nscube.webshare.R
import ss.nscube.webshare.ui.utils.UiUtil

class RemoveAccessConfirmationDialog: DialogFragment() {
    val uiUtil = UiUtil.getInstance()
    var onConfirm: () -> Unit = {}

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = Dialog(requireContext())
        isCancelable = false
        dialog.setCanceledOnTouchOutside(false)
        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)
        dialog.setContentView(R.layout.dialog_remove_access)
        dialog.findViewById<Button>(R.id.no_btn).setOnClickListener {
            dismiss()
        }
        dialog.findViewById<Button>(R.id.yes_btn).setOnClickListener {
            onConfirm()
            dismiss()
        }
        return dialog
    }

    fun show(fragmentManager: FragmentManager, onConfirm: () -> Unit) {
        this.onConfirm = onConfirm
        show(fragmentManager, Tag)
    }

    companion object {
        val Tag = RemoveAccessConfirmationDialog::class.java.simpleName
    }
}

