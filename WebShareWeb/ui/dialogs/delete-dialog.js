class DeleteDialog extends Dialog {
    static instance = null

    static getInstance() {
        if (this.instance == null) {
            this.instance = new this()
        }
        return this.instance
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