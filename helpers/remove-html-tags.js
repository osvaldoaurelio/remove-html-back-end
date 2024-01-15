const Cheerio = require('cheerio');

const removeHtmlTags = ({ buffer }) => {
  const content = buffer.toString('utf8');
  const $ = Cheerio.load(content);
  
  $('*').each(function () {
    $(this).replaceWith($(this).text());
  });

  return $.html();
}

module.exports = removeHtmlTags;
