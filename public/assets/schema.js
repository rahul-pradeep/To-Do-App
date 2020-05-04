const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    item: String
});

const Todo = mongoose.model('Todo',TodoSchema);

module.exports = Todo;