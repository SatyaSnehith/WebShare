class SelectButton extends Button {
    constructor(fileNode) {
        let icon
        let text
        if (fileSelectionMode.isSelected(fileNode)) {
            icon = UnselectIcon
            text = "Unselect"
        } else {
            icon = SelectIcon
            text = "Select"
        }
        super(icon, text, () =>  {
            fileSelectionMode.selectFileNode(fileNode)
            const [icon, text] = this.getIconAndText()
            this.update(icon, text)
            console.log(text);
        })
        this.fileNode = fileNode
    }

    getIconAndText() {
        let icon
        let text
        if (fileSelectionMode.isSelected(this.fileNode)) {
            icon = UnselectIcon
            text = "Unselect"
        } else {
            icon = SelectIcon
            text = "Select"
        }
        return [icon, text]
    }
}