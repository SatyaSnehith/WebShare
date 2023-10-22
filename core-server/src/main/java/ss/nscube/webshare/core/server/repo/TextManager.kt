package ss.nscube.webshare.core.server.repo

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import ss.nscube.webshare.core.server.repo.user.User

class TextManager: ArrayList<Text>() {
    private var currentId = 0
    val mutex = Any()
    val observerList: ArrayList<TextObserver> = ArrayList()
    val maxTextLength = 65536

    fun add(user: User, text: String, saveInDb: Boolean = true): Text {
        synchronized(mutex) {
            val mText = if (text.length > maxTextLength) text.substring(0, maxTextLength) else text
            if (saveInDb) MainScope().launch(Dispatchers.IO) {
//                DatabaseHelper.textDAO?.insertAll(TextEntity(text, System.currentTimeMillis()))
            }
            val t = Text(user, mText, currentId, System.currentTimeMillis())
            add(t)
            callOnAdd()
            currentId++
            return t
        }
    }

    fun indexFromId(id: Int): Int {
        return binarySearch { it.id - id }
    }

    fun fromId(id: Int): Text? {
        val index = binarySearch { it.id - id }
        if (index < 0) return null
        return get(index)
    }

    override fun remove(element: Text): Boolean {
        synchronized(mutex) {
            val index = indexOf(element)
            if (index < 0) return false
            callOnRemoved(index)
            return super.remove(element)
        }
    }

    fun remove(id: Int): Boolean {
        synchronized(mutex) {
            val index = indexFromId(id)
            if (index < 0 || index >= size) return false
            val result = remove(get(index))
            callOnRemoved(index)
            return result
        }
    }

    fun callOnAdd() {
        for (observer in observerList) observer.onAdded()
    }

    fun callOnRemoved(index: Int) {
        for (observer in observerList) observer.onRemoved(index)
    }
}

interface TextObserver {
    fun onAdded()
    fun onRemoved(index: Int)
}