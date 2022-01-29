const registerUsersUservices = require('../services/registerUsers');

class register {

  async store(req, res) {

    const data = req.body;

    try {
      const usersCreateSuccess = await registerUsersUservices.createUser(data);
      return res.status(201).json(usersCreateSuccess);
    } catch (error) {
      console.log(error)
      return res.status(401).json({ error: error.message });
    }

  }

}

module.exports = new register();