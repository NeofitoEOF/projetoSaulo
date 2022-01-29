const tagUser = require("../services/tagUser");

class tag {
  async store(req, res) {
    const data = req.body;
    const id = req.user.id;
    try {
      const tagRegisterSuccess = await tagUser.tag(id, data);
      return res.status(201).json(tagRegisterSuccess);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new tag();
