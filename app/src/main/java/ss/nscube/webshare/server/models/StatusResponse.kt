package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName


/**
 * status codes
 * 0 -> not secured
 * 1 -> secured and not authorized
 * 2 -> secured and authorized
 * 3 -> blocked
 */
class StatusResponse (
    @SerializedName("name")
    val name: String,
    @SerializedName("id")
    val accountId: String,
    @SerializedName("isAuthorized")
    val isAuthorized: Boolean,
    @SerializedName("isSecurityEnabled")
    val isSecurityEnabled: Boolean,
    @SerializedName("isBlocked")
    val isBlocked: Boolean,
)