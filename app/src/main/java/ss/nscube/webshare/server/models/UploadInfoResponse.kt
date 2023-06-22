package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class UploadInfoResponse (
    @SerializedName("isUploadAvailable")
    val isUploadAvailable: Boolean,
    @SerializedName("availableCount")
    val availableCount: Int,
)
