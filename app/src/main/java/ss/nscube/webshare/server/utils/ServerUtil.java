package ss.nscube.webshare.server.utils;

import static ss.nscube.webshare.utils.LogKt.log;

import android.os.Environment;

import java.io.File;
import java.io.InputStream;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import ss.nscube.webshare.server.HTTPServer;
import ss.nscube.webshare.server.headers.RequestHeader;
import ss.nscube.webshare.utils.WebFileUtil;
import ss.nscube.webshare.server.file.WebFile;

public class ServerUtil {
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

    public static String read(InputStream inputStream, int count) throws IOException {
        int len = 0;
        byte[] data = new byte[count];
        int b;
        while ((b = inputStream.read()) != -1) {
            data[len++] = (byte) b;
            if(len == count) break;
        }
        log("", "Http log read " + new String(data, 0, len) );
        return len > 0 ? new String(data, 0, len) : "";
    }
}