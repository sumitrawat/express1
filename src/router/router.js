const reportRouter = require("./reports");
const agencyRouter = require("./agencys");
const rootRouter = require("./root");
const router = app => {
  rootRouter(app);
  reportRouter(app);
  agencyRouter(app);
};

module.exports = router;
