const { PrismaClient } = require(".prisma/client");
const prisma = new PrismaClient();

class tagRegister {
  async tag(id, data) {
    try {
      const createdTags = await prisma.tags.create({
        data: {
          userTagId: id,
          name: String(data.name),
          color: String(data.color),
        },
        select: {
          name: true,
          color: true,
        },
      });
      return createdTags;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new tagRegister();
