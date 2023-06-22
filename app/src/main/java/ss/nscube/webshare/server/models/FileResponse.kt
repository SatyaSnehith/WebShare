package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

data class FileResponse (
    @SerializedName("name")
    val name: String,
    @SerializedName("id")
    val id: Int,
    @SerializedName("type")
    val type: String,
    @SerializedName("size")
    val size: Long,
    @SerializedName("created")
    val created: Long,
    @SerializedName("uploader")
    val uploader: String,
    @SerializedName("isDeletable")
    val isDeletable: Boolean,
    @SerializedName("duration")
    val duration: Int?,
    @SerializedName("resolution")
    val resolution: String?,
)