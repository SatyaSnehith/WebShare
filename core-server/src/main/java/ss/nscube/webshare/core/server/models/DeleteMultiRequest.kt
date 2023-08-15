package ss.nscube.webshare.core.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
class DeleteMultiRequest (
    @Json(name = "ids")
    val ids: List<Int>?
)