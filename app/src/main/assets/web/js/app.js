// File: declare.js
const $ = q => document.getElementById(q)

const element = t => document.createElement(t)

function log(str) {
    if (api.isTest) console.log(str)
}

var fileTab = undefined
var fileSelectionMode = undefined
var fileInfo = undefined

var textTab = undefined
// File: theme.js
class Theme {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        this.bodyElement = document.body
        this.authThemeChange = $('authThemeChange')
    
        this.DarkTheme = "darkTheme"
        this.LightTheme = "lightTheme"
        this.theme = localStorage['theme']

        if(this.theme == this.LightTheme) {
            this.light();
        } else if (this.theme == this.DarkTheme) {
            this.dark();
        } else {
            this.light();
        }
    }

    dark() {
        this.theme = this.DarkTheme;
        this.bodyElement.classList.remove(this.LightTheme);
        this.bodyElement.classList.add(this.DarkTheme);
        authThemeChange.src = 'images/sun.svg';
        localStorage.setItem('theme', this.theme);
    }

    light() {
        this.theme = this.LightTheme;
        this.bodyElement.classList.remove(this.DarkTheme);
        this.bodyElement.classList.add(this.LightTheme);
        authThemeChange.src = 'images/moon.svg';
        localStorage.setItem('theme', this.theme);
    }

    inverseTheme() {
        if(this.theme == this.LightTheme) {
            this.dark();
        } else if (this.theme == this.DarkTheme) {
            this.light();
        }
    }

    isLightTheme() { return this.theme == this.LightTheme; }

    isDarkTheme() { return this.theme == this.DarkTheme; }
};
// File: ui/visibility.js
class Visibility {
    constructor(contentDiv, noContentDiv, progressDiv, displayType) {
        this.contentDiv = contentDiv
        this.noContentDiv = noContentDiv
        this.progressDiv = progressDiv
        this.displayType = displayType
    }

    content() {
        this.contentDiv.style.display = this.displayType;
        this.noContentDiv.style.display = 'none';
        this.progressDiv.style.display = 'none';
    }

    noContent() {
        this.contentDiv.style.display = 'none';
        this.noContentDiv.style.display = this.displayType;
        this.progressDiv.style.display = 'none';
    }

    loading() {
        this.contentDiv.style.display = 'none';
        this.noContentDiv.style.display = 'none';
        this.progressDiv.style.display = this.displayType;
    }
}
// File: ui/scroll-listener.js
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
// File: ui/page-manager.js
class PageManager {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }
    
    constructor() {
        this.loaderPage =  new Page($('loader'))
        this.currentPage = null
    }

    open(page) {
        page.open()
        if (this.currentPage && this.currentPage != page) this.currentPage.close()
        this.currentPage = page;
    }

    loader() {
        this.open(this.loaderPage);
    }

    auth() {
        const auth = Auth.getInstance()
        this.open(auth);
    }

    home() {
        const home = Home.getInstance()
        this.open(home);
        home.loadData()
    }

    settings() {
        const settings = Settings.getInstance()
        this.open(settings);
        settings.loadData()
    }

    tryAgainDialog(info) {
        const tryAgainPage = TryAgainPage.getInstance()
        this.open(tryAgainPage);
        tryAgainPage.update(info)

    }
}
// File: ui/dialogs/dialog.js
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
// File: ui/dialogs/max-dialog.js
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
// File: ui/dialogs/send-file-dialog.js
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
            post.setRequestHeader("Authorization", "Basic " + api.userId);
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
// File: ui/dialogs/delete-dialog.js
class DeleteDialog extends Dialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }
    
    constructor() {
        super($('deleteDialogWrap'))
        this.cancelButton = $('deleteCancelButton')
        this.deleteButton = $('deleteDeleteButton')
    }

    show(onDelete) {
        super.show();
        this.cancelButton.onclick = () => {
            this.dismiss()
        }
        this.deleteButton.onclick = () => {
            onDelete()
        };
    }
}
// File: ui/dialogs/add-text-dialog.js
class AddTextDialog extends MaxDialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('addTextDialog'), $('addTextDialogWrap'), $('addTextMaximizeIcon'), $('addTextcloseButton'))
        $('addTextButton').onclick = () => this.onSendClicked()
        this.textInput = $('textInput')
    }

    show() {
        setTimeout(() => {
            this.textInput.focus();
        }, 200);
        super.show()
    }

    onSendClicked() {
        let textString = this.textInput.value.trim()
        if (textString.length == 0) {
            utils.showSnack("Enter Text")
            return
        }
        this.dismiss()
        api.sendText(this.textInput.value, (res) => {
            log(res);
            log(this);
            if (res.isUpdated) {
                this.textInput.value = ""
                utils.showSnack("Text sent")
                textTab.addFirst(res.text)
            }
        })
    }
}
// File: ui/dialogs/file-info-bottom-sheet.js
class FileInfoBottomSheet extends Dialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('fileInfoBottomSheetDialog'))
        this.sheet = $('fileInfoBottomSheet')
        this.setCancellable()
    }
}
// File: ui/dialogs/info-dialog.js
class InfoDialog extends Dialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('infoDialogWrap'))
        this.setCancellable()
        this.infoDialogTitle = $('infoDialogTitle')
        this.infoDialogDescription = $('infoDialogDescription')

        $('infoOkayButton').onclick = () => {
            this.dismiss()
        }
    }

    show(title, description) {
        super.show()
        this.infoDialogTitle.innerHTML = title;
        this.infoDialogDescription.innerHTML = description;
    }
}
// File: ui/dialogs/download-menu-dialog.js
class DownloadMenuDialog extends Dialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('selectMenuDialog'))
        this.setCancellable()
        $('downloadAllBottom').onclick = () => this.onDownloadAllClicked()
        $('downloadZipBottom').onclick = () => this.onDownloadZipClicked()
        $('cancelSelectionButton').onclick = () => this.cancelSelection()
    }

    onDownloadAllClicked() {
        this.dismiss()
        fileSelectionMode.openSlectedFiles()
    }

    onDownloadZipClicked() {
        this.dismiss()
        fileSelectionMode.downloadSelectedFiles()
    }

    cancelSelection() {
        this.dismiss()
        fileSelectionMode.cancelSelection()
    }
}
// File: ui/dialogs/name-dialog.js
class NameDialog extends Dialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('nameDialogWrap'))
        this.nameInput = $('nameInput')
        this.nameErrorMessage = $('nameErrorMessage')
        const nameSettingsText = $('nameSettingsText')

        $('nameCloseButton').onclick = () => {
            this.dismiss()
        }

        $('nameUpdateButton').onclick = () => {
            const name = this.nameInput.value;
            let errorMsg = utils.validateName(name);
            if (errorMsg == null) {
                this.nameErrorMessage.style.display = 'none';
                api.changeName(name, (response) => {
                    if (response.isUpdated) {
                        nameSettingsText.innerHTML = name;
                        utils.showSnack("Name updated");
                        this.dismiss()
                    } else {
                        this.nameErrorMessage.style.display = 'block';
                        this.nameErrorMessage.innerHTML = response.error;
                    }
                })
            } else {
                this.nameErrorMessage.style.display = 'block';
                this.nameErrorMessage.innerHTML = errorMsg;
            }
        } 
    }

    show(name) {
        super.show()
        this.nameInput.value = name;
        this.nameErrorMessage.style.display = 'none';
    }
}
// File: ui/dialogs/share-dialog.js
class ShareDialog extends Dialog {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('shareDialogWrap'))
        $('shareCloseButton').onclick = () => {
            this.dismiss()
        }
        const shareLink = $('shareLink')
        const shareLinkCopy = $('shareLinkCopy')
        const socialMediaList = $('socialMediaList')
    
        socialMediaList.innerHTML = ''
        for (const sm of this.getSocialMediaList()) {
            const media = sm
            let image = element('img')
            image.classList.add('pointer')
            image.style.width = '40px'
            image.style.height = '40px'
            image.style.padding = '10px'
            image.src = "images/" + media.name + ".svg"
            image.onclick = () => {
                let a = element('a')
                a.href = media.url
                a.target = '_blank'
                a.click()
            }
            socialMediaList.appendChild(image)
        }
        if (!navigator.clipboard) {
            utils.selectText(shareLink)
            shareLinkCopy.style.display = 'none'
        }
        shareLinkCopy.onclick = () => {
            utils.copyToClipboard(shareLink.innerHTML, () => {

            })

        }
    }

    getSocialMediaList() {
        const url = this.fixedEncodeURIComponent("https://webshare.page.link/share");
        const title = "WebShare"
        const desc = "Local File Sharing"
        
        var text = title;
        
        if(desc) {
            text += '%20%3A%20';	// This is just this, " : "
            text += desc;
        }
        
        return [
            {name:'blogger', url: 'https://www.blogger.com/blog-this.g?u=' + url + '&n=' + title + '&t=' + desc },
            {name:'evernote', url: 'https://www.evernote.com/clip.action?url=' + url + '&title=' + text },
            {name:'facebook', url: 'http://www.facebook.com/sharer.php?u=' + url },
            {name:'linkedin', url: 'https://www.linkedin.com/sharing/share-offsite/?url=' + url },
            {name:'pinterest', url: 'http://pinterest.com/pin/create/button/?url=' + url  },
            {name:'reddit', url: 'https://reddit.com/submit?url=' + url + '&title=' + title },
            {name:'skype', url: 'https://web.skype.com/share?url=' + url + '&text=' + text },
            {name:'telegram.me', url: 'https://t.me/share/url?url=' + url + '&text=' + text },
            {name:'tumblr', url: 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + url + '&title=' + title + '&caption=' + desc },
            {name:'twitter', url: 'https://twitter.com/intent/tweet?url=' + url + '&text=' + text },
            {name:'vk', url: 'http://vk.com/share.php?url=' + url + '&title=' + title + '&comment=' + desc },
            {name:'whatsapp', url: 'https://api.whatsapp.com/send?text=' + text + '%20' + url },
        ];
    }

    fixedEncodeURIComponent(str) {
        return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
            return '%' + c.charCodeAt(0).toString(16);
        });
    }
}
// File: ui/dialogs/view-text-dialog.js
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
// File: ui/screens/home/file-type-chips.js
class FileTypeChips {

    constructor() {
        this.div = $('fileTypeChips')
        this.chips = [
            {
                name: "Image",
                type: "image",
                isSelected: false
            },
            {
                name: "Video",
                type: "video",
                isSelected: false
            },
            {
                name: "Audio",
                type: "audio",
                isSelected: false
            },
            {
                name: "Document",
                type: "document",
                isSelected: false
            },
            {
                name: "App",
                type: "app",
                isSelected: false
            }
        ]
        this.addUI()
    }

    addUI() {
        this.div.innerHTML = ''
        this.div.style.display = 'flex'
        this.div.style.alignItems = 'center'
        this.div.style.overflowY = 'auto'
        this.div.style.paddingRight = '10px'
        this.div.classList.add('thinScrollBar')
        for (let chip of this.chips) {
            this.div.appendChild(this.getChipDiv(chip))
        }
    }

    getFilterList() {
        let list = []
        for (let chip of this.chips) {
            if (chip.isSelected) {
                list.push(chip.type)
            }
        }
        if (list.length == 0) return null
        else return list
    }

