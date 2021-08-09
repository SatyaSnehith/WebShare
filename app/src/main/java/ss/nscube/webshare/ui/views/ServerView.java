package ss.nscube.webshare.ui.views;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.graphics.Typeface;
import android.net.Uri;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
import com.google.zxing.qrcode.encoder.ByteMatrix;
import com.google.zxing.qrcode.encoder.Encoder;
import com.google.zxing.qrcode.encoder.QRCode;

import java.util.HashMap;
import java.util.Map;

import ss.nscube.webshare.Executor;
import ss.nscube.webshare.MainActivity;
import ss.nscube.webshare.R;
import ss.nscube.webshare.server.HTTPServer;
import ss.nscube.webshare.utils.UiUtil;
import ss.nscube.webshare.utils.ViewUtil;

public class ServerView extends LinearLayout {
    private final MainActivity activity;
    private LinearLayout progressLinearLayout, controlLinearLayout, addressLinearLayout, startLayout, pauseLayout, continueLayout;
    private RelativeLayout bRelativeLayout;
    private ImageView qrImageView;
    private TextView infoTextView, urlTextView;
//    private IconButton uSpeedTextView, dSpeedTextView;
    private Executor executor, pExecutor;

    private HTTPServer server;
    private String currentIp;

    public ServerView(MainActivity activity) {
        super(activity);
        this.activity = activity;
        init();
        setUpProgressLayout();
        setUpServerControllerView();
        showStartLayout();
        setUpListeners();

        setOrientation(LinearLayout.VERTICAL);
        setGravity(Gravity.CENTER_HORIZONTAL);
    }

    private void init() {
        infoTextView = new TextView(activity);
        progressLinearLayout = new LinearLayout(activity);
        controlLinearLayout = new LinearLayout(activity);
        addressLinearLayout = new LinearLayout(activity);
        urlTextView = new TextView(activity);
        qrImageView = new ImageView(activity);
        bRelativeLayout = new RelativeLayout(activity);
        startLayout = new LinearLayout(activity);
        pauseLayout = new LinearLayout(activity);
        continueLayout = new LinearLayout(activity);
    }

    private void setUpProgressLayout() {
//        uSpeedTextView = new IconButton(activity, R.drawable.ic_up, ViewUtil.BLUE_800, android.R.color.transparent);
//        progressLinearLayout.addView(uSpeedTextView, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 0.5f));
//
//        dSpeedTextView = new IconButton(activity, R.drawable.ic_downs, ViewUtil.BLUE_800, android.R.color.transparent);
//        dSpeedTextView.setGravity(Gravity.CENTER);
//        progressLinearLayout.addView(dSpeedTextView, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 0.5f));

        infoTextView.setText(R.string.linkInfo);
        infoTextView.setTextSize(16);
        infoTextView.setTextColor(ViewUtil.GREY_600);
        LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        int margin = ViewUtil.dp(20);
        layoutParams.setMargins(margin, margin, margin, margin);
        addView(infoTextView, layoutParams);





        LinearLayout.LayoutParams rLayoutParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, 0, 1);
        margin = ViewUtil.dp(10);
        rLayoutParams.setMargins(margin, margin, margin, margin);
//        addView(relativeLayout, rLayoutParams);

        LayoutParams progressLayoutParams = new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        addView(progressLinearLayout, progressLayoutParams);

    }

//    private void setUpExecutor() {
//        if (executor == null) {
//            Uploader uploader = server.getUploader();
//            Downloader downloader = server.getDownloader();
//            executor = new Executor(activity, new Runnable() {
//                @Override
//                public void run() {
//                    uSpeedTextView.setText(String.format("%s/s", FileUtil.getSize(uploader.getSpeed())));
//                    dSpeedTextView.setText(String.format("%s/s", FileUtil.getSize(downloader.getSpeed())));
//                }
//            }, 1000);
//            executor.start();
//        }
//    }

    private void setUpServerControllerView() {
        IconButton copyButton, openButton, startButton, pauseButton, stopButton1, stopButton2, continueButton;

        LayoutParams controlLayoutParams = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT);
        controlLinearLayout.setOrientation(LinearLayout.VERTICAL);
//        controlLinearLayout.setBackgroundResource(R.drawable.control_bg);
        controlLinearLayout.setGravity(Gravity.CENTER_HORIZONTAL);
        int pad = UiUtil.getDimen(activity, R.dimen.controller_padding);
        controlLinearLayout.setPadding(pad, ViewUtil.dp(20), pad ,pad);

        LinearLayout linearLayout1 = new LinearLayout(activity);
        linearLayout1.setOrientation(LinearLayout.VERTICAL);
