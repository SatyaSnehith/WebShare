class Button {
    constructor(icon, text, onClick) {
        this.div = document.createElement('DIV')
        this.div.onclick = () => onClick()
        this.div.style.display = 'flex'
        this.div.style.borderRadius = '6px'
        this.div.style.backgroundColor = 'var(--secondaryBg-color)'
        this.div.style.padding = '10px'
        this.div.style.marginTop = '5px'
        this.div.classList.add('pointer')
        this.update(icon, text)
    }

    update(newIcon, newText) {
        this.div.innerHTML = newIcon
        let iconSvg = this.div.getElementsByTagName('svg')[0];
        iconSvg.style.width = '15px'
        iconSvg.style.height = 'auto'
        iconSvg.style.marginRight = '10px'

        let textA = document.createElement('A')
        textA.style.fontWeight = '200'
        textA.style.color = 'var(--text-color)'
        textA.innerHTML = newText
        this.div.appendChild(textA)
    }
}