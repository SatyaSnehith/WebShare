package ss.nscube.webshare;

import ss.nscube.webshare.server.HTTPServer;

public interface OnServiceBoundListener {
    void onServiceBound(HTTPServer server);
}
