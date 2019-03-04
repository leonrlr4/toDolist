var express = require('express');
var router = express.Router();
var helpers = require('../helper/todo');
var db = require('../models')
//var db = require('../models');

// router.get('/getAllTodos', function(req, res){
//     db.Todo.find()
//     .then((todo) => {
//         res.json(todo)
//     })
//     .then((err) => {
//         res.send(err)
//     })
// });


// router.get('/:specId', function(req, res){
//     db.Todo.findById({_id:req.params.specId})
//     .then((ele) => {
//         res.json(ele)
//     })
//     .catch(err => {
//         res.send(err)
//     })
// })

// router.post('/postTodo', function(req, res){
//     db.Todo.create(req.body)
//     .then((todo) => {
//         res.status(201).json(todo)
//     })
//     .catch((err) => {
//         res.send(err)
//     })
// })




// router.delete('/:deleteId', function(req, res){
//     db.Todo.remove({_id:req.params.deleteId})
//     .then(() => {
//         res.send('delete success')
//     })
//     .catch(err => {
//         res.send(err)
//     })
// })

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodos)

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.removeTodo)

module.exports = router;
