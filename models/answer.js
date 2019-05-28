const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Answer = sequelize.define('answer',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    answer: {
        type: Sequelize.STRING,
        allowNull: false
    },

    vote: {
        type: Sequelize.INTEGER,
    },

    queId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Answer;