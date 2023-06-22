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