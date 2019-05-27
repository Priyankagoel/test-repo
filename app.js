const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const sequelize = require("./util/database");


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-type, Authorization');
    next();

});

const feedRoutes = require("./routes/feed");

app.use('/feed', feedRoutes);

sequelize
    .sync()
    .then(result => {
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    })

app.listen(8080, function() {
    console.log(`Server listening on port 8080`);
});