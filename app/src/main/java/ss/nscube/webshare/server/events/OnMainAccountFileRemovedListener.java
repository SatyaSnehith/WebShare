package ss.nscube.webshare.server.events;

import ss.nscube.webshare.server.file.WebFile;

public interface OnMainAccountFileRemovedListener {
    void onFileRemoved(WebFile file);
}
