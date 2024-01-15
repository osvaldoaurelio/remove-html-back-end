class FileTypeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FileTypeError';
  }
}

module.exports = FileTypeError;
