const ABOUT_URL = "/api/about/";
const ABOUT_ALL_URL = "/api/about/all";
const ABOUT_ME_URL = "/api/about/me";
const FILE_URL = "/api/file/";
const PROTOCOL = 'http://';

const DARK_THEME = "darkTheme";
const LIGHT_THEME = "lightTheme";

var themeProteries = getComputedStyle(document.querySelector('body'));

var boardingImageShare, boardingImageUpload;

const bodyElement = document.getElementsByTagName("BODY")[0];

const mainDiv = document.getElementById("main");
const dialog = document.getElementById("upload");
const settingsContainer = document.getElementById("settingsContainer");
const lightRadio = document.getElementById('lightThemeRadio');
const ldarkRadio = document.getElementById('darkThemeRadio');

const host = window.location.host;

var fileExplorer;
var accountName;
var devicesStack;
var uploadFileProgressList;
var theme = "", themeColor = "";
const FOLDER = 0;
const FILE = 1;
const IMAGE = 2;
const AUDIO = 3;
const VIDEO = 4;

// const iconMap = new Map();
// iconMap['file'] = 'file.svg';
// iconMap['video'] = 'video.svg';
// iconMap['image'] = 'image.svg';
// iconMap['audio'] = 'audio.svg';
// iconMap['text'] = 'text.svg';

