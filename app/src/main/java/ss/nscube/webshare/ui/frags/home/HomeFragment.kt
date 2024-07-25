package ss.nscube.webshare.ui.frags.home

import android.content.ComponentName
import android.content.Intent
import android.content.res.ColorStateList
import android.graphics.Color
import android.graphics.Paint
import android.os.Bundle
import android.provider.Settings
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.recyclerview.widget.SimpleItemAnimator
import androidx.viewpager.widget.PagerAdapter
import androidx.viewpager.widget.ViewPager
import com.google.android.material.tabs.TabLayout
import ss.nscube.webshare.R
import ss.nscube.webshare.databinding.FragmentHomeBinding
import ss.nscube.webshare.databinding.ItemPagerFirstBinding
import ss.nscube.webshare.databinding.ItemPagerSecondBinding
import ss.nscube.webshare.databinding.ItemPagerThirdBinding
import ss.nscube.webshare.server.user.UserUpdateObserver
import ss.nscube.webshare.server.user.SelectionUpdateObserver
import ss.nscube.webshare.server.user.TextObserver
import ss.nscube.webshare.server.events.ServerStatusListener
import ss.nscube.webshare.server.file.FileTransferObserver
import ss.nscube.webshare.server.file.WebFile
import ss.nscube.webshare.ui.MenuPopup
import ss.nscube.webshare.ui.dialogs.QrDialog
import ss.nscube.webshare.ui.dialogs.SecurityDialog
import ss.nscube.webshare.ui.dialogs.ThemeDialog
import ss.nscube.webshare.ui.frags.BaseFragment
import ss.nscube.webshare.ui.utils.*
import ss.nscube.webshare.utils.IpAddressUpdater
import ss.nscube.webshare.utils.d
import ss.nscube.webshare.utils.log

class HomeFragment : BaseFragment(), TabLayout.OnTabSelectedListener, ServerStatusListener {
    var binding: FragmentHomeBinding? = null
    var ipAddressUpdater = IpAddressUpdater(this)

    var iconButtonAdapter: IconButtonAdapter? = null
    var menuPopup: MenuPopup? = null
    var pagerAdapter = StepPagerAdapter(this)
    val permissionRequestHelper = PermissionRequestHelper(this)

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentHomeBinding.inflate(inflater)
        return binding?.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        TimeCal.start(TimeCal.AppStart)
        super.onViewCreated(view, savedInstanceState)
        binding?.actionBar?.updateMode {
                val title = "WebShare"
                addTitle(title)
                titleTextView.setPadding(uiUtil._20dp, 0, uiUtil._5dp, 0)
                addMenuIcon(this@HomeFragment)
            }

        val iconButtonList = listOf(
            IconButtonItem(0, R.drawable.icon_user, Color.parseColor("#AFBB66"), "Users", getIndicatorText(server.userManager.size(), "user")),
            IconButtonItem(1, R.drawable.icon_settings, Color.parseColor("#BB6666"), "Settings"),
            IconButtonItem(2, R.drawable.icon_lock, Color.parseColor("#666FBB"), "Security", getSecurityIndicator()),
            IconButtonItem(3, R.drawable.icon_download, Color.parseColor("#BB66B2"), "Receive", getIndicatorText(server.downloadManager.files.size, "file")),
            IconButtonItem(4, R.drawable.icon_msg, Color.parseColor("#1DE9B6"), "Text", getIndicatorText(server.textManager.size, "text")),
            IconButtonItem(5, R.drawable.icon_upload, Color.parseColor("#66BB6A"), "Send", getIndicatorText(server.fileManager.selectedFiles.size, "file"))
        )

        binding?.buttonsRecyclerView?.layoutManager = GridLayoutManager(requireContext(), 3)
        (binding?.buttonsRecyclerView?.itemAnimator as? SimpleItemAnimator)?.supportsChangeAnimations = false
        iconButtonAdapter = IconButtonAdapter(
            (requireContext().resources.getDimension(R.dimen.layout_width)).toInt() / 3,
            iconButtonList,
            ::onIconButtonClicked
        )
        binding?.buttonsRecyclerView?.adapter = iconButtonAdapter

        setUpViewPager()

        ipAddressUpdater.observe(pagerAdapter::onIpChanged)
        ipAddressUpdater.checkNetwork(requireContext())

        server.serverStatusListeners.add(this)
        if (server.isRunning) onStarted() else onStopped()

