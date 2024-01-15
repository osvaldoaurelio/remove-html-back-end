const { FileSizeLimitError } = require('../errors');

const checkFileSize = (file, maxSize = 50 * 1024 * 1024) => {
  if (!file || file.size > maxSize) {
    throw new FileSizeLimitError(`O arquivo excede o tamanho máximo permitido (${maxSize / (1024 * 1024)} MB).`);
  }
}

module.exports = checkFileSize;
