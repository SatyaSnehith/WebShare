package ss.nscube.webshare.server;

import android.content.Context;
import android.content.res.AssetManager;
import android.os.Environment;
import android.util.Log;
import android.widget.Toast;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Locale;

import ss.nscube.webshare.server.accounts.Account;
import ss.nscube.webshare.server.accounts.Accounts;
import ss.nscube.webshare.server.events.OnServerStateChangedListener;
import ss.nscube.webshare.server.loaders.Downloader;
import ss.nscube.webshare.server.loaders.FileData;
import ss.nscube.webshare.server.loaders.Uploader;
import ss.nscube.webshare.server.utils.FileUtil;
import ss.nscube.webshare.server.utils.JSONParser;
import ss.nscube.webshare.server.utils.Util;

/**
* HTTPServer
* Handles HTTP requests
*
* @author  Satya Snehith
* @version 1.0
* @since   2020-07-17
*/

//TODO create logger
// LATER TODO autherization Basic or Barer
//TODO real time updates via websockets

public class HTTPServer {
    private ServerSocket serverSocket;      //accepts sockets
    private String mainDirPath;             //path of main directory
    private final Accounts accounts;
    private final AssetManager assetManager;
    private boolean isRunnig;
    private int state;
    public static final int RUNNING = 0;
    public static final int PAUSED = 1;
    public static final int NOT_RUNNING = 2;
    private final ArrayList<OnServerStateChangedListener> onServerStateChangedListeners;
    private final Uploader uploader;
    private final Downloader downloader;

    private static final String VERSION = "HTTP/1.0";
    private static final String CRLF = "\r\n";
    private static final String SERVER_NAME = "WebShare";
    private static final String[] statusMessages;

    static {
        statusMessages = new String[600];
        statusMessages[200] = "OK";
        statusMessages[201] = "Created";
        statusMessages[206] = "Partial Content";
        statusMessages[400] = "Bad Request";
        statusMessages[401] = "Unauthorized";
        statusMessages[403] = "Forbidden";
        statusMessages[404] = "Not Found";
    }
  /**
   * constructor with port as an argument.
    */
    public HTTPServer(AssetManager assetManager) {
        this.assetManager = assetManager;
        setMainDirPath(Environment.getExternalStorageDirectory().getAbsolutePath() + "/WebShare/files");
        this.onServerStateChangedListeners = new ArrayList<>();
        uploader = new Uploader();
        downloader = new Downloader();
        accounts = new Accounts(mainDirPath);
        state = NOT_RUNNING;
        notifyStateChangedListeners();
        isRunnig = false;

    }

    public void addOnServerStateChangedListener(OnServerStateChangedListener onServerStateChangedListener) {
        onServerStateChangedListeners.add(onServerStateChangedListener);
    }

    private void notifyStateChangedListeners() {
        for (OnServerStateChangedListener onServerStateChangedListener: onServerStateChangedListeners) {
            if (onServerStateChangedListener != null) {
                onServerStateChangedListener.onServerStateChanged();
            }
        }
    }

    public void start(int port, String ip) {
        if (!isRunnig) {
            //port of the service
            accounts.setServerAccount(ip);
            Thread thread = new Thread() {
                public void run() {
                    ThreadCounter.add(this);
                    try {
                        serverSocket = new ServerSocket(port);
                        isRunnig = true;
                        state = RUNNING;
                        notifyStateChangedListeners();
                        while (isRunnig) {
                            SocketHandler socketHandler = new SocketHandler(serverSocket.accept());
                            socketHandler.start();
                        }
                    } catch (IOException e) {
                        isRunnig = false;
                        state = NOT_RUNNING;
                        notifyStateChangedListeners();
                        e.printStackTrace();
                    }
                    ThreadCounter.remove(this);
                }
            };
            thread.start();
        }
    }

    public void changeIp(String ip) {
        accounts.setServerAccount(ip);
    }

    public void pause() {
        if (state == RUNNING) {
            state = PAUSED;
            notifyStateChangedListeners();
        }
    }

