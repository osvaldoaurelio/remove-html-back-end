const express = require('express');
const router = require('./routes');
const { corsConfig } = require('./configs');
const { logger } = require('./middlewares');

const app = express();
const port = process.env.PORT || 3000;

app.use(corsConfig);

app.use(logger);

app.use(router);

module.exports = { app, port };
