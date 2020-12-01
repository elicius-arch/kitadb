// accessApp.js importieren
const AccessApp = require('./accessApp');

// ACCESS APP ERSTELLEN:
var accessApp = new AccessApp();
const adodb = require('node-adodb');

exports.searchKita = (data) => {
    return new Promise(resolve => {
        accessApp.selectKita(data.kita, data.date, resolve);
    })
}
