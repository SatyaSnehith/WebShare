package ss.nscube.webshare.ui.adapters

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.RelativeLayout
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import ss.nscube.webshare.R
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.ui.utils.loadImage
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.log
import ss.nscube.webshare.utils.scan.models.Data
import ss.nscube.webshare.utils.scan.models.Video

class ImageVideoAdapter<T: Data>(
    val type: String,
    val size: Int,
    val onAlbumItemClickListener: OnAlbumItemClickListener<T>
): RecyclerView.Adapter<ImageVideoAdapter.ImageVideoViewHolder>() {

    var list: ArrayList<T> = ArrayList()
        @SuppressLint("NotifyDataSetChanged")
        set(value) {
            field = value
            notifyDataSetChanged()
        }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ImageVideoViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_album_item, parent, false)
        val layoutParams = view.layoutParams
        layoutParams.height = size
        layoutParams.width = size
        return ImageVideoViewHolder(view)
    }

    override fun onBindViewHolder(holder: ImageVideoViewHolder, position: Int) {
        val item = list[position]
        holder.imageView.loadImage(item)

        if (type == WebFileUtil.Video) {
            holder.durationLayout.visibility = View.VISIBLE
            holder.durationTextView.text = WebFileUtil.getDuration((item as Video).duration)
        } else {
            holder.durationLayout.visibility = View.GONE
        }
        holder.selection(item.isSelected, false)
        log("SELECTION selection $position ${item.isSelected}")
        holder.itemView.setOnClickListener {
            if (!onAlbumItemClickListener.onItemClicked(item)) return@setOnClickListener
            holder.selection(item.isSelected, true)
        }
    }

    override fun getItemCount() = list.size

    class ImageVideoViewHolder(view: View): RecyclerView.ViewHolder(view) {
        val imageLayout = view.findViewById<RelativeLayout>(R.id.image_rl)
        val imageView = view.findViewById<ImageView>(R.id.image_iv)
        val durationLayout = view.findViewById<LinearLayout>(R.id.duration_ll)
        val durationTextView = view.findViewById<TextView>(R.id.duration_tv)
        val selectImageView = view.findViewById<ImageView>(R.id.selection_iv)
        val fromScale = 0.75f
        val toScale = 1f

        fun selection(isSelected: Boolean, animate: Boolean) {
            Util.updateSelectionImageView(null, selectImageView, isSelected, animate)
            val scale = if (isSelected) fromScale else toScale
            if (animate) {
                imageLayout.animate().scaleX(scale).scaleY(scale).setDuration(200).start()
            } else {
                imageLayout.scaleX = scale
                imageLayout.scaleY = scale
            }
        }
    }
}

interface OnAlbumItemClickListener<T: Data> {
    fun onItemClicked(item: T): Boolean
}