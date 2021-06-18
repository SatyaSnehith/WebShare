package ss.nscube.webshare.server.loaders;

public class FileData {
    private boolean isUploading;
    private String fileName, userName, filePath;
    private long transferredBytes, totalBytes;

    public FileData(String fileName, String filePath, String userName, long totalBytes, boolean isUploading) {
        this.fileName = fileName;
        this.filePath = filePath;
        this.userName = userName;
        this.totalBytes = totalBytes;
        this.isUploading = isUploading;
    }

    public void setProgress(long transferredBytes) {
        this.transferredBytes = transferredBytes;
    }

    public long getTransferredBytes() {
        return transferredBytes;
    }

    public long getTotalBytes() {
        return  totalBytes;
    }

    public String getFileName() {
        return fileName;
    }

    public String getUserName() {
        return userName;
    }

    public String getFilePath() {
        return filePath;
    }

    public boolean isUploading() {
        return isUploading;
    }
}
