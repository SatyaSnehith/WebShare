package ss.nscube.webshare.ui.dialogs

import android.app.Dialog
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.core.os.bundleOf
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.Fragment
import androidx.fragment.app.setFragmentResult
import androidx.fragment.app.setFragmentResultListener
import ss.nscube.webshare.R
import ss.nscube.webshare.ui.utils.UiUtil

class DeleteConfirmationDialog: DialogFragment() {
    val uiUtil = UiUtil.getInstance()

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = Dialog(requireContext())
        val itemType: String = arguments?.getString(ItemType, "item") ?: "item"
        isCancelable = false
        dialog.setCanceledOnTouchOutside(false)
        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)
        dialog.setContentView(R.layout.dialog_delete_confirmation)
        dialog.findViewById<TextView>(R.id.title_tv).text = "Are you sure you want to delete $itemType ?"
        dialog.findViewById<Button>(R.id.cancel_btn).setOnClickListener {
            setFragmentResult(ConfirmRequestKey, bundleOf(ConfirmResult to false))
            dismiss()
        }
        dialog.findViewById<Button>(R.id.delete_btn).setOnClickListener {
            setFragmentResult(ConfirmRequestKey, bundleOf(ConfirmResult to true))
            dismiss()
        }
        return dialog
    }

    companion object {
        val Tag = DeleteConfirmationDialog::class.java.simpleName
        val ConfirmRequestKey = "confirmRequestKey"
        val ConfirmResult = "confirmResult"
        val ItemType = "itemType"

        fun show(fragment: Fragment, itemType: String, onConfirm: () -> Unit) {
            val deleteConfirmationDialog = DeleteConfirmationDialog()
            deleteConfirmationDialog.arguments = bundleOf(ItemType to itemType)
            fragment.setFragmentResultListener(ConfirmRequestKey) { requestKey, bundle ->
                if (bundle.getBoolean(ConfirmResult)) onConfirm()
            }
            deleteConfirmationDialog.show(fragment.parentFragmentManager, Tag)
        }
    }
}

