var express = require('express');
var todoController = require('./controllers/todoController');

var mongoose = require('mongoose');


var app  = express();

app.set('view engine','ejs');
app.use(express.static('./public'));
const PORT = 3000;

todoController(app);

app.listen(PORT);



// mongo "mongodb+srv://todo-jvogz.mongodb.net/test"  --username test