    getChipDiv(chip) {
        let div = element('DIV')
        let name = element('A')
        let closeImg = element('DIV')

        div.classList.add('pointer')
        div.style.display = 'flex'
        div.style.padding = '5px 10px'
        div.style.borderRadius = '6px'
        div.style.backgroundColor = primary + '26'
        div.style.marginLeft = '10px'

        name.style.color = 'var(--text-color)'
        name.style.whiteSpace = 'nowrap'
        name.style.fontWeight = '200'
        name.style["-webkit-user-select"] = 'none'
        name.style["-ms-user-select"] = 'none'
        name.style["user-select"] = 'none'
        name.innerHTML = chip.name
        div.appendChild(name)

        closeImg.style.marginLeft = '5px'
        closeImg.innerHTML = CloseIcon
        let svg = closeImg.getElementsByTagName('svg')[0];
        svg.style.width = '10px'
        svg.style.height = '10px'

        const updateSelectionUi = () => {
            if (chip.isSelected) {
                div.style.border = '1px solid ' + primary + utils.percentToHex(80)
                div.style.backgroundColor = primary + utils.percentToHex(30)
                closeImg.style.display = 'block'
            } else {
                div.style.border = '1px solid ' + primary + utils.percentToHex(50)
                div.style.backgroundColor = ''
                closeImg.style.display = 'none'
            }
        }
        updateSelectionUi()

        div.onclick = () => {
            chip.isSelected = !chip.isSelected
            updateSelectionUi()
            fileTab.loadData()
        }

        div.appendChild(closeImg)

        return  div;
    }
}
// File: ui/screens/home/files/file-node.js
class FileNode {
    constructor(fileData) {
        this.fileData = fileData
    }

    focusDiv(b) {
        this.fileData.isFocused = b
        if (b) {
            this.fileDiv.style.backgroundColor = primaryTransparent
        } else {
            this.fileDiv.style.backgroundColor = ''
        }
    }

    updateSelectionUi(isSelected) {
        fileInfo.updateSelectedCountText()
        if (isSelected) {
            this.select()
        } else {
            this.unselect()
        }
        this.focusDiv(this.fileData.isFocused)
    }

    select() {
        this.selectSvg.style.display = "block"
        this.selectDiv.style.border = '0px'
        this.selectDiv.style.backgroundColor = 'var(--primary-color)'
    }

    unselect() {
        this.selectSvg.style.display = "none"
        this.selectDiv.style.border = '1px solid var(--unselect-color)'
        this.selectDiv.style.backgroundColor = 'transparent'
    }
    
}
// File: ui/screens/home/files/file-chooser.js
class FileChooser {
    constructor() {
        this.inputFileElement = element('INPUT')
        this.inputFileElement.onchange = () => {
            SendFileDialog.getInstance().uploadFiles(this.inputFileElement.files)
        };
        this.inputFileElement.type = 'file';
        this.inputFileElement.setAttribute("multiple", "")
    }

    open() {
        this.inputFileElement.click()
    }
}
// File: ui/screens/home/files/selection-mode.js
class SelectionMode {
    constructor() {
        this.selectedFiles = new Set()
        this.isInSelectionMode = false

        this.normalModeDiv = $('normalModeDiv')
        this.selectionModeDiv = $('selectionModeDiv')
        this.fileInfoSelection = $('fileInfoSelection')

        $('openUploadDialog').onclick = () => this.onOpenUploadClicked()
        this.sendFileDialog = SendFileDialog.getInstance()
        
        $('selectionMenu').onclick = () => this.onSelectMenuClicked()
    }

    selectFileNode(fileNode) {
        if (!this.isInSelectionMode) {
            this.isInSelectionMode = true
            this.updateMode()
        }
        fileNode.updateSelectionUi(this.inverseSelection(fileNode))
        if (this.isInSelectionMode) {
            if (this.isNoFileSelected()) {
                this.isInSelectionMode = false
                this.updateMode()
            }
        }

        if (!isFileInfoSideVisible) {
            FileInfoBottomSheet.getInstance().dismiss()
        }
        if (fileNode.fileData.isFocused) fileInfo.showFileInfo(fileNode)
    }

    clearAllSelections() {
        this.selectedFiles.clear()
    }

    onOpenUploadClicked() {
        this.sendFileDialog.show()
    }

    onSelectMenuClicked() {
        DownloadMenuDialog.getInstance().show()
    }


    openSlectedFiles() {
        for (const fileNode of this.selectedFiles) {
            utils.openFile(fileNode.fileData.id, false);
        }
    }

    downloadSelectedFiles() {
        const idList = []
        for (const fileNode of this.selectedFiles) {
            idList.push(fileNode.fileData.id);
        }
        api.getZipUrl(idList, (res) => {
            utils.openUrl(res, false);
        })
    }

    isSelected(fileNode) {
        return this.selectedFiles.has(fileNode);
    }

    removeSelection(fileNode) {
        this.selectedFiles.delete(fileNode);
    }

    addSelection(fileNode) {
        this.selectedFiles.add(fileNode);
    }

    clearSelection(fileNode) {
        let fileData = fileNode.fileData
        if (this.isSelected(fileNode)) {
            this.removeSelection(fileNode)
            fileNode.updateSelectionUi(false)
        }
        if (fileData.isFocused) fileTab.fileInfo.hideFileInfo()
        if (this.isNoFileSelected()) {
            this.isInSelectionMode = false
            this.updateMode()
        }
    }

    isNoFileSelected() {
        return this.selectedFiles.size == 0
    }

    inverseSelection(fileNode) {
        if (this.isSelected(fileNode)) {
            this.removeSelection(fileNode);
            return false;
        } else {
            this.addSelection(fileNode);
            return true;
        }
    }

    updateMode() {
        if (isFileInfoSideVisible) {
            this.normalModeDiv.style.display = 'flex';
            this.selectionModeDiv.style.display = 'none';
            this.fileInfoSelection.style.display = this.isInSelectionMode ? 'flex' : 'none';
        } else {
            if (this.isInSelectionMode) {
                this.normalModeDiv.style.display = 'none';
                this.selectionModeDiv.style.display = 'flex';
            } else {
                this.normalModeDiv.style.display = 'flex';
                this.selectionModeDiv.style.display = 'none';
            }
        }
    }

    cancelSelection() {
        for (const fileNode of this.selectedFiles) {
            const fileData = fileNode.fileData
            if (this.isSelected(fileNode)) {
                this.removeSelection(fileNode)
                fileNode.updateSelectionUi(false)
            }
            if (fileData.isFocused) fileInfo.showFileInfo(fileNode)
        }
        if (this.isNoFileSelected()) {
            this.isInSelectionMode = false
            this.updateMode()
        }
    }
}
// File: ui/screens/home/files/list-file-node.js
class ListFileNode extends FileNode {

    constructor(fileData) {
        super(fileData)
        this.createFileNode()
    }

    onClick() {
        fileTab.fileView.onClick(this)
    }

    createFileNode() {
        let div = element("DIV")
        let iconDiv = element("DIV")
        let infoDiv = element("DIV")
        this.selectDiv = element("DIV")

        div.style.width = '100%'
        div.style.height = '60px'
        div.style.borderBottom = '1px solid var(--border-color)'
        div.style.display = 'flex'
        div.classList.add("pointer")
        div.tabIndex = fileTab.allFiles.childElementCount

        let iconWrapDiv = element('DIV')
        iconWrapDiv.onclick = () => this.onClick()
        div.appendChild(iconWrapDiv)

        iconDiv.style.width = '50px'
        iconDiv.style.height = '50px'
        iconDiv.style.margin = '5px 10px'
        iconDiv.style.borderRadius = '6px'
        iconDiv.style.position = 'relative'
        // iconDiv.style.backgroundColor = 'var(--secondaryBg-color)'
        iconDiv.style.display = 'flex'
        // iconDiv.style.backgroundColor = '#000000'
        iconWrapDiv.appendChild(iconDiv)

        utils.addImage(iconDiv, this.fileData, false)

        infoDiv.style.width = 'calc(100% - 124px)'
        infoDiv.style.height = '60px'
        infoDiv.style.display = 'flex'
        infoDiv.style.alignSelf = 'center'
        infoDiv.style.flexDirection = 'column'
        infoDiv.style.justifyContent = 'center'
        infoDiv.style.alignSelf = 'center'
        infoDiv.onclick = () => this.onClick()

        div.appendChild(infoDiv)

        let fileNameA = element('A')
        fileNameA.style.color = 'var(--text-color)'
        fileNameA.style.fontWeight = '200'
        fileNameA.style.overflow = 'hidden'
        fileNameA.style.textOverflow = 'ellipsis'
        fileNameA.style.display = 'block'
        fileNameA.style.whiteSpace = 'nowrap'
        fileNameA.innerHTML = this.fileData.name
        infoDiv.appendChild(fileNameA)

        let descriptionDiv = element('DIV')
        descriptionDiv.style.position = 'relative'
        infoDiv.appendChild(descriptionDiv)

        let uploaderA = element('A')
        uploaderA.style.color = 'var(--description-color)'
        uploaderA.style.fontWeight = '200'
        uploaderA.style.fontSize = '0.8em'
        uploaderA.innerHTML = this.fileData.uploader
        descriptionDiv.appendChild(uploaderA)

        let sizeA = element('A')
        sizeA.style.color = 'var(--description-color)'
        sizeA.style.fontWeight = '200'
        sizeA.style.fontSize = '0.8em'
        sizeA.style.float = 'right'

        sizeA.innerHTML = utils.getSizeString(this.fileData.size)
        descriptionDiv.appendChild(sizeA)
        let selectWrapDiv = element('DIV')
        selectWrapDiv.onclick = () => {
            fileSelectionMode.selectFileNode(this)
        }

        this.selectDiv.style.width = '16px'
        this.selectDiv.style.height = '16px'
        this.selectDiv.style.margin = '20px 18px'
        this.selectDiv.style.borderRadius = '8px'
        this.selectDiv.style.display = 'flex'
        this.selectDiv.style.justifyContent = 'center'
        this.selectDiv.innerHTML = TickIcon
        selectWrapDiv.appendChild(this.selectDiv)

        this.selectSvg = this.selectDiv.getElementsByTagName('svg')[0];
        this.selectSvg.style.margin = 'auto'
        // svg.style.transform = 'translateY(1px)'
        this.fileDiv = div
        div.appendChild(selectWrapDiv)

        this.updateSelectionUi(fileSelectionMode.isSelected(this.fileData.id))

    }

}
// File: ui/screens/home/files/file-drop-event.js
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
// File: ui/screens/home/files/grid-file-node.js
class GridFileNode extends FileNode {
    constructor(fileData) {
        super(fileData)
        this.createFileNode()
    }

    onClick() {
        fileTab.fileView.onClick(this)
    }

    createFileNode() {
        let div = element("DIV")
        let topDiv = element("DIV")
        let nameDiv = element("DIV")
        let nameA = element("A")
        this.selectDiv = element("DIV")

        div.style.margin = '5px'
        div.style.border = '1px solid var(--border-color)'
        div.style.borderRadius = '6px'
        div.style.width = 'auto'
        div.style.height = '140px'
        // div.style.flexGrow = '1'
        div.classList.add("pointer")
        div.tabIndex = fileTab.allFiles.childElementCount
        div.onclick = () => this.onClick()
        topDiv.style.width = 'auto'
        topDiv.style.height = 'calc(100% - 40px)'
        topDiv.style.position = 'relative'
        topDiv.style.display = 'flex'
        // topDiv.style.backgroundColor = primaryTransparent
        div.appendChild(topDiv)

        utils.addImage(topDiv, this.fileData, true)

        nameDiv.style.width = 'auto'
        nameDiv.style.height = '40px'
        nameDiv.style.display = 'flex'
        nameDiv.style.alignItems = 'center'
    
        div.appendChild(nameDiv)

        nameA.style.color = 'var(--text-color)'
        nameA.style.fontWeight = '200'
        nameA.style.margin = '0px 5px'
        nameA.style.width = 'calc(100% - 10px)'
        nameA.style.overflow = 'hidden'
        nameA.style.textOverflow = 'ellipsis'
        nameA.style.whiteSpace = 'nowrap'

        nameA.innerHTML = this.fileData.name
        nameDiv.appendChild(nameA)

        this.selectDiv.style.width = '16px'
        this.selectDiv.style.height = '16px'
        this.selectDiv.style.position = 'absolute'
        this.selectDiv.style.right = '10px'
        this.selectDiv.style.bottom = '10px'
        this.selectDiv.style.borderRadius = '8px'
        this.selectDiv.style.display = 'flex'
        this.selectDiv.style.justifyContent = 'center'
        this.selectDiv.innerHTML = TickIcon
        this.selectSvg = this.selectDiv.getElementsByTagName('svg')[0];
        this.selectSvg.style.margin = 'auto'
        // svg.style.transform = 'translateY(1px)'
        topDiv.appendChild(this.selectDiv)
        this.fileDiv = div
        this.updateSelectionUi(fileSelectionMode.isSelected(this.fileData.id))
    }

