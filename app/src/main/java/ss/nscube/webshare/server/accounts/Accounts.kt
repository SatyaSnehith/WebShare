package ss.nscube.webshare.server.accounts

import ss.nscube.webshare.server.BadRequestException
import ss.nscube.webshare.utils.log
import kotlin.collections.ArrayList

class Accounts(adminUsername: String?) {
    val mainAccount: Account = Account(createId(), adminUsername ?: generateUsername(), "localhost")
    val accounts: ArrayList<Account> = ArrayList()
    private val mutex = Any()
    val observerList: ArrayList<AccountsUpdateObserver> = ArrayList()
    var userNameCounter = 0
    var maxNumberOfAccounts = 100

    fun size(): Int {
        return accounts.size
    }

//    fun addIfNotPresent(accountId: String): Account {
//        return get(accountId) ?: createAccount()
//    }

    fun createAccount(ip: String): Account {
        synchronized(mutex) {
            try { Thread.sleep(1) } catch (_: Exception) {}
            val index = accounts.size
            if (index >= maxNumberOfAccounts) throw BadRequestException("number of Accounts reached the limit: $maxNumberOfAccounts")
            val account = Account(createId(), generateUsername(), ip) { callOnUpdate(index) }
            accounts.add(account)
            callOnAdded()
            return account
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

    fun deleteAccount(account: Account) {
        synchronized(mutex) {
            val index = accounts.indexOf(account)
            if (index > -1) {
                accounts.remove(account)
                callOnRemoved(index)
            }
        }
    }

    fun clear() {
        synchronized(mutex) {
            accounts.clear()
            callOnClear()
        }
    }

    operator fun get(id: Long): Account? {
        for (account in accounts) if (account.id == id) return account
        return null
    }

    operator fun contains(id: Long): Boolean {
        return get(id) != null
    }

    operator fun get(accountId: String): Account? {
        for (account in accounts) if (account.accountId == accountId) return account
        return null
    }

    operator fun contains(ip: String): Boolean {
        return get(ip) != null
    }

    fun validateName(name: String): String? {
        if (name.length < 5) return "Your username must be at least 5 characters long."
        if (name.length > 25) return "Your username cannot be longer than 25 characters."
        if (!name[0].isLetter()) return "Your username must start with a letter."
        for (account in accounts) if (name == account.name) return "That username is already in use. Please choose a different username."
        for (ch in name) if (!(ch.isLetter() || ch.isDigit() || ch == '_')) return "Your username can only contain letters, numbers, and underscores."
        return null
    }
}

interface AccountsUpdateObserver {
    fun onAdded()
    fun onUpdate(index: Int)
    fun onRemoved(index: Int)
    fun onClear()
}
