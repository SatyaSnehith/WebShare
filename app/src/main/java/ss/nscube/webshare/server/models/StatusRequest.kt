package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class StatusRequest (
    @SerializedName("accountId")
    val accountId: String?,
    @SerializedName("os")
    val os: String
)