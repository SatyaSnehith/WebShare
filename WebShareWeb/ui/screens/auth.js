class Auth extends Page {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
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
        if (pin.length != 6) return "Pin must be 6 digits";
        let isOnlyDigits = /^\d+$/.test(pin);
        if (!isOnlyDigits) return "Pin must only contain digits"
        return null;
    }

}