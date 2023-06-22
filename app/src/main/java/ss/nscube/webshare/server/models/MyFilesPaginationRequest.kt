package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

data class MyFilesPaginationRequest (
    @SerializedName("fromId")
    var fromId: Int,

    @SerializedName("count")
    val count: Int
)