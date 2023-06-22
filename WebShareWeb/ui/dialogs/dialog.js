class Dialog {
    constructor(dialogWrap) {
        this.dialogWrap = dialogWrap
    }

    show() {
        this.dialogWrap.style.opacity = 1;
        this.dialogWrap.style.display = 'block';
    }

    dismiss() {
        this.dialogWrap.style.opacity = 0;
        delay(450).then( () => {
            this.dialogWrap.style.display = 'none';
        })
    }

    isShowing() {
        return this.dialogWrap.style.display == 'block';
    }

    setCancellable() {
        this.dialogWrap.onclick = (event) => {
            if (event.target == this.dialogWrap) {
                this.dismiss()
            }
        }
    }
}
