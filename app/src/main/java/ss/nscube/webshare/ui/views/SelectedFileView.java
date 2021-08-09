package ss.nscube.webshare.ui.views;

import android.content.Context;
import android.text.TextUtils;
import android.view.Gravity;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.nscube.filepicker.data.FileInfo;
import com.nscube.filepicker.utils.FileUtil;

import ss.nscube.webshare.R;
import ss.nscube.webshare.utils.ViewUtil;

public class SelectedFileView extends LinearLayout {
    private LinearLayout mLinearLayout0;
    private ImageView mImageView0;
    private LinearLayout mLinearLayout1;
    private TextView mTextView0;
    private TextView mTextView1;
    private ImageView mImageView1;
    private View mView0;

    public SelectedFileView(Context context) {
        super(context);

        setOrientation(VERTICAL);

        mLinearLayout0 = new LinearLayout(context);
        mLinearLayout0.setGravity(Gravity.CENTER_VERTICAL);
        mLinearLayout0.setOrientation(HORIZONTAL);
        LayoutParams mLinearLayout0Params = new LayoutParams(-1, ViewUtil.dp(70));
        addView(mLinearLayout0, mLinearLayout0Params);

        mImageView0 = new ImageView(context);
        int size = ViewUtil.dp(30);
        int pad = ViewUtil.dp(5);
        mImageView0.setPadding(pad, pad, pad, pad);
        LayoutParams mImageView0Params = new LayoutParams(size, size);
        int hMar = ViewUtil.dp(20);
        mImageView0Params.setMargins(hMar, 0, hMar, 0);
        mLinearLayout0.addView(mImageView0, mImageView0Params);

        mLinearLayout1 = new LinearLayout(context);
        mLinearLayout1.setOrientation(VERTICAL);
        LayoutParams mLinearLayout1Params = new LayoutParams(0, -2, 1);
        mLinearLayout0.addView(mLinearLayout1, mLinearLayout1Params);

        mTextView0 = new TextView(context);
        mTextView0.setTextColor(ViewUtil.GREY_600);
        mTextView0.setEllipsize(TextUtils.TruncateAt.MARQUEE);
        mTextView0.setMarqueeRepeatLimit(-1);
        mTextView0.setTextSize(16);
        mTextView0.setSingleLine(true);
        mTextView0.setSelected(true);
        LayoutParams mTextView0Params = new LayoutParams(-2, -2);
        mLinearLayout1.addView(mTextView0, mTextView0Params);

        mTextView1 = new TextView(context);
        mTextView1.setTextColor(ViewUtil.GREY_600);
        mTextView1.setTextSize(12);
        LayoutParams mTextView1Params = new LayoutParams(-2, -2);
        mLinearLayout1.addView(mTextView1, mTextView1Params);

        mImageView1 = new ImageView(context);
        int iPad = ViewUtil.dp(20);
        mImageView1.setPadding(iPad, iPad, iPad, iPad);
        mImageView1.setImageResource(R.drawable.close_icon);
        mImageView1.setBackgroundResource(R.drawable.button_ripple);
        LayoutParams mImageView1Params = new LayoutParams(ViewUtil.dp(55), -1);
        mLinearLayout0.addView(mImageView1, mImageView1Params);

        mView0 = new View(context);
        mView0.setBackgroundColor(ViewUtil.GREY_300);
        LayoutParams mView0Params = new LayoutParams(-1, ViewUtil.dp(1));
        addView(mView0, mView0Params);
    }

    public void setFileInfo(FileInfo fileInfo) {
        mTextView0.setText(fileInfo.getFileName());
        mImageView0.setImageResource(FileUtil.getFileIcon(fileInfo.getFileName()));
        mTextView1.setText(fileInfo.getSize());
    }

    public void setDeleteClickListener(OnClickListener onClickListener) {
        mImageView1.setOnClickListener(onClickListener);
    }
}