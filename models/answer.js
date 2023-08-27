const Sequelize = require("sequelize");
const Questions = require("./question")


const sequelize = require("../utils/database");
//hello
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
    }

    // queId: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // }
});

// Answer.belongsTo(Questions);

module.exports = Answer;