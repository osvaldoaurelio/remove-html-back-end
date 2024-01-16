const Cheerio = require('cheerio');
const { checkFileSize, checkFileType } = require('../helpers');

const removeHtmlTags = file => {
  checkFileSize(file);
  checkFileType(file);

  const content = file.buffer.toString('utf8').replace(/<br\b(?:.*?)>/gi, '\n$&');
  const $ = Cheerio.load(content);
  
  $('*').each(function () {
    $(this).replaceWith($(this).text());
  });

  return $.html().replace(/&nbsp;/gi, ' ').replace(/&amp/gi, '&');
}

module.exports = { removeHtmlTags };
