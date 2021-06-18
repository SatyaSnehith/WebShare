package ss.nscube.webshare.server.utils;

import android.annotation.SuppressLint;
import android.util.Log;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

public class FileUtil {
    private static Map<String, String> mimeTypes;

    static {

        mimeTypes = new HashMap<String, String>(); 
        mimeTypes.put("epub", "application/epub+zip");
        mimeTypes.put("gz", "application/gzip");
        mimeTypes.put("jar", "application/java-archive");
        mimeTypes.put("ser", "application/java-serialized-object");
        mimeTypes.put("class", "application/java-vm");
        mimeTypes.put("js", "application/javascript");
        mimeTypes.put("json", "application/json");
        mimeTypes.put("doc", "application/msword");
        mimeTypes.put("dot", "application/msword");
        mimeTypes.put("bin", "application/octet-stream");
        mimeTypes.put("deploy", "application/octet-stream");
        mimeTypes.put("msu", "application/octet-stream");
        mimeTypes.put("msp", "application/octet-stream");
        mimeTypes.put("pdf", "application/pdf");
        mimeTypes.put("prf", "application/pics-rules");
        mimeTypes.put("xhtml", "application/xhtml+xml");
        mimeTypes.put("xht", "application/xhtml+xml");
        mimeTypes.put("xml", "application/xml");
        mimeTypes.put("xsd", "application/xml");
        mimeTypes.put("xsl", "application/xslt+xml");
        mimeTypes.put("xslt", "application/xslt+xml");
        mimeTypes.put("xspf", "application/xspf+xml");
        mimeTypes.put("zip", "application/zip");
        mimeTypes.put("apk", "application/vnd.android.package-archive");
        mimeTypes.put("deb", "application/vnd.debian.binary-package");
        mimeTypes.put("ddeb", "application/vnd.debian.binary-package");
        mimeTypes.put("udeb", "application/vnd.debian.binary-package");
        mimeTypes.put("torrent", "application/x-bittorrent");
        mimeTypes.put("7z", "application/x-7z-compressed");
        mimeTypes.put("info", "application/x-info");
        mimeTypes.put("jnlp", "application/x-java-jnlp-file");
        mimeTypes.put("m3u8", "application/x-mpegURL");
        mimeTypes.put("tar", "application/x-tar");
        mimeTypes.put("flac", "audio/flac");
        mimeTypes.put("mid", "audio/midi");
        mimeTypes.put("midi", "audio/midi");
        mimeTypes.put("kar", "audio/midi");
        mimeTypes.put("mpga", "audio/mpeg");
        mimeTypes.put("mpega", "audio/mpeg");
        mimeTypes.put("mp2", "audio/mpeg");
        mimeTypes.put("mp3", "audio/mpeg");
        mimeTypes.put("m4a", "audio/mpeg");
        mimeTypes.put("m3u", "audio/mpegurl");
        mimeTypes.put("oga", "audio/ogg");
        mimeTypes.put("ogg", "audio/ogg");
        mimeTypes.put("opus", "audio/ogg");
        mimeTypes.put("spx", "audio/ogg");
        mimeTypes.put("wav", "audio/x-wav");
        mimeTypes.put("ttc", "font/collection");
        mimeTypes.put("otf", "font/otf");
        mimeTypes.put("ttf", "font/ttf");
        mimeTypes.put("woff", "font/woff");
        mimeTypes.put("woff2", "font/woff2");
        mimeTypes.put("gif", "image/gif");
        mimeTypes.put("ief", "image/ief");
        mimeTypes.put("jp2", "image/jp2");
        mimeTypes.put("jpg2", "image/jp2");
        mimeTypes.put("jpeg", "image/jpeg");
        mimeTypes.put("jpg", "image/jpeg");
        mimeTypes.put("jpe", "image/jpeg");
        mimeTypes.put("jpm", "image/jpm");
        mimeTypes.put("jpx", "image/jpx");
        mimeTypes.put("jpf", "image/jpx");
        mimeTypes.put("pcx", "image/pcx");
        mimeTypes.put("png", "image/png");
        mimeTypes.put("svg", "image/svg+xml");
        mimeTypes.put("svgz", "image/svg+xml");
        mimeTypes.put("tiff", "image/tiff");
        mimeTypes.put("tif", "image/tiff");
        mimeTypes.put("css", "text/css");
        mimeTypes.put("html", "text/html");
        mimeTypes.put("htm", "text/html");
        mimeTypes.put("shtml", "text/html");
        mimeTypes.put("asc", "text/plain");
        mimeTypes.put("txt", "text/plain");
        mimeTypes.put("text", "text/plain");
        mimeTypes.put("pot", "text/plain");
        mimeTypes.put("brf", "text/plain");
        mimeTypes.put("srt", "text/plain");
        mimeTypes.put("h++", "text/x-c++hdr");
        mimeTypes.put("hpp", "text/x-c++hdr");
        mimeTypes.put("hxx", "text/x-c++hdr");
        mimeTypes.put("hh", "text/x-c++hdr");
        mimeTypes.put("c++", "text/x-c++src");
        mimeTypes.put("cpp", "text/x-c++src");
        mimeTypes.put("cxx", "text/x-c++src");
        mimeTypes.put("cc", "text/x-c++src");
        mimeTypes.put("h", "text/x-chdr");
        mimeTypes.put("htc", "text/x-component");
        mimeTypes.put("csh", "text/x-csh");
        mimeTypes.put("c", "text/x-csrc");
        mimeTypes.put("d", "text/x-dsrc");
        mimeTypes.put("diff", "text/x-diff");
        mimeTypes.put("patch", "text/x-diff");
        mimeTypes.put("hs", "text/x-haskell");
        mimeTypes.put("java", "text/x-java");
        mimeTypes.put("ly", "text/x-lilypond");
        mimeTypes.put("lhs", "text/x-literate-haskell");
        mimeTypes.put("py", "text/x-python");
        mimeTypes.put("scala", "text/x-scala");
        mimeTypes.put("mp4", "video/mp4");
        mimeTypes.put("qt", "video/quicktime");
        mimeTypes.put("mov", "video/quicktime");
        mimeTypes.put("mpeg", "video/mpeg");
        mimeTypes.put("mpg", "video/mpeg");
        mimeTypes.put("mpe", "video/mpeg");
        mimeTypes.put("webm", "video/webm");
        mimeTypes.put("mpv", "video/x-matroska");
        mimeTypes.put("mkv", "video/x-matroska");
        mimeTypes.put("avi", "video/x-msvideo");

    }

    public static String getMIMEType(String name) {
        String extension = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
        if (mimeTypes.containsKey(extension)) {
            return mimeTypes.get(extension);
        } else {
            return "application/octet-stream";
        }
    }

    public static String getMIMETypeOnly(String name) {
        String extension = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
        if (mimeTypes.containsKey(extension)) {
            return mimeTypes.get(extension);
        } else {
            return null;
        }
    }

    public static String getMIMEType(File file) {
        String extension = file.getName().substring(file.getName().lastIndexOf(".") + 1).toLowerCase();
        if (mimeTypes.containsKey(extension)) {
            return mimeTypes.get(extension);
        } else {
            return "application/octet-stream";
        }
    }

    public static String getType(File file) {
        String type = "file";
        if (file.isFile()) {
            if (file.getName().endsWith(".text")) {
                return "text";
            }
            String mimeType = getMIMEType(file);
            if (mimeType == null) {
                 type = "file";
            } else if (mimeType.contains("audio"))
                type = "audio";
            else if (mimeType.contains("image"))
                type = "image";
            else if (mimeType.contains("video"))
                type = "video";
            return type;
        } else if (file.isDirectory()) {
            type = "folder";
        }
        return type;
    }

    @SuppressLint("DefaultLocale")
    public static String getSize(long size) {
        long kilo = 1024;
        long mega = kilo * kilo;
        long giga = mega * kilo;
        long tera = giga * kilo;
        String s = "";
        double kb = (double)size / kilo;
        double mb = kb / kilo;
        double gb = mb / kilo;
        double tb = gb / kilo;
        if(size < kilo) {
            s = size + " Bytes";
        } else if(size >= kilo && size < mega) {
            s =  String.format("%.2f", kb) + " KB";
        } else if(size >= mega && size < giga) {
            s = String.format("%.2f", mb) + " MB";
        } else if(size >= giga && size < tera) {
            s = String.format("%.2f", gb) + " GB";
        } else if(size >= tera) {
            s = String.format("%.2f", tb) + " TB";
        }
        return s;
    }

    public static boolean isAcceptable(String fileName) {
        int slashPos = fileName.indexOf('/');
        Log.i("TAG", "isAcceptable: " + fileName + " " + slashPos);
        return slashPos == -1;
    }
}