const iconMap = new Map();
iconMap['audio'] = '<svg width="25" height="30" viewBox="0 0 25 30" fill="var(--primary-color)" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" stroke="none" d="M22.7671 1.73845C22.9041 1.70615 23.0405 1.67407 23.1765 1.64224C23.1576 1.78447 23.1427 1.92285 23.1306 2.05704C23.1049 2.34305 23.0918 2.61002 23.0798 2.85463C23.0631 3.19524 23.0485 3.49248 23.0048 3.7374C22.9624 3.97491 22.8927 4.16321 22.7671 4.29411C22.7625 4.29897 22.7577 4.30376 22.7529 4.30846C22.7139 4.34651 22.6698 4.37935 22.6198 4.40675C22.5454 4.4475 22.4579 4.47625 22.3548 4.49226L9.38602 7.26241C9.34933 7.26914 9.31476 7.27283 9.2822 7.27361C8.99131 7.28061 8.86053 7.05547 8.80634 6.69173C8.7577 6.3652 8.77078 5.92699 8.78517 5.44476C8.78655 5.39842 8.78795 5.35167 8.7893 5.30457C8.79113 5.24115 8.79287 5.17711 8.79441 5.11258C8.79566 5.06024 8.79678 5.00757 8.79769 4.95467C8.79794 4.94014 8.79818 4.92559 8.79839 4.91103C8.79856 4.89956 8.79872 4.88809 8.79887 4.87661C8.87287 4.86317 8.94684 4.84966 9.02076 4.83608C9.08257 4.82472 9.14435 4.81331 9.20611 4.80185C12.9027 4.11579 16.4927 3.24866 19.852 2.43724C20.2778 2.33438 20.7 2.23242 21.1181 2.13184C21.6512 2.00361 22.1779 1.87762 22.6976 1.75487C22.702 1.75382 22.7064 1.75278 22.7109 1.75173C22.7296 1.7473 22.7484 1.74287 22.7671 1.73845ZM7.26744 6.9547C7.26494 6.89202 7.26242 6.82964 7.25992 6.76754C7.23453 6.13737 7.21032 5.53654 7.20971 4.95635L7.18957 4.25049C7.17749 3.8474 7.46324 3.49769 7.85745 3.43328C8.07717 3.3973 8.29691 3.3602 8.51667 3.32205C11.7937 2.75318 15.0757 1.95069 18.365 1.14642C19.6865 0.823312 21.0091 0.499915 22.3331 0.191261C22.3561 0.185697 22.3791 0.180088 22.4023 0.174461C22.5363 0.141856 22.673 0.108631 22.8107 0.0800454C23.4919 -0.0613173 24.201 -0.0892271 24.7671 0.632334V15.9086C24.7751 16.4854 24.7845 17.0909 24.7941 17.7136C24.7964 17.8636 24.7988 18.0145 24.8011 18.1663C24.8292 19.9914 24.8572 21.9362 24.8572 23.7153C24.8572 24.6728 24.2053 25.4543 23.4376 25.8047C22.6699 26.1551 21.7716 26.235 20.8361 26.1827C18.7259 25.6649 18.5462 25.4832 17.476 24.4004C17.4385 24.3625 17.3999 24.3234 17.3601 24.2832C16.2389 23.1507 15.7604 21.3974 15.7603 19.8126C15.7602 18.3658 16.4203 17.4602 16.7166 17.0538C16.7448 17.015 16.7698 16.9808 16.7905 16.9511L16.7934 16.9479C17.2393 16.4659 17.6697 16.0005 19.3091 15.697C19.7432 15.6202 20.3823 15.5717 21.0132 15.5512C21.6986 15.5288 22.3743 15.5393 22.7671 15.582C22.8707 15.5933 22.9546 15.6068 23.0138 15.6225L22.9441 6.30478L8.82286 8.7179C8.82466 8.87525 8.82746 9.04804 8.83114 9.23492C8.85645 10.5188 8.92374 12.4682 8.99918 14.6538C9.04936 16.1075 9.10315 17.6657 9.15059 19.2021C9.16761 19.7534 9.18381 20.3018 9.19874 20.8416C9.20706 21.1427 9.2152 21.4411 9.22264 21.7358C9.32248 25.6914 9.29782 28.9864 7.95175 29.3413C5.5208 30.4221 3.82757 30.1668 1.59819 28.6199C0.477145 27.4877 0 25.8059 0 24.1493C0 22.4927 0.477094 20.8095 1.59819 19.6773C2.16841 19.1014 2.92974 18.8954 3.68871 18.8146C4.3286 18.7465 4.99272 18.7741 5.62538 18.8438C5.74311 18.8568 5.85975 18.8712 5.97494 18.8867C6.54756 18.964 6.86313 19.0357 7.14678 19.1119C7.21895 19.1313 7.28906 19.151 7.36081 19.1711C7.44861 19.1958 7.53888 19.2211 7.6384 19.2475L7.31223 8.38056V8.37114C7.31154 8.33365 7.31081 8.29626 7.31003 8.25898C7.30061 7.80933 7.28425 7.37541 7.26744 6.9547ZM2.92547 21.1723C3.53736 20.4668 5.03736 20.4668 7.13433 21.1723C7.53736 22.9668 7.03723 27.3593 6.96408 27.5895C6.05956 27.969 5.4467 28.042 4.94039 27.9806C4.41515 27.9168 0.537361 26.4668 2.53736 21.9668M22.7926 17.633L22.5581 17.5708C22.5447 17.5701 22.462 17.5598 22.2808 17.5514C22.0425 17.5404 21.7344 17.5367 21.3967 17.5423C20.6972 17.5538 20.0237 17.6025 19.6647 17.6651C18.9907 17.7906 18.7149 17.9227 18.6097 17.9841C18.5348 18.0278 18.4913 18.0616 18.3436 18.2181C18.3303 18.2367 18.3173 18.2546 18.3046 18.2721C18.1834 18.4397 18.0927 18.565 17.9891 18.7809C17.8685 19.0323 17.7603 19.3677 17.7603 19.8125C17.7604 21.0822 18.1572 22.2457 18.7814 22.8762C19.4476 23.549 19.5583 23.6518 19.7206 23.7456C19.8788 23.837 20.1598 23.9517 21.1246 24.1937C21.8111 24.2159 22.2855 24.132 22.6072 23.9852C22.6859 23.9493 22.7642 23.8856 22.8134 23.8174C22.8561 23.7582 22.8572 23.726 22.8572 23.7153C22.8572 21.8053 22.8247 19.7067 22.7945 17.7567C22.7939 17.7154 22.7933 17.6742 22.7926 17.633Z" fill="var(--primary-color)"/></svg>';
iconMap['file'] = '<svg  width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 31H17.3069" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M1 11H23.422" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M1 21H31.5754" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M1 1H34.6329" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/></svg>';
iconMap['image'] = '<svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M8.55722 1.00074C9.55334 1.03862 10.4949 1.47072 11.1794 2.20406C11.8639 2.9374 12.2365 3.91334 12.217 4.92187C12.1796 5.92995 11.7525 6.88286 11.0277 7.57549C10.3029 8.26813 9.33836 8.64511 8.34165 8.6253C7.34553 8.58742 6.40391 8.15531 5.71946 7.42198C5.035 6.68864 4.66241 5.7127 4.68188 4.70417C4.71931 3.69609 5.14638 2.74317 5.87117 2.05054C6.59595 1.35791 7.56051 0.980928 8.55722 1.00074Z" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" d="M20.0828 6.79834L34.0659 30.9805L20.0887 31L6.12024 30.8105L6.21963 30.6397L1 30.5722L7.39263 19.563L8.99465 22.3294L14.2718 13.2393L15.3027 15.0193L20.0828 6.79834Z" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
iconMap['video'] = '<svg  width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M14.0729 8.50153L27.1403 16.0033L1 31L1.00431 1L14.0729 8.50153Z" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
iconMap['text'] = '<svg  width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M27.3919 1.95656C27.9108 1.95656 28.4085 2.1627 28.7754 2.52963C29.1423 2.89656 29.3485 3.39422 29.3485 3.91313V19.5656C29.3485 20.0846 29.1423 20.5822 28.7754 20.9491C28.4085 21.3161 27.9108 21.5222 27.3919 21.5222H22.5005C21.893 21.5222 21.2938 21.6636 20.7505 21.9353C20.2071 22.207 19.7345 22.6015 19.37 23.0875L15.6525 28.0434L11.935 23.0875C11.5705 22.6015 11.0979 22.207 10.5545 21.9353C10.0112 21.6636 9.41203 21.5222 8.80454 21.5222H3.91313C3.39422 21.5222 2.89656 21.3161 2.52963 20.9491C2.1627 20.5822 1.95656 20.0846 1.95656 19.5656V3.91313C1.95656 3.39422 2.1627 2.89656 2.52963 2.52963C2.89656 2.1627 3.39422 1.95656 3.91313 1.95656H27.3919ZM3.91313 0C2.8753 0 1.87998 0.412275 1.14613 1.14613C0.412275 1.87998 0 2.8753 0 3.91313L0 19.5656C0 20.6035 0.412275 21.5988 1.14613 22.3326C1.87998 23.0665 2.8753 23.4788 3.91313 23.4788H8.80454C9.10829 23.4788 9.40786 23.5495 9.67954 23.6853C9.95122 23.8212 10.1875 24.0184 10.3698 24.2614L14.0873 29.2174C14.2695 29.4604 14.5058 29.6576 14.7775 29.7934C15.0492 29.9293 15.3488 30 15.6525 30C15.9563 30 16.2558 29.9293 16.5275 29.7934C16.7992 29.6576 17.0355 29.4604 17.2178 29.2174L20.9352 24.2614C21.1175 24.0184 21.3538 23.8212 21.6255 23.6853C21.8972 23.5495 22.1967 23.4788 22.5005 23.4788H27.3919C28.4297 23.4788 29.425 23.0665 30.1589 22.3326C30.8928 21.5988 31.305 20.6035 31.305 19.5656V3.91313C31.305 2.8753 30.8928 1.87998 30.1589 1.14613C29.425 0.412275 28.4297 0 27.3919 0L3.91313 0Z" fill="var(--primary-color)"/><path stroke="none" d="M5.86969 6.84791C5.86969 6.58845 5.97276 6.33962 6.15622 6.15616C6.33969 5.9727 6.58852 5.86963 6.84797 5.86963H24.4571C24.7165 5.86963 24.9653 5.9727 25.1488 6.15616C25.3323 6.33962 25.4353 6.58845 25.4353 6.84791C25.4353 7.10737 25.3323 7.3562 25.1488 7.53966C24.9653 7.72312 24.7165 7.82619 24.4571 7.82619H6.84797C6.58852 7.82619 6.33969 7.72312 6.15622 7.53966C5.97276 7.3562 5.86969 7.10737 5.86969 6.84791ZM5.86969 11.7393C5.86969 11.4799 5.97276 11.231 6.15622 11.0476C6.33969 10.8641 6.58852 10.761 6.84797 10.761H24.4571C24.7165 10.761 24.9653 10.8641 25.1488 11.0476C25.3323 11.231 25.4353 11.4799 25.4353 11.7393C25.4353 11.9988 25.3323 12.2476 25.1488 12.4311C24.9653 12.6145 24.7165 12.7176 24.4571 12.7176H6.84797C6.58852 12.7176 6.33969 12.6145 6.15622 12.4311C5.97276 12.2476 5.86969 11.9988 5.86969 11.7393ZM5.86969 16.6307C5.86969 16.3713 5.97276 16.1224 6.15622 15.939C6.33969 15.7555 6.58852 15.6525 6.84797 15.6525H16.6308C16.8903 15.6525 17.1391 15.7555 17.3225 15.939C17.506 16.1224 17.6091 16.3713 17.6091 16.6307C17.6091 16.8902 17.506 17.139 17.3225 17.3225C17.1391 17.5059 16.8903 17.609 16.6308 17.609H6.84797C6.58852 17.609 6.33969 17.5059 6.15622 17.3225C5.97276 17.139 5.86969 16.8902 5.86969 16.6307Z" fill="var(--primary-color)"/></svg>';

