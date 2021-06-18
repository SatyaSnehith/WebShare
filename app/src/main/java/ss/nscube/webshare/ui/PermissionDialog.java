package ss.nscube.webshare.ui;

import android.app.Activity;
import android.app.Dialog;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import android.view.Gravity;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import ss.nscube.webshare.BuildConfig;
import ss.nscube.webshare.R;
import ss.nscube.webshare.utils.ViewUtil;

public class PermissionDialog extends Dialog {
    private final Activity activity;
    private LinearLayout linearLayout;
    private TextView mTextView0;
    private LinearLayout mLinearLayout0;
    private TextView mTextView1;
    private TextView mTextView2;

    public PermissionDialog(@NonNull Activity activity) {
        super(activity);
        this.activity = activity;
        init();
        setContentView(linearLayout);
    }
    
    private void init() {
        linearLayout = new LinearLayout(activity);
        linearLayout.setBackgroundColor(Color.WHITE);
        linearLayout.setOrientation(LinearLayout.VERTICAL);
        int pad = ViewUtil.dp(20);
        linearLayout.setPadding(pad, pad, pad, ViewUtil.dp(10));

        mTextView0 = new TextView(activity);
        mTextView0.setText(R.string.dialog_manage_files);
        mTextView0.setTextColor(ViewUtil.GREY_600);
        mTextView0.setTextSize(18);
        LinearLayout.LayoutParams mTextView0Params = new LinearLayout.LayoutParams(-1, -2);
        linearLayout.addView(mTextView0, mTextView0Params);

        mLinearLayout0 = new LinearLayout(activity);
        mLinearLayout0.setOrientation(LinearLayout.HORIZONTAL);
        LinearLayout.LayoutParams mLinearLayout0Params = new LinearLayout.LayoutParams(-1, -2);
        mLinearLayout0Params.setMargins(0, ViewUtil.dp(20), 0, 0);
        linearLayout.addView(mLinearLayout0, mLinearLayout0Params);

        int padVer = ViewUtil.dp(10);

        mTextView1 = new TextView(activity);
        mTextView1.setOnClickListener(this::onCancel);
        mTextView1.setText(R.string.cancel);
        mTextView1.setGravity(Gravity.CENTER);
        mTextView1.setTextColor(ViewUtil.BLUE_800);
        mTextView1.setBackgroundResource(R.drawable.button_ripple);
        mTextView1.setPadding(0, padVer, 0, padVer);
        LinearLayout.LayoutParams mTextView1Params = new LinearLayout.LayoutParams(0, -2, 0.5f);
        mLinearLayout0.addView(mTextView1, mTextView1Params);

        mTextView2 = new TextView(activity);
        mTextView2.setOnClickListener(this::onOkay);
        mTextView2.setText(R.string.allow);
        mTextView2.setGravity(Gravity.CENTER);
        mTextView2.setTextColor(Color.WHITE);
        mTextView2.setBackgroundResource(R.drawable.m_button_ripple);
        mTextView2.setPadding(0, padVer, 0, padVer);
        LinearLayout.LayoutParams mTextView2Params = new LinearLayout.LayoutParams(0, -2, 0.5f);
        mLinearLayout0.addView(mTextView2, mTextView2Params);
    }

    private void onCancel(View view) {
        dismiss();
        activity.finish();
    }

    @RequiresApi(api = Build.VERSION_CODES.R)
    private void onOkay(View view) {
//        Intent intent = new Intent(Settings.ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION, Uri.parse("package:" + BuildConfig.APPLICATION_ID));
//        activity.startActivity(intent);
        dismiss();
    }

}
