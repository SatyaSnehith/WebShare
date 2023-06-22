package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class FileListResponse (
    @SerializedName("totalCount")
    val totalCount: Int,

    @SerializedName("files")
    val files: List<FileResponse>
)