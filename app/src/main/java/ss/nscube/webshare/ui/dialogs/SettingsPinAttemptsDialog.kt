package ss.nscube.webshare.ui.dialogs

import android.app.Dialog
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import androidx.core.os.bundleOf
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.FragmentManager
import androidx.fragment.app.setFragmentResult
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import com.google.android.material.radiobutton.MaterialRadioButton
import ss.nscube.webshare.R
import ss.nscube.webshare.WebShareApp
import ss.nscube.webshare.ui.frags.ServerSettingsFragment
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.utils.log

class SettingsPinAttemptsDialog: DialogFragment() {
    val uiUtil = UiUtil.getInstance()

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = Dialog(requireContext())
        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)
        dialog.setContentView(R.layout.dialog_pin_attempts)

        val maxPinAttempts = (requireActivity().application as WebShareApp).server.maxPinAttempts
        log("INACTIVE TIME $maxPinAttempts")
        val timeList = listOf(3, 5, 10, 15)
        val recyclerView = dialog.findViewById<RecyclerView>(R.id.radio_rv)
        val adapter = AttemptRadioAdapter()
        recyclerView.layoutManager = LinearLayoutManager(requireContext())
        recyclerView.adapter = adapter
        adapter.lastSelected = timeList.indexOf(maxPinAttempts)

        adapter.list = timeList.map { AttemptRadioItem("$it Incorrect Attempts", it) }

        dialog.findViewById<Button>(R.id.cancel_btn).setOnClickListener {
            dismiss()
        }
        dialog.findViewById<Button>(R.id.update_btn).setOnClickListener {
            val selected = adapter.selectedItem()
            log("INACTIVE update ${adapter.lastSelected} ${selected.value} ${selected.text}")
            (requireActivity().application as WebShareApp).server.setMaxPinAttemptsLimit(selected.value)
            setFragmentResult(ServerSettingsFragment.UpdateDescription, bundleOf(ServerSettingsFragment.ItemId to ServerSettingsFragment.AttemptDescription))
            dismiss()
        }
        return dialog
    }

    companion object {
        val Tag: String = SettingsPinAttemptsDialog::class.java.simpleName
        fun show(fragmentManager: FragmentManager) {
            SettingsPinAttemptsDialog().show(fragmentManager, Tag)
        }
    }
}

class AttemptRadioItem(var text: String, var value: Int)

class AttemptRadioAdapter: RecyclerView.Adapter<AttemptRadioAdapter.RadioViewHolder>() {
    var list: List<AttemptRadioItem> = ArrayList()
    var lastSelected = -1
    private val TypeRadio = 0
    private val TypeCustom = 1

    fun selectedItem(): AttemptRadioItem {
        return list[lastSelected]
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RadioViewHolder {
        return RadioViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.item_radio, parent, false))
    }

    override fun onBindViewHolder(holder: RadioViewHolder, position: Int) {
        val item = list[position]
        holder.radioButton.isClickable = false
        holder.radioButton.isChecked = lastSelected == position
        holder.textView.text = item.text
        holder.itemView.setOnClickListener {
            holder.radioButton.isChecked = true
            val pos = lastSelected
            lastSelected = position
            notifyItemChanged(pos)
        }
    }

    override fun getItemViewType(position: Int): Int {
        return if (position == list.size - 1) TypeCustom else TypeRadio
    }

    override fun getItemCount(): Int = list.size

    class RadioViewHolder(view: View): ViewHolder(view) {
        val radioButton: MaterialRadioButton = view.findViewById(R.id.rb)
        val textView: TextView = view.findViewById(R.id.tv)
    }
}
