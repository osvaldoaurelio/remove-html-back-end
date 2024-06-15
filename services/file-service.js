const Cheerio = require('cheerio');
const { checkFileSize, checkFileType } = require('../helpers');

const removeHtmlTags = file => {
  checkFileSize(file);
  checkFileType(file);

  const content = file.buffer.toString('utf8')
    .replace(/&quot;/gi, '"')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&tab;/gi, '  ')
    .replace(/&gt;/gi, '>')
    .replace(/&lt;/gi, '<')
    .replace(/&amp;/gi, '&');

  const $ = Cheerio.load(content);
  
  $('*').each(function () {
    $(this).replaceWith($(this).text());
  });

  return $.html();
}

module.exports = { removeHtmlTags };
