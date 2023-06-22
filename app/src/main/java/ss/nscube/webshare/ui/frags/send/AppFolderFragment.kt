package ss.nscube.webshare.ui.frags.send

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.core.widget.addTextChangedListener
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.navArgs
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView.Adapter
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import androidx.recyclerview.widget.SimpleItemAnimator
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import ss.nscube.webshare.R
import ss.nscube.webshare.databinding.FragmentAppFolderBinding
import ss.nscube.webshare.databinding.ItemSelectFileBinding
import ss.nscube.webshare.server.file.AppFile
import ss.nscube.webshare.server.file.AppFolderScanListener
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.ui.MenuPopup
import ss.nscube.webshare.ui.frags.BaseFragment
import ss.nscube.webshare.ui.utils.TimeCal
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.log

class AppFolderFragment : BaseFragment() {
    var binding: FragmentAppFolderBinding? = null
    val args: AppFolderFragmentArgs by navArgs()
    var appFileAdapter: AppFileAdapter? = null
    var menuPopup: MenuPopup? = null
        get() {
            if (field == null) {
                field = MenuPopup(requireContext())
                field!!.addMenuItem(1, R.drawable.icon_select_none, "Deselect all")
                field!!.onItemClick {
                    for ((index, appFile) in appFileAdapter?.list?.withIndex()!!) {
                        if (appFile.isSelected) {
                            Util.updateSelection(server, appFile)
                            appFileAdapter?.notifyItemChanged(index)
                        }
                    }
                }
            }
            return field
        }

    var appFolderScanListener = object: AppFolderScanListener() {
        override fun onScanned() {
            log("FragLoadAppFolderFragment appFolderScanListener")
            val appFolderManager = server.appFolderManager
            launchMain {
                val list = when(args.type) {
                    WebFileUtil.Image -> appFolderManager.imageList
                    WebFileUtil.Audio -> appFolderManager.audioList
                    WebFileUtil.Video -> appFolderManager.videoList
                    WebFileUtil.App -> appFolderManager.appList
                    else -> appFolderManager.documentList
                }
                appFileAdapter?.list = list
                appFileAdapter?.actualList = list

                if (list.isEmpty())
                    updateLayoutVisibility(NO_CONTENT)
                else updateLayoutVisibility(CONTENT)
            }
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentAppFolderBinding.inflate(inflater)
        return binding?.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val file = server.appFolderManager.folderFromType(args.type)
        log("TYPE ${args.type} ${file.path}")
        binding?.actionBar?.updateMode {
            addBackIcon(this@AppFolderFragment)
            addTitle(file.name ?: "")
            addMenuIcon(this@AppFolderFragment)
        }

        updateLayoutVisibility(LOADING)
        appFileAdapter = AppFileAdapter()
        binding?.appFilesRv?.layoutManager = LinearLayoutManager(requireContext())
        binding?.appFilesRv?.adapter = appFileAdapter
        (binding?.appFilesRv?.itemAnimator as? SimpleItemAnimator)?.supportsChangeAnimations = false
        server.appFolderManager.addListener(appFolderScanListener)

        binding?.searchEt?.addTextChangedListener {
            appFileAdapter?.filter(it.toString())
        }
        binding?.clearFl?.setOnClickListener {
            binding?.searchEt?.text?.clear()
        }

    }

    override fun openMenu(view: View) {
        menuPopup?.showAtLocation(view)
    }

    override fun onDestroy() {
        super.onDestroy()
        server.appFolderManager.removeListener(appFolderScanListener)
    }

    fun updateLayoutVisibility(type: Int) {
        binding?.appFilesRv?.visibility = if(type == CONTENT) View.VISIBLE else View.GONE
        binding?.progressBar?.visibility = if(type == LOADING) View.VISIBLE else View.GONE
        binding?.noContentLayout?.noContentLl?.visibility = if(type == NO_CONTENT) View.VISIBLE else View.GONE
    }

    fun updateSelection(list: ArrayList<AppFile>) {
        val selectedFiles = webShareApp?.server?.fileManager?.selectedFiles ?: return
        for(file in list) {
            file.isSelected = false
            for (selectedFile in selectedFiles)
                if (selectedFile.type == file.type && selectedFile.file?.equals(file.file) == true) {
                    file.isSelected = true
                    break
                }
        }
    }

    companion object {
        const val LOADING = 0
        const val CONTENT = 1
        const val NO_CONTENT = 2
    }
    
    inner class AppFileAdapter: Adapter<AppFileViewHolder>() {
        var actualList: ArrayList<AppFile> = ArrayList()
        var list: ArrayList<AppFile> = ArrayList()
            @SuppressLint("NotifyDataSetChanged")
            set(value) {
                field = value
                launch {
                    updateSelection(value)
                    launchMain {
                        notifyDataSetChanged()
                    }
                }
            }

        fun filter(str: String) {
            list = if (str.isEmpty()) {
                actualList
            } else {
                actualList.filter { it.name.contains(str, true) } as ArrayList<AppFile>
            }
        }

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): AppFileViewHolder {
            return AppFileViewHolder(ItemSelectFileBinding.inflate(LayoutInflater.from(parent.context)))
        }

        override fun onBindViewHolder(holder: AppFileViewHolder, position: Int) {
            val file = list[position]
            val binding = holder.binding
            binding.nameTv.text = file.name
            binding.nameTv.isSelected = true
            binding.infoTv.text = FileUtil.getSize(file.length)
            Util.setImage(binding.iconFl, binding.imageIv, binding.iconIv, file)
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

    class AppFileViewHolder(val binding: ItemSelectFileBinding): ViewHolder(binding.root)

}

