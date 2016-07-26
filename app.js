'use strict';

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hello World');
});

const server = app.listen(app.get('port'), () => {
    console.log('Server is listening to port ' + app.get('port'));
});

module.exports = server;
