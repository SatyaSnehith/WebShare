package com.nscube.filepicker.thread.event;

import com.nscube.filepicker.data.FileInfo;

public interface ScanListener {
    void onScanComplete(FileInfo[] fileInfos);
}
