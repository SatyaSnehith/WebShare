package ss.nscube.webshare.core.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
class AuthRequest (
    @Json(name = "pin")
    val pin: Int
)