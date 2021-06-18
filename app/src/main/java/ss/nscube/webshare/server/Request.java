package ss.nscube.webshare.server;

import java.io.InputStream;
import java.io.UnsupportedEncodingException;

import ss.nscube.webshare.server.utils.Util;

public class Request {
    private String method, path, version;
    private Headers headers;

    public Request() {

    }

    public static Request readRequest(InputStream inputStream) throws Exception {
        Request request = new Request();
        
        addRequestLine(inputStream, request);
        
        request.headers = Util.readHeaders(inputStream);

        return request;
    }

    public static void addRequestLine(InputStream inputStream, Request request) throws Exception {
        String line = Util.readLine(inputStream);
        String tokens[] = line.split(" ");
        if (tokens.length == 3) {
            request.method = tokens[0];
            request.path = tokens[1];
            request.version = tokens[2];
        } else  {
            throw new BadRequestException(line);
        }
    }


    public static String getDecodedPath(String path) {
        try {
            return PathInfo.decode(path); 
        } catch (UnsupportedEncodingException e) {
            return path;
        }
    }

    public static String getEncodedPath(String path) {
        try {
            return PathInfo.encode(path); 
        } catch (UnsupportedEncodingException e) {
            return path;
        }
    }

    public String getMethod() {
        return this.method;
    }

    public String getPath() {
        return this.path;
    }

    public String getVersion() {
        return this.version;
    }

    public Headers getHeaders() {
        return this.headers;
    }

}