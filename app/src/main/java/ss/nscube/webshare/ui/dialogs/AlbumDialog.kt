package ss.nscube.webshare.ui.dialogs

import android.app.Dialog
import android.os.Bundle
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.FragmentManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import ss.nscube.webshare.R
import ss.nscube.webshare.ui.adapters.AlbumAdapter
import ss.nscube.webshare.utils.scan.models.Album
import ss.nscube.webshare.utils.scan.models.Data

class AlbumDialog<D: Data>(): DialogFragment() {
    val albumAdapter = AlbumAdapter(::onAlbumClicked)
    var onItemClicked: (Album<D>) -> Unit = {}

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = Dialog(requireContext())
        dialog.window?.setBackgroundDrawableResource(android.R.color.transparent)
        dialog.setContentView(R.layout.dialog_album_select)
        val recyclerView = dialog.findViewById<RecyclerView>(R.id.album_rv)
        recyclerView.layoutManager = LinearLayoutManager(requireContext())
        recyclerView.adapter = albumAdapter
        return dialog
    }

    fun updateList(list: ArrayList<Album<D>>) {
        albumAdapter.list = list
    }

    fun show(fragmentManager: FragmentManager) {
        show(fragmentManager, Tag)
    }

    fun onAlbumClicked(album: Album<D>) {
        dismiss()
        onItemClicked(album)
    }

    companion object {
        val Tag = AlbumDialog::class.java.simpleName
    }
}