var colors = document.getElementsByClassName('color');

var themeColors = [
    "#1565C0",
    "#f44336",
    "#9c27b0",
    "#673ab7",
    "#009688",
    "#4caf50",
    "#4a148c",
    "#e91e63"
];

var inputFileElement = document.createElement('INPUT');
function init() {
    inputFileElement.onchange = uploadFile;
    inputFileElement.type = 'file';
    inputFileElement.setAttribute("multiple", "");

    theme = localStorage.getItem('theme');
    if (theme == undefined) {
        localStorage.setItem('theme', LIGHT_THEME);
        theme = LIGHT_THEME;
        lightTheme();
    } else if(theme == LIGHT_THEME) {
        lightThemeRadio.checked = true;
        lightTheme();
    } else if (theme == DARK_THEME) {
        darkThemeRadio.checked = true;
        darkTheme();
    } else {
        lightTheme();
    }
    themeColor = localStorage.getItem('color');
    if(themeColor == undefined || !themeColors.includes(themeColor)) {
        localStorage.setItem('color', colors[i]);
        themeColor = themeColors[0];
    }
    document.documentElement.style.setProperty('--primary', themeColor);

    var len = colors.length;
    for(var i = 0; i < len; ++i) {
        let hex = themeColors[i];
        colors[i].style.backgroundColor = themeColors[i];
        colors[i].onclick = function(event) {
            document.documentElement.style.setProperty('--primary', hex);
            themeColor = hex;
        };
    }

}

