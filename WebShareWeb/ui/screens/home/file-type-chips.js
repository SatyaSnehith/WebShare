class FileTypeChips {

    constructor() {
        this.div = $('fileTypeChips')
        this.chips = [
            {
                name: "Image",
                type: "image",
                isSelected: false
            },
            {
                name: "Video",
                type: "video",
                isSelected: false
            },
            {
                name: "Audio",
                type: "audio",
                isSelected: false
            },
            {
                name: "Document",
                type: "document",
                isSelected: false
            },
            {
                name: "App",
                type: "app",
                isSelected: false
            }
        ]
        this.addUI()
    }

    addUI() {
        this.div.innerHTML = ''
        this.div.style.display = 'flex'
        this.div.style.alignItems = 'center'
        this.div.style.overflowY = 'auto'
        this.div.style.paddingRight = '10px'
        this.div.classList.add('thinScrollBar')
        for (let chip of this.chips) {
            this.div.appendChild(this.getChipDiv(chip))
        }
    }

    getFilterList() {
        let list = []
        for (let chip of this.chips) {
            if (chip.isSelected) {
                list.push(chip.type)
            }
        }
        if (list.length == 0) return null
        else return list
    }

    getChipDiv(chip) {
        let div = element('DIV')
        let name = element('A')
        let closeImg = element('DIV')

        div.classList.add('pointer')
        div.style.display = 'flex'
        div.style.padding = '5px 10px'
        div.style.borderRadius = '6px'
        div.style.backgroundColor = primary + '26'
        div.style.marginLeft = '10px'

        name.style.color = 'var(--text-color)'
        name.style.whiteSpace = 'nowrap'
        name.style.fontWeight = '200'
        name.style["-webkit-user-select"] = 'none'
        name.style["-ms-user-select"] = 'none'
        name.style["user-select"] = 'none'
        name.innerHTML = chip.name
        div.appendChild(name)

        closeImg.style.marginLeft = '5px'
        closeImg.innerHTML = CloseIcon
        let svg = closeImg.getElementsByTagName('svg')[0];
        svg.style.width = '10px'
        svg.style.height = '10px'

        const updateSelectionUi = () => {
            if (chip.isSelected) {
                div.style.border = '1px solid ' + primary + utils.percentToHex(80)
                div.style.backgroundColor = primary + utils.percentToHex(30)
                closeImg.style.display = 'block'
            } else {
                div.style.border = '1px solid ' + primary + utils.percentToHex(50)
                div.style.backgroundColor = ''
                closeImg.style.display = 'none'
            }
        }
        updateSelectionUi()

        div.onclick = () => {
            chip.isSelected = !chip.isSelected
            updateSelectionUi()
            fileTab.loadData()
        }

        div.appendChild(closeImg)

        return  div;
    }
}
