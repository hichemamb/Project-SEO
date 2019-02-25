const express = require('express');
const app = express();

// Routes
app.get('/singe-araignees', (req, res) => {
    res.sendFile(__dirname + '/singe-araignees.html');
});

app.get('/mamba-noir', (req, res) => {
    res.sendFile(__dirname + '/mamba-noir.html');
});

app.listen(5000);
