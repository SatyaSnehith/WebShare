package ss.nscube.webshare.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
class ChangeNameRequest (
    @Json(name = "name")
    val name: String,
)