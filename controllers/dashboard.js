const Question = require("../models/question");
const Answer = require("../models/answer");
const { validationResult } = require("express-validator/check");


exports.getQuestions = async(req, res, next) => {
    return res.json({"question": await Question.findAll()});
};  

exports.postQuestions = async(req, res, next) => {
    const body = req.body;

    question = await Question.create({
        question: body.question,
        userId: body.userId
    });
};  

