const express = require('express');
const functions = require('./postFunctions');
const app = express();
const port = 1917;

app.use(express.static(__dirname + '/../resources'));
app.use(express.urlencoded({extended: true}));

app.post('/search_kita/get', async (req, res) => {
    console.log(req.body);
    console.log(req.body.kita);
    let result = await functions.searchKita(req.body);
    res.send(result);
});
/*
app.post('/search_kita/get', async (req, res) => {
    var x = await functions.resolveAfter2Seconds(10);
    res.send({ok: "" + x});
});*/

app.listen(port, () => {
    console.log('running...');
});