class ListFileNode extends FileNode {

    constructor(fileData) {
        super(fileData)
        this.createFileNode()
    }

    onClick() {
        fileTab.fileView.onClick(this)
    }

    createFileNode() {
        let div = document.createElement("DIV")
        let iconDiv = document.createElement("DIV")
        let infoDiv = document.createElement("DIV")
        this.selectDiv = document.createElement("DIV")

        div.style.width = '100%'
        div.style.height = '60px'
        div.style.borderBottom = '1px solid var(--border-color)'
        div.style.display = 'flex'
        div.classList.add("pointer")
        div.tabIndex = fileTab.allFiles.childElementCount

        let iconWrapDiv = document.createElement('DIV')
        iconWrapDiv.onclick = () => this.onClick()
        div.appendChild(iconWrapDiv)

        iconDiv.style.width = '50px'
        iconDiv.style.height = '50px'
        iconDiv.style.margin = '5px 10px'
        iconDiv.style.borderRadius = '6px'
        iconDiv.style.position = 'relative'
        // iconDiv.style.backgroundColor = 'var(--secondaryBg-color)'
        iconDiv.style.display = 'flex'
        // iconDiv.style.backgroundColor = '#000000'
        iconWrapDiv.appendChild(iconDiv)

        utils.addImage(iconDiv, this.fileData, false)

        infoDiv.style.width = 'calc(100% - 124px)'
        infoDiv.style.height = '60px'
        infoDiv.style.display = 'flex'
        infoDiv.style.alignSelf = 'center'
        infoDiv.style.flexDirection = 'column'
        infoDiv.style.justifyContent = 'center'
        infoDiv.style.alignSelf = 'center'
        infoDiv.onclick = () => this.onClick()

        div.appendChild(infoDiv)

        let fileNameA = document.createElement('A')
        fileNameA.style.color = 'var(--text-color)'
        fileNameA.style.fontWeight = '200'
        fileNameA.style.overflow = 'hidden'
        fileNameA.style.textOverflow = 'ellipsis'
        fileNameA.style.display = 'block'
        fileNameA.style.whiteSpace = 'nowrap'
        fileNameA.innerHTML = this.fileData.name
        infoDiv.appendChild(fileNameA)

        let descriptionDiv = document.createElement('DIV')
        descriptionDiv.style.position = 'relative'
        infoDiv.appendChild(descriptionDiv)

        let uploaderA = document.createElement('A')
        uploaderA.style.color = 'var(--description-color)'
        uploaderA.style.fontWeight = '200'
        uploaderA.style.fontSize = '0.8em'
        uploaderA.innerHTML = this.fileData.uploader
        descriptionDiv.appendChild(uploaderA)

        let sizeA = document.createElement('A')
        sizeA.style.color = 'var(--description-color)'
        sizeA.style.fontWeight = '200'
        sizeA.style.fontSize = '0.8em'
        sizeA.style.float = 'right'

        sizeA.innerHTML = utils.getSizeString(this.fileData.size)
        descriptionDiv.appendChild(sizeA)
        let selectWrapDiv = document.createElement('DIV')
        selectWrapDiv.onclick = () => {
            fileSelectionMode.selectFileNode(this)
        }

        this.selectDiv.style.width = '16px'
        this.selectDiv.style.height = '16px'
        this.selectDiv.style.margin = '20px 18px'
        this.selectDiv.style.borderRadius = '8px'
        this.selectDiv.style.display = 'flex'
        this.selectDiv.style.justifyContent = 'center'
        this.selectDiv.innerHTML = TickIcon
        selectWrapDiv.appendChild(this.selectDiv)

        this.selectSvg = this.selectDiv.getElementsByTagName('svg')[0];
        this.selectSvg.style.margin = 'auto'
        // svg.style.transform = 'translateY(1px)'
        this.fileDiv = div
        div.appendChild(selectWrapDiv)

        this.updateSelectionUi(fileSelectionMode.isSelected(this.fileData.id))

    }

}