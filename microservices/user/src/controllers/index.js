const UserController = require("./UserController");
const userController = new UserController();

module.exports = {
  createUser: userController.createUser,
};