package ss.nscube.webshare.ui.views;

import android.content.Context;
import android.graphics.Typeface;
import android.view.Gravity;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import ss.nscube.webshare.R;
import ss.nscube.webshare.utils.UiUtil;

public class IconButton extends LinearLayout {
    private Context context;
    private int iconId, textId, textColor, backgroundId;
    private boolean isBold;
    private TextView textView;

    public IconButton(Context context, int iconId, int textId, int textColor, int backgroundId, boolean isBold) {
        super(context);
        this.context = context;
        this.iconId = iconId;
        this.textId = textId;
        this.textColor = textColor;
        this.backgroundId = backgroundId;
        this.isBold = isBold;
        init();
    }



    private void init() {
        setGravity(Gravity.CENTER);
        setOrientation(HORIZONTAL);
        int padHor = UiUtil.getDimen(context, R.dimen.ib_padding_horizontal);
        int padVer = UiUtil.getDimen(context, R.dimen.ib_padding_vertical);
        setPadding(padHor, padVer, padHor, padVer);
        setBackgroundResource(backgroundId);
        setClickable(true);
        setFocusable(true);

        ImageView imageView = new ImageView(context);
        imageView.setImageResource(iconId);
        int size = UiUtil.getDimen(context, R.dimen.ib_image_size);
        LayoutParams iLayoutParams = new LayoutParams(size, size);
        iLayoutParams.setMargins(0, 0, UiUtil.getDimen(context, R.dimen.ib_gap), 0);
        addView(imageView, iLayoutParams);

        textView = new TextView(context);
        if (textId != -1)
            textView.setText(textId);
        textView.setTextColor(textColor);
        textView.setTextSize(16);
        if (isBold)
            textView.setTypeface(Typeface.defaultFromStyle(Typeface.BOLD));
        addView(textView, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT));
    }

    public void setText(String text) {
        textView.setText(text);
    }
}