    select() {
        super.select()
        this.fileDiv.style.border = '1px solid var(--primary-color)'
    }

    unselect() {
        super.unselect()
        this.fileDiv.style.border = '1px solid var(--border-color)'
    }
}
// File: ui/screens/home/files/search-node.js
class SearchNode {

    constructor() {
        this.searchValue = ""
        this.searchInput = $('searchInput')

        $('clearSearch').onclick = () => this.onSearchClear()
        $('search').onclick = (ev) => this.onSearchSubmit(ev)
    }

    onSearchClear() {
        this.searchValue = ''
        this.searchInput.value = ''
        fileTab.loadData()
    }

    onSearchSubmit(event) {
        event.preventDefault()
        this.searchValue = this.searchInput.value
        fileTab.loadData()
    }

}
// File: ui/screens/home/files/files-view.js
class FilesView {
    
    constructor() {
        this.lastFocusElement = null
    }

    onClick(fileNode) {
        let fileData = fileNode.fileData
        if (fileSelectionMode.isInSelectionMode) {
            fileNode.updateSelectionUi(fileSelectionMode.inverseSelection(fileNode))
            if (fileSelectionMode.isNoFileSelected()) {
                fileSelectionMode.isInSelectionMode = false
                fileSelectionMode.updateMode()
            }
        }
        if (!fileData.isFocused) {
            fileNode.focusDiv(true)
            if (this.lastFocusElement != null) this.lastFocusElement.focusDiv(false)
            this.lastFocusElement = fileNode
        }
        fileInfo.showFileInfo(fileNode)
    }
}
// File: ui/screens/home/files/list-view.js
class ListView extends FilesView {

    update(fileList) {
        fileTab.allFiles.style.display = 'inline-flex'
        this.addFiles(fileList)
    }

    addFiles(fileList) {
        for (let index = 0; index < fileList.length; ++index) {
            const file = fileList[index]
            let listFileNode = new ListFileNode(file)
            fileTab.allFiles.appendChild(listFileNode.fileDiv)
            if (file.isFocused == undefined) file.isFocused = false
            // if (file.isFocused) fileTab.list.focusedIndex = i
        }
    }

}
// File: ui/screens/home/files/grid-view.js
class GridView extends FilesView {

    update(fileList) {
        fileTab.allFiles.style.display = 'inline-grid'
        this.refreshSize()
        this.addFiles(fileList)
    }

    addFiles(fileList) {
        for (let index = 0; index < fileList.length; ++index) {
            const file = fileList[index]
            let gridFile = new GridFileNode(file)
            fileTab.allFiles.appendChild(gridFile.fileDiv)
            if (file.isFocused == undefined) file.isFocused = false
            // if (file.isFocused) this.focusedIndex = i
        }
    }

    refreshSize() {
        let parentWidth = fileTab.allFiles.offsetWidth - 30
        let count = Math.floor(parentWidth / 135)
        let size = (parentWidth / count)
        fileTab.allFiles.style.gridTemplateColumns = 'repeat(' + count + ', ' + size + 'px)'
    }

}
// File: ui/screens/home/fileinfo/file-info-node.js
class FileInfoNode {

    constructor(fileNode, fileInfoDiv) {
        this.fileNode = fileNode
        this.fileData = fileNode.fileData
        this.fileInfoDiv = fileInfoDiv
        $('downloadAllSide').onclick = () => this.onDownloadAllClicked()
        $('downloadZipSide').onclick = () => this.onDownloadZipClicked()
        $('cancelSelectionButtonSide').onclick = () => this.cancelSelection()
        this.addUI()
    }

    cancelSelection() {
        fileSelectionMode.cancelSelection()
    }

    onDownloadAllClicked() {
        fileSelectionMode.openSlectedFiles()
    }

    onDownloadZipClicked() {
        fileSelectionMode.downloadSelectedFiles()
    }

    addUI() {
        this.fileInfoDiv.innerHTML = ''
        let titleDiv = element('DIV')
        titleDiv.style.paddingBottom = '25px'
        titleDiv.style.display = 'flex'
        titleDiv.style.alignItems= 'flex-start';
        titleDiv.innerHTML = IconMap[this.fileData.type](2)
        this.fileInfoDiv.appendChild(titleDiv)
        let iconSvg = this.fileInfoDiv.getElementsByTagName('svg')[0];
        iconSvg.style.width = '16px'
        iconSvg.style.height = 'auto'
        iconSvg.style.margin = '8px 12px 0px 4px'

        let title = element('A')
        title.style.fontSize = '1.2em'
        title.style.color = 'var(--text-color)'
        title.style.wordBreak = 'break-word'
        title.style.fontWeight = '200'
        title.style.width = 'calc(100% - 32px)'
        title.innerHTML = this.fileData.name
        titleDiv.appendChild(title)

        let details = element('A')
        details.style.color = 'var(--text-color)'
        details.style.wordBreak = 'break-word'
        details.style.paddingBottom = '10px'
        details.style.fontWeight = '200'
        details.innerHTML = 'Details'
        this.fileInfoDiv.appendChild(details)
        this.fileInfoDiv.appendChild(this.getFileInfoTable())
        this.fileInfoDiv.appendChild(new Button(NewTabIcon, 'Open in new tab', () => utils.openFile(this.fileData.id, true)).div)
        this.fileInfoDiv.appendChild(new Button(DownloadIcon, 'Download', () => utils.openFile(this.fileData.id, false)).div)
        this.fileInfoDiv.appendChild(new SelectButton(this.fileNode).div)
        if (this.fileData.isDeletable) this.fileInfoDiv.appendChild(new Button(DeleteIcon, 'Delete', () => this.onDelete()).div)
    }

    getFileInfoTable() {
        let table = element("TABLE")
        table.style.width = '100%'
        table.style.marginBottom = '10px'
        // table.style.borderSpacing = '5px'
        let type = this.fileData.type
        if (type != undefined) {
            type = type.charAt(0).toUpperCase() + type.slice(1)
            table.appendChild(this.getFileInfoRow("Type", type))
        }
        let duration = this.fileData.duration
        if (duration != undefined)
            table.appendChild(this.getFileInfoRow("Duration", utils.getDurationString(duration)))
        let resolution = this.fileData.resolution
        if (resolution != undefined && resolution.length > 0)
            table.appendChild(this.getFileInfoRow("Resolution", resolution))
        let size = this.fileData.size
        if (size != undefined && size > 0)
            table.appendChild(this.getFileInfoRow("Size", utils.getSizeString(size)))
        let uploader = this.fileData.uploader
        if (uploader != undefined && uploader.length > 0)
            table.appendChild(this.getFileInfoRow("Uploader", uploader))
        let created = this.fileData.created
        if (created != undefined && created > 0)
            table.appendChild(this.getFileInfoRow("Created", utils.getTimeString(created)))
        return table
    }

    getFileInfoRow(key, value) {
        let tRow = element("TR")
        let tDataKey = element("TD")
        tDataKey.style.fontSize = '0.9em'
        tDataKey.style.fontWeight = '200'
        tDataKey.innerHTML = key
        tDataKey.style.color = 'var(--description-color)'
        tRow.appendChild(tDataKey)
        let tDataValue = element("TD")
        tDataValue.style.width = '60%'
        tDataValue.style.color = 'var(--text-color)'
        tDataValue.style.fontSize = '0.9em'
        tDataValue.style.fontWeight = '200'
        tDataValue.innerHTML = value
        tRow.appendChild(tDataValue)
        return tRow
    }

    onDelete() {
        const deleteDialog = new DeleteDialog()
        deleteDialog.show(() => {
            api.deleteFile(this.fileData.id, (res) => {
                deleteDialog.dismiss()
                if (res.isDeleted) {
                    utils.showSnack("File deleted")
                    this.fileNode.fileDiv.remove()
                    fileTab.updateContentVisibility()
                    fileSelectionMode.clearSelection(this.fileNode)
                    fileTab.updateMoreIfNotScrollable()
                } else {
                    utils.showSnack("File deletion failed")
                }
            })
        })
    }
}
// File: ui/screens/home/fileinfo/button.js
class Button {
    constructor(icon, text, onClick) {
        this.div = element('DIV')
        this.div.onclick = () => onClick()
        this.div.style.display = 'flex'
        this.div.style.borderRadius = '6px'
        this.div.style.backgroundColor = 'var(--secondaryBg-color)'
        this.div.style.padding = '10px'
        this.div.style.marginTop = '5px'
        this.div.classList.add('pointer')
        this.update(icon, text)
    }

    update(newIcon, newText) {
        this.div.innerHTML = newIcon
        let iconSvg = this.div.getElementsByTagName('svg')[0];
        iconSvg.style.width = '15px'
        iconSvg.style.height = 'auto'
        iconSvg.style.marginRight = '10px'

        let textA = element('A')
        textA.style.fontWeight = '200'
        textA.style.color = 'var(--text-color)'
        textA.innerHTML = newText
        this.div.appendChild(textA)
    }
}
// File: ui/screens/home/fileinfo/select-button.js
class SelectButton extends Button {
    constructor(fileNode) {
        let icon
        let text
        if (fileSelectionMode.isSelected(fileNode)) {
            icon = UnselectIcon
            text = "Unselect"
        } else {
            icon = SelectIcon
            text = "Select"
        }
        super(icon, text, () =>  {
            fileSelectionMode.selectFileNode(fileNode)
            const [icon, text] = this.getIconAndText()
            this.update(icon, text)
            log(text);
        })
        this.fileNode = fileNode
    }

    getIconAndText() {
        let icon
        let text
        if (fileSelectionMode.isSelected(this.fileNode)) {
            icon = UnselectIcon
            text = "Unselect"
        } else {
            icon = SelectIcon
            text = "Select"
        }
        return [icon, text]
    }
}
// File: ui/screens/home/fileinfo/file-info.js
class FileInfo {
    constructor() {
        this.fileInfo = $('fileInfo')
        this.fileInfoSelect = $('fileInfoSelect')
        this.selectedCountText = $('selectedCountText')
        this.selectedCountTextSide = $('selectedCountTextSide')
        this.fileInfoBottomSheet = $('fileInfoBottomSheet')
    }
    
    hideFileInfo() {
        this.fileInfo.style.display = 'none';
        this.fileInfoSelect.style.display = 'flex';
    }

    updateSelectedCountText() {
        const count = fileSelectionMode.selectedFiles.size;
        let text = `${count} item${count == 1 ? '' : 's'} selected`
        if (isFileInfoSideVisible) {
            this.selectedCountTextSide.innerHTML = text;
        } else {
            this.selectedCountText.innerHTML = text;
        }
    }

    showFileInfo(fileNode) {
        this.fileInfo.style.display = 'flex';
        this.fileInfoSelect.style.display = 'none';
        if (isFileInfoSideVisible) {
            new FileInfoNode(fileNode, this.fileInfo)
        } else {
            if (!fileSelectionMode.isInSelectionMode) {
                const bottomSheet = FileInfoBottomSheet.getInstance()
                new FileInfoNode(fileNode, bottomSheet.sheet)
                bottomSheet.dialogWrap.scrollTop = 0
                bottomSheet.show()
            }
        }
    }
}
// File: ui/screens/home/viewMode.js
class ViewMode {
    
    constructor() {
        this.List = 'list'
        this.Grid = 'grid'
        this.storageKey = 'viewMode'
        this.current = localStorage['viewMode']
    
        if (this.current == null) {
            this.update(this.List);
        }

        this.viewMenu = $('viewMenu')
        this.viewMenu.onclick = () => this.changeViewMode()

    }

