package ss.nscube.webshare.server;

/**
* data class consist of name and value of a HTTP request's or response's header.
* @author  Satya Snehith
* @version 1.0
* @since   2020-07-17
*/

public class Header {
    private String name, value;

    public Header(String name, String value) {
        //trim() method eliminates leading and trailing spaces
        this.name = name.trim();
        this.value = value.trim();
    }

    
    /** 
     * @return String
     */
    public String getName() {
        return this.name;
    }

    
    /** 
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    
    /** 
     * @return String
     */
    public String getValue() {
        return this.value;
    }

    
    /** 
     * @param value
     */
    public void setValue(String value) {
        this.value = value;
    }

}