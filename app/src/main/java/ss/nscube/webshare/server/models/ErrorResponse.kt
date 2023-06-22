package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class ErrorResponse (
    @SerializedName("errorType")
    val errorType: Int?,
    @SerializedName("error")
    var error: String?,
) {
    companion object {
        val TypeHide = 0
        val TypeSnack = 1
        val TypeNoAccess = 2
        val TypeNoUserCreation = 3
    }
}