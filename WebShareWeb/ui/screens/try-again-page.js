class TryAgainPage extends Page {
    static instance = null

    static getInstance() {
        if (this.instance == null) {
            this.instance = new this()
        }
        return this.instance
    }

    constructor() {
        super($('tryAgainDialog'), 'block')
        this.tryAgainButton = $("tryAgainButton")
        this.tryAgainTitle = $("tryAgainTitle")
        this.tryAgainImg = $("tryAgainImg")
        this.tryAgainDesc = $("tryAgainDesc")
    }

    update(info) {
        this.textIfValid(this.tryAgainTitle, info.title)
        this.imageIfValid(this.tryAgainImg, info.image)
        this.textIfValid(this.tryAgainDesc, info.description)
        this.tryAgainButton.onclick = () => {
            PageManager.getInstance().loader();
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