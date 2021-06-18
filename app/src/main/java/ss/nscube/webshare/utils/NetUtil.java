package ss.nscube.webshare.utils;

import android.util.Log;

import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.util.Collections;
import java.util.List;

public class NetUtil {
    private static String getIPAddress(Acceptable acceptable) {
        String ips = null;
        try {
            List<NetworkInterface> interfaces = Collections.list(NetworkInterface.getNetworkInterfaces());
            for (NetworkInterface intf : interfaces) {
                if (acceptable.isAcceptable(intf)) {
                    List<InetAddress> addrs = Collections.list(intf.getInetAddresses());
                    for (InetAddress addr : addrs) {
                        if (addr.getClass().equals(Inet4Address.class)) {
                            ips = addr.getHostAddress();
                        }
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return ips;
    }

    public static String getLocalHostIpAddress() {
        String ip = getIPAddress(new Acceptable() {
            @Override
            public boolean isAcceptable(NetworkInterface networkInterface) {
                String name = networkInterface.getName();
                return name.startsWith("lo");
            }
        });
        return ip == null ?  "localhost" : ip;
    }

    public static String getWifiIpAddress() {
        return getIPAddress(new Acceptable() {
            @Override
            public boolean isAcceptable(NetworkInterface networkInterface) {
                String name = networkInterface.getName();
                return name.startsWith("wl") || name.startsWith("en");
            }
        });
    }


    public static String getHotspotIpAddress() {
        return getIPAddress(new Acceptable() {
            @Override
            public boolean isAcceptable(NetworkInterface networkInterface) {
                String name = networkInterface.getName();
                return name.startsWith("wl") || name.startsWith("ap");
            }
        });
    }

    interface Acceptable {
        boolean isAcceptable(NetworkInterface networkInterface);
    }
}