init();

function darkTheme() {
    theme = DARK_THEME;
    bodyElement.classList.remove(LIGHT_THEME);
    bodyElement.classList.add(DARK_THEME);
}

function lightTheme() {
    theme = LIGHT_THEME;
    bodyElement.classList.remove(DARK_THEME);
    bodyElement.classList.add(LIGHT_THEME);
}

window.onbeforeunload = function() {
    if (!uploadFileProgressList.isComplete) return "The files are being uploaded are you sure you wanna exit?";
    else                                    return;
}

function hideBoarding(boarding) {
    if (boarding != null && boarding.style.display == "block") {
        boarding.style.display = "none";
    }
}

function openFileChooser() {
    if(inputFileElement && document.createEvent) {
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        inputFileElement.dispatchEvent(evt);
    }
}

function openViewText(title, text) {
    document.getElementById("viewTextHeading").innerHTML = title;
    document.getElementById("viewTextDescriptionP").innerHTML = text;
    document.getElementById("viewTextContainer").style.display = "inline";

    hideBoarding(boardingImageShare);

}

function closeViewText() {
    document.getElementById("viewTextHeading").innerHTML = "";
    document.getElementById("viewTextDescriptionP").innerHTML = "";
    document.getElementById("viewTextContainer").style.display = "none";
}

function copyViewText() {
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(document.querySelector('#viewTextDescriptionP'));
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
}



function getText(path, onLoad) {
    var files;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", PROTOCOL + host + path, true);
	rawFile.onload = function () {
        if (this.readyState === this.DONE) {
            if (this.status === 200) {
                onLoad(this.responseText);
            }
        }
    }
    rawFile.send();
}

function downloadAndShowText(path, fileName) {
    getText(path, function(text) {
        openViewText(fileName, text);
    });
}

function closeShareText() {
    document.getElementById("addTextTitleTextArea").value = "";
    document.getElementById("addTextDescriptionTextArea").value = "";
    document.getElementById("addTextContainer").style.display = "none";
    setTimeout(function() {
        updateAccounts();
    }, 500);
}

