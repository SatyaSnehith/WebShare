package ss.nscube.webshare.db

import androidx.room.Database
import androidx.room.RoomDatabase
import ss.nscube.webshare.db.daos.TextDAO
import ss.nscube.webshare.db.entities.TextEntity


@Database(entities = [TextEntity::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun textDao(): TextDAO


}