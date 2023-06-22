package ss.nscube.webshare.ui.frags

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import androidx.activity.OnBackPressedCallback
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.findNavController
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import ss.nscube.webshare.WebShareApp
import ss.nscube.webshare.server.HTTPServer
import ss.nscube.webshare.ui.MainActivity
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.utils.log

open class BaseFragment: Fragment() {
    val mainActivity: MainActivity?
        get() {
            return activity as? MainActivity
        }

    val webShareApp: WebShareApp?
        get() {
            return activity?.application as? WebShareApp
        }

    val server: HTTPServer
        get() {
            return requireWebShareApp().server
        }

    val uiUtil = UiUtil.getInstance()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        log("FRAGMENT onCreate ${this.javaClass.simpleName}")

    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        log("FRAGMENT onViewCreated ${this.javaClass.simpleName}")
        requireActivity().onBackPressedDispatcher.addCallback(viewLifecycleOwner, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                onBackClicked()
            }
        })
    }

    override fun onStart() {
        super.onStart()
        log("FRAGMENT onStart ${this.javaClass.simpleName}")
    }


    fun requireMainActivity(): MainActivity {
        return mainActivity
            ?: throw IllegalStateException("Fragment $this not attached to MainActivity.")
    }

    fun requireWebShareApp(): WebShareApp {
        return activity?.application as? WebShareApp
            ?: throw IllegalStateException("Fragment $this not attached to WebShareApp.")
    }

    override fun onDestroy() {
        super.onDestroy()
        log("FRAGMENT onDestroy ${this.javaClass.simpleName}")
    }

    open fun openMenu(view: View) {

    }

    fun loadData(block: suspend CoroutineScope.() -> Unit) {
        if (isAdded) {
            lifecycleScope.launch(Dispatchers.Main) {
                delay(180)
                block()
            }
        }
    }

    fun launchMain(block: suspend CoroutineScope.() -> Unit) = if (isAdded) lifecycleScope.launch(Dispatchers.Main, block = block) else null

    fun launchIO(block: suspend CoroutineScope.() -> Unit) = lifecycleScope.launch(Dispatchers.IO, block = block)

    fun launch(block: suspend CoroutineScope.() -> Unit) = lifecycleScope.launch(Dispatchers.Default, block = block)

    open fun onBackClicked() {
        findNavController().popBackStack()
    }
}