const utils = {
    kilo: 1024,
    mega: Math.pow(1024, 2),
    giga: Math.pow(1024, 3),
    tera: Math.pow(1024, 4),

    selectText: function(node) {
        // node.select();
        // node.setSelectionRange(0, 99999);
        const win = window;
        const selection = win.getSelection();

        const range = win.document.createRange();
        selection.removeAllRanges();
        range.selectNode(node);
        selection.addRange(range);
    },

    copyToClipboard: function(text, onError) {
        var input = document.createElement("input");
        input.type = "text";
        input.value = text
        input.focus();
        input.select();
        input.setSelectionRange(0, 99999);
        if (!navigator.clipboard) {
            onError()
        } else {
            navigator.clipboard.writeText(text).then(
                () => {
                    utils.showSnack("Copied!")
                },
                () => {
                }
            );
        }
    },

    addIcon: function(parentDiv, file, padding) {
        let icon = element('div')
        icon.style.objectFit = "cover"
        icon.style.width = "100%"
        icon.style.height = '100%'
        icon.style.position = 'relative'
        icon.style.display = 'flex'
        // topDiv.style.backgroundColor = pri
        icon.innerHTML = IconMap[file.type](2)
        let iconSvg = icon.getElementsByTagName('svg')[0];
        iconSvg.style.margin = 'auto'
        iconSvg.style.width = 'auto'
        iconSvg.style.height = padding + 'px'
        parentDiv.appendChild(icon)
    },

    addImage(parentDiv, file, isGrid) {
        const padding = isGrid ? 30 : 20
        if (file.type == 'image' || file.type == 'video' || file.type == 'app') {
            api.addImage(file.id, (response) => {
                let image = element('img')
                image.style.objectFit = "cover"
                image.style.width = "100%"
                image.style.borderRadius = isGrid ? "6px 6px 0px 0px" : "6px"
                image.src = response
                parentDiv.appendChild(image)
            }, () => {
                utils.addIcon(parentDiv, file, padding)
            })
            if (file.type == 'video' && isGrid && file.duration && file.duration > 0) {
                let durationDiv = element('DIV')
                // durationDiv.style.width = '1 6px'
                durationDiv.style.height = '16px'
                durationDiv.style.position = 'absolute'
                durationDiv.style.top = '8px'
                durationDiv.style.left = '8px'
                durationDiv.style.borderRadius = "4px"
                durationDiv.style.backgroundColor = '#00000080'
                durationDiv.style.display = 'flex'
                durationDiv.style.padding = '0px 4px';
                durationDiv.style.alignItems = 'center';
                durationDiv.innerHTML = Play
                let svg = durationDiv.getElementsByTagName('svg')[0];
                svg.style.margin = 'auto 4px auto auto'
                let durationText = element('A')
                durationText.style.fontWeight = '300'
                durationText.style.fontSize = '0.8em'
                durationText.style.color = 'white'
                durationText.innerHTML = utils.getPlayDurationString(file.duration)
                durationDiv.appendChild(durationText)
                parentDiv.appendChild(durationDiv)  
            }
        } else {
            utils.addIcon(parentDiv, file, padding)
        }
    },

    getType(file) {
        if (file.name.endsWith(".apk")) return "app"
        const parts = file.type.split("/")
        switch(parts[0]) {
            case "audio", "video", "image":
                return parts[0]
            default:
                return "document"
        }
    },

    validateName: function(name) {
        if (name.length < 5 || name.length > 25) return "Username must be between 5 and 25 character"
        if (!this.isLetter(name[0])) return "Username must start with a letter"
        for (let i = 0; i < name.length; i++) {
            const ch = name.charAt(i)
            if (!(this.isLetter(ch) || this.isDigit(ch) || ch == '_')) return "Username can only contain alphanumeric characters and underscores"
        }
        return null
    },

    isLetter: function(c) {
        let n = c.charCodeAt(0)
        return (n >= 65 && n < 91) || (n >= 97 && n < 123)
    },

    isDigit: function(c) {
        return c >= '0' && c <= '9'
    },

    openUrl: function(name, url, open) {
        let a = element('a')
        a.href = url
        if (open)
            a.target = '_blank'
        else {
            if (name != null) a.download = name
            else a.download = true
        }
        a.click()
    },

    copyUrl: function(id) {
        api.getFileUrl(id, (url) => {
            FileLinkDialog.getInstance(window.location.origin + url).show()
        })
    },

    openFile: function(name, id, open) {
        api.getFileUrl(id, (res) => {
            utils.openUrl(name, res, open)
        })
    },

    getSizeString: function(size) {
        let s = ""
        let kb = size / this.kilo
        let mb = kb / this.kilo
        let gb = mb / this.kilo
        let tb = gb / this.kilo
        if(size < this.kilo) {
            s = size + " Bytes"
        } else if(size >= this.kilo && size < this.mega) {
            s =  kb.toFixed(2) + " KB"
        } else if(size >= this.mega && size < this.giga) {
            s = mb.toFixed(2) + " MB"
        } else if(size >= this.giga && size < this.tera) {
            s = gb.toFixed(2) + " GB"
        } else if(size >= this.tera) {
            s = tb.toFixed(2) + " TB"
        }
        return s;
    },

    getDurationString: function(millis) {
        let seconds = Math.floor(millis / 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        if (hours > 0) {
            return `${hours}h ${minutes % 60}m ${seconds % 60}s`
        } else {
            return `${minutes % 60}m ${seconds % 60}s`
        }
    },

    getPlayDurationString: function(millis) {
        let seconds = Math.floor(millis / 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        return `${utils.getInt2d(hours)}:${utils.getInt2d(minutes % 60)}:${utils.getInt2d(seconds % 60)}`
    },

    getInt2d(num) {
        if (num == 0) return '00'
        if (num <= 9) return `0${num}`
        else return num
    },

    dayInMillis: 24 * 60 * 60 * 1000,

    getTimeString: function(time) {
        let tomorrow = new Date()
        tomorrow.setHours(0, 0, 0, 0)
        tomorrow.setDate(tomorrow.getDate() + 1)
        let diff = Math.floor((tomorrow.getTime() - time) / this.dayInMillis)
        let date = new Date(time)
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let timeString = hours + ':' + minutes + ' ' + ampm;
        if (diff == 0) {
            return timeString
        } else {
            return date.toLocaleString('en-us',{ month:'short', day: 'numeric' }) + ", " + timeString
        }
    },

    capitalize: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    format: function(text) {
        text = text.replace(/&/g, '&amp;')
        text = text.replace(/</g, '&lt;')
        text = text.replace(/>/g, '&gt;')
        return text;
    },

    percentToHex: (x) => Math.ceil( x / 100 * 255).toString(16),

    ran: function(min = 1, max = 10) {
        return Math.floor(Math.random() * max) + min
    },

    getSampleText: function(min = 1, max = 10) {
        const code = 'a'.charCodeAt(0);
        let res = ""
        for (let i = 0; i < this.ran(min, max); ++i) res += String.fromCharCode(code + this.ran())
        return res
    },

    isValidString: function(str) {
        return str && str != null && str.length > 0
    },

    handleError: function(res) {
        switch (res.errorType) {
            case 1:
                utils.showSnack(res.error);
                break;
            case 2:
                pageManager.tryAgainDialog(NoAccess);
                break;
            case 3:
                pageManager.tryAgainDialog({
                    title: res.error
                });
                break;
        }
    },

    snackbar: $("snackbar"),
    showSnack: function(text) {
        this.snackbar.innerHTML = text
        this.snackbar.className = "show";
        setTimeout(function() { this.snackbar.className = this.snackbar.className.replace("show", ""); }, 3000);
    },
}
