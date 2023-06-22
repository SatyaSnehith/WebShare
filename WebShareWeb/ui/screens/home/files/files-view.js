class FilesView {
    
    constructor() {
        this.lastFocusElement = null
    }

    onClick(fileNode) {
        let fileData = fileNode.fileData
        if (fileSelectionMode.isInSelectionMode) {
            fileNode.updateSelectionUi(fileSelectionMode.inverseSelection(fileNode))
            if (fileSelectionMode.isNoFileSelected()) {
                fileSelectionMode.isInSelectionMode = false
                fileSelectionMode.updateMode()
            }
        }
        if (!fileData.isFocused) {
            fileNode.focusDiv(true)
            if (this.lastFocusElement != null) this.lastFocusElement.focusDiv(false)
            this.lastFocusElement = fileNode
        }
        fileInfo.showFileInfo(fileNode)
    }
}