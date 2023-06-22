package ss.nscube.webshare.utils.scan.models;

class Album<T: Data>(val id: Int, val name: String) {

    val list: ArrayList<T> = ArrayList()

    override fun equals(other: Any?): Boolean {
        return name == other
    }

    override fun hashCode(): Int {
        //        result = 31 * result + images.hashCode()
        return id.hashCode()
    }
}

typealias ImageAlbum = Album<Image>

typealias VideoAlbum = Album<Video>
