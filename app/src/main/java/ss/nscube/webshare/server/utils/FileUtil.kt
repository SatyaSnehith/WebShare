package ss.nscube.webshare.server.utils

import android.annotation.SuppressLint
import ss.nscube.webshare.utils.WebFileUtil
import ss.nscube.webshare.utils.log
import java.io.IOException
import java.io.OutputStream
import java.util.*

object FileUtil {
    const val OctetStream =  "application/octet-stream"
    const val JsonMimeType =  "application/json"

    private var mimeTypes: MutableMap<String, String> = HashMap()

    fun getExtension(fileName: String): String? {
        val lastDotIndex = fileName.lastIndexOf('.')
        if (lastDotIndex == -1) return null
        val nameWithoutExtension = fileName.substring(0, lastDotIndex)
        val lastSecondDotIndex = nameWithoutExtension.lastIndexOf('.')
        val extension = fileName.substring(lastDotIndex + 1).lowercase(Locale.getDefault())
        if (extension.isEmpty()) return null
        if (lastSecondDotIndex < 1) return extension
        val secondExtension = nameWithoutExtension.substring(lastSecondDotIndex + 1).lowercase(Locale.getDefault())
        if (secondExtension == "tar") return "$secondExtension.$extension"
        return extension
    }

    fun getMimeTypeFromName(name: String): String {
        val extension = name.substring(name.lastIndexOf(".") + 1).lowercase(Locale.getDefault())
        val mime = getMimeTypeFromExtension(extension)
        log("EXTENSION $mime $extension")
        return mime
    }

    fun getMimeTypeFromExtension(extension: String?): String {
        return mimeTypes[extension] ?: OctetStream
    }

    fun getFileType(name: String): String {
        val extension = name.substring(name.lastIndexOf(".") + 1).lowercase(Locale.getDefault())
        val mime = mimeTypes[extension] ?: OctetStream
        return getFileType(extension, mime)
    }

    fun getFileType(extension: String?, mime: String): String {
        return when {
            mime.startsWith(WebFileUtil.Image) -> WebFileUtil.Image
            mime.startsWith(WebFileUtil.Video) -> WebFileUtil.Video
            mime.startsWith(WebFileUtil.Audio) -> WebFileUtil.Audio
            extension.equals("apk", true) -> WebFileUtil.App
            else -> WebFileUtil.Document
        }
    }

    val kilo: Long = 1024
    val mega = kilo * kilo
    val giga = mega * kilo
    val tera = giga * kilo

    @SuppressLint("DefaultLocale")
    fun getSize(size: Long): String {
        var s = ""
        val kb = size.toDouble() / kilo
        val mb = kb / kilo
        val gb = mb / kilo
        val tb = gb / kilo
        s = if (size < kilo) {
            "$size Bytes"
        } else if (size in kilo until mega) {
            formatSize(size, kilo, kb) + " KB"
        } else if (size in mega until giga) {
            formatSize(size, mega, mb) + " MB"
        } else if (size in giga until tera) {
            formatSize(size, giga, gb) + " GB"
        } else {
            formatSize(size, tera, tb) + " TB"
        }
        return s
    }

    fun formatSize(length: Long, decimalDivisible: Long, size: Double): String {
        val isWholeNumber = length % decimalDivisible == 0L
        return String.format(if (isWholeNumber) "%d" else "%.2f", if (isWholeNumber) size.toInt() else size)
    }

    fun nullOutputStream(): OutputStream {
        return object : OutputStream() {
            @Volatile
            private var closed = false
            @Throws(IOException::class)
            private fun ensureOpen() {
                if (closed) {
                    throw IOException("Stream closed")
                }
            }

            @Throws(IOException::class)
            override fun write(b: Int) {
                ensureOpen()
            }

            @Throws(IOException::class)
            override fun write(b: ByteArray, off: Int, len: Int) {
                Objects.checkFromIndexSize(off, len, b.size)
                ensureOpen()
            }

            override fun close() {
                closed = true
            }
        }
    }

