const { PrismaClient } = require(".prisma/client");
const prisma = new PrismaClient();

class taskRegister {
  async task(id, data) {
    try {
      const createdTask = await prisma.task.create({
        data: {
          userId: id,
          name: String(data.name),
          description: String(data.description),
          nameTag: data?.nameTag,
          timeDuration: data?.timeDuration
        },
        select: {
          name: true,
          description: true,
        },
      });
      return createdTask;
    } catch (error) {
      throw new Error(error.message);
    }
  }

}

module.exports = new taskRegister();
