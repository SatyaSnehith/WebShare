package ss.nscube.webshare;

import android.app.Activity;

public class Executor extends Thread {
    private Activity activity;
    private Runnable runnable;
    private long millis;
    private boolean isRunning;

    public Executor(Activity activity, Runnable runnable, long millis) {
        this.activity = activity;
        this.runnable = runnable;
        this.millis = millis;
        isRunning = true;
    }

    public void run() {
        while (isRunning) {
            try {
                Thread.sleep(millis);
            } catch (InterruptedException ignored) {}
            activity.runOnUiThread(runnable);
        }
    }

    public void stopExecuting() {
        isRunning = false;
    }
}
