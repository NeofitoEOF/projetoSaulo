const settings = require("../services/settingUser");

class setting {
  async storage(req, res) {
    const data = req.body;
    const idUser = req.user.id;
    try {
      const alteration = await settings.updateAccount(idUser, data);
      return res.status(201).json(alteration);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new setting();
