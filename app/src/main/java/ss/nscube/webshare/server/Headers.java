package ss.nscube.webshare.server;

import android.util.Log;

import java.util.Arrays;
import java.util.Iterator;

import ss.nscube.webshare.server.utils.Util;

public class Headers implements Iterable<Header> {
    private Header[] headers;
    private int count = 0, len = 0;
    private long from, to;

    public Headers() {
        headers = null;
        from = -1;
        to = -1;
    }

    
    /** 
     * @param header //<code>String</code> consists a HTTP Header
     */
    public void addHeader(String header) throws IllegalArgumentException {
        int split = header.indexOf(":");
        if (split != -1) {
            addHeader(header.substring(0, split), header.substring(split));
        } else throw new IllegalArgumentException();
    }

    public void addHeader(String name, String value) {
        expand();                                           //expands when necessary
        headers[len++] = new Header(name, value);
    }

    public String getValue(String name) {
        String value = null;
        for (int i = 0; i < len; ++i)
            if (headers[i].getName().equals(name))
                value = headers[i].getValue();
        return value;
    }

    public boolean contains(String name) {
        for (int i = 0; i < len; ++i)
            if (headers[i].getName().equals(name))
                return true;
        return false;
    }

    public boolean containsRangeValue() {
        String rangeStr = getValue("Range");
        if (rangeStr != null) {
            rangeStr = rangeStr.substring(8);
            String[] str = rangeStr.split("/");
            if (str.length > 0) {
                String[] str2 = str[0].split("-");
                if (str2.length > 0) {
                    from = Util.getLong(str2[0]);
                }
                if (str2.length > 1){
                    to = Util.getLong(str2[1]);
                }
            }
        }
        return from > -1;
    }

    public long getFrom() {
        return from;
    }

    public long getTo() {
        return to;
    }

    public int getSize() {
        return len;
    }

    private void expand() {
        if (len == count) {
            count = count != 0 ? 2 * len : 4;
            Header[] expanded = new Header[count];
            if (headers != null)
                System.arraycopy(headers, 0, expanded, 0, len);
            headers = expanded;
        }
    }

    public Iterator<Header> iterator() {
        return Arrays.asList(headers).subList(0, len).iterator();
    }
}