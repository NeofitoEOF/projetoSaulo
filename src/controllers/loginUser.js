const login = require("../services/loginUser");

class LoginUser {
  async index(req, res) {
    try {
      const { username, password } = req.body;
      const verifLogin = await login.verifyUser(username, password);
      return res.status(200).json(verifLogin);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error.message });
    }
  }

  async show(req, res) {
    const idUser = req.user.id;
    try {
      const returnUser = await login.consultUserInformation(idUser);
      return res.status(200).json(returnUser);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ error: "Não foi possivel localizar usuario!!!" });
    }
  }
}

module.exports = new LoginUser();
