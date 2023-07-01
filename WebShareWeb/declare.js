const $ = q => document.getElementById(q)

const element = t => document.createElement(t)

function log(str) {
    if (api.isTest) console.log(str)
}
