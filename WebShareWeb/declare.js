const $ = q => document.getElementById(q)

const element = t => document.createElement(t)

function log(str) {
    if (api.isTest) console.log(str)
}

var fileTab = undefined
var fileSelectionMode = undefined
var fileInfo = undefined

var textTab = undefined