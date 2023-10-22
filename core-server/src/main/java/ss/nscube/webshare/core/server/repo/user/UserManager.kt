package ss.nscube.webshare.core.server.repo.user

import ss.nscube.webshare.core.server.log
import kotlin.collections.ArrayList

class UserManager(adminUsername: String?) {
    val mainUser: User = User(createId(), adminUsername ?: generateUsername(), "localhost")
    val users: ArrayList<User> = ArrayList()
    private val mutex = Any()
    val observerList: ArrayList<UserUpdateObserver> = ArrayList()
    var userNameCounter = 0
    var maxNumberOfUsers = 100

    fun size(): Int {
        return users.size
    }

    fun createUser(ip: String): User {
        synchronized(mutex) {
            try { Thread.sleep(1) } catch (_: Exception) {}
            val index = users.size
            if (index >= maxNumberOfUsers) throw Exception("number of users reached the limit: $maxNumberOfUsers")
            val user = User(createId(), generateUsername(), ip) { callOnUpdate(index) }
            users.add(user)
            callOnAdded()
            return user
        }
    }

    fun generateUsername() = "User_${userNameCounter++}"

    fun callOnUpdate( index: Int) {
        log("OBSERVER_COUNT ACCOUNT ${observerList.size}")
        for (listener in observerList) listener.onUpdate(index)
    }

    fun callOnAdded() {
        for (listener in observerList) listener.onAdded()
    }

    fun callOnRemoved(index: Int) {
        for (listener in observerList) listener.onRemoved(index)
    }

    fun callOnClear() {
        for (listener in observerList) listener.onClear()
    }

    fun createId() = System.currentTimeMillis() - 1_000_000_000_000

    fun deleteUser(user: User) {
        synchronized(mutex) {
            val index = users.indexOf(user)
            if (index > -1) {
                users.remove(user)
                callOnRemoved(index)
            }
        }
    }

    fun clear() {
        synchronized(mutex) {
            users.clear()
            callOnClear()
        }
    }

    operator fun get(id: Long): User? {
        for (user in users) if (user.id == id) return user
        return null
    }

    operator fun contains(id: Long): Boolean {
        return get(id) != null
    }

    operator fun get(base64Id: String): User? {
        for (user in users) if (user.base64Id == base64Id) return user
        return null
    }

    operator fun contains(ip: String): Boolean {
        return get(ip) != null
    }

    fun validateName(name: String): String? {
        if (name.length < 5) return "Your username must be at least 5 characters long."
        if (name.length > 25) return "Your username cannot be longer than 25 characters."
        if (!name[0].isLetter()) return "Your username must start with a letter."
        for (user in users) if (name == user.name) return "That username is already in use. Please choose a different username."
        for (ch in name) if (!(ch.isLetter() || ch.isDigit() || ch == '_')) return "Your username can only contain letters, numbers, and underscores."
        return null
    }
}

interface UserUpdateObserver {
    fun onAdded()
    fun onUpdate(index: Int)
    fun onRemoved(index: Int)
    fun onClear()
}
