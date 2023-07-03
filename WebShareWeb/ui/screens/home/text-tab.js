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
