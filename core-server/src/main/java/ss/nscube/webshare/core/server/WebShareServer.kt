package ss.nscube.webshare.core.server

import android.content.Context
import android.content.res.AssetManager
import io.ktor.server.application.install
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.plugins.partialcontent.PartialContent
import io.ktor.server.routing.routing
import ss.nscube.webshare.core.server.routes.staticFiles

class WebShareServer(context: Context) {
    private val assetManager: AssetManager = context.assets
    private val port = 1111

    private val engine by lazy {
        embeddedServer(Netty, port = port) {
            install(PartialContent)
            routing {
                staticFiles(assetManager)
            }
        }
    }

    fun start() {
        engine.start(wait = false)
    }

    fun stop() {
        engine.stop()
    }
}