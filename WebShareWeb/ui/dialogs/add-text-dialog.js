class AddTextDialog extends MaxDialog {
    static instance = null

    static getInstance() {
        if (this.instance == null) {
            this.instance = new this()
        }
        return this.instance
    }

    constructor() {
        super($('addTextDialog'), $('addTextDialogWrap'), $('addTextMaximizeIcon'), $('addTextcloseButton'))
        $('addTextButton').onclick = () => this.onSendClicked()
        this.textInput = $('textInput')
    }

    show() {
        setTimeout(() => {
            this.textInput.focus();
        }, 200);
        super.show()
    }

    onSendClicked() {
        this.dismiss()
        let textString = this.textInput.value.trim()
        if (textString.length == 0) {
            utils.showSnack("Enter Text")
            return
        }
        api.sendText(this.textInput.value, (res) => {
            console.log(res);
            console.log(this);
            if (res.isUpdated) {
                this.textInput.value = ""
                utils.showSnack("Text sent")
                textTab.addFirst(res.text)
            }
        })
    }
}