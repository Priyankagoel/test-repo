const express = require("express");
const passport = require("passport")

const router = express.Router();

const authController = require("../controllers/auth");

router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);


router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

//authentication with google
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}));

//callback route for google to redirect to
router.get('/google/redirect',passport.authenticate('google'), authController.getRedirect);


module.exports = router;