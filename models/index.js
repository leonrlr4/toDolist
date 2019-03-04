var mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb+srv://leon:Oo850302@cluster0-z5rk4.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
mongoose.Promise = Promise;


module.exports.Todo = require('./todo');
