class InfoDialog extends Dialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
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