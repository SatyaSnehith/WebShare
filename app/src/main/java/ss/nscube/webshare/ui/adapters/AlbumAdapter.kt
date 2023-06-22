package ss.nscube.webshare.ui.adapters

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import coil.load
import coil.transform.CircleCropTransformation
import com.bumptech.glide.Glide
import com.bumptech.glide.load.engine.DiskCacheStrategy
import com.bumptech.glide.load.resource.bitmap.CenterCrop
import com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions
import com.bumptech.glide.request.RequestOptions
import ss.nscube.webshare.R
import ss.nscube.webshare.ui.utils.loadImage
import ss.nscube.webshare.utils.scan.models.Album
import ss.nscube.webshare.utils.scan.models.Data

class AlbumAdapter<D: Data, A: Album<D>>(val onItemClicked: (A) -> Unit): RecyclerView.Adapter<AlbumAdapter.AlbumViewHolder>() {
    var list: ArrayList<A> = ArrayList()
        @SuppressLint("NotifyDataSetChanged")
        set(value) {
            field = value
            notifyDataSetChanged()
        }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): AlbumViewHolder {
        return AlbumViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.item_album, parent, false))
    }

    @SuppressLint("SetTextI18n")
    override fun onBindViewHolder(holder: AlbumViewHolder, position: Int) {
        val album = list[position]
        holder.albumLayout.setOnClickListener {
            onItemClicked(album)
        }
        holder.nameTextView?.text = album.name
        holder.countTextView?.text = "${album.list.size} item${if (album.list.size == 1) "" else "s"}"
        if (holder.sampleImageView != null && album.list.isNotEmpty()) {
            holder.sampleImageView.loadImage(album.list[0])
        }
    }

    override fun getItemCount(): Int {
        return list.size
    }

    class AlbumViewHolder(val view: View): ViewHolder(view) {
        val albumLayout = view.findViewById<LinearLayout>(R.id.album_layout)
        val nameTextView = view.findViewById<TextView>(R.id.name_tv)
        val countTextView = view.findViewById<TextView>(R.id.count_tv)
        val sampleImageView = view.findViewById<ImageView>(R.id.sample_iv)
    }
}