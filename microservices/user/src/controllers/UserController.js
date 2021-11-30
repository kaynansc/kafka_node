const producer = require("../infra/kafka/producer");

const UsersRepository = require("../repositories/UsersRepository");
const usersRepository = new UsersRepository();

class UserController {
  async createUser(request, response) {
    try {
      const { name, email, age } = request.body;

      const users = await usersRepository.findByEmail(email);

      if (users.length > 0) {
        return response.status(409).json({ message: "User already created!" });
      }

      const user = { name, email, age };

      await usersRepository.create(user);
      await producer("user-created", user);

      response.json({ message: `User created! The code of confirmation will be sent to email: ${email}` });
    } catch (err) {
      response.json({ err: err.message });
    }
  }
}

module.exports = UserController;