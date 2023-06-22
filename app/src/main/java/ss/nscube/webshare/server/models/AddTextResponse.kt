package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class AddTextResponse (
    @SerializedName("isUpdated")
    val isUpdated: Boolean,
    @SerializedName("error")
    val error: String?,
    @SerializedName("text")
    val text: Text
)