package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class FileUploadResponse (
    @SerializedName("isSuccess")
    val isSuccess: Boolean,
    @SerializedName("file")
    val file: FileResponse?,
    @SerializedName("error")
    val error: String?,
    @SerializedName("showError")
    val showError: Boolean,
)