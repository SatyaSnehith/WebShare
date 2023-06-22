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
    private val TAG = javaClass.canonicalName

    fun init(app: WebShareApp) {
        db = Room.databaseBuilder(app, AppDatabase::class.java, "notesDB")
            .build()
        textDAO = (db as AppDatabase).textDao()
    }

    val MIGRATION_1_2: Migration = object : Migration(1, 2) {
        override fun migrate(database: SupportSQLiteDatabase) {
        }
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

//    fun get(id: Int, callBack: CallBack<TextEntity>?): TextEntity? {
//        return call(callBack) {
//            textDAO?.ge(id)
//        }
//    }


    //DELETE



//    fun deleteMany(ids: IntArray, callBack: CallBack<Any>?) {
//        call(callBack) {
//            for (id in ids) {
//                textDAO?.delete(id)
//            }
//        }
//    }

//    fun getLast(callBack: CallBack<NoteEntity>) {
//        callOne(callBack) {
//            noteDAO?.getLast()
//        }
//    }


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

    private fun <T> getCallback(launchActivity: MainActivity, success: (T?) -> Unit, failure: (Throwable?) -> Unit): CallBack<T> {
        return object: CallBack<T> {
            override fun onSuccess(data: T?) {
                launchActivity.runOnUiThread {
                    success(data)
                }
            }
            override fun onFailure(e: Throwable?) {
                launchActivity.runOnUiThread {
                    failure(e)
                }
            }

        }
    }

}