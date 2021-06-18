package ss.nscube.webshare.utils;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.util.Log;
import android.view.View;
import android.widget.LinearLayout;

public class ViewUtil {
    public static final int WHITE = 0xFFFFFFFF;
    public static int GREY_300 = 0xFFE0E0E0;
    public static int GREY_600 = 0xFF757575;
    public static int BLUE_800 = 0xFF1565C0;
    public static int BLUE_900 = 0xFF00296A;
    public static int BLUE_300 = 0xFF64b5f6;
    private static float density = 1;

    public static void init(Context context) {
        density = context.getResources().getDisplayMetrics().density;
    }

    public static int dp(int dp) {
        return (int) (density * dp);
    }

    public static void fadeOutTo(View view, View view1) {
        if (view.getAlpha() == 1f) {
            view.animate()
                    .alpha(0f)
                    .setDuration(150)
                    .setListener(new AnimatorListenerAdapter() {
                        public void onAnimationEnd(Animator animation) {
                            view.setVisibility(View.GONE);
                            view.setAlpha(1);
                        }
                    });
            view1.setVisibility(View.VISIBLE);
        }
    }

    public static void fadeIn(View view) {
        view.setAlpha(0f);
        ObjectAnimator objectAnimator = ObjectAnimator.ofFloat(view, "alpha", 0f, 1f);
        objectAnimator.setDuration(100);
        objectAnimator.start();
        objectAnimator.addListener(new AnimatorListenerAdapter() {
            @Override
            public void onAnimationEnd(Animator animation) {
                view.setVisibility(View.VISIBLE);
                view.setAlpha(1f);
            }
        });
    }
}


//private  int getDimen(int dimen) {
//    return context.getResources().getDimensionPixelOffset(dimen);
//}

//private int toPixels(int dp) {
//    if (density == -1) density = context.getResources().getDisplayMetrics().density;
//    return (int) density * dp;
//}
