package ss.nscube.webshare.core.server.repo

import ss.nscube.webshare.core.server.log
import ss.nscube.webshare.core.server.repo.file.WebFile
import ss.nscube.webshare.core.server.repo.user.User
import java.math.BigInteger
import java.security.MessageDigest
import kotlin.random.Random
import kotlin.random.nextInt
class SignedUrlList {
    val signedUrls = ArrayList<SignedUrl>()
    val mutex = Any()
    val expiry: Long = 4 * 60 * 60 * 1000L

    fun remove(signedUrl: SignedUrl) {
        synchronized(mutex) {
            signedUrls.remove(signedUrl)
        }
    }

    fun clear() {
        synchronized(mutex) {
            signedUrls.clear()
        }
    }

    fun removeExpiredUrls() {
        synchronized(mutex) {
            val iterator = signedUrls.iterator()
            while (iterator.hasNext()) if (iterator.next().isExpired()) iterator.remove()
        }
    }

    fun removeFile(file: WebFile) {
        synchronized(mutex) {
            for (signedUrl in signedUrls) {
                log("SIGNED_URL removeFile ${file.id}")
                if (signedUrl is SignedUrlFile && signedUrl.file == file) {
                    log("SIGNED_URL removeFile ${signedUrl.file.id} ${file.id}")
                    signedUrls.remove(signedUrl)
                    break
                }
            }
        }
    }

    fun addFile(file: WebFile, user: User): SignedUrl {
        synchronized(mutex) {
            var signedUrl = signedUrls.find {
                (if (it is SignedUrlFile) it.file == file else false) && it.user == user
            }
            if (signedUrl == null) {
                signedUrl = SignedUrlFile(file, user, hash(file.name), System.currentTimeMillis() + expiry)
                addAndSort(signedUrl)
            } else if (signedUrl.isExpired()) signedUrl.expiredAt = System.currentTimeMillis() + expiry
            return signedUrl
        }
    }

    fun addZip(fileName: String, idList: List<Int>, user: User): SignedUrl {
        synchronized(mutex) {
            var signedUrl = signedUrls.find {
                (if (it is SignedUrlZip) it.idList == idList else false) && it.user == user
            }
            if (signedUrl == null) {
                signedUrl = SignedUrlZip(fileName, idList, user, hash(idList.joinToString(", ")), System.currentTimeMillis() + expiry)
                addAndSort(signedUrl)
            } else if (signedUrl.isExpired()) signedUrl.expiredAt = System.currentTimeMillis() + expiry
            return signedUrl
        }
    }

    fun addAndSort(signedUrl: SignedUrl) {
        signedUrls.add(signedUrl)
        signedUrls.sortWith(compareBy { it.hash })
        log("signedUrlList added $signedUrl")
    }

    operator fun get(hash: String): SignedUrl? = synchronized(mutex) {
        val index = signedUrls.binarySearch {
            it.hash.compareTo(hash)
        }
        if (index < 0) return null
        return signedUrls[index]
    }

    fun getRandomString(): String {
        val chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
        val sb = StringBuilder()
        for (i in 1..10) {
            sb.append(chars[Random.nextInt(chars.indices)])
        }
        return sb.toString()
    }

    fun hash(name: String): String {
        return BigInteger(
            1,
            MessageDigest
                .getInstance("SHA-256")
                .digest("$name:${System.currentTimeMillis()}:${getRandomString()}".toByteArray())
        ).toString(36)
    }
}

class SignedUrlFile(
    val file: WebFile,
    override val user: User,
    override val hash: String,
    override var expiredAt: Long
) : SignedUrl() {
    override fun toString() = "${file.name}, ${super.toString()}"
}

class SignedUrlZip(
    val fileName: String,
    val idList: List<Int>,
    override val user: User,
    override val hash: String,
    override var expiredAt: Long
) : SignedUrl() {
    override fun toString() = "$fileName, ${super.toString()}"
}

abstract class SignedUrl {
    abstract val user: User
    abstract val hash: String
    abstract var expiredAt: Long

    override fun toString() = "${user.name}, $hash, $expiredAt"

    fun isExpired() = System.currentTimeMillis() > expiredAt
}