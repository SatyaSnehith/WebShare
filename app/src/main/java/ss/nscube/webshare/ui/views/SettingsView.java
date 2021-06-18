package ss.nscube.webshare.ui.views;

import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.Spinner;
import android.widget.TextView;

import ss.nscube.webshare.MainActivity;
import ss.nscube.webshare.R;
import ss.nscube.webshare.utils.UiUtil;
import ss.nscube.webshare.utils.ViewUtil;

import static android.widget.RelativeLayout.*;

public class SettingsView extends LinearLayout {
    private LinearLayout inputLinearLayout, portLinearLayout;
    private final MainActivity activity;


    public SettingsView(MainActivity activity) {
        super(activity);
        this.activity = activity;
        init();
        setUpInputView();
    }

    private void init() {
        inputLinearLayout = new LinearLayout(activity);
        portLinearLayout = new LinearLayout(activity);
    }

    private void setUpInputView() {
        inputLinearLayout.setBackgroundResource(R.drawable.input_bg);
        inputLinearLayout.setOrientation(LinearLayout.VERTICAL);
        int pad = UiUtil.getDimen(activity, R.dimen.server_input_padding);
        inputLinearLayout.setPadding(pad, pad, pad, pad);

        TextView uTextView = new TextView(activity);
        uTextView.setText(R.string.port);
        uTextView.setTextSize(14);
        uTextView.setTextColor(activity.getResources().getColor(R.color.blue_800));
        inputLinearLayout.addView(uTextView);
        inputLinearLayout.addView(portLinearLayout, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

//        View border = new View(activity);
//        border.setBackgroundResource(R.color.gray_200);
//        LinearLayout.LayoutParams bLayoutParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, UiUtil.getDimen(activity, R.dimen.border_height));
//        int bMar = UiUtil.getDimen(activity, R.dimen.border_margin);
//        bLayoutParams.setMargins(bMar, bMar, bMar, bMar);
//        inputLinearLayout.addView(border, bLayoutParams);
//
//        TextView rTextView = new TextView(activity);
//        rTextView.setText(R.string.run_for);
//        rTextView.setTextSize(14);
//        rTextView.setTextColor(activity.getResources().getColor(R.color.blue_800));
//        inputLinearLayout.addView(rTextView);
//        inputLinearLayout.addView(rSpinner, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        RelativeLayout.LayoutParams inputLayoutParams = new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
        int margin = ViewUtil.dp(10);
        inputLayoutParams.setMargins(margin, margin, margin, 0);
        inputLayoutParams.addRule(ALIGN_PARENT_TOP);
        addView(inputLinearLayout, inputLayoutParams);
    }

    private void setUpPortLinearLayout() {

    }
}
