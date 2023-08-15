package ss.nscube.webshare.core.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
data class FileResponse (
    @Json(name = "name")
    val name: String,
    @Json(name = "id")
    val id: Int,
    @Json(name = "type")
    val type: String,
    @Json(name = "size")
    val size: Long,
    @Json(name = "created")
    val created: Long,
    @Json(name = "uploader")
    val uploader: String,
    @Json(name = "isDeletable")
    val isDeletable: Boolean,
    @Json(name = "duration")
    val duration: Int?,
    @Json(name = "resolution")
    val resolution: String?,
)