const jwt = require("jsonwebtoken");
const { PrismaClient } = require(".prisma/client");
const config = require("../../config/auth");

const prisma = new PrismaClient();


module.exports = async (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({
      error: true,
      code: 130,
      message: `O token de auntenticação não existe!!`,
    });
  }

  const [bearer, token] = auth.split(" ");

  try {
    const decoded = jwt.verify(token, config.secret);

    if (!decoded) {
      return res.status(401).json({
        error: true,
        code: 130,
        message: `O token está expirado!!`,
      });
    } else {
      const verifyID = await prisma.user.findUnique({
        where: {
          id: decoded.id,
        },
      });
      if (!verifyID) throw new Error();
      delete verifyID.password
      
      req.user = verifyID;
      next();
    }
  } catch (error) {
    console.log('Aqui no back', error)
    return res.status(401).json({
      error: true,
      code: 130,
      message: `O token está invalido!!`,
    });
  }
};
