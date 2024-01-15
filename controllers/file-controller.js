const stream = require('stream');
const { FileSizeLimitError, FileTypeError } = require('../errors');
const { checkFileSize, checkFileType, removeHtmlTags } = require('../helpers');

async function processFile({ file }, res) {
  try {
    checkFileSize(file);
    
    checkFileType(file);

    const stringData = removeHtmlTags(file);
    const readStream = new stream.Readable();

    readStream.push(stringData);
    readStream.push(null);
    
    res.header('X-Filename', `no-html-${file.originalname}`);

    return readStream.pipe(res);
  } catch (err) {
    if (err instanceof FileSizeLimitError) {
      console.error(`Erro de limite de tamanho de arquivo: ${err.message}`);
      res.status(400).send(err.message);
    }

    if (err instanceof FileTypeError) {
      console.error(`Erro de tipo de arquivo: ${err.message}`);
      return res.status(400).send(err.message);
    }

    console.error('Erro ao processar o arquivo:', err);
    res.status(500).send('Erro ao processar o arquivo');
  }
}

module.exports = { processFile };
