const express = require('express');
const path = require('path');

const serveStaticFiles = express.static(path.join(__dirname, '..', 'temp'));

module.exports = serveStaticFiles;
