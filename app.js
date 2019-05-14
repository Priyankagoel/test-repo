const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-type, Authorization');
    next();

});

const feedRoutes = require("./routes/feed");

app.use('/feed', feedRoutes);

app.listen(8080, function() {
    console.log(`Server listening on port 8080`);
});