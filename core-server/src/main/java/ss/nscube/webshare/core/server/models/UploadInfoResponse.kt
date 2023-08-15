package ss.nscube.webshare.core.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
class UploadInfoResponse (
    @Json(name = "isUploadAvailable")
    val isUploadAvailable: Boolean,
    @Json(name = "availableCount")
    val availableCount: Int,
)
