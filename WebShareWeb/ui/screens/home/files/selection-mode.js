class SelectionMode {
    constructor() {
        this.selectedFiles = new Set()
        this.isInSelectionMode = false

        this.normalModeDiv = $('normalModeDiv')
        this.selectionModeDiv = $('selectionModeDiv')
        this.fileInfoSelection = $('fileInfoSelection')

        $('openUploadDialog').onclick = () => this.onOpenUploadClicked()
        this.sendFileDialog = SendFileDialog.getInstance()
        
        $('selectionMenu').onclick = () => this.onSelectMenuClicked()
    }

    selectFileNode(fileNode) {
        if (!this.isInSelectionMode) {
            this.isInSelectionMode = true
            this.updateMode()
        }
        fileNode.updateSelectionUi(this.inverseSelection(fileNode))
        if (this.isInSelectionMode) {
            if (this.isNoFileSelected()) {
                this.isInSelectionMode = false
                this.updateMode()
            }
        }

        if (!isFileInfoSideVisible) {
            FileInfoBottomSheet.getInstance().dismiss()
        }
        if (fileNode.fileData.isFocused) fileInfo.showFileInfo(fileNode)
    }

    clearAllSelections() {
        this.selectedFiles.clear()
    }

    onOpenUploadClicked() {
        this.sendFileDialog.show()
    }

    onSelectMenuClicked() {
        DownloadMenuDialog.getInstance().show()
    }


    openSlectedFiles() {
        for (const fileNode of this.selectedFiles) {
            utils.openFile(fileNode.fileData.name, fileNode.fileData.id, false);
        }
    }

    downloadSelectedFiles() {
        const idList = []
        for (const fileNode of this.selectedFiles) {
            idList.push(fileNode.fileData.id);
        }
        api.getZipUrl(idList, (res) => {
            utils.openUrl(null, res, false);
        })
    }

    isSelected(fileNode) {
        return this.selectedFiles.has(fileNode);
    }

    removeSelection(fileNode) {
        this.selectedFiles.delete(fileNode);
    }

    addSelection(fileNode) {
        this.selectedFiles.add(fileNode);
    }

    clearSelection(fileNode) {
        let fileData = fileNode.fileData
        if (this.isSelected(fileNode)) {
            this.removeSelection(fileNode)
            fileNode.updateSelectionUi(false)
        }
        if (fileData.isFocused) fileTab.fileInfo.hideFileInfo()
        if (this.isNoFileSelected()) {
            this.isInSelectionMode = false
            this.updateMode()
        }
    }

    isNoFileSelected() {
        return this.selectedFiles.size == 0
    }

    inverseSelection(fileNode) {
        if (this.isSelected(fileNode)) {
            this.removeSelection(fileNode);
            return false;
        } else {
            this.addSelection(fileNode);
            return true;
        }
    }

    updateMode() {
        if (isFileInfoSideVisible) {
            this.normalModeDiv.style.display = 'flex';
            this.selectionModeDiv.style.display = 'none';
            this.fileInfoSelection.style.display = this.isInSelectionMode ? 'flex' : 'none';
        } else {
            if (this.isInSelectionMode) {
                this.normalModeDiv.style.display = 'none';
                this.selectionModeDiv.style.display = 'flex';
            } else {
                this.normalModeDiv.style.display = 'flex';
                this.selectionModeDiv.style.display = 'none';
            }
        }
    }

    cancelSelection() {
        for (const fileNode of this.selectedFiles) {
            const fileData = fileNode.fileData
            if (this.isSelected(fileNode)) {
                this.removeSelection(fileNode)
                fileNode.updateSelectionUi(false)
            }
            if (fileData.isFocused) fileInfo.showFileInfo(fileNode)
        }
        if (this.isNoFileSelected()) {
            this.isInSelectionMode = false
            this.updateMode()
        }
    }
}