package ss.nscube.webshare.ui.views;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.graphics.Typeface;
import android.provider.DocumentsContract;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.nscube.filepicker.FilePickerActivity;
import com.nscube.filepicker.data.FileInfo;
import com.nscube.filepicker.utils.FileUtil;

import org.json.JSONArray;
import org.json.JSONException;

import java.io.File;
import java.util.ArrayList;

import ss.nscube.webshare.MainActivity;
import ss.nscube.webshare.R;
import ss.nscube.webshare.server.accounts.FileManager;
import ss.nscube.webshare.server.HTTPServer;
import ss.nscube.webshare.ui.adapters.SelectAdapter;
import ss.nscube.webshare.ui.adapters.events.OnRemoveClicked;
import ss.nscube.webshare.utils.UiUtil;
import ss.nscube.webshare.utils.ViewUtil;

public class MyFilesView extends LinearLayout {
    private final MainActivity mainActivity;
    private RelativeLayout relativeLayout;
    private ImageView textView;
    private RecyclerView recyclerView;
    private TextView button;
    private ArrayList<String> paths;
    private SelectAdapter adapter;
    private HTTPServer server;
    private FileManager fileManager;
    public static final int CUSTOM_FILE_PICKET_REQUEST_CODE = 200;
    public static final int DEFAULT_FILE_PICKET_REQUEST_CODE = 201;
    private final String SHARED_PREF_KEY = "PATHS";
    private final String SHARED_PREF_TAG = "WebSharer";
    int margin;

    public MyFilesView(MainActivity mainActivity) {
        super(mainActivity);
        this.mainActivity = mainActivity;
        init();
        setOrientation(VERTICAL);
        setGravity(Gravity.END);
        setUpRecyclerView();
        setUpButton();
        setUpListeners();
        getPathsFromSharedPref();
    }

    private void init() {
        paths = new ArrayList<>();
        relativeLayout = new RelativeLayout(mainActivity);
        textView = new ImageView(mainActivity);
        recyclerView = new RecyclerView(mainActivity);
        adapter = new SelectAdapter();
        button = new TextView(mainActivity);
        margin = UiUtil.getDimen(mainActivity, R.dimen.selected_files_margin);
    }

    private void setUpRecyclerView() {
        relativeLayout.setBackgroundResource(R.drawable.input_bg);

        recyclerView.setAdapter(adapter);
        recyclerView.setLayoutManager(new LinearLayoutManager(mainActivity));
        adapter.setOnRemoveClicked(new OnRemoveClicked() {
            @Override
            public void onRemoveClicked(int pos) {
                server.getAccounts().get(0).getFiles().remove(new File(paths.get(pos)));
                paths.remove(pos);
                updateTextView();
            }
        });
        RelativeLayout.LayoutParams rLayoutParams = new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
        relativeLayout.addView(recyclerView, rLayoutParams);

        textView.setImageResource(R.drawable.select_files);
//        textView.setText(R.string.no_files_selected);
//        textView.setTextColor(ViewUtil.BLUE_800);
//        textView.setTypeface(Typeface.defaultFromStyle(Typeface.BOLD));
        textView.setVisibility(GONE);
        int size = ViewUtil.dp(200);
        RelativeLayout.LayoutParams tLayoutParams = new RelativeLayout.LayoutParams(size, ViewGroup.LayoutParams.WRAP_CONTENT);
        tLayoutParams.addRule(RelativeLayout.CENTER_HORIZONTAL);
        tLayoutParams.addRule(RelativeLayout.CENTER_VERTICAL);
        relativeLayout.addView(textView, tLayoutParams);

        LayoutParams layoutParams = new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, 0, 1);
        layoutParams.setMargins(margin, margin, margin, margin);
        addView(relativeLayout, layoutParams);
    }

    private void setUpButton() {
        button.setText(R.string.select_btn);
        button.setTextSize(14);
        button.setTextColor(ViewUtil.WHITE);
        button.setBackgroundResource(R.drawable.m_button_ripple);
        int vPad = ViewUtil.dp(10);
        int hPad = ViewUtil.dp(20);
        button.setPadding(hPad, vPad, hPad, vPad);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openFilePickerActivity();
            }
        });
        LayoutParams layoutParams =  new LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        layoutParams.setMargins(margin, 0, margin, margin);
        addView(button, layoutParams);
    }

    private void openFilePickerActivity() {
//        try {
//            Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
//            intent.addCategory(Intent.CATEGORY_OPENABLE);
//            intent.setType("*/*");
//            intent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
//            intent.setFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION
//                    | Intent.FLAG_GRANT_WRITE_URI_PERMISSION
//                    | Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION);
//            mainActivity.startActivityForResult(intent, DEFAULT_FILE_PICKET_REQUEST_CODE);
//        } catch (android.content.ActivityNotFoundException ex) {
            Intent intent = new Intent(mainActivity, FilePickerActivity.class);
            intent.putStringArrayListExtra(FilePickerActivity.PATH_LIST_KEY, paths);
            mainActivity.startActivityForResult(intent, CUSTOM_FILE_PICKET_REQUEST_CODE);
//        }
    }

    private void setUpListeners() {
        mainActivity.addOnServiceBoundListener(this::onServiceBound);
    }

    private void onServiceBound(HTTPServer server) {
        this.server = server;
        this.fileManager = server.getAccounts().get(0).getFiles();
        File[] files = fileManager.getArray();
        if (paths.size() > 0) {
            for (String path: paths) {
                fileManager.addOrReplace(new File(path));
            }
        } else {
            for (File file: files) {
                paths.add(file.getAbsolutePath());
            }
            updateAdapter();
        }
        fileManager.setOnFileRemovedListener(new FileManager.OnFileRemovedListener() {
            @Override
            public void onFileRemoved(File file) {
                paths.remove(file.getAbsolutePath());
                updateAdapter();
                setPathsToSharedPref();
            }
        });
    }

    public void onResult(ArrayList<String> paths) {
        this.paths = paths;
        updateAdapter();
        updateFilesToServer();
        setPathsToSharedPref();
    }

    public void onDestroy() {
        setPathsToSharedPref();
    }

    private void updateFilesToServer() {
        if (fileManager != null) {
            fileManager.clear();
            for (String path : paths) {
                fileManager.addOrReplace(new File(path));
            }
        }
    }

    private void updateAdapter() {
        adapter.update(paths);
        updateTextView();
    }

    private void updateTextView() {
        if (paths.size() == 0) {
            if (textView.getVisibility() == GONE) {
                textView.setVisibility(VISIBLE);
            }
        } else if (textView.getVisibility() == VISIBLE) {
            textView.setVisibility(GONE);
        }
    }

    private void getPathsFromSharedPref() {
        try {
            JSONArray array = new JSONArray(mainActivity.getSharedPreferences(SHARED_PREF_TAG, Context.MODE_PRIVATE).getString(SHARED_PREF_KEY, "[]"));
            for (int i = 0; i < array.length(); ++i) {
                paths.add(array.getString(i));
            }
            updateAdapter();
        } catch (JSONException e) {
            e.printStackTrace();
        }

    }

    private void setPathsToSharedPref() {
        JSONArray array = new JSONArray();
        for (String path: paths) {
            array.put(path);
        }
        SharedPreferences.Editor editor = mainActivity.getSharedPreferences(SHARED_PREF_TAG, Context.MODE_PRIVATE).edit();
        editor.putString(SHARED_PREF_KEY, array.toString());
        editor.apply();
    }

}
