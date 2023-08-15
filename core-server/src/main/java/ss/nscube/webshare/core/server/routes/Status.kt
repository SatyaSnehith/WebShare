package ss.nscube.webshare.core.server.routes

import io.ktor.server.application.call
import io.ktor.server.routing.Route
import ss.nscube.webshare.core.server.Api
import ss.nscube.webshare.core.server.WebShareServer
import ss.nscube.webshare.core.server.log
import ss.nscube.webshare.core.server.models.ErrorResponse
import ss.nscube.webshare.core.server.models.StatusRequest
import ss.nscube.webshare.core.server.models.StatusResponse
import ss.nscube.webshare.core.server.postApi
import ss.nscube.webshare.core.server.receiveJson
import ss.nscube.webshare.core.server.respondJson

fun Route.status(wss: WebShareServer) {
    postApi(Api.Status) {
        val statusRequest: StatusRequest = call.receiveJson()
        val ip = call.request.local.remoteHost
        val user = if (statusRequest.userId != null) wss.userManager[statusRequest.userId] ?: wss.createUser(ip) else wss.createUser(ip)
        if (user == null) {
            call.respondJson(ErrorResponse(ErrorResponse.TypeNoUserCreation, "User creation disabled"))
        } else {
            user.os = statusRequest.os
            log("Http log ${user.base64Id.length}")
            call.respondJson(StatusResponse(user.name, user.base64Id, wss.isAuthorized(user), wss.isSecured, user.isBlocked))
        }
    }
}