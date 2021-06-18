package ss.nscube.webshare.ui.drawables;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PixelFormat;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

public class ProgressDrawable extends Drawable implements Drawable.Callback, Animatable {
    private final Paint bPaint, pPaint;
    private final Path bPath, pPath;
    private final RectF rectF, pRectF;
    private Rect bounds;
    int radius;
    int from, to, current;
    private boolean isRunning;
    private static final long FRAME_DURATION = 1000 / 60;

    public ProgressDrawable() {
        to = -1;
        bPaint = new Paint();
        bPaint.setStyle(Paint.Style.FILL);
        bPaint.setAntiAlias(true);
        bPaint.setColor(0xFFE0E0E0);

        pPaint = new Paint();
        pPaint.setStyle(Paint.Style.FILL);
        pPaint.setAntiAlias(true);
        pPaint.setColor(0xFF1565C0);

        pPath = new Path();
        pPath.setFillType(Path.FillType.EVEN_ODD);

        bPath = new Path();
        bPath.setFillType(Path.FillType.EVEN_ODD);

        rectF = new RectF();
        pRectF = new RectF();
        setCallback(this);
    }


    @Override
    protected void onBoundsChange(Rect bounds) {
        pPath.reset();
        bPath.reset();
        this.bounds = bounds;
        radius = bounds.height() / 2;
        rectF.set(bounds.left, bounds.top, bounds.right, bounds.bottom);
        bPath.addRoundRect(rectF, radius, radius, Path.Direction.CW);
    }

    @Override
    public void draw(@NonNull Canvas canvas) {
        pPath.reset();
        pRectF.set(bounds.left, bounds.top, current, bounds.bottom);
        pPath.addRoundRect(pRectF, radius, radius, Path.Direction.CW);

        canvas.drawPath(bPath, bPaint);
        canvas.drawPath(pPath, pPaint);
    }

    @Override
    public void setAlpha(int alpha) {
        pPaint.setAlpha(alpha);
    }

    @Override
    public void setColorFilter(@Nullable ColorFilter colorFilter) {
        pPaint.setColorFilter(colorFilter);
    }

    @Override
    public int getOpacity() {
        return PixelFormat.TRANSLUCENT;
    }

    @Override
    public void invalidateDrawable(@NonNull Drawable who) {
        final Callback callback = getCallback();
        if (callback != null) {
            callback.invalidateDrawable(this);
        }
    }

    @Override
    public void scheduleDrawable(@NonNull Drawable who, @NonNull Runnable what, long when) {
        invalidateDrawable(who);
    }

    @Override
    public void unscheduleDrawable(@NonNull Drawable who, @NonNull Runnable what) {

    }

    private final Runnable updater = new Runnable() {
        @Override
        public void run() {
            current++;
            if (current >= to) {
                stop();
            }
            invalidateSelf();
            if (isRunning)
                scheduleSelf(updater, SystemClock.uptimeMillis() + FRAME_DURATION);
        }
    };

    public void setProgress(int progress) {
        if (to == -1) {
            to = (int) pRectF.left;
        }
        from = to;
        to = bounds.right - (int)(((100 - progress) * bounds.width()) / 100);
        current = from;
        start();
    }

    @Override
    public void start() {
        if (!isRunning()) {
            isRunning = true;
            scheduleSelf(updater, SystemClock.uptimeMillis() + FRAME_DURATION);
            invalidateSelf();
        }
    }

    @Override
    public void stop() {
        if (isRunning()) {
            unscheduleSelf(updater);
            isRunning = false;
        }
    }

    @Override
    public boolean isRunning() {
        return isRunning;
    }
}
