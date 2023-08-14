package ss.nscube.webshare.core.server

import android.content.Context
import android.content.res.AssetManager
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.netty.NettyApplicationEngine
import io.ktor.server.routing.routing
import ss.nscube.webshare.core.server.routes.addAssetRoutes

class HttpServer(context: Context) {
    val assetManager: AssetManager = context.assets
    val port = 1111
    private lateinit var engine: NettyApplicationEngine

    fun start() {
        engine = embeddedServer(Netty, port = port) {
            routing {
                addAssetRoutes(assetManager)
            }
        }.start(wait = false)
    }

    fun stop() {
        engine.stop()
    }
}