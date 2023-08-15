package ss.nscube.webshare.core.server.routes

import androidx.test.core.app.ApplicationProvider
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.filters.SmallTest
import com.google.common.truth.Truth.assertThat
import io.ktor.client.request.post
import io.ktor.client.request.request
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import org.junit.Test
import org.junit.runner.RunWith
import ss.nscube.webshare.core.server.WebShareServer

@RunWith(AndroidJUnit4::class)
@SmallTest
class AuthKtTest {

    @Test
    fun requestWithoutAuthorizationHeader() = testServer {
        val response = client.post("api/auth")
        assertThat(response.status).isEqualTo(HttpStatusCode.Unauthorized)
    }

    @Test
    fun requestWithoutBasicAuthorizationHeader() = testServer {
        val response = client.post("api/auth") {
            headers.append(HttpHeaders.Authorization, "Basis fAs2D3df=")
        }
        assertThat(response.status).isEqualTo(HttpStatusCode.Unauthorized)
    }

    @Test
    fun requestWithoutAccount() = testServer {
        val response = client.post("api/auth") {
            headers.append(HttpHeaders.Authorization, "Basic fAs2D3df=")
        }
        assertThat(response.status).isEqualTo(HttpStatusCode.OK)
    }


    private fun testServer(block: suspend ApplicationTestBuilder.() -> Unit) {
        testApplication {
            application {
                routing {
                    auth(WebShareServer(ApplicationProvider.getApplicationContext()))
                }
            }
            block()
        }
    }
}