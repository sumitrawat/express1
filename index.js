const express = require("express");
const middleWare = require("./src/middleware/middleware");
const router = require("./src/router/router");

const port = 3009;
const app = express();

/*call middleware */
middleWare(app, express);
router(app);

app.listen(port, () => {
  console.warn(`Server up on port ${port}....`);
});
