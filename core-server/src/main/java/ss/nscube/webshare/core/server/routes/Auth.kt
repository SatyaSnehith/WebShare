package ss.nscube.webshare.core.server.routes

import io.ktor.server.application.call
import io.ktor.server.routing.Route
import ss.nscube.webshare.core.server.Api
import ss.nscube.webshare.core.server.WebShareServer
import ss.nscube.webshare.core.server.assertUser
import ss.nscube.webshare.core.server.models.AuthRequest
import ss.nscube.webshare.core.server.models.AuthResponse
import ss.nscube.webshare.core.server.postApi
import ss.nscube.webshare.core.server.receiveJson
import ss.nscube.webshare.core.server.respondJson

fun Route.auth(wss: WebShareServer) {
    postApi(Api.Auth) {
        val user = assertUser(wss) ?: return@postApi
        val authRequest: AuthRequest = call.receiveJson()
        user.pin = authRequest.pin
        user.authAttemptCount++
        val isCorrectPin = user.pin == wss.pin
        val hasAttempt = user.authAttemptCount <= wss.maxPinAttempts
        if (isCorrectPin && hasAttempt && !user.isBlocked) {
            call.respondJson(AuthResponse(true, null))
        } else {
            var error = "PIN entered is incorrect. You have ${wss.maxPinAttempts - user.authAttemptCount} attempts remaining."
            if (!hasAttempt) error = "You have reached the maximum number of attempts allowed"
            if (user.isBlocked) error = "Access denied"
            call.respondJson(AuthResponse(false, error))
        }
    }
}