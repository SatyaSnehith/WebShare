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
                    const textTab = TextTab.getInstance()
                    if (textTab.textContentDiv.childElementCount == 0) {
                        textTab.noText();
                    }
                } else {
                    utils.showSnack("Text deletion failed")
                }
            })
        })
    }
}