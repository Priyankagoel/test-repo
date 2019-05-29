const express = require("express");
const { body } = require("express-validator/check");

const router = express.Router();

const dashboardController = require("../controllers/dashboard");

router.get('/api/v1/question',dashboardController.getQuestions);
router.post('/api/v1/question',dashboardController.postQuestions);

router.get('/api/v1/answer',dashboardController.getAnswers);
router.post('/api/v1/answer',dashboardController.postAnswers);




module.exports = router;