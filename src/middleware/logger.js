const logger = (req, res, next) => {
  console.log(`A \"${req.method}\" was made for ${req.url}`);
  next();
};

module.exports = logger;