    isGrid() {
        return this.current == this.Grid;
    }

    isList() {
        return this.current == this.List;
    }

    update(mode) {
        localStorage.setItem('viewMode', mode);
        this.current = mode;
    }

    grid() {
        this.update(this.Grid);
    }

    list() {
        this.update(this.List);
    }

    updateViewModeIcon() {
        if (this.isList())
            this.viewMenu.innerHTML = GridIcon
        else
            this.viewMenu.innerHTML = ListIcon
    }

    changeViewMode() {
        this.inverseViewMode()
    }

    inverseViewMode() {
        if (this.isList())
            this.grid();
        else
            this.list();
            this.updateViewModeIcon();
        fileTab.loadData();
    }
}
// File: ui/screens/home/sample-data.js
class SampleData {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        this.currentFileCount = 0
        this.sampleTotalFileCount = 85

        this.currentTextCount = 0
        this.totalTextCount = 85
    }

    resetFiles() {
        this.currentFileCount = 0
    }

    getSampleFiles(req) {
        let sFileList = [];
        log("SampleData currentFileCount: " + this.currentFileCount + ", sampleTotalFileCount: " + this.sampleTotalFileCount);
        if (this.currentFileCount >= this.sampleTotalFileCount) return sFileList;
        for (let i = this.currentFileCount; i < this.currentFileCount + req.count; ++i) {
            if (i >= this.sampleTotalFileCount) break;
            sFileList.push({
                id: i,
                name: utils.getSampleText() + i + ".txt",
                type: types[utils.ran() % types.length],
                duration: utils.ran() * 123000,
                size: utils.ran() * 46500,
                created: Date.now() - (i * 1800000),
                uploader: "User-" + utils.ran(),
                resolution: "500 x 1000",
                isFocused: false
            });
        }
        this.currentFileCount += sFileList.length;
        return sFileList;
    }

    resetText() {
        this.currentTextCount = 0
    }

    getSampleText(req) {
        let textList = [];
        if (this.currentTextCount >= this.totalTextCount) return textList;
        for (let i = this.currentTextCount; i < this.currentTextCount + req.count; ++i) {
            if (i >= this.totalTextCount) break;
            textList.push({
                data: btoa(utils.getSampleText(i % 2 == 0 ? 50 : 5000, 10000)),
                time: Date.now() - (i * 1800000),
                from: "User-" + utils.ran(),
                isDeletable: utils.ran() % 2 == 0,
                id: i
            });
        }
        this.currentTextCount += textList.length;
        return textList;
    }

}
// File: ui/screens/home/tabs-node.js
class TabsNode {

    constructor(onTabClick) {
        this.onTabClick = (key) => onTabClick(key)
        this.main = $('categories')
        this.main.innerHTML = ''
        this.main.style.paddingLeft = '20px'
        this.main.style.backgroundColor = "var(--primary-color)"
        this.main.style.borderRadius = '0px 0px 6px 6px'
        this.stateButtons = new Map();

        this.addButton('file', 'FILE')
        this.addButton('text', 'TEXT')

        this.currentElement = 'file'
        this.stateButtons[this.currentElement].updateSelectionUi(true)
    }

    addButton(key, text) {
        const stateButton = this.getStateButton(key, text)
        this.main.appendChild(stateButton.div)
        const self = this
        stateButton.div.onclick = () => this.onClick(key)
        this.stateButtons[key] = stateButton
    }

    getStateButton(key, text) {
        const title = element("A");
        title.innerHTML = text
        title.style.width = 'auto';
        title.style.height = 'auto';
        title.style.display = 'inline-flex'
        title.style.alignItems = 'center'
        title.classList.add('pointer')
        title.style.fontSize = '1em'
        title.style.fontWeight= '500'
        title.style.padding = '8px';
        title.style.marginLeft = '15px'
        title.style.textDecoration = 'none';
        title.style.color = "var(--text-color)"
        const stateButton = {
            key: key,

            updateSelectionUi: function(selected) {
                if (selected) {
                    title.style.color = "var(--icon-color)"
                    title.style.fontWeight = "500"
                }
                else {
                    title.style.color = "#CECECE"
                    title.style.fontWeight = "300"
                }
            },

            div: title
        }
        stateButton.updateSelectionUi(false)

        return stateButton
    }

    show(type) {
        this.stateButtons[this.currentElement].updateSelectionUi(false)
        this.currentElement = type
        this.stateButtons[this.currentElement].updateSelectionUi(true)
    }

    onClick(type) {
        this.show(type)
        this.onTabClick(type)
    }
}
// File: ui/screens/page.js
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
// File: ui/screens/try-again-page.js
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
// File: ui/screens/settings/settings.js
class Settings extends Page {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('settings'))
        this.themeSelection = $('themeSelection')
        this.nameSettingsText = $('nameSettingsText')
        this.settingsName = $('settingsName')
        this.settingsShare = $('settingsShare')
        this.pageBack = $('pageBack')
        
        this.enterAnim = 'slideEnterAnim'
        this.exitAnim = 'slideExitAnim'

        this.themeSelection.innerHTML = ''
        this.lastSelectedRadio = null

        this.themeSelection.appendChild(this.getRadioButtonsDiv())

        this.settingsName.onclick = () => this.onSettingsNameClicked()
        this.settingsShare.onclick = () => {
            ShareDialog.getInstance().show()
        }
        this.pageBack.onclick = () => this.onBackClicked()
    }


    loadData() {
        this.nameSettingsText.innerHTML = ''
        api.getInfo((response) => {
            this.nameSettingsText.innerHTML = response.name
        })

    }

    onBackClicked() {
        pageManager.home()
    }

    onSettingsNameClicked() {
        NameDialog.getInstance().show(this.nameSettingsText.innerHTML)
    }

    getRadioButtonsDiv() {
        let radios = [
            {
                icon: LightThemeIcon,
                text: "LIGHT",
                isSelected: () => theme.isLightTheme(),
                onClick: () => theme.light()
            },
            {
                icon: DarkThemeIcon,
                text: "DARK",
                isSelected: () => theme.isDarkTheme(),
                onClick: () => theme.dark()
            }
        ]
        let id = 0
        const mainDiv = element('DIV')
        mainDiv.style.display = "inline-flex"
        mainDiv.style.flexWrap = "wrap"
        mainDiv.style.alignContent = "flex-start"


        for (const radio of radios) {
            const radioButton = new ThemeRadioButton(radio)
            if (radio.isSelected()) this.lastSelectedRadio = radioButton
            radioButton.div.onclick = () => this.onClick(radioButton)
            mainDiv.appendChild(radioButton.div)
        }

        return mainDiv
    }

    onClick(radioButton) {
        if (radioButton != this.lastSelectedRadio) {
            if (radioButton.radio.onClick != undefined) radioButton.radio.onClick()
            radioButton.updateSelectionUi()
            this.lastSelectedRadio.updateSelectionUi()
            this.lastSelectedRadio = radioButton
        }
    }
}
// File: ui/screens/settings/theme-radio-button.js
class ThemeRadioButton {

    constructor(radio) {
        this.radio = radio
        this.unselectedColor = '#AAAAAA'
        const radioDiv = element('DIV')
        radioDiv.classList.add("pointer")
        radioDiv.style.width = '60px'
        radioDiv.style.height = '60px'
        radioDiv.style.display = "flex"
        radioDiv.style.flexDirection = "column"
        radioDiv.style.justifyContent = "space-between"
        radioDiv.style.marginLeft = "10px"
        radioDiv.innerHTML = radio.icon
        let svg = radioDiv.getElementsByTagName('svg')[0];
        this.path = svg.getElementsByTagName('path')[0];
        svg.style.height = '18px'
        svg.style.margin = 'auto'
        this.textA = element('A')
        this.textA.style.height = '20px'
        this.textA.style.fontSize = '0.8em'
        this.textA.style.color = ''
        this.textA.style.textAlign = 'center'
        this.textA.style.borderRadius = '6px'
        radioDiv.appendChild(this.textA)
        this.updateSelectionUi()
        this.div = radioDiv
    }

    updateSelectionUi() {
        if (this.radio.isSelected()) {
            this.path.style.fill = 'var(--primary-color)'
            this.textA.style.color = 'white'
            this.textA.style.backgroundColor = 'var(--primary-color)'
        } else {
            this.path.style.fill = this.unselectedColor
            this.textA.style.color = this.unselectedColor
            this.textA.style.backgroundColor = 'transparent'
        }
        this.textA.innerHTML = this.radio.text
    }
}
// File: ui/screens/home/home.js
class Home extends Page {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('home'))
        this.refresh = $('refresh')
        this.settingsButton = $('settingsButton')
        this.filesContent = $('filesContent')
        this.textContent = $('textContent')

        this.os = api.getOs();
        new TabsNode((type) => {
            switch (type) {
                case "file":
                    this.filesContent.style.display = "block"
                    this.textContent.style.display = "none"
                    fileTab.onResize()
                    break;
                case "text":
                    this.filesContent.style.display = "none"
                    this.textContent.style.display = "block"
                    break;
                default:
            }
        })

        this.refresh.onclick = () => this.onRefreshClicked()
        this.settingsButton.onclick = () => this.onSettingsClicked()
        
        if (fileTab == undefined) fileTab = FileTab.getInstance()
        if (textTab == undefined) textTab = TextTab.getInstance()

        this.currentTab = this.filesTab
    }

    onSettingsClicked() {
        pageManager.settings()
    }

    onRefreshClicked() {
        this.refresh.classList.remove('rotateAnime');
        void this.refresh.offsetWidth;
        this.refresh.classList.add('rotateAnime');
        this.loadData()
    }

    loadData() {
        fileTab.loadData()
        textTab.loadData()
    }

}
// File: ui/screens/home/file-tab.js
class FileTab {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        this.fileList = []
        this.noOfFileOnEachCall = 10
        this.currentFileCount = 0
        this.lastId = -1
        this.totalFileCount = null

        this.allFiles = $('allFiles')
        this.noFilesDiv = $('noFilesDiv')
        this.dropToAdd = $('dropToAdd')
        this.fileLoaderWrap = $('fileLoaderWrap')

        this.fileCountSpan = $('fileCountSpan')
        this.home = $('home')
        this.filesContentDiv = $('filesContentDiv')
        this.fileChooser = new FileChooser()

        this.fileTypeChips = new FileTypeChips()
        this.searchNode = new SearchNode()
        this.viewMode = new ViewMode()
        if (fileInfo == undefined) fileInfo = new FileInfo()
        if (fileSelectionMode == undefined) fileSelectionMode = new SelectionMode()
        const fde = new FileDropEvent()

        this.gridView = new GridView()
        this.listView = new ListView()

        this.sampleData = api.isTest ? SampleData.getInstance() : null 

        $('noContentText').innerHTML = ((fde.isDroppable()) ? "Drop files here or " : "") + 'Use the “send” button to share files'
        $('sendButton').onclick = () => this.onSendFileButtonClicked()

