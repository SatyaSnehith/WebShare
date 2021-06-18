package com.nscube.filepicker;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.Settings;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.nscube.filepicker.adapter.DirectoryAdapter;
import com.nscube.filepicker.adapter.PathAdapter;
import com.nscube.filepicker.adapter.events.DirClickListener;
import com.nscube.filepicker.adapter.events.FileClickListener;
import com.nscube.filepicker.adapter.events.PathClickListener;
import com.nscube.filepicker.data.FileInfo;
import com.nscube.filepicker.thread.ScannerThread;
import com.nscube.filepicker.thread.event.ScanListener;
import com.nscube.filepicker.utils.FileUtil;
import com.nscube.filepicker.utils.ViewUtil;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

public class FilePickerActivity extends Activity {
    private ArrayList<String> selectedFiles, directoriesPath;
    private FileSelector fileSelector;
    private RecyclerView dirRecyclerView, pathRecyclerView;
    private DirectoryAdapter directoryAdapter;
    private PathAdapter pathAdapter;
    private TextView textView;
    private ImageView backButton;
    private ScannerThread scannerThread;
    public static final String PATH_LIST_KEY = "paths";

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_file_picker);

        ViewUtil.init(this);
        init();

        ArrayList<String> paths = getIntent().getStringArrayListExtra(PATH_LIST_KEY);
        if (paths != null) {
            for (String path: paths) {
                fileSelector.add(path);
            }
        }

        backButton.setOnClickListener(this::back);

//        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
//            if (!Environment.isExternalStorageManager()) {
//                Intent intent = new Intent(Settings.ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION);
//                startActivity(intent);
//            }
//        }
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.READ_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(this, Manifest.permission.READ_EXTERNAL_STORAGE)) {
            } else {
                ActivityCompat.requestPermissions(this,
                        new String[]{Manifest.permission.READ_EXTERNAL_STORAGE},
                        200);
            }
        } else {
        }

        pathAdapter.setPathClickListener(new PathClickListener() {
            @Override
            public void onPathClicked(int index) {
                if (index == 0) {
                    if (textView.getVisibility() == View.VISIBLE)
                        textView.setVisibility(View.GONE);
                    directoriesPath.clear();
                    goToHome();
                } else {
                    onPathDirectoryClicked(index - 1);
                }
                pathAdapter.notifyDataSetChanged();
            }
        });

        directoryAdapter.setDirClickListener(this::onDirectoryClicked);

        directoryAdapter.setFileClickListener(new FileClickListener() {
            @Override
            public void onFileClicked(FileInfo fileInfo) {
                String filePath = fileInfo.getPath();

                if (fileInfo.isSelected()) {
                    if (!selectedFiles.contains(fileInfo.getPath())) {
                        selectedFiles.add(filePath);
                    }
                    fileSelector.add(filePath);
                } else {
                    selectedFiles.remove(filePath);
                    fileSelector.remove(filePath);

                }
//                for (Map.Entry<String, ArrayList<String>> entry: selectedFilesMap.entrySet()) {
//                    Log.i("TAG_PATHS", "onFileClicked: " + entry.getKey() + " -> " + Arrays.toString(entry.getValue().toArray(new String[0])));
//                }
            }
        });

        dirRecyclerView.setAdapter(directoryAdapter);
//        dirRecyclerView.setLayoutManager(new LinearLayoutManager(this));
        dirRecyclerView.setLayoutManager(new GridLayoutManager(this, 2));

        pathRecyclerView.setAdapter(pathAdapter);
        pathRecyclerView.setLayoutManager(new LinearLayoutManager(this, RecyclerView.HORIZONTAL, false));

        goToHome();
    }

    private void goToHome() {
        File rootFile = Environment.getExternalStorageDirectory();
        String secStore = FileUtil.getExternalStoragePath(this, true);
        FileInfo[] fileInfos = new FileInfo[secStore == null ? 1 : 2];
        fileInfos[0] = new FileInfo("Internal Memory", rootFile.getAbsolutePath());
        if (secStore != null) {
            fileInfos[1] = new FileInfo("SD Card", secStore);
        }
        directoryAdapter.updateList(fileInfos);
        directoryAdapter.notifyDataSetChanged();
    }

    private void onDirectoryClicked(FileInfo fileInfo) {
        File file = new File(fileInfo.getPath());
        if (textView.getVisibility() == View.VISIBLE)
            textView.setVisibility(View.GONE);
        if (scannerThread != null && scannerThread.isAlive())
            scannerThread.setIgnoreListener(true);
        scannerThread = new ScannerThread(file);
        scannerThread.setScanListener(new ScanListener() {
            @Override
            public void onScanComplete(FileInfo[] fileInfos) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        if (fileInfos.length == 0) {
                            textView.setVisibility(View.VISIBLE);
                        }

                        fileSelector.selectFileInfos(file.getAbsolutePath(), fileInfos);

                        directoryAdapter.updateList(fileInfos);
                        directoryAdapter.notifyDataSetChanged();

                        directoriesPath.add(file.getAbsolutePath());
                        pathAdapter.notifyDataSetChanged();
                        pathRecyclerView.scrollToPosition(pathAdapter.getItemCount() - 1);
                    }
                });
            }
        });
        scannerThread.start();

    }

    private void onPathDirectoryClicked(int index) {
        File file = new File(directoriesPath.get(index));
        if (textView.getVisibility() == View.VISIBLE)
            textView.setVisibility(View.GONE);
        if (scannerThread != null && scannerThread.isAlive())
            scannerThread.setIgnoreListener(true);
        scannerThread = new ScannerThread(file);
        scannerThread.setScanListener(new ScanListener() {
            @Override
            public void onScanComplete(FileInfo[] fileInfos) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        if (fileInfos.length == 0) {
                            textView.setVisibility(View.VISIBLE);
                        }

                        fileSelector.selectFileInfos(file.getAbsolutePath(), fileInfos);

                        directoryAdapter.updateList(fileInfos);
                        directoryAdapter.notifyDataSetChanged();

                        ArrayList<String> temp = new ArrayList<>();
                        for (int i = 0; i <= index; ++i) {
                            temp.add(directoriesPath.get(i));
                        }
                        directoriesPath.clear();
                        directoriesPath.addAll(temp);

                        pathRecyclerView.scrollToPosition(pathAdapter.getItemCount() - 1);
                    }
                });
            }
        });
        scannerThread.start();

    }

    @Override
    public void onBackPressed() {
        if (directoriesPath.size() > 0) {
            pathAdapter.firePathClick(directoriesPath.size() - 1);
        } else {
//            setResult();
            finish();
        }

    }

    private void setResult() {
        Intent intent = new Intent();
        intent.putStringArrayListExtra(PATH_LIST_KEY, fileSelector.toArrayList());
        setResult(RESULT_OK, intent);
    }

    private void back(View view) {
//        setResult();
        finish();
    }

    private void init() {
        selectedFiles = new ArrayList<>();
        fileSelector = new FileSelector();
        textView = findViewById(R.id.ed_tv);
        dirRecyclerView = findViewById(R.id.dir_rv);
        pathRecyclerView = findViewById(R.id.path_rv);
        directoryAdapter = new DirectoryAdapter(new FileInfo[0]);
        directoriesPath = new ArrayList<>();
        pathAdapter = new PathAdapter(directoriesPath);
        backButton = findViewById(R.id.back_iv);
    }

    public void done(View view) {
        setResult();
        finish();
    }
}