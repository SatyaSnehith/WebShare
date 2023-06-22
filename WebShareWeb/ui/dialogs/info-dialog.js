class InfoDialog extends Dialog {
    static instance = null

    static getInstance() {
        if (this.instance == null) {
            this.instance = new this()
        }
        return this.instance
    }

    constructor() {
        super($('infoDialogWrap'))
        this.setCancellable()
        this.infoDialogTitle = $('infoDialogTitle')
        this.infoDialogDescription = $('infoDialogDescription')

        $('infoOkayButton').onclick = () => {
            this.dismiss()
        }
    }

    show(title, description) {
        super.show()
        this.infoDialogTitle.innerHTML = title;
        this.infoDialogDescription.innerHTML = description;
    }
}