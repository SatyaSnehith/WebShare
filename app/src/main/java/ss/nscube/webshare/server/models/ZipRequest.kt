package ss.nscube.webshare.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
class ZipRequest (
    @Json(name = "name")
    val name: String?,
    @Json(name = "ids")
    val ids: List<Int>?
)