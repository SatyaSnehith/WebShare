class DeleteDialog extends Dialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }
    
    constructor() {
        super($('deleteDialogWrap'))
        this.cancelButton = $('deleteCancelButton')
        this.deleteButton = $('deleteDeleteButton')
    }

    show(onDelete) {
        super.show();
        this.cancelButton.onclick = () => {
            this.dismiss()
        }
        this.deleteButton.onclick = () => {
            onDelete()
        };
    }
}