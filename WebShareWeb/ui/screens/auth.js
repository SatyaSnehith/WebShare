class Auth extends Page {
    static instance = null

    static getInstance() {
        if (this.instance == null) {
            this.instance = new this()
        }
        return this.instance
    }

    constructor() {
        super($('auth'))
        this.authThemeChange = $('authThemeChange')
        this.authPin = $('authPin')
        this.pinError = $('pinError')
        this.submitButton = $('submitButton')
    
        this.authThemeChange.onclick = () => this.onAuthThemeClicked();
        this.authPin.oninput = () => this.onPinInput();
        this.submitButton.onclick = () => this.onAuthSubmitClicked();
    }


    onAuthThemeClicked() {
        Theme.getInstance().inverseTheme();
    }

    onPinInput() {
        this.pinError.innerHTML = '';
    }

    onAuthSubmitClicked() {
        let value = this.authPin.value;
        let validate = this.validate(value);
        if (validate != null) {
            this.pinError.innerHTML = validate;
        } else {
            api.auth(value);
        }
    }

    validate(pin) {
        let pinInt = parseInt(pin);
        if (pinInt.toString().length != 6) return "Pin must be 6 digits";
        return null;
    }

}