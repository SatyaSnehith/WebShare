package ss.nscube.webshare

import android.app.*
import android.os.IBinder
import ss.nscube.webshare.server.HTTPServer
import android.content.Intent
import androidx.core.app.NotificationCompat
import ss.nscube.webshare.ui.MainActivity
import android.graphics.Color
import android.os.Binder
import android.os.Build
import ss.nscube.webshare.utils.log

class ServerService : Service() {
    private val binder: IBinder = LocalBinder()
    val channelId = "WebShareServer"
    val flag = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
        PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_CANCEL_CURRENT
    } else {
        PendingIntent.FLAG_CANCEL_CURRENT
    }

    override fun onCreate() {
        super.onCreate()
        log("SERVICE onCreate")
        setupNotification()
    }

    val server: HTTPServer
        get() {
            return (application as WebShareApp).server
        }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        log("SERVICE onStartCommand ${intent?.action} ${Thread.currentThread().name}")
        when(intent?.action) {
            STOP_SERVER_ACTION -> {
                server.stop()
            }
            else -> {
            }
        }
        return START_STICKY
    }

    private fun setupNotification() {
        val notificationBuilder = NotificationCompat.Builder(this, channelId)
        val notificationManager = getSystemService(NOTIFICATION_SERVICE) as NotificationManager
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val chan =
                NotificationChannel(channelId, "HTTP Server", NotificationManager.IMPORTANCE_MIN)
            chan.lightColor = Color.BLUE
            chan.lockscreenVisibility = Notification.VISIBILITY_PRIVATE
            notificationManager.createNotificationChannel(chan)
        }

        val notification = notificationBuilder.setOngoing(true)
            .setDefaults(Notification.DEFAULT_LIGHTS or Notification.DEFAULT_SOUND)
            .setVibrate(longArrayOf(50L))
            .setSmallIcon(R.drawable.notification_icon)
            .setContentTitle("WebShare is running in the background")
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .setCategory(Notification.CATEGORY_SERVICE)
            .setContentIntent(
                PendingIntent.getActivity(
                    this,
                    0,
                    Intent(this, MainActivity::class.java),
                    flag
                )
            )
            .addAction(0, "STOP", makePendingIntent(STOP_SERVER_ACTION))
            .build()
        startForeground(1, notification)
    }

    fun makePendingIntent(name: String?): PendingIntent {
        val stopSelf = Intent(this, ServerService::class.java);
        stopSelf.action = STOP_SERVER_ACTION;
        return PendingIntent.getService(this, 0, stopSelf, flag)
    }

    override fun onBind(intent: Intent): IBinder? {
        return binder
    }

    override fun onUnbind(intent: Intent): Boolean {
        return super.onUnbind(intent)
    }

    override fun onDestroy() {
        super.onDestroy()
        log("SERVICE onDestroy")
    }

    inner class LocalBinder : Binder() {
        val serverService: ServerService
            get() = this@ServerService
    }

    companion object {
        const val STOP_SERVER_ACTION = "STOP_SERVER"
    }
}