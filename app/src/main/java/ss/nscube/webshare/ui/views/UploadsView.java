package ss.nscube.webshare.ui.views;

import android.content.Context;
import android.graphics.PointF;
import android.util.DisplayMetrics;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;

import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.LinearSmoothScroller;
import androidx.recyclerview.widget.RecyclerView;

import ss.nscube.webshare.MainActivity;
import ss.nscube.webshare.R;
import ss.nscube.webshare.server.HTTPServer;
import ss.nscube.webshare.ui.adapters.ProgressAdapter;
import ss.nscube.webshare.ui.adapters.ProgressAdapterHelper;
import ss.nscube.webshare.utils.ViewUtil;

public class UploadsView extends RelativeLayout {
    private MainActivity activity;
    private RecyclerView recyclerView;
    private ImageView nTextView;
    private ProgressAdapter adapter;

    public UploadsView(MainActivity activity) {
        super(activity);
        this.activity = activity;

        init();

        setUpListeners();

        setBackgroundResource(R.drawable.input_bg);
        recyclerView.setLayoutManager(new WrapContentLinearLayoutManager(activity));
        LinearLayout.LayoutParams rvLayoutParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
        addView(recyclerView, rvLayoutParams);

        nTextView.setImageResource(R.drawable.file_transfer);
//        nTextView.setText(R.string.no_files_transfers);
//        nTextView.setTextColor(ViewUtil.BLUE_800);
//        nTextView.setTypeface(Typeface.defaultFromStyle(Typeface.BOLD));
        nTextView.setVisibility(GONE);
        RelativeLayout.LayoutParams tLayoutParams = new RelativeLayout.LayoutParams(ViewUtil.dp(200), ViewGroup.LayoutParams.WRAP_CONTENT);
        tLayoutParams.addRule(RelativeLayout.CENTER_HORIZONTAL);
        tLayoutParams.addRule(RelativeLayout.CENTER_VERTICAL);
        addView(nTextView, tLayoutParams);
    }

    private void init() {
        recyclerView = new RecyclerView(activity);
        nTextView = new ImageView(activity);

    }

    private void setUpListeners() {
        activity.addOnServiceBoundListener(this::onServiceBound);
    }

    private void onServiceBound(HTTPServer server) {
//        setUpExecutor();
        ProgressAdapterHelper progressAdapterHelper = new ProgressAdapterHelper(activity, server);
        progressAdapterHelper.setOnNoFileTransfersListener(new ProgressAdapterHelper.OnNoFileTransfersListener() {
            @Override
            public void onNoFileTransfers(boolean isTrue) {
                if(isTrue && nTextView.getVisibility() == GONE) {
                    nTextView.setVisibility(VISIBLE);
                } else {
                    nTextView.setVisibility(GONE);
                }
            }
        });
        adapter = progressAdapterHelper.getProgressAdapter();
        recyclerView.setAdapter(adapter);
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


    class WrapContentLinearLayoutManager extends LinearLayoutManager {
        public WrapContentLinearLayoutManager(Context context) {
            super(context);
            setReverseLayout(true);
            setStackFromEnd(true);
        }


        @Override
        public void smoothScrollToPosition(RecyclerView recyclerView, RecyclerView.State state, int position) {
            final LinearSmoothScroller linearSmoothScroller =
                    new LinearSmoothScroller(recyclerView.getContext()) {
                        private static final float MILLISECONDS_PER_INCH = 200f;

                        @Override
                        public PointF computeScrollVectorForPosition(int targetPosition) {
                            return WrapContentLinearLayoutManager.this.computeScrollVectorForPosition(targetPosition);
                        }

                        @Override
                        protected float calculateSpeedPerPixel
                                (DisplayMetrics displayMetrics) {
                            return MILLISECONDS_PER_INCH / displayMetrics.densityDpi;
                        }
                    };
            linearSmoothScroller.setTargetPosition(position);
            startSmoothScroll(linearSmoothScroller);
        }

        @Override
        public void onLayoutChildren(RecyclerView.Recycler recycler, RecyclerView.State state) {
            try {
                super.onLayoutChildren(recycler, state);
            } catch (IndexOutOfBoundsException e) {
            }
        }
    }

}
