const { PrismaClient } = require(".prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config/auth");

const prisma = new PrismaClient();

class LoginUserServe {
  async verifyUser(username, password) {
    const verifyUsername = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!verifyUsername) {
      throw new Error(`O usuario ${username} não existe`);
    }

    if (!(await bcrypt.compare(String(password), verifyUsername.password))) {
      throw new Error("A senha incorreta");
    }

    const token = jwt.sign(
      {
        id: verifyUsername.id,
      },
      config.secret,
      { expiresIn: config.expireIn }
    );
    return "token " + token;
  }

  async consultUserInformation(idUser) {
    try {
      const infoUser = await prisma.user.findMany({
        where: {
          id: idUser,
        },
        select: {
          username: true,
        },
      });

      const consultTask = await prisma.task.findMany({
        where: {
          userId: idUser,
        },
        select: {
          name: true,
          description: true,
          createdAt: true,
        },
      });

      const consultTag = await prisma.tags.findMany({
        where: {
          userTagId: idUser,
        },
        select: {
          name: true,
          color: true,
          createdAt: true,
        },
      });
      return { infoUser, consultTask, consultTag };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new LoginUserServe();
