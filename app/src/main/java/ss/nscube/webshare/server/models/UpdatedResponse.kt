package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class UpdatedResponse (
    @SerializedName("isUpdated")
    val isUpdated: Boolean,
    @SerializedName("error")
    val error: String?,
)