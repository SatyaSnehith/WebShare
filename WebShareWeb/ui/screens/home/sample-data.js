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