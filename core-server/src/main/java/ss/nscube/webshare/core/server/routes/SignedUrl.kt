package ss.nscube.webshare.core.server.routes

import io.ktor.http.HttpStatusCode
import io.ktor.server.application.call
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import ss.nscube.webshare.core.server.Api
import ss.nscube.webshare.core.server.WebShareServer
import ss.nscube.webshare.core.server.getUser
import ss.nscube.webshare.core.server.getApi
import ss.nscube.webshare.core.server.models.SignedUrlResponse
import ss.nscube.webshare.core.server.respondJson

fun Route.signedUrlFile(wss: WebShareServer) {
    getApi(Api.SignedUrlFile + "/{fileId}") {
        val user = getUser(wss) ?: return@getApi
        val fileId = call.parameters["fileId"]?.toIntOrNull()
            ?: return@getApi call.respond(HttpStatusCode.NotFound, "file not found")
        val file = wss.fileManager.get(fileId)
            ?: return@getApi call.respond(HttpStatusCode.NotFound, "file not found")
        val url = wss.signedUrlList.addFile(file, user)
        call.respondJson(SignedUrlResponse(url.hash))
    }
}