function openShareText() {
    document.getElementById("addTextContainer").style.display = "inline";
    onWidthChange();
    hideBoarding(boardingImageShare);
}


function uploadText(title, text) {
    var file = new File([text], title + ".text", {
      type: "text/plain",
    });
    var formdata = new FormData();
    formdata.append("text:" + text.length, file);
    var post = new XMLHttpRequest();
    post.open("POST", "");
    post.send(formdata);
}

function sendText() {
    uploadText(document.getElementById("addTextTitleTextArea").value, document.getElementById("addTextDescriptionTextArea").value);
    closeShareText();
}

function uploadFiles(files) {
    if (uploadFileProgressList == null) {
        uploadFileProgressList = new UploadFileProgressList();
        boardingImageUpload.style.display = "none";
    }
    for (var i = 0; i < files.length; ++i) {
        var file = files[i];
        const uploadFileProgress = new UploadFileProgress(file.name);
        var formdata = new FormData();
        formdata.append("file:" + file.size, file);
        var post = new XMLHttpRequest();
        post.upload.addEventListener("progress", function(event) {
            uploadFileProgress.progressValue = (event.loaded / event.total) * 100;
        }, false);
        uploadFileProgressList.push(uploadFileProgress);
        // post.addEventListener("load", function(event) {
        // }, false);
        // post.addEventListener("error", errorHandler, false);
        // post.addEventListener("abort", abortHandler, false);
        post.open("POST", "");
        post.send(formdata);
  }
}

function uploadFile() {
    uploadFiles(inputFileElement.files);
}

function onDragOver(ev) {
    ev.preventDefault();
}

function onDrop(ev) {
    ev.preventDefault();
    if (ev.dataTransfer.files) {
        uploadFiles(ev.dataTransfer.files);
    }
}

var id = null;

class ProgressBar {
    constructor(width, height) {
        this.width = width;
        this.div = document.createElement("DIV");
        this.div.style.width = width + "px";
        this.div.style.height = height + "px";
        this.div.style.borderRadius = height / 2 + "px";
        this.div.style.backgroundColor = "#E0E0E0";

        this.innerDiv = document.createElement("DIV");
        this.innerDiv.style.width = "0%";
        this.innerDiv.style.height = height + "px";
        this.innerDiv.style.borderRadius = height / 2 + "px";
        this.innerDiv.style.backgroundColor = themeProteries.getPropertyValue('--primary-color');

        this.div.appendChild(this.innerDiv);

        this.progress = 0;
    }

    set value(progress) {
        this.progress = progress;
        this.innerDiv.style.width = progress + "%";
    }

    get value() {
        return this.progress;
    }

    get() {
        return this.div;
    }
}

class UploadFileProgress {
    constructor(name) {
        let width = document.documentElement.clientWidth;
        this.div = document.createElement("DIV");
        this.div.style.width = width - 100 + "px";
        this.div.id = "progressStyle"
        this.div.style.padding = "10px";
        this.div.style.marginTop = '10px';
        this.div.style.marginLeft = 'auto';
        this.div.style.marginRight = 'auto';
        this.div.style.borderRadius = '5px';

        var nameA = document.createElement("P");
        nameA.style.margin = '5px';
        nameA.style.marginBottom = '10px';
        nameA.style.whiteSpace = 'nowrap';
        nameA.style.overflow = 'hidden';
        nameA.style.textOverflow = 'ellipsis';
        nameA.innerHTML = name;
        this.progress = new ProgressBar(width - 120, 5);

        this.div.appendChild(nameA);
        this.div.appendChild(this.progress.get());
    }
    close() {
        this.div.style.display = 'none';
    }
    get isComplete() {
        return this.progress.value == 100;
    }
    set progressValue(value) {
        this.progress.value = value;
    }
    get element() {
        return this.div;
    }
}

class UploadFileProgressList {
    constructor() {
        this.div = document.getElementById("uploadProgressList");
        this.progressArr = []
        this.arr = [];
    }

    push(uploadFileProgress) {
        this.progressArr.push(uploadFileProgress);
        this.arr.push(uploadFileProgress.element);
        this.div.appendChild(uploadFileProgress.element);
        return this.arr.length;
    }

    pop() {
        this.div.removeChild(this.arr.pop());
        return this.arr.length / 2;
    }

