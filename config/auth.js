module.exports = {
  secret: process.env.TOKEN_SECRET || "8fd68707bffece116ce56b886f85436cdc0bb88cc51cc80749163ae781909f58",
  expireIn: process.env.TOKEN_EXPIRE_IN || "4h"
}