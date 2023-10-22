package ss.nscube.webshare.core.server

import android.util.Log
import com.squareup.moshi.Moshi
import com.squareup.moshi.Types
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.call
import io.ktor.server.request.receiveText
import io.ktor.server.response.respond
import io.ktor.server.response.respondText
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.util.pipeline.PipelineContext
import ss.nscube.webshare.core.server.models.ErrorResponse
import ss.nscube.webshare.core.server.repo.user.User
import java.io.IOException
import java.io.InputStream
import java.io.OutputStream
import java.util.Objects

fun log(msg: String) {
    Log.d("KTOR", msg)
}

@Throws(IOException::class)
fun InputStream.transfer(out: OutputStream): Long {
    Objects.requireNonNull(out, "out")
    var transferred: Long = 0
    val buffer = ByteArray(DEFAULT_BUFFER_SIZE)
    var read: Int
    while (this.read(buffer, 0, DEFAULT_BUFFER_SIZE).also { read = it } >= 0) {
        out.write(buffer, 0, read)
        transferred += read.toLong()
    }
    return transferred
}

/**
 *
 * returns user from userId found from auth header
 * checks the auth header and responds with unauthorized code for any error
 *
 */
suspend fun PipelineContext<Unit, ApplicationCall>.getUser(wss: WebShareServer, authenticate: Boolean = true): User? {
    val authorizationHeaderValue = call.request.headers[HttpHeaders.Authorization]
    if (authorizationHeaderValue == null) {
        call.respond(HttpStatusCode.Unauthorized, "authorization header not found")
        return null
    }
    if (!authorizationHeaderValue.startsWith("Basic ")) {
        call.respond(HttpStatusCode.Unauthorized, "invalid authorization header")
        return null
    }
    val userId = authorizationHeaderValue.substring(6)
    val user = wss.userManager[userId]
    if (user == null) {
        call.respond(HttpStatusCode.Unauthorized, "userId not found")
        return null
    }
    if (authenticate && wss.isUnauthorized(user)) {
        call.respondJson(ErrorResponse(ErrorResponse.TypeNoAccess, "do not have access"))
        return null
    }
    return user
}

fun Route.getApi(type: String, block: suspend PipelineContext<Unit, ApplicationCall>.() -> Unit) {
    get("/api/$type") {
        block()
    }
}

fun Route.postApi(type: String, block: suspend PipelineContext<Unit, ApplicationCall>.() -> Unit) {
    post("/api/$type") {
        block()
    }
}

val moshi: Moshi = Moshi.Builder()
    .addLast(KotlinJsonAdapterFactory())
    .build()

suspend inline fun<reified T> ApplicationCall.receiveJson(): T {
    return moshi.adapter(T::class.java).fromJson(receiveText())!!
}

inline fun<reified T> toJson(t: T): String? {
    return moshi.adapter(T::class.java).toJson(t)
}

inline fun<reified T> fromJson(json: String): T {
    return moshi.adapter(T::class.java).fromJson(json)!!
}

suspend inline fun<reified T> ApplicationCall.respondJson(t: T) {
    val json = moshi.adapter(T::class.java).toJson(t)
    respondText(json, ContentType.Application.Json, HttpStatusCode.OK)
}

suspend inline fun<reified T> ApplicationCall.respondJsonList(t: List<T>) {
    val json = moshi.adapter<List<T>>(Types.newParameterizedType(java.util.List::class.java, T::class.java)).toJson(t)
    respondText(json, ContentType.Application.Json, HttpStatusCode.OK)
}

