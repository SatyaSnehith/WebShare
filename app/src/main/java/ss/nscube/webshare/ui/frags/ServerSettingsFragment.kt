package ss.nscube.webshare.ui.frags

import android.annotation.SuppressLint
import android.content.res.ColorStateList
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.fragment.app.setFragmentResultListener
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import androidx.recyclerview.widget.SimpleItemAnimator
import com.google.android.material.color.MaterialColors
import com.google.android.material.switchmaterial.SwitchMaterial
import ss.nscube.webshare.R
import ss.nscube.webshare.databinding.FragmentServerSettingsBinding
import ss.nscube.webshare.ui.dialogs.*
import ss.nscube.webshare.utils.log

class ServerSettingsFragment: BaseFragment() {
    var binding: FragmentServerSettingsBinding? = null

    var adapter: SettingsAdapter? = null

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentServerSettingsBinding.inflate(inflater)
        return binding?.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding?.actionBar?.updateMode {
            addBackIcon(this@ServerSettingsFragment)
            addTitle("Server settings")
        }
        binding?.rv?.layoutManager = LinearLayoutManager(requireContext())
        (binding?.rv?.itemAnimator as? SimpleItemAnimator)?.supportsChangeAnimations = false
        adapter = SettingsAdapter()
        binding?.rv?.adapter = adapter


        adapter?.list = arrayListOf(
            SimpleItem(R.drawable.icon_settings_name, "Username", server.mainUser.name, ::onNameClicked),
            SimpleItem(
                R.drawable.icon_settings_stop,
                "Stop the server when inactive for",
                getServerInactiveDescription(),
                ::onInactiveClicked
            ),
            SimpleItem(
                R.drawable.icon_settings_pin,
                "User Pin Attempts Limit",
                getIncorrectAttemptsDescription(),
                ::onAttemptClicked
            ),
            SwitchItem(
                R.drawable.icon_settings_user,
                "Disable User Creation",
                "Prevents new users from being created",
                server.disableUserCreation,
                ::onUserCreationSwitched
            ),
            SwitchItem(
                R.drawable.icon_settings_upload,
                "Disable File Upload",
                "Prevents file uploads from the browser",
                server.disableFileUpload,
                ::onFileUploadSwitched
            )
        )

        setFragmentResultListener(UpdateDescription) { requestKey, bundle ->
            log("setFragmentResultListener ${bundle.getInt(ItemId)}")
            updateDescription(bundle.getInt(ItemId))
        }
    }

    fun getServerInactiveDescription() = "Stops the server after ${server.getMaxInactiveTime()} of inactivity"

    fun getIncorrectAttemptsDescription() = "Block User After ${server.maxPinAttempts} Incorrect Attempts"

    fun updateDescription(position: Int) {
        adapter?.let {
            when(position) {
                NameDescription -> it.list[0].description = server.mainUser.name
                InactiveDescription -> it.list[1].description = getServerInactiveDescription()
                AttemptDescription -> it.list[2].description = getIncorrectAttemptsDescription()
            }
            it.notifyItemChanged(position)
        }
    }

    private fun onNameClicked(item: SimpleItem) {
        SettingsNameChangeDialog.show(parentFragmentManager)
    }

    private fun onInactiveClicked(item: SimpleItem) {
        SettingsStopInactiveDialog.show(parentFragmentManager)
    }

    private fun onAttemptClicked(item: SimpleItem) {
        SettingsPinAttemptsDialog.show(parentFragmentManager)
    }

    private fun onUserCreationSwitched(item: SwitchItem) {
        log("SWITCH onUserCreationSwitched ${item.isChecked}")
        server.disableUserCreation = item.isChecked
    }

    private fun onFileUploadSwitched(item: SwitchItem) {
        log("SWITCH onFileUploadSwitched ${item.isChecked}")
        server.disableFileUpload = item.isChecked
    }

    override fun onResume() {
        super.onResume()
        log("ServerSettings OnResume")
    }

    companion object {
        val UpdateDescription = "updateDescription"
        val ItemId = "itemId"
        val NameDescription = 0
        val InactiveDescription = 1
        val AttemptDescription = 2
        val MemoryDescription = 3
    }
}

class SettingsAdapter: RecyclerView.Adapter<ViewHolder>() {
    var list: ArrayList<Item> = ArrayList()
        @SuppressLint("NotifyDataSetChanged")
        set(value) {
            field = value
            notifyDataSetChanged()
        }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        return if (viewType == ItemSimple) SimpleItemViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.item_settings_simple, parent, false))
        else SwitchItemViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.item_settings_switch, parent, false))
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        when(val item = list[position]) {
            is SimpleItem -> {
                holder as SimpleItemViewHolder
                holder.iconImageView.setImageResource(item.iconRes)
                holder.titleTextView.text = item.title
                holder.descriptionTextView.text = item.description
                holder.itemView.setOnClickListener {
                    item.onClick(item)
                }
            }
            is SwitchItem -> {
                holder as SwitchItemViewHolder
                holder.iconImageView.setImageResource(item.iconRes)
                holder.titleTextView.text = item.title
                holder.descriptionTextView.text = item.description
                holder.switch.isChecked = item.isChecked
                holder.switch.isClickable = false
                holder.updateSwitchStyle()
                holder.itemView.setOnClickListener {
                    holder.switch.isChecked = !holder.switch.isChecked
                    item.isChecked = holder.switch.isChecked
                    holder.updateSwitchStyle()
                    item.onClick(item)
                }
            }
        }
    }

    override fun getItemViewType(position: Int): Int {
        return if (list[position] is SimpleItem) ItemSimple else ItemSwitch
    }

    override fun getItemCount() = list.size

    companion object {
        val ItemSimple = 0
        val ItemSwitch = 1
    }
}

class SimpleItemViewHolder(view: View): ViewHolder(view) {
    val iconImageView = view.findViewById<ImageView>(R.id.item_icon_iv)
    val titleTextView = view.findViewById<TextView>(R.id.item_title_tv)
    val descriptionTextView = view.findViewById<TextView>(R.id.item_description_tv)
}

class SwitchItemViewHolder(view: View): ViewHolder(view) {
    val iconImageView = view.findViewById<ImageView>(R.id.item_icon_iv)
    val titleTextView = view.findViewById<TextView>(R.id.item_title_tv)
    val descriptionTextView = view.findViewById<TextView>(R.id.item_description_tv)
    val switch = view.findViewById<SwitchMaterial>(R.id.item_switch)

    fun updateSwitchStyle() {
        val on = switch.isChecked
        switch.thumbTintList = ColorStateList.valueOf(MaterialColors.getColor(switch, if (on) android.R.attr.colorPrimary else R.attr.switchOffThumbColor))
        switch.trackTintList = ColorStateList.valueOf(MaterialColors.getColor(switch, if (on) R.attr.primaryRippleColor else R.attr.switchOffTrackColor))
    }

}

open class Item(val iconRes: Int, val title: String, var description: String)

class SimpleItem(iconRes: Int, title: String, description: String, val onClick: (SimpleItem) -> Unit): Item(iconRes, title, description)

class SwitchItem(iconRes: Int, title: String, description: String, var isChecked: Boolean, val onClick: (SwitchItem) -> Unit): Item(iconRes, title, description)