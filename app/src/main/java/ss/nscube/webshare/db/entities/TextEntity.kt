package ss.nscube.webshare.db.entities

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.Ignore
import androidx.room.PrimaryKey

@Entity(tableName = "texts")
class TextEntity (
    var text: String,
    @ColumnInfo(name = "sentTime") var sentTime: Long = -1
) {
    @PrimaryKey(autoGenerate = true)
    var id: Int = 0
    @Ignore
    var isSelected: Boolean = false
}