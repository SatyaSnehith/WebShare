package ss.nscube.webshare.server;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

import ss.nscube.webshare.server.utils.Util;

/*
Path format: "/<files/json/data>/<accountId>/<file_path>"
*/

public class PathInfo {
    public static final String API_CALL = "api";
    public static final String FILE = "file";
    public static final String ABOUT = "about";
    public static final String ALL = "all";
    public static final String ME = "me";
    private String[] hNames;
    private boolean isApiCall;
    private String apiCallType;
    private int length;

    public PathInfo(String path) {
        hNames = getPathTokens(path);
        length = hNames.length;
        if (length > 0)
            isApiCall = hNames[0].equals("api");

        if (length > 1) {
            if (isApiCall)
                apiCallType = hNames[1].toLowerCase();
        }
    }

    public String get(int index) {
        if (length > index)     return hNames[index];
        else                    return null;
    }

    public int getAccountId() {
        if (length > 2)
            return Util.getInteger(hNames[2]);
        else
            return -1;
    }

    public String getFilePath() {
        if (length > 3) return hNames[3];
        else            return null;
    }

    public String getApiCallType() {
        return apiCallType;
    }

    public boolean isApiCall() {
        return this.isApiCall;
    }

    public String getFileName(int n) {
        if (n < 0 || n >= length)
            return null;
        return hNames[n];
    }

    public String[] getFilesName() {
        return hNames;
    }


    public String getPath(int from) {
        int to = hNames.length;
        return getPath(from, to);
    }

    public String getPath(int from, int to) {
        if (from < 0 || from > to || to > hNames.length)
            return null;
        String path = "";
        for (int i = from; i < to; ++i)
            path += "/" + hNames[i];
        return path;
    }

    private static final String hex = "0123456789ABCDEF";


    public static String encode(String s) throws UnsupportedEncodingException {
        int length = s.length();
        int start = 0;
        int i = 0;
    
        StringBuffer result = new StringBuffer(length);
        while (true) {
        while (i < length && isSafe(s.charAt(i)))
        i++;

        result.append(s.substring(start, i));

        // Are we done?
        if (i >= length)
        return result.toString();
        else if (s.charAt(i) == ' ') {
            result.append('+');
            i++;
        }
        else {
            start = i;
            char c;
            while (i < length && (c = s.charAt(i)) != ' ' && ! isSafe(c))
            i++;

            String unsafe = s.substring(start, i);
            byte[] bytes = unsafe.getBytes("UTF-8");
            for (int j = 0; j < bytes.length; j++) {
                result.append('%');
                int val = bytes[j];
                result.append(hex.charAt((val & 0xf0) >> 4));
                result.append(hex.charAt(val & 0x0f));
            }
        }
        start = i;
        }
    }

    /**
     * Private static method that returns true if the given char is either
     * a uppercase or lowercase letter from 'a' till 'z', or a digit froim
     * '0' till '9', or one of the characters '-', '_', '.' or '*'. Such
     * 'safe' character don't have to be url encoded.
     */
    private static boolean isSafe(char c) {
      return ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
             || (c >= '0' && c <= '9') || c == '-' || c == '_' || c == '.'
             || c == '*' || c == '/');
    }


    public static String decode(String s) throws UnsupportedEncodingException {
        boolean needToChange = false;
        int numChars = s.length();
        StringBuffer sb = new StringBuffer(numChars > 500 ? numChars / 2 : numChars);
        int i = 0;
        char c;
        byte[] bytes = null;
        while (i < numChars) {
            c = s.charAt(i);
            switch (c) {
            case '+':
                sb.append(' ');
                i++;
                needToChange = true;
                break;
            case '%':
                /*
                 * Starting with this instance of %, process all
                 * consecutive substrings of the form %xy. Each
                 * substring %xy will yield a byte. Convert all
                 * consecutive  bytes obtained this way to whatever
                 * character(s) they represent in the provided
                 * encoding.
                 */
                try {
                    // (numChars-i)/3 is an upper bound for the number
                    // of remaining bytes
                    if (bytes == null)
                        bytes = new byte[(numChars-i)/3];
                    int pos = 0;
                    while ( ((i+2) < numChars) &&
                            (c=='%')) {
                        // BEGIN Android-changed: App compat. Forbid non-hex chars after '%'.
                        if (!isValidHexChar(s.charAt(i+1)) || !isValidHexChar(s.charAt(i+2))) {
                            throw new IllegalArgumentException("URLDecoder: Illegal hex characters in escape (%) pattern : "
                                    + s.substring(i, i + 3));
                        }
                        // END Android-changed: App compat. Forbid non-hex chars after '%'.
                        int v = Integer.parseInt(s.substring(i+1,i+3),16);
                        if (v < 0)
                            // Android-changed: Improve error message by printing the string value.
                            throw new IllegalArgumentException("URLDecoder: Illegal hex characters in escape (%) pattern - negative value : "
                                    + s.substring(i, i + 3));
                        bytes[pos++] = (byte) v;
                        i+= 3;
                        if (i < numChars)
                            c = s.charAt(i);
                    }
                    // A trailing, incomplete byte encoding such as
                    // "%x" will cause an exception to be thrown
                    if ((i < numChars) && (c=='%'))
                        throw new IllegalArgumentException(
                         "URLDecoder: Incomplete trailing escape (%) pattern");
                    sb.append(new String(bytes, 0, pos, "UTF-8"));
                } catch (NumberFormatException e) {
                    throw new IllegalArgumentException(
                    "URLDecoder: Illegal hex characters in escape (%) pattern - "
                    + e.getMessage());
                }
                needToChange = true;
                break;
            default:
                sb.append(c);
                i++;
                break;
            }
        }
        return (needToChange? sb.toString() : s);
    }

    // BEGIN Android-added: App compat. Forbid non-hex chars after '%'.
    private static boolean isValidHexChar(char c) {
        return ('0' <= c && c <= '9') || ('a' <= c && c <= 'f') || ('A' <= c && c <= 'F');
    }

    private String[] getPathTokens(String path) {
        String[] tokens = path.split("/");
        ArrayList<String> r = new ArrayList<>();
        for (String token: tokens)
            if (token.length() > 0) r.add(token);
        String[] result = new String[r.size()];
        r.toArray(result);
        return result;
    }


}