const taskUser = require("../services/taskUser");

class task {
  async store(req, res) {
    const data = req.body;
    const id = req.user.id;
    try {
      const taskRegisterSuccess = await taskUser.task(id, data);
      return res.status(200).json(taskRegisterSuccess);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new task();
