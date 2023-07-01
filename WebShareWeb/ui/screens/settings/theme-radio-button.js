class ThemeRadioButton {

    constructor(radio) {
        this.radio = radio
        this.unselectedColor = '#AAAAAA'
        const radioDiv = element('DIV')
        radioDiv.classList.add("pointer")
        radioDiv.style.width = '60px'
        radioDiv.style.height = '60px'
        radioDiv.style.display = "flex"
        radioDiv.style.flexDirection = "column"
        radioDiv.style.justifyContent = "space-between"
        radioDiv.style.marginLeft = "10px"
        radioDiv.innerHTML = radio.icon
        let svg = radioDiv.getElementsByTagName('svg')[0];
        this.path = svg.getElementsByTagName('path')[0];
        svg.style.height = '18px'
        svg.style.margin = 'auto'
        this.textA = element('A')
        this.textA.style.height = '20px'
        this.textA.style.fontSize = '0.8em'
        this.textA.style.color = ''
        this.textA.style.textAlign = 'center'
        this.textA.style.borderRadius = '6px'
        radioDiv.appendChild(this.textA)
        this.updateSelectionUi()
        this.div = radioDiv
    }

    updateSelectionUi() {
        if (this.radio.isSelected()) {
            this.path.style.fill = 'var(--primary-color)'
            this.textA.style.color = 'white'
            this.textA.style.backgroundColor = 'var(--primary-color)'
        } else {
            this.path.style.fill = this.unselectedColor
            this.textA.style.color = this.unselectedColor
            this.textA.style.backgroundColor = 'transparent'
        }
        this.textA.innerHTML = this.radio.text
    }
}