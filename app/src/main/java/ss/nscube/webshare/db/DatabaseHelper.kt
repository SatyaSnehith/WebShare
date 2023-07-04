package ss.nscube.webshare.db

import androidx.room.Room
import androidx.room.RoomDatabase
import androidx.room.migration.Migration
import androidx.sqlite.db.SupportSQLiteDatabase
import ss.nscube.webshare.WebShareApp
import ss.nscube.webshare.db.daos.TextDAO
import ss.nscube.webshare.db.entities.TextEntity
import ss.nscube.webshare.ui.MainActivity
import ss.nscube.webshare.utils.d
import ss.nscube.webshare.utils.log
import java.lang.Exception

object DatabaseHelper {
    var db: RoomDatabase? = null
    var textDAO: TextDAO? = null

    fun init(app: WebShareApp) {
        db = Room.databaseBuilder(app, AppDatabase::class.java, "notesDB")
            .build()
        textDAO = (db as AppDatabase).textDao()
    }

    fun logSuccess(any: Any) {
        d("onSuccess: $any")
    }

    fun logFail(any: Any? = null) {
        d("onSuccess: $any")
    }

    //CREATE
    fun addText(text: String) {
        add(TextEntity(text, System.currentTimeMillis()), object : CallBack<TextEntity> {
            override fun onSuccess(data: TextEntity?) {
                log("TEXT added")
            }
            override fun onFailure(e: Throwable?) {
                log("TEXT added failed")
            }
        })
    }

    fun add(text: TextEntity, callBack: CallBack<TextEntity>?): TextEntity? {
        return call(callBack) {
            textDAO?.insertAll(text)
            return@call text
        }
    }

    private fun <T> call(callback: CallBack<T>?, run: () -> T?): T? {
        if (callback == null) {
            return try {
                run()
            } catch (e: Exception) {
                null
            }
        }
        Thread {
            try {
                run().also {
                    callback.onSuccess(it)
                    if (it != null) {
                        logSuccess(it)
                    }
                }
            } catch (e: Exception) {
                callback.onFailure(e)
                logFail(e)
            }
        }.start()
        return null
    }

}