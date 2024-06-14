const Cheerio = require('cheerio');
const { checkFileSize, checkFileType } = require('../helpers');

const removeHtmlTags = file => {
  checkFileSize(file);
  checkFileType(file);

  const content = file.buffer.toString('utf8');
  // const content = file.buffer.toString('utf8').replace(/<br\b(?:.*?)>/gi, '\n$&');
  const $ = Cheerio
    .load(content)
    .replace(/&nbsp;/gi, ' ')
    .replace(/&quot;/gi, '"')
    .replace(/&gt;/gi, '>')
    .replace(/&lt;/gi, '<')
    .replace(/&amp/gi, '&');
  
  $('*').each(function () {
    $(this).replaceWith($(this).text());
  });

  return $.html();
}

module.exports = { removeHtmlTags };
