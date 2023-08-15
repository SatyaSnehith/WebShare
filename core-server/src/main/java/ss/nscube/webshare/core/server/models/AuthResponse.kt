package ss.nscube.webshare.core.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
class AuthResponse (
    @Json(name = "isValid")
    val isValid: Boolean,
    @Json(name = "error")
    val error: String?,
)