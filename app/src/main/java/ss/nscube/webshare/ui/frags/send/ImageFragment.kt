package ss.nscube.webshare.ui.frags.send

import android.os.Bundle
import android.view.View
import androidx.lifecycle.lifecycleScope
import ss.nscube.webshare.ui.adapters.ImageVideoAdapter
import ss.nscube.webshare.ui.adapters.OnAlbumItemClickListener
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.scan.FileScan
import ss.nscube.webshare.utils.scan.models.*

class ImageFragment: PictureFragment<Image>(), OnAlbumItemClickListener<Image> {
    override val type = WebFileUtil.Image
    override var imageVideoAdapter = ImageVideoAdapter(type, getAlbumItemSize(), this)

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        FileScan.scanImage(requireContext(), lifecycleScope, this)
    }

    override fun onItemClicked(item: Image): Boolean {
        Util.updateSelection(server, item)
        return true
    }
}
