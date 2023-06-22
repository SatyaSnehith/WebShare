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