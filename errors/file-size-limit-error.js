class FileSizeLimitError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FileSizeLimitError';
  }
}

module.exports = FileSizeLimitError;
