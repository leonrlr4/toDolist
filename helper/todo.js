var db = require('../models');

exports.getTodos =function(req, res, next) {
    db.Todo.find()
        .then ((todos) => {
            res.json(todos)
        })
        .catch(function(err){
            console.log(err)
        });
}

exports.createTodos = function (req, res, next) {
    db.Todo.create(req.body)
        .then(newTodo =>{
            console.log('create success')
            res.json(newTodo)
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getTodo = function (req, res) {
    db.Todo.findById(req.params.todoId)
        .then((foundTodo) => {
            res.json(foundTodo);
        })
        .catch(err => {
            console.log(err)
        })
}

exports.updateTodo = function (req, res) {
    var query = { _id: req.params.todoId }
    db.Todo.findOneAndUpdate(query, req.body, { new: true })
        .then(function (todo) {
            res.json(todo);
        })
        .catch(err => {
            console.log(err)
        })
}



exports.removeTodo = function (req, res) {
    db.Todo.remove({_id: req.params.todoId})
    .then(() => {
        res.json({
            msg: 'delete success'
        });
    })
    .catch(err => {
        console.log(err + '\n' + 'delete failed')
    });
}



module.exports = exports;
