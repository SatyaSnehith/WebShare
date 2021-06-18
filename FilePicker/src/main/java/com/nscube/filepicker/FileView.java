package com.nscube.filepicker;

import android.content.Context;
import android.text.TextUtils;
import android.view.Gravity;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.nscube.filepicker.data.FileInfo;
import com.nscube.filepicker.utils.FileUtil;

public class FileView extends LinearLayout {
    private float density = -1;
    private Context context;
    private LinearLayout mLinearLayout0;
    private ImageView mImageView0;
    private LinearLayout mLinearLayout1;
    private TextView mTextView0;
    private TextView mTextView1;
    private RelativeLayout mRelativeLayout0;
    private ImageView selectImageView;
    private com.nscube.filepicker.LoadingView loadingView;
    private View mView0;

    public FileView(Context context) {
        super(context);
        this.context = context;

        setBackgroundResource(R.drawable.ripple_dir_item);
        setOrientation(VERTICAL);

        mLinearLayout0 = new LinearLayout(context);
        mLinearLayout0.setGravity(Gravity.CENTER_VERTICAL);
        mLinearLayout0.setOrientation(LinearLayout.HORIZONTAL);
        LayoutParams mLinearLayout0Params = new LayoutParams(-1, getDimen(R.dimen.dir_height));
        addView(mLinearLayout0, mLinearLayout0Params);

        mImageView0 = new ImageView(context);
        mImageView0.setId(0);
        LayoutParams mImageView0Params = new LayoutParams(getDimen(R.dimen.dir_icon_size), getDimen(R.dimen.dir_icon_size));
        mImageView0Params.setMargins(dp(24), 0, dp(24), 0);
        mLinearLayout0.addView(mImageView0, mImageView0Params);

        mLinearLayout1 = new LinearLayout(context);
        mLinearLayout1.setOrientation(LinearLayout.VERTICAL);
        LayoutParams mLinearLayout1Params = new LayoutParams(0, -2, 1);
        mLinearLayout0.addView(mLinearLayout1, mLinearLayout1Params);

        mTextView0 = new TextView(context);
        mTextView0.setTextColor(context.getResources().getColor(R.color.gray600));
        mTextView0.setTextSize(16);
        mTextView0.setEllipsize(TextUtils.TruncateAt.MARQUEE);
        mTextView0.setMarqueeRepeatLimit(-1);
        mTextView0.setSingleLine(true);
        mTextView0.setSelected(true);
        LayoutParams mTextView0Params = new LayoutParams(-2, -2);
        mLinearLayout1.addView(mTextView0, mTextView0Params);

        mTextView1 = new TextView(context);
        mTextView1.setTextColor(context.getResources().getColor(R.color.gray500));
        mTextView1.setTextSize(12);
        LayoutParams mTextView1Params = new LayoutParams(-2, -2);
        mLinearLayout1.addView(mTextView1, mTextView1Params);

        mRelativeLayout0 = new RelativeLayout(context);
        LayoutParams mRelativeLayout0Params = new LayoutParams(-2, -2);
        mLinearLayout0.addView(mRelativeLayout0, mRelativeLayout0Params);

        int dp20 = dp(20);
        int dp15 = dp(15);
        selectImageView = new ImageView(context);
        selectImageView.setImageResource(R.drawable.tick_icon);
        selectImageView.setBackgroundResource(R.drawable.count_bg);
        selectImageView.setVisibility(GONE);
        selectImageView.setPadding(dp(5), dp(5), dp(5), dp(5));
        LayoutParams selectImageViewParams = new LayoutParams(dp20, dp20);
        selectImageViewParams.setMargins(dp15, 0, dp15, 0);
        mRelativeLayout0.addView(selectImageView, selectImageViewParams);

        loadingView = new com.nscube.filepicker.LoadingView(context);
        loadingView.setVisibility(GONE);
        LayoutParams loadingViewParams = new LayoutParams(dp20, dp20);
        loadingViewParams.setMargins(dp15, 0, dp15, 0);
        mRelativeLayout0.addView(loadingView, loadingViewParams);

        mView0 = new View(context);
        mView0.setBackgroundResource(R.color.light_gray);
        LayoutParams mView0Params = new LayoutParams(-1, dp(1));
        addView(mView0, mView0Params);

    }
    private  int getDimen(int dimen) {
        return context.getResources().getDimensionPixelOffset(dimen);
    }

    private int dp(int dp) {
        if (density == -1) density = context.getResources().getDisplayMetrics().density;
        return (int) density * dp;
    }

    public void setFileInfo(FileInfo fileInfo) {
        mTextView0.setText(fileInfo.getFileName());
        loadingView.setVisibility(View.GONE);
        if (fileInfo.isSelected()) {
            selectImageView.setVisibility(View.VISIBLE);
        } else {
            selectImageView.setVisibility(View.GONE);
        }
        if (fileInfo.isDirectory()) {
            mImageView0.setImageResource(R.drawable.folder_icon);
            mTextView1.setVisibility(View.GONE);
        } else {
            mImageView0.setImageResource(FileUtil.getFileIcon(fileInfo.getFileName()));
            mTextView1.setVisibility(View.VISIBLE);
            mTextView1.setText(fileInfo.getSize());
        }
    }

    public LoadingView getLoadingView() {
        return loadingView;
    }

    public ImageView getSelectImageView() {
        return selectImageView;
    }
}