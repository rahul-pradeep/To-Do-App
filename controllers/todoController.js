var bodyParser = require('body-parser');
var Todo = require('../public/assets/schema');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


var mongoDB = 'mongodb://localhost/todoDB';
mongoose.connect(mongoDB, { useNewUrlParser: true });


// var data = [{item:'Get milk'},{item:'Workout'},{item:'Do programming'}];
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){

    app.get('/',(req,res)=>{
        //get data from mongoDB and pass it to view
        Todo.find({},(err,data)=>{
            if(err) throw err;
            res.render('todo',{todos:data});

        })
    });

    app.post('/',urlencodedParser,(req,res)=>{
        //get data from view and add to mongoDB

        var newTodo = Todo(req.body).save((err,data)=>{
           if(err) throw err;
           res.json({todos:data});

        });
        // data.push(req.body);
        // res.json({todos:data});
    });

    app.delete('/:item',(req,res)=>{

        //delete entry from mongoDB
        Todo.find({item:req.params.item.replace(/\-/g," ")}).remove((err,data)=>{
            
            if(err) throw err;
           res.json({todos:data});

        });

        // data = data.filter((todo)=>{
        //     return todo.item.replace(/ /g,'-') !== req.params.item;
        // });
        // res.json({todos:data});
    });

};
