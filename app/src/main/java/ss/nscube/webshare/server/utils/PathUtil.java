package ss.nscube.webshare.server.utils;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

public class PathUtil {
    private static final String hex = "0123456789ABCDEF";

    public static String encode(String s) {
        int length = s.length();
        int start = 0;
        int i = 0;

        StringBuffer result = new StringBuffer(length);
        try {
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
        } catch (UnsupportedEncodingException e) {
            return s;
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


    public static String decode(String s) {
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
                                return s;

                            }
                            // END Android-changed: App compat. Forbid non-hex chars after '%'.
                            int v = Integer.parseInt(s.substring(i+1,i+3),16);
                            if (v < 0)
                                // Android-changed: Improve error message by printing the string value.
                                return s;

                            bytes[pos++] = (byte) v;
                            i+= 3;
                            if (i < numChars)
                                c = s.charAt(i);
                        }
                        // A trailing, incomplete byte encoding such as
                        // "%x" will cause an exception to be thrown
                        if ((i < numChars) && (c=='%'))
                            return s;
                        sb.append(new String(bytes, 0, pos, "UTF-8"));
                    } catch (Exception e) {
                        return s;
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


}
