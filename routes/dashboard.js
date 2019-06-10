const express = require("express");
const { body } = require("express-validator/check");

const router = express.Router();

const dashboardController = require("../controllers/dashboard");


router.get('/api/v1/question', dashboardController.getQuestions);
router.post('/api/v1/question', dashboardController.postQuestions);

router.get('/api/v1/answer', dashboardController.getAnswers);
// router.post('/api/v1/answer',dashboardController.postAnswers);
router.put('/api/v1/answer', dashboardController.putAnswers);


router.get('/dashboard', dashboardController.getDashboard);
router.post('/api/v1/add_question', dashboardController.addQuestion);

// for render the add question page
router.get('/add/question', dashboardController.getAddQue);



module.exports = router;