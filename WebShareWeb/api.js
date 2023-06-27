class Api {
    constructor() {
        this.isTest = window.location.protocol == 'file:'
        this.testLoadTime = 300
        this.accountId = null
        this.sampleStatus = {
            name: "sompt",
            accountId: "MA==",
            isAuthorized: false,
            isSecurityEnabled: false
        }
        this.statusApiInProgress = false
        this.sampleAuth = {
            isValid: true,
            error: "Blocked"
        }
    }

    apiDelay(onRes) {
        new Promise((resolve, reject) => setTimeout(() => {
            onRes()
        }, this.testLoadTime))
    }

    saveAccountId(accountId) {
        localStorage.setItem('accountId', JSON.stringify(accountId));
    }

    getSavedAccountId() {
        let data = localStorage['accountId'];
        if(data == undefined || data == 'undefined') return null;
        return JSON.parse(data);
    }

    getOs() {
        let os = "Unknown OS";
        if (navigator.userAgent.indexOf("Win") != -1) os = "Windows";
        if (navigator.userAgent.indexOf("Mac") != -1) os = "MacOS";
        if (navigator.userAgent.indexOf("X11") != -1) os = "UNIX";
        if (navigator.userAgent.indexOf("Linux") != -1) os = "Linux";
        if (navigator.userAgent.indexOf("Android") != -1) os = "Android";
        if (navigator.userAgent.indexOf("like Mac") != -1) os = "iOS";
        return os;
    }

    addReadyStateChange(xhr, url, onRes) {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                this.statusApiInProgress = false
                console.log("api: " + url + " -> " + xhr.status);
                switch (xhr.status) {
                    case 200:
                        var res = JSON.parse(xhr.responseText)
                        if (res.showError && res.error) {
                            utils.showSnack(res.error)
                        } else {
                            onRes(res)
                        }
                        break
                    case 401:
                        this.onUnauthorized()
                        break;
                    default:
                        var res = JSON.parse(xhr.responseText)
                        if (res.showError) {
                            utils.showSnack(res.error)
                        }
                }
            }
        }
    }

    xhrAuthGet(url, onRes) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader("Authorization", "Basic " + this.accountId);
        xhr.addEventListener('error', this.onError);
        this.addReadyStateChange(xhr, url, (res) => onRes(res));
        xhr.send();
    }

    xhrPost(url, body, onRes) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.addEventListener('error', this.onError);
        let data = JSON.stringify(body);
        this.addReadyStateChange(xhr, url, (res) => onRes(res));
        xhr.send(data);
    }

    xhrAuthPost(url, body, onRes) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Basic " + this.accountId);
        xhr.addEventListener('error', this.onError);
        let data = JSON.stringify(body);
        this.addReadyStateChange(xhr, url, (res) => onRes(res));
        xhr.send(data);
    }
    
    xhrAuthPostAsync(url, body, onRes) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Basic " + this.accountId);
        this.addReadyStateChange(xhr, url, (res) => onRes(res))
        xhr.addEventListener('error', this.onError);
        let data = JSON.stringify(body);
        xhr.send(data);
    }

    updateStatus() {
        if (this.statusApiInProgress) {
            return;
        }
        this.statusApiInProgress = true
        if (this.isTest) {
            this.apiDelay(() => {
                this.onStatus(this.sampleStatus)
            });
        } else {
            let body = { os: this.getOs() };
            let accountId = this.getSavedAccountId();
            if (accountId != null) body['accountId'] = accountId;
            this.xhrPost(ApiStatus, body, (res) => this.onStatus(res));
        }
    }

    onError(e) {
        console.error("onError", e);
        pageManager.tryAgainDialog(NoServer);
    }

    onStatus(statusRes) {
        console.log(statusRes);
        this.statusApiInProgress = false
        if (statusRes.error) {
            utils.handleError(statusRes);
        } else {
            this.accountId = statusRes.id;
            this.saveAccountId(this.accountId);
            if (statusRes.isBlocked) {
                pageManager.tryAgainDialog(NoAccess);
            } else if (statusRes.isSecurityEnabled && !statusRes.isAuthorized) {
                pageManager.auth();
            } else {
                pageManager.home();
            }
        }
    }

    onUnauthorized() {
        this.updateStatus();
    }

    auth(pin) {
        if (this.isTest) {
            this.apiDelay(() => {
                this.onAuth(this.sampleAuth)
            })
        }
        this.xhrAuthPost(ApiAuth, {pin: pin}, (res) => this.onAuth(res));
    }

    onAuth(authRes) {
        this.authRes = authRes;
        if (authRes.isValid) {
            pageManager.home();
        } else {
            auth.pinError.innerHTML = authRes.error;
        }
    }

    sendText(text, onRes) {
        if (this.isTest) {
            this.apiDelay(() => {
                onRes({
                    isUpdated: true,
                    text : {
                        data: btoa(text),
                        time: Date.now(),
                        from: "User-" + utils.ran(),
                        isDeletable: true,
                    }
                })
            })
            return
        }
        let xhr = new XMLHttpRequest();
        xhr.open("POST", ApiAddText);
        xhr.setRequestHeader("Content-Type", "text/plain");
        xhr.setRequestHeader("Authorization", "Basic " + this.accountId);
        xhr.addEventListener('error', (e) => this.onError(e));
        this.addReadyStateChange(xhr, ApiAddText, (res) => onRes(res));
        xhr.send(text);
    }

    changeName(name, onRes) {
        if (this.isTest) {
            onRes({isUpdated: true})
            return
        }
        this.xhrAuthPost(ApiChangeName, { name: name }, (res) => onRes(res));
    }

    getFileUrl(fileId, onRes) {
        this.xhrAuthGet(ApiSignedUrlFile + "/" + fileId, (response) => onRes(ApiFile + "/" + response.name));
    }

    getZipUrl(ids, onRes) {
        this.xhrAuthPost(ApiSignedUrlZip, { ids: ids } , (response) => onRes(ApiZip + "/" + response.name));
    }

    getInfo(onRes) {
        if (this.isTest) {
            onRes({ name: 'name' })
            return;
        }
        this.xhrAuthGet(ApiInfo, (res) => onRes(res), true);
    }

    deleteFile(fileId, onRes) {
        if (this.isTest) {
            this.apiDelay(() => {
                onRes({isDeleted: true})
            })
            return
        }
        this.xhrAuthGet(ApiDeleteFile + "/" + fileId, (res) => onRes(res));
    }

    deleteText(textId, onRes) {
        if (this.isTest) {
            this.apiDelay(() => {
                onRes({isDeleted: true})
            })
            return
        }
        this.xhrAuthGet(ApiDeleteText + "/" + textId, (res) => onRes(res));
    }

    addImage(fileId, onSuccess, onError) {
        if (this.isTest) {
            // onError()
            onSuccess("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=");
            return;
        }
        const url = ApiImage + "/" + fileId;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader("Authorization", "Basic " + this.accountId);
        xhr.timeout = 2000;
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                console.log("api: " + url + " -> " + xhr.status);
                switch (xhr.status) {
                    case 200:
                        onSuccess('data:image/png;base64, ' + xhr.responseText);
                        break
                    case 404:
                        onError(xhr.responseText);
                        break;
                    case 401:
                        this.onUnauthorized();
                        break;
                }
            }
        }
        xhr.addEventListener('error', this.onError);
        xhr.send();
    }

    getUploadInfo(onSuccess) {
        if (this.isTest) {
            this.apiDelay(() => onSuccess({
                isUploadAvailable: true,
                availableCount: 0
            }))
            return;
        }
        this.xhrAuthGet(ApiUploadInfo, (res) => onSuccess(res));
    }
}