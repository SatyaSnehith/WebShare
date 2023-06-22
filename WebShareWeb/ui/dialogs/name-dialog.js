class NameDialog extends Dialog {
    static instance = null

    static getInstance() {
        if (this.instance == null) {
            this.instance = new this()
        }
        return this.instance
    }

    constructor() {
        super($('nameDialogWrap'))
        this.nameInput = $('nameInput')
        this.nameErrorMessage = $('nameErrorMessage')
        const nameSettingsText = $('nameSettingsText')

        $('nameCloseButton').onclick = () => {
            this.dismiss()
        }

        $('nameUpdateButton').onclick = () => {
            const name = this.nameInput.value;
            let errorMsg = utils.validateName(name);
            if (errorMsg == null) {
                this.nameErrorMessage.style.display = 'none';
                api.changeName(name, (response) => {
                    if (response.isUpdated) {
                        nameSettingsText.innerHTML = name;
                        utils.showSnack("Name updated");
                        this.dismiss()
                    } else {
                        this.nameErrorMessage.style.display = 'block';
                        this.nameErrorMessage.innerHTML = response.error;
                    }
                })
            } else {
                this.nameErrorMessage.style.display = 'block';
                this.nameErrorMessage.innerHTML = errorMsg;
            }
        } 
    }

    show(name) {
        super.show()
        this.nameInput.value = name;
        this.nameErrorMessage.style.display = 'none';
    }
}