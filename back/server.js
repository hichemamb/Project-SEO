const express = require('express');
const app = express();

// Routes
app.get('/accueil', (req, res) => {
    res.sendFile(__dirname + '/accueil.html');
});

app.get('/acheter', (req, res) => {
    res.sendFile(__dirname + '/acheter.html');
});

app.listen(5000);