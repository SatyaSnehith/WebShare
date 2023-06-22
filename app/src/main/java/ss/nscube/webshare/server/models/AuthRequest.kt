package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class AuthRequest (
    @SerializedName("pin")
    val pin: Int
)