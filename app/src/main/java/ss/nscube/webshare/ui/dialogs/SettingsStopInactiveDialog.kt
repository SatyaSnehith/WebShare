package ss.nscube.webshare.ui.dialogs

import android.app.Dialog
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.RadioButton
import android.widget.TextView
import androidx.core.os.bundleOf
import androidx.core.widget.addTextChangedListener
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.FragmentManager
import androidx.fragment.app.setFragmentResult
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import ss.nscube.webshare.R
import ss.nscube.webshare.WebShareApp
import ss.nscube.webshare.ui.frags.ServerSettingsFragment
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.log

class SettingsStopInactiveDialog: DialogFragment() {
    val uiUtil = UiUtil.getInstance()

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = Dialog(requireContext())
        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)
        dialog.setContentView(R.layout.dialog_stop_inactivte)

        val maxInactiveTimeInMinutes = (requireActivity().application as WebShareApp).server.maxInactiveTimeInMinutes
        log("INACTIVE TIME $maxInactiveTimeInMinutes")
        val timeList = listOf(15, 30, 45, 60)
        val recyclerView = dialog.findViewById<RecyclerView>(R.id.radio_rv)
        val adapter = InactiveRadioInputAdapter()
        recyclerView.layoutManager = LinearLayoutManager(requireContext())
        recyclerView.adapter = adapter
        val index = timeList.indexOf(maxInactiveTimeInMinutes)
        adapter.lastSelected = if (index >= 0) index else 4

        adapter.list = arrayListOf(
            InactiveRadioItem("15 Minutes", 15),
            InactiveRadioItem("30 Minutes", 30),
            InactiveRadioItem("45 Minutes", 45),
            InactiveRadioItem("1 Hour", 60),
            InactiveRadioItem(if (index == -1) "${maxInactiveTimeInMinutes / 60}" else "", if (index == -1) maxInactiveTimeInMinutes else -1)
        )

        dialog.findViewById<Button>(R.id.cancel_btn).setOnClickListener {
            dismiss()
        }
        dialog.findViewById<Button>(R.id.update_btn).setOnClickListener {
            val selected = adapter.selectedItem()
            log("INACTIVE update ${adapter.lastSelected} ${selected.value} ${selected.text}")
            (requireActivity().application as WebShareApp).server.setMaxInactiveTime(selected.value)
            setFragmentResult(ServerSettingsFragment.UpdateDescription, bundleOf(ServerSettingsFragment.ItemId to ServerSettingsFragment.InactiveDescription))
            dismiss()
        }


        return dialog
    }



    companion object {
        val Tag = SettingsStopInactiveDialog::class.java.simpleName
        fun show(fragmentManager: FragmentManager) {
            SettingsStopInactiveDialog().show(fragmentManager, Tag)
        }
    }
}

class InactiveRadioItem(var text: String, var value: Int)

class InactiveRadioInputAdapter: RecyclerView.Adapter<ViewHolder>() {
    var list: ArrayList<InactiveRadioItem> = ArrayList()
    var lastSelected = -1
    val TypeRadio = 0
    val TypeCustom = 1

    fun selectedItem(): InactiveRadioItem {
        return list[lastSelected]
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        return if (viewType == TypeRadio) RadioViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.item_radio, parent, false))
        else CustomRadioViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.item_radio_input, parent, false))
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = list[position]
        when(holder) {
            is RadioViewHolder -> {
                holder.radioButton.isClickable = false
                holder.radioButton.isChecked = lastSelected == position
                holder.textView.text = item.text
                holder.itemView.setOnClickListener {
                    onClick(holder.radioButton, null, position)
                }
            }
            is CustomRadioViewHolder -> {
                holder.radioButton.isClickable = false
                holder.radioButton.isChecked = lastSelected == position
                if (item.text.isNotEmpty()) holder.timeEditText.setText(item.text)
                holder.timeEditText.addTextChangedListener {
                    val text = it.toString()
                    val hours = try { text.toInt() } catch (e: Exception) { 0 }
                    item.value = hours * 60
                    item.text = text
                }
                holder.timeEditText.setOnFocusChangeListener { v, hasFocus ->
                    if (!hasFocus) {
                        holder.timeEditText.rootView.requestFocus()
                    }
                }
                holder.itemView.setOnClickListener {
                    onClick(holder.radioButton, holder.timeEditText, position)
                }
            }
        }
    }

    fun onClick(radioButton: RadioButton, editText: EditText?, position: Int) {
        radioButton.isChecked = true
        val pos = lastSelected
        lastSelected = position
        notifyItemChanged(pos)
        if (editText != null) {
            log("EDIT_TEXT")
            Util.openSoftKeyboard(editText)
            if (editText.text.isNotEmpty()) editText.setSelection(editText.text.length)
        } else {
            Util.closeSoftKeyboard(radioButton)
        }
    }

    override fun getItemViewType(position: Int): Int {
        return if (position == list.size - 1) TypeCustom else TypeRadio
    }

    override fun getItemCount(): Int = list.size

    class RadioViewHolder(view: View): ViewHolder(view) {
        val radioButton = view.findViewById<RadioButton>(R.id.rb)
        val textView = view.findViewById<TextView>(R.id.tv)
    }

    class CustomRadioViewHolder(view: View): ViewHolder(view) {
        val radioButton = view.findViewById<RadioButton>(R.id.rb)
        val timeEditText = view.findViewById<EditText>(R.id.time_et)
    }
}
