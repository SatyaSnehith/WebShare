package ss.nscube.webshare.core.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
class FileUploadResponse (
    @Json(name = "isSuccess")
    val isSuccess: Boolean,
    @Json(name = "file")
    val file: FileResponse?,
    @Json(name = "error")
    val error: String?,
    @Json(name = "showError")
    val showError: Boolean,
)