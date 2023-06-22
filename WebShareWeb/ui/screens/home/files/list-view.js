class ListView extends FilesView {

    update(fileList) {
        fileTab.allFiles.style.display = 'inline-flex'
        this.addFiles(fileList)
    }

    addFiles(fileList) {
        for (let index = 0; index < fileList.length; ++index) {
            const file = fileList[index]
            let listFileNode = new ListFileNode(file)
            fileTab.allFiles.appendChild(listFileNode.fileDiv)
            if (file.isFocused == undefined) file.isFocused = false
            // if (file.isFocused) fileTab.list.focusedIndex = i
        }
    }

}