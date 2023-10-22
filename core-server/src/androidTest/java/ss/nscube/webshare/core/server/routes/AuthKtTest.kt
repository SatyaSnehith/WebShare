package ss.nscube.webshare.core.server.routes

import androidx.test.core.app.ApplicationProvider
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.filters.SmallTest
import com.google.common.truth.Truth.assertThat
import io.ktor.client.request.post
import io.ktor.client.request.request
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import org.junit.Test
import org.junit.runner.RunWith
import ss.nscube.webshare.core.server.WebShareServer
import ss.nscube.webshare.core.server.fromJson
import ss.nscube.webshare.core.server.log
import ss.nscube.webshare.core.server.models.AuthRequest
import ss.nscube.webshare.core.server.models.AuthResponse
import ss.nscube.webshare.core.server.models.StatusRequest
import ss.nscube.webshare.core.server.models.StatusResponse
import ss.nscube.webshare.core.server.routes.StatusKtTest.getStatus
import ss.nscube.webshare.core.server.toJson

@RunWith(AndroidJUnit4::class)
@SmallTest
object AuthKtTest {

    @Test
    fun requestWithoutAuthorizationHeaderRespondsWithUnauthorized() = testServer {
        val response = client.post("api/auth")
        assertThat(response.status).isEqualTo(HttpStatusCode.Unauthorized)
    }

    @Test
    fun requestWithIncorrectAccountIdRespondsWithUnauthorized() = testServer {
        val response = client.post("api/auth") {
            headers.append(HttpHeaders.Authorization, "Basis fAs2D3df=")
        }
        assertThat(response.status).isEqualTo(HttpStatusCode.Unauthorized)
    }

    @Test
    fun requestWithAccountRespondsWithOk() = testServer {
        val statusRes = client.post("api/status") {
            setBody(toJson(StatusRequest(null, "Mac")))
        }
        val statusResponse: StatusResponse = fromJson(statusRes.bodyAsText())
        val response = client.post("api/auth") {
            setBody(toJson(AuthRequest(null)))
            headers.append(HttpHeaders.Authorization, "Basic ${statusResponse.userId}")
        }
        assertThat(response.status).isEqualTo(HttpStatusCode.OK)
    }


    // Tests with secured server
    @Test
    fun requestWithUnauthorizedAccountRespondsIsValidWithFalse() = testServer { wss ->
        wss.isSecured = true
        wss.pin = 120212
        val statusRes = client.post("api/status") {
            setBody(toJson(StatusRequest(null, "Mac")))
        }
        val statusResponse: StatusResponse = fromJson(statusRes.bodyAsText())
        val response = client.post("api/auth") {
            setBody(toJson(AuthRequest(null)))
            headers.append(HttpHeaders.Authorization, "Basic ${statusResponse.userId}")
        }
        val authResponse: AuthResponse = fromJson(response.bodyAsText())
        assertThat(response.status).isEqualTo(HttpStatusCode.OK)
        assertThat(authResponse.isValid).isFalse()
    }

    @Test
    fun requestWithAuthorizedAccountRespondsIsValidWithTrue() = testServer { wss ->
        wss.isSecured = true
        wss.pin = 120212
        val statusResponse: StatusResponse = getStatus(StatusRequest(null, "Mac"))
        val response = client.post("api/auth") {
            setBody(toJson(AuthRequest(wss.pin)))
            headers.append(HttpHeaders.Authorization, "Basic ${statusResponse.userId}")
        }
        val authResponse: AuthResponse = fromJson(response.bodyAsText())
        assertThat(response.status).isEqualTo(HttpStatusCode.OK)
        assertThat(authResponse.isValid).isTrue()
    }

    private fun testServer(block: suspend ApplicationTestBuilder.(WebShareServer) -> Unit) {
        val wss = WebShareServer(ApplicationProvider.getApplicationContext())
        testApplication {
            application {
                routing {
                    status(wss)
                    auth(wss)
                }
            }
            block(wss)
        }
    }
}