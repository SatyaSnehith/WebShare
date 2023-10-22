package ss.nscube.webshare.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
class AddTextResponse (
    @Json(name = "isUpdated")
    val isUpdated: Boolean,
    @Json(name = "error")
    val error: String?,
    @Json(name = "text")
    val text: Text
)