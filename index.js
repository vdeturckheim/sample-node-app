'use strict';
require('sqreen');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('hello world\n');
});

app.listen(process.env.PORT || 8080, () => {
    console.log('app listening on port ', process.env.PORT || 8080);
});
