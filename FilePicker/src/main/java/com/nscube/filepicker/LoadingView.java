package com.nscube.filepicker;

import android.animation.ObjectAnimator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.graphics.SweepGradient;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.LinearInterpolator;
import android.view.animation.RotateAnimation;

import androidx.annotation.Nullable;

public class LoadingView extends View {
    private Paint paint;
    private RectF mRect;
    private int strokeWidth;
    private Animation anim;

    public LoadingView(Context context) {
        super(context);
        init();
    }

    public LoadingView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    private void init() {
        strokeWidth = getContext().getResources().getDimensionPixelOffset(R.dimen.loading_stroke_width);
        paint = new Paint();
        paint.setStyle(Paint.Style.STROKE);
        paint.setStrokeWidth(strokeWidth);
        paint.setAntiAlias(true);
    }

    @Override
    public void draw(Canvas canvas) {
        super.draw(canvas);
        if (mRect == null) {
            int centerX = getMeasuredWidth() / 2;
            int centerY = getMeasuredHeight() / 2;
            int radius = Math.min(centerX, centerY);

            int start = strokeWidth / 2;

            int endBottom = 2 * radius - start;

            paint.setShader(new SweepGradient(centerX, centerY, Color.WHITE, getResources().getColor(R.color.blue800)));

            mRect = new RectF(start, start, endBottom, endBottom);
        }
        canvas.drawArc(mRect, -90, 360, false, paint);
    }

    public void starAnimation() {
        ObjectAnimator objectAnimator = ObjectAnimator.ofFloat(this, "rotation", 0f, 360f);
        objectAnimator.setDuration(1000);
        objectAnimator.setInterpolator(new LinearInterpolator());
        objectAnimator.setRepeatCount(ValueAnimator.INFINITE);
        objectAnimator.start();
    }
}
