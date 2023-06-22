package ss.nscube.webshare.ui.dialogs

import android.annotation.SuppressLint
import android.app.Dialog
import android.os.Bundle
import android.widget.ImageView
import androidx.core.os.bundleOf
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.Fragment
import ss.nscube.webshare.R
import ss.nscube.webshare.ui.utils.Util

class QrDialog: DialogFragment() {

    @SuppressLint("SetTextI18n")
    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = Dialog(requireContext())
        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)
        dialog.setContentView(R.layout.dialog_qr)
        val url = arguments?.getString(UrlKey)
        if (url != null) {
            dialog.findViewById<ImageView>(R.id.qrIV).setImageBitmap(
//                        Util.generateQR(url, UiUtil.primaryTextColor(thirdView?.ipTV?.context!!))
                Util.getQrBitmap(requireContext(), url)
            )
        }
        return dialog
    }

    companion object {
        val Tag = QrDialog::class.java.simpleName
        val UrlKey = "urlRequestKey"
        fun show(fragment: Fragment, url: String?) {
            val qrDialog = QrDialog()
            qrDialog.arguments = bundleOf(UrlKey to url)
            qrDialog.show(fragment.parentFragmentManager, Tag)
        }
    }
}