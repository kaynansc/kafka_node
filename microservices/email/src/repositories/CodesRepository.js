const Code = require("../models/Code");

class CodesRepository {
  async create({ code, email }) {
    return Code.create({ code, email });
  }

  async findByEmail(email) {
    return Code.findAll({ where: { email } });
  }
}

module.exports = CodesRepository;