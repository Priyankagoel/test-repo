const Sequelize = require("sequelize");

const sequelize = new Sequelize('stack_overflow', 'root', 'mysql@123', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;