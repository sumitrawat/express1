const Agencys = require("../model/agencys");
const agencys = Agencys.getAgencys(10);
const handleAgencysRoute = app => {
  app.get("/api/agencys", (req, res) => {
    res.send(agencys);
  });

  app.get("/api/agencys/:id", (req, res) => {
    const agencys = agencys.find(a => a.id === parseInt(req.params.id));
    if (!agencys) res.status(404).send("404: Nothing here");
    else res.send(agencys);
  });

  app.post("/api/agencys", (req, res) => {
    const a = { id: agencys.length + 1, name: req.body.name };
    agencys.push(a);
    res.send(a);
  });

  app.put("/api/agencys/:id", (req, res) => {
    const agencys = agencys.find(r => r.id === parseInt(req.body.id));
    if (agencys) {
      agencys.name = req.body.name;
      res.send(agencys);
    } else {
      res.status(404).send("no agencys to update");
    }
  });
};

module.exports = handleAgencysRoute;
