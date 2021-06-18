package com.nscube.filepicker;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.text.TextUtils;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
import com.bumptech.glide.request.RequestOptions;
import com.nscube.filepicker.data.FileInfo;
import com.nscube.filepicker.utils.FileUtil;
import com.nscube.filepicker.utils.ViewUtil;

import java.io.File;

import static android.widget.RelativeLayout.ALIGN_PARENT_END;
import static android.widget.RelativeLayout.ALIGN_PARENT_TOP;

public class FileGridItemView extends LinearLayout {
    private Context context;
    private ImageView mImageView0;
    private TextView mTextView0;
    private RelativeLayout relativeLayout;
    private ImageView selectImageView;
    private LoadingView loadingView;

    public FileGridItemView(Context context) {
        super(context);
        this.context = context;

        setBackgroundResource(R.drawable.ripple_dir_item);
        LayoutParams layoutParams = new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
//        int mPad = ViewUtil.dp(5);
//        setPadding(mPad, mPad, mPad, mPad);
        int pMar = ViewUtil.dp(3);
        layoutParams.setMargins(pMar, pMar, pMar, pMar);
        setLayoutParams(layoutParams);
        setOrientation(VERTICAL);

        relativeLayout = new RelativeLayout(context);
        LayoutParams rLayoutParams = new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        addView(relativeLayout, rLayoutParams);

        mImageView0 = new ImageView(context);
//        mImageView0.setId(0);
//        int pad = ViewUtil.dp(30);
//        mImageView0.setPadding(pad, pad, pad, pad);
        int dp80 = ViewUtil.dp(80);
        LayoutParams mImageView0Params = new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, dp80);
        relativeLayout.addView(mImageView0, mImageView0Params);

        mTextView0 = new TextView(context);
        mTextView0.setGravity(Gravity.CENTER);
        mTextView0.setTextColor(context.getResources().getColor(R.color.gray600));
        mTextView0.setTextSize(16);
        mTextView0.setEllipsize(TextUtils.TruncateAt.MARQUEE);
        mTextView0.setMarqueeRepeatLimit(ViewGroup.LayoutParams.MATCH_PARENT);
        mTextView0.setSingleLine(true);
        mTextView0.setSelected(true);
        LayoutParams mTextView0Params = new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        mTextView0Params.setMargins(0, 0, 0, ViewUtil.dp(3));
        addView(mTextView0, mTextView0Params);

        int dp20 = ViewUtil.dp(20);
        int dp5 = ViewUtil.dp(5);
        selectImageView = new ImageView(context);
        selectImageView.setImageResource(R.drawable.tick_icon);
        selectImageView.setBackgroundResource(R.drawable.count_bg);
        selectImageView.setVisibility(GONE);
        selectImageView.setPadding(ViewUtil.dp(5), ViewUtil.dp(5), ViewUtil.dp(5), ViewUtil.dp(5));
        RelativeLayout.LayoutParams selectImageViewParams = new RelativeLayout.LayoutParams(dp20, dp20);
        selectImageViewParams.addRule(ALIGN_PARENT_TOP);
        selectImageViewParams.addRule(ALIGN_PARENT_END);
        selectImageViewParams.setMargins(0, dp5, dp5, 0);
        relativeLayout.addView(selectImageView, selectImageViewParams);

        loadingView = new LoadingView(context);
        loadingView.setVisibility(GONE);
        RelativeLayout.LayoutParams loadingViewParams = new RelativeLayout.LayoutParams(dp20, dp20);
        loadingViewParams.addRule(ALIGN_PARENT_TOP);
        loadingViewParams.addRule(ALIGN_PARENT_END);
        loadingViewParams.setMargins(0, dp5, dp5, 0);
        relativeLayout.addView(loadingView, loadingViewParams);

    }

    public void setFileInfo(FileInfo fileInfo) {
        mTextView0.setText(fileInfo.getFileName());
        loadingView.setVisibility(View.GONE);
        if (fileInfo.isSelected()) {
            selectImageView.setVisibility(View.VISIBLE);
        } else {
            selectImageView.setVisibility(View.GONE);
        }
        if (FileUtil.isImage(fileInfo.getFileName())) {
            int pad = ViewUtil.dp(2);
            mImageView0.setPadding(pad, pad, pad, pad);
            Glide.with(context)
                    .load(Uri.fromFile(new File(fileInfo.getPath())))
                    .centerCrop()
                    .into(mImageView0);

        } else if (fileInfo.isDirectory()) {
            int pad = ViewUtil.dp(30);
            mImageView0.setPadding(pad, pad, pad, pad);
            mImageView0.setImageResource(R.drawable.folder_icon);
//            mTextView1.setVisibility(View.GONE);
        } else {
            int pad = ViewUtil.dp(30);
            mImageView0.setPadding(pad, pad, pad, pad);
            mImageView0.setImageResource(FileUtil.getFileIcon(fileInfo.getFileName()));
//            mTextView1.setVisibility(View.VISIBLE);
//            mTextView1.setText(fileInfo.getSize());
        }

    }

    public LoadingView getLoadingView() {
        return loadingView;
    }

    public ImageView getSelectImageView() {
        return selectImageView;
    }
}