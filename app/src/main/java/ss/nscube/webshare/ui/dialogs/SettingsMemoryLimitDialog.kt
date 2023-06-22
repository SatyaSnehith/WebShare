package ss.nscube.webshare.ui.dialogs

import android.annotation.SuppressLint
import android.app.Dialog
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.core.os.bundleOf
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.FragmentManager
import androidx.fragment.app.setFragmentResult
import com.google.android.material.slider.LabelFormatter
import com.google.android.material.slider.Slider
import ss.nscube.webshare.R
import ss.nscube.webshare.WebShareApp
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.server.utils.Util
import ss.nscube.webshare.ui.frags.ServerSettingsFragment
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.utils.log

class SettingsMemoryLimitDialog: DialogFragment() {
    val uiUtil = UiUtil.getInstance()

    @SuppressLint("SetTextI18n")
    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = Dialog(requireContext())
        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)
        dialog.setContentView(R.layout.dialog_memory_limit)

        val server = (requireActivity().application as WebShareApp).server
        val availableSpace = server.appFolderManager.getAvailableSpace()
        dialog.findViewById<TextView>(R.id.available_memory_tv).text = "Available: " + FileUtil.getSize(availableSpace)
        val memoryLimit = 0L/*server.downloadManager.maxDownloadLength*/
        log("MEMORY LIMIT $memoryLimit")
        val limitTextView = dialog.findViewById<TextView>(R.id.memory_limit_tv)
        val slider = dialog.findViewById<Slider>(R.id.memory_slider)
        slider.valueFrom = 0f
        slider.valueTo = availableSpace.toFloat()
        slider.value = memoryLimit.toFloat()
        limitTextView.text = "Limit: " + FileUtil.getSize(memoryLimit)
        slider.addOnChangeListener { slider, value, fromUser ->
            limitTextView.text = "Limit: " + FileUtil.getSize(value.toLong())
        }
        slider.setLabelFormatter { value -> FileUtil.getSize(value.toLong()) }

        dialog.findViewById<Button>(R.id.cancel_btn).setOnClickListener {
            dismiss()
        }
        dialog.findViewById<Button>(R.id.update_btn).setOnClickListener {
//            server.downloadManager.setMaxDownloadLength(slider.value.toLong())
            setFragmentResult(ServerSettingsFragment.UpdateDescription, bundleOf(ServerSettingsFragment.ItemId to ServerSettingsFragment.MemoryDescription))
            dismiss()
        }
        return dialog
    }

    companion object {
        val Tag = SettingsMemoryLimitDialog::class.java.simpleName
        fun show(fragmentManager: FragmentManager) {
            SettingsMemoryLimitDialog().show(fragmentManager, Tag)
        }
    }
}
