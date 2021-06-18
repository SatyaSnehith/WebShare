package com.nscube.filepicker.thread;

import android.util.Log;

import com.nscube.filepicker.data.FileInfo;
import com.nscube.filepicker.thread.event.ScanListener;
import com.nscube.filepicker.utils.FileUtil;

import java.io.File;
import java.io.FilenameFilter;
import java.util.ArrayList;

public class ScannerThread extends Thread {
    private File rootFile;
    private ArrayList<FileInfo> fileInfos;
    private ScanListener scanListener;
    private boolean ignoreListener;
    int i = 0;

    public ScannerThread(File rootFile) {
        this.rootFile = rootFile;
        fileInfos = new ArrayList<>();
        ignoreListener = false;
    }

    public void setScanListener(ScanListener scanListener) {
        this.scanListener = scanListener;
    }

    public boolean isIgnoreListener() {
        return ignoreListener;
    }

    public void setIgnoreListener(boolean ignoreListener) {
        this.ignoreListener = ignoreListener;
    }

    @Override
    public void run() {
        if (rootFile.exists() && rootFile.isDirectory()) {
            File[] files = rootFile.listFiles();
            if (files != null) {
                for (File file: files) {
                    FileInfo fileInfo;
                    if (!file.isHidden()) {
                        if (file.isFile()) {
                            fileInfo = new FileInfo(file.getName(), file.getAbsolutePath(), FileUtil.getSize(file.length()));
                        } else {
                            fileInfo = new FileInfo(file.getName(), file.getAbsolutePath());
                        }
                        fileInfos.add(fileInfo);
                    }
                }
            }
        }
        if (!ignoreListener)
            scanListener.onScanComplete(fileInfos.toArray(new FileInfo[0]));
    }
}