//        linearLayout1.setBackgroundResource(R.drawable.ip_bg);
        linearLayout1.setOnLongClickListener(new OnLongClickListener() {
            @Override
            public boolean onLongClick(View v) {
                ClipData clip = ClipData.newPlainText("url", urlTextView.getText());
                ((ClipboardManager) activity.getSystemService(Context.CLIPBOARD_SERVICE)).setPrimaryClip(clip);
                Toast.makeText(activity, R.string.text_copied, Toast.LENGTH_SHORT).show();
                return false;
            }
        });
        int lPad = ViewUtil.dp(5);
        linearLayout1.setPadding(lPad, lPad, lPad, lPad);
        linearLayout1.setGravity(Gravity.CENTER_VERTICAL);

//        addressLinearLayout.setOrientation(LinearLayout.VERTICAL);

//        TextView sTextView = new TextView(activity);
//        sTextView.setText(R.string.url);
//        sTextView.setTextSize(14);
//        sTextView.setTextColor(activity.getResources().getColor(R.color.blue_800));

        urlTextView.setTextColor(activity.getResources().getColor(R.color.gray_800));
        urlTextView.setTextSize(18);
        urlTextView.setTypeface(Typeface.defaultFromStyle(Typeface.BOLD));
//        addressLinearLayout.addView(urlTextView, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
        linearLayout1.addView(urlTextView, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        View underLine = new View(activity);
        underLine.setBackgroundColor(ViewUtil.BLUE_800);
        linearLayout1.addView(underLine, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewUtil.dp(2)));

//        qrImageView.setBackgroundResource(R.drawable.ip_bg);
        pad = ViewUtil.dp(15);
        qrImageView.setPadding(pad, pad, pad, pad);
        qrImageView.setScaleType(ImageView.ScaleType.FIT_CENTER);
        LayoutParams layoutParams = new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, 0, 1);
        int mar = ViewUtil.dp(15);
        layoutParams.setMargins(mar, mar, mar, mar);
        addView(qrImageView, layoutParams);
