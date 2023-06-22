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

class VideoFragment: PictureFragment<Video>(), OnAlbumItemClickListener<Video> {
    override val type = WebFileUtil.Video
    override var imageVideoAdapter = ImageVideoAdapter(type, getAlbumItemSize(), this)

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        FileScan.scanVideo(requireContext(), lifecycleScope, this)
    }

    override fun onItemClicked(item: Video): Boolean {
        Util.updateSelection(server, item)
        return true
    }
}
