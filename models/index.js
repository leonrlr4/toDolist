var mongoose = require('mongoose');

mongoose.set('debug', true );
// mongoose.connect('mongodb://localhost/todo-api', {useNewUrlParser: true});
mongoose.connect('mongodb+srv://leon:qazwsxedc@cluster0-z5rk4.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

mongoose.Promise = Promise;


module.exports.Todo = require('./todo');
