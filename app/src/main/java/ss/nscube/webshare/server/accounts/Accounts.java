package ss.nscube.webshare.server.accounts;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import ss.nscube.webshare.utils.NetUtil;

public class Accounts {
    private String mainDir;
    private List<Account> accounts;
    private Object mutex = new Object();

    public Accounts(String mainDir) {
        this.mainDir = mainDir;
        accounts = new ArrayList<>();
        accounts = Collections.synchronizedList(accounts);
        accounts.add(new Account(numberOfAccounts(), "temp", mainDir, this));
    }

    public int numberOfAccounts() {
        return accounts.size();
    }

    public Account addIfNotPresent(String ip) {
        Account account;
        synchronized(mutex) {     
            if ((account = get(ip)) == null) {
                account = new Account(numberOfAccounts(), ip, mainDir, this);
                accounts.add(account);
            }
        }
        return account;
    }

    public void clear() {
        Account account = accounts.get(0);
        accounts.clear();
        accounts.add(account);
    }

    public void setServerAccount(String ip) {
        if (accounts.size() == 0) {
            addIfNotPresent(ip);
        } else {
            Account account = accounts.get(0);
            account.setIp(ip);
        }
    }

    public Account get(int id) {
        for (Account account: accounts)
            if(account.getId() == id)
                return account;
        return null;
    }

    public boolean contains(int id) {
        return get(id) != null;
    }

    public Account get(String ip) {
        for (Account account: accounts)
            if(account.getIp().equals(ip))
                return account;
        if (accounts.size() > 0 && NetUtil.getLocalHostIpAddress().equals(ip) || "localhost".equals(ip))
            return accounts.get(0);
        return null;
    }

    public boolean contains(String ip) {
        return get(ip) != null;
    }

    public Account[] getArray() {
        return accounts.toArray(new Account[0]);
    }
}