package ss.nscube.webshare.server.models

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

@JsonClass(generateAdapter = true)
class FileListResponse (
    @Json(name = "totalCount")
    val totalCount: Int,

    @Json(name = "files")
    val files: List<FileResponse>
)