class FileInfoNode {

    constructor(fileNode, fileInfoDiv) {
        this.fileNode = fileNode
        this.fileData = fileNode.fileData
        this.fileInfoDiv = fileInfoDiv
        $('downloadAllSide').onclick = () => this.onDownloadAllClicked()
        $('downloadZipSide').onclick = () => this.onDownloadZipClicked()
        $('cancelSelectionButtonSide').onclick = () => this.cancelSelection()
        this.addUI()
    }

    cancelSelection() {
        fileSelectionMode.cancelSelection()
    }

    onDownloadAllClicked() {
        fileSelectionMode.openSlectedFiles()
    }

    onDownloadZipClicked() {
        fileSelectionMode.downloadSelectedFiles()
    }

    addUI() {
        this.fileInfoDiv.innerHTML = ''
        let titleDiv = element('DIV')
        titleDiv.style.paddingBottom = '25px'
        titleDiv.style.display = 'flex'
        titleDiv.style.alignItems= 'flex-start';
        titleDiv.innerHTML = IconMap[this.fileData.type](2)
        this.fileInfoDiv.appendChild(titleDiv)
        let iconSvg = this.fileInfoDiv.getElementsByTagName('svg')[0];
        iconSvg.style.width = '16px'
        iconSvg.style.height = 'auto'
        iconSvg.style.margin = '8px 12px 0px 4px'

        let title = element('A')
        title.style.fontSize = '1.2em'
        title.style.color = 'var(--text-color)'
        title.style.wordBreak = 'break-word'
        title.style.fontWeight = '200'
        title.style.width = 'calc(100% - 32px)'
        title.innerHTML = this.fileData.name
        titleDiv.appendChild(title)

        let details = element('A')
        details.style.color = 'var(--text-color)'
        details.style.wordBreak = 'break-word'
        details.style.paddingBottom = '10px'
        details.style.fontWeight = '200'
        details.innerHTML = 'Details'
        this.fileInfoDiv.appendChild(details)
        this.fileInfoDiv.appendChild(this.getFileInfoTable())
        this.fileInfoDiv.appendChild(new Button(NewTabIcon, 'Open in new tab', () => utils.openFile(this.fileData.name, this.fileData.id, true)).div)
        this.fileInfoDiv.appendChild(new Button(CopyIcon, 'Get link', () => utils.copyUrl(this.fileData.id)).div)
        this.fileInfoDiv.appendChild(new Button(DownloadIcon, 'Download', () => utils.openFile(this.fileData.name, this.fileData.id, false)).div)
        this.fileInfoDiv.appendChild(new SelectButton(this.fileNode).div)
        // if (this.fileData.isDeletable) this.fileInfoDiv.appendChild(new Button(DeleteIcon, 'Delete', () => this.onDelete()).div)
    }

    getFileInfoTable() {
        let table = element("TABLE")
        table.style.width = '100%'
        table.style.marginBottom = '10px'
        // table.style.borderSpacing = '5px'
        let type = this.fileData.type
        if (type != undefined) {
            type = type.charAt(0).toUpperCase() + type.slice(1)
            table.appendChild(this.getFileInfoRow("Type", type))
        }
        let duration = this.fileData.duration
        if (duration != undefined)
            table.appendChild(this.getFileInfoRow("Duration", utils.getDurationString(duration)))
        let resolution = this.fileData.resolution
        if (resolution != undefined && resolution.length > 0)
            table.appendChild(this.getFileInfoRow("Resolution", resolution))
        let size = this.fileData.size
        if (size != undefined && size > 0)
            table.appendChild(this.getFileInfoRow("Size", utils.getSizeString(size)))
        let uploader = this.fileData.uploader
        if (uploader != undefined && uploader.length > 0)
            table.appendChild(this.getFileInfoRow("Uploader", uploader))
        let created = this.fileData.created
        if (created != undefined && created > 0)
            table.appendChild(this.getFileInfoRow("Created", utils.getTimeString(created)))
        return table
    }

    getFileInfoRow(key, value) {
        let tRow = element("TR")
        let tDataKey = element("TD")
        tDataKey.style.fontSize = '0.9em'
        tDataKey.style.fontWeight = '200'
        tDataKey.innerHTML = key
        tDataKey.style.color = 'var(--description-color)'
        tRow.appendChild(tDataKey)
        let tDataValue = element("TD")
        tDataValue.style.width = '60%'
        tDataValue.style.color = 'var(--text-color)'
        tDataValue.style.fontSize = '0.9em'
        tDataValue.style.fontWeight = '200'
        tDataValue.innerHTML = value
        tRow.appendChild(tDataValue)
        return tRow
    }

    onDelete() {
        const deleteDialog = new DeleteDialog()
        deleteDialog.show(() => {
            api.deleteFile(this.fileData.id, (res) => {
                deleteDialog.dismiss()
                if (res.isDeleted) {
                    utils.showSnack("File deleted")
                    this.fileNode.fileDiv.remove()
                    fileTab.updateContentVisibility()
                    fileSelectionMode.clearSelection(this.fileNode)
                    fileTab.updateMoreIfNotScrollable()
                } else {
                    utils.showSnack("File deletion failed")
                }
            })
        })
    }
}