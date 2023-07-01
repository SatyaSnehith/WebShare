class TabsNode {

    constructor(onTabClick) {
        this.onTabClick = (key) => onTabClick(key)
        this.main = $('categories')
        this.main.innerHTML = ''
        this.main.style.paddingLeft = '20px'
        this.main.style.backgroundColor = "var(--primary-color)"
        this.main.style.borderRadius = '0px 0px 6px 6px'
        this.stateButtons = new Map();

        this.addButton('file', 'FILE')
        this.addButton('text', 'TEXT')

        this.currentElement = 'file'
        this.stateButtons[this.currentElement].updateSelectionUi(true)
    }

    addButton(key, text) {
        const stateButton = this.getStateButton(key, text)
        this.main.appendChild(stateButton.div)
        const self = this
        stateButton.div.onclick = () => this.onClick(key)
        this.stateButtons[key] = stateButton
    }

    getStateButton(key, text) {
        const title = element("A");
        title.innerHTML = text
        title.style.width = 'auto';
        title.style.height = 'auto';
        title.style.display = 'inline-flex'
        title.style.alignItems = 'center'
        title.classList.add('pointer')
        title.style.fontSize = '1em'
        title.style.fontWeight= '500'
        title.style.padding = '8px';
        title.style.marginLeft = '15px'
        title.style.textDecoration = 'none';
        title.style.color = "var(--text-color)"
        const stateButton = {
            key: key,

            updateSelectionUi: function(selected) {
                if (selected) {
                    title.style.color = "var(--icon-color)"
                    title.style.fontWeight = "500"
                }
                else {
                    title.style.color = "#CECECE"
                    title.style.fontWeight = "300"
                }
            },

            div: title
        }
        stateButton.updateSelectionUi(false)

        return stateButton
    }

    show(type) {
        this.stateButtons[this.currentElement].updateSelectionUi(false)
        this.currentElement = type
        this.stateButtons[this.currentElement].updateSelectionUi(true)
    }

    onClick(type) {
        this.show(type)
        this.onTabClick(type)
    }
}
