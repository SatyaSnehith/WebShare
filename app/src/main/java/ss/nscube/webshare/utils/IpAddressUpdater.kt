package ss.nscube.webshare.utils

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import android.net.wifi.WifiManager
import android.os.Build
import android.os.Handler
import android.os.Looper
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.*
import java.lang.Exception
import java.net.Inet4Address
import java.net.NetworkInterface
import java.util.Timer
import java.util.TimerTask

class IpAddressUpdater(val lifecycleOwner: LifecycleOwner) {
    val LocalHost = "localhost"
    var isConnectedToNetwork = false
    val ipAddress: MutableLiveData<String> = MutableLiveData()
    var timer: Timer? = null

    private val wifiStateChangeReceiver: WifiStateChangeReceiver = WifiStateChangeReceiver {
        log("NETWORK_CHANGE WIFI")
        scanIpAddress()
    }
    private val hotspotStateChangeReceiver: HotspotStateChangeReceiver = HotspotStateChangeReceiver {
        log("NETWORK_CHANGE HOTSPOT")
        scanIpAddress()
    }


    fun startTimer() {
        timer = Timer()
        timer?.scheduleAtFixedRate(object: TimerTask() {
            override fun run() {
                scanIpAddress()
            }
        }, 0, 7000)
    }

    fun cancelTimer() {
        timer?.cancel()
    }


    fun observe(onChange: (String) -> Unit) {
        ipAddress.observe(lifecycleOwner, onChange)
    }

    fun registerBroadcastReceivers(context: Context?) {
        startTimer()
        if (context == null) return
        val intentFilter = IntentFilter()
        intentFilter.addAction(WifiManager.NETWORK_STATE_CHANGED_ACTION)
        context.registerReceiver(wifiStateChangeReceiver, intentFilter)
        val intentFilter1 = IntentFilter("android.net.wifi.WIFI_AP_STATE_CHANGED")
        context.registerReceiver(hotspotStateChangeReceiver, intentFilter1)
    }

    fun unregisterBroadcastReceivers(context: Context?) {
        cancelTimer()
        if (context == null) return
        context.unregisterReceiver(wifiStateChangeReceiver)
        context.unregisterReceiver(hotspotStateChangeReceiver)
    }

    fun checkNetwork(context: Context) {
        if (isApOn(context) || isWifiOn(context)) scanIpAddress()
    }


    fun isApOn(context: Context): Boolean {
        val wifimanager =
            context.applicationContext.getSystemService(Context.WIFI_SERVICE) as WifiManager
        return try {
            val method = wifimanager.javaClass.getDeclaredMethod("isWifiApEnabled")
            method.isAccessible = true
            method.invoke(wifimanager) as Boolean
        } catch (ignored: Exception) {
            false
        }
    }

    fun isWifiOn(context: Context): Boolean {
        var connected = false // Returns connection type. 0: none; 1: mobile data; 2: wifi; 3: vpn
        val cm = context.getSystemService(Context.CONNECTIVITY_SERVICE) as? ConnectivityManager
        cm?.run {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                connected = cm.getNetworkCapabilities(cm.activeNetwork)?.hasTransport(
                    NetworkCapabilities.TRANSPORT_WIFI) == true
            } else {
                connected = cm.activeNetworkInfo?.isConnected == true
            }
        }
        log("NETWORK_CHANGE WIFI STATE ${cm == null} getConnectionType $connected")
        return connected
    }

    fun scanIpAddress() {
        lifecycleOwner.lifecycleScope.launch(Dispatchers.IO) {
            val startTime = System.currentTimeMillis()
            var wifiIp: String? = null
            var hotspotIp: String? = null
            var localIp: String? = null
            var usbIp: String? = null
            try {
                for (anInterface in NetworkInterface.getNetworkInterfaces()) {
                    val name = anInterface.name
                    for (address in anInterface.inetAddresses) {
                        if (address.javaClass == Inet4Address::class.java) {
                            when {
                                isAcceptable(name, arrayOf("wl", "ap")) -> wifiIp = address.hostAddress
                                isAcceptable(name, arrayOf("wl", "swl", "ap")) -> hotspotIp = address.hostAddress
                                isAcceptable(name, arrayOf("en")) -> usbIp = address.hostAddress
                                isAcceptable(name, arrayOf("lo")) -> localIp = address.hostAddress
                            }
                        }
                    }
                }
            } catch (ex: Exception) {
                e("scanIpAddress $ex")
            }
            isConnectedToNetwork = wifiIp != null || hotspotIp != null
            log("isConnectedToNetwork $isConnectedToNetwork")
            val updatedId = wifiIp ?: hotspotIp ?: usbIp ?: localIp ?: LocalHost
            if (updatedId != ipAddress.value)
                ipAddress.postValue(updatedId)
        }
    }

    private fun isAcceptable(name: String?, acceptableStartWithInterfaceNames: Array<String>): Boolean {
        for (startWithName in acceptableStartWithInterfaceNames) {
            if (name?.startsWith(startWithName) == true) return true
        }
        return false
    }

}

class WifiStateChangeReceiver(var onWifiStateChanged: () -> Unit) : BroadcastReceiver() {
    val handler = Handler(Looper.getMainLooper())
    val delay = 500L
    val runnable = Runnable(onWifiStateChanged)
    override fun onReceive(context: Context, intent: Intent) {
        val action = intent.action;
        handler.removeCallbacks(runnable)
        if (action.equals(WifiManager.NETWORK_STATE_CHANGED_ACTION)) {
            handler.postDelayed(runnable, delay)
        }
    }
}

class HotspotStateChangeReceiver(var onHotspotChanged: () -> Unit) : BroadcastReceiver() {
    val handler = Handler(Looper.getMainLooper())
    val delay = 500L
    val runnable = Runnable(onHotspotChanged)

    override fun onReceive(context: Context, intent: Intent) {
        val action = intent.action
        handler.removeCallbacks(runnable)
        if ("android.net.wifi.WIFI_AP_STATE_CHANGED" == action) {
            // get Wi-Fi Hotspot state here
//            val state = intent.getIntExtra(WifiManager.EXTRA_WIFI_STATE, 0)
//            val isHotspot = WifiManager.WIFI_STATE_ENABLED == state % 10
            handler.postDelayed(runnable, delay)
        }
    }
}