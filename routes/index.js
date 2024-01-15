const express = require('express');
const { processFile } = require('../controllers/file-controller');
const { uploadSingleFile } = require('../middlewares');

const router = express.Router();

router.post('/process', uploadSingleFile, processFile);

module.exports = router;
