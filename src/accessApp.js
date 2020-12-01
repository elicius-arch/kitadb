"use strict";

class AccessApp {

    constructor() {
        this.kitaDBPath = __dirname + '/../kita_DB.accdb';
        this.ADODB = require('node-adodb');
        this.ADODB.debug = true;
    }

    // Connect to the MS Access DB
    connect() {
        return this.ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data Source=' + this.kitaDBPath + ';Persist Security Info=False;');
    }

    selectKita(kita, date, resolve) {
        let sql = 'SELECT * FROM tbl_Stelle '+
        'LEFT OUTER JOIN tbl_Stammdaten ON tbl_Stammdaten.Personal_ID = tbl_Stelle.Personal_ID ' +
        'WHERE Kita = "' + kita + '" AND Beginn <= ' + date + ' '+ 
        'AND (Ende >= ' + date + ' OR Ende IS NULL);';
        this.connect()
        .query(sql)
        .then(data => {
            console.log(data.length + ' entries found');
            resolve(data);
        })
    }

    
      
}

module.exports = AccessApp;

