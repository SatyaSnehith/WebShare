package ss.nscube.webshare.ui.frags.home

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView.Adapter
import androidx.recyclerview.widget.RecyclerView.ViewHolder
import com.mikepenz.aboutlibraries.LibsBuilder
import ss.nscube.webshare.BuildConfig
import ss.nscube.webshare.R
import ss.nscube.webshare.databinding.FragmentAboutBinding
import ss.nscube.webshare.ui.frags.BaseFragment
import ss.nscube.webshare.ui.utils.Util

class AboutFragment: BaseFragment() {
    var binding: FragmentAboutBinding? = null

    private val items = listOf(AboutItem("App Version", BuildConfig.VERSION_NAME),
        AboutItem("View Source Code", "Explore the source code of WebShare", ::openGithub),
        AboutItem("Open Source Licenses", "License details for open source software", ::openSourceLicenses),
        AboutItem("Send Feedback", "Help me make WebShare better", ::sendFeedback),
        AboutItem("Report a problem", "Help me make WebShare stable", ::reportProblem),
        AboutItem("Share", "Share WebShare with friends", ::shareApp)
    )
    val adapter = AboutAdapter(items)

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentAboutBinding.inflate(inflater)
        return binding?.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding?.actionBar?.updateMode {
            addBackIcon(this@AboutFragment)
            addTitle("About")
        }

        binding?.aboutRV?.layoutManager = LinearLayoutManager(requireContext())
        binding?.aboutRV?.adapter = adapter

    }

    fun openGithub() {
        Util.openBrowser("https://github.com/SatyaSnehith/WebShare", context)
    }

    private fun reportProblem() {
        activity?.let { Util.sendMail("WebShare Problem", it) }
    }

    private fun sendFeedback() {
        activity?.let { Util.sendMail("WebShare Feedback", it) }
    }

    private fun openSourceLicenses() {
        LibsBuilder()
            .withAboutIconShown(true)
            .withAboutVersionShown(true)
            .withAboutDescription("<b>Open Source licences</b>")
            .start(requireContext())
    }

    fun shareApp() {
        try {
            val shareIntent = Intent(Intent.ACTION_SEND)
            shareIntent.type = "text/plain"
            shareIntent.putExtra(Intent.EXTRA_SUBJECT, "My application name")
            val shareMessage = "Hey, I am using WebShare - a convenient app for local file sharing. It allows you to easily share files with others on the same network.\n" +
                    "\n" +
                    "Download it here: https://play.google.com/store/apps/details?id=${BuildConfig.APPLICATION_ID}"
            shareIntent.putExtra(Intent.EXTRA_TEXT, shareMessage)
            startActivity(Intent.createChooser(shareIntent, "choose one"))
        } catch (e: Exception) {
            //e.toString();
        }
    }

}

class AboutItem(val title: String, val description: String, val onClick: () -> Unit = {})

class AboutAdapter(val list: List<AboutItem>): Adapter<AboutAdapter.AboutViewHolder>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): AboutViewHolder {
        return AboutViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.item_about, parent, false))
    }

    override fun getItemCount() = list.size

    override fun onBindViewHolder(holder: AboutViewHolder, position: Int) {
        val item = list[position]
        holder.titleTV.text = item.title
        holder.descriptionTV.text = item.description
        holder.itemView.setOnClickListener {
            item.onClick()
        }
    }

    class AboutViewHolder(view: View): ViewHolder(view) {
        val titleTV = view.findViewById<TextView>(R.id.titleTV)
        val descriptionTV = view.findViewById<TextView>(R.id.descriptionTV)
    }
}
