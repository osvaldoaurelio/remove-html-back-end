const { FileTypeError } = require('../errors');

const checkFileType = ({ mimetype }, textMimeType = 'text') => {  
  if (!mimetype.includes(textMimeType)) {
    throw new FileTypeError(`O arquivo deve ser do tipo ${textMimeType}.`);
  }
}

module.exports = checkFileType;