    init {
        mimeTypes["epub"] = "application/epub+zip"
        mimeTypes["gz"] = "application/gzip"
        mimeTypes["jar"] = "application/java-archive"
        mimeTypes["ser"] = "application/java-serialized-object"
        mimeTypes["class"] = "application/java-vm"
        mimeTypes["js"] = "application/javascript"
        mimeTypes["json"] = "application/json"
        mimeTypes["doc"] = "application/msword"
        mimeTypes["dot"] = "application/msword"
        mimeTypes["bin"] = "application/octet-stream"
        mimeTypes["deploy"] = "application/octet-stream"
        mimeTypes["msu"] = "application/octet-stream"
        mimeTypes["msp"] = "application/octet-stream"
        mimeTypes["pdf"] = "application/pdf"
        mimeTypes["prf"] = "application/pics-rules"
        mimeTypes["xhtml"] = "application/xhtml+xml"
        mimeTypes["xht"] = "application/xhtml+xml"
        mimeTypes["xml"] = "application/xml"
        mimeTypes["xsd"] = "application/xml"
        mimeTypes["xsl"] = "application/xslt+xml"
        mimeTypes["xslt"] = "application/xslt+xml"
        mimeTypes["xspf"] = "application/xspf+xml"
        mimeTypes["zip"] = "application/zip"
        mimeTypes["apk"] = "application/octet-stream"
        mimeTypes["deb"] = "application/vnd.debian.binary-package"
        mimeTypes["ddeb"] = "application/vnd.debian.binary-package"
        mimeTypes["udeb"] = "application/vnd.debian.binary-package"
        mimeTypes["torrent"] = "application/x-bittorrent"
        mimeTypes["7z"] = "application/x-7z-compressed"
        mimeTypes["info"] = "application/x-info"
        mimeTypes["jnlp"] = "application/x-java-jnlp-file"
        mimeTypes["m3u8"] = "application/x-mpegURL"
        mimeTypes["tar"] = "application/x-tar"
        mimeTypes["aac"] = "audio/aac"
        mimeTypes["flac"] = "audio/flac"
        mimeTypes["mid"] = "audio/midi"
        mimeTypes["midi"] = "audio/midi"
        mimeTypes["kar"] = "audio/midi"
        mimeTypes["mpga"] = "audio/mpeg"
        mimeTypes["mpega"] = "audio/mpeg"
        mimeTypes["mp2"] = "audio/mpeg"
        mimeTypes["mp3"] = "audio/mpeg"
        mimeTypes["m4a"] = "audio/mpeg"
        mimeTypes["m3u"] = "audio/mpegurl"
        mimeTypes["oga"] = "audio/ogg"
        mimeTypes["ogg"] = "audio/ogg"
        mimeTypes["opus"] = "audio/ogg"
        mimeTypes["spx"] = "audio/ogg"
        mimeTypes["wav"] = "audio/x-wav"
        mimeTypes["ttc"] = "font/collection"
        mimeTypes["otf"] = "font/otf"
        mimeTypes["ttf"] = "font/ttf"
        mimeTypes["woff"] = "font/woff"
        mimeTypes["woff2"] = "font/woff2"
        mimeTypes["gif"] = "image/gif"
        mimeTypes["ief"] = "image/ief"
        mimeTypes["jp2"] = "image/jp2"
        mimeTypes["jpg2"] = "image/jp2"
        mimeTypes["jpeg"] = "image/jpeg"
        mimeTypes["jpg"] = "image/jpeg"
        mimeTypes["jpe"] = "image/jpeg"
        mimeTypes["jpm"] = "image/jpm"
        mimeTypes["jpx"] = "image/jpx"
        mimeTypes["jpf"] = "image/jpx"
        mimeTypes["pcx"] = "image/pcx"
        mimeTypes["png"] = "image/png"
        mimeTypes["svg"] = "image/svg+xml"
        mimeTypes["svgz"] = "image/svg+xml"
        mimeTypes["tiff"] = "image/tiff"
        mimeTypes["tif"] = "image/tiff"
        mimeTypes["css"] = "text/css"
        mimeTypes["html"] = "text/html"
        mimeTypes["htm"] = "text/html"
        mimeTypes["shtml"] = "text/html"
        mimeTypes["asc"] = "text/plain"
        mimeTypes["txt"] = "text/plain"
        mimeTypes["text"] = "text/plain"
        mimeTypes["pot"] = "text/plain"
        mimeTypes["brf"] = "text/plain"
        mimeTypes["srt"] = "text/plain"
        mimeTypes["h++"] = "text/x-c++hdr"
        mimeTypes["hpp"] = "text/x-c++hdr"
        mimeTypes["hxx"] = "text/x-c++hdr"
        mimeTypes["hh"] = "text/x-c++hdr"
        mimeTypes["c++"] = "text/x-c++src"
        mimeTypes["cpp"] = "text/x-c++src"
        mimeTypes["cxx"] = "text/x-c++src"
        mimeTypes["cc"] = "text/x-c++src"
        mimeTypes["h"] = "text/x-chdr"
        mimeTypes["htc"] = "text/x-component"
        mimeTypes["csh"] = "text/x-csh"
        mimeTypes["c"] = "text/x-csrc"
        mimeTypes["d"] = "text/x-dsrc"
        mimeTypes["diff"] = "text/x-diff"
        mimeTypes["patch"] = "text/x-diff"
        mimeTypes["hs"] = "text/x-haskell"
        mimeTypes["java"] = "text/x-java"
        mimeTypes["ly"] = "text/x-lilypond"
        mimeTypes["lhs"] = "text/x-literate-haskell"
        mimeTypes["py"] = "text/x-python"
        mimeTypes["sh"] = "text/x-shellscript"
        mimeTypes["scala"] = "text/x-scala"
        mimeTypes["mp4"] = "video/mp4"
        mimeTypes["qt"] = "video/quicktime"
        mimeTypes["mov"] = "video/quicktime"
        mimeTypes["mpeg"] = "video/mpeg"
        mimeTypes["mpg"] = "video/mpeg"
        mimeTypes["mpe"] = "video/mpeg"
        mimeTypes["webm"] = "video/webm"
        mimeTypes["mpv"] = "video/x-matroska"
        mimeTypes["mkv"] = "video/x-matroska"
        mimeTypes["avi"] = "video/x-msvideo"
    }
}