    get isComplete() {
        for (var i = 0; i < this.progressArr.length; ++i) {
            if (!this.progressArr[i].isComplete)
                return false;
        }
        return true;
    }

    get element() {
        return this.div;
    }

    get length() {
        return this.arr.length / 2;
    }

    clear() {
        while (this.length > 0)
            this.pop();
    }
}

class UserFilesList {
    constructor(account) {
        this.div = document.createElement("DIV");
        this.div.style.margin = "10px";
        this.div.style.marginTop = "15px";

        this.name = document.createElement("A");
        this.name.innerHTML = account.name;
        this.name.style.color = themeProteries.getPropertyValue('--primary-color');
        this.name.style.fontWeight = "bold";
        this.name.style.marginLeft = "20px";
        this.div.appendChild(this.name);

        this.ol = document.createElement("OL");
        this.ol.id = "userFiles";
        this.ol.style.paddingLeft = '0em';
        this.div.appendChild(this.ol);

        this.account = account;
        this.arr = [];

        var files = account.files;
        for (var i = 0; i < files.length; ++i) {
            this.push(files[i]);
        }
    }

    push(file) {
        var path = FILE_URL + this.account.id + "/" + file.name;
        var type = file.type;
        //file icon
        // var icon = new DOMParser().parseFromString(iconMap[type], 'text/html').body.getElementsByTagName('svg')[0];
        var icon = document.createElement("DIV");
        icon.id = "svgDiv";
        icon.innerHTML = iconMap[type];
        // icon.setAttribute('src', iconMap[file.type]);
        icon.style.height = "25px";
        icon.style.width = "25px";
        icon.style.padding = '10px';
        // icon.style.padding = '1em';
        // icon.style.borderRight = 'thin solid #0000FF';

        //file name
        var name = document.createElement("A");
        var fileName = '';
        name.innerHTML = decodeURIComponent(file.name).replace(/\+/g, ' ');
        if (file.type == 'text') {
            fileName = name.innerHTML;
            fileName = fileName.substr(0, fileName.length - 5);
            name.innerHTML = fileName;
        }
        // name.href = url
        name.style.textDecoration = 'none';
        name.style.color = themeProteries.getPropertyValue('--primary-color');
        name.style.margin = '5px';
        name.style.marginLeft = '10px';
        name.style.width = 'auto';
        name.style.overflow = 'hidden';
        name.style.textOverflow = 'ellipsis';
        // name.style.whiteSpace = 'nowrap';

        //file size
        var size = document.createElement("A");
        size.innerHTML = file.size;
        size.style.color = themeProteries.getPropertyValue('--primary-color');
        size.style.width = 'auto';
        size.style.marginLeft = 'auto';
        size.style.marginRight = '10px';
        size.style.whiteSpace = 'nowrap';

        //filefile
        var div = document.createElement("DIV");
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.padding = '5px';
        // div.style.borderBottom = '.5px solid #42A5F5';
        div.style.margin = '5px';
        // div.addEventListener("mouseleave", function(event) {
        //     div.style.borderColor = '#0000001F';
        //     div.style.backgroundColor = 'rgba(255,0,0,0)';
        // });
        // div.addEventListener("mouseenter", function(event) {
        //     div.style.borderColor = '#0000007F';
        //     div.style.backgroundColor = '#e8f5e9';
        // });
        div.onclick = function(target) {
            if (type == 'text') {
                downloadAndShowText(path, fileName);
            } else {
                window.open(path);
            }
        };

        div.style.cursor = 'pointer';
        div.appendChild(icon);
        div.appendChild(name);
        div.appendChild(size);
        div.style.zIndex = '5';
        div.style.backgroundColor = 'rgba(255,0,0,0)';
        div.style.transitionDuration = '.5s';
        this.ol.appendChild(div);
        this.arr.push(div);
    }

    pop() {
        this.element.removeChild(this.arr.pop());
        return this.arr.length;
    }

    set search(s) {
        var filter = s.toLowerCase(), temp;
        for (var i = 0; i < this.arr.length; ++i) {
            var element = this.arr[i];
            temp = element.getElementsByTagName("A")[0].innerHTML.toLowerCase();
            if (temp.indexOf(filter) > -1) {
                element.style.display = "flex";
            } else {
                element.style.display = "none";
            }
        }
    }

    get element() {
        return this.div;
    }

