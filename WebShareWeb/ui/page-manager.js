class PageManager {
    static instance = null

    static getInstance() {
        if (this.instance == null) {
            this.instance = new this()
        }
        return this.instance
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