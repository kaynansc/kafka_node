const db = require("../infra/db/client");
const Sequelize = require("sequelize");

module.exports = db.define("codes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  code: Sequelize.INTEGER,
  email: Sequelize.STRING,
});
