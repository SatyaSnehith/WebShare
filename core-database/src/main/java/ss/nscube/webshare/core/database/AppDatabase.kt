package ss.nscube.webshare.core.database

import androidx.room.Database
import androidx.room.RoomDatabase
import ss.nscube.webshare.core.database.entities.TextEntity


@Database(entities = [TextEntity::class], version = 1, exportSchema = true)
abstract class AppDatabase : RoomDatabase() {
    abstract fun textDao(): TextDAO
}