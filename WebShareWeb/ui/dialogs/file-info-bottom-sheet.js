class FileInfoBottomSheet extends Dialog {
    static instance = null

    static getInstance() {
        if (this.instance == null) {
            this.instance = new this()
        }
        return this.instance
    }

    constructor() {
        super($('fileInfoBottomSheetDialog'))
        this.sheet = $('fileInfoBottomSheet')
        this.setCancellable()
    }
}