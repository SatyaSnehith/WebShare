class FileChooser {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }
    constructor() {
        this.inputFileElement = element('INPUT')
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