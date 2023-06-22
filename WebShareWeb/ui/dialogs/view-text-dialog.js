class ViewTextDialog extends MaxDialog {
    constructor() {
        super($('viewTextDialog'), $('viewTextDialogWrap'), $('viewTextMaximizeIcon'), $('viewTextcloseButton'))
        this.viewTextButtons = $('viewTextButtons')
        this.deleteTextIcon = $('deleteTextIcon')
        this.copyTextIcon = $('copyTextIcon')
        this.viewTextDiv = $('viewTextDiv')    
    }

    show(textDiv, textData) {
        this.viewTextDiv.innerHTML = ''
        this.viewTextDiv.scrollTop = 0
        this.viewTextDiv.appendChild(textTab.createTextDiv(textData, true))
        this.textData = textData
        this.textDiv = textDiv
        // pageManager.copyTextIcon.onclick = () => {
        //     navigator.clipboard.writeText(text.data).then(function() {
        //         utils.showSnack('Copied to clipboard');
        //       }, function(err) {
        //         utils.showSnack('Could not copy text');
        //       });
        // }
        this.deleteDialog = new DeleteDialog()
        this.deleteTextIcon.style.display = textData.isDeletable ? 'block' : 'none'
        if (textData.isDeletable) this.deleteTextIcon.onclick = () => this.openDeleteDialog()
        this.isFullScreen = false
        super.show()
    }

    openDeleteDialog() {
        this.deleteDialog.show(() => {
            api.deleteText(this.textData.id, (res) => {
                this.deleteDialog.dismiss()
                if (res.isDeleted) {
                    this.dismiss()
                    utils.showSnack("Text deleted")
                    this.textDiv.remove()
                } else {
                    utils.showSnack("Text deletion failed")
                }
            })
        })
    }

    dismiss() {
        super.dismiss()
        this.minimize()
    }

    maximize() {
        this.dialog.style.removeProperty("height");
        super.maximize();
    }

    minimize() {
        if (this.dialog.style.width == "100%") {
            delay(450).then(() => {
                if (this.viewTextButtons.offsetTop + 10 + this.viewTextButtons.offsetHeight < this.dialog.offsetHeight) {
                    this.dialog.style.height = 'max-content';
                }
            })
        } else {
            if (this.viewTextButtons.offsetTop + 10 + this.viewTextButtons.offsetHeight < this.dialog.offsetHeight) {
                this.dialog.style.height = 'max-content';
            }
        }
        super.minimize();
        if (!this.isFullScreen && 
            !this.dialogWrap.classList.contains('page') &&
            this.viewTextDiv.offsetHeight == this.viewTextDiv.scrollHeight) {
                this.sizeIcon.innerHTML = '';
        }
    }
}