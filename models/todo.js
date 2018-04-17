const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
     title: String,
     date: String
 });

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;