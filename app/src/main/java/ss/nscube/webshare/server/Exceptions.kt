package ss.nscube.webshare.server

import ss.nscube.webshare.server.models.ErrorResponse
import java.lang.Exception

open class ErrorResponseException : Exception {
    var errorResponse: ErrorResponse = ErrorResponse(null, null)

    constructor() : super() {}

    constructor(errorType: Int?, error: String?): super(error) {
        errorResponse = ErrorResponse(errorType, error)
    }

    constructor(ex: String?) : super(ex) {
        errorResponse.error = ex
    }

    companion object {
        private const val serialVersionUID = 1L
    }
}

class BadRequestException : ErrorResponseException {
    constructor(): super()
    constructor(errorType: Int?, error: String?): super(errorType, error)
    constructor(error: String?): super(error)
}

class FileNotFoundResException : ErrorResponseException {
    constructor(): super()
    constructor(errorType: Int?, error: String?): super(errorType, error)
    constructor(error: String?): super(error)
}

class MemoryLimitExceededException : ErrorResponseException {
    constructor(): super()
    constructor(errorType: Int?, error: String?): super(errorType, error)
    constructor(error: String?): super(error)
}

class UnauthorizedException : ErrorResponseException {
    constructor(): super()
    constructor(errorType: Int?, error: String?): super(errorType, error)
    constructor(error: String?): super(error)
}