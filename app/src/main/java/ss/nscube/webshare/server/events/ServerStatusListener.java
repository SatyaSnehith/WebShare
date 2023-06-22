package ss.nscube.webshare.server.events;

public interface ServerStatusListener {
    void onStarted();
    void onStopped();
}
