class DownloadMenuDialog extends Dialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('selectMenuDialog'))
        this.setCancellable()
        $('downloadAllBottom').onclick = () => this.onDownloadAllClicked()
        $('downloadZipBottom').onclick = () => this.onDownloadZipClicked()
        $('cancelSelectionButton').onclick = () => this.cancelSelection()
    }

    onDownloadAllClicked() {
        this.dismiss()
        fileSelectionMode.openSlectedFiles()
    }

    onDownloadZipClicked() {
        this.dismiss()
        fileSelectionMode.downloadSelectedFiles()
    }

    cancelSelection() {
        this.dismiss()
        fileSelectionMode.cancelSelection()
    }
}