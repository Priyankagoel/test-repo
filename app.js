const express = require("express");
const path = require("path");
const passportSetup = require("./config/passport-setUp");
const passport = require("passport");

const bodyParser = require("body-parser");

// const csrf = require('csurf');
const session = require("express-session");
const flash = require('connect-flash');

const app = express();

const sequelize = require("./utils/database");

app.use(express.static(path.join(__dirname, "public")));

const authMiddleware =  require('./middlewares/is-auth');

app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-type, Authorization');
    next();

});

app.use(
  session({
    secret: "thisIsSecretForEncryption", //for signing hash which secretl stores our id to session
    resave: false,
    saveUninitialized: true,
    cookie: { /* secure: true  */ }
  })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

const dashboardRoutes = require("./routes/dashboard");
const authRoutes = require("./routes/auth");

app.use('/auth', authRoutes);
app.use(authMiddleware,dashboardRoutes);

app.set("view engine", "ejs");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

sequelize.sync();

app.listen(3000, function() {
    console.log(`Server listening on port 8080`);
});