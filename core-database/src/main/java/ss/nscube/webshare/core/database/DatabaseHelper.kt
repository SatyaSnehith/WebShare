package ss.nscube.webshare.core.database

import android.content.Context
import androidx.room.Room
import androidx.room.RoomDatabase

object DatabaseHelper {
    var db: RoomDatabase? = null
    var textDAO: TextDAO? = null

//    val packageNameMigration = object : Migration()

    fun init(context: Context) {
        db = Room.databaseBuilder(context, AppDatabase::class.java, "notesDB")
            .fallbackToDestructiveMigration()
            .build()
        textDAO = (db as AppDatabase).textDao()
    }

}