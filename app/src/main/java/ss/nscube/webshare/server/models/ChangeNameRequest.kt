package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class ChangeNameRequest (
    @SerializedName("name")
    val name: String,
)