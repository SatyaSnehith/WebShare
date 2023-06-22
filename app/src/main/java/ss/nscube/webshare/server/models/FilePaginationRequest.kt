package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

data class FilePaginationRequest (
    @SerializedName("fromId")
    var fromId: Int,

    @SerializedName("count")
    val count: Int,

    @SerializedName("filters")
    val filters: List<String>?,

    @SerializedName("search")
    val search: String?,
)