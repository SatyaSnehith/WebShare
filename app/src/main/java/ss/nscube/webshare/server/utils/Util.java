package ss.nscube.webshare.server.utils;

import java.io.InputStream;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.io.IOException;
import java.util.Collections;
import java.util.List;

import ss.nscube.webshare.server.Headers;

public class Util {
    /** 
     * reads bytes until '\n' and converts it into a <code>String</code> class.
     * @param inputStream
     * @return String
     * @throws IOException
     */
    public static String readLine(InputStream inputStream) throws IOException {
        final int LF = '\n';
        int count = 0, len = 0;
        byte[] data = null;
        int b;
        while ((b = inputStream.read()) != -1 && b != LF) {
            if (len == count) {
                count = count != 0 ? 2 * len : 128;
                byte[] expanded = new byte[count];
                if (data != null)
                    System.arraycopy(data, 0, expanded, 0, len);
                data = expanded;
            }
            data[len++] = (byte) b;
        }
        return len > 0 ? new String(data, 0, len - 1) : "";
    }

    public static Headers readHeaders(InputStream inputStream) throws IOException {
        Headers headers = new Headers();
        String line;
        while ((line = Util.readLine(inputStream)).length() > 0) {
            headers.addHeader(line);
        }
        return headers;
    }

    public static String getIPAddress() {
        String ips = "";
        try {
            List<NetworkInterface> interfaces = Collections.list(NetworkInterface.getNetworkInterfaces());
            for (NetworkInterface intf : interfaces) {
                List<InetAddress> addrs = Collections.list(intf.getInetAddresses());
                for (InetAddress addr : addrs) {
                    if (addr.isSiteLocalAddress()) {
                        ips = addr.getHostAddress();
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return ips;
    }

    public static int getInteger(String num) {
        try {
            return Integer.parseInt(num);
        } catch (Exception e) {
            return -1;
        }
    }

    public static long getLong(String num) {
        try {
            return Long.parseLong(num);
        } catch (Exception e) {
            return -1;
        }
    }

}