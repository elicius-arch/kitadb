const express = require('express');
const functions = require('./postFunctions');
const app = express();
const port = 1917;

app.use(express.static(__dirname + '/../resources'));
app.use(express.urlencoded({extended: true}));

app.post('/search_kita/get', async (req, res) => {
    console.log('POST: search_kita/get');
    let result = await functions.searchKita(req.body);
    res.send(result);
});
app.post('/stammdaten/save', async (req, res) => {
    console.log('POST: stammdaten/save');
    let result = await functions.saveStammdaten(req.body);
    res.send(result);
});

app.listen(port, () => {
    console.log('running...');
});