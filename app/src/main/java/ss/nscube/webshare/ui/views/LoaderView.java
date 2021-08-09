package ss.nscube.webshare.ui.views;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.graphics.Color;
import android.text.TextUtils;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.core.content.FileProvider;

import java.io.File;

import ss.nscube.webshare.Executor;
import ss.nscube.webshare.R;
import ss.nscube.webshare.server.loaders.FileData;
import ss.nscube.webshare.server.utils.FileUtil;
import ss.nscube.webshare.ui.drawables.ProgressDrawable;
import ss.nscube.webshare.utils.ViewUtil;

public class LoaderView extends LinearLayout implements View.OnClickListener {
    private Activity activity;
    private FileData fileData;
    private ImageView imageView;
    private LinearLayout progressLayout, mainLayout;
    private TextView nTextView, uTextView;
    private View progressView;
    private ProgressDrawable progressDrawable;
    private Executor pExecutor;

    public LoaderView(Activity activity) {
        super(activity);
        this.activity = activity;
        init();
        setUpView();

        setClickable(true);
        setFocusable(true);
        setOnClickListener(this);
        setBackgroundResource(R.drawable.progress_item_bg);
        setOrientation(VERTICAL);
        setGravity(Gravity.CENTER_VERTICAL);
        int pad = ViewUtil.dp(10);
        setPadding(0, 0, pad, 0);
    }

    @Override
    public void onClick(View v) {
            if (fileData != null) {
                File file = new File(fileData.getFilePath());
                String mime = FileUtil.getMIMETypeOnly(fileData.getFileName());
                try {
                    Intent intent = new Intent(Intent.ACTION_VIEW);
                    intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);

                    if (mime != null) {
                        intent.setDataAndType(FileProvider.getUriForFile(activity, activity.getApplicationContext().getPackageName() + ".provider", file), mime);
                    }
                    activity.startActivity(intent);
            } catch (ActivityNotFoundException e) {
                Toast.makeText(activity, "No app found to open this file", Toast.LENGTH_SHORT).show();
            }
        }
    }

    public void setFileData(FileData fileData) {
        this.fileData = fileData;
        nTextView.setText(fileData.getFileName());
        uTextView.setText(fileData.getUserName());
        if (fileData.isUploading()) {
            imageView.setImageResource(R.drawable.ic_up);
        } else {
            imageView.setImageResource(R.drawable.ic_downs);
        }
        if (getProgress() == 100) {
            updateToFileView();
        } else {
            setUpProgressExecutor();
        }
    }

    private void init() {
        mainLayout = new LinearLayout(activity);
        imageView = new ImageView(activity);
        progressLayout = new LinearLayout(activity);
        nTextView = new TextView(activity);
        uTextView = new TextView(activity);
        progressView = new View(activity);
        progressDrawable = new ProgressDrawable();
    }

    private void setUpView() {
        addView(mainLayout, new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewUtil.dp(70)));

        int pad = ViewUtil.dp(15);
        imageView.setPadding(pad, pad, pad, pad);
        LayoutParams iLayoutParams = new LayoutParams(ViewUtil.dp(50), ViewUtil.dp(60));

        mainLayout.addView(imageView, iLayoutParams);

        progressLayout.setOrientation(VERTICAL);
        progressLayout.setGravity(Gravity.CENTER_VERTICAL);

        nTextView.setSingleLine(true);
        nTextView.setEllipsize(TextUtils.TruncateAt.MARQUEE);
        nTextView.setMarqueeRepeatLimit(-1);
        nTextView.setSelected(true);
        nTextView.setTextSize(16);
        nTextView.setPadding(0, 0, 0,0);
        nTextView.setTextColor(Color.DKGRAY);
        progressLayout.addView(nTextView, new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        uTextView.setSingleLine(true);
        uTextView.setEllipsize(TextUtils.TruncateAt.MARQUEE);
        uTextView.setMarqueeRepeatLimit(-1);
        uTextView.setSelected(true);
        nTextView.setTextSize(14);
        uTextView.setPadding(0, 0, 0, ViewUtil.dp(3));
        uTextView.setTextColor(Color.LTGRAY);
        progressLayout.addView(uTextView, new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        progressView.setBackground(progressDrawable);
        progressLayout.addView(progressView, new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewUtil.dp(4)));

        LayoutParams pLayoutParams = new LayoutParams(0, ViewGroup.LayoutParams.MATCH_PARENT, 1);
        mainLayout.addView(progressLayout, pLayoutParams);

        View view = new View(activity);
        view.setBackgroundColor(ViewUtil.GREY_300);
        addView(view, new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewUtil.dp(1)));
    }

    public void updateProgress() {
        int progress = 100;
        if (fileData.getTotalBytes() != 0) {
            progress = getProgress();
        }
        progressDrawable.setProgress(progress);

        if (progress == 100) {
            pExecutor.stopExecuting();
            updateToFileView();
        }
    }

    private int getProgress() {
        if (fileData == null) return 0;
        return (int) (((float) fileData.getTransferredBytes() / fileData.getTotalBytes()) * 100);
    }

    private void updateToFileView() {
        imageView.setImageResource(com.nscube.filepicker.utils.FileUtil.getFileIcon(fileData.getFileName()));
        progressView.setVisibility(GONE);
    }

    private void setUpProgressExecutor() {
        if (pExecutor == null) {
            pExecutor = new Executor(activity, new Runnable() {
                    @Override
                    public void run() {
                        updateProgress();
                    }
                }, 1000);
            pExecutor.start();
        }
    }

}
