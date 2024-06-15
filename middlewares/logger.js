const logger = (req, _req, next) => {
  console.info(`:${req.ip} did a ${req.method} on ${req.protocol}://${req.hostname}${req.url} at ${Date()}`);

  next();
};

module.exports = logger;
