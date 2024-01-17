const { FileTypeError } = require('../errors');

const checkFileType = ({ mimetype }, textMimeType = 'text') => {  
  if (!mimetype.includes(textMimeType)) {
    throw new FileTypeError(`The file must be ${textMimeType} type.`);
  }
}

module.exports = checkFileType;
