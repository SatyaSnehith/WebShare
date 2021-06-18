package ss.nscube.webshare.server.accounts;

import java.io.File;
import java.util.ArrayList;

public class Account {
    private int id;
    private String ip, name;
    private File mainFolder;
    private FileManager files;
    private Accounts accounts;

    public Account(int id, String ip, String mainDir, Accounts accounts) {
        this.id = id;
        this.ip = ip;
        this.name = "user-" + id;
        this.accounts = accounts;
        init();
        createFolder(mainDir);
    }

    private void init() {
        files = new FileManager();
    }

    private void createFolder(String mainDir) {
        mainFolder = new File(mainDir + "/" + id);
        if (mainFolder.mkdir())
            System.out.println(mainFolder.getAbsolutePath() + " created");
        else
            System.out.println(mainFolder.getAbsolutePath() + " not created and " + (mainFolder.exists() ? "exists" : "not exists"));
    }

    public void fileUploadStarted(File file) {
        files.addOrReplace(file);
    }

    public void fileUploadCanceled(File file) {
        files.remove(file);
    }

    public Accounts getAllAccounts() {
        return accounts;
    }

    public FileManager getFiles() {
        return this.files;
    }
    
    public int getId() {
        return this.id;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getIp() {
        return this.ip;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public File getMainFolder() {
        return mainFolder;
    }
}
