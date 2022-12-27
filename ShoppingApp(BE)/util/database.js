const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("nodejs", "root", "admin", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
