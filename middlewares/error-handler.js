const { FileSizeLimitError, FileTypeError } = require("../errors");

const errorHandler = (err, _req, res, _next) => {
  if (err instanceof FileSizeLimitError) {
    console.error(`File Size Limit Error: ${err.message}`);
    return res.status(400).send(err.message);
  }

  if (err instanceof FileTypeError) {
    console.error(`File Type Error: ${err.message}`);
    return res.status(400).send(err.message);
  }

  console.error('Error in file processing request:', err);
  return res.status(500).send('Error in file processing request');
};

module.exports = errorHandler;
