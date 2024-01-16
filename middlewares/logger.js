const logger = (req, res, next) => {
  console.log(`:${req.ip} did a ${req.method} on ${req.protocol}://${req.hostname}${req.url} at ${Date()}`);

  next();
};

module.exports = logger;