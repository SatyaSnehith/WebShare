package ss.nscube.webshare.db

import androidx.room.Room
import androidx.room.RoomDatabase
import ss.nscube.webshare.WebShareApp
import ss.nscube.webshare.db.daos.TextDAO

object DatabaseHelper {
    var db: RoomDatabase? = null
    var textDAO: TextDAO? = null

    fun init(app: WebShareApp) {
        db = Room.databaseBuilder(app, AppDatabase::class.java, "notesDB")
            .build()
        textDAO = (db as AppDatabase).textDao()
    }

}