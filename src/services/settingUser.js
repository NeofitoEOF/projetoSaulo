const { PrismaClient } = require(".prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class settingService {
  async updateAccount(idUser, data) {
    try {
      const updateUser = await prisma.user.update({
        where: {
          id: idUser,
        },
        data: {
          username: data?.username,
        },
        select: {
          updateAt: true,
        },
      });
      if (
        data.password === String(null) ||
        data.password === "" ||
        data.password === ""
      )
        throw new Error("Não e possivel salvar senha em branca!");
      if (data.password !== undefined) {
        const encryptedPassword = await bcrypt.hash(String(data?.password), 10);
        const updateUser = await prisma.user.update({
          where: {
            id: idUser,
          },
          data: {
            password: encryptedPassword,
          },
          select: {
            updateAt: true,
          },
        });
      }
      return updateUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new settingService();
