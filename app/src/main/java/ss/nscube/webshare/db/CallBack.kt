package ss.nscube.webshare.db

interface CallBack<T> {
    fun onSuccess(data: T?)
    fun onFailure(e: Throwable?)
}