package ss.nscube.webshare.core.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass


/**
 * status codes
 * 0 -> not secured
 * 1 -> secured and not authorized
 * 2 -> secured and authorized
 * 3 -> blocked
 */
@JsonClass(generateAdapter = true)
class StatusResponse (
    @Json(name = "name")
    val name: String,
    @Json(name = "id")
    val userId: String,
    @Json(name = "isAuthorized")
    val isAuthorized: Boolean,
    @Json(name = "isSecurityEnabled")
    val isSecurityEnabled: Boolean,
    @Json(name = "isBlocked")
    val isBlocked: Boolean,
)