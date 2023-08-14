package ss.nscube.webshare.core.server

import android.content.Context
import androidx.test.core.app.ApplicationProvider
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.filters.SmallTest
import com.google.common.truth.Truth.assertThat
import io.ktor.client.request.get
import io.ktor.client.statement.readBytes
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import org.junit.Test
import org.junit.runner.RunWith
import ss.nscube.webshare.core.server.routes.addAssetRoutes

@RunWith(AndroidJUnit4::class)
@SmallTest
class HttpServerTest {
    private val context: Context = ApplicationProvider.getApplicationContext()

    @Test
    fun indexFile() = 
        testFile("/", "web/index.html")

    @Test
    fun commons_css() = 
        testFile("css/commons.css", "web/css/commons.css")

    @Test
    fun style_css() = 
        testFile("css/style.css", "web/css/style.css")
    
    @Test
    fun roboto_light_webfont_woff() = 
        testFile("fonts/roboto_light-webfont.woff", "web/fonts/roboto_light-webfont.woff")

    @Test
    fun roboto_light_webfont_woff2() = 
        testFile("fonts/roboto_light-webfont.woff2", "web/fonts/roboto_light-webfont.woff2")

    @Test
    fun roboto_medium_webfont_woff() = 
        testFile("fonts/roboto_medium-webfont.woff", "web/fonts/roboto_medium-webfont.woff")


    @Test
    fun roboto_medium_webfont_woff2() = 
        testFile("fonts/roboto_medium-webfont.woff2", "web/fonts/roboto_medium-webfont.woff2")


    @Test
    fun roboto_regular_webfont_woff() = 
        testFile("fonts/roboto_regular-webfont.woff", "web/fonts/roboto_regular-webfont.woff")


    @Test
    fun roboto_regular_webfont_woff2() = 
        testFile("fonts/roboto_regular-webfont.woff2", "web/fonts/roboto_regular-webfont.woff2")


    @Test
    fun back_svg() = 
        testFile("images/back.svg", "web/images/back.svg")

    @Test
    fun blogger_svg() = 
        testFile("images/blogger.svg", "web/images/blogger.svg")

    @Test
    fun bluew_svg() = 
        testFile("images/bluew.svg", "web/images/bluew.svg")

    @Test
    fun cancel_svg() = 
        testFile("images/cancel.svg", "web/images/cancel.svg")

    @Test
    fun details_png() = 
        testFile("images/details.png", "web/images/details.png")

    @Test
    fun drop_svg() = 
        testFile("images/drop.svg", "web/images/drop.svg")

    @Test
    fun evernote_svg() = 
        testFile("images/evernote.svg", "web/images/evernote.svg")

    @Test
    fun facebook_svg() = 
        testFile("images/facebook.svg", "web/images/facebook.svg")

    @Test
    fun go_svg() = 
        testFile("images/go.svg", "web/images/go.svg")

    @Test
    fun linkedin_svg() = 
        testFile("images/linkedin.svg", "web/images/linkedin.svg")

    @Test
    fun menu_svg() = 
        testFile("images/menu.svg", "web/images/menu.svg")

    @Test
    fun moon_svg() = 
        testFile("images/moon.svg", "web/images/moon.svg")

    @Test
    fun no_access_png() = 
        testFile("images/no_access.png", "web/images/no_access.png")

    @Test
    fun no_content_png() = 
        testFile("images/no_content.png", "web/images/no_content.png")

    @Test
    fun no_server_png() = 
        testFile("images/no_server.png", "web/images/no_server.png")

    @Test
    fun open_svg() = 
        testFile("images/open.svg", "web/images/open.svg")

    @Test
    fun pinterest_svg() = 
        testFile("images/pinterest.svg", "web/images/pinterest.svg")

    @Test
    fun reddit_svg() = 
        testFile("images/reddit.svg", "web/images/reddit.svg")

    @Test
    fun refresh_svg() = 
        testFile("images/refresh.svg", "web/images/refresh.svg")

    @Test
    fun remove_svg() = 
        testFile("images/remove.svg", "web/images/remove.svg")

    @Test
    fun remove_red_svg() = 
        testFile("images/remove_red.svg", "web/images/remove_red.svg")

    @Test
    fun send_svg() = 
        testFile("images/send.svg", "web/images/send.svg")

    @Test
    fun settings_svg() = 
        testFile("images/settings.svg", "web/images/settings.svg")

    @Test
    fun skype_svg() = 
        testFile("images/skype.svg", "web/images/skype.svg")

    @Test
    fun sun_svg() = 
        testFile("images/sun.svg", "web/images/sun.svg")

    @Test
    fun images_me() = 
        testFile("images/telegram.me.svg", "web/images/telegram.me.svg")

    @Test
    fun tumblr_svg() = 
        testFile("images/tumblr.svg", "web/images/tumblr.svg")

    @Test
    fun twitter_svg() = 
        testFile("images/twitter.svg", "web/images/twitter.svg")

    @Test
    fun unauthorized_png() = 
        testFile("images/unauthorized.png", "web/images/unauthorized.png")

    @Test
    fun vk_svg() = 
        testFile("images/vk.svg", "web/images/vk.svg")

    @Test
    fun whatsapp_svg() = 
        testFile("images/whatsapp.svg", "web/images/whatsapp.svg")


    @Test
    fun app_js() = 
        testFile("js/app.js", "web/js/app.js")

    @Test
    fun base64_min_js() = 
        testFile("js/base64.min.js", "web/js/base64.min.js")

    @Test
    fun apple_touch_icon_file() = 
        testFile("apple-touch-icon.png", "web/apple-touch-icon.png")

    @Test
    fun favicon_file() = 
        testFile("favicon.ico", "web/favicon.ico")

    @Test
    fun file_not_found_file() = 
        testFile("file_not_found.html", "web/file_not_found.html")

    @Test
    fun index_file() = 
        testFile("index.html", "web/index.html")

    private fun testServer(block: suspend ApplicationTestBuilder.() -> Unit) {
        testApplication {
            application {
                routing {
                    addAssetRoutes(context.assets)
                }
            }
            block()
        }
    }

    private fun testFile(path: String, fileName: String) = testServer {
        val response = client.get(path)
        assertThat(response.status).isEqualTo(HttpStatusCode.OK)
        val length = response.headers[HttpHeaders.ContentLength]?.toLongOrNull()
        val assetManager = context.assets
        var fileLength: Long
        assetManager.openFd(fileName).use {
            fileLength = it.length
        }
        assertThat(length).isEqualTo(fileLength)
        val inputStream = assetManager.open(fileName)
        assertThat(inputStream.readBytes()).isEqualTo(response.readBytes())
    }
}

