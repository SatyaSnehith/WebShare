package ss.nscube.webshare.server;

public class BadRequestException extends Exception {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    public BadRequestException() {
        super();
    }

    public BadRequestException(String ex) {
        super(ex);
    }
}