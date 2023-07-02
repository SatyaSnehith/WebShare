package ss.nscube.webshare.server.headers

/*
Path format: "/<files/json/data>/<userId>/<file_path>"
*/
class Path(val path: String) {
    val names: List<String> = path.split("/").filter { it.isNotEmpty() }
    val length: Int = names.size

    operator fun get(index: Int): String? {
        return if (length > index && index > -1) names[index] else null
    }

    companion object {
        const val Api = "api"
        const val Image = "image"
        const val Status = "status"
        const val Auth = "auth"
        const val SignedUrlFile = "url-file"
        const val SignedUrlZip = "url-zip"
        const val File = "file"
        const val Text = "text"
        const val AddText = "add-text"
        const val DeleteText = "delete-text"
        const val Files = "files"
        const val MyFiles = "my-files"
        const val Info = "info"
        const val UploadFile = "upload-file"
        const val DeleteFile = "delete-file"
        const val DeleteMultiFile = "delete-multi-file"
        const val Zip = "zip"
        const val ChangeName = "change-name"
        const val UploadInfo = "upload-info"
    }
}