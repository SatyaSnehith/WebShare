package ss.nscube.webshare.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class MyFilesPaginationRequest (
    @Json(name = "fromId")
    var fromId: Int,

    @Json(name = "count")
    val count: Int
)