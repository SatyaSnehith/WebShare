package ss.nscube.webshare.server.headers

class Cookies: HashMap<String, String>() {

    fun add(pair: String) {
        if (pair.contains('=')) {
            val parts = pair.split('=')
            if (parts.size == 2) add(parts[0], parts[1])
        }
    }

    fun add(name: String, value: String) {
        this[name] = value
    }

    fun forEachString(action: (String) -> Unit) {
        forEach {
            action("${it.key}=${it.value}")
        }

    }
}