        this.addAllFilesScrollListener();
        this.viewMode.updateViewModeIcon();
    }

    getFileApiBody() {
        let body = {
            count: this.getMinimumFileCountToDisplay(),
            fromId: this.lastId,
        }
        let filters = this.fileTypeChips.getFilterList();
        if (filters != null)
            body.filters = filters;
        if (this.searchNode.searchValue.length > 0)
            body.search = this.searchNode.searchValue;
        return body;
    }

    loadData() {
        this.fileView = this.viewMode.isList() ? this.listView : this.gridView
        this.updateFiles()
    }

    onResize() {
        if (this.viewMode.isGrid()) {
            this.gridView.refreshSize();
        }
    }

    onSendFileButtonClicked() {
        api.getUploadInfo((res) => {
            log(res);
            if (res.isUploadAvailable) {
                if (res.availableCount <= 0) {
                    InfoDialog.getInstance().show(LimitReachedTitle, LimitReachedDescription)
                } else {
                    this.fileChooser.open()
                    const sendDialog = SendFileDialog.getInstance()
                    if (!sendDialog.isShowing())
                        sendDialog.show()
        
                }
            } else {
                InfoDialog.getInstance().show(UploadDisabledTitle, UploadDisabledDescription)
            }
        })
    }

    onFiles(filesResponse) {
        let list = filesResponse.files;
        if (list.length > 0) this.lastId = list[list.length - 1].id;
        this.fileView.update(list)
        this.allFiles.scrollTop = 0;
        this.updateContentVisibility()
        this.totalFileCount = filesResponse.totalCount;
        this.updateFileCount();
        this.updateMoreIfNotScrollable();
    }

    onMoreFiles(filesResponse) {
        let list = filesResponse.files
        if (list.length > 0) this.lastId = list[list.length - 1].id
        this.fileView.addFiles(list)
        this.totalFileCount = filesResponse.totalCount
        this.updateFileCount()
        // files.updateMoreIfNotScrollable();
    }

    updateMoreIfNotScrollable() {
        log("updateMoreIfNotScrollable");
        const height = this.allFiles.offsetHeight
        if (height > 0 && height == this.allFiles.scrollHeight) {
            this.updateMoreFiles()
        }
    }


    updateFileCount() {
        if (this.fileTypeChips.getFilterList() != null || this.searchNode.searchValue.length > 0)
            this.fileCountSpan.innerHTML = this.allFiles.childElementCount
        else 
            this.fileCountSpan.innerHTML = this.allFiles.childElementCount + '/' + this.totalFileCount
    }

    getMinimumFileCountToDisplay() {
        let count;
        let height = this.allFiles.offsetHeight
        if (height == 0) height = document.documentElement.clientHeight - 235
        if (this.viewMode.isList()) {
            count = Math.floor(height / 61) + 4
        } else {
            let parentWidth = this.home.offsetWidth
            if (isFileInfoSideVisible)
                parentWidth -= 280
            count = Math.floor(parentWidth / 135) * (Math.floor(height / 142) + 1)
        }
        if (count < 3) count = 10
        return count;
    }

    clearAll() {
        this.allFiles.innerHTML = '';
    }
    
    updateContentVisibility() {
        if (this.allFiles.childElementCount > 0) this.content()
        else this.noFiles();
    }

    updateFiles() {
        this.minCount = this.getMinimumFileCountToDisplay();
        this.load();
        fileInfo.hideFileInfo();
        this.clearAll();
        fileSelectionMode.clearAllSelections();
        fileSelectionMode.isInSelectionMode = false;
        fileSelectionMode.updateMode();
        if (api.isTest) this.sampleData.resetFiles()
        this.currentFileCount = 0;
        this.lastId = -1;
        log("API ISTEST " + api.isTest);
        if (api.isTest) {
            api.apiDelay(() => {
                const list = this.sampleData.getSampleFiles(this.getFileApiBody())
                this.onFiles({totalCount: this.sampleData.sampleTotalFileCount, files: list});
            });
            return
        }
        
        api.xhrAuthPost(ApiFiles, this.getFileApiBody(), (res) => this.onFiles(res));
    }

    updateMoreFiles() {
        if (api.isTest) {
            api.apiDelay(() => {
                const list = this.sampleData.getSampleFiles(this.getFileApiBody())
                this.onMoreFiles({totalCount: this.sampleData.sampleTotalFileCount, files: list});
            })
            return
        }
        
        api.xhrAuthPost(ApiFiles, this.getFileApiBody(), (res) => this.onMoreFiles(res));
    }

    // bottomLoader: null,
    // isBottomScrolled: false,

    // showBottomLoading(isShow) {
    //     window.requestAnimationFrame(() => {
    //         if (files.bottomLoader == null) {
    //             files.bottomLoader = element('div')
    //             files.bottomLoader.style.width = '30px'
    //             files.bottomLoader.style.height = '30px'
    //             files.bottomLoader.style.margin = 'auto'
    //             files.bottomLoader.style.marginTop = '10px'
    //             files.bottomLoader.style.borderWidth = '2px'
    //             files.bottomLoader.classList.add('loader')
    //         }
    //         if (isShow) {
    //             files.allFiles.appendChild(files.bottomLoader)
    //         } else {
    //             if (files.allFiles.contains(files.bottomLoader))
    //             files.allFiles.removeChild(files.bottomLoader)
    //         }
    //     })
    // }

    addAllFilesScrollListener() {
        new ScrollListener(this.allFiles, () => this.updateMoreFiles())
    }

    show(visibilityDiv) {
        this.fileLoaderWrap.style.display = visibilityDiv == 0 ? 'flex' : 'none';
        this.allFiles.style.display = visibilityDiv == 1 ? (this.viewMode.isList() ? 'inline-flex' : 'inline-grid') : 'none';
        this.noFilesDiv.style.display = visibilityDiv == 2 ? 'flex' : 'none';
        this.dropToAdd.style.display = visibilityDiv == 3 ? 'flex' : 'none';
    }

    dropDiv(show) {
        this.dropToAdd.style.display = show ? 'flex' : 'none';
    }

    load() {
        this.show(VisibilityDiv.Load)
    }

    content() {
        this.show(VisibilityDiv.Content)
    }

    noFiles() {
        this.show(VisibilityDiv.NoContent)
    }
}
const VisibilityDiv = {
    Load: 0,
    Content: 1,
    NoContent: 2,
    FileDrag: 3
}
// File: ui/screens/home/text-tab.js
class TextTab {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        this.noOfTextOnEachCall = 10
        this.currentTextCount = 0
        this.totalTextCount = 54
        this.lastId = -1
        this.textContentDiv = $('textContentDiv')
        this.noTextDiv = $('noTextDiv')
        this.textLoaderWrap = $('textLoaderWrap')
        this.sendText = $('sendText')
        
        this.visibility = new Visibility(textContentDiv, noTextDiv, textLoaderWrap, 'flex')

        this.sampleData = api.isTest ? SampleData.getInstance() : null

        this.addTextDialog = new AddTextDialog()
        this.viewTextDialog = new ViewTextDialog()

