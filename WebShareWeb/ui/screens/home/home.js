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