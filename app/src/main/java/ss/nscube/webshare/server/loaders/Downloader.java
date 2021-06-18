    package ss.nscube.webshare.server.loaders;

import android.util.Log;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class Downloader {
    private final ArrayList<FileDownloader> fileDownloaders;
    private OnDownloaderChangedListener onDownloaderChangedListener;
    private final Object mutex;

    public Downloader() {
        fileDownloaders = new ArrayList<>();
        mutex = new Object();
    }

    public void add(FileData fileData, InputStream inputStream, OutputStream outputStream, OnFileCanceledListener onFileCanceledListener) {
        FileDownloader fileDownloader = new FileDownloader(fileData);
        fileDownloaders.add(fileDownloader);
        if (onDownloaderChangedListener != null) {
            onDownloaderChangedListener.onAdded(fileDownloader);
        }
        fileDownloader.start(inputStream, outputStream, onFileCanceledListener);
    }

    public void setOnDownloaderChangedListener(OnDownloaderChangedListener onDownloaderChangedListener) {
        this.onDownloaderChangedListener = onDownloaderChangedListener;
    }

    public void clear() {
        for (FileDownloader fileDownloader: fileDownloaders) {
            if (onDownloaderChangedListener != null) {
                onDownloaderChangedListener.onRemoved(fileDownloader);
            }
        }
        fileDownloaders.clear();
    }

    public List<FileDownloader> getList() {
        return fileDownloaders;
    }

    public long getSpeed() {
        int sum = 0;
        int n = 0;
        for (FileDownloader fileUploader: fileDownloaders) {
            n = 0;
            long speed = fileUploader.getSpeed();
            if (speed > 0) {
                sum += speed;
                n++;
            }
        }
        if (n == 0)
            return 0;
        return sum / n;
    }
    public class FileDownloader {
        private final SpeedCalculator speedCalculator;
        private FileData fileData;
        private boolean isRunning;

        FileDownloader(FileData fileData) {
            this.fileData = fileData;
            isRunning = true;
            speedCalculator = new SpeedCalculator();
        }

        public void start(InputStream inputStream, OutputStream outputStream, OnFileCanceledListener onFileCanceledListener) {
            long length = fileData.getTotalBytes();
            int bufLen = Math.min((int) length, 16384), readLen, totalRead = 0;
            long newBufLen;
            byte[] buffer = new byte[bufLen];
            long time;

            try {
                while (isRunning) {
                    time = System.currentTimeMillis();
                    readLen = inputStream.read(buffer, 0, bufLen);
                    outputStream.write(buffer, 0, readLen);
                    totalRead += readLen;
                    if (totalRead >= length) {
//                        Log.i("TAG", "start: " + totalRead + " " + length);
                        fileData.setProgress(totalRead);
                        break;
                    }
                    fileData.setProgress(totalRead);
                    speedCalculator.calculate(readLen, System.currentTimeMillis() - time);
                    if ((newBufLen = (length - totalRead)) < bufLen) {
                        bufLen = (int)newBufLen;
                    }
                }
                outputStream.close();
            } catch (Exception e) {
//                Log.i("TAG", "EXCEPTION: " + e);
                fileDownloaders.remove(this);
                if (onDownloaderChangedListener != null) {
                    onDownloaderChangedListener.onRemoved(this);
                }
            } finally {
                if (totalRead != length) {
                    onFileCanceledListener.onFileCanceled();
                }
                speedCalculator.cancel();
            }
        }

        public void stop() {
            isRunning = false;
        }

        public long getSpeed() {
            return speedCalculator.getSpeed();
        }

        public FileData getFileData() {
            return fileData;
        }
    }
    public interface OnDownloaderChangedListener {
        void onAdded(FileDownloader fileDownloader);
        void onRemoved(FileDownloader fileDownloader);
    }
    public interface OnFileCanceledListener {
        void onFileCanceled();
    }
}
