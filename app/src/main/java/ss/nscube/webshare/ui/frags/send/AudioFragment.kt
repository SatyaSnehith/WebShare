package ss.nscube.webshare.ui.frags.send

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.core.widget.addTextChangedListener
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import ss.nscube.webshare.databinding.ItemSelectFileBinding
import ss.nscube.webshare.server.user.SelectionUpdateObserver
import ss.nscube.webshare.server.file.WebFile
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.log
import ss.nscube.webshare.utils.scan.FileScan
import ss.nscube.webshare.utils.scan.OnScanCompletedListener
import ss.nscube.webshare.utils.scan.models.Audio

class AudioFragment: BaseFileFragment(),
    OnScanCompletedListener<ArrayList<Audio>>,
    SelectionUpdateObserver {

    val adapter = AudioFileAdapter()

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        updateLayoutVisibility(LOADING)
        enableSelectionMenu()
        enableSearch()
        binding?.recyclerView?.layoutManager = LinearLayoutManager(requireContext())
        binding?.recyclerView?.adapter = adapter
        fileManager()?.observers?.add(this)

        FileScan.scanAudio(requireContext(), lifecycleScope, this)

        binding?.searchEt?.addTextChangedListener {
            adapter.filter(it.toString())
        }
        binding?.clearFl?.setOnClickListener {
            binding?.searchEt?.text?.clear()
        }
    }

    @SuppressLint("SetTextI18n")
    override fun onScanned(data: ArrayList<Audio>) {
        if (data.isNotEmpty()) {
            updateLayoutVisibility(CONTENT)
            adapter.actualList = data
            adapter.list = data
        } else {
            updateLayoutVisibility(NO_CONTENT)
        }
        log("SCANNED onScanned ${Thread.currentThread().name}")
    }

    fun updateSelection(list: ArrayList<Audio>) {
        for(file in list) {
            file.isSelected = false
            for (selectedFile in selectedList) {
                if (selectedFile.type == WebFileUtil.Audio && selectedFile.uri?.equals(file.uri) == true) {
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
        if (file.type == WebFileUtil.Audio)
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

    inner class AudioFileAdapter: RecyclerView.Adapter<AudioFileViewHolder>() {
        var actualList = ArrayList<Audio>()
        var list: ArrayList<Audio> = ArrayList()
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
                actualList.filter { it.name.contains(str, true) } as ArrayList<Audio>
            }
        }

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): AudioFileViewHolder {
            return AudioFileViewHolder(ItemSelectFileBinding.inflate(LayoutInflater.from(parent.context)))
        }

        override fun onBindViewHolder(holder: AudioFileViewHolder, position: Int) {
            val file = list[position]
            val binding = holder.binding
            binding.nameTv.text = file.name
            binding.nameTv.isSelected = true
            binding.infoTv.text = FileUtil.getSize(file.length)
            Util.setAudioImage(binding.iconFl, binding.imageIv, binding.iconIv)
            Util.updateSelectionImageView(binding.root, binding.selectionIv, file.isSelected, false)
            binding.rootRl.setOnClickListener {
                Util.updateSelection(server, file)
                Util.updateSelectionImageView(binding.root, binding.selectionIv, file.isSelected)
            }
        }

        override fun getItemCount(): Int {
            return list.size
        }
    }

    class AudioFileViewHolder(val binding: ItemSelectFileBinding): RecyclerView.ViewHolder(binding.root)

}