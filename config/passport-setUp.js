const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require("../models/user");
const jwt = require("jsonwebtoken");


passport.use(
    new googleStrategy({
        //options for google strategy
        callbackURL: "/auth/google/redirect",
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
      //passport callback function  
      console.log(profile);
      
      User.findOne({
        where: {
          googleId: profile.id
        }
      })
        .then(user => {
          let loadedUser = user;
          console.log(loadedUser);
          if (!user) {
            loadedUser = User.create({
                googleId: profile.id
              });
          }
          
    
          
            // const token = jwt.sign(
            //   {
                
            //     userId: loadedUser.id.toString()
            //   },
            //   'somesupersupersecret',
            //   {expiresIn: '1h'}
            // );
            // res.status(200).json({token: token, userId: loadedUser.id.toString() });
            // return res.redirect("/dashboard");
          
        })
        .catch(err => console.log(err));

    })
)