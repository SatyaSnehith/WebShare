package ss.nscube.webshare.core.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
class ErrorResponse (
    @Json(name = "errorType")
    val errorType: Int?,
    @Json(name = "error")
    var error: String?,
) {
    companion object {
        val TypeHide = 0
        val TypeSnack = 1
        val TypeNoAccess = 2
        val TypeNoUserCreation = 3
    }
}