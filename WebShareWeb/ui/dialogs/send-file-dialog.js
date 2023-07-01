const fileStates = {
    progress: 0,
    completed: 1,
    cancelled: 2,
}
class SendFileDialog extends MaxDialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('sendDialog'), $('sendDialogWrap'), $('sendDialogMaximizeIcon'), $('sendDialogClose'))
        this.availableFiles = $('availableFiles')
        this.myFilesWrap = $('myFilesWrap')
        this.currentSentDiv = $('currentSentDiv')
        this.sentDiv = $('sentDiv')
        this.noSendFilesDiv = $('noSendFilesDiv')
        this.sendFileLoader = $('sendFileLoader')
        this.sendDialogAddButton = $('sendDialogAddButton')

        this.visibility = new Visibility(this.myFilesWrap, this.noSendFilesDiv, this.sendFileLoader, 'flex')
        new ScrollListener(this.myFilesWrap, () => this.updateMoreMyFiles())

        this.myFileLastId = -1
        this.myFilesMinCount = 30

    }

    show() {
        super.show()
        this.init()
    }

    init() {
        this.myFilesWrap.scrollTop = 0
        this.clear();
        this.myFilesMinCount = this.getMinimumMyFilesCountToDisplay();
        this.getMyFiles();
        this.sendDialogAddButton.onclick = () => {
            fileTab.onSendFileButtonClicked();
        }
        this.availableFiles.innerHTML = "";
        api.getUploadInfo((res) => {
            var uploadDisabledText = (res.isUploadAvailable == false) ? "Upload Disabled, " : ""
            this.availableFiles.innerHTML = uploadDisabledText + "Available files: " + res.availableCount;
        })
    }

    dismiss() {
        super.dismiss()
        Home.getInstance().loadData();
    }

    getMinimumMyFilesCountToDisplay() {
        let count;
        let height = this.myFilesWrap.offsetHeight;
        if (height == 0) height = document.documentElement.clientHeight - 110;
        count = Math.floor(height / 61) + 4;
        return count;
    }

    getMyFileApiBody() {
        return {
            count: this.myFilesMinCount,
            fromId: this.myFileLastId,
        };
    }

    getMyFiles() {
        this.myFileLastId = -1;
        if (api.isTest) fileTab.sampleData.resetFiles()
        this.visibility.loading();
        if (api.isTest) {
            return new Promise((resolve, reject) => setTimeout(() => {
                this.onFiles(fileTab.sampleData.getSampleFiles(this.getMyFileApiBody()));
            }, api.testLoadTime));
        } else {
            api.xhrAuthPost(ApiMyFiles, this.getMyFileApiBody(), (res) => this.onFiles(res));
        }
    }

    updateMoreMyFiles() {
        if (api.isTest) {
            return new Promise((resolve, reject) => setTimeout(() => {
                this.onMoreFiles(fileTab.sampleData.getSampleFiles(this.getMyFileApiBody()));
            }, api.testLoadTime));
        } else {
            api.xhrAuthPost(ApiMyFiles, this.getMyFileApiBody(), (res) => this.onMoreFiles(res));
        }
    }

    clear() {
        let removeChild = []
        for (let i = 0; i < this.currentSentDiv.children.length; ++i) {
            let child = this.currentSentDiv.children[i];
            if (child.fileElement.state == fileStates.completed) removeChild.push(child);
        }
        for (let i = 0; i < removeChild.length; ++i) removeChild[i].remove();
        this.sentDiv.innerHTML = '';
    }
 
    onFiles(res) {
        this.addMyFiles(res);
        this.updateContentVisibility();
    }

    onMoreFiles(res) {
        this.addMyFiles(res);
    }

    updateMoreIfNotScrollable() {
        log("updateMoreIfNotScrollable");
        if (this.myFilesWrap.offsetHeight >= this.myFilesWrap.scrollHeight) {
            this.updateMoreMyFiles();
        }
    }

    updateContentVisibility() {
        if (this.currentSentDiv.childElementCount == 0 && this.sentDiv.childElementCount == 0) this.visibility.noContent();
        else this.visibility.content();
    }

    addMyFiles(myFiles) {
        if (myFiles.length == 0) return;
        this.myFileLastId = myFiles[myFiles.length - 1].id;
        for (let i = 0; i < myFiles.length; ++i) {
            this.addCompletedFile(myFiles[i]);
        }
    }

    uploadFiles(files) {
        for (let i = 0; i < files.length; ++i) {
            const sysFile = files[i];
            const fileElement = this.addProgressFile({
                name: sysFile.name,
                type: utils.getType(sysFile),
                size: sysFile.size,
            })
            this.updateContentVisibility();
            let formdata = new FormData();
            formdata.append(":" + sysFile.size, sysFile);
            let post = new XMLHttpRequest();
            fileElement.xhr = post;
            post.open("POST", "/api/upload-file");
            post.setRequestHeader("Authorization", "Basic " + api.accountId);
            post.upload.addEventListener("progress", (event) => {
                fileElement.updateProgress(Math.floor((event.loaded / event.total) * 100));
                if (fileElement.lastLoaded != 0) {
                    const loadedDif = event.loaded - fileElement.lastLoaded;
                    const multiplyBy = 1000 / (Date.now() - fileElement.lastLoadedTime);
                    const speed = Math.floor(loadedDif * multiplyBy);
                    fileElement.updateSpeed(speed);
                }
                fileElement.lastLoaded = event.loaded;
                fileElement.lastLoadedTime = Date.now();
            }, false);
            post.addEventListener("load", (event) => {
                log("status: " + post.status + " readyState: " + post.readyState + " responseText: " + post.respo);
                if (post.readyState === 4 && post.status == 200) {
                    const res = JSON.parse(post.responseText);
                    if (res.isSuccess) {
                        if (res.file.id < files.myFileLastId) files.myFileLastId = res.file.id;
                        this.updateCompletedState(fileElement, res.file);
                    } else {
                        this.updateCancelledState(fileElement);
                    }
                }
            }, false);
            post.addEventListener("error", (event) => {
                this.updateCancelledState(fileElement);
            }, false);
            post.addEventListener("abort", (event) => {
                this.updateCancelledState(fileElement);
            }, false);
            post.send(formdata);
      }
    }

    updateCancelledState(fileElement) {
        this.addFile(fileElement.div, fileStates.cancelled, fileElement.file);
    }

    updateCompletedState(fileElement, file) {
        this.addFile(fileElement.div, fileStates.completed, file);
    }

    addProgressFile(file) {
        const fileElement = this.addFile(element("DIV"), fileStates.progress, file);
        if (this.currentSentDiv.childElementCount == 0) {
            this.currentSentDiv.appendChild(fileElement.div);
        } else {
            this.currentSentDiv.insertBefore(fileElement.div, this.currentSentDiv.children[0]);
        }
        return fileElement;
    }

    addCompletedFile(file) {
        const fileElement = this.addFile(element("DIV"), fileStates.completed, file);
        this.sentDiv.appendChild(fileElement.div);
    }

    addFile(div, state, file) {
        div.innerHTML = '';
        let iconDiv = element("DIV");
        let infoDiv = element("DIV");
        let progressBar = element("DIV");
        let progressDiv = element("DIV");

        let fileElement = {
            lastLoaded: 0,
            lastLoadedTime: 0,
            file: file,
            progress: 0,
            state: state,

            updateProgress(progress) {
                this.progress = progress;
                const percentText = progress + "%";
                progressDiv.style.width = percentText;
                percent.innerHTML = percentText;
            },

            updateSpeed(speed) {
                speedText.innerHTML = utils.getSizeString(speed) + "/s";
            },

            div: div
        };
        div.fileElement = fileElement;
        div.style.width = '100%';
        div.style.height = '60px';
        // div.style.borderBottom = '1px solid var(--border-color)';
        div.style.display = 'flex';
        div.classList.add("pointer");
        // div.tabIndex = index

        let iconWrapDiv = element('DIV');
        // iconWrapDiv.onclick = () => list.onClick(index)
        div.appendChild(iconWrapDiv);

        iconDiv.style.width = '50px';
        iconDiv.style.height = '50px';
        iconDiv.style.margin = '5px 10px';
        iconDiv.style.borderRadius = '6px';
        iconDiv.style.position = 'relative';
        iconDiv.style.display = 'flex';
        iconWrapDiv.appendChild(iconDiv);

        if (state == fileStates.completed)
            utils.addImage(iconDiv, file, false);
        else
            utils.addIcon(iconDiv, file, 20);

        infoDiv.style.flexGrow = '1';
        infoDiv.style.maxWidth = 'calc(100% - 130px)';
        infoDiv.style.height = '60px';
        infoDiv.style.display = 'flex';
        infoDiv.style.alignSelf = 'center';
        infoDiv.style.flexDirection = 'column';
        infoDiv.style.justifyContent = 'center';
        infoDiv.style.alignSelf = 'center';
        // infoDiv.onclick = () => this.onClick(index)

        div.appendChild(infoDiv);

        let fileNameA = element('A');
        fileNameA.style.color = 'var(--text-color)';
        fileNameA.style.fontWeight = '200';
        fileNameA.style.overflow = 'hidden';
        fileNameA.style.textOverflow = 'ellipsis';
        fileNameA.style.display = 'block';
        fileNameA.style.whiteSpace = 'nowrap';
        fileNameA.innerHTML = file.name;
        infoDiv.appendChild(fileNameA);

        if (state == fileStates.progress) {
            const progressBarHeight = 5;
            progressBar.style.width = 'auto';
            progressBar.style.height = progressBarHeight + "px";
            progressBar.style.borderRadius = progressBarHeight / 2 + "px";
            progressBar.style.backgroundColor = 'var(--secondaryBg-color)';
            progressBar.style.marginTop = '5px';
    
            progressDiv.style.width = "0%";
            progressDiv.style.height = progressBarHeight + "px";
            progressDiv.style.borderRadius = progressBarHeight / 2 + "px";
            progressDiv.style.backgroundColor = "var(--primary-color)";
            progressBar.appendChild(progressDiv);
            infoDiv.appendChild(progressBar);
        }

        let descriptionDiv = element('DIV');
        descriptionDiv.style.position = 'relative';
        infoDiv.appendChild(descriptionDiv);

        let fileSize = element('A');
        fileSize.style.color = 'var(--description-color)';
        fileSize.style.fontWeight = '200';
        fileSize.style.fontSize = '0.8em';
        fileSize.innerHTML = utils.getSizeString(file.size) + (state == fileStates.progress ? " • " : "");
        descriptionDiv.appendChild(fileSize);

        let speedText = element('A');
        if (state == fileStates.progress) {
            speedText.style.color = 'var(--description-color)';
            speedText.style.fontWeight = '200';
            speedText.style.fontSize = '0.8em';
            speedText.innerHTML = '0 KB/s';
            descriptionDiv.appendChild(speedText);
        }

        let percent = element('A');
        if (state != fileStates.completed) {
            percent.style.color = 'var(--description-color)';
            percent.style.fontSize = '0.8em';
            percent.style.float = 'right';
            if (state == fileStates.cancelled) {
                percent.innerHTML = 'Cancelled'
                percent.style.color = '#F44336';
                percent.style.fontWeight = '400';
                percent.style.marginRight = '10px'
            } else {
                percent.innerHTML = '0%';
                percent.style.fontWeight = '200';
            }
            descriptionDiv.appendChild(percent);
        }

        if (state != fileStates.cancelled) {
            if (state == fileStates.completed) {
                let deleteImage = element("IMG");
                deleteImage.style.width = '40px';
                deleteImage.style.height = '40px';
                deleteImage.style.margin = '10px';
                deleteImage.style.borderRadius = '20px';
                deleteImage.style.display = 'flex';
                deleteImage.style.justifyContent = 'center';
                deleteImage.style.padding = "10px";
                deleteImage.style.boxSizing = 'border-box';
                deleteImage.style.backgroundColor = "#F443361A";
                deleteImage.onclick = () => {
                    const dialog =  DeleteDialog.getInstance()
                    dialog.show(() => {
                        api.deleteFile(file.id, (res) => {
                            dialog.dismiss()
                            if (res.isDeleted) {
                                utils.showSnack("File deleted");
                                div.remove();
                                this.updateContentVisibility();
                                this.updateMoreIfNotScrollable();
                            } else {
                                utils.showSnack("File deletion failed");
                            }
                        })
                    })
                };
                deleteImage.src = 'images/remove_red.svg';
                div.appendChild(deleteImage);
            } else {
                let cancelDiv = element("DIV");
                cancelDiv.style.width = '40px';
                cancelDiv.style.height = '40px';
                cancelDiv.style.margin = '10px';
                cancelDiv.style.borderRadius = '20px';
                cancelDiv.style.display = 'flex';
                cancelDiv.style.justifyContent = 'center';
                cancelDiv.style.padding = "10px";
                cancelDiv.style.boxSizing = 'border-box';
                cancelDiv.style.backgroundColor = "var(--secondaryBg-color";
                cancelDiv.innerHTML = FileCloseIcon;
                let svg = cancelDiv.getElementsByTagName('svg')[0];
                svg.style.width = '12px';
                svg.style.height = '12px';
                svg.style.paddingTop = '4px';
                cancelDiv.onclick = () => fileElement.xhr.abort();
                div.appendChild(cancelDiv);
            }
        }
        return fileElement
    }
}