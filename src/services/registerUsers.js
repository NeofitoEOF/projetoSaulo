const { PrismaClient } = require(".prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

class createUsers {
  async createUser(data) {
    if (!data.username || data.username == null || data.username == "") {
      throw new Error("Username não pode ser null");
    } else if (!data.email || data.email == null || data.email == "") {
      throw new Error("E-mail não pode ser null");
    } else if (data.password == null || data.password == "") {
      throw new Error("Senhas não pode ser null !!");
    } else if (data.password !== data.confirmPassword) {
      throw new Error("Senhas devem ser iguais!!");
    }

    try {
      let encryptedPassword = await bcrypt.hash(String(data.password), 10);
      let createNewUser = await prisma.user.create({
        data: {
          username: String(data.username),
          email: String(data.email),
          password: encryptedPassword,
        },
        select: {
          username: true,
          email: true,
        },
      });
      console.log(createNewUser);
      return createNewUser;
    } catch (error) {
      console.log(error);
      throw new Error(error.meta.target + " já em uso");
    }
  }
}

module.exports = new createUsers();
