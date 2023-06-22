package ss.nscube.webshare.utils

import android.util.Log
import ss.nscube.webshare.BuildConfig

var enableLogs = BuildConfig.DEBUG;
var logHttp = BuildConfig.DEBUG;

fun Any.log(msg: String?) {
    if (enableLogs) Log.d(this.javaClass.canonicalName, msg.toString())
}

fun log(tag: String?, msg: String?) {
    if (enableLogs) Log.d(tag.toString(), msg.toString())
}
fun Any.d(text: String?) {
    if (enableLogs) Log.d(this.javaClass.canonicalName, text.toString())
}

fun Any.e(text: String?) {
    if (enableLogs) Log.e(this.javaClass.canonicalName, text.toString())
}

fun httpRequest(text: String?) {
    if (logHttp) Log.d("Http log Request", text.toString())
}

fun httpResponse(text: String?) {
    if (logHttp) Log.d("Http log Response", text.toString())
}