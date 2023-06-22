package ss.nscube.webshare.ui.frags.send

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.RelativeLayout
import android.widget.TextView
import androidx.core.widget.addTextChangedListener
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import ss.nscube.webshare.R
import ss.nscube.webshare.server.accounts.SelectionUpdateObserver
import ss.nscube.webshare.server.file.WebFile
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.log
import ss.nscube.webshare.utils.scan.FileScan
import ss.nscube.webshare.utils.scan.OnScanCompletedListener
import ss.nscube.webshare.utils.scan.models.App

class AppFragment: BaseFileFragment(),
    OnScanCompletedListener<ArrayList<App>>,
    SelectionUpdateObserver {

    val adapter = AppFileAdapter(getAppItemSize())

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        updateLayoutVisibility(LOADING)
        enableSelectionMenu()
        enableSearch()
        binding?.recyclerView?.layoutManager = GridLayoutManager(requireContext(), getAppItemCountSpan())
        binding?.recyclerView?.adapter = adapter
        fileManager()?.observers?.add(this)

        FileScan.scanApp(requireContext(), lifecycleScope, this)

        binding?.searchEt?.addTextChangedListener {
            adapter.filter(it.toString())
        }
        binding?.clearFl?.setOnClickListener {
            binding?.searchEt?.text?.clear()
        }
    }

    @SuppressLint("SetTextI18n")
    override fun onScanned(data: ArrayList<App>) {
        if (data.isNotEmpty()) {
            updateLayoutVisibility(CONTENT)
            adapter.actualList = data
            adapter.list = data
        } else {
            updateLayoutVisibility(NO_CONTENT)
        }
        log("SCANNED onScanned ${Thread.currentThread().name}")
    }

    fun updateSelection(list: ArrayList<App>) {
        for(file in list) {
            file.isSelected = false
            for (selectedFile in selectedList) {
                if (selectedFile.type == WebFileUtil.App && selectedFile.uri?.equals(file.uri) == true) {
                    file.isSelected = true
                    break
                }
            }
        }
    }

    override fun onDeselectAllClicked() {
        for ((index, item) in adapter.list.withIndex()) {
            if (item.isSelected) {
                Util.updateSelection(server, item)
                adapter.notifyItemChanged(index)
            }
        }
    }

    override fun onUpdate() {

    }

    override fun onRemoved(file: WebFile) {
        if (file.type == WebFileUtil.App)
            for((index, item) in adapter.list.withIndex()) {
                if (item.uri == file.uri) {
                    log("SELECTION onRemoved ${file.uri} $index")
                    item.isSelected = false
                    lifecycleScope.launch(Dispatchers.Main) {
                        adapter.notifyItemChanged(index)
                    }
                    return
                }
            }
    }

    override fun onRemovedAll() {
        log("SELECTION onRemovedAll")
        for((index, file) in adapter.list.withIndex()) {
            log("SELECTION onRemoved $index")
            val isSelected = file.isSelected
            file.isSelected = false
            if (isSelected) lifecycleScope.launch(Dispatchers.Main) {
                adapter.notifyItemChanged(index)
            }
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        fileManager()?.observers?.remove(this)
    }

    inner class AppFileAdapter(val size: Int): RecyclerView.Adapter<AppViewHolder>() {
        var actualList = ArrayList<App>()

        var list: ArrayList<App> = ArrayList()
            @SuppressLint("NotifyDataSetChanged")
            set(value) {
                field = value
                updateSelection(value)
                notifyDataSetChanged()
            }

        fun filter(str: String) {
            list = if (str.isEmpty()) {
                actualList
            } else {
                actualList.filter { it.label.contains(str, true) } as ArrayList<App>
            }
        }

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): AppViewHolder {
            val view = LayoutInflater.from(parent.context).inflate(R.layout.item_app, parent, false)
            val layoutParams = view.layoutParams
            layoutParams.height = ViewGroup.LayoutParams.WRAP_CONTENT
            layoutParams.width = size
            return AppViewHolder(view)
        }

        override fun onBindViewHolder(holder: AppViewHolder, position: Int) {
            val file = list[position]
            holder.nameTextView.text = file.label
            holder.sizeTextView.text = FileUtil.getSize(file.length)
            Glide.with(holder.iconImageView).load(file.drawable).into(holder.iconImageView);
            Util.updateSelectionImageView(holder.view, holder.selectionImageView, file.isSelected, false)
            holder.rootLayout.setOnClickListener {
                Util.updateSelection(server, file)
                Util.updateSelectionImageView(holder.view, holder.selectionImageView, file.isSelected)
            }
        }

        override fun getItemCount(): Int {
            return list.size
        }
    }

    class AppViewHolder(val view: View): RecyclerView.ViewHolder(view) {
        val rootLayout = view.findViewById<RelativeLayout>(R.id.root_rl)
        val iconImageView = view.findViewById<ImageView>(R.id.icon_iv)
        val selectionImageView = view.findViewById<ImageView>(R.id.selection_iv)
        val nameTextView = view.findViewById<TextView>(R.id.name_tv)
        val sizeTextView = view.findViewById<TextView>(R.id.size_tv)
    }

}