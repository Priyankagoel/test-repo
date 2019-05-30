const Question = require("../models/question");
const Answer = require("../models/answer");
const { validationResult } = require("express-validator/check");

exports.getDashboard = (req, res, next) => {
    return res.render("pages/dashboard");
};

exports.getAddQue = (req, res, next) => {
    return res.render("pages/addque");
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

    try{
        answer = await Answer.create({
        answer: body.answer,
        queId: body.queId
      });
    }catch(err){
        console.log(err);
    }
    
    return res.json(answer.dataValues)
}; 

exports.putAnswers = async(req, res, next) => {
    const body = req.body;
    console.log("putbody",body);
    try{
        answer = await Answer.update({
        answer: body.answer,
        queId: body.queId,
        vote: body.vote
     },
     { where: { id: body.id }}
     );
    }catch(err){
        console.log(err);
    }
    
    return res.json(answer.dataValues)
}; 



exports.addQuestion = async(req,res,next)=>{
    const body = req.body;
    

    question = await Question.create({
        question: body.question,
        userId: 1
    });
    
    for(var i =0;i<body.answers.length;i++){
        answer = await Answer.create({
            answer: body.answers[i],
            queId: question.dataValues.id
        });
    }
    // return res.json(answer.dataValues)
}