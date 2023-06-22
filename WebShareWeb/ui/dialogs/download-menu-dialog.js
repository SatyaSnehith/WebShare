class DownloadMenuDialog extends Dialog {
    static instance = null

    static getInstance() {
        if (this.instance == null) {
            this.instance = new this()
        }
        return this.instance
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