    get length() {
        return this.arr.length / 2;
    }

    clear() {
        while (this.length > 0)
            this.pop();
    }
}

class FileExplorer {
    constructor(accounts) {
        const div = document.getElementById("fileExplorer");
        this.div = div;
        div.innerHTML = "";
        div.style.padding = '5px';
        div.style.marginBottom = '80px';
        // 'Courier New', Courier, monospace
        div.style.transition = '0.5s';
        div.style.height = 'auto'

        this.arr = []

        for (var i = 0; i < accounts.length; ++i) {
            var account = accounts[i];
            if (account.files.length > 0) {
                this.pushUser(account);
            }
        }
    }

    pushUser(account) {
        // this.name =
        var directory = new UserFilesList(account);
        this.div.appendChild(directory.element);
        this.arr.push(directory);
    }

    popUser() {
        this.div.removeChild(this.arr.pop().element);
        return this.arr.length;
    }

    len() {
        return this.arr.length;
    }

    set search(s) {
        for (var i = 0; i < this.arr.length; ++i)
            this.arr[i].search = s;
    }
}

function getFiles(path, onLoad) {
    var files;
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", PROTOCOL + host + path, true);
	rawFile.onload = function () {
        if (this.readyState === this.DONE) {
            if (this.status === 200) {
                onLoad(JSON.parse(this.responseText));
            }
        }
    }
    rawFile.send();
}

var refreshElement = document.getElementById('refresh');

function updateAccounts() {
        if (boardingImageShare == null) {
            boardingImageShare = document.getElementById('boardingImageShare');
        }
        getFiles(ABOUT_ALL_URL, function(accounts) {
            var length = accounts.length;
            var filesLength = 0;

            for (var i = 0; i < length; ++i) {
                filesLength += accounts[i].files.length;
            }

            if (filesLength == 0) {
                if (boardingImageShare.src == "")
                    boardingImageShare.src = 'share_taf.png';
                console.log(boardingImageShare.src);
                boardingImageShare.style.display = "block";
            } else {
                boardingImageShare.style.display = "none";
                fileExplorer = new FileExplorer(accounts);
            }
        });
    refreshElement.classList.remove('rotateAnime');
    void refreshElement.offsetWidth;
    refreshElement.classList.add('rotateAnime');
}

function updateName() {
    var name = document.getElementById("nameInput").value;
    setInfoToServer("name", name);
    accountName = name;
}

function search() {
    var search = document.getElementById("searchInput").value;
    fileExplorer.search = search;
}

function updateInfo() {
    getFiles(ABOUT_ME_URL, function(account) {
        document.getElementById("nameInput").value = account.name;
    });
}

updateInfo();

function setInfoToServer(type, name) {
    var post = new XMLHttpRequest();
    post.open("POST", "");
    post.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    post.send(type + ":" + name);
}

function closeUploadDialog() {
    dialog.style.display = 'none';
    hideBoarding(boardingImageUpload);
    updateAccounts();
}

function openUploadDialog() {
    dialog.style.display = 'block';
    hideBoarding(boardingImageShare);
    if (uploadFileProgressList == undefined) {
        if (boardingImageUpload == null) {
            boardingImageUpload = document.getElementById('boardingImageUpload');
        }
        if (boardingImageUpload.src == "") {
            boardingImageUpload.src = "upload.png";
        }
        boardingImageUpload.style.display = "block";
    }

}

function openSettingsDialog() {
    settingsContainer.style.display = 'block';
    hideBoarding(boardingImageShare);
}

function closeSettingsDialog() {
    settingsContainer.style.display = 'none';
    updateAccounts();
}

function saveSettings() {
    localStorage.setItem('theme', theme);
    localStorage.setItem('color', themeColor);
    updateName();
    closeSettingsDialog();
    updateAccounts();
}

// updateInfo();

updateAccounts();

var searchElem = document.getElementById('searchInput');


function onWidthChange() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    searchElem.style.width = (width - 90) + "px";

    var descriptionLabel = document.getElementById('addTextDescriptionA');

    var desHeight = descriptionLabel.getBoundingClientRect();
    let desTextAreaHeight = height - desHeight.bottom;
    document.getElementById('addTextDescriptionTextArea').style.height = (desTextAreaHeight - 100) + 'px';
}


window.onresize = function(event) {
    onWidthChange();
}
