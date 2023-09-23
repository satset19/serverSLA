const { contacts, tasks, msgs, users } = require("../models/index");

class Controller {
  static async getUsers(req, res) {
    try {
      const user = await users.find().toArray();
      res.status(200).json({ users: user });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Controller;
