class Page {
    constructor(pageDiv, displayType = 'flex') {
        this.pageDiv = pageDiv
        this.displayType = displayType
        this.enterAnim = ''
        this.exitAnim = ''
    }

    isOpen() {
        return this.pageDiv.style.display == this.displayType;
    }

    open() {
        this.enterAnimation()
        this.pageDiv.style.display = this.displayType;
    }

    close() {
        this.exitAnimation(() => {
            this.pageDiv.style.display = 'none';
        })
    }

    loadData() {

    }

    animate(name) {
        if (name.length == 0) return
        if (this.enterAnim.length > 0) this.pageDiv.classList.remove(this.enterAnim);
        if (this.exitAnim.length > 0) this.pageDiv.classList.remove(this.exitAnim);
        void this.pageDiv.offsetWidth;
        this.pageDiv.classList.add(name);
    }

    enterAnimation() {
        this.animate(this.enterAnim)
    }

    exitAnimation(onFinish) {
        this.animate(this.exitAnim)
        delay(250).then(() => onFinish())
    }
}