package ss.nscube.webshare.server.models

import com.google.gson.annotations.SerializedName

class AuthResponse (
    @SerializedName("isValid")
    val isValid: Boolean,
    @SerializedName("error")
    val error: String?,
)