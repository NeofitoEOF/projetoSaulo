const { PrismaClient } = require(".prisma/client");
const prisma = new PrismaClient();

class settingService {
  async updateAccount(idUser, data) {
    try {
      const updateUser = await prisma.user.update({
        where: {
          id: idUser,
        },
        data: {
          username: data?.username,
          password: data?.password
        },
        select: {
          updateAt: true
        }
      });
      return updateUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new settingService();
