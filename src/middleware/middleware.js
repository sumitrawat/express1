const logger = require("./logger");
const helmet = require("helmet");
const morgan = require("morgan");
const middleWare = (app, express) => {
  app.use("/", (req, res, next) => {
    console.log(`A \"${req.method}\" was made for ${req.url}`);
    next();
  });

  app.use(helmet());

  //logger
  app.use(morgan("tiny"));

  //custom logger app.use(logger);

  app.use(express.json());

  app.use(express.static("public"));
};

module.exports = middleWare;
