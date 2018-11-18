class Report {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  static getReport(l) {
    let reports = [];

    for (let i = 0; i < l; i++) {
      reports.push(new Report(i, "reports" + i));
    }
    console.log(reports.length);
    return reports;
  }
}

module.exports = Report;
