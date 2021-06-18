package ss.nscube.webshare.server.loaders;

public class SpeedCalculator {
    private long currentSpeed, totalBytes, totalMillis;

    public SpeedCalculator() {
        currentSpeed = 0;
        totalBytes = 0;
        totalBytes = 0;
    }

    public void calculate(long bytes, long millis) {
        totalBytes += bytes;
        totalMillis += millis;
        if (totalMillis >= 1000) {
            currentSpeed = totalBytes;
            totalBytes = 0;
            totalMillis = 0;
        }
    }

    public void cancel() {
        currentSpeed = 0;
    }

    public long getSpeed() {
        return currentSpeed;
    }

}
