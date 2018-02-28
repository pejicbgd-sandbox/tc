'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public_html')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public_html', 'index.html'));
});

app.post('/data/:type', (req, res) => {
    var type = req.params.type,
        fileName = path.resolve(__dirname, '..', 'data/', type + '.json');
        
    if(!fs.existsSync(fileName)) {
        fileName = path.resolve(__dirname, '..', 'data/users.json');
    }

    res.sendFile(fileName);
});

app.post('/save/:type', (req, res) => {
    //save entry logic here
    res.send('success');
});

app.listen(9000, () => {
    console.log('ready on 9000...');
});