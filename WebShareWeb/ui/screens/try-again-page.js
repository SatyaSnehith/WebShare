class TryAgainPage extends Page {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('tryAgainDialog'), 'block')
        this.tryAgainButton = $("tryAgainButton")
        this.tryAgainTitle = $("tryAgainTitle")
        this.tryAgainImg = $("tryAgainImg")
        this.tryAgainDesc = $("tryAgainDesc")
    }

    close() {
        this.pageDiv.style.display = 'none';
    }

    update(info) {
        this.textIfValid(this.tryAgainTitle, info.title)
        this.imageIfValid(this.tryAgainImg, info.image)
        this.textIfValid(this.tryAgainDesc, info.description)
        this.tryAgainButton.onclick = () => {
            pageManager.loader();
            api.updateStatus();
        }
    }

    textIfValid(node, str) {
        if (utils.isValidString(str)) {
            node.innerHTML = str
            node.style.display = "block"
        } else {
            node.style.display = "none"
        }
    }

    imageIfValid(node, src) {
        if (utils.isValidString(src)) {
            node.src = src
            node.style.display = "block"
        } else {
            node.style.display = "none"
        }
    }

}