package ss.nscube.webshare.ui.adapters;

import android.util.Log;
import android.widget.Adapter;

import androidx.viewpager.widget.PagerAdapter;

import java.util.ArrayList;

import ss.nscube.webshare.MainActivity;
import ss.nscube.webshare.server.HTTPServer;
import ss.nscube.webshare.server.loaders.Downloader;
import ss.nscube.webshare.server.loaders.FileData;
import ss.nscube.webshare.server.loaders.Uploader;

public class ProgressAdapterHelper implements Downloader.OnDownloaderChangedListener {
    private final MainActivity activity;
    private final ProgressAdapter adapter;
    private final HTTPServer server;
    private final ArrayList<FileData> files;
    private final Object mutex;
    private OnNoFileTransfersListener onNoFileTransfersListener;

    public ProgressAdapterHelper(MainActivity activity, HTTPServer server) {
        this.activity = activity;
        this.server = server;
        mutex = new Object();
        files = new ArrayList<>();
        this.adapter = new ProgressAdapter(activity, files);
        setUpDownloadListener();
    }

    private void setUpDownloadListener() {
//        server.getUploader().setOnUploaderChangedListener(this);
        Downloader downloader = server.getDownloader();
        downloader.setOnDownloaderChangedListener(this);
        Downloader.FileDownloader[] fileDownloaders = downloader.getList().toArray(new Downloader.FileDownloader[0]);
        for (Downloader.FileDownloader fileDownloader: fileDownloaders) {
            files.add(fileDownloader.getFileData());
            adapter.notifyItemInserted(files.size() - 1);
            FileData fileData = fileDownloader.getFileData();
            if (onNoFileTransfersListener != null)
            onNoFileTransfersListener.onNoFileTransfers(files.size() == 0);
        }

    }

    public void setOnNoFileTransfersListener(OnNoFileTransfersListener onNoFileTransfersListener) {
        this.onNoFileTransfersListener = onNoFileTransfersListener;
        onNoFileTransfersListener.onNoFileTransfers(files.size() == 0);
    }
//
//    @Override
//    public void onAdded(Uploader.FileUploader fileUploader) {
//        Log.i("TAG", "onAdded:u " + fileUploader.getFileData().getFileName());
//        activity.runOnUiThread(new Runnable() {
//            @Override
//            public void run() {
//                synchronized (mutex) {
//                    files.add(fileUploader.getFileData());
//                    adapter.notifyItemInserted(files.size() - 1);
//                    onNoFileTransfersListener.onNoFileTransfers(files.size() == 0);
//                }
//            }
//        });
//    }
//
//    @Override
//    public void onRemoved(Uploader.FileUploader fileUploader) {
//        Log.i("TAG", "onRemoved:u " + fileUploader.getFileData().getFileName());
//            activity.runOnUiThread(new Runnable() {
//                @Override
//                public void run() {
//                    synchronized (mutex) {
//                        files.remove(fileUploader.getFileData());
//                        adapter.notifyItemRemoved(files.size() - 1);
//                        onNoFileTransfersListener.onNoFileTransfers(files.size() == 0);
//                    }
//                }
//            });
//    }

    @Override
    public void onAdded(Downloader.FileDownloader fileDownloader) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    synchronized (mutex) {
                        files.add(fileDownloader.getFileData());
                        adapter.notifyItemInserted(files.size() - 1);
                        onNoFileTransfersListener.onNoFileTransfers(files.size() == 0);
                    }
                }
            });
    }

    @Override
    public void onRemoved(Downloader.FileDownloader fileDownloader) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    synchronized (mutex) {
                        files.remove(fileDownloader.getFileData());
                        adapter.notifyItemRemoved(files.size() - 1);
                        onNoFileTransfersListener.onNoFileTransfers(files.size() == 0);
                    }
                }
            });
    }

    public ProgressAdapter getProgressAdapter() {
        return adapter;
    }

    public interface OnNoFileTransfersListener {
        void onNoFileTransfers(boolean isTrue);
    }
}
