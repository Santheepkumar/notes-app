const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
  path: path.resolve(__dirname, `.env`),
});

module.exports = {
  port: process.env.PORT,
  mongoDbUrl: process.env.MONGO_URL,
  secret: process.env.SECRET,
};
