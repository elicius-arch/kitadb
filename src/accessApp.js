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
        /*let sql = 'SELECT * FROM tbl_Stelle WHERE Kita = "' + kita + '" AND Beginn <= ' + date + ' ' + 
        'AND Ende >= ' + date + ';';*/
        //let sql = 'SELECT * FROM tbl_Stelle WHERE Kita = "' + kita + '"';
        //let sql = 'SELECT * FROM tbl_Stelle WHERE Beginn = #12/6/1970#;';
        /*let sql = 'SELECT * FROM tbl_Stelle WHERE Kita = "' + kita + '" AND Beginn <= #07/05/2020# ' + 
        'AND Ende >= #07/05/2020#;';*/
        let sql = 'SELECT * FROM tbl_Stelle '+
        'LEFT OUTER JOIN tbl_Stammdaten ON tbl_Stammdaten.Personal_ID = tbl_Stelle.Personal_ID ' +
        'WHERE Kita = "' + 'Kita Fehrbach' + '" AND Beginn <= ' + date + ' '+ 
        'AND (Ende >= ' + date + ' OR Ende IS NULL);';
        console.log(sql);
        this.connect()
        .query(sql)
        .then(data => {
            console.log(data);
            resolve(data);
        })
    }
      
}

module.exports = AccessApp;

