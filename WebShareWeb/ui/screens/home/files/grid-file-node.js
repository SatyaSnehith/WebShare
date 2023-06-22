class GridFileNode extends FileNode {
    constructor(fileData) {
        super(fileData)
        this.createFileNode()
    }

    onClick() {
        fileTab.fileView.onClick(this)
    }

    createFileNode() {
        let div = document.createElement("DIV")
        let topDiv = document.createElement("DIV")
        let nameDiv = document.createElement("DIV")
        let nameA = document.createElement("A")
        this.selectDiv = document.createElement("DIV")

        div.style.margin = '5px'
        div.style.border = '1px solid var(--border-color)'
        div.style.borderRadius = '6px'
        div.style.width = 'auto'
        div.style.height = '140px'
        // div.style.flexGrow = '1'
        div.classList.add("pointer")
        div.tabIndex = fileTab.allFiles.childElementCount
        div.onclick = () => this.onClick()
        topDiv.style.width = 'auto'
        topDiv.style.height = 'calc(100% - 40px)'
        topDiv.style.position = 'relative'
        topDiv.style.display = 'flex'
        // topDiv.style.backgroundColor = primaryTransparent
        div.appendChild(topDiv)

        utils.addImage(topDiv, this.fileData, true)

        nameDiv.style.width = 'auto'
        nameDiv.style.height = '40px'
        nameDiv.style.display = 'flex'
        nameDiv.style.alignItems = 'center'
    
        div.appendChild(nameDiv)

        nameA.style.color = 'var(--text-color)'
        nameA.style.fontWeight = '200'
        nameA.style.margin = '0px 5px'
        nameA.style.width = 'calc(100% - 10px)'
        nameA.style.overflow = 'hidden'
        nameA.style.textOverflow = 'ellipsis'
        nameA.style.whiteSpace = 'nowrap'

        nameA.innerHTML = this.fileData.name
        nameDiv.appendChild(nameA)

        this.selectDiv.style.width = '16px'
        this.selectDiv.style.height = '16px'
        this.selectDiv.style.position = 'absolute'
        this.selectDiv.style.right = '10px'
        this.selectDiv.style.bottom = '10px'
        this.selectDiv.style.borderRadius = '8px'
        this.selectDiv.style.display = 'flex'
        this.selectDiv.style.justifyContent = 'center'
        this.selectDiv.innerHTML = TickIcon
        this.selectSvg = this.selectDiv.getElementsByTagName('svg')[0];
        this.selectSvg.style.margin = 'auto'
        // svg.style.transform = 'translateY(1px)'
        topDiv.appendChild(this.selectDiv)
        this.fileDiv = div
        this.updateSelectionUi(fileSelectionMode.isSelected(this.fileData.id))
    }

    select() {
        super.select()
        this.fileDiv.style.border = '1px solid var(--primary-color)'
    }

    unselect() {
        super.unselect()
        this.fileDiv.style.border = '1px solid var(--border-color)'
    }
}