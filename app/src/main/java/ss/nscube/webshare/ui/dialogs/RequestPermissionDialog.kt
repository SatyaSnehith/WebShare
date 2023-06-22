package ss.nscube.webshare.ui.dialogs

import android.os.Build
import android.os.Build.VERSION.SDK_INT
import ss.nscube.webshare.R
import android.app.Dialog
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.core.os.bundleOf
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.Fragment
import androidx.fragment.app.setFragmentResult
import androidx.fragment.app.setFragmentResultListener
import ss.nscube.webshare.utils.log

class RequestPermissionDialog: DialogFragment() {

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = Dialog(requireActivity())
        dialog.setContentView(R.layout.dialog_permission)
        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)
        val textView = dialog.findViewById<TextView>(R.id.perm_text)
        if (SDK_INT >= Build.VERSION_CODES.R) {
            textView.text = "${textView.text}\n\nFor Android 11 and above, You need to allow WebShare permission to manage all files to receive the file"
        }

        dialog.findViewById<Button>(R.id.okay_vb).setOnClickListener {
            setFragmentResult(AcceptRequestKey, bundleOf(IsAccepted to true))
            dismiss()
        }
        return dialog
    }

    companion object {
        val Tag = RequestPermissionDialog::class.simpleName
        val AcceptRequestKey = "acceptRequestKey"
        val IsAccepted = "isAccepted"
        fun show(fragment: Fragment, onAccepted: () -> Unit) {
            val requestPermissionDialog = RequestPermissionDialog()
            fragment.setFragmentResultListener(AcceptRequestKey) { requestKey, bundle ->
                log("RequestPermissionDialog ${bundle.getBoolean(IsAccepted)}")
                if (bundle.getBoolean(IsAccepted)) onAccepted()
            }
            requestPermissionDialog.show(fragment.parentFragmentManager, Tag)
        }
    }
}