package ss.nscube.webshare.ui.frags.receive

import android.annotation.SuppressLint
import android.content.res.ColorStateList
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.core.app.ShareCompat
import androidx.core.content.FileProvider
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView.Adapter
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import androidx.recyclerview.widget.SimpleItemAnimator
import com.google.android.material.color.MaterialColors
import ss.nscube.webshare.R
import ss.nscube.webshare.databinding.FragmentReceiveHistoryBinding
import ss.nscube.webshare.databinding.ItemReceiveHistoryFileBinding
import ss.nscube.webshare.server.file.AppFile
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.ui.MenuPopup
import ss.nscube.webshare.ui.dialogs.DeleteConfirmationDialog
import ss.nscube.webshare.ui.frags.BaseFragment
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.log
import java.net.URLConnection
import java.text.SimpleDateFormat
import java.util.Locale

class ReceiveHistoryFragment: BaseFragment() {
    var binding: FragmentReceiveHistoryBinding? = null
    private val tabAdapter = TabAdapter(
        listOf(
            Pair("all", "All"),
            Pair(WebFileUtil.Image, "Image"),
            Pair(WebFileUtil.Video, "Video"),
            Pair(WebFileUtil.Audio, "Audio"),
            Pair(WebFileUtil.Document, "Documents"),
            Pair(WebFileUtil.App, "Apps")
        ), ::onItemClick)
    private var fileAdapter: FileAdapter? = null
    val ModeNormal = 0
    val ModeSearch = 1
    val ModeSelection = 2
    var currentMode = ModeNormal
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentReceiveHistoryBinding.inflate(inflater)
        return binding?.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        updateMode(ModeNormal)

        binding?.tabRv?.layoutManager = LinearLayoutManager(requireContext(), LinearLayoutManager.HORIZONTAL, false)
        (binding?.tabRv?.itemAnimator as? SimpleItemAnimator)?.supportsChangeAnimations = false
        binding?.tabRv?.adapter = tabAdapter

