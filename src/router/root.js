const handleRoot = app => {
  app.get("/", (req, res) => {
    res.send("Server is up!!");
  });
};

module.exports = handleRoot;
