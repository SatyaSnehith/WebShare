class GridView extends FilesView {

    update(fileList) {
        fileTab.allFiles.style.display = 'inline-grid'
        this.refreshSize()
        this.addFiles(fileList)
    }

    addFiles(fileList) {
        for (let index = 0; index < fileList.length; ++index) {
            const file = fileList[index]
            let gridFile = new GridFileNode(file)
            fileTab.allFiles.appendChild(gridFile.fileDiv)
            if (file.isFocused == undefined) file.isFocused = false
            // if (file.isFocused) this.focusedIndex = i
        }
    }

    refreshSize() {
        let parentWidth = fileTab.allFiles.offsetWidth - 30
        let count = Math.floor(parentWidth / 135)
        let size = (parentWidth / count)
        fileTab.allFiles.style.gridTemplateColumns = 'repeat(' + count + ', ' + size + 'px)'
    }

}
