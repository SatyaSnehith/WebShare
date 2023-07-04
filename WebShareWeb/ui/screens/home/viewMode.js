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
