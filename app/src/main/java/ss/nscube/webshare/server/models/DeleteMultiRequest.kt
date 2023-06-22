package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class DeleteMultiRequest (
    @SerializedName("ids")
    val ids: ArrayList<Int>?
)