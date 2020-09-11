var express = require('express');
var bodyParser = require('body-parser');
var books = require('./routes/books');
var user = require('./routes/user');

const app = express();

app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


app.get("/ping", (request, response) => {
    request.send("pong");
});


app.post("/books", books.create);

app.get("/books", books.list);

app.put("/books", books.create);

app.delete("/books", books.remove);

app.get("/user/:user", user.login);


const PORT = 3001;

app.listen(PORT, () => console.log("Listening on port " + PORT));
