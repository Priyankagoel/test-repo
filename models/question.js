const Sequelize = require("sequelize");
const Answers = require("./answer")

const sequelize = require("../utils/database");

const Question = sequelize.define("question", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  question: {
    type: Sequelize.STRING,
    allowNull: false
  },

  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
  
});


Question.hasMany(Answers, {as: 'Answers'});

module.exports = Question;