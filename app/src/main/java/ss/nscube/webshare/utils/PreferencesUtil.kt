package ss.nscube.webshare.utils

import android.content.Context
import ss.nscube.webshare.BuildConfig

class PreferencesUtil(context: Context) {
    private val AdminUsername = "AdminUsername"
    private val ServerInactiveTime = "ServerInactiveTime"
    private val sharedPreferences = context.getSharedPreferences(BuildConfig.APPLICATION_ID, Context.MODE_PRIVATE)
    private val SecurityPin = "SecurityPin"
    private val IsSecured = "IsSecured"
    private val MaxPinAttempts = "MaxPinAttempts"
    private val Theme = "Theme"

    var adminUserName: String?
        set(value) {
            sharedPreferences.edit().putString(AdminUsername, value).apply()
        }
        get() = sharedPreferences.getString(AdminUsername, null)

    var serverInactiveTime: Int?
        set(value) {
            if (value != null)
                sharedPreferences.edit().putInt(ServerInactiveTime, value).apply()
        }
        get() = sharedPreferences.getInt(ServerInactiveTime, 30)

    var securityPin: Int?
        set(value) {
            sharedPreferences.edit().putInt(SecurityPin, value ?: -1).apply()
        }
        get() {
            val pin =  sharedPreferences.getInt(SecurityPin, -1)
            return if (pin == -1) null else pin
        }

    var isSecured: Boolean
        set(value) {
            sharedPreferences.edit().putBoolean(IsSecured, value).apply()
        }
        get() = sharedPreferences.getBoolean(IsSecured, false)

    var maxPinAttempts: Int
        set(value) {
            sharedPreferences.edit().putInt(MaxPinAttempts, value).apply()
        }
        get() = sharedPreferences.getInt(MaxPinAttempts, 5)

    var theme: Int
        set(value) {
            sharedPreferences.edit().putInt(Theme, value).apply()
        }
        get() = sharedPreferences.getInt(Theme, 0)

}