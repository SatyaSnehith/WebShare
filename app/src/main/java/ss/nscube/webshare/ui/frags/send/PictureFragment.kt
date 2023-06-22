package ss.nscube.webshare.ui.frags.send

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.View
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.GridLayoutManager
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import ss.nscube.webshare.server.accounts.SelectionUpdateObserver
import ss.nscube.webshare.ui.adapters.ImageVideoAdapter
import ss.nscube.webshare.ui.dialogs.AlbumDialog
import ss.nscube.webshare.server.file.WebFile
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.log
import ss.nscube.webshare.utils.scan.OnScanCompletedListener
import ss.nscube.webshare.utils.scan.models.*

abstract class PictureFragment<D: Data>: BaseFileFragment(),
    OnScanCompletedListener<ArrayList<Album<D>>>,
    SelectionUpdateObserver {

    abstract var imageVideoAdapter: ImageVideoAdapter<D>
    abstract val type: String
    val albumDialog: AlbumDialog<D> = AlbumDialog()
    var currentAlbum: Album<D>? = null

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        updateLayoutVisibility(LOADING)
        enableSpinner()
        enableSelectionMenu()
        albumDialog.onItemClicked = ::onAlbumClicked

        binding?.recyclerView?.layoutManager = GridLayoutManager(requireContext(), getAlbumItemCountSpan())
        binding?.recyclerView?.adapter = imageVideoAdapter

        binding?.albumLayout?.setOnClickListener(::onAlbumNameClicked)
        fileManager()?.observers?.add(this)
    }

    override fun onDeselectAllClicked() {
        if (currentAlbum != null) for ((index, image) in currentAlbum?.list?.withIndex()!!) {
            if (image.isSelected) {
                Util.updateSelection(server, image)
                imageVideoAdapter.notifyItemChanged(index)
            }
        }
    }

    @SuppressLint("SetTextI18n")
    override fun onScanned(data: ArrayList<Album<D>>) {
        if (data.isNotEmpty()) {
            updateLayoutVisibility(CONTENT)
            albumDialog.updateList(data)
            updateAlbum(data[0])
        } else {
            updateLayoutVisibility(NO_CONTENT)
        }
        log("SCANNED onScanned ${Thread.currentThread().name}")
    }

    fun onAlbumNameClicked(view: View) {
        if (!albumDialog.isVisible && !albumDialog.isAdded) {
//            parentFragmentManager.executePendingTransactions()
            albumDialog.show(parentFragmentManager)
        }
    }

    fun onAlbumClicked(album: Album<D>) {
        binding?.recyclerView?.scrollToPosition(0)
        updateAlbum(album)
    }

    @SuppressLint("SetTextI18n")
    fun updateAlbum(album: Album<D>) {
        currentAlbum = album
        binding?.albumNameTv?.text = album.name
        binding?.albumNameTv?.isSelected = true
        binding?.albumCountTv?.text = "${album.list.size} item${if (album.list.size == 1) "" else "s"}"
        updateSelection()
        imageVideoAdapter.list = album.list
    }

    fun updateSelection() {
        if (currentAlbum == null) return
        for(file in currentAlbum?.list!!) {
            file.isSelected = false
            for (selectedFile in selectedList) {
                if (selectedFile.type == type && selectedFile.uri?.equals(file.uri) == true) {
                    file.isSelected = true
                    break
                }
            }
        }
    }

    override fun onUpdate() {
        log("SELECTION onUpdate")
    }

    override fun onRemoved(webFile: WebFile) {
        if (currentAlbum == null) return
        if (webFile.type == type)
            for((index, file) in currentAlbum?.list!!.withIndex()) {
                if (file.uri == webFile.uri) {
                    log("SELECTION onRemoved ${webFile.uri} $index")
                    file.isSelected = false
                    lifecycleScope.launch(Dispatchers.Main) {
                        imageVideoAdapter.notifyItemChanged(index)
                    }
                    return
                }
            }
    }

    override fun onRemovedAll() {
        log("SELECTION onRemovedAll")
        if (currentAlbum == null) return
        for((index, file) in currentAlbum?.list!!.withIndex()) {
            log("SELECTION onRemoved $index")
            val isSelected = file.isSelected
            file.isSelected = false
            if (isSelected) lifecycleScope.launch(Dispatchers.Main) {
                imageVideoAdapter.notifyItemChanged(index)
            }
        }
    }

    override fun onPause() {
        super.onPause()
        if (albumDialog.dialog?.isShowing == true) albumDialog.dismiss()

    }

    override fun onDestroy() {
        super.onDestroy()
        fileManager()?.observers?.remove(this)
    }
}
