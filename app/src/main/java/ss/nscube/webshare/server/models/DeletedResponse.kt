package ss.nscube.webshare.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
class DeletedResponse (
    @Json(name = "isDeleted")
    val isDeleted: Boolean,
)