class Agencys {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  static getAgencys(l) {
    let agencys = [];

    for (let i = 0; i < l; i++) {
      agencys.push(new Agencys(i, "Agency " + i, `agency.${i}@gmail.com`));
    }
    console.log(agencys.length);
    return agencys;
  }
}

module.exports = Agencys;
