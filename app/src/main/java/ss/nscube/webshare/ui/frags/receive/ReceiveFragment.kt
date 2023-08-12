package ss.nscube.webshare.ui.frags.receive

import android.annotation.SuppressLint
import android.content.Context
import android.content.res.ColorStateList
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.core.app.ShareCompat
import androidx.core.content.ContextCompat
import androidx.core.content.FileProvider
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView.*
import androidx.recyclerview.widget.SimpleItemAnimator
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import ss.nscube.webshare.R
import ss.nscube.webshare.databinding.FragmentReceiveBinding
import ss.nscube.webshare.databinding.ItemReceiveFileBinding
import ss.nscube.webshare.server.file.FileTransferObserver
import ss.nscube.webshare.server.file.WebFile
import ss.nscube.webshare.server.utils.FileUtil
import ss.nscube.webshare.ui.MenuPopup
import ss.nscube.webshare.ui.dialogs.DeleteConfirmationDialog
import ss.nscube.webshare.ui.frags.BaseFragment
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.FileState
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.log
import java.net.URLConnection

class ReceiveFragment : BaseFragment(), FileTransferObserver {
    var binding: FragmentReceiveBinding? = null

    var adapter: ReceiveAdapter = ReceiveAdapter(this)

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentReceiveBinding.inflate(inflater)
        return binding?.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding?.actionBar?.updateMode {
            addBackIcon(this@ReceiveFragment)
            addTitle("Receive")
            addEndIcon(R.drawable.icon_history, "Receive History", ::onHistoryIconClicked)
        }
        val layoutManager = WrapContentLinearLayoutManager(requireContext())
        layoutManager.reverseLayout = true
        layoutManager.stackFromEnd = true
        binding?.receiveRv?.layoutManager = layoutManager
        (binding?.receiveRv?.itemAnimator as? SimpleItemAnimator)?.supportsChangeAnimations = false
        binding?.receiveRv?.adapter = adapter
        updateContentVisibility()
        server.downloadManager.observerList.add(this)
        adapter.list = server.downloadManager.files
    }

    private fun onHistoryIconClicked() {
        navigate(ReceiveFragmentDirections.actionReceiveFragmentToReceiveHistoryFragment())
    }

    private fun updateContentVisibility() {
        val showContent = server.downloadManager.files.isNotEmpty()
        binding?.receiveRv?.visibility = if(showContent) View.VISIBLE else View.GONE
        binding?.noContentLl?.visibility = if(showContent) View.GONE else View.VISIBLE
    }

    fun onRemoveClicked(file: WebFile) {
        lifecycleScope.launch(Dispatchers.IO) {
            server.downloadManager.remove(file)
        }
    }

    fun onMenuClicked(view: View, file: WebFile) {
        val menuPopup = MenuPopup(requireContext())
        menuPopup.addMenuItem(0, R.drawable.icon_menu_share, "Share")
//        menuPopup.addMenuItem(1, R.drawable.icon_menu_rename, "Rename")
        menuPopup.addMenuItem(2, R.drawable.icon_menu_delete, "Delete")
        menuPopup.onItemClick {
            when(it) {
                0 -> {
                    if (file.file == null) return@onItemClick
                    ShareCompat.IntentBuilder(view.context)
                        .setStream(FileProvider.getUriForFile(view.context, activity?.applicationContext?.packageName + ".provider", file.file!!))
                        .setType(URLConnection.guessContentTypeFromName(file.name))
                        .startChooser()
                }
                2 -> {
                    DeleteConfirmationDialog.show(this, "this file") {
                        server.downloadManager.remove(file)
                    }
                }
            }
        }
        menuPopup.showAtLocation(view)
    }

    override fun onDestroy() {
        super.onDestroy()
        server.downloadManager.observerList.remove(this)
    }

    override fun onFileAdded() {
        log("RECEIVE onFileAdded ${adapter.list.size - 1}")
        launchMain {
            adapter.notifyItemInserted(adapter.list.size - 1)
            updateContentVisibility()
        }
    }

    @SuppressLint("NotifyDataSetChanged")
    override fun onFileRemoved(file: WebFile, removedIndex: Int) {
//            if (removedIndex == adapter.list.size)
//                adapter.notifyDataSetChanged()
//            else {
        launchMain {
            log("RECEIVE onFileRemoved $removedIndex size:${server.downloadManager.files.size}")
//            adapter.notifyDataSetChanged()
            adapter.notifyItemRemoved(removedIndex)
            adapter.notifyItemRangeChanged(removedIndex, adapter.list.size)
            updateContentVisibility()
        }
//            }
    }

    override fun onStatusChanged(fileIndex: Int) {
        log("RECEIVE onStatusChanged $fileIndex ${adapter.list[fileIndex].state}")
        launchMain {
            adapter.notifyItemChanged(fileIndex)
        }
    }

    @SuppressLint("NotifyDataSetChanged")
    override fun onResume() {
        super.onResume()
        // refresh for deleted files from appFolderManager (ReceiveHistory)
        adapter.notifyDataSetChanged()
        updateContentVisibility()
    }
}

class WrapContentLinearLayoutManager(context: Context?) : LinearLayoutManager(context) {

    override fun onLayoutChildren(recycler: Recycler, state: State) {
        try {
            super.onLayoutChildren(recycler, state)
        } catch (e: IndexOutOfBoundsException) {
            log("onLayoutChildren meet a in RecyclerView")
        }
    }
}

class ReceiveAdapter(val fragment: ReceiveFragment): Adapter<ReceiveAdapter.ReceiveViewHolder>() {
    val uiUtil = UiUtil.getInstance()
    var list = mutableListOf<WebFile>()
        @SuppressLint("NotifyDataSetChanged")
        set(value) {
            field = value
            notifyDataSetChanged()
        }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ReceiveViewHolder {
       return ReceiveViewHolder(ItemReceiveFileBinding.inflate(LayoutInflater.from(parent.context)))
    }

    override fun getItemCount() = list.size

    @SuppressLint("SetTextI18n")
    override fun onBindViewHolder(holder: ReceiveViewHolder, position: Int) {
        val file = list[position]
        val binding = holder.binding
        binding.nameTv.text = file.name
        binding.seekbar.isEnabled = false
        Util.setImage(binding.iconFl, binding.imageIv, binding.iconIv, file)
        when(file.state) {
            FileState.Loading -> {
                binding.seekbar.visibility = View.VISIBLE
                file.fileDownloader?.progressCalculator?.let { progress ->
                    binding.seekbar.progress = progress.percent
                    binding.sizeTv.text = "${FileUtil.getSize(progress.transferred)} / ${FileUtil.getSize(file.length)} • ${WebFileUtil.getETA(progress.eta * 1000)} left"
                }
                binding.removeIv.setImageResource(R.drawable.icon_remove)
                binding.removeFl.setBackgroundResource(R.drawable.round_red_ripple)
                binding.removeIv.imageTintList = ColorStateList.valueOf(ContextCompat.getColor(binding.removeIv.context, R.color.red))
            }
            FileState.Completed -> {
                binding.seekbar.visibility = View.GONE
                binding.sizeTv.text = FileUtil.getSize(file.length)
                binding.removeIv.setImageResource(R.drawable.icon_menu)
                binding.removeFl.setBackgroundResource(R.drawable.round_bg_ripple_menu)
                binding.removeIv.imageTintList = ColorStateList.valueOf(UiUtil.primaryTextColor(binding.removeFl.context))
            }
            else -> {}
        }
        file.fileDownloader?.setProgressUpdater { _, _, _ ->
            fragment.launchMain {
                notifyItemChanged(position)
//                binding.seekbar.progress = percent
//                binding.sizeTv.text = "${FileUtil.getSize(transferred)} / ${FileUtil.getSize(file.length)} • ${WebFileUtil.getETA(eta * 1000)} left"
            }
        }
        binding.root.setOnClickListener {
            if (file.state == FileState.Completed && file.file != null) Util.openFile(it.context, file.file!!)
        }
        binding.removeFl.setOnClickListener {
            when(file.state) {
                FileState.Loading -> {
                    fragment.onRemoveClicked(file)
                }
                FileState.Completed -> {
                    fragment.onMenuClicked(it, file)
                }
//            FileState.Canceled -> {
//                binding.seekbar.visibility = View.GONE
//                binding.speedTv.visibility = View.GONE
//
//            }
                else -> {}
            }
        }
    }

    class ReceiveViewHolder(val binding: ItemReceiveFileBinding): ViewHolder(binding.root)
}