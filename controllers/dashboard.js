const Question = require("../models/question");
const Answer = require("../models/answer");
const { validationResult } = require("express-validator/check");

exports.getDashboard = (req, res, next) => {
    return res.render("pages/dashboard");
};

exports.getQuestions = async(req, res, next) => {
    return res.json({"question": await Question.findAll()});
};  

exports.postQuestions = async(req, res, next) => {
    const body = req.body;

    question = await Question.create({
        question: body.question,
        userId: body.userId
    });
    // console.log("question",question);
    return res.json(question.dataValues)
};  

exports.getAnswers = async(req, res, next) => {
    return res.json({"answer": await Answer.findAll()});
};  

exports.postAnswers = async(req, res, next) => {
    const body = req.body;

    answer = await Answer.create({
        answer: body.answer,
        queId: body.queId
    });
    return res.json(answer.dataValues)
}; 
