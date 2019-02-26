const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));

// Routes
app.get('/singe-araignees', (req, res) => {
    res.sendFile(__dirname + '/public/singe-araignees.html');
});

app.get('/mamba-noir', (req, res) => {
    res.sendFile(__dirname + '/public/mamba-noir.html');
});

app.get('/lion-de-savane', (req, res) => {
    res.sendFile(__dirname + '/public/lion-savane.html');
});

app.get('/husky-de-syberie', (req, res) => {
    res.sendFile(__dirname + '/public/husky-syberie.html');
});

app.listen(5000);
