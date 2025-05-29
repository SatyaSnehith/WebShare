package ss.nscube.webshare.ui

import android.content.Intent
import android.content.IntentSanitizer
import android.net.Uri
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log // Import Android's Log class
import android.view.WindowManager
import androidx.appcompat.app.AppCompatDelegate
import androidx.lifecycle.lifecycleScope // Import for coroutines
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import ss.nscube.webshare.R
import ss.nscube.webshare.WebShareApp
import ss.nscube.webshare.ui.dialogs.SelectedDialog
import ss.nscube.webshare.ui.utils.TimeCal
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.ui.utils.Util
import ss.nscube.webshare.utils.WebFileUtil
import java.util.function.Consumer // Required for sanitize logging

// Replaced ss.nscube.webshare.utils.log with a standard Android Log tag or your preferred logging wrapper
// It's good practice to define a TAG for logging
private const val TAG = "MainActivity"

class MainActivity : AppCompatActivity() {
    // Using lazy initialization for webShareApp can slightly defer its instantiation
    // if it's not immediately needed, though in onCreate it likely will be.
    private val webShareApp: WebShareApp by lazy {
        application as WebShareApp
    }
    var isRequestPermissionDialogShowed = false

    override fun onCreate(savedInstanceState: Bundle?) {
        // Start timing critical path
        val startTime = System.currentTimeMillis() // More standard way to measure time

        // It's crucial to call setTheme before super.onCreate() and setContentView()
        // updateTheme() should ideally be called before super.onCreate() if it affects the initial theme
        // that setContentView will use.
        updateTheme() // Apply dynamic theme choice
        setTheme(R.style.Theme_WebShare) // Apply base theme

        super.onCreate(savedInstanceState)
        supportActionBar?.hide() // Consider moving after setContentView if it depends on the layout
        setContentView(R.layout.activity_main)

        // It's generally better to apply window flags after setContentView
        // unless they are critical for the initial layout pass.
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)

        // Handle share intent, potentially offloading heavy work
        handleShareIntent()

        // Stop timing and log
        val endTime = System.currentTimeMillis()
        Log.d(TAG, "onCreate execution time: ${endTime - startTime} ms")
        // TimeCal.stop(this, TimeCal.AppStart) // Assuming TimeCal.stop does its own logging
    }

    private fun updateTheme() {
        // This logic seems fine. Ensure webShareApp.preferencesUtil.theme is quick to access.
        val themePreference = webShareApp.preferencesUtil.theme // Cache if access is slow, though unlikely here
        when (themePreference) {
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
        val originalIntent = intent ?: return // Early exit if intent is null
        Log.d(TAG, "Handling original intent action: ${originalIntent.action}") // Use Android Log

        val sanitizer = IntentSanitizer.Builder()
            .allowAction(Intent.ACTION_SEND)
            .allowAction(Intent.ACTION_SEND_MULTIPLE)
            .allowExtra(Intent.EXTRA_TEXT, String::class.java)
            .allowExtra(Intent.EXTRA_STREAM, Uri::class.java)
            .allowClipDataText() // Allows text/* for ClipData items
            .allowClipDataUris() // Allows URIs in ClipData items and grants read permission
            .allowMimeType("text/*")
            .allowMimeType("image/*")
            .allowMimeType("video/*")
            .allowMimeType("application/*")
            .build()

        val sanitizedIntent = sanitizer.sanitize(originalIntent, Consumer {
            // Log error if sanitization fails
            Log.e(TAG, "Intent sanitization failed: ${it.message}")
        }) ?: run {
            Log.e(TAG, "Sanitized intent is null, aborting.")
            return // Early exit if sanitization results in null intent
        }
        Log.d(TAG, "Handling sanitized intent action: ${sanitizedIntent.action}")


        // Defer heavy processing to a background thread using coroutines
        // lifecycleScope is tied to the Activity's lifecycle
        lifecycleScope.launch {
            // Access server instance once
            val server = webShareApp.server
            var showSelectedDialog = false

            when (sanitizedIntent.action) {
                Intent.ACTION_SEND -> {
                    val receivedText = sanitizedIntent.getStringExtra(Intent.EXTRA_TEXT)
                    val uri = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                        sanitizedIntent.getParcelableExtra(Intent.EXTRA_STREAM, Uri::class.java)
                    } else {
                        @Suppress("DEPRECATION") // Suppress for older SDKs
                        sanitizedIntent.getParcelableExtra(Intent.EXTRA_STREAM)
                    }
                    Log.d(TAG, "Intent ACTION_SEND - URI: $uri, Text: $receivedText")

                    if (receivedText != null) {
                        // Assuming server.textManager.add is lightweight. If not, consider its performance.
                        server.textManager.add(server.mainUser, receivedText, true)
                        // UI operations like Toast must be on the Main thread
                        withContext(Dispatchers.Main) {
                            Util.toast(this@MainActivity, "Text sent successfully!")
                        }
                    }
                    if (uri != null) {
                        // Perform file operations on a background thread (IO dispatcher)
                        val file = withContext(Dispatchers.IO) {
                            WebFileUtil.getFile(this@MainActivity, uri)
                        }
                        if (file != null) {
                            // Assuming Util.updateSelection is also potentially heavy
                            // If it updates UI, it needs to switch back to Main thread internally or here
                            withContext(Dispatchers.Default) { // Or Dispatchers.IO if it's file-related
                                Util.updateSelection(server, file)
                            }
                            showSelectedDialog = true
                        } else {
                            Log.w(TAG, "Failed to get file from URI: $uri")
                        }
                    }
                }
                Intent.ACTION_SEND_MULTIPLE -> {
                    val uriList = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                        sanitizedIntent.getParcelableArrayListExtra(Intent.EXTRA_STREAM, Uri::class.java)
                    } else {
                        @Suppress("DEPRECATION")
                        sanitizedIntent.getParcelableArrayListExtra(Intent.EXTRA_STREAM)
                    }
                    Log.d(TAG, "Intent ACTION_SEND_MULTIPLE - URI list size: ${uriList?.size ?: 0}")

                    if (uriList != null) {
                        for (uri in uriList) {
                            uri ?: continue // Skip null URIs in the list
                            // Perform file operations on a background thread (IO dispatcher)
                            val file = withContext(Dispatchers.IO) {
                                WebFileUtil.getFile(this@MainActivity, uri)
                            }
                            if (file != null) {
                                // Assuming Util.updateSelection is also potentially heavy
                                withContext(Dispatchers.Default) { // Or Dispatchers.IO
                                    Util.updateSelection(server, file)
                                }
                                if (!showSelectedDialog) showSelectedDialog = true
                            } else {
                                Log.w(TAG, "Failed to get file from URI in list: $uri")
                            }
                        }
                    }
                }
            }

            if (showSelectedDialog) {
                // Showing a dialog should be done on the Main thread
                withContext(Dispatchers.Main) {
                    SelectedDialog().show(supportFragmentManager, "SelectedDialogTag") // Added a tag
                }
            }
        }
    }
}