        this.addScrollListener();
        this.sendText.onclick = () => this.onSendTextClicked()
    }

    getApiBody() {
        return {
            count: this.getMinimumTextCountToDisplay(),
            fromId: this.lastId,
        };
    }

    loadData() {
        this.updateText()
    }

    clear() {
        this.textContentDiv.innerHTML = '';
    }

    onText(list) {
        if (list.length > 0) this.lastId = list[list.length - 1].id
        if (list.length > 0) this.content();
        else this.noText();
        this.textContentDiv.scrollTop = 0;
        this.addTextList(list);
    }

    onMoreText(list) {
        if (list.length > 0) this.lastId = list[list.length - 1].id
        this.addTextList(list);

    }

    addTextList(textList) {
        for (let text of textList) this.add(text);
    }

    onSendTextClicked() {
        this.addTextDialog.show()
    }

    getMinimumTextCountToDisplay() {
        let count;
        let height = this.textContentDiv.offsetHeight
        if (height == 0) height = document.documentElement.clientHeight - 110
        count = Math.floor(height / 60) + 4
        if (count < 3) count = 10

        return count;
    }

    updateText() {
        this.load();
        this.clear();
        this.currentTextCount = 0;
        this.lastId = -1;
        if (api.isTest) this.sampleData.resetText()
        if (api.isTest) {
            api.apiDelay(() => {
                this.onText(this.sampleData.getSampleText(this.getApiBody()));
            })
            return
        }

        api.xhrAuthPost(ApiText, this.getApiBody(), (res) => this.onText(res));
    }

    updateMoreText() {
        if (api.isTest) {
            api.apiDelay(() => {
                this.onMoreText(this.sampleData.getSampleText(this.getApiBody()));
            })
            return
        }
        
        api.xhrAuthPost(ApiText, text.getApiBody(), (res) => this.onMoreText(res));
    }

    addScrollListener() {
        new ScrollListener(this.textContentDiv, () => this.updateMoreText())

    }

    load() { this.visibility.loading() }

    content() { this.visibility.content() }

    noText() { this.visibility.noContent() }

    addFirst(text) {
        this.content()
        this.textContentDiv.insertBefore(this.createTextDiv(text), this.textContentDiv.children[0])
    }

    add(text) {
        this.textContentDiv.appendChild(this.createTextDiv(text))
    }

    createTextDiv(textData, showFullText = false) {
        let div = element('DIV');
        div.style.padding = '10px';
        div.style.display = 'flex';
        div.style.flexFlow = 'column';
        if (!showFullText) {
            div.onclick = () => {
                this.viewTextDialog.show(div, textData);
            }
        }

        if (textData.isDeletable) {
            div.style.backgroundColor = primary + utils.percentToHex(20);
        }

        let userDiv =  element('DIV');
        userDiv.style.display = "flex";
        userDiv.style.justifyContent = "space-between";

        let name = element('A')
        name.innerHTML = textData.from
        name.style.textDecoration = 'none'
        name.style.fontWeight = '500'
        name.style.fontSize = '0.8em'
        name.style.color = "var(--text-color)"
        userDiv.appendChild(name)
        let time = element('A')
        time.innerHTML = utils.getTimeString(textData.time)
        time.style.fontWeight = '300'
        time.style.textDecoration = 'none'
        time.style.fontSize = '0.8em'
        time.style.textAlign = 'end'
        time.style.color = "var(--text-color)"
        userDiv.appendChild(time)
        div.appendChild(userDiv)

        let textA = element('A')
        textA.style.fontWeight = '200'
        textA.style.fontSize = '0.9em'
        textA.style.textDecoration = 'none'
        textA.style.whiteSpace = 'pre-wrap'
        textA.style.overflowWrap = 'break-word'
        textA.style.color = "var(--text-color)"
        let textString = utils.format(Base64.decode(textData.data))
        if (!showFullText) {
            div.classList.add('pointer')
            textA.style.display= "-webkit-box"
            textA.style["-webkit-line-clamp"] = "2"
            textA.style["-webkit-box-orient"] = "vertical"
            textA.style.overflow = "hidden"
            div.style.borderBottom = '1px solid var(--border-color)'
            textA.innerHTML = textString.substring(0, Math.min(500, textString.length))
        } else {
            textA.innerHTML = textString
        }

        div.appendChild(textA)
        return div
    }
}
// File: ui/screens/auth.js
class Auth extends Page {
    static inst = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new this()
        }
        return this.inst
    }

    constructor() {
        super($('auth'))
        this.authThemeChange = $('authThemeChange')
        this.authPin = $('authPin')
        this.pinError = $('pinError')
        this.submitButton = $('submitButton')
    
        this.authThemeChange.onclick = () => this.onAuthThemeClicked();
        this.authPin.oninput = () => this.onPinInput();
        this.submitButton.onclick = () => this.onAuthSubmitClicked();
    }


    onAuthThemeClicked() {
        Theme.getInstance().inverseTheme();
    }

    onPinInput() {
        this.pinError.innerHTML = '';
    }

    onAuthSubmitClicked() {
        let value = this.authPin.value;
        let validate = this.validate(value);
        if (validate != null) {
            this.pinError.innerHTML = validate;
        } else {
            api.auth(value);
        }
    }

    validate(pin) {
        let pinInt = parseInt(pin);
        if (pinInt.toString().length != 6) return "Pin must be 6 digits";
        return null;
    }

}
// File: ui/utils.js
const utils = {
    kilo: 1024,
    mega: Math.pow(1024, 2),
    giga: Math.pow(1024, 3),
    tera: Math.pow(1024, 4),

    selectText: function(node) {
        const win = window;
        const selection = win.getSelection();

        const range = win.document.createRange();
        selection.removeAllRanges();
        range.selectNode(node);
        selection.addRange(range);
    },

    copyToClipboard: function(text, onError) {
        if (!navigator.clipboard) {
            onError()
        } else {
            navigator.clipboard.writeText(text).then(
                () => {
                    utils.showSnack("Copied!")
                },
                () => {
                }
              );
        }
    },

    addIcon: function(parentDiv, file, padding) {
        let icon = element('div')
        icon.style.objectFit = "cover"
        icon.style.width = "100%"
        icon.style.height = '100%'
        icon.style.position = 'relative'
        icon.style.display = 'flex'
        // topDiv.style.backgroundColor = pri
        icon.innerHTML = IconMap[file.type](2)
        let iconSvg = icon.getElementsByTagName('svg')[0];
        iconSvg.style.margin = 'auto'
        iconSvg.style.width = 'auto'
        iconSvg.style.height = padding + 'px'
        parentDiv.appendChild(icon)
    },

    addImage(parentDiv, file, isGrid) {
        const padding = isGrid ? 30 : 20
        if (file.type == 'image' || file.type == 'video' || file.type == 'app') {
            api.addImage(file.id, (response) => {
                let image = element('img')
                image.style.objectFit = "cover"
                image.style.width = "100%"
                image.style.borderRadius = isGrid ? "6px 6px 0px 0px" : "6px"
                image.src = response
                parentDiv.appendChild(image)
            }, () => {
                utils.addIcon(parentDiv, file, padding)
            })
            if (file.type == 'video' && isGrid) {
                let durationDiv = element('DIV')
                // durationDiv.style.width = '1 6px'
                durationDiv.style.height = '16px'
                durationDiv.style.position = 'absolute'
                durationDiv.style.top = '8px'
                durationDiv.style.left = '8px'
                durationDiv.style.borderRadius = "4px"
                durationDiv.style.backgroundColor = '#00000080'
                durationDiv.style.display = 'flex'
                durationDiv.style.padding = '0px 4px';
                durationDiv.style.alignItems = 'center';
                durationDiv.innerHTML = Play
                let svg = durationDiv.getElementsByTagName('svg')[0];
                svg.style.margin = 'auto 4px auto auto'
                let durationText = element('A')
                durationText.style.fontWeight = '300'
                durationText.style.fontSize = '0.8em'
                durationText.style.color = 'white'
                durationText.innerHTML = utils.getPlayDurationString(file.duration)
                durationDiv.appendChild(durationText)
                parentDiv.appendChild(durationDiv)  
            }
        } else {
            utils.addIcon(parentDiv, file, padding)
        }
    },

    getType(file) {
        if (file.name.endsWith(".apk")) return "app"
        const parts = file.type.split("/")
        switch(parts[0]) {
            case "audio", "video", "image":
                return parts[0]
            default:
                return "document"
        }
    },

    validateName: function(name) {
        if (name.length < 5 || name.length > 25) return "Username must be between 5 and 25 character"
        if (!this.isLetter(name[0])) return "Username must start with a letter"
        for (let i = 0; i < name.length; i++) {
            const ch = name.charAt(i)
            if (!(this.isLetter(ch) || this.isDigit(ch) || ch == '_')) return "Username can only contain alphanumeric characters and underscores"
        }
        return null
    },

    isLetter: function(c) {
        let n = c.charCodeAt(0)
        return (n >= 65 && n < 91) || (n >= 97 && n < 123)
    },

    isDigit: function(c) {
        return c >= '0' && c <= '9'
    },

    openUrl: function(url, open) {
        let a = element('a')
        a.href = url
        if (open)
            a.target = '_blank'
        else 
            a.download = true
        a.click()
    },

    openFile: function(id, open) {
        api.getFileUrl(id, (res) => {
            utils.openUrl(res, open)
        })
    },

    getSizeString: function(size) {
        let s = ""
        let kb = size / this.kilo
        let mb = kb / this.kilo
        let gb = mb / this.kilo
        let tb = gb / this.kilo
        if(size < this.kilo) {
            s = size + " Bytes"
        } else if(size >= this.kilo && size < this.mega) {
            s =  kb.toFixed(2) + " KB"
        } else if(size >= this.mega && size < this.giga) {
            s = mb.toFixed(2) + " MB"
        } else if(size >= this.giga && size < this.tera) {
            s = gb.toFixed(2) + " GB"
        } else if(size >= this.tera) {
            s = tb.toFixed(2) + " TB"
        }
        return s;
    },

    getDurationString: function(millis) {
        let seconds = Math.floor(millis / 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        if (hours > 0) {
            return `${hours}h ${minutes % 60}m ${seconds % 60}s`
        } else {
            return `${minutes % 60}m ${seconds % 60}s`
        }
    },

    getPlayDurationString: function(millis) {
        let seconds = Math.floor(millis / 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        if (hours > 0) {
            return `${utils.getInt2d(hours)}:${utils.getInt2d(minutes % 60)}`
        } else {
            return `00:${utils.getInt2d(minutes % 60)}`
        }
    },

    getInt2d(num) {
        if (num <= 9) return `0${num}`
        else return num
    },

    dayInMillis: 24 * 60 * 60 * 1000,

    getTimeString: function(time) {
        let tomorrow = new Date()
        tomorrow.setHours(0, 0, 0, 0)
        tomorrow.setDate(tomorrow.getDate() + 1)
        let diff = Math.floor((tomorrow.getTime() - time) / this.dayInMillis)
        let date = new Date(time)
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let timeString = hours + ':' + minutes + ' ' + ampm;
        if (diff == 0) {
            return timeString
        } else {
            return date.toLocaleString('en-us',{ month:'short', day: 'numeric' }) + ", " + timeString
        }
    },

    capitalize: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    format: function(text) {
        text = text.replace(/&/g, '&amp;')
        text = text.replace(/</g, '&lt;')
        text = text.replace(/>/g, '&gt;')
        return text;
    },

    percentToHex: (x) => Math.ceil( x / 100 * 255).toString(16),

    ran: function(min = 1, max = 10) {
        return Math.floor(Math.random() * max) + min
    },

    getSampleText: function(min = 1, max = 10) {
        const code = 'a'.charCodeAt(0);
        let res = ""
        for (let i = 0; i < this.ran(min, max); ++i) res += String.fromCharCode(code + this.ran())
        return res
    },

    isValidString: function(str) {
        return str && str != null && str.length > 0
    },

    handleError: function(res) {
        switch (res.errorType) {
            case 1:
                utils.showSnack(res.error);
                break;
            case 2:
                pageManager.tryAgainDialog(NoAccess);
                break;
            case 3:
                pageManager.tryAgainDialog({
                    title: res.error
                });
                break;
        }
    },

    snackbar: $("snackbar"),
    showSnack: function(text) {
        this.snackbar.innerHTML = text
        this.snackbar.className = "show";
        setTimeout(function() { this.snackbar.className = this.snackbar.className.replace("show", ""); }, 3000);
    },
}
// File: api.js
class Api {
    constructor() {
        this.isTest = window.location.protocol == 'file:'
        this.testLoadTime = 300
        this.userId = null
        this.sampleStatus = {
            name: "sompt",
            userId: "MA==",
            isAuthorized: false,
            isSecurityEnabled: false
        }
        this.sampleAuth = {
            isValid: true,
            error: "Blocked"
        }
    }

    apiDelay(onRes) {
        new Promise((resolve, reject) => setTimeout(() => {
            onRes()
        }, this.testLoadTime))
    }

    saveUserId(userId) {
        localStorage.setItem('userId', userId);
    }

    getSavedUserId() {
        let data = localStorage['userId'];
        if(data == undefined || data == 'undefined') return null;
        return data;
    }

    getOs() {
        let os = "Unknown OS";
        const ua = navigator.userAgent
        if (ua.indexOf("Win") != -1) os = "Windows";
        if (ua.indexOf("Mac") != -1) os = "MacOS";
        if (ua.indexOf("X11") != -1) os = "UNIX";
        if (ua.indexOf("Linux") != -1) os = "Linux";
        if (ua.indexOf("Android") != -1) os = "Android";
        if (ua.indexOf("like Mac") != -1) os = "iOS";
        return os;
    }

    addReadyStateChange(xhr, url, onRes) {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                log("api: " + url + " -> " + xhr.status);
                switch (xhr.status) {
                    case 200:
                        var res = JSON.parse(xhr.responseText)
                        if (res.showError && res.error) {
                            utils.showSnack(res.error)
                        } else {
                            onRes(res)
                        }
                        break
                    case 401:
                        this.onUnauthorized()
                        break;
                    default:
                        try {
                            var res = JSON.parse(xhr.responseText)
                            if (res.showError) {
                                utils.showSnack(res.error)
                            }
                        } catch(err) {

                        }

                }
            }
        }
    }

    xhrAuthGet(url, onRes) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader("Authorization", "Basic " + this.userId);
        xhr.addEventListener('error', this.onError);
        this.addReadyStateChange(xhr, url, (res) => onRes(res));
        xhr.send();
    }

    xhrAuthPost(url, body, onRes) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Basic " + this.userId);
        xhr.addEventListener('error', this.onError);
        let data = JSON.stringify(body);
        this.addReadyStateChange(xhr, url, (res) => onRes(res));
        xhr.send(data);
    }
    
    updateStatus() {
        if (this.isTest) {
            this.apiDelay(() => {
                this.onStatus(this.sampleStatus)
            });
        } else {
            if (!this.statusXhr) {
                this.statusXhr = new XMLHttpRequest();
            }
            if (this.statusXhr.readyState > 0 && this.statusXhr.readyState < 4) return;
            let body = { os: this.getOs() };
            let userId = this.getSavedUserId();
            if (userId != null) body['userId'] = userId;
            let data = JSON.stringify(body);
            this.statusXhr.open("POST", ApiStatus);
            this.statusXhr.setRequestHeader("Content-Type", "application/json");
            this.statusXhr.addEventListener('error', this.onError);
            this.addReadyStateChange(this.statusXhr, ApiStatus, (res) => this.onStatus(res));
            this.statusXhr.send(data);
        }
    }

    onError(e) {
        console.error("onError", e);
        pageManager.tryAgainDialog(NoServer);
    }

    onStatus(statusRes) {
        log(statusRes);
        this.statusApiInProgress = false
        if (statusRes.error) {
            utils.handleError(statusRes);
        } else {
            this.userId = statusRes.id;
            this.saveUserId(this.userId);
            if (statusRes.isBlocked) {
                pageManager.tryAgainDialog(NoAccess);
            } else if (statusRes.isSecurityEnabled && !statusRes.isAuthorized) {
                pageManager.auth();
            } else {
                pageManager.home();
            }
        }
    }

    onUnauthorized() {
        this.updateStatus();
    }

    auth(pin) {
        if (this.isTest) {
            this.apiDelay(() => {
                this.onAuth(this.sampleAuth)
            })
        }
        this.xhrAuthPost(ApiAuth, {pin: pin}, (res) => this.onAuth(res));
    }

    onAuth(authRes) {
        this.authRes = authRes;
        if (authRes.isValid) {
            pageManager.home();
        } else {
           const auth = Auth.getInstance()
           auth.pinError.innerHTML = authRes.error;
        }
    }

    sendText(text, onRes) {
        if (this.isTest) {
            this.apiDelay(() => {
                onRes({
                    isUpdated: true,
                    text : {
                        data: btoa(text),
                        time: Date.now(),
                        from: "User-" + utils.ran(),
                        isDeletable: true,
                    }
                })
            })
            return
        }
        let xhr = new XMLHttpRequest();
        xhr.open("POST", ApiAddText);
        xhr.setRequestHeader("Content-Type", "text/plain");
        xhr.setRequestHeader("Authorization", "Basic " + this.userId);
        xhr.addEventListener('error', (e) => this.onError(e));
        this.addReadyStateChange(xhr, ApiAddText, (res) => onRes(res));
        xhr.send(text);
    }

    changeName(name, onRes) {
        if (this.isTest) {
            onRes({isUpdated: true})
            return
        }
        this.xhrAuthPost(ApiChangeName, { name: name }, (res) => onRes(res));
    }

    getFileUrl(fileId, onRes) {
        this.xhrAuthGet(ApiSignedUrlFile + "/" + fileId, (response) => onRes(ApiFile + "/" + response.name));
    }

    getZipUrl(ids, onRes) {
        this.xhrAuthPost(ApiSignedUrlZip, { ids: ids } , (response) => onRes(ApiZip + "/" + response.name));
    }

    getInfo(onRes) {
        if (this.isTest) {
            onRes({ name: 'name' })
            return;
        }
        this.xhrAuthGet(ApiInfo, (res) => onRes(res), true);
    }

    deleteFile(fileId, onRes) {
        if (this.isTest) {
            this.apiDelay(() => {
                onRes({isDeleted: true})
            })
            return
        }
        this.xhrAuthGet(ApiDeleteFile + "/" + fileId, (res) => onRes(res));
    }

    deleteText(textId, onRes) {
        if (this.isTest) {
            this.apiDelay(() => {
                onRes({isDeleted: true})
            })
            return
        }
        this.xhrAuthGet(ApiDeleteText + "/" + textId, (res) => onRes(res));
    }

    addImage(fileId, onSuccess, onError) {
        if (this.isTest) {
            // onError()
            onSuccess("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=");
            return;
        }
        const url = ApiImage + "/" + fileId;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader("Authorization", "Basic " + this.userId);
        xhr.timeout = 2000;
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                log("api: " + url + " -> " + xhr.status);
                switch (xhr.status) {
                    case 200:
                        onSuccess('data:image/png;base64, ' + xhr.responseText);
                        break
                    case 404:
                        onError(xhr.responseText);
                        break;
                    case 401:
                        this.onUnauthorized();
                        break;
                }
            }
        }
        xhr.addEventListener('error', this.onError);
        xhr.send();
    }

    getUploadInfo(onSuccess) {
        if (this.isTest) {
            this.apiDelay(() => onSuccess({
                isUploadAvailable: true,
                availableCount: 0
            }))
            return;
        }
        this.xhrAuthGet(ApiUploadInfo, (res) => onSuccess(res));
    }
}
// File: constants.js
const primaryTransparent = "#64A1BD40";
const primary = getComputedStyle(document.getElementsByTagName("BODY")[0]).getPropertyValue('--primary-color');
const types = ['video', 'audio', 'image', 'document', 'app'];

