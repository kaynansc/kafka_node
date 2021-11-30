const User = require("../models/User");

class UsersRepository {
  async findByEmail(email) {
    return User.findAll({ where: { email } });
  }

  async create({ name, email, age }) {
    return User.create({ name, email, age });
  }
}

module.exports = UsersRepository;