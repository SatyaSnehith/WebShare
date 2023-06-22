package ss.nscube.webshare.ui.utils

import android.content.res.Configuration
import android.content.res.Resources

object ThemeUtil {
    const val LightTheme = 0
    const val DarkTheme = 1
    const val followSystemTheme = false
    var currentTheme = getSystemTheme()
    const val DefaultTheme = LightTheme

    fun getSystemTheme() = if (followSystemTheme)
        when (Resources.getSystem().configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK) {
            Configuration.UI_MODE_NIGHT_YES -> DarkTheme
            Configuration.UI_MODE_NIGHT_NO -> LightTheme
            else -> DefaultTheme
        }
        else DefaultTheme

    fun isLightTheme() = currentTheme == LightTheme

}