package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class DeletedResponse (
    @SerializedName("isDeleted")
    val isDeleted: Boolean,
)