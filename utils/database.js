const Sequelize = require("sequelize");

const sequelize = new Sequelize("stack_overflow", "root", "mysql@123", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: false,
    define: {
      timestamps: false,
    }
});


module.exports = sequelize;