const IconMap = new Map();
IconMap['audio'] = function(stroke) {
    return '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.49561 16.0779V4.56126C5.49561 4.10463 5.80492 3.70601 6.24723 3.59259L16.2326 1.03225C16.8651 0.870051 17.4809 1.34786 17.4809 2.00092V14.7609" stroke="#4CAF50" stroke-width="' + stroke + '"/><path d="M5.49512 8.22356L17.4821 5.22681" stroke="#4CAF50" stroke-width="' + stroke + '"/><path d="M3.24756 18.7122C4.48886 18.7122 5.49512 17.7059 5.49512 16.4646C5.49512 15.2233 4.48886 14.217 3.24756 14.217C2.00627 14.217 1 15.2233 1 16.4646C1 17.7059 2.00627 18.7122 3.24756 18.7122Z" stroke="#4CAF50" stroke-width="' + stroke + '"/><path d="M15.2345 17.2136C16.4758 17.2136 17.4821 16.2074 17.4821 14.9661C17.4821 13.7248 16.4758 12.7185 15.2345 12.7185C13.9932 12.7185 12.9869 13.7248 12.9869 14.9661C12.9869 16.2074 13.9932 17.2136 15.2345 17.2136Z" stroke="#4CAF50" stroke-width="' + stroke + '"/></svg>'
}
IconMap['document'] = function(stroke) {
    return '<svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66956 1H19.6696" stroke="#FB8C00" stroke-width="' + stroke + '" stroke-linecap="round"/><path d="M1.66956 5.90918L13.9423 5.90918" stroke="#FB8C00" stroke-width="' + stroke + '" stroke-linecap="round"/><path d="M1.66956 10.8181H18.0332" stroke="#FB8C00" stroke-width="' + stroke + '" stroke-linecap="round"/><path d="M1.66956 15.7273L10.6696 15.7273" stroke="#FB8C00" stroke-width="' + stroke + '" stroke-linecap="round"/></svg>';
}
IconMap['image'] = function(stroke) {
    return '<svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00433 10.9089L1.67799 16.0093C1.24419 16.6745 1.72147 17.5556 2.5156 17.5556H18.8147C19.6106 17.5556 20.0875 16.6709 19.6501 16.006L13.1181 6.07736C12.7375 5.49881 11.8982 5.47295 11.4827 6.02698L8.01978 10.6442C7.659 11.1252 6.95582 11.1752 6.53064 10.75C6.08686 10.3062 5.34717 10.3832 5.00433 10.9089Z" stroke="#AB47BC" stroke-width="' + stroke + '"/><circle cx="4.2807" cy="3.5" r="2.5" stroke="#AB47BC" stroke-width="' + stroke + '"/></svg>';
}
IconMap['video'] = function(stroke) {
    return '<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.48206 2.75499V17.245C1.48206 18.0199 2.32526 18.5003 2.99186 18.1053L15.2178 10.8603C15.8714 10.473 15.8714 9.52702 15.2178 9.13971L2.99186 1.8947C2.32526 1.49967 1.48206 1.98013 1.48206 2.75499Z" stroke="#F44336" stroke-width="' + stroke + '"/></svg>';
}
IconMap['app'] = function(stroke) {
    return '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5.37544" cy="4.70588" r="3.70588" stroke="#607D8B" stroke-width="' + stroke + '"/><circle cx="5.37544" cy="15.294" r="3.70588" stroke="#607D8B" stroke-width="' + stroke + '"/><circle cx="15.9637" cy="4.70588" r="3.70588" stroke="#607D8B" stroke-width="' + stroke + '"/><circle cx="15.9637" cy="15.294" r="3.70588" stroke="#607D8B" stroke-width="' + stroke + '"/></svg>';
}

