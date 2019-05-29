const User = require("../models/user");

exports.getSignup = (req, res, next) => {
    return res.render('auth/signup');
};

exports.getLogin = (req, res, next) => {
    return res.render('auth/login');
};

exports.postLogin = (req, res, next) => {
    return res.redirect('/dashboard');
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
  
    try {
      user = await User.create({
        email: body.email,
        password: body.password
      });
      console.log(user);
    } catch (err) {
      console.log(err);
    }

    return res.redirect("/dashboard");
  };