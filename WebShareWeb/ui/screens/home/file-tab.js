class FileTab {
    static instance = null

    static getInstance() {
        if (this.instance == null) {
            this.instance = new this()
        }
        return this.instance
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
            console.log(res);
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
        console.log("updateMoreIfNotScrollable");
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
        console.log("API ISTEST " + api.isTest);
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
        
        api.xhrAuthPostAsync(ApiFiles, this.getFileApiBody(), (res) => this.onMoreFiles(res));
    }

    // bottomLoader: null,
    // isBottomScrolled: false,

    // showBottomLoading(isShow) {
    //     window.requestAnimationFrame(() => {
    //         if (files.bottomLoader == null) {
    //             files.bottomLoader = document.createElement('div')
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