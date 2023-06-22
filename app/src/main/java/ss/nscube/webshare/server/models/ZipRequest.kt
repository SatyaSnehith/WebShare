package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class ZipRequest (
    @SerializedName("name")
    val name: String?,
    @SerializedName("ids")
    val ids: ArrayList<Int>?
)