class MaxDialog extends Dialog {

    constructor(dialog, dialogWrap, sizeIcon, closeIcon) {
        super(dialogWrap)
        this.dialog = dialog
        this.sizeIcon = sizeIcon
        this.sizeIcon.onclick = () => this.reverseDialogSize()
        closeIcon.onclick = () => this.dismiss()
        this.isFullScreen = false
        log("isFullScreen " + this.isFullScreen);
    }

    show() {
        super.show()
        this.updateSize()
    }

    reverseDialogSize() {
        this.isFullScreen = !(this.isFullScreen)
        this.updateSize()
    }

    updateSize() {
        if (this.isFullScreen) {
            this.maximize();
        } else {
            this.minimize();
        }
    }

    minimize() {
        this.isFullScreen = false
        delay(450).then( () => {
            this.dialogWrap.classList.remove("page");
        })
        this.dialog.style.removeProperty("width");
        this.dialog.style.removeProperty("max-height");
        this.dialog.style.removeProperty("border-radius");
        this.sizeIcon.innerHTML = MaximizeIcon;
    }

    maximize() {
        this.isFullScreen = true
        this.dialogWrap.classList.add("page");
        this.dialog.style.width = "100%";
        this.dialog.style.maxHeight = "100%";
        this.dialog.style.borderRadius = "0px";
        this.sizeIcon.innerHTML = MinimizeIcon;
    }
}