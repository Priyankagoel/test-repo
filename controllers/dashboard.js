const Question = require("../models/question");
const Answer = require("../models/answer");
const { validationResult } = require("express-validator/check");

// for rendering the dashboard
exports.getDashboard = (req, res, next) => {
  return res.render("pages/dashboard");
};

// for rendering the add question form page
exports.getAddQue = (req, res, next) => {
  return res.render("pages/addque");
};

// to get questions from database
exports.getQuestions = async (req, res, next) => {
  //   let questions = await Question.findOne({ where: { id: 3 } });
  //   let withAns;
  //   questions.getAnswers().then(ans => {
  //     questions = questions.toJSON();
  //     questions.answers = ans;
  //     return res.json({ questions: questions });
  //   });

  let questions = await Question.findAll({
    include: [{ model: Answer, attributes: ["id", "answer"] }]
  });
  return res.json({ questions: questions });
};

// to post questions in database
exports.postQuestions = async (req, res, next) => {
  const body = req.body;

  question = await Question.create({
    question: body.question,
    userId: body.userId
  });
  // console.log("question",question);
  return res.json(question.dataValues);
};

// to get answers from database
exports.getAnswers = async (req, res, next) => {
  return res.json({ answer: await Answer.findAll() });
};

// exports.postAnswers = async(req, res, next) => {
//     const body = req.body;

//     try{
//         answer = await Answer.create({
//         answer: body.answer,
//         queId: body.queId
//       });
//     }catch(err){
//         console.log(err);
//     }

//     return res.json(answer.dataValues)
// };

// update answers in database eg: to update votes
exports.putAnswers = async (req, res, next) => {
  const body = req.body;
  console.log("putbody", body);
  try {
    answer = await Answer.update(
      {
        answer: body.answer,
        queId: body.queId,
        vote: body.vote
      },
      { where: { id: body.id } }
    );
  } catch (err) {
    console.log(err);
  }

  return res.json(answer.dataValues);
};

//  to add new question and answers in database
exports.addQuestion = async (req, res, next) => {
  const body = req.body;

  // to add que in database
  question = await Question.create({
    question: body.question,
    userId: 1
  });

  // to add answers in database
  for (var i = 0; i < body.answers.length; i++) {
    answer = await Answer.create({
      answer: body.answers[i],
      questionId: question.dataValues.id
    });
  }
  return res.json("body");
};
