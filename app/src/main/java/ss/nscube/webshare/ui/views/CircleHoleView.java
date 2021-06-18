package ss.nscube.webshare.ui.views;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.RectF;
import android.util.Log;
import android.view.View;

import ss.nscube.webshare.utils.ViewUtil;

public class CircleHoleView extends View {
    private Bitmap bitmap;
    private Paint paint, transparentPaint;
    private Canvas temp;
    private RectF rect;
    private int rx, ry;

    public CircleHoleView(Context context) {
        super(context);
        rect = new RectF(0, 0, 0, 0);
        paint = new Paint();
        paint.setColor(0xCC1565C0);
        transparentPaint = new Paint();
        transparentPaint.setColor(Color.TRANSPARENT);
        transparentPaint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.CLEAR));
    }

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        super.onSizeChanged(w, h, oldw, oldh);
        bitmap = Bitmap.createBitmap(getWidth(), getHeight(), Bitmap.Config.ARGB_8888);
        temp = new Canvas(bitmap);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        if (bitmap == null) {
            bitmap = Bitmap.createBitmap(getWidth(), getHeight(), Bitmap.Config.ARGB_8888);
            temp = new Canvas(bitmap);
            bitmap.eraseColor(Color.TRANSPARENT);
        }
        temp.drawColor(ViewUtil.BLUE_800);

        temp.drawRect(0, 0, getWidth(), getHeight(), paint);
        temp.drawRoundRect(rect, rx, ry, transparentPaint);
        canvas.drawBitmap(bitmap, 0, 0, paint);

    }

    public void setRound(RectF rect, int radius) {
        this.rect = rect;
        rx = ry = radius;
        invalidate();
    }
}
