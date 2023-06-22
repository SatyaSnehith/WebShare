package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

data class Text (
    @SerializedName("from")
    val from: String,
    @SerializedName("data")
    val data: String,
    @SerializedName("time")
    val time: Long,
    @SerializedName("id")
    val id: Int,
    @SerializedName("isDeletable")
    val isDeletable: Boolean,
)