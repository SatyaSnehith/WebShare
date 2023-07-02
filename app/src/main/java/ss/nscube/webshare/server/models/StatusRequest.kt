package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class StatusRequest (
    @SerializedName("userId")
    val userId: String?,
    @SerializedName("os")
    val os: String
)