package com.nscube.filepicker.data;

public class FileInfo {
    private String fileName, path, size;
    private boolean isDirectory, isSelected;
    private int index, fileCount;

    public FileInfo(String fileName, String path) {
        this.fileName = fileName;
        this.path = path;
        this.isDirectory = true;
        init();
    }

    public FileInfo(String fileName, String path, String size) {
        this.fileName = fileName;
        this.path = path;
        this.size = size;
        this.isDirectory = false;
        fileCount = -1;
        init();
    }

    private void init() {
        index = -1;
        isSelected = false;
    }

    public void setSelected(boolean selected) {
        isSelected = selected;
    }

    public String getFileName() {
        return fileName;
    }

    public String getPath() {
        return path;
    }

    public String getSize() {
        return size;
    }

    public boolean isDirectory() {
        return isDirectory;
    }

    public boolean isSelected() {
        return isSelected;
    }

    public int getIndex() {
        return index;
    }

    public int getfileCount() {
        return fileCount;
    }
}
