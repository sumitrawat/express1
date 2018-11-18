const Reports = require("../model/reports");
const reports = Reports.getReport(10);
const handleReportsRoute = app => {
  app.get("/api/reports", (req, res) => {
    res.send(reports);
  });

  app.get("/api/reports/:id", (req, res) => {
    const report = reports.find(r => r.id === parseInt(req.params.id));
    if (!report) res.status(404).send("404: Nothing here");
    else res.send(report);
  });

  app.post("/api/reports", (req, res) => {
    const r = { id: reports.length + 1, name: req.body.name };
    reports.push(r);
    res.send(r);
  });

  app.put("/api/reports/:id", (req, res) => {
    const report = reports.find(r => r.id === parseInt(req.body.id));
    if (report) {
      report.name = req.body.name;
      res.send(report);
    } else {
      res.status(404).send("no report to update");
    }
  });
};

module.exports = handleReportsRoute;
