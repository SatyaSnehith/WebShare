const $ = q => document.getElementById(q)

var fileTab = undefined
var fileSelectionMode = undefined
var fileInfo = undefined

var textTab = undefined

class Theme {
    static instance = null

    static getInstance() {
        if (this.instance == null) {
            this.instance = new this()
        }
        return this.instance
    }

    constructor() {
        this.bodyElement = document.body
        this.authThemeChange = $('authThemeChange')
    
        this.DarkTheme = "darkTheme"
        this.LightTheme = "lightTheme"
        this.theme = localStorage['theme'] ? JSON.parse(localStorage['theme']) : null

        if(this.theme == this.LightTheme) {
            this.light();
        } else if (this.theme == this.DarkTheme) {
            this.dark();
        } else {
            this.light();
        }
    }

    dark() {
        this.theme = this.DarkTheme;
        this.bodyElement.classList.remove(this.LightTheme);
        this.bodyElement.classList.add(this.DarkTheme);
        authThemeChange.src = 'images/sun.svg';
        localStorage.setItem('theme', JSON.stringify(this.theme));
    }

    light() {
        this.theme = this.LightTheme;
        this.bodyElement.classList.remove(this.DarkTheme);
        this.bodyElement.classList.add(this.LightTheme);
        authThemeChange.src = 'images/moon.svg';
        localStorage.setItem('theme', JSON.stringify(this.theme));
    }

    inverseTheme() {
        if(this.theme == this.LightTheme) {
            this.dark();
        } else if (this.theme == this.DarkTheme) {
            this.light();
        }
    }

    isLightTheme() { return this.theme == this.LightTheme; }

    isDarkTheme() { return this.theme == this.DarkTheme; }
};