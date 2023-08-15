package ss.nscube.webshare.core.server

import android.content.Context
import android.content.res.AssetManager
import io.ktor.server.application.install
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.plugins.partialcontent.PartialContent
import io.ktor.server.routing.routing
import ss.nscube.webshare.core.server.data.User
import ss.nscube.webshare.core.server.data.UserManager
import ss.nscube.webshare.core.server.routes.auth
import ss.nscube.webshare.core.server.routes.staticFiles
import ss.nscube.webshare.core.server.routes.status

class WebShareServer(context: Context) {
    private val assetManager: AssetManager = context.assets
    private val port = 1111

    var disableUserCreation = false
    var pin: Int? = null
//    preferencesUtil.securityPin
    val userManager = UserManager("preferencesUtil.adminUserName")
    var isSecured = false
//    preferencesUtil.isSecured
    var maxPinAttempts = 10
//    preferencesUtil.maxPinAttempts
//    private set

    private val engine by lazy {
        embeddedServer(Netty, port = port) {
            install(PartialContent)
            routing {
                staticFiles(assetManager)
                status(this@WebShareServer)
                auth(this@WebShareServer)
            }
        }
    }

    fun isAuthorized(user: User): Boolean {
        return !isSecured || user.hasAccess || user.pin == pin
    }

    fun createUser(ip: String): User? {
        return if (disableUserCreation) null
        else userManager.createUser(ip)
    }

    fun start() {
        engine.start(wait = false)
    }

    fun stop() {
        engine.stop()
    }
}