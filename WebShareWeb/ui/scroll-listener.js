class ScrollListener {

    constructor(div, onBottomScrolled) {
        this.div = div
        this.scrollUntil = 60
        this.onBottomScrolled = () => { onBottomScrolled() }
        this.isBottomScrolled = false
        this.div.onscroll = () => this.onScroll()
    }

    onScroll() {
        if (this.div.scrollHeight - (this.div.offsetHeight + this.div.scrollTop) <= this.scrollUntil && !this.isBottomScrolled) {
            this.isBottomScrolled = true;
            this.onBottomScrolled()
        }
        if (this.div.scrollHeight - (this.div.offsetHeight + this.div.scrollTop) > this.scrollUntil)
            this.isBottomScrolled = false;
    }

    checkBottomScrolled() {
        log(`scrollHeight: ${this.div.scrollHeight} offsetHeight: ${this.div.offsetHeight} scrollTop: ${this.div.scrollTop}`);
        return this.div.scrollHeight - (this.div.offsetHeight + this.div.scrollTop) > this.scrollUntil
    }
}