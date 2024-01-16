const cors = require('cors');

const corsConfig = cors({
  origin: '*',
  methods: 'POST',
  exposedHeaders: 'X-Filename',
});

module.exports = corsConfig;