//        qrImageView.setBackgroundResource(R.drawable.ip_button_ripple);
//        qrImageView.setImageResource(R.drawable.open_icon);
//        qrImageView.setOnClickListener(new OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                if (server != null && server.getState() != HTTPServer.NOT_RUNNING) {
//                    Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(urlTextView.getText().toString()));
//                    activity.startActivity(browserIntent);
//                } else {
//                    Toast.makeText(activity, R.string.start_server, Toast.LENGTH_SHORT).show();
//                }
//            }
//        });
//        int qPad = ViewUtil.dp(10);
//        qrImageView.setPadding(qPad, qPad, qPad, qPad);
//        int size = ViewUtil.dp(40);
//        linearLayout1.addView(qrImageView, new LinearLayout.LayoutParams(size, size));
        controlLinearLayout.addView(linearLayout1, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        LinearLayout linearLayout2 = new LinearLayout(activity);
        layoutParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        mar = UiUtil.getDimen(activity, R.dimen.ll2_margin);
        layoutParams.setMargins(mar, mar, mar, mar);
        linearLayout2.setOrientation(LinearLayout.HORIZONTAL);
        copyButton = new IconButton(activity, R.drawable.copy_icon, R.string.copy, getResources().getColor(R.color.gray_800), R.drawable.ip_button_ripple, false);
        linearLayout2.addView(copyButton, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 0.5f));
        copyButton.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                ClipData clip = ClipData.newPlainText("url", urlTextView.getText());
                ((ClipboardManager) activity.getSystemService(Context.CLIPBOARD_SERVICE)).setPrimaryClip(clip);
                Toast.makeText(activity, R.string.text_copied, Toast.LENGTH_SHORT).show();
            }
        });
        openButton = new IconButton(activity, R.drawable.open_icon, R.string.open, getResources().getColor(R.color.blue_800), R.drawable.ip_button_ripple, false);
        openButton.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                if (server != null && server.getState() != HTTPServer.NOT_RUNNING) {
                    Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(urlTextView.getText().toString()));
                    activity.startActivity(browserIntent);
                } else {
                    Toast.makeText(activity, R.string.start_server, Toast.LENGTH_SHORT).show();
                }
            }
        });
        linearLayout2.addView(openButton, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 0.5f));
        controlLinearLayout.addView(linearLayout2, layoutParams);

        startButton = new IconButton(activity, R.drawable.play_icon, R.string.start, getResources().getColor(R.color.white), R.drawable.start_btn_bg, true);
        startButton.setOnClickListener(this::start);
        continueButton = new IconButton(activity, R.drawable.play_icon, R.string.con, getResources().getColor(R.color.white), R.drawable.start_btn_bg, true);
        continueButton.setOnClickListener(this::con);
        pauseButton = new IconButton(activity, R.drawable.pause_icon, R.string.pause, getResources().getColor(R.color.white), R.drawable.pause_btn_bg, true);
        pauseButton.setOnClickListener(this::pause);
        stopButton1 = new IconButton(activity, R.drawable.stop_icon, R.string.stop, getResources().getColor(R.color.white), R.drawable.stop_btn_bg, true);
        stopButton1.setOnClickListener(this::stop);
        stopButton2 = new IconButton(activity, R.drawable.stop_icon, R.string.stop, getResources().getColor(R.color.white), R.drawable.stop_btn_bg, true);
        stopButton2.setOnClickListener(this::stop);

        startLayout.setOrientation(LinearLayout.HORIZONTAL);
        startLayout.setGravity(Gravity.CENTER);
        startLayout.addView(startButton, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, UiUtil.getDimen(activity, R.dimen.control_button_height)));
        startLayout.setVisibility(GONE);
        bRelativeLayout.addView(startLayout, new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        pauseLayout.setOrientation(LinearLayout.HORIZONTAL);
        pauseLayout.setGravity(Gravity.CENTER);
        LinearLayout.LayoutParams pLayoutParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, UiUtil.getDimen(activity, R.dimen.control_button_height));
        pLayoutParams.setMargins(0, 0, UiUtil.getDimen(activity, R.dimen.control_button_gap), 0);
        pauseLayout.addView(pauseButton, pLayoutParams);
        pauseLayout.addView(stopButton1, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, UiUtil.getDimen(activity, R.dimen.control_button_height)));
        pauseLayout.setVisibility(GONE);
        bRelativeLayout.addView(pauseLayout, new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        continueLayout.setOrientation(LinearLayout.HORIZONTAL);
        continueLayout.setGravity(Gravity.CENTER);
        LinearLayout.LayoutParams conLayoutParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, UiUtil.getDimen(activity, R.dimen.control_button_height));
        conLayoutParams.setMargins(0, 0, UiUtil.getDimen(activity, R.dimen.control_button_gap), 0);
        continueLayout.addView(continueButton, conLayoutParams);
        continueLayout.addView(stopButton2, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, UiUtil.getDimen(activity, R.dimen.control_button_height)));
        continueLayout.setVisibility(GONE);
        bRelativeLayout.addView(continueLayout, new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));


        LinearLayout.LayoutParams cLayoutParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        cLayoutParams.setMargins(0, ViewUtil.dp(20), 0, 0);
        controlLinearLayout.addView(bRelativeLayout, cLayoutParams);

        addView(controlLinearLayout, controlLayoutParams);
    }

    private void setUpListeners() {
        activity.setOnIpAddressChangedListener(this::onIpChanged);
        activity.addOnServiceBoundListener(this::onServiceBound);
    }


    private void onServiceBound(HTTPServer server) {
        this.server = server;
        switch (server.getState()) {
            case HTTPServer.RUNNING:
                showPauseLayout();
                break;
            case HTTPServer.NOT_RUNNING:
                showStartLayout();
                break;
            case HTTPServer.PAUSED:
                showContinueLayout();
                break;
        }
//        setUpExecutor();
//        final int speedScroll = 1200;
//        final Handler handler = new Handler();
//        final Runnable runnable = new Runnable() {
//            int count = 0;
//            boolean flag = true;
//            @Override
//            public void run() {
//                if(count < adapter.getItemCount()) {
//                    if(count == adapter.getItemCount() - 1) {
//                        flag = false;
//                    } else if(count == 0) {
//                        flag = true;
//                    }
//                    if(flag) count++;
//                    else count--;
//
//                    recyclerView.smoothScrollToPosition(count);
//                    handler.postDelayed(this,speedScroll);
//                }
//            }
//        };
//
//        handler.postDelayed(runnable,speedScroll);

//        setUpProgressExecutor();
    }