const Play = '<svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.45053 3.62842C7.13018 4.01073 7.13018 4.98927 6.45053 5.37158L1.49026 8.16173C0.823658 8.53669 4.23987e-08 8.05498 7.6713e-08 7.29015L3.27075e-07 1.70985C3.6139e-07 0.945021 0.823658 0.463307 1.49026 0.838272L6.45053 3.62842Z" fill="white"/></svg>';
const SelectIcon = '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2L7.125 9.27273L4 5.96694" stroke="var(--text-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.69325 1.66669H2.66658C2.31296 1.66669 1.97382 1.80716 1.72378 2.05721C1.47373 2.30726 1.33325 2.6464 1.33325 3.00002V12.3334C1.33325 12.687 1.47373 13.0261 1.72378 13.2762C1.97382 13.5262 2.31296 13.6667 2.66658 13.6667H11.9999C12.3535 13.6667 12.6927 13.5262 12.9427 13.2762C13.1928 13.0261 13.3332 12.687 13.3332 12.3334V8.30669" stroke="var(--text-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>'
const UnselectIcon = '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.69333 1.66675H2.66666C2.31304 1.66675 1.9739 1.80722 1.72385 2.05727C1.4738 2.30732 1.33333 2.64646 1.33333 3.00008V12.3334C1.33333 12.687 1.4738 13.0262 1.72385 13.2762C1.9739 13.5263 2.31304 13.6668 2.66666 13.6668H12C12.3536 13.6668 12.6928 13.5263 12.9428 13.2762C13.1928 13.0262 13.3333 12.687 13.3333 12.3334V7.30675" stroke="var(--text-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>'
const DeleteIcon = '<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4H2.33333H13" stroke="var(--text-color)" stroke-width="var(--text-color)" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.33333 3.99992V2.66659C4.33333 2.31296 4.4738 1.97382 4.72385 1.72378C4.9739 1.47373 5.31304 1.33325 5.66666 1.33325H8.33333C8.68695 1.33325 9.02609 1.47373 9.27614 1.72378C9.52619 1.97382 9.66666 2.31296 9.66666 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2761 14.2761C11.0261 14.5261 10.687 14.6666 10.3333 14.6666H3.66666C3.31304 14.6666 2.9739 14.5261 2.72385 14.2761C2.4738 14.026 2.33333 13.6869 2.33333 13.3333V3.99992H11.6667Z" stroke="var(--text-color)" stroke-width="var(--text-color)" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.66667 7.33325V11.3333" stroke="var(--text-color)" stroke-width="var(--text-color)" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.33333 7.33325V11.3333" stroke="var(--text-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>'
const NewTabIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.69333 2.66675H2.66666C2.31304 2.66675 1.9739 2.80722 1.72385 3.05727C1.4738 3.30732 1.33333 3.64646 1.33333 4.00008V13.3334C1.33333 13.687 1.4738 14.0262 1.72385 14.2762C1.9739 14.5263 2.31304 14.6668 2.66666 14.6668H12C12.3536 14.6668 12.6928 14.5263 12.9428 14.2762C13.1928 14.0262 13.3333 13.687 13.3333 13.3334V9.30675" stroke="var(--text-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6102 6.60075V1.17017H9.17961" stroke="var(--text-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.08 1.8101L7.03999 8.8501" stroke="var(--text-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>'
const DownloadIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 10.3999V13.5999C15.2 14.0242 15.0314 14.4312 14.7314 14.7313C14.4313 15.0313 14.0243 15.1999 13.6 15.1999H2.4C1.97566 15.1999 1.56869 15.0313 1.26863 14.7313C0.968574 14.4312 0.800003 14.0242 0.800003 13.5999V10.3999" stroke="var(--text-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 6.3999L8 10.3999L12 6.3999" stroke="var(--text-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 10.4V0.800049" stroke="var(--text-color)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>'
const ListIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.25C0.585786 0.25 0.25 0.585786 0.25 1V5C0.25 5.41421 0.585786 5.75 1 5.75H5H19C19.4142 5.75 19.75 5.41421 19.75 5V1C19.75 0.585786 19.4142 0.25 19 0.25H5H1ZM4.25 1.75V4.25H1.75V1.75H4.25ZM18.25 4.25H5.75V1.75H18.25V4.25ZM1 7.25C0.585786 7.25 0.25 7.58579 0.25 8V12C0.25 12.4142 0.585786 12.75 1 12.75H5H19C19.4142 12.75 19.75 12.4142 19.75 12V8C19.75 7.58579 19.4142 7.25 19 7.25H5H1ZM5.75 8.75V11.25H18.25V8.75H5.75ZM4.25 8.75H1.75V11.25H4.25V8.75ZM5.75 15.75V18.25H18.25V15.75H5.75ZM5 19.75H1C0.585786 19.75 0.25 19.4142 0.25 19V15C0.25 14.5858 0.585786 14.25 1 14.25H5H19C19.4142 14.25 19.75 14.5858 19.75 15V19C19.75 19.4142 19.4142 19.75 19 19.75H5ZM4.25 18.25V15.75H1.75V18.25H4.25Z" fill="var(--text-color)"/></svg>'
const GridIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 0.25C1.0335 0.25 0.25 1.0335 0.25 2V7.41176C0.25 8.37826 1.0335 9.16176 2 9.16176H7.41176C8.37826 9.16176 9.16176 8.37826 9.16176 7.41176V2C9.16176 1.0335 8.37826 0.25 7.41176 0.25H2ZM1.75 2C1.75 1.86193 1.86193 1.75 2 1.75H7.41176C7.54984 1.75 7.66176 1.86193 7.66176 2V7.41176C7.66176 7.54984 7.54983 7.66176 7.41176 7.66176H2C1.86193 7.66176 1.75 7.54983 1.75 7.41176V2ZM12.5881 0.25C11.6216 0.25 10.8381 1.0335 10.8381 2V7.41176C10.8381 8.37826 11.6216 9.16176 12.5881 9.16176H17.9999C18.9664 9.16176 19.7499 8.37826 19.7499 7.41176V2C19.7499 1.0335 18.9664 0.25 17.9999 0.25H12.5881ZM12.3381 2C12.3381 1.86193 12.4501 1.75 12.5881 1.75H17.9999C18.138 1.75 18.2499 1.86193 18.2499 2V7.41176C18.2499 7.54984 18.138 7.66176 17.9999 7.66176H12.5881C12.4501 7.66176 12.3381 7.54983 12.3381 7.41176V2ZM10.8381 12.5883C10.8381 11.6218 11.6216 10.8383 12.5881 10.8383H17.9999C18.9664 10.8383 19.7499 11.6218 19.7499 12.5883V18C19.7499 18.9665 18.9664 19.75 17.9999 19.75H12.5881C11.6216 19.75 10.8381 18.9665 10.8381 18V12.5883ZM12.5881 12.3383C12.4501 12.3383 12.3381 12.4502 12.3381 12.5883V18C12.3381 18.1381 12.4501 18.25 12.5881 18.25H17.9999C18.138 18.25 18.2499 18.1381 18.2499 18V12.5883C18.2499 12.4502 18.138 12.3383 17.9999 12.3383H12.5881ZM2 10.8383C1.0335 10.8383 0.25 11.6218 0.25 12.5883V18C0.25 18.9665 1.0335 19.75 2 19.75H7.41176C8.37826 19.75 9.16176 18.9665 9.16176 18V12.5883C9.16176 11.6218 8.37826 10.8383 7.41176 10.8383H2ZM1.75 12.5883C1.75 12.4502 1.86193 12.3383 2 12.3383H7.41176C7.54984 12.3383 7.66176 12.4502 7.66176 12.5883V18C7.66176 18.1381 7.54983 18.25 7.41176 18.25H2C1.86193 18.25 1.75 18.1381 1.75 18V12.5883Z" fill="var(--text-color)"/></svg>'
const MaximizeIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" ><path d="M8.75024 11.2498L2.38643 17.6136" stroke="var(--text-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.38647 12.8407V17.6136H7.15933" stroke="var(--text-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.2498 8.75024L17.6136 2.38643" stroke="var(--text-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.6135 7.1593L17.6135 2.38644L12.8407 2.38644" stroke="var(--text-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
const MinimizeIcon = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 16.7502L7.36381 10.3864" stroke="var(--text-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.36377 15.1593L7.36377 10.3864L2.59091 10.3864" stroke="var(--text-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.7502 1L10.3864 7.36381" stroke="var(--text-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.3865 2.59094L10.3865 7.3638L15.1593 7.3638" stroke="var(--text-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
const playIcon = '<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.244652 0.0672831C0.394754 -0.0220975 0.579784 -0.0224485 0.730204 0.0663618L7.083 3.81713L13.4352 7.56803C13.5862 7.65719 13.6793 7.82263 13.6793 8.00172C13.6793 8.18082 13.5861 8.34622 13.4351 8.43535L0.728012 15.9337C0.577566 16.0225 0.392531 16.0221 0.242449 15.9327C0.0923658 15.8432 -2.4913e-05 15.6783 5.03908e-09 15.4999L0.00209411 0.499928C0.00211902 0.321532 0.0945509 0.156664 0.244652 0.0672831ZM0.974196 1.36345L0.972343 14.6366L12.2166 8.00151L6.599 4.6844L0.974196 1.36345Z" fill="white"/></svg>'
const LightThemeIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1C11 0.447715 11.4477 0 12 0ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM13 21C13 20.4477 12.5523 20 12 20C11.4477 20 11 20.4477 11 21V23C11 23.5523 11.4477 24 12 24C12.5523 24 13 23.5523 13 23V21ZM3.51286 3.51286C3.90339 3.12234 4.53655 3.12234 4.92708 3.51286L6.34708 4.93286C6.7376 5.32339 6.7376 5.95655 6.34708 6.34708C5.95655 6.7376 5.32339 6.7376 4.93286 6.34708L3.51286 4.92708C3.12234 4.53655 3.12234 3.90339 3.51286 3.51286ZM19.0671 17.653C18.6766 17.2625 18.0434 17.2625 17.6529 17.653C17.2624 18.0435 17.2624 18.6767 17.6529 19.0672L19.0729 20.4872C19.4634 20.8777 20.0966 20.8777 20.4871 20.4872C20.8776 20.0967 20.8776 19.4635 20.4871 19.073L19.0671 17.653ZM0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1C0.447715 13 0 12.5523 0 12ZM21 11C20.4477 11 20 11.4477 20 12C20 12.5523 20.4477 13 21 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H21ZM6.34708 17.653C6.7376 18.0435 6.7376 18.6767 6.34708 19.0672L4.92708 20.4872C4.53655 20.8777 3.90339 20.8777 3.51286 20.4872C3.12234 20.0967 3.12234 19.4635 3.51286 19.073L4.93286 17.653C5.32339 17.2625 5.95655 17.2625 6.34708 17.653ZM20.4871 4.92708C20.8776 4.53655 20.8776 3.90339 20.4871 3.51286C20.0966 3.12234 19.4634 3.12234 19.0729 3.51286L17.6529 4.93286C17.2624 5.32339 17.2624 5.95655 17.6529 6.34708C18.0434 6.7376 18.6766 6.7376 19.0671 6.34708L20.4871 4.92708Z" fill="var(--icon-color)"/></svg>'
const DarkThemeIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0812 0.509041C10.2747 0.852424 10.2485 1.27745 10.0142 1.59442C9.15997 2.75008 8.74892 4.17395 8.85579 5.60706C8.96266 7.04018 9.58035 8.38733 10.5965 9.40351C11.6127 10.4197 12.9599 11.0374 14.393 11.1443C15.8261 11.2511 17.25 10.8401 18.4056 9.98585C18.7226 9.75156 19.1476 9.72532 19.491 9.91884C19.8344 10.1124 20.0321 10.4895 19.9958 10.882C19.821 12.7734 19.1112 14.5758 17.9494 16.0785C16.7876 17.5811 15.2219 18.7218 13.4355 19.3671C11.649 20.0124 9.71576 20.1355 7.86189 19.7221C6.00802 19.3088 4.31022 18.376 2.96714 17.0329C1.62407 15.6898 0.691269 13.992 0.2779 12.1381C-0.135469 10.2843 -0.0123126 8.35102 0.632958 6.56459C1.27823 4.77816 2.41893 3.21244 3.92157 2.05065C5.42422 0.88886 7.22667 0.179044 9.118 0.00425972C9.51049 -0.0320113 9.88767 0.165658 10.0812 0.509041ZM7.31641 2.43908C6.5388 2.72043 5.80562 3.12204 5.1449 3.63289C3.94278 4.56232 3.03023 5.81489 2.51401 7.24404C1.99779 8.67318 1.89927 10.2198 2.22996 11.7029C2.56066 13.186 3.30689 14.5442 4.38136 15.6187C5.45582 16.6931 6.81406 17.4394 8.29716 17.7701C9.78025 18.1008 11.3269 18.0022 12.756 17.486C14.1851 16.9698 15.4377 16.0573 16.3672 14.8551C16.878 14.1944 17.2796 13.4612 17.561 12.6836C16.5078 13.0646 15.3782 13.2233 14.2442 13.1387C12.3334 12.9962 10.5372 12.1726 9.18232 10.8177C7.82742 9.46282 7.00382 7.66661 6.86132 5.7558C6.77676 4.62183 6.9354 3.4922 7.31641 2.43908Z" fill="var(--icon-color)"/></svg>'
const arrow = '<svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 9.20696C16.3166 9.59748 15.6834 9.59748 15.2929 9.20696L8.5 2.41406L1.70711 9.20696C1.31658 9.59748 0.683416 9.59748 0.292892 9.20696C-0.0976318 8.81643 -0.0976318 8.18327 0.292892 7.79274L7.08579 0.999848C7.86683 0.218801 9.13316 0.218799 9.91421 0.999848L16.7071 7.79274C17.0976 8.18327 17.0976 8.81643 16.7071 9.20696Z" fill="var(--text-color)"/></svg>'
const deleteIcon = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 6C5.77614 6 6 6.22386 6 6.5V10.5C6 10.7761 5.77614 11 5.5 11C5.22386 11 5 10.7761 5 10.5V6.5C5 6.22386 5.22386 6 5.5 6Z" fill="#FF5722"/><path d="M8.5 6.5C8.5 6.22386 8.27614 6 8 6C7.72386 6 7.5 6.22386 7.5 6.5V10.5C7.5 10.7761 7.72386 11 8 11C8.27614 11 8.5 10.7761 8.5 10.5V6.5Z" fill="#FF5722"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.64 2.52V1.12C10.64 0.50225 10.1377 0 9.52 0H3.92C3.30225 0 2.8 0.50225 2.8 1.12V2.52H0.56C0.25025 2.52 0 2.77025 0 3.08V3.64C0 3.717 0.063 3.78 0.14 3.78H1.197L1.62925 12.9325C1.65725 13.5293 2.15075 14 2.7475 14H10.6925C11.291 14 11.7828 13.531 11.8108 12.9325L12.243 3.78H13.3C13.377 3.78 13.44 3.717 13.44 3.64V3.08C13.44 2.77025 13.1897 2.52 12.88 2.52H10.64ZM9.38 1.26V2.52H4.06V1.26H9.38ZM10.5577 12.74H2.88225L2.45875 3.78H10.9812L10.5577 12.74Z" fill="#FF5722"/></svg>'
const CloseIcon = '<svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M21 1L1 21M21 21L1 1L21 21Z" stroke-width="2" stroke-linecap="round" stroke="var(--text-color)"/></svg>'
const FileCloseIcon = '<svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M21 1L1 21M21 21L1 1L21 21Z" stroke-width="3" stroke-linecap="round" stroke="var(--text-color)"/></svg>'
const TickIcon = '<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.27273 1L3.27273 6L1 3.72727" stroke="var(--icon-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'

const LimitReachedTitle = "You've reached the limit.";
const LimitReachedDescription = "You have reached the limit for uploading files. This is due to the file count limit. Please remove some of the existing files.";
const UploadDisabledTitle = "File Upload Disabled";
const UploadDisabledDescription = "File uploads have been temporarily disabled by the app user. Please contact your the app user for more information on when this feature will be available again.";

const NoServer = {
    title: "Server not found",
    image: "images/no_server.png",
    description: "Please check if the server is started and connected to the same Wi-Fi network"
}

const NoAccess = {
    title : "Unauthroized Access",
    image : "images/no_access.png",
    description : "Access denied"
}


const ApiImage = "/api/image";
const ApiStatus = "/api/status";
const ApiAuth = "/api/auth";
const ApiSignedUrlFile = "/api/url-file";
const ApiSignedUrlZip = "/api/url-zip";
const ApiFile = "/api/file";
const ApiText = "/api/text";
const ApiAddText = "/api/add-text";
const ApiDeleteText = "/api/delete-text";
const ApiFiles = "/api/files";
const ApiMyFiles = "/api/my-files";
const ApiInfo = "/api/info";
const ApiUploadFile = "/api/upload-file";
const ApiDeleteFile = "/api/delete-file";
const ApiDeleteMultiFile = "/api/delete-multi-file";
const ApiZip = "/api/zip";
const ApiChangeName = "/api/change-name";
const ApiUploadInfo = "/api/upload-info";
// File: init.js
var isFileInfoSideVisible = !(document.body.clientWidth < 760);

window.matchMedia("(max-width: 760px)").addEventListener("change", (x) => {
    isFileInfoSideVisible = !x.matches
    if (fileSelectionMode) fileSelectionMode.updateMode()
    if (fileInfo) fileInfo.updateSelectedCountText()
    log("760px isFileInfoSideVisible " + isFileInfoSideVisible);
});

const delay = ms => new Promise(res => setTimeout(res, ms));

const theme = Theme.getInstance()

const pageManager = PageManager.getInstance()
pageManager.loader()

const api = new Api()
api.updateStatus()
