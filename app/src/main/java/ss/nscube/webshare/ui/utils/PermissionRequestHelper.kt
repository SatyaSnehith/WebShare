package ss.nscube.webshare.ui.utils

import android.Manifest
import android.content.pm.PackageManager
import android.os.Build
import android.os.Environment
import androidx.activity.result.contract.ActivityResultContracts
import androidx.core.app.ActivityCompat
import ss.nscube.webshare.ui.frags.home.HomeFragment
import ss.nscube.webshare.utils.log


class PermissionRequestHelper(val fragment: HomeFragment) {

    private val writePermissionSettingsLauncher = fragment.registerForActivityResult(ActivityResultContracts.StartActivityForResult()) {
        log("PermissionRequestHelper writePermissionSettingsLauncher")
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R && Environment.isExternalStorageManager()) {
            log("PermissionRequestHelper writePermissionSettingsLauncher accepted")
            if (fragment.isAdded) fragment.server.appFolderManager.initFolders()
        }
    }

    private val writePermissionsLauncher = fragment.registerForActivityResult(ActivityResultContracts.RequestMultiplePermissions()) {
        log("PermissionRequestHelper writePermissionsLauncher ${it.values.joinToString(", ")} ${it.keys.joinToString(", ")}")

        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.R &&
            ActivityCompat.checkSelfPermission(fragment.requireActivity(), Manifest.permission.WRITE_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED) {
            log("PermissionRequestHelper writePermissionsLauncher accepted")
            if (fragment.isAdded) fragment.server.appFolderManager.initFolders()
        }
    }

    fun isStoragePermissionNotAccepted(): Boolean {
        return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            !checkPermissions(
                Manifest.permission.READ_MEDIA_AUDIO,
                Manifest.permission.READ_MEDIA_IMAGES,
                Manifest.permission.READ_MEDIA_VIDEO,
            )
        } else
            !checkPermissions(
                Manifest.permission.WRITE_EXTERNAL_STORAGE,
                Manifest.permission.READ_EXTERNAL_STORAGE,
            )
    }

    private fun checkPermissions(vararg permissions: String): Boolean {
        val activity = fragment.activity ?: return false
        return permissions.all { permission ->
            ActivityCompat.checkSelfPermission(activity, permission) ==
                PackageManager.PERMISSION_GRANTED
        }
    }

    fun requestPermissions() {
        val activity = fragment.activity ?: return
//        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
//            try {
//                val intent = Intent(
//                    ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION,
//                    Uri.parse("package:" + BuildConfig.APPLICATION_ID)
//                )
//
////                val intent = Intent(Settings.ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION)
////                intent.addCategory("android.intent.category.DEFAULT")
////                intent.data = Uri.parse("package:${BuildConfig.APPLICATION_ID}")
//                writePermissionSettingsLauncher.launch(intent)
//            } catch (e: Exception) {
//                try {
//                    val intent = Intent()
//                    intent.action = Settings.ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION
//                    Toast.makeText(activity, "Please select WebShare, and give permission to manage all files", Toast.LENGTH_LONG).show()
//                    writePermissionSettingsLauncher.launch(intent)
//                } catch (e: Exception) {
//                    Toast.makeText(activity, "Please open Settings and give WebShare, permission to manage all files", Toast.LENGTH_LONG).show()
//                }
//            }
//        } else {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            writePermissionsLauncher.launch(
                arrayOf(
                    Manifest.permission.READ_MEDIA_AUDIO,
                    Manifest.permission.READ_MEDIA_IMAGES,
                    Manifest.permission.READ_MEDIA_VIDEO,
                )
            )
        } else {
            writePermissionsLauncher.launch(
                arrayOf(
                    Manifest.permission.WRITE_EXTERNAL_STORAGE,
                    Manifest.permission.READ_EXTERNAL_STORAGE,
                )
            )
        }
//        }
    }
}