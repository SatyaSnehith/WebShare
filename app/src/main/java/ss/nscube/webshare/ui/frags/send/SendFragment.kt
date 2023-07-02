package ss.nscube.webshare.ui.frags.send

import android.graphics.Color
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.lifecycleScope
import androidx.lifecycle.repeatOnLifecycle
import androidx.viewpager2.adapter.FragmentStateAdapter
import com.bumptech.glide.Glide
import com.google.android.material.tabs.TabLayout
import com.google.android.material.tabs.TabLayoutMediator
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import ss.nscube.webshare.databinding.FragmentSendBinding
import ss.nscube.webshare.server.user.SelectionUpdateObserver
import ss.nscube.webshare.server.file.WebFile
import ss.nscube.webshare.ui.dialogs.SelectedDialog
import ss.nscube.webshare.ui.frags.BaseFragment
import ss.nscube.webshare.ui.utils.*
import ss.nscube.webshare.utils.log

class SendFragment : BaseFragment(), TabLayout.OnTabSelectedListener, SelectionUpdateObserver {
    var binding: FragmentSendBinding? = null

    var filesPagerAdapter: FilesPagerAdapter? = null

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentSendBinding.inflate(inflater)
        return binding?.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding?.actionBar?.updateMode {
            addBackIcon(this@SendFragment)
            addTitle("Send")
        }
        updateSelectionCount()
        server.fileManager.observers.add(this)

        val pagerItemList = listOf(
            "FILES",
            "IMAGES",
            "VIDEOS",
            "AUDIO",
            "APPS"
        )

        filesPagerAdapter = FilesPagerAdapter(this, pagerItemList)
        binding?.viewPager2?.adapter = filesPagerAdapter
        TabLayoutMediator(binding?.tabLayout!!, binding?.viewPager2!!) {_, _ -> } .attach()

        for (i in pagerItemList.indices) {
            val tab: TabLayout.Tab? = binding?.tabLayout?.getTabAt(i)
            tab?.customView = filesPagerAdapter?.getTabView(i)
            if (i == 0) onTabSelected(tab)
        }
//        binding?.viewPager2?.post { binding?.viewPager2?.setCurrentItem(1, true) }
        binding?.tabLayout?.addOnTabSelectedListener(this)
        binding?.selectLl?.setOnClickListener(::onSelectClicked)
    }

    override fun onTabSelected(tab: TabLayout.Tab?) {
        val textView = tab?.customView as? TextView
        textView?.typeface = uiUtil.boldTypeface
        textView?.setTextColor(Color.WHITE)

    }
    override fun onTabUnselected(tab: TabLayout.Tab?) {
        val textView = tab?.customView as? TextView
        textView?.typeface = uiUtil.regularTypeface
        textView?.setTextColor(uiUtil._D8)
    }
    override fun onTabReselected(tab: TabLayout.Tab?) {
    }

    fun onSelectClicked(view: View) {
        SelectedDialog().show(parentFragmentManager)
    }

    override fun onUpdate() {
        lifecycleScope.launch(Dispatchers.Main) {
            lifecycle.repeatOnLifecycle(Lifecycle.State.CREATED) {
                updateSelectionCount()
                log("onUpdate ")
            }
        }

    }

    override fun onRemoved(file: WebFile) {

    }

    override fun onRemovedAll() {

    }

    fun updateSelectionCount() {
        binding?.selectionCountTv?.text = server.fileManager.selectedFiles.size.toString()
    }

    override fun onDestroy() {
        super.onDestroy()
        server.fileManager.observers.remove(this)
        lifecycleScope.launch(Dispatchers.IO) {
            Glide.get(requireContext()).clearDiskCache()
        }
    }
}
class FilesPagerAdapter(var sendFragment: SendFragment, var pagerItemList: List<String>): FragmentStateAdapter(sendFragment) {
    val uiUtil = UiUtil.getInstance()
    val context = sendFragment.requireContext()

    override fun getItemCount() = pagerItemList.size

    override fun createFragment(position: Int): Fragment {
        return when(position) {
            0 -> FileFragment()
            1 -> ImageFragment()
            2 -> VideoFragment()
            3 -> AudioFragment()
            else -> AppFragment()
        }
    }

    fun getTabView(position: Int): TextView {
        val textView = TextView(context)
        textView.setPadding(uiUtil._20dp, uiUtil._18dp, uiUtil._20dp, uiUtil._18dp)
        textView.text = pagerItemList[position]
        textView.textSize = 14f
        textView.setTextColor(Color.WHITE)
        return textView
    }
}

