package ss.nscube.webshare.server.utils;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;

import ss.nscube.webshare.server.Request;
import ss.nscube.webshare.server.accounts.Account;
import ss.nscube.webshare.server.accounts.Accounts;
import ss.nscube.webshare.server.utils.FileUtil;

public class JSONParser {
    public static final String ID = "id";
    public static final String IP = "ip";
    public static final String FILES = "files";
    public static final String NAME = "name";
    public static final String SIZE = "size";
    public static final String TYPE = "type";

    public static JSONArray getFilesJSONArray(Account account) throws Exception {
        JSONArray array = new JSONArray();
        File[] orderedFiles = account.getFiles().getArray();
        if (orderedFiles != null) {
            for (File f: orderedFiles) {
                JSONObject object = new JSONObject();
                object.put(SIZE, FileUtil.getSize(f.length()));
                object.put(TYPE, FileUtil.getType(f));
                object.put(NAME, Request.getEncodedPath(f.getName()));
                array.put(object);
            }
        }
        return array;
    }

    public static JSONObject getAccountDetails(Account account) throws Exception {
        JSONObject object = new JSONObject();
        object.put(ID, account.getId());
        object.put(IP, account.getIp());
        object.put(NAME, account.getName());
        object.put(FILES, getFilesJSONArray(account));
        return object;
    }

    public static String getAllAccountsDetails(Accounts accounts) throws Exception {
        JSONArray array = new JSONArray();
        Account[] accs = accounts.getArray();
        for (Account account: accs) {
            array.put(getAccountDetails(account));
        }
        return array.toString();
    }
    

}