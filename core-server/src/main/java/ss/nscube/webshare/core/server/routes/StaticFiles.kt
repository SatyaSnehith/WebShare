package ss.nscube.webshare.core.server.routes

import android.content.res.AssetManager
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.defaultForFilePath
import io.ktor.server.application.ApplicationCall
import io.ktor.server.application.call
import io.ktor.server.request.path
import io.ktor.server.response.respondOutputStream
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.util.pipeline.PipelineContext
import ss.nscube.webshare.core.server.log
import ss.nscube.webshare.core.server.transfer

val assetLengthMap: HashMap<String, Long> = HashMap()

fun Route.staticFiles(assetManager: AssetManager) {
    get("/") {
        sendAsset(assetManager, "web/index.html")
    }
    for (name in assetManager.list("web") ?: arrayOf<String>()) {
        addAssetFolderOrFile(assetManager, name)
    }
}

fun Route.addAssetFolderOrFile(assetManager: AssetManager, name: String) {
    val list = assetManager.list("web/$name") // if it is file list will be empty
    if (list.isNullOrEmpty()) {
        log("Route $name")
        get(name) {
            sendAsset(assetManager, "web${call.request.path()}")
        }
        return
    }
    for (fileName in list) {
        val path = "/$name/$fileName"
        get(path) {
            sendAsset(assetManager, "web${call.request.path()}")
        }
    }
}

suspend fun PipelineContext<Unit, ApplicationCall>.sendAsset(assetManager: AssetManager, name: String) {
    var length: Long? = if (assetLengthMap.containsKey(name)) {
        assetLengthMap[name]
    } else null
    if (length == null) {
        assetManager.openFd(name).use { length = it.length }
    }
    if (length != null) {
        assetLengthMap[name] = length!!
    }
    log("Request AssetPath $name, $length, ${ContentType.defaultForFilePath(name)}")
    val inputStream = assetManager.open(name)
    call.respondOutputStream(ContentType.defaultForFilePath(name), HttpStatusCode.OK, length) {
        inputStream.transfer(this)
    }
}

