package ss.nscube.webshare

import android.app.Application

import ss.nscube.webshare.db.DatabaseHelper
import ss.nscube.webshare.server.HTTPServer
import ss.nscube.webshare.ui.utils.TimeCal
import ss.nscube.webshare.ui.utils.UiUtil
import ss.nscube.webshare.utils.PreferencesUtil

class WebShareApp: Application() {
    lateinit var server: HTTPServer
    lateinit var preferencesUtil: PreferencesUtil

    override fun onCreate() {
        super.onCreate()
//        TimeCal.test()
        TimeCal.start(TimeCal.AppStart)
        preferencesUtil = PreferencesUtil(this)
        UiUtil.init(this)
        DatabaseHelper.init(this)
        server = HTTPServer(this)
        TimeCal.stop(this, TimeCal.AppStart)
    }

}

