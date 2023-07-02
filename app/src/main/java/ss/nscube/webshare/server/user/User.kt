package ss.nscube.webshare.server.user

import android.util.Base64

class User(val id: Long, var name: String, var ip: String, val onUpdate: () -> Unit = {}) {
    var base64Id: String = String(Base64.encode(id.toString().toByteArray(), Base64.NO_WRAP))

    var pin: Int? = null
        set(value) {
            field = value
            onUpdate()
        }

    var authAttemptCount = 0
        set(value) {
            field = value
            onUpdate()
        }

    var isBlocked = false
        set(value) {
            field = value
            onUpdate()
        }

    var hasAccess = false
        set(value) {
            field = value
            onUpdate()
        }

    var os: String? = null
        set(value) {
            field = value
            onUpdate()
        }

    fun updateName(newName: String) {
        name = newName
        onUpdate()
    }

    //    public boolean removeFile(ss.nscube.webshare.File file, OnDeletedListener onDeletedListener) {
    //        boolean deleted = !files.contains(file.getName());
    //        File f = file.getF();
    //        if (f != null && f.delete() && !deleted) {
    //            files.remove(file);
    //            deleted = true;
    //        } else {
    //            deleted = !f.exists();
    //        }
    //        if (onDeletedListener != null) onDeletedListener.onFinish(deleted);
    //        return deleted;
    //    }
    //    public void fileUploadCanceled(ss.nscube.webshare.File file) {
    //        files.remove(file);
    //    }
}
