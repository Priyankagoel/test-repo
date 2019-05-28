const Question = require("../models/question");
const Answer = require("../models/answer");
const { validationResult } = require("express-validator/check");


exports.getQuestions = (req, res, next) => {

    Question.findAll().then(data=>{
        return res.json({"question": data});
    }).catch(ex=>console.log(ex))



    
};  

// exports.createPost = (req, res, next) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(422).json({
//                 message: 'Validation error',
//                 errors: errors.array()
//             });
//     }
//     const title = req.body.title;
//     const content = req.body.content;
//     return res.status(201).json({
//         message: 'Post created Sucessfully',
//         post: {
//             id: new Date().toISOString(), 
//             title: title, 
//             content: content,
//             createdAt: new Date()
//         }
//     });
// };