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
