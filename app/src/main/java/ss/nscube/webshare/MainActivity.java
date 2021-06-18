package ss.nscube.webshare;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.app.ActivityManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.ServiceConnection;
import android.content.pm.PackageManager;
import android.content.res.ColorStateList;
import android.net.wifi.WifiManager;
import android.os.Bundle;
import android.os.IBinder;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.nscube.filepicker.FilePickerActivity;

import java.util.ArrayList;

import ss.nscube.webshare.server.loaders.Downloader;
import ss.nscube.webshare.server.loaders.Uploader;
import ss.nscube.webshare.server.utils.FileUtil;
import ss.nscube.webshare.ui.views.MyFilesView;
import ss.nscube.webshare.ui.views.ServerView;
import ss.nscube.webshare.ui.views.ShareView;
import ss.nscube.webshare.ui.WritePermissionDialog;
import ss.nscube.webshare.receivers.HotspotStateChangeReceiver;
import ss.nscube.webshare.receivers.WifiStateChangeReceiver;
import ss.nscube.webshare.server.HTTPServer;
import ss.nscube.webshare.utils.NetUtil;
import ss.nscube.webshare.utils.ViewUtil;

public class MainActivity extends AppCompatActivity {
    private TextView uSpeedTextView, dSpeedTextView;
    private RelativeLayout relativeLayout;
    private ImageView serverImageView, shareImageView;
    private TextView serverTextView, shareTextView;
    private ServerView serverView;
    private ShareView shareView;
    private HTTPServer server;
    private boolean bound = false;
    private WifiStateChangeReceiver wifiStateChangeReceiver;
    private HotspotStateChangeReceiver hotspotStateChangeReceiver;
    private OnIpAddressChangedListener onIpAddressChangedListener;
    private ArrayList<OnServiceBoundListener> onServiceBoundListeners;
    private Executor executor;
    private String currentIp;
    private boolean isWifi, isHotspot;
    private Intent serverServiceIntent;
    public static final int PERMISSION_REQUEST_CODE = 203;

    private final ServiceConnection connection = new ServiceConnection() {

        @Override
        public void onServiceConnected(ComponentName className,
                                       IBinder service) {
            ServerService.LocalBinder binder = (ServerService.LocalBinder) service;
            server = binder.getServerService().getServer();
            setUpExecutor();
            notifyServiceBoundListener();

            bound = true;
        }

        @Override
        public void onServiceDisconnected(ComponentName arg0) {
            bound = false;
        }
    };


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTheme(R.style.SplashTheme);
        setContentView(R.layout.activity_main);
        init();

        checkPermissions();

        registerBroadcastReceivers();

        setupView();

        if (!isServerServiceRunning()) {
            startService(serverServiceIntent);
        }
        bindService(serverServiceIntent, connection, Context.BIND_AUTO_CREATE);
    }

    private void checkPermissions() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
//            if (ActivityCompat.shouldShowRequestPermissionRationale(this, Manifest.permission.WRITE_EXTERNAL_STORAGE)) {
                new WritePermissionDialog(this).show();
//            } else {
//                new WritePermissionDialog(this).show();
//            }
        }

