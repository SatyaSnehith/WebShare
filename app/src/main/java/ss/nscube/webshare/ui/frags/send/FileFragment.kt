package ss.nscube.webshare.ui.frags.send

import android.annotation.SuppressLint
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.activity.result.contract.ActivityResultContracts
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import ss.nscube.webshare.R
import ss.nscube.webshare.server.file.AppFolderScanListener
import ss.nscube.webshare.server.file.totalSize
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.ui.utils.ViewUtil
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.log


class FileFragment: BaseFileFragment() {
    var folderAdapter: FolderAdapter? = null

    var appFolderScanListener = object: AppFolderScanListener() {
        override fun onScanned() {
            lifecycleScope.launch(Dispatchers.Main) {
                val appFolderManager = server.appFolderManager
                folderAdapter?.folders = arrayListOf(
                    FolderInfo(R.drawable.folder_images, WebFileUtil.Image, appFolderManager.imagesFolder.name, appFolderManager.imageList.size, appFolderManager.imageList.totalSize()),
                    FolderInfo(R.drawable.folder_videos, WebFileUtil.Video, appFolderManager.videosFolder.name, appFolderManager.videoList.size, appFolderManager.videoList.totalSize()),
                    FolderInfo(R.drawable.folder_audio, WebFileUtil.Audio, appFolderManager.audioFolder.name, appFolderManager.audioList.size, appFolderManager.audioList.totalSize()),
                    FolderInfo(R.drawable.folder_apps, WebFileUtil.App, appFolderManager.appsFolder.name, appFolderManager.appList.size, appFolderManager.appList.totalSize()),
                    FolderInfo(R.drawable.folder_docs, WebFileUtil.Document, appFolderManager.documentsFolder.name, appFolderManager.documentList.size, appFolderManager.documentList.totalSize())
                )
            }
        }
    }

    val mimeTypes = arrayOf("image/*", "audio/*", "application/*", "video/*", "text/*", "font/*", "file/*")
    val fileGetMultipleContents = object: ActivityResultContracts.GetMultipleContents() {
        override fun createIntent(context: Context, input: String): Intent {
            val intent = super.createIntent(context, input)
            intent.putExtra(Intent.EXTRA_MIME_TYPES, mimeTypes);
            return intent
        }
    }

    val systemFileChooser = registerForActivityResult(ActivityResultContracts.OpenMultipleDocuments()) { uriList ->
        for(uri in uriList) {
            context?.contentResolver?.takePersistableUriPermission(uri, Intent.FLAG_GRANT_READ_URI_PERMISSION or Intent.FLAG_GRANT_WRITE_URI_PERMISSION)
            val file = WebFileUtil.getFile(context ?: continue, uri) ?: continue
            Util.updateSelection(server, file)
        }
    }

    fun onInternalStorageClicked() {

        systemFileChooser.launch(mimeTypes)
    }

    fun onFolderClicked(type: String) {
        log("TYPE $type")
        navigate(SendFragmentDirections.actionSendFragmentToAppFolderFragment(type))
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        log("FileFragment")
        folderAdapter = FolderAdapter(this)
        binding?.recyclerView?.layoutManager = LinearLayoutManager(requireContext())
        binding?.recyclerView?.adapter = folderAdapter
        server.appFolderManager.addListener(appFolderScanListener)

    }

    override fun onDestroy() {
        super.onDestroy()
        server.appFolderManager.removeListener(appFolderScanListener)
    }
}

class FolderAdapter(val fragment: FileFragment): RecyclerView.Adapter<RecyclerView.ViewHolder>() {
    val TypeStorage = 0
    val TypeTitle = 1
    val TypeFolder = 2

    var folders: ArrayList<FolderInfo> = ArrayList()
        @SuppressLint("NotifyDataSetChanged")
        set(value) {
            field = value
            notifyDataSetChanged()
        }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        return if (viewType == TypeTitle) TitleViewHolder(ViewUtil.getTitleView(parent.context, "APP FOLDERS"))
        else FolderViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.item_send_file, parent, false))
    }

    @SuppressLint("SetTextI18n")
    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        when(getItemViewType(position)) {
            TypeStorage -> {
                holder as FolderViewHolder
                holder.typeImageView.setImageResource(R.drawable.internal_storage)
                holder.titleTextView.text = "Internal Storage"
                holder.descriptionTextView.text = "Browse your internal storage"
                holder.view.setOnClickListener {
                    fragment.onInternalStorageClicked()
                }
            }
            TypeFolder -> {
                holder as FolderViewHolder
                val folderInfo = folders[position - 2]
                holder.typeImageView.setImageResource(folderInfo.iconRes)
                holder.titleTextView.text = folderInfo.name
                holder.descriptionTextView.text = Util.joinWithDot("${folderInfo.fileCount} Files", FileUtil.getSize(folderInfo.totalSize))
                holder.view.setOnClickListener {
                    fragment.onFolderClicked(folderInfo.type)
                }
            }
        }
    }

    override fun getItemCount() = folders.size + 2

    override fun getItemViewType(position: Int): Int {
        return if (position in 0..1) position else 2
    }

    class TitleViewHolder(view: View): RecyclerView.ViewHolder(view)

    class FolderViewHolder(val view: View): RecyclerView.ViewHolder(view) {
        val typeImageView = view.findViewById<ImageView>(R.id.type_iv)
        val titleTextView = view.findViewById<TextView>(R.id.title_tv)
        val descriptionTextView = view.findViewById<TextView>(R.id.description_tv)
    }
}

data class FolderInfo(val iconRes: Int, val type: String, val name: String, val fileCount: Int, val totalSize: Long)