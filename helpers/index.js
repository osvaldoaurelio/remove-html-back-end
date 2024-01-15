const checkFileSize = require('./check-file-size');
const checkFileType = require('./check-file-type');
const removeHtmlTags = require('./remove-html-tags');
const writeTempFile = require('./write-temp-file');

module.exports = { checkFileSize, checkFileType, removeHtmlTags, writeTempFile };
