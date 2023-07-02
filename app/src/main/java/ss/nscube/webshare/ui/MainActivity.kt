package ss.nscube.webshare.ui

import android.content.Intent
import android.net.Uri
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.WindowManager
import androidx.appcompat.app.AppCompatDelegate
import ss.nscube.webshare.R
import ss.nscube.webshare.WebShareApp
import ss.nscube.webshare.ui.dialogs.SelectedDialog
import ss.nscube.webshare.ui.utils.TimeCal
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.WebFileUtil

class MainActivity : AppCompatActivity() {
    val webShareApp: WebShareApp
        get() {
            return application as WebShareApp
        }
    var isRequestPermissionDialogShowed = false

    override fun onCreate(savedInstanceState: Bundle?) {
        TimeCal.start(TimeCal.AppStart)
        updateTheme()
        setTheme(R.style.Theme_WebShare)
        super.onCreate(savedInstanceState)
//        setStatusBar()
        supportActionBar?.hide()
        setContentView(R.layout.activity_main)
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)
        handleShareIntent()
        TimeCal.stop(this, TimeCal.AppStart)
    }

    private fun updateTheme() {
        when(webShareApp.preferencesUtil.theme) {
            UiUtil.ThemeSystem -> {
                AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_FOLLOW_SYSTEM)
            }
            UiUtil.ThemeLight -> {
                AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)
            }
            UiUtil.ThemeDark -> {
                AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES)
            }
        }
    }

    private fun handleShareIntent() {
        val server = webShareApp.server
        var showSelectedDialog = false
        when (intent?.action) {
            Intent.ACTION_SEND -> {
                val receivedText = intent.getStringExtra(Intent.EXTRA_TEXT)
                val uri = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) intent.getParcelableExtra(Intent.EXTRA_STREAM, Uri::class.java)
                else intent.getParcelableExtra(Intent.EXTRA_STREAM)
                if (receivedText != null) {
                    server.textManager.add(server.mainUser, receivedText, true)
                    Util.toast(this, "Text sent successfully!")
                }
                if (uri != null) {
                    Util.updateSelection(server, WebFileUtil.getFile(this, uri) ?: return)
                    showSelectedDialog = true
                }
            }
            Intent.ACTION_SEND_MULTIPLE -> {
                val uriList = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) intent.getParcelableArrayListExtra(Intent.EXTRA_STREAM, Uri::class.java)
                else intent.getParcelableArrayListExtra(Intent.EXTRA_STREAM)
                if (uriList != null) for (uri in uriList) {
                    Util.updateSelection(server, WebFileUtil.getFile(this, uri ?: continue) ?: continue)
                    if (!showSelectedDialog) showSelectedDialog = true
                }
            }
        }
        if (showSelectedDialog) SelectedDialog().show(supportFragmentManager)
    }

}