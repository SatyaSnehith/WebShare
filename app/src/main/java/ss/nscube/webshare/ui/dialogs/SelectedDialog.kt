package ss.nscube.webshare.ui.dialogs

import android.annotation.SuppressLint
import android.app.Dialog
import android.os.Bundle
import android.view.Gravity
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import android.widget.LinearLayout
import android.widget.TextView
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.FragmentManager
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.RecyclerView.Adapter
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import androidx.recyclerview.widget.SimpleItemAnimator
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import ss.nscube.webshare.R
import ss.nscube.webshare.WebShareApp
import ss.nscube.webshare.databinding.ItemSelectedFileBinding
import ss.nscube.webshare.server.user.FileManager
import ss.nscube.webshare.server.user.SelectionUpdateObserver
import ss.nscube.webshare.server.file.WebFile
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.ui.MenuPopup
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.log

class SelectedDialog: DialogFragment(), SelectionUpdateObserver {
    val selectedAdapter = SelectedAdapter()
    var menuPopup: MenuPopup? = null
    val uiUtil = UiUtil.getInstance()
    var selectedTv: TextView? = null
    var filesRv: RecyclerView? = null
    var noContentLayout: LinearLayout? = null

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = Dialog(requireContext())
        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)
        dialog.setContentView(R.layout.dialog_selected)
        filesRv = dialog.findViewById(R.id.files_rv)
        noContentLayout = dialog.findViewById(R.id.no_content_ll)
        val menuFl = dialog.findViewById<FrameLayout>(R.id.menu_fl)
        selectedTv = dialog.findViewById(R.id.selected_tv)
        noContentCheck()
        filesRv!!.layoutManager = LinearLayoutManager(requireContext())
        filesRv!!.adapter = selectedAdapter
        (filesRv!!.itemAnimator as? SimpleItemAnimator)?.supportsChangeAnimations = false

        fileManager?.observers?.add(this)
        updateSelectionText()
        menuPopup = MenuPopup(requireContext())
        menuPopup?.addMenuItem(0, R.drawable.icon_remove, "Clear all")
        menuPopup?.onItemClick {
            fileManager?.removeAllSelection()
        }
        menuFl.setOnClickListener { view ->
            val location = IntArray(2)
            view.getLocationOnScreen(location)
            val top = 0 + view.height
            log("POPUP $top ${view.height}")
            menuPopup?.showAtLocation(view, (Gravity.TOP or Gravity.END) , uiUtil.dp(10).toInt(), top)
        }

        if (fileManager?.selectedFiles != null)
            selectedAdapter.list = fileManager?.selectedFiles!!

        return dialog
    }

    override fun onDestroy() {
        super.onDestroy()
        fileManager?.observers?.remove(this)
    }

    @SuppressLint("SetTextI18n")
    fun updateSelectionText() {
        selectedTv?.text = "Selected items: ${fileManager?.files?.size ?: 0}"
    }

    val fileManager: FileManager?
        get() {
            return (activity?.application as? WebShareApp)?.server?.fileManager
        }

    fun show(fragmentManager: FragmentManager) {
        show(fragmentManager, Tag)
    }


    override fun onUpdate() {
        lifecycleScope.launch(Dispatchers.Main) {
            updateSelectionText()
        }
    }

    override fun onRemoved(file: WebFile) {
    }

    @SuppressLint("NotifyDataSetChanged")
    override fun onRemovedAll() {
        lifecycleScope.launch(Dispatchers.Main) {
            selectedAdapter.notifyDataSetChanged()
            noContentCheck()
        }
    }

    fun noContentCheck() {
        if (fileManager?.files?.isEmpty() == true) {
            noContentLayout?.visibility = View.VISIBLE
            filesRv?.visibility = View.GONE
        } else {
            noContentLayout?.visibility = View.GONE
            filesRv?.visibility = View.VISIBLE
        }
    }

    companion object {
        val Tag = SelectedDialog::class.java.simpleName
    }

    inner class SelectedAdapter: Adapter<SelectedViewHolder>() {
        var list: ArrayList<WebFile> = ArrayList()
            @SuppressLint("NotifyDataSetChanged")
            set(value) {
                field = value
                notifyDataSetChanged()
            }

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): SelectedViewHolder {
            return SelectedViewHolder(ItemSelectedFileBinding.inflate(LayoutInflater.from(parent.context)))
        }

        override fun onBindViewHolder(holder: SelectedViewHolder, position: Int) {
            val file = list[position]
            val binding = holder.binding
            binding.nameTv.text = file.name
            binding.nameTv.isSelected = true
            binding.infoTv.text = FileUtil.getSize(file.length)
            Util.setImage(binding.iconFl, binding.imageIv, binding.iconIv, file)
            binding.removeFl.setOnClickListener {
                list.remove(file)
                fileManager?.removeSelection(file, true)
                noContentCheck()
                notifyItemRemoved(position)
                notifyItemRangeChanged(position, list.size)
            }
        }

        override fun getItemCount() = list.size
    }

    class SelectedViewHolder(val binding: ItemSelectedFileBinding): ViewHolder(binding.root)


}