    public void con() {
        if (state == PAUSED) {
            state = RUNNING;
            notifyStateChangedListeners();
        }
    }

    public boolean allowRequests() {
        return true;
    }

    public void stop() {
        isRunnig = false;
        Thread thread = new Thread() {
            public void run() {
                try {
                    accounts.clear();
                    downloader.clear();
                    stopAllDownloadsAndUploads();
                    serverSocket.close();
                    state = NOT_RUNNING;
                    notifyStateChangedListeners();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        };
        thread.start();
    }

    private void stopAllDownloadsAndUploads() {
        ArrayList<Downloader.FileDownloader> fileDownloaders = (ArrayList<Downloader.FileDownloader>)downloader.getList();
        for (Downloader.FileDownloader fileDownloader: fileDownloaders) {
            fileDownloader.stop();
        }
        ArrayList<Uploader.FileUploader> fileUploaders = (ArrayList<Uploader.FileUploader>)uploader.getList();
        for (Uploader.FileUploader fileUploader: fileUploaders) {
            fileUploader.stop();
        }
    }

    public int getState() {
        return state;
    }

    public String getMainDirPath() {
        return this.mainDirPath;
    }

    public void setMainDirPath(String mainDirPath) {
        this.mainDirPath = mainDirPath;
        File file = new File(mainDirPath);
        if (!file.exists()) {
            file.mkdirs();
        }
    }

    public Accounts getAccounts() {
        return this.accounts;
    }

    public Uploader getUploader() {
        return uploader;
    }

    public Downloader getDownloader() {
        return downloader;
    }


    class SocketHandler extends Thread {
        private Socket socket;

        SocketHandler(Socket socket) {
            this.socket = socket;
        }

        @Override
        public void run() {
            ThreadCounter.add(this);
            try {
                String ip = socket.getInetAddress().getHostAddress();
                Account account = accounts.addIfNotPresent(ip);
                InputStream inputStream = socket.getInputStream();
                OutputStream outputStream = socket.getOutputStream();
                Request request = Request.readRequest(inputStream);
                // System.out.println("path: " + Request.getDecodedPath(request.getPath()));
                if (state == HTTPServer.RUNNING && allowRequests()) {
                    switch(request.getMethod()) {
                        case "GET":
                            new GetHandler(account, request, outputStream);
                            break;
                        case "POST":
                            new PostHandler(account, request, inputStream);
                            new GetHandler(account, request, outputStream);
                            break;
                        default:
                            System.out.println("Unknown method " + request.getMethod());
                    }
                } else {
                    outputStream.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            ThreadCounter.remove(this);
        }
    }

    class GetHandler {
        private final Account account;
        private final Request request;
        private final OutputStream outputStream;

        public GetHandler(Account account, Request request, OutputStream outputStream) throws Exception {
            this.account = account;
            this.request = request;
            this.outputStream = outputStream;

            handle();
        }

        public void handle() throws Exception {
            String requestedPath = Request.getDecodedPath(request.getPath());
            PathInfo pathInfo = new PathInfo(requestedPath);
            System.out.println(requestedPath);
            if(pathInfo.isApiCall()) {
                String apiCallType = pathInfo.getApiCallType();
                if(apiCallType.equals(PathInfo.ABOUT)) {
                    String subType = pathInfo.get(2).toLowerCase();
                    if(subType != null) {
                        int aId = pathInfo.getAccountId();
                        if(subType.equals(PathInfo.ALL)) {
                            sendJSON(JSONParser.getAllAccountsDetails(accounts));
                        } else if(subType.equals(PathInfo.ME)) {
                            sendJSON(JSONParser.getAccountDetails(account).toString());
                        } else if (aId != -1) {
                            sendJSON(JSONParser.getAccountDetails(account.getAllAccounts().get(aId)).toString());
                        } else {
                            sendFileNotFound();
                        }
                    } else {
                        sendFileNotFound();
                    }
                } else if(apiCallType.equals(PathInfo.FILE)) {
                    int aId = pathInfo.getAccountId();
                    System.out.println(pathInfo.getFilePath());
                    File file = accounts.get(aId).getFiles().get(pathInfo.getFilePath());
                    if (aId != -1 && file != null) {
                        System.out.println(file);
                        sendFile(aId, file.getAbsolutePath());
                    } else {
                        sendFileNotFound();
                    }
                } else {
                    sendFileNotFound();
                }
            } else {
                sendResource(requestedPath, requestedPath.equals("/"));
            }
            outputStream.close();
        }

        public void sendFile(int accountId, String filePath) throws Exception {
            if (accounts.contains(accountId)) {
                File file = new File(filePath);

                if (file.exists()) {
                    if (file.isFile()) {
                        long from;
                        Headers headers = request.getHeaders();
                        if (headers.containsRangeValue()) {
                            sendPartialFile(file, headers.getFrom(), headers.getTo());
                        } else {
                            sendCompleteFile(file);
                        }
                    } else { // asked for directory
                        sendFileNotFound();
                    }
                } else { // file does not exist
                    sendFileNotFound();
                }
            } else { // does not have an account with this id
                sendFileNotFound();
            }
        }

        private void sendResource(String resPath, boolean isIndex) throws Exception {
            if (isIndex)
                sendAsset( "web/index.html");
            else
                sendAsset("web" + resPath);
        }

        public void sendAsset(String name) {
            try {
                InputStream inputStream = assetManager.open(name);
                send200(name);
//                uploader.add(0, inputStream, outputStream);
                ResponseFileHandler.sendFile(0, inputStream, outputStream);
            } catch (IOException e) {
                sendFileNotFound();
            }
        }

        private void sendFileNotFound() {
            sendAsset("web/file_not_found.html");
        }

        public void sendCompleteFile(File file) throws IOException {
            long length = file.length();
            String fileName = file.getName();
            send200(length, FileUtil.getMIMEType(fileName));
            uploader.add(new FileData(fileName, file.getAbsolutePath(), account.getName(), length, true), 0, -1, new FileInputStream(file), outputStream);
//            ResponseFileHandler.sendFile(file, 0, outputStream);
        }

        public void sendPartialFile(File file, long from, long to) throws IOException {
            long length = file.length();
            String fileName = file.getName();
            send206(length, FileUtil.getMIMEType(fileName), from);
            uploader.add(new FileData(fileName, file.getAbsolutePath(), account.getName(), length, true), from, to, new FileInputStream(file), outputStream);
//            ResponseFileHandler.sendFile(file, from, outputStream);
        }

        public void sendJSON(String json) throws IOException {
            send200(json.length(), "application/json");
            ResponseFileHandler.sendText(json, outputStream);
        }

        public void sendData(String data) throws IOException {
            send200(data.length(), "text/plain");
            ResponseFileHandler.sendText(data, outputStream);
        }

        private void send200(String name) throws IOException {
            ResponseHeader responseHeader = new ResponseHeader(VERSION, 200, statusMessages[200]);
            Headers headers = new Headers();
            headers.addHeader("Server", SERVER_NAME);
            headers.addHeader("Content-Type", FileUtil.getMIMEType(name));
            responseHeader.setHeaders(headers);
            sendResponseHeader(responseHeader);
        }


        private void send206(long length, String mime, long from) throws IOException {
            ResponseHeader responseHeader = new ResponseHeader(VERSION, 206, statusMessages[206]);
            Headers headers = new Headers();
            headers.addHeader("Server", SERVER_NAME);
            headers.addHeader("Content-Length", length - from + "");
            headers.addHeader("Content-Range", "bytes " + from + "-" + (length - 1) + "/" + length + "");
            headers.addHeader("Content-Type", mime);
            responseHeader.setHeaders(headers);
            sendResponseHeader(responseHeader);
        }

        private void send200(File file) throws IOException {
            send200(file.length(), FileUtil.getMIMEType(file));
        }

        private void send200(long length, String mime) throws IOException {
            ResponseHeader responseHeader = new ResponseHeader(VERSION, 200, statusMessages[200]);
            Headers headers = new Headers();
            headers.addHeader("Server", SERVER_NAME);
            headers.addHeader("Content-Length", length + "");
            headers.addHeader("Content-Type", mime);
            responseHeader.setHeaders(headers);
            sendResponseHeader(responseHeader);
        }

        private void sendResponseHeader(ResponseHeader responseHeader) throws IOException {
            // writes for example: HTTP/1.0 200 OK
            outputStream.write(
                    (responseHeader.getVersion() + " " +
                            responseHeader.getStatusCode() + " " +
                            responseHeader.getStatusMessage() + CRLF).getBytes());
            Headers headers = responseHeader.getHeaders();
            for (Header header: headers) {
                String h = header.getName() + ": " + header.getValue() + CRLF;
                outputStream.write(h.getBytes());
            }
            outputStream.write(CRLF.getBytes());
            outputStream.flush();
        }
    }

    class PostHandler {
        private final InputStream inputStream;
        private final Request request;
        private final Account account;
        private String boundary;
        private char[] boundaryChars;
        private int boundaryLength;

        public PostHandler(Account account, Request request, InputStream inputStream) throws IOException {
            this.request = request;
            this.inputStream = inputStream;
            this.account = account;

            String contentType = request.getHeaders().getValue("Content-Type");

            String URL_ENCODED_DATA = "application/x-www-form-urlencoded";
            if (contentType.contains(";")) {
                String[] contents = contentType.split(";");
                String FORM_DATA = "multipart/form-data";
                if (contents[0].substring(2).equals(FORM_DATA)) {
                    setBoundary();
                    String readLine = Util.readLine(inputStream);
                    if (readLine.equals(boundary)) {
                        readPart();
                    }
                }
            } else if (contentType.substring(2).equals(URL_ENCODED_DATA)) {
                int length = Util.getInteger(request.getHeaders().getValue("Content-Length").substring(2));
                if (length >= 0) {
                    byte[] bytes = new byte[length];
                    int ch, i = 0;
                    while((ch = inputStream.read()) != -1) {
                        bytes[i++] = (byte) ch;
                        if (i == length)
                            break;
                    }
                    String data = new String(bytes);
                    if (data.contains(":")) {
                        String[] tokens = data.split(":");
                        String type = tokens[0];
                        String value = tokens[1];
                        switch(type) {
                            case "name":
                                account.setName(value);
                                break;
                            default:
                                break;
                        }
                    }
                }
            } else {

            }
        }

        private void setBoundary() {
            String contentType = request.getHeaders().getValue("Content-Type");
            int boundaryPos = contentType.indexOf("boundary") + 9;
            this.boundary = "--" + contentType.substring(boundaryPos);
            this.boundaryChars = boundary.toCharArray();
            this.boundaryLength = boundaryChars.length;
        }

        private void readPart() throws IOException {
            Headers headers = Util.readHeaders(inputStream);
            String contentDisposition = headers.getValue("Content-Disposition");
            String name = getName(contentDisposition);
            if (name != null) {
                int colonPos = name.indexOf(':');
                if (colonPos > -1) {
                    String type = name.substring(0, colonPos);
                    String dataLength = name.substring(colonPos + 1);
                    switch(type) {
                        case "text":
                        case "file":
                            readFile(getFileName(contentDisposition), Util.getLong(dataLength));
                            break;
                        default:
                            break;
                    }
                }
            }
        }

        private void readFile(String fileName, long length) throws IOException {
            if (fileName != null && FileUtil.isAcceptable(fileName)) {
                if (length == -1) {
                    readFileWithoutBuffer(fileName);
                } else {
                    File file = new File(account.getMainFolder(), fileName);
                    FileData fileData = new FileData(fileName, file.getAbsolutePath(), account.getName(), length, false);
                    account.fileUploadStarted(file);
                        downloader.add(fileData, inputStream, new FileOutputStream(file), new Downloader.OnFileCanceledListener() {
                        @Override
                        public void onFileCanceled() {
//                            Log.i("TAG", "onFileCanceled: ");
                            account.fileUploadCanceled(file);
                        }
                    });
//                    readFileWithBuffer(fileName, length);
                }
            }
        }

//        private void readFileWithBuffer(String fileName, long length) throws IOException {
//            File file = new File(account.getMainFolder(), fileName);
//            FileOutputStream fileOutputStream = new FileOutputStream(file);
//            int bufLen = Math.min((int) length, 16384), readLen, totalRead = 0;
//            long newBufLen;
//            byte[] buffer = new byte[bufLen];
//            long totalTime = 0, time, readForSpeed = 0, timeForSpeed = 0;
//            double mul = 1000.0 / (1024 * 1024);
//            int count = 0, n = (int)(length / (500 * 1024));
//            if (n == 0)         n =  (int)(length / 1024);
//            if (n == 0)    n =  (int)(length / 100);
//
//            account.fileUploadStarted(file);
//
//            try {
//                while (true) {
//                    if (count == n) count = 0;
//                    time = System.currentTimeMillis();
//                    readLen = inputStream.read(buffer, 0, bufLen);
//                    fileOutputStream.write(buffer, 0, readLen);
//                    totalRead += readLen;
//                    if (totalRead >= length) {
//                        break;
//                    }
//                    readForSpeed += readLen;
//                    time = System.currentTimeMillis() - time;
//                    timeForSpeed += time;
//                    totalTime += time;
//
//                    if (count == 0) {
//                        double speed = (double) readForSpeed / timeForSpeed;
//                        double mbps = speed * mul;
//                        // System.out.println(mbps + " mb/s");
//                        if (!Double.isInfinite(mbps)) {
//                            System.out.println(String.format(Locale.getDefault(), "%.2f MB \\ Sec", mbps));
//                            account.progres(file, totalRead, length, mbps);
//                        }
//
//                        readForSpeed = 0;
//                        timeForSpeed = 0;
//                    }
//                    // if (totalTime > 999)
//                    if ((newBufLen = (length - totalRead)) < bufLen) {
//                        bufLen = (int)newBufLen;
//                    }
//                    count++;
//                }
//            } catch (IOException e) {
//                account.fileUploadCanceled(file);
//            }
//            account.fileUploadEnded(file, length, totalTime);
//
//            fileOutputStream.close();
//        }

        private void readFileWithoutBuffer(String fileName) throws IOException {
            File file = new File(account.getMainFolder(), fileName);
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            int ch, boundaryPos = 0, fileLength = 0;
            int[] tempData = new int[boundaryLength];
            boolean writeTempData = false;
            while ((ch = inputStream.read()) != -1) {
                if (ch == boundaryChars[boundaryPos]) {
                    writeTempData = true;
                    tempData[boundaryPos] = ch;
                    boundaryPos++;
                    if (boundaryPos == boundaryLength) {
                        break;
                    }
                } else {
                    if (writeTempData) {
                        for (int i = 0; i < boundaryPos; ++i) {
                            fileOutputStream.write(tempData[i]);
                            fileLength++;
                        }
                        writeTempData = false;
                        boundaryPos = 0;
                    }
                    fileOutputStream.write(ch);
                    fileLength++;
                }
            }
            fileOutputStream.getChannel().truncate(fileLength - 2);
            fileOutputStream.close();
        }

        private String getName(String contentDisposition) {
            String name = null;
            int namePos = contentDisposition.indexOf("name=") + 6;
            if (namePos > -1) {
                String fromname = contentDisposition.substring(namePos);
                int endPos = fromname.indexOf('"');
                name = fromname.substring(0, endPos);
            }
            return name;
        }

        private String getFileName(String contentDisposition) {
            String fileName = null;
            int fileNamePos = contentDisposition.indexOf("filename=") + 10;
            if (fileNamePos > -1) {
                String fromFileName = contentDisposition.substring(fileNamePos);
                int endPos = fromFileName.indexOf('"');
                fileName = fromFileName.substring(0, endPos);
            }
            return fileName;
        }

    }

}