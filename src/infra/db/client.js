const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  `postgres://myapp:myapp@database_kafka:5432/myapp`,
  { logging: false }
);

module.exports = sequelize;