package ss.nscube.webshare.core.server.routes

import android.util.Log
import androidx.test.core.app.ApplicationProvider
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.filters.SmallTest
import com.google.common.truth.Truth.assertThat
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpHeaders
import io.ktor.server.routing.routing
import io.ktor.server.testing.ApplicationTestBuilder
import io.ktor.server.testing.testApplication
import org.junit.Test
import org.junit.runner.RunWith
import ss.nscube.webshare.core.server.WebShareServer
import ss.nscube.webshare.core.server.fromJson
import ss.nscube.webshare.core.server.toJson
import ss.nscube.webshare.core.server.models.StatusRequest
import ss.nscube.webshare.core.server.models.StatusResponse

@RunWith(AndroidJUnit4::class)
@SmallTest
class StatusKtTest {

    @Test
    fun statusApiCheckUserIdAndName() = testServer {
        val response = client.post("/api/status") {
            setBody(toJson(StatusRequest(userId = null, os = "MacOs")))
        }
        val length = response.headers[HttpHeaders.ContentLength]?.toLongOrNull()
        assertThat(length).isAtLeast(1L)
        val resText = response.bodyAsText()
        Log.d("TAG_TEST", "statusApiCheckUserIdAndName: $length $resText")
        val statusResponse: StatusResponse = fromJson(resText)
        assertThat(statusResponse.userId).isNotEmpty()
        assertThat(statusResponse.name).isNotEmpty()
    }

    @Test
    fun repetitiveUniqueUserId() = testServer {
        val userIds = ArrayList<String>()
        val times = 90
        repeat(times) {
            val userId = getStatus(StatusRequest(userId = null, os = "MacOs")).userId
            assertThat(userIds).doesNotContain(userId)
            Log.d("TAG_TEST", "repetitiveUniqueUserId: $userId")
            userIds.add(userId)
        }
        assertThat(userIds.size).isEqualTo(times)
    }

    private suspend fun ApplicationTestBuilder.getStatus(statusRequest: StatusRequest): StatusResponse {
        val response = client.post("/api/status") {
            setBody(toJson(statusRequest))
        }
        val length = response.headers[HttpHeaders.ContentLength]?.toLongOrNull()
        assertThat(length).isAtLeast(1L)
        val resText = response.bodyAsText()
        return fromJson(resText)
    }

    private fun testServer(block: suspend ApplicationTestBuilder.() -> Unit) {
        testApplication {
            application {
                routing {
                    status(WebShareServer(ApplicationProvider.getApplicationContext()))
                }
            }
            block()
        }
    }
}