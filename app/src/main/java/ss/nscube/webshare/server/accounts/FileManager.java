package ss.nscube.webshare.server.accounts;

import java.io.File;
import java.util.ArrayList;

public class FileManager {
    private ArrayList<File> files;
    private OnFileRemovedListener onFileRemovedListener;

    public FileManager() {
        files = new ArrayList<>();
    }

    public File get(String name) {
        for (File file: files)
        if (file.getName().equals(name))
            return file;
        return null;
    }

    public int getIndexOf(String name) {
        for (int i = 0; i < files.size(); ++i)
        if (files.get(i).getName().equals(name))
            return i;
        return -1;
    }

    public void addOrReplace(File file) {
        if (get(file.getName()) == null) {
            files.add(file);
        }
    }

    public void remove(File file) {
        files.remove(file);
    }

    public long getUsedSpace() {
        long usedSpace = 0;
        for (File file: files) {
            usedSpace += file.length();
        }
        return usedSpace;
    }

    public boolean contains(String name) {
        for (File file: files)
            if (file.getName().equals(name))
                return true;
        return false;
    }

    public void clear() {
        files.clear();
    }

    public void setOnFileRemovedListener(OnFileRemovedListener onFileRemoveListener) {
        this.onFileRemovedListener = onFileRemoveListener;
    }

    public File[] getArray() {
        ArrayList<File> tempFiles = new ArrayList<>();
        ArrayList<File> deleteFiles = new ArrayList<>();
        for (File file: files) {
            if (file.exists()) {
                tempFiles.add(file);
            } else {
                deleteFiles.add(file);
            }
        }
        for (File file: deleteFiles) {
            files.remove(file);
            onFileRemovedListener.onFileRemoved(file);
        }
        this.files = tempFiles;
        return tempFiles.toArray(new File[0]);
    }
    public interface OnFileRemovedListener {
        void onFileRemoved(File file);
    }
}
