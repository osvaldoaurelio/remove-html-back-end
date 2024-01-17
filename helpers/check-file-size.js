const { FileSizeLimitError } = require('../errors');

const checkFileSize = (file, maxSize = 50 * 1024 * 1024) => {
  if (!file || file.size > maxSize) {
    throw new FileSizeLimitError(`The file exceeds the maximum size allowed (${maxSize / (1024 * 1024)} MB).`);
  }
}

module.exports = checkFileSize;
