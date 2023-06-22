class FileChooser {
    constructor() {
        this.inputFileElement = document.createElement('INPUT')
        this.inputFileElement.onchange = () => {
            SendFileDialog.getInstance().uploadFiles(this.inputFileElement.files)
        };
        this.inputFileElement.type = 'file';
        this.inputFileElement.setAttribute("multiple", "")
    }

    open() {
        this.inputFileElement.click()
    }
}