        menuPopup = MenuPopup(requireContext())
        menuPopup?.addMenuItem(1, R.drawable.icon_theme, "Theme")
        menuPopup?.addMenuItem(2, R.drawable.icon_about, "About")
        menuPopup?.onItemClick(::onMenuItemClicked)

        TimeCal.stop(this, TimeCal.AppStart)
    }

    val userUpdateObserver = object: UserUpdateObserver {
        override fun onAdded() { updateUserIndicator() }
        override fun onUpdate(index: Int) {}
        override fun onRemoved(index: Int) { updateUserIndicator() }
        override fun onClear() { updateUserIndicator() }
    }

    val fileTransferObserver = object: FileTransferObserver {
        override fun onFileAdded() { updateReceiveIndicator() }
        override fun onFileRemoved(file: WebFile, removedIndex: Int) { updateReceiveIndicator() }
        override fun onStatusChanged(fileIndex: Int) {}
    }

    val textObserver = object: TextObserver {
        override fun onAdded() { updateTextIndicator() }
        override fun onRemoved(index: Int) { updateTextIndicator() }
    }

    val selectionUpdateObserver = object: SelectionUpdateObserver {
        override fun onUpdate() { updateSendIndicator() }
        override fun onRemoved(file: WebFile) {}
        override fun onRemovedAll() {}
    }

    var textIndicators: Array<TextView?> = Array(3) { null }
    var selectedIndicator = 0

    fun setUpViewPager() {
        selectedIndicator = 0
        textIndicators[0] = binding?.connectTV
        textIndicators[1] = binding?.startTV
        textIndicators[2] = binding?.shareTV

        binding?.viewPager?.pageMargin = uiUtil.dp(15).toInt()
        binding?.viewPager?.clipToPadding = false
        binding?.viewPager?.addOnPageChangeListener(object : ViewPager.OnPageChangeListener {
            override fun onPageScrolled(
                position: Int,
                positionOffset: Float,
                positionOffsetPixels: Int
            ) {}
            override fun onPageSelected(position: Int) {
                textIndicators[position]?.setTextColor(UiUtil.primaryTextColor(requireContext()))
                textIndicators[position]?.typeface = uiUtil.mediumTypeface
                textIndicators[selectedIndicator]?.setTextColor(UiUtil.secondaryTextColor(requireContext()))
                textIndicators[selectedIndicator]?.typeface = uiUtil.regularTypeface
                selectedIndicator = position
            }
            override fun onPageScrollStateChanged(state: Int) {}
        })
        binding?.viewPager?.adapter = pagerAdapter
        binding?.viewPager?.postDelayed({
            binding?.viewPager?.setCurrentItem(expectedCurrentPage(), true)
            pagerAdapter.updateButtons()
        }, 500)
    }

    fun expectedCurrentPage(): Int {
        return if (ipAddressUpdater.isConnectedToNetwork) {
            if (server.isRunning) 2
            else 1
        } else 0
    }

    private fun addIndicatorObservers() {
        server.userManager.observerList.add(userUpdateObserver)
        server.downloadManager.observerList.add(fileTransferObserver)
        server.textManager.observerList.add(textObserver)
        server.fileManager.observers.add(selectionUpdateObserver)
    }

    fun removeIndicatorObservers() {
        server.downloadManager.observerList.remove(fileTransferObserver)
        server.textManager.observerList.remove(textObserver)
        server.fileManager.observers.remove(selectionUpdateObserver)
    }


    fun getSecurityIndicator(): String {
        return if (server.isSecured) "On" else "Off"
    }

    fun updateUserIndicator() {
        log("Indicator updateUserIndicator ${Thread.currentThread().name} $isAdded")
        launchMain {
            log("Indicator updateUserIndicator launchMain ${Thread.currentThread().name} $isAdded")
            updateIndicator(0, server.userManager.size(), "user")
        }
    }

    fun updateReceiveIndicator() {
        log("Indicator updateReceiveIndicator")
        launchMain {
            updateIndicator(3, server.downloadManager.files.size, "file")
        }
    }

    fun updateTextIndicator() {
        log("Indicator updateTextIndicator")
        launchMain {
            updateIndicator(4, server.textManager.size, "text")
        }
    }

    fun updateSendIndicator() {
        log("Indicator updateSendIndicator")
        launchMain {
            updateIndicator(5, server.fileManager.selectedFiles.size, "file")
        }
    }

    fun updateIndicator(position: Int, count: Int, text: String?) {
        updateIndicatorText(position, if (count == 0) null else if (count == 1) "$count $text" else "$count ${text}s")
    }

    fun updateIndicatorText(position: Int, text: String?) {
        iconButtonAdapter?.itemList?.get(position)?.indicatorText = text
        iconButtonAdapter?.notifyItemChanged(position)
    }

    fun getIndicatorText(count: Int, text: String?): String? {
        return if (count == 0) null else if (count == 1) "$count $text" else "$count ${text}s"
    }

    override fun openMenu(view: View) {
        menuPopup?.showAtLocation(view)
    }

    fun onMenuItemClicked(id: Int) {
        when(id) {
            1 -> {
                ThemeDialog.show(parentFragmentManager)
            }
            2 -> {
                navigate(HomeFragmentDirections.actionHomeFragmentToAboutFragment())
            }
        }
    }

    private fun checkPermissions() {
        if (permissionRequestHelper.isStoragePermissionNotAccepted() && mainActivity?.isRequestPermissionDialogShowed == false) {
            mainActivity?.isRequestPermissionDialogShowed = true
            log("RequestPermissionDialog accept")
            permissionRequestHelper.requestPermissions()
        }
    }

    private fun onIconButtonClicked(id: Int) {
        log("onIconButtonClicked $id")
        when(id) {
            0 -> {
                navigate(HomeFragmentDirections.actionHomeFragmentToUsersFragment())
            }
            1 -> {
                navigate(HomeFragmentDirections.actionHomeFragmentToServerSettingsFragment())
            }
            2 -> {
                SecurityDialog.show(this) {
                    updateIndicatorText(2, getSecurityIndicator())
                }
            }
            3 -> {
                navigate(HomeFragmentDirections.actionHomeFragmentToReceiveFragment())
            }
            4 -> {
                navigate(HomeFragmentDirections.actionHomeFragmentToTextFragment())
            }
            5 -> {
                navigate(HomeFragmentDirections.actionHomeFragmentToSendFragment())
            }
        }
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

    override fun onPause() {
        super.onPause()
        ipAddressUpdater.unregisterBroadcastReceivers(context)
        removeIndicatorObservers()
    }

    override fun onStart() {
        super.onStart()
        checkPermissions()
    }

    override fun onResume() {
        super.onResume()
        updateIndicatorText(0, getIndicatorText(server.userManager.size(), "user"))
        updateIndicatorText(2, getSecurityIndicator())
        updateIndicatorText(3, getIndicatorText(server.downloadManager.files.size, "file"))
        updateIndicatorText(4, getIndicatorText(server.textManager.size, "text"))
        updateIndicatorText(5, getIndicatorText(server.fileManager.selectedFiles.size, "file"))
        ipAddressUpdater.registerBroadcastReceivers(context)
        addIndicatorObservers()
    }

    override fun onStarted() {
        launchMain {
            pagerAdapter.updateButtons()
        }
    }

    override fun onStopped() {
        launchMain {
            pagerAdapter.updateButtons()
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        server.serverStatusListeners.remove(this)
    }
}

class StepPagerAdapter(val fragment: HomeFragment): PagerAdapter() {
    var firstView: ItemPagerFirstBinding? = null
    var secondView: ItemPagerSecondBinding? = null
    var thirdView: ItemPagerThirdBinding? = null

    override fun instantiateItem(container: ViewGroup, position: Int): Any {
        val view = getView(position, container)
        container.addView(view)
        return view
    }

    override fun destroyItem(container: ViewGroup, position: Int, `object`: Any) {
        container.removeView(getView(position, container))
    }
    override fun getCount() = 3

    override fun isViewFromObject(view: View, o: Any) = o==view

    fun getView(position: Int, container: ViewGroup) = when(position) {
        0 -> {
            if (firstView == null) initiateFirstView(container)
            firstView?.root!!
        }
        1 -> {
            if (secondView == null) initiateSecondView(container)
            secondView?.root!!
        }
        else -> {
            if (thirdView == null) initiateThirdView(container)
            thirdView?.root!!
        }
    }

    fun initiateFirstView(parent: ViewGroup) {
        firstView = ItemPagerFirstBinding.inflate(LayoutInflater.from(parent.context))
        firstView?.wifiBtn?.setOnClickListener {
            fragment.startActivity(Intent(Settings.ACTION_WIFI_SETTINGS))
        }
        firstView?.hotspotBtn?.setOnClickListener {
            val intent = Intent(Intent.ACTION_MAIN, null)
            intent.addCategory(Intent.CATEGORY_LAUNCHER)
            val cn = ComponentName("com.android.settings", "com.android.settings.TetherSettings")
            intent.component = cn
            intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
            fragment.startActivity(intent)
        }
        firstView?.arrowFL?.setOnClickListener {
            fragment.binding?.viewPager?.setCurrentItem(1, true)
        }
    }

    fun initiateSecondView(parent: ViewGroup) {
        secondView = ItemPagerSecondBinding.inflate(LayoutInflater.from(parent.context))
        secondView?.startBtn?.setOnClickListener {
            fragment.server.start()
            fragment.binding?.viewPager?.setCurrentItem(2, true)
        }

    }

    fun initiateThirdView(parent: ViewGroup) {
        thirdView = ItemPagerThirdBinding.inflate(LayoutInflater.from(parent.context))
        onIpChanged(fragment.ipAddressUpdater.ipAddress.value)
        thirdView?.ipTV?.setOnClickListener {
            if (fragment.server != null && fragment.server.isRunning) {
                Util.openBrowser(thirdView?.ipTV?.text?.toString(), thirdView?.root?.context)
            } else {
                Toast.makeText(thirdView?.root?.context, "Start the server", Toast.LENGTH_SHORT).show()
            }
        }
        thirdView?.ipTV?.paintFlags = thirdView?.ipTV?.paintFlags!! or Paint.UNDERLINE_TEXT_FLAG

        thirdView?.ipIV?.setOnClickListener {
            QrDialog.show(fragment, thirdView?.ipTV?.text?.toString())
        }
        thirdView?.stopBtn?.setOnClickListener {
            fragment.server.stop()
            fragment.binding?.viewPager?.setCurrentItem(1, true)
        }
    }

    fun updateSteps(isConnectedToWifi: Boolean) {
        firstView?.arrowFL?.visibility = if (isConnectedToWifi) View.VISIBLE else View.GONE
    }

    fun updateButtons() {
        if (fragment.server.isRunning) {
            secondView?.startBtn?.visibility = View.INVISIBLE
            thirdView?.stopBtn?.visibility = View.VISIBLE
        } else {
            secondView?.startBtn?.visibility = View.VISIBLE
            thirdView?.stopBtn?.visibility = View.INVISIBLE
        }
    }

    fun onIpChanged(ip: String?) {
        d("IP $ip")
        var currentIp = ip
        if (ip == null || ip == "null") {
            currentIp = "localhost"
        }
        val url = "http://$currentIp:1111"
        log("onIpChanged $url")
//        mainActivity.updateQrOverlay()
        fragment.launchMain {
            updateSteps(fragment.ipAddressUpdater.isConnectedToNetwork)
            if (thirdView?.ipTV?.text != url) {
                thirdView?.ipTV?.text = url
                thirdView?.ipIV?.post {
                    thirdView?.ipIV?.setImageBitmap(
//                        Util.generateQR(url, UiUtil.primaryTextColor(thirdView?.ipTV?.context!!))
                        Util.getQrBitmap(thirdView?.ipTV?.context!!, url)
                    )
                }
            }
        }
    }

    override fun getPageWidth(position: Int): Float {
        return 0.9f
    }
}

class IconButtonItem(val id: Int, val iconRes: Int, val color: Int, val title: String, var indicatorText: String? = null)

class IconButtonAdapter(val width: Int, var itemList: List<IconButtonItem>, var onItemClick: (Int) -> Unit): RecyclerView.Adapter<IconButtonAdapter.IconButtonViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): IconButtonViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_icon_button, parent, false)
        view.layoutParams.width = width
        return IconButtonViewHolder(view)
    }

    override fun onBindViewHolder(holder: IconButtonViewHolder, position: Int) {
        val item = itemList[position]
        holder.iconImageView.setImageResource(item.iconRes)
        holder.iconImageView.backgroundTintList = ColorStateList.valueOf(item.color)
        holder.titleTextView.text = item.title
        if (item.indicatorText == null) {
            holder.indicatorTextView.visibility = View.GONE
        } else {
            holder.indicatorTextView.visibility = View.VISIBLE
            holder.indicatorTextView.text = item.indicatorText
        }
        holder.itemView.setOnClickListener {
            onItemClick(item.id)
        }
    }

    override fun getItemCount() = itemList.size

    class IconButtonViewHolder(view: View): RecyclerView.ViewHolder(view){
        val iconImageView: ImageView = view.findViewById(R.id.icon_iv)
        val titleTextView: TextView = view.findViewById(R.id.title_tv)
        val indicatorTextView: TextView = view.findViewById(R.id.indicator_tv)
    }
}
