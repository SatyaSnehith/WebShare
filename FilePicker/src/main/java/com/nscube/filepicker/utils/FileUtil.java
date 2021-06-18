package com.nscube.filepicker.utils;

import android.content.Context;
import android.os.storage.StorageManager;

import com.nscube.filepicker.R;

import java.lang.reflect.Array;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Locale;

public class FileUtil {
    static long kilo = 1024;
    static long mega = kilo * kilo;
    static long giga = mega * kilo;
    static long tera = giga * kilo;

    public static String getFileNameFromPath(String filePath) {
        return filePath.substring(filePath.lastIndexOf('/') + 1);
    }

    public static int getFileIcon(String name) {
        int dotPos = name.lastIndexOf('.');
        if (dotPos > -1) {
            String extension = name.substring(dotPos + 1);
            switch (extension) {
                case "mp4":
                case "qt":
                case "mov":
                case "mpeg":
                case "mpg":
                case "webm":
                case "mpv":
                case "mkv":
                case "avi":
                    return R.drawable.video_icon;
                case "flac":
                case "mid":
                case "mp2":
                case "mp3":
                case "m4a":
                case "m3u":
                case "oga":
                case "ogg":
                case "opus":
                case "wav":
                    return R.drawable.audio_icon;
                case "gif":
                case "jp2":
                case "jpg2":
                case "jpeg":
                case "jpg":
                case "jpe":
                case "png":
                case "svg":
                    return R.drawable.image_icon;
            }
        }
        return R.drawable.file_icon;
    }

    public static String getSize(long size) {
        String s = "";
        double kb = (double)size / kilo;
        double mb = kb / kilo;
        double gb = mb / kilo;
        double tb = gb / kilo;
        if(size < kilo) {
            s = size + " Bytes";
        } else if(size < mega) {
            s =  String.format(Locale.getDefault(), "%.2f", kb) + " KB";
        } else if(size < giga) {
            s = String.format(Locale.getDefault(),"%.2f", mb) + " MB";
        } else if(size < tera) {
            s = String.format(Locale.getDefault(),"%.2f", gb) + " GB";
        } else {
            s = String.format(Locale.getDefault(),"%.2f", tb) + " TB";
        }
        return s;
    }

    public static String getParentPath(String path) {
        return path.substring(0, path.lastIndexOf('/'));
    }

    public static String getExternalStoragePath(Context mContext, boolean is_removable) {
        StorageManager mStorageManager = (StorageManager) mContext.getSystemService(Context.STORAGE_SERVICE);
        Class<?> storageVolumeClazz = null;
        try {
            storageVolumeClazz = Class.forName("android.os.storage.StorageVolume");
            Method getVolumeList = mStorageManager.getClass().getMethod("getVolumeList");
            Method getPath = storageVolumeClazz.getMethod("getPath");
            Method isRemovable = storageVolumeClazz.getMethod("isRemovable");
            Object result = getVolumeList.invoke(mStorageManager);
            final int length = Array.getLength(result);
            for (int i = 0; i < length; i++) {
                Object storageVolumeElement = Array.get(result, i);
                String path = (String) getPath.invoke(storageVolumeElement);
                boolean removable = (Boolean) isRemovable.invoke(storageVolumeElement);
                if (is_removable == removable) {
                    return path;
                }
            }
        } catch (ClassNotFoundException | NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static boolean isImage(String fileName) {
        int dotPos = fileName.lastIndexOf('.');
        if (dotPos == -1)
            return false;
        String ext = fileName.substring(dotPos + 1).toLowerCase();
        return (ext.equals("gif") || ext.equals("jp2") || ext.equals("jpg2") || ext.equals("jpeg") || ext.equals("jpg") || ext.equals("jpe") || ext.equals("png") || ext.equals("svg"));
    }
}
