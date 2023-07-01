class FileInfoBottomSheet extends Dialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('fileInfoBottomSheetDialog'))
        this.sheet = $('fileInfoBottomSheet')
        this.setCancellable()
    }
}