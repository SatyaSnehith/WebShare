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
