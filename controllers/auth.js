const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.getSignup = (req, res, next) => {
    return res.render('auth/signup');
};

exports.getLogin = (req, res, next) => {
    return res.render('auth/login');
};

exports.postLogin = (req, res, next) => {
    // return res.redirect('/dashboard');
    const body = req.body;
    // console.log("body",body);
    

    if (!body.email || !body.password) return res.redirect("/auth/login");
  
    User.findOne({
      where: {
        email: body.email
      }
    })
      .then(user => {
        let loadedUser = user;
        console.log(loadedUser);
        if (!user) return res.status(404).json({ error: "User not found!" });
  
        isAuth = bcrypt.compareSync(body.password, user.password);
  
        if (isAuth) {
          // as user is created now, initialize session with login status
          // req.session.isLoggedIn = true;
          // req.session.user = {
          //   id: user.id,
          //   email: user.email,
          //   name: user.name
          // };
          const token = jwt.sign(
            {
              email : loadedUser.email,
              userId: loadedUser.id.toString()
            },
            'somesupersupersecret',
            {expiresIn: '1h'}
          );
          res.status(200).json({token: token, userId: loadedUser.id.toString() });
          // return res.redirect("/dashboard");
        } else {
          // handle error
          return res.redirect("/auth/login");
        }
      })
      .catch(err => console.log(err));
};

module.exports.postSignup = async (req, res) => {

  // return res.json(req.body);
    const body = req.body;
    console.log("body",body);
    // return console.log(req.file);
    if (!body.email || !body.password) {
    //   req.flash("error", "Email or Password can not be empty!");
      return res.redirect("/auth/signup");
    }
  
    user = await User.findOne({
      where: {
        email: body.email
      }
    });
  
    if (user) return res.redirect("/auth/signup");
  
    // if user does`nt exists create one
    hashedPassword = bcrypt.hashSync(body.password,12);
    try {
      user = await User.create({
        email: body.email,
        password: hashedPassword
      });
      console.log(user);
    } catch (err) {
      console.log(err);
    }

    return res.redirect("/dashboard");
  };

exports.getRedirect = (req, res, next) => {
  return res.send('redirect url');
};