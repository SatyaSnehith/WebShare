package ss.nscube.webshare.server.loaders;

import android.util.Log;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

public class Uploader {
    private final ArrayList<FileUploader> fileUploaders;
    private OnUploaderChangedListener onUploaderChangedListener;
    private final Object mutex;

    public Uploader() {
        fileUploaders = new ArrayList<>();
        mutex = new Object();
    }

    public void add(FileData fileData, long from, long to, InputStream inputStream, OutputStream outputStream) {
        FileUploader fileUploader = new FileUploader(fileData);
        fileUploaders.add(fileUploader);
        if (onUploaderChangedListener != null) {
            onUploaderChangedListener.onAdded(fileUploader);
        }
        fileUploader.start(from, to, inputStream, outputStream);

    }

    public void setOnUploaderChangedListener(OnUploaderChangedListener onUploaderChangedListener) {
        this.onUploaderChangedListener = onUploaderChangedListener;
    }

    private void clear() {
        for (Uploader.FileUploader fileUploader: fileUploaders) {
            if (onUploaderChangedListener != null) {
                onUploaderChangedListener.onRemoved(fileUploader);
            }
        }
        fileUploaders.clear();
    }

    public List<FileUploader> getList() {
        return fileUploaders;
    }

    public long getSpeed() {
        int sum = 0;
        int n = 0;
        for (FileUploader fileUploader: fileUploaders) {
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
    public class FileUploader {
        private final SpeedCalculator speedCalculator;
        private final FileData fileData;
        private boolean isRunning;

        FileUploader(FileData fileData) {
            this.fileData = fileData;
            isRunning = true;
            speedCalculator = new SpeedCalculator();
        }

        public void start(long from, long to, InputStream inputStream, OutputStream outputStream) {
            byte[] buffer = new byte[4096 * 4];
            int length;
            long time, totalLen = 0;
            try {
                if (from > 0) {
                    skip(from, inputStream);
                }

                while ((length = inputStream.read(buffer)) > 0 && isRunning) {
                    time = System.currentTimeMillis();
                    outputStream.write(buffer, 0, length);
                    outputStream.flush();
                    totalLen += length;
                    fileData.setProgress(totalLen);
                    speedCalculator.calculate(length, System.currentTimeMillis() - time);
                }
                inputStream.close();
            } catch (IOException e) {

            } finally {
                speedCalculator.cancel();
                fileUploaders.remove(this);
                if (onUploaderChangedListener != null) {
                    onUploaderChangedListener.onRemoved(this);
                }
            }
        }

        private void skip(long n, InputStream inputStream) throws IOException {
            while (n > 0) {
                n -= inputStream.skip(n);
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
    public interface OnUploaderChangedListener {
        void onAdded(FileUploader fileUploader);
        void onRemoved(FileUploader fileUploader);
    }
}
