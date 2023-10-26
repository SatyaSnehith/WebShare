package ss.nscube.webshare.core.server.repo.item

import ss.nscube.webshare.core.server.repo.user.User
import java.io.File
import java.io.FileInputStream
import java.io.FileOutputStream
import java.io.InputStream
import java.io.OutputStream

class WSFile(
    user: User,
    name: String,
    length: Long,
    val file: File
): WSFileItem(user, name, length) {

    constructor(user: User, file: File): this(user, file.name, file.length(), file)

    fun getInputStream(): InputStream {
        return FileInputStream(file)
    }

    fun getOutputStream(): OutputStream {
        return FileOutputStream(file)
    }

}