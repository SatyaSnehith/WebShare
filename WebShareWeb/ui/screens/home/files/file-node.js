class FileNode {
    constructor(fileData) {
        this.fileData = fileData
    }

    focusDiv(b) {
        this.fileData.isFocused = b
        if (b) {
            this.fileDiv.style.backgroundColor = primaryTransparent
        } else {
            this.fileDiv.style.backgroundColor = ''
        }
    }

    updateSelectionUi(isSelected) {
        fileInfo.updateSelectedCountText()
        if (isSelected) {
            this.select()
        } else {
            this.unselect()
        }
        this.focusDiv(this.fileData.isFocused)
    }

    select() {
        this.selectSvg.style.display = "block"
        this.selectDiv.style.border = '0px'
        this.selectDiv.style.backgroundColor = 'var(--primary-color)'
    }

    unselect() {
        this.selectSvg.style.display = "none"
        this.selectDiv.style.border = '1px solid var(--unselect-color)'
        this.selectDiv.style.backgroundColor = 'transparent'
    }
    
}