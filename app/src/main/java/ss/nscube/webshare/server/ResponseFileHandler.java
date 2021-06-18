package ss.nscube.webshare.server;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class ResponseFileHandler {
    public static void sendFile(File file, OutputStream outputStream) throws IOException {
        sendFile(file, 0, outputStream);
    }

    public static void sendFile(File file, long from, OutputStream outputStream) throws IOException {
        sendFile(from, (InputStream)new FileInputStream(file), outputStream);
    }

    public static void sendFile(long from, InputStream inputStream, OutputStream outputStream) throws IOException {
        byte[] buffer = new byte[4096];
        int length;
        inputStream.skip(from);
        while ((length = inputStream.read(buffer)) > 0) {
            outputStream.write(buffer, 0, length);
            outputStream.flush();
        }
        inputStream.close();
    }
    
    public static void sendText(String text, OutputStream outputStream) throws IOException {
        outputStream.write(text.getBytes());
        outputStream.flush();
    }
}