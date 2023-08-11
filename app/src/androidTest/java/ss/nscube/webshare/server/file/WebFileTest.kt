package ss.nscube.webshare.server.file

import android.net.Uri
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.filters.SmallTest
import com.google.common.truth.Truth.assertThat
import org.junit.Test
import org.junit.runner.RunWith
import java.io.File

@RunWith(AndroidJUnit4::class)
@SmallTest
class WebFileTest {
    @Test
    fun webFileWithSameIdReturnTrue() {
        val webFile1 = WebFile()
        webFile1.id = 123
        val webFile2 = WebFile()
        webFile2.id = 123
        assertThat(webFile1 == webFile2).isTrue()
    }

    @Test
    fun webFileWithSameNameWithDifferentIdReturnFalse() {
        val webFile1 = WebFile()
        webFile1.name = "fileName"
        val webFile2 = WebFile()
        webFile2.name = "fileName"
        assertThat(webFile1 == webFile2).isFalse()
    }

    @Test
    fun webFileWithSameUriReturnTrue() {
        val webFile1 = WebFile()
        webFile1.name = "fileName12"
        webFile1.uri = Uri.fromFile(File("ex"))
        val webFile2 = WebFile()
        webFile2.name = "fileName12"
        webFile2.uri = Uri.fromFile(File("ex"))
        assertThat(webFile1 == webFile2).isTrue()
    }

    @Test
    fun webFileWithSameFileReturnTrue() {
        val webFile1 = WebFile()
        webFile1.name = "fileName122"
        webFile1.file = File("ex")
        val webFile2 = WebFile()
        webFile2.name = "fileName12"
        webFile2.file = File("ex")
        assertThat(webFile1 == webFile2).isTrue()
    }

    @Test
    fun webFileWithSameApkPackageNameReturnTrue() {
        val webFile1 = WebFile()
        webFile1.appPackageName = "fileName123"
        val webFile2 = WebFile()
        webFile2.appPackageName = "fileName123"
        assertThat(webFile1 == webFile2).isTrue()
    }

    @Test
    fun webFileWithDifferentIdReturnFalse() {
        val webFile1 = WebFile()
        webFile1.id = 1234
        val webFile2 = WebFile()
        webFile2.id = 1235
        assertThat(webFile1 == webFile2).isFalse()
    }

    @Test
    fun webFileWithDifferentNameWithSameIdReturnTrue() {
        val webFile1 = WebFile()
        webFile1.name = "fileName"
        webFile1.id = 1202
        val webFile2 = WebFile()
        webFile2.id = 1202
        assertThat(webFile1 == webFile2).isTrue()
    }

    @Test
    fun webFileWithDifferentUriReturnFalse() {
        val webFile1 = WebFile()
        webFile1.name = "fileName121"
        webFile1.uri = Uri.fromFile(File("ex2"))
        val webFile2 = WebFile()
        webFile2.name = "fileName12"
        webFile2.uri = Uri.fromFile(File("ex1"))
        assertThat(webFile1 == webFile2).isFalse()
    }

    @Test
    fun webFileWithDifferentFileReturnFalse() {
        val webFile1 = WebFile()
        webFile1.name = "fileName122"
        webFile1.file = File("ex2")
        val webFile2 = WebFile()
        webFile2.name = "fileName12"
        webFile2.file = File("ex1")
        assertThat(webFile1 == webFile2).isFalse()
    }

    @Test
    fun webFileWithDifferentApkPackageNameReturnFalse() {
        val webFile1 = WebFile()
        webFile1.appPackageName = "fileName1232"
        val webFile2 = WebFile()
        webFile2.appPackageName = "fileName123"
        assertThat(webFile1 == webFile2).isFalse()
    }
}