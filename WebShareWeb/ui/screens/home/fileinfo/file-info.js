class FileInfo {
    constructor() {
        this.fileInfo = $('fileInfo')
        this.fileInfoSelect = $('fileInfoSelect')
        this.selectedCountText = $('selectedCountText')
        this.selectedCountTextSide = $('selectedCountTextSide')
        this.fileInfoBottomSheet = $('fileInfoBottomSheet')
    }
    
    hideFileInfo() {
        this.fileInfo.style.display = 'none';
        this.fileInfoSelect.style.display = 'flex';
    }

    updateSelectedCountText() {
        const count = fileSelectionMode.selectedFiles.size;
        let text = `${count} item${count == 1 ? '' : 's'} selected`
        if (isFileInfoSideVisible) {
            this.selectedCountTextSide.innerHTML = text;
        } else {
            this.selectedCountText.innerHTML = text;
        }
    }

    showFileInfo(fileNode) {
        this.fileInfo.style.display = 'flex';
        this.fileInfoSelect.style.display = 'none';
        if (isFileInfoSideVisible) {
            new FileInfoNode(fileNode, this.fileInfo)
        } else {
            if (!fileSelectionMode.isInSelectionMode) {
                const bottomSheet = FileInfoBottomSheet.getInstance()
                new FileInfoNode(fileNode, bottomSheet.sheet)
                bottomSheet.dialogWrap.scrollTop = 0
                bottomSheet.show()
            }
        }
    }
}