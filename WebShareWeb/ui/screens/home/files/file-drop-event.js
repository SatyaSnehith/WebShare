class FileDropEvent {
    constructor() {
        document.documentElement.addEventListener("drop", (ev) => this.onDrop(ev));
        document.documentElement.addEventListener("dragover", (ev) => this.onDragOver(ev));
        document.documentElement.addEventListener("dragleave", (ev) => this.onDragLeave(ev));
        $('dropToAddClose').onclick = () => fileTab.dropDiv(false)
    }

    isDroppable() {
        return 'draggable' in document.documentElement;
    }

    checkDropPlace(ev) {
        if (document.elementsFromPoint(ev.clientX, ev.clientY).some((div) => {
            return [fileTab.fileLoaderWrap, fileTab.allFiles, fileTab.noFilesDiv].includes(div);
        })) return true
        return false
    }

    onDragOver(ev) {
        ev.preventDefault();
        if (!this.checkDropPlace(ev)) {
            fileTab.dropDiv(false);
            return;
        }
        var hasFiles = ev.dataTransfer.types.includes("Files");
        log("onDragOver " + hasFiles);
        // log(ev);
        if (hasFiles) {
            fileTab.dropDiv(true);
        }
    }

    onDragLeave(ev) {
        if (!this.checkDropPlace(ev)) return;
        log("onDragLeave ");
        if(ev.fromElement != null || ev.relatedTarget != null) return;
        // log(ev);
        fileTab.dropDiv(false);
    }

    onDrop(ev) {
        ev.preventDefault();
        log(document.elementsFromPoint(ev.clientX, ev.clientY));
        if (!this.checkDropPlace(ev)) return;
        fileTab.dropDiv(false);
        var hasFiles = ev.dataTransfer.types.includes("Files");
        log("onDrop " + hasFiles);

        if (hasFiles) {
            const sendDialog = SendFileDialog.getInstance()
            if (!sendDialog.isShowing())
                sendDialog.show()

            if (ev.dataTransfer.files) {
                sendDialog.uploadFiles(ev.dataTransfer.files);
            }
        }
    }
}