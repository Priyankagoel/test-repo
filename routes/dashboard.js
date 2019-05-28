const express = require("express");
const { body } = require("express-validator/check");

const router = express.Router();

const dashboardController = require("../controllers/dashboard");

router.get('/dashboard',dashboardController.getQuestions);



module.exports = router;