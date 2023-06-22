package ss.nscube.webshare.ui.frags.send

import android.content.res.Resources
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.RecyclerView.Adapter
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import androidx.recyclerview.widget.SimpleItemAnimator
import ss.nscube.webshare.R
import ss.nscube.webshare.databinding.FragmentBaseFileBinding
import ss.nscube.webshare.server.file.WebFile
import ss.nscube.webshare.ui.MenuPopup
import ss.nscube.webshare.ui.frags.BaseFragment
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.utils.scan.FileScan

abstract class BaseFileFragment: BaseFragment() {
    var binding: FragmentBaseFileBinding? = null

    val selectedList: ArrayList<WebFile>
        get() {
            return server.fileManager.selectedFiles
        }

    fun fileManager() = webShareApp?.server?.fileManager

    fun getAlbumItemCountSpan(): Int {
        val screenWidthInDp = uiUtil.px(Resources.getSystem().displayMetrics.widthPixels)
        return if (screenWidthInDp >= 600) 4 else 3
    }

    fun getAlbumItemSize() = Resources.getSystem().displayMetrics.widthPixels / getAlbumItemCountSpan()

    fun getAppItemCountSpan(): Int {
        val screenWidthInDp = uiUtil.px(Resources.getSystem().displayMetrics.widthPixels)
        return if (screenWidthInDp >= 600) 6 else 4
    }

    fun getAppItemSize() =  Resources.getSystem().displayMetrics.widthPixels / getAppItemCountSpan()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentBaseFileBinding.inflate(inflater)
        (binding?.recyclerView?.itemAnimator as? SimpleItemAnimator)?.supportsChangeAnimations = false
        return binding?.root
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    fun enableSpinner() {
        binding?.topBarFl?.visibility = View.VISIBLE
        binding?.albumLayout?.visibility = View.VISIBLE
        binding?.searchLl?.visibility = View.GONE
    }

    fun enableSearch() {
        binding?.topBarFl?.visibility = View.VISIBLE
        binding?.searchLl?.visibility = View.VISIBLE
        binding?.albumLayout?.visibility = View.GONE
    }

    fun enableSelectionMenu(): MenuPopup {
        binding?.menuFl?.visibility = View.VISIBLE
        val menuPopup = MenuPopup(requireContext())
        binding?.menuFl?.setOnClickListener {
            menuPopup.showAtLocation(it)
        }
        menuPopup.addMenuItem(1, R.drawable.icon_select_none, "Deselect all")
        menuPopup.onItemClick(::onMenuItemClicked)
        return menuPopup
    }

    fun onMenuItemClicked(id: Int) {
        when(id) {
            1 -> { // Deselect all
                onDeselectAllClicked()
            }
        }
    }

    override fun onDestroy() {
        super.onDestroy()
    }

    open fun onDeselectAllClicked() {}

    fun updateLayoutVisibility(type: Int) {
        binding?.contentLl?.visibility = if(type == CONTENT) View.VISIBLE else View.GONE
        binding?.progressBar?.visibility = if(type == LOADING) View.VISIBLE else View.GONE
        binding?.noContentLayout?.noContentLl?.visibility = if(type == NO_CONTENT) View.VISIBLE else View.GONE
    }

    companion object {
        const val LOADING = 0
        const val CONTENT = 1
        const val NO_CONTENT = 2
    }


}