//        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
//            if (!Environment.isExternalStorageManager()) {
//                new PermissionDialog(this).show();
//            }
//        }
    }

    @Override
    protected void onStart() {
        super.onStart();
    }

    private void init() {
        ViewUtil.init(this);
        uSpeedTextView = findViewById(R.id.us_tv);
        dSpeedTextView = findViewById(R.id.ds_tv);
        relativeLayout = findViewById(R.id.rl);
        serverImageView = findViewById(R.id.server_iv);
        serverTextView = findViewById(R.id.server_tv);
        shareImageView = findViewById(R.id.share_iv);
        shareTextView = findViewById(R.id.share_tv);
        onServiceBoundListeners = new ArrayList<>();
        wifiStateChangeReceiver = new WifiStateChangeReceiver();
        hotspotStateChangeReceiver = new HotspotStateChangeReceiver();
        serverView = new ServerView(this);
        shareView = new ShareView(this);
        serverServiceIntent = new Intent(this, ServerService.class);
    }

    private void setupView() {
        relativeLayout.addView(serverView, new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        relativeLayout.addView(shareView, new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        shareView.setVisibility(View.GONE);
    }
    
    private void onWifiStateChanged(boolean connected) {
        isWifi = connected;
        if (isWifi) {
            currentIp = NetUtil.getWifiIpAddress();
        } else if (isHotspot) {
            currentIp = NetUtil.getHotspotIpAddress();
        } else {
            currentIp = NetUtil.getLocalHostIpAddress();
        }
        if (onIpAddressChangedListener != null) {
            onIpAddressChangedListener.onIpAddressChanged(currentIp);
        }
    }

    private void onHotspotStateChanged(boolean on) {
        isHotspot = on;
        String ip = null;
        if (on) {
            while (ip == null) {
                ip = NetUtil.getHotspotIpAddress();
            }
        }
        if (isHotspot) {
            currentIp = ip;
        } else if (isWifi) {
            currentIp = NetUtil.getWifiIpAddress();
        } else {
            currentIp = NetUtil.getLocalHostIpAddress();
        }
        if (onIpAddressChangedListener != null) {
            onIpAddressChangedListener.onIpAddressChanged(currentIp);
        }
    }

    private boolean isServerServiceRunning() {
        ActivityManager manager = (ActivityManager) getSystemService(Context.ACTIVITY_SERVICE);
        for (ActivityManager.RunningServiceInfo service : manager.getRunningServices(Integer.MAX_VALUE)) {
            if (ServerService.class.getName().equals(service.service.getClassName())) {
                return true;
            }
        }
        return false;
    }

    private void setUpExecutor() {
        if (executor == null) {
            Uploader uploader = server.getUploader();
            Downloader downloader = server.getDownloader();
            executor = new Executor(this, new Runnable() {
                @Override
                public void run() {
                    uSpeedTextView.setText(String.format("%s/s", FileUtil.getSize(uploader.getSpeed())));
                    dSpeedTextView.setText(String.format("%s/s", FileUtil.getSize(downloader.getSpeed())));
                }
            }, 1000);
            executor.start();
        }
    }

    private void registerBroadcastReceivers() {
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction(WifiManager.NETWORK_STATE_CHANGED_ACTION);
        wifiStateChangeReceiver.setOnWifiStateChangedListener(this::onWifiStateChanged);
        registerReceiver(wifiStateChangeReceiver, intentFilter);

        IntentFilter intentFilter1 = new IntentFilter("android.net.wifi.WIFI_AP_STATE_CHANGED");
        hotspotStateChangeReceiver.setOnHotspotChangedListener(this::onHotspotStateChanged);
        registerReceiver(hotspotStateChangeReceiver, intentFilter1);
    }

    private void unregisterBroadcastReceivers() {
        unregisterReceiver(wifiStateChangeReceiver);
        unregisterReceiver(hotspotStateChangeReceiver);
    }

    public void addOnServiceBoundListener(OnServiceBoundListener onServiceBoundListener) {
        onServiceBoundListeners.add(onServiceBoundListener);
    }

    public void setOnIpAddressChangedListener(OnIpAddressChangedListener onIpAddressChangedListener) {
        this.onIpAddressChangedListener = onIpAddressChangedListener;
        onIpAddressChangedListener.onIpAddressChanged(currentIp);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK) {
            ArrayList<String> paths = new ArrayList<>();
            if (requestCode == MyFilesView.CUSTOM_FILE_PICKET_REQUEST_CODE) {
                paths = data.getStringArrayListExtra(FilePickerActivity.PATH_LIST_KEY);
            }
//            else if (requestCode == ShareView.DEFAULT_FILE_PICKET_REQUEST_CODE) {
//                if(null != data) { // checking empty selection
//                    ClipData cd = data.getClipData();
//                    if(null != cd) { // checking multiple selection or not
//                        int len = cd.getItemCount();
//                        for (int j = 0; j < len; ++j) {
//                            try {
//                                Log.i("TAG_URI", "onActivityResult: " +  cd.getItemAt(j).getUri().toString());
//                                addPath(data, paths, cd.getItemAt(j).getUri());
//                            } catch (IllegalArgumentException e) {
//                                Log.i("TAG_URI_NOT_FOUND", "onActivityResult: " + e.getMessage());
//                            }
//                        }
//                    } else {
//                        try {
//                            Log.i("TAG_URI", "onActivityResult: " + data.getData().toString());
//                            addPath(data, paths, data.getData());
//                        } catch (IllegalArgumentException e) {
//                            Log.i("TAG_URI_NOT_FOUND", "onActivityResult: " + e);
//                        }
//                    }
//                }
//            }
            shareView.onResult(paths);
        }
    }

//    private void addPath(Intent intent, ArrayList<String> paths, Uri uri) throws IllegalArgumentException {
//        Log.i("TAG", "addPath: " + uri.toString());
//        final int takeFlags = intent.getFlags()
//                & (Intent.FLAG_GRANT_READ_URI_PERMISSION
//                | Intent.FLAG_GRANT_WRITE_URI_PERMISSION);
//        getContentResolver().takePersistableUriPermission(uri, Intent.FLAG_GRANT_READ_URI_PERMISSION);
//        Log.i("TAG", "addPath: " + uri.toString());
//
//        File file = new File(uri.getPath());
//        if (!file.exists()) {
//            String path = FilePath.getPath(this, uri);
//            if (path != null) {
//                file = new File(path);
//                if (file.exists()) {
//                    paths.add(file.getAbsolutePath());
//                } else {
//                    throw new IllegalArgumentException(uri.toString());
//                }
//            } else {
//                throw new IllegalArgumentException(uri.toString());
//            }
//        } else {
//            paths.add(file.getAbsolutePath());
//        }
//    }
//
    @Override
    protected void onStop() {
        super.onStop();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        unregisterBroadcastReceivers();
        shareView.onDestroy();
        if (bound) {
            unbindService(connection);
        }
    }

    private void notifyServiceBoundListener() {
        for (OnServiceBoundListener onServiceBoundListener: onServiceBoundListeners) {
            if (onServiceBoundListener != null)
                onServiceBoundListener.onServiceBound(server);
        }
    }


    public void server(View view) {
        shareView.setVisibility(View.GONE);
        serverView.setVisibility(View.VISIBLE);
        serverImageView.setImageTintList(ColorStateList.valueOf(ViewUtil.WHITE));
        serverTextView.setTextColor(ViewUtil.WHITE);
        shareImageView.setImageTintList(ColorStateList.valueOf(ViewUtil.BLUE_300));
        shareTextView.setTextColor(ViewUtil.BLUE_300);
    }

    public void share(View view) {
        serverView.setVisibility(View.GONE);
        shareView.setVisibility(View.VISIBLE);
        serverImageView.setImageTintList(ColorStateList.valueOf(ViewUtil.BLUE_300));
        serverTextView.setTextColor(ViewUtil.BLUE_300);
        shareImageView.setImageTintList(ColorStateList.valueOf(ViewUtil.WHITE));
        shareTextView.setTextColor(ViewUtil.WHITE);
    }
}