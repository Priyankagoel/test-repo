const express = require("express");
const { body } = require("express-validator/check");

const router = express.Router();

const dashboardController = require("../controllers/dashboard");

router.get('/api/v1/question',dashboardController.getQuestions);
router.post('/api/v1/question',dashboardController.postQuestions);




module.exports = router;