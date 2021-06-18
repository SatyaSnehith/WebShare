package ss.nscube.webshare.server;

import java.util.ArrayList;

public class ThreadCounter {
    private static ArrayList<Thread> threadList;
    private static Object sync;

    static {
        threadList = new ArrayList<>();
        sync = new Object();
    }

    public static void add(Thread thread) {
        synchronized (sync) {
            threadList.add(thread);
            System.out.println("ADDED: Thread count is " + threadList.size());    
        }
    }

    public static void remove(Thread thread) {
        synchronized (sync) {
            threadList.remove(thread);
            System.out.println("REMOVED: Thread count is " + threadList.size());    
        }
    }
}