        fileAdapter = FileAdapter(this)
        binding?.receiveRv?.layoutManager = LinearLayoutManager(requireContext())
        binding?.receiveRv?.adapter = fileAdapter
        (binding?.receiveRv?.itemAnimator as? SimpleItemAnimator)?.supportsChangeAnimations = false
        updateContentVisibility()

    }

    private fun onItemClick(type: String) {
        fileAdapter?.type = type
        binding?.receiveRv?.scrollToPosition(0)
        updateContentVisibility()
    }

    private fun updateContentVisibility() {
        if (fileAdapter?.list?.isEmpty() == true) {
            binding?.noContentLl?.visibility = View.VISIBLE
            binding?.receiveRv?.visibility = View.GONE
        } else {
            binding?.noContentLl?.visibility = View.GONE
            binding?.receiveRv?.visibility = View.VISIBLE
        }
    }

    fun onItemMenuClicked(file: AppFile, position: Int, view: View) {
        val menuPopup = MenuPopup(requireContext())
        menuPopup.addMenuItem(0, R.drawable.icon_menu_share, "Share")
//        menuPopup.addMenuItem(1, R.drawable.icon_menu_rename, "Rename")
        menuPopup.addMenuItem(2, R.drawable.icon_menu_delete, "Delete")
        menuPopup.onItemClick {
            when(it) {
                0 -> {
                    context?.let { context ->
                        ShareCompat.IntentBuilder(context)
                            .setStream(FileProvider.getUriForFile(context, activity?.applicationContext?.packageName + ".provider", file.file))
                            .setType(URLConnection.guessContentTypeFromName(file.name))
                            .startChooser()
                    }
                }
                2 -> {
                    DeleteConfirmationDialog.show(this, "this file") {
                        deleteFile(file, position)
                    }
                }
            }
        }
        menuPopup.showAtLocation(view)
    }

    fun onItemClicked(file: AppFile) {
        Util.openFile(context, file.file)
    }

    private fun deleteSelected() {
        DeleteConfirmationDialog.show(this, "these files") {
            if (fileAdapter == null) return@show
            fileAdapter?.deleteSelected()
            fileAdapter?.selectedList?.clear()
            updateMode(ModeNormal)
            updateContentVisibility()
        }
    }

    private fun deleteFile(file: AppFile, position: Int) {
        fileAdapter?.delete(file, position)
        updateContentVisibility()
    }

    fun updateMode(mode: Int) {
        currentMode = mode
        when(mode) {
            ModeNormal -> binding?.actionBar?.updateMode {
                addBackIcon(this@ReceiveHistoryFragment)
                addTitle("Receive history")
                addEndIcon(R.drawable.icon_search, "Search") { updateMode(ModeSearch) }
                updateMenuVisibility(true)
            }
            ModeSelection -> {
                updateMenuVisibility(false)
                binding?.actionBar?.updateMode {
                    addCloseIcon {
                        fileAdapter?.clearSelections()
                        fileAdapter?.selectedList?.clear()
                        updateMode(ModeNormal)
                    }
                    addTitle(fileAdapter?.getSelectedCountText() ?: "0 items selected")
                    addEndIcon(R.drawable.icon_delete, "Delete Selected", ::deleteSelected)
                }
            }
            ModeSearch -> binding?.actionBar?.updateMode {
                addBackIcon {
                    searchEditText.setText("")
                    searchEditText.post {
                        Util.closeSoftKeyboard(searchEditText)
                        updateMode(ModeNormal)
                    }
                }
                addSearch("Search") {
                    fileAdapter?.filter(it)
                    updateContentVisibility()
                }
                addEndIcon(R.drawable.icon_remove, "Clear Search") {
                    searchEditText.setText("")
                    searchEditText.post {
                        Util.closeSoftKeyboard(searchEditText)
                    }
                }
                searchEditText.post {
                    Util.openSoftKeyboard(searchEditText)
                }
            }
        }
    }

    private fun updateMenuVisibility(show: Boolean) {
        fileAdapter?.showMenu = show
        updateMenuToVisibleItems(show)
    }

    private fun updateMenuToVisibleItems(show: Boolean) {
        val layoutManager = (binding?.receiveRv?.layoutManager as? LinearLayoutManager) ?: return
        for (i in layoutManager.findFirstVisibleItemPosition() .. layoutManager.findLastVisibleItemPosition()) {
            val viewHolder = (binding?.receiveRv?.findViewHolderForAdapterPosition(i) as? FileAdapter.FileViewHolder) ?: continue
            log("VIEW_HOLDER $i")
            viewHolder.binding.menuFl.visibility = if (show) View.VISIBLE else View.INVISIBLE
        }
    }

    override fun onBackClicked() {
        when(currentMode) {
            ModeSearch, ModeSelection -> {
                fileAdapter?.clearSelections()
                fileAdapter?.selectedList?.clear()
                updateMode(ModeNormal)
            }
            else -> {
                super.onBackClicked()
            }
        }
    }
}

class TabAdapter(val list: List<Pair<String, String>>, val onClick: (String) -> Unit): Adapter<TabAdapter.TabViewHolder>() {
    var selected = 0
    val uiUtil = UiUtil.getInstance()

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TabViewHolder {
        return TabViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.item_history_tab, parent, false) as TextView)
    }

    override fun getItemCount() = list.size

    override fun onBindViewHolder(holder: TabViewHolder, position: Int) {
        val item = list[position]
        holder.textView.text = item.second
        holder.textView.backgroundTintList = ColorStateList.valueOf(if (selected == position) uiUtil.t50TabColor else MaterialColors.getColor(holder.textView, R.attr.backgroundColor))
        holder.textView.setOnClickListener {
            val oldSelected = selected
            selected = position
            holder.textView.backgroundTintList = ColorStateList.valueOf(uiUtil.t50TabColor)
            notifyItemChanged(oldSelected)
            onClick(item.first)
        }
    }

    class TabViewHolder(val textView: TextView): ViewHolder(textView)
}

class FileAdapter(val fragment: ReceiveHistoryFragment): Adapter<FileAdapter.FileViewHolder>() {
    var type: String = "all"
        set(value) {
            field = value
            when(type) {
                "all" -> actualList = manager.getAllFileByDate()
                WebFileUtil.Image -> actualList = manager.imageList
                WebFileUtil.Video -> actualList = manager.videoList
                WebFileUtil.Audio -> actualList = manager.audioList
                WebFileUtil.Document -> actualList = manager.documentList
                WebFileUtil.App -> actualList = manager.appList
            }
            filter(searchText)
        }
    private var searchText = ""
    private val manager = fragment.server.appFolderManager
    private var actualList = manager.getAllFileByDate()
    var selectedList: ArrayList<AppFile> = ArrayList()

    var list = ArrayList(actualList)
        @SuppressLint("NotifyDataSetChanged")
        set(value) {
            field = value
            notifyDataSetChanged()
        }
    var showMenu = true

    fun filter(str: String) {
        searchText = str
        list = if (str.isEmpty()) {
            actualList
        } else {
            actualList.filter { it.name.contains(str, true) } as ArrayList<AppFile>
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): FileViewHolder {
        return FileViewHolder(ItemReceiveHistoryFileBinding.inflate(LayoutInflater.from(parent.context)))
    }

    override fun getItemCount() = list.size

    override fun onBindViewHolder(holder: FileViewHolder, position: Int) {
        val file = list[position]
        val binding = holder.binding
        binding.nameTv.text = file.name
        binding.infoTv.text = FileUtil.getSize(file.length)
        binding.dateTv.text = SimpleDateFormat("MMM dd, yyyy, HH:mm a", Locale.getDefault()).format(file.lastModified)
        Util.setImage(binding.iconFl, binding.imageIv, binding.iconIv, file)
        binding.menuFl.visibility = if (showMenu) View.VISIBLE else View.INVISIBLE
        binding.menuFl.setOnClickListener {
            fragment.onItemMenuClicked(file, position, it)
        }
        updateSelectionBg(file, holder.itemView)
        binding.rootRl.setOnClickListener {
            when(fragment.currentMode) {
                fragment.ModeSelection -> select(file, holder.itemView)
                else -> fragment.onItemClicked(file)
            }
        }
        binding.rootRl.setOnLongClickListener {
            when(fragment.currentMode) {
                fragment.ModeNormal -> {
                    fragment.updateMode(fragment.ModeSelection)
                    select(file, holder.itemView)
                }
                fragment.ModeSelection -> select(file, holder.itemView)
            }
            true
        }
    }

    override fun onViewRecycled(holder: FileViewHolder) {
        super.onViewRecycled(holder)
        holder.binding.menuFl.visibility = if (showMenu) View.VISIBLE else View.INVISIBLE
    }

    private fun select(file: AppFile, root: View) {
        if (file.inSelection) {
            file.inSelection = false
            selectedList.remove(file)
            root.setBackgroundResource(0)
            if (selectedList.isEmpty()) {
                fragment.updateMode(fragment.ModeNormal)
                return
            }
        } else {
            file.inSelection = true
            selectedList.add(file)
            root.setBackgroundColor(MaterialColors.getColor(root, R.attr.selectionBackgroundColor))
        }
        fragment.binding?.actionBar?.setTitle(getSelectedCountText())
    }

    private fun updateSelectionBg(file: AppFile, root: View) {
        if (file.inSelection) {
            root.setBackgroundColor(MaterialColors.getColor(root, R.attr.selectionBackgroundColor))
        } else {
            root.setBackgroundResource(0)
        }
    }

    fun getSelectedCountText() = "${selectedList.size} item${if (selectedList.size == 1) "" else "s"} selected"


    fun clearSelections() {
        clearSelection(list, true)
        clearSelection(selectedList)
    }

    private fun clearSelection(list: ArrayList<AppFile>, notify: Boolean = false) {
        for ((index, file) in list.withIndex()) {
            if (file.inSelection) {
                file.inSelection = false
                if (notify) notifyItemChanged(index)
            }
        }
    }

    fun delete(file: AppFile, position: Int) {
        if (manager.deleteFile(file)) {
            list.remove(file)
            notifyItemRemoved(position)
            notifyItemRangeChanged(position, list.size)
        }
    }

    @SuppressLint("NotifyDataSetChanged")
    fun deleteSelected() {
        list.removeAll(manager.deleteAllFiles(selectedList).toSet())
        notifyDataSetChanged()
    }

    class FileViewHolder(val binding: ItemReceiveHistoryFileBinding): ViewHolder(binding.root)
}
