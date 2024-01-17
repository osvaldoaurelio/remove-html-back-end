const express = require('express');
const router = require('./routes');
const { corsConfig } = require('./configs');
const { logger, errorHandler } = require('./middlewares');

const app = express();

app.set('PORT', process.env.PORT || 3000);

app.use(corsConfig);

app.use(logger);

app.use(router);

app.use(errorHandler);

module.exports = app;
