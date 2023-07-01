class AddTextDialog extends MaxDialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
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
            log(res);
            log(this);
            if (res.isUpdated) {
                this.textInput.value = ""
                utils.showSnack("Text sent")
                textTab.addFirst(res.text)
            }
        })
    }
}