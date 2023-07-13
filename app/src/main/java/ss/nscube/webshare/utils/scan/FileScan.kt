package ss.nscube.webshare.utils.scan

import android.content.ContentUris
import android.content.Context
import android.content.Intent
import android.content.pm.ApplicationInfo
import android.content.pm.PackageManager
import android.content.pm.PackageManager.ResolveInfoFlags
import android.content.pm.ResolveInfo
import android.net.Uri
import android.os.Build
import android.provider.MediaStore
import android.provider.MediaStore.VOLUME_EXTERNAL
import androidx.core.net.toUri
import kotlinx.coroutines.*
import ss.nscube.webshare.utils.d
import ss.nscube.webshare.utils.log
import ss.nscube.webshare.utils.scan.models.*
import java.io.File

object FileScan {

    fun scanImage(
        context: Context,
        coroutineScope: CoroutineScope,
        scanCompletedListener: OnScanCompletedListener<ArrayList<ImageAlbum>>
    ) = coroutineScope.async(Dispatchers.IO) {
        val dataList: ArrayList<ImageAlbum> = ArrayList()

        val map = HashMap<Int, ImageAlbum>()
        val collection: Uri =
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                MediaStore.Images.Media.getContentUri(VOLUME_EXTERNAL)
            } else {
                MediaStore.Images.Media.EXTERNAL_CONTENT_URI
            }
        val query = try {
            context.contentResolver.query(
                collection,
                imageProjection,
                null,
                null,
                null
            )
        } catch (e: java.lang.Exception) {
            null
        }
        query?.let { cursor ->
            // Cache column indices.
            val idColumn = cursor.getColumnIndexOrThrow(MediaStore.Images.Media._ID)
            val nameColumn = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DISPLAY_NAME)
            val folderColumn = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.BUCKET_DISPLAY_NAME)
            val folderIdColumn = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.BUCKET_ID)
            val sizeColumn = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.SIZE)
            val modifiedDateColumn =  cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATE_MODIFIED)
            val widthColumn =  cursor.getColumnIndexOrThrow(MediaStore.Images.Media.WIDTH)
            val heightColumn =  cursor.getColumnIndexOrThrow(MediaStore.Images.Media.HEIGHT)

            while (cursor.moveToNext()) {
                // Get values of columns for a given video.
                val id = cursor.getLong(idColumn)
                val name = cursor.getString(nameColumn)
                var folder = cursor.getString(folderColumn)
                val folderId = cursor.getInt(folderIdColumn)
                val length = cursor.getLong(sizeColumn)
                val modifiedDate = cursor.getLong(modifiedDateColumn)
                val width = cursor.getLong(widthColumn)
                val height = cursor.getLong(heightColumn)

                val contentUri: Uri = ContentUris.withAppendedId(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, id)

                if (folder == null) {
                    folder = "Main Directory"
                }
                // Stores column values and the contentUri in a local object
                // that represents the media file.
                val imageAlbum = if (map.containsKey(folderId)) map[folderId] else {
                    val imageAlbum = ImageAlbum(folderId, folder)
                    map[folderId] = imageAlbum
                    imageAlbum
                }

//                    var isSelected = false
//                    for (selectedFile in fileSelectionManager.files) {
//                        if (selectedFile.uri?.equals(contentUri) == true) {
//                            isSelected = true
//                        }
//                    }
                imageAlbum?.list?.add(Image(name, length, contentUri, "$width x $height", modifiedDate))
            }
        }
        query?.close()

        dataList.addAll(map.values)
        for (album in dataList) {
            album.list.sortWith { o1, o2 -> (o2.date - o1.date).toInt() }
            d("IMAGES ALBUM ${album.id} ${album.name} ${album.list.size}")
        }
        dataList.sortWith { o1, o2 ->
            try {
                o2.list[0].date - o1.list[0].date
            } catch (e: java.lang.Exception) {
                0
            }.toInt()
        }
        coroutineScope.launch(Dispatchers.Main) {
            scanCompletedListener.onScanned(dataList)
        }
    }

    fun scanVideo(
        context: Context,
        coroutineScope: CoroutineScope,
        scanCompletedListener: OnScanCompletedListener<ArrayList<VideoAlbum>>
    ) = coroutineScope.async(Dispatchers.IO) {
        val dataList = ArrayList<VideoAlbum>()
        val map = HashMap<Int, VideoAlbum>()

        val collection: Uri =
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                MediaStore.Video.Media.getContentUri(VOLUME_EXTERNAL)
            } else {
                MediaStore.Video.Media.EXTERNAL_CONTENT_URI
            }

        val query = try {
            context.contentResolver.query(
                collection,
                videoProjection,
                null,
                null,
                null
            )
        } catch (e: java.lang.Exception) {
            null
        }

        query?.let { cursor ->
            // Cache column indices.
            val idColumn = cursor.getColumnIndexOrThrow(MediaStore.Video.Media._ID)
            val nameColumn = cursor.getColumnIndexOrThrow(MediaStore.Video.Media.DISPLAY_NAME)
            val folderColumn = cursor.getColumnIndexOrThrow(MediaStore.Video.Media.BUCKET_DISPLAY_NAME)
            val folderIdColumn = cursor.getColumnIndexOrThrow(MediaStore.Video.Media.BUCKET_ID)
            val durationColumn = cursor.getColumnIndexOrThrow(MediaStore.Video.Media.DURATION)
            val sizeColumn = cursor.getColumnIndexOrThrow(MediaStore.Video.Media.SIZE)
            val modifiedDateColumn =  cursor.getColumnIndexOrThrow(MediaStore.Video.Media.DATE_MODIFIED)

            while (cursor.moveToNext()) {
                // Get values of columns for a given video.
                val id = cursor.getLong(idColumn)
                val name = cursor.getString(nameColumn)
                var folder = cursor.getString(folderColumn)
                val folderId = cursor.getInt(folderIdColumn)
                val duration = cursor.getInt(durationColumn)
                val size = cursor.getLong(sizeColumn)
                val modifiedDate = cursor.getLong(modifiedDateColumn)

                val contentUri: Uri = ContentUris.withAppendedId(
                    MediaStore.Video.Media.EXTERNAL_CONTENT_URI,
                    id
                )
                if (folder == null) {
                    folder = "Main Directory"
                }
                // Stores column values and the contentUri in a local object
                // that represents the media file.
                val videoAlbum = if (map.containsKey(folderId)) map[folderId] else {
                    val videoAlbum = VideoAlbum(folderId, folder)
                    map[folderId] = videoAlbum
                    videoAlbum
                }

                videoAlbum?.list?.add(Video(name, size, duration, contentUri, modifiedDate))
            }
        }
        query?.close()
        dataList.addAll(map.values)
        for (album in dataList) {
            album.list.sortWith { o1, o2 -> (o1.date - o2.date).toInt() }
            d("VIDEOS ALBUM ${album.list.size}")
        }
        dataList.sortWith { o1, o2 -> (o1.list[0].date - o2.list[0].date).toInt() }
        coroutineScope.launch(Dispatchers.Main) {
            scanCompletedListener.onScanned(dataList)
        }
    }

    fun scanAudio(
        context: Context,
        coroutineScope: CoroutineScope,
        scanCompletedListener: OnScanCompletedListener<ArrayList<Audio>>
    ) = coroutineScope.async(Dispatchers.IO) {
        val dataList = ArrayList<Audio>()
        val collection: Uri =
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                MediaStore.Audio.Media.getContentUri(VOLUME_EXTERNAL)
            } else {
                MediaStore.Audio.Media.EXTERNAL_CONTENT_URI
            }

        val query = try {
            context.contentResolver.query(
                collection,
                audioProjection,
                null,
                null,
                null
            )
        } catch (e: java.lang.Exception) {
            null
        }

        query?.let { cursor ->
            // Cache column indices.
            val idColumn = cursor.getColumnIndexOrThrow(MediaStore.Audio.Media._ID)
            val nameColumn = cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DISPLAY_NAME)
            val durationColumn = cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DURATION)
            val sizeColumn = cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.SIZE)
            val modifiedDateColumn = cursor.getColumnIndexOrThrow(MediaStore.Audio.Media.DATE_MODIFIED)

            while (cursor.moveToNext()) {
                // Get values of columns for a given video.
                val id = cursor.getLong(idColumn)
                val name = cursor.getString(nameColumn)
                val duration = cursor.getInt(durationColumn)
                val size = cursor.getLong(sizeColumn)
                val modifiedDate = cursor.getLong(modifiedDateColumn)

                val contentUri: Uri = ContentUris.withAppendedId(
                    MediaStore.Audio.Media.EXTERNAL_CONTENT_URI,
                    id
                )
                // Stores column values and the contentUri in a local object
                // that represents the media file.
                dataList.add(Audio(name, size, duration, contentUri, modifiedDate))
            }
        }
        query?.close()

        dataList.sortWith { o1, o2 -> (o1.date - o2.date).toInt() }
        coroutineScope.launch(Dispatchers.Main) {
            scanCompletedListener.onScanned(dataList)
        }
    }

    fun scanApp(
        context: Context,
        coroutineScope: CoroutineScope,
        scanCompletedListener: OnScanCompletedListener<ArrayList<App>>
    ) = coroutineScope.async(Dispatchers.IO) {
        val dataList = ArrayList<App>()
        val mainIntent = Intent(Intent.ACTION_MAIN, null)
        mainIntent.addCategory(Intent.CATEGORY_LAUNCHER)
        val ril: List<ResolveInfo> = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            context.packageManager.queryIntentActivities(mainIntent, ResolveInfoFlags.of(PackageManager.MATCH_DEFAULT_ONLY.toLong()))
        } else {
            context.packageManager.queryIntentActivities(mainIntent, 0)
        }

        var name: String? = null
//            val jobs = ArrayList<Job>()
        // get size of ril and create a list
        for (ri in ril) {
            if (ri.activityInfo == null) continue
            val applicationInfo = ri.activityInfo.applicationInfo
            if (isSystemPackage(applicationInfo))
                continue
            try {
                name = if (ri.activityInfo.labelRes != 0) {
                    context.packageManager.getResourcesForApplication(applicationInfo).getString(ri.activityInfo.labelRes)
                } else {
                    ri.activityInfo.applicationInfo.loadLabel(context.packageManager).toString()
                }
                val apkFile = File(applicationInfo.publicSourceDir)
                if (apkFile.exists()) {
                    dataList.add(
                        App(
                            "${name}.apk",
                            name,
                            apkFile.length(),
                            applicationInfo.loadIcon(context.packageManager),
                            apkFile.toUri()
                        )
                    )
                }
            } catch (e: java.lang.Exception) {
                log("APP_ERROR $e ${e.message}")
            }
        }
        dataList.sortWith(compareBy { it?.label ?: "" })
        coroutineScope.launch(Dispatchers.Main) {
            scanCompletedListener.onScanned(dataList)
        }
    }

    private fun isSystemPackage(applicationInfo: ApplicationInfo): Boolean {
            return applicationInfo.flags and ApplicationInfo.FLAG_SYSTEM != 0
        }

    val audioProjection = arrayOf(
        MediaStore.Audio.Media._ID,
        MediaStore.Audio.Media.DISPLAY_NAME,
        MediaStore.Audio.Media.DURATION,
        MediaStore.Audio.Media.SIZE,
        MediaStore.Audio.Media.DATE_MODIFIED
    )

    val videoProjection = arrayOf(
        MediaStore.Video.Media._ID,
        MediaStore.Video.Media.DISPLAY_NAME,
        MediaStore.Video.Media.BUCKET_DISPLAY_NAME,
        MediaStore.Video.Media.BUCKET_ID,
        MediaStore.Video.Media.DURATION,
        MediaStore.Video.Media.SIZE,
        MediaStore.Video.Media.DATE_MODIFIED
    )

    val imageProjection = arrayOf(
        MediaStore.Images.Media._ID,
        MediaStore.Images.Media.DISPLAY_NAME,
        MediaStore.Images.Media.BUCKET_DISPLAY_NAME,
        MediaStore.Images.Media.BUCKET_ID,
        MediaStore.Images.Media.SIZE,
        MediaStore.Images.Media.DATE_MODIFIED,
        MediaStore.Images.Media.WIDTH,
        MediaStore.Images.Media.HEIGHT
    )
}

interface OnScanCompletedListener<T> {
    fun onScanned(data: T)
}
