const stream = require('stream');
const { removeHtmlTags } = require('../services/file-service');

function processFile(req, res, next) {
  const fileName = req.file.originalname;

  try {
    const stringData = removeHtmlTags(req.file);
    const readStream = new stream.Readable();

    readStream.push(stringData);
    readStream.push(null);
    
    res.header('X-Filename', `no-html-${fileName}`);

    console.log(`${fileName} processado com sucesso... ${Date()}`);

    return readStream.pipe(res);
  } catch(err) {
    next(err);
  }
}

module.exports = { processFile };
