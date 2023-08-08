package ss.nscube.webshare.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
class StatusRequest (
    @Json(name = "userId")
    val userId: String?,
    @Json(name = "os")
    val os: String
)