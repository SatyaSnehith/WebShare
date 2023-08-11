package ss.nscube.webshare.core.database

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query
import ss.nscube.webshare.core.database.entities.TextEntity

@Dao
interface TextDAO {
    //CREATE
    @Insert
    fun insertAll(vararg texts: TextEntity)

    //READ
    @Query("SELECT * FROM texts WHERE id is :id")
    suspend fun get(id: Int): TextEntity

//    @Query("SELECT * FROM texts ORDER BY id")
//    fun getAll(): List<TextEntity>

    @Query("SELECT * FROM texts ORDER BY id DESC LIMIT :count")
    suspend fun getAllOrdered(count: Int): List<TextEntity>

    @Query("SELECT * FROM texts WHERE id < :fromId ORDER BY id DESC LIMIT :count")
    suspend fun getOrderedFrom(fromId: Int, count: Int): List<TextEntity>

    //DELETE
    @Query("DELETE FROM texts WHERE id = :id")
    fun delete(id: Int)

    @Query("DELETE FROM texts WHERE id in (:idList)")
    fun delete(idList: List<Int>)

    @Delete
    fun delete(textEntity: TextEntity): Int
}