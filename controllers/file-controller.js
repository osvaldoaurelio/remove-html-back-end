const path = require('path');
const { unlink } = require('fs');
const { FileSizeLimitError, FileTypeError } = require('../errors');
const {
  checkFileSize,
  checkFileType,
  removeHtmlTags,
  writeTempFile,
} = require('../helpers');

async function processFile({ file }, res) {
  try {
    checkFileSize(file);
    
    checkFileType(file);

    const stringData = removeHtmlTags(file);

    const {fileName, filePath } = await writeTempFile(file, stringData);

    res.header('X-Filename', fileName);
    res.download(filePath, err => {
      if (err) {
        console.error('Erro ao baixar o arquivo: ', err);
        res.status(500).send('Erro ao baixar o arquivo');
      }

      unlink(filePath, err => {
        if (err) throw err;
        console.log(`${filePath} foi deletado`);
      });
    })
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
