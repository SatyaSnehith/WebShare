package ss.nscube.webshare.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class Text (
    @Json(name = "from")
    val from: String,
    @Json(name = "data")
    val data: String,
    @Json(name = "time")
    val time: Long,
    @Json(name = "id")
    val id: Int,
    @Json(name = "isDeletable")
    val isDeletable: Boolean,
)