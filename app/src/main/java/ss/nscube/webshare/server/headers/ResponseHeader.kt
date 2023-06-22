package ss.nscube.webshare.server.headers

import ss.nscube.webshare.server.HTTPServer


class ResponseHeader(var version: String, var statusCode: Int, var statusMessage: String) {
    var headers: Headers = Headers()
    init {
        headers.addHeader("Server", HTTPServer.SERVER_NAME)
    }
}