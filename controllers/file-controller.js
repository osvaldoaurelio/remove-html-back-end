const stream = require('stream');
const { removeHtmlTags } = require('../services/file-service');

function processFile(req, res, next) {
  try {
    const stringData = removeHtmlTags(req.file);
    const readStream = new stream.Readable();

    readStream.push(stringData);
    readStream.push(null);
    
    res.header('X-Filename', `no-html-${req.file.originalname}`);

    return readStream.pipe(res);
  } catch(err) {
    next(err);
  }
}

module.exports = { processFile };