//    private void setUpProgressExecutor() {
//        if (pExecutor == null) {
//            pExecutor = new Executor(activity, new Runnable() {
//                @Override
//                public void run() {
//                    try {
//                        int len = recyclerView.getAdapter().getItemCount();
//                        for (int i = 0; i < len; ++i) {
//                            ((LoaderView)recyclerView.findViewHolderForAdapterPosition(i).itemView).updateProgress();
//                        }
//                    } catch (NullPointerException e) {
//                        e.printStackTrace();
//                    }
//                }
//            }, 1000);
//            pExecutor.start();
//        }
//    }

    private void onIpChanged(String ip) {
        currentIp = ip;
        String url = "http://" + ip + ":" + 1111;
        urlTextView.setText(url);
        qrImageView.setImageBitmap(generateQR(url));
    }

    private void start(View view) {
        if (server != null) {
            server.start(1111, currentIp);
            showPauseLayout();
        }
    }

    private void pause(View view) {
        if (server != null) {
            server.pause();
            showContinueLayout();
        }
    }

    private void con(View view) {
        if (server != null) {
            server.con();
            showPauseLayout();
        }
    }

    private void stop(View view) {
        if (server != null) {
            server.stop();
            showStartLayout();
        }
    }

    private void showStartLayout() {
        startLayout.setVisibility(VISIBLE);
        continueLayout.setVisibility(GONE);
        pauseLayout.setVisibility(GONE);
    }

    private void showPauseLayout() {
        startLayout.setVisibility(GONE);
        continueLayout.setVisibility(GONE);
        pauseLayout.setVisibility(VISIBLE);
    }

    private void showContinueLayout() {
        startLayout.setVisibility(GONE);
        continueLayout.setVisibility(VISIBLE);
        pauseLayout.setVisibility(GONE);
    }

    private Bitmap generateQRCode(String url) {
        generateQR(url);
        MultiFormatWriter multiFormatWriter = new MultiFormatWriter();
        try {
            BitMatrix bitMatrix = multiFormatWriter.encode(url, BarcodeFormat.QR_CODE,200,200);
            int width = bitMatrix.getWidth();
            int height = bitMatrix.getHeight();
            int[] pixels = new int[width * height];
            // All are 0, or black, by default
            for (int y = 0; y < height; y++) {
                int offset = y * width;
                for (int x = 0; x < width; x++) {
                    pixels[offset + x] = bitMatrix.get(x, y) ? ViewUtil.BLUE_800 : Color.WHITE;
                }
            }

            Bitmap bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
            bitmap.setPixels(pixels, 0, width, 0, 0, width, height);
            return bitmap;
        } catch (WriterException e) {
            e.printStackTrace();
        }
        return null;
    }

    private Bitmap generateQR(String url) {
        try {
            final Map<EncodeHintType, Object> encodingHints = new HashMap<>();
            encodingHints.put(EncodeHintType.CHARACTER_SET, "UTF-8");
            QRCode code = Encoder.encode(url, ErrorCorrectionLevel.L, encodingHints);
            ByteMatrix byteMatrix = code.getMatrix();
            int cWidth, cHeight, radius, diameter, gap;
            cWidth = byteMatrix.getWidth();
            cHeight = byteMatrix.getHeight();
            radius = 5;
            diameter = 2 * radius;
            gap = 2;
            Paint cPaint = new Paint();
            cPaint.setStyle(Paint.Style.FILL);
            cPaint.setAntiAlias(true);
            cPaint.setColor(ViewUtil.BLUE_800);
            int x = diameter + gap, y = diameter + gap;
            Bitmap bitmap = Bitmap.createBitmap((x+1) * cWidth, (y+1) * cHeight, Bitmap.Config.ARGB_8888);
            Canvas canvas = new Canvas();
            canvas.setBitmap(bitmap);
            byte b;
            int cx, cy;
            for (int i = 0; i < cWidth; i++) {
                for (int j = 0; j < cHeight; j++) {
                    if ((b = byteMatrix.get(i, j)) == 1) {
                        cx = (i+1) * x;
                        cy = (j+1) * y;
                        canvas.drawRoundRect(new RectF(cx, cy, cx + diameter, cy + diameter), 2, 2, cPaint);
//                        canvas.drawCircle(cx, cy, radius, cPaint);
                    }
                }
            }
            return bitmap;
        } catch (WriterException e) {
            e.printStackTrace();
        }
        return null;
    }
}
