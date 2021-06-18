package ss.nscube.webshare.receivers;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.wifi.WifiManager;
import android.util.Log;

import ss.nscube.webshare.receivers.events.OnHotspotChangedListener;

public class HotspotStateChangeReceiver extends BroadcastReceiver {
    private OnHotspotChangedListener onHotspotChangedListener;

    public void setOnHotspotChangedListener(OnHotspotChangedListener onHotspotChangedListener) {
        this.onHotspotChangedListener = onHotspotChangedListener;
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();
        if ("android.net.wifi.WIFI_AP_STATE_CHANGED".equals(action)) {
            // get Wi-Fi Hotspot state here
            int state = intent.getIntExtra(WifiManager.EXTRA_WIFI_STATE, 0);

            onHotspotChangedListener.onHotspotChanged(WifiManager.WIFI_STATE_ENABLED == state % 10);

        }
    }
}
