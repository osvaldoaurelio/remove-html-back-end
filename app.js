const cors = require('cors');
const express = require('express');
const { serveStaticFiles } = require('./middlewares');
const router = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: '*',
  methods: 'POST',
  exposedHeaders: 'X-Filename',
}));

app.use('/temp', serveStaticFiles);

app.use('/', router);

module.exports = { app, port };
