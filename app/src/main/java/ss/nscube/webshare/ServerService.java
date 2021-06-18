package ss.nscube.webshare;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.app.TaskStackBuilder;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.os.Binder;
import android.os.IBinder;
import android.util.Log;

import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import androidx.viewpager.widget.PagerAdapter;

import ss.nscube.webshare.server.HTTPServer;

public class ServerService extends Service {
    private final IBinder binder = new LocalBinder();
    private HTTPServer server;
    private NotificationCompat.Builder notificationBuilder;
//    private NotificationCompat.Action pauseAction, continueAction;
//    public static final String PAUSE = "PAUSE";
//    public static final String CONTINUE = "CONTINUE";
    public static final String STOP_SERVER_ACTION = "STOP_SERVER";
//    public static final String PAUSE_SERVER_ACTION = "PAUSE_SERVER";
//    public static final String CONTINUE_SERVER_ACTION = "CONTINUE_SERVER";

    private NotificationManager notificationManager;

    @Override
    public void onCreate() {
        super.onCreate();
        ServerBroadCastReceiver.serverService = this;
        server = new HTTPServer(getAssets());
        notificationBuilder = new NotificationCompat.Builder(this, "channelId");
        notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
//        pauseAction = new NotificationCompat.Action(0, PAUSE, makePendingIntent(PAUSE_SERVER_ACTION));
//        continueAction = new NotificationCompat.Action(0, CONTINUE, makePendingIntent(CONTINUE_SERVER_ACTION));
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        return START_STICKY;
    }

    private void setupNotification() {

        Notification notification = null;
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {

            NotificationChannel chan = new NotificationChannel("channelId", "HTTP Server", NotificationManager.IMPORTANCE_MIN);
            chan.setLightColor(Color.BLUE);
            chan.setLockscreenVisibility(Notification.VISIBILITY_PRIVATE);
            assert notificationManager != null;
            notificationManager.createNotificationChannel(chan);
        }

        PendingIntent activityIntent = PendingIntent.getActivity(this, 0, new Intent(this, MainActivity.class), PendingIntent.FLAG_CANCEL_CURRENT);

        notification = notificationBuilder.setOngoing(true)
                .setDefaults(Notification.DEFAULT_LIGHTS | Notification.DEFAULT_SOUND)
                .setVibrate(new long[]{0L})
                .setSmallIcon(R.drawable.notification_icon)
                .setContentTitle("WebShare is running in background")
                .setPriority(NotificationCompat.PRIORITY_DEFAULT)
                .setCategory(Notification.CATEGORY_SERVICE)
                .setContentIntent(activityIntent)
                .addAction(0, "STOP", makePendingIntent(STOP_SERVER_ACTION))
                .build();

        startForeground(1, notification);
    }

    public PendingIntent makePendingIntent(String name) {
        Intent intent = new Intent(this, ServerBroadCastReceiver.class);
        intent.setAction(name);
        return PendingIntent.getBroadcast(this, 0, intent, 0);
    }

    public HTTPServer getServer() {
        return server;
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        stopForeground(true);
        return binder;
    }

    @Override
    public boolean onUnbind(Intent intent) {
        if (server.getState() == HTTPServer.RUNNING || server.getState() == HTTPServer.PAUSED) {
            setupNotification();
        } else {
            stopForeground(true);
        }
        return super.onUnbind(intent);
    }

    public  class LocalBinder extends Binder {
        ServerService getServerService() {
            return ServerService.this;
        }
    }

    public static class ServerBroadCastReceiver extends BroadcastReceiver {
        static ServerService serverService;

        public ServerBroadCastReceiver() {
        }

        @Override
        public void onReceive(Context context, Intent intent) {
            switch (intent.getAction()) {
                case ServerService.STOP_SERVER_ACTION:
                    serverService.getServer().stop();
                    serverService.stopForeground(true);
                    serverService.stopSelf();
                    break;
            }

        }
    }
}


