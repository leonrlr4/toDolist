
$(document).ready(function(){
    $.getJSON('api/todo')
    .then(addTodos)

    $('#todoInput')
    .keypress(function(event){
        if(event.which == 13){
            createTodo()
        }
    })
    $('.list').on('click', 'li', function(){
        doneTodo($(this))
    })
    $('.list').on('click', 'span', function(event){
        event.stopPropagation();
        removeTodo($(this).parent());
    })
})

function doneTodo (todo){
    var updateUrl = '/api/todo/'+todo.data('id');
    var isDone = !todo.data('completed')
    var updateData = {completed: isDone}
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
    .then(function(updataTodo){
        todo.toggleClass('done')
        todo.data('completed', isDone);
    })
}

function removeTodo(todo){
    var clickedId = todo.data('id')
    var clickedUrl = '/api/todo/' + clickedId
    $.ajax({
        method: 'DELETE',
        url: clickedUrl,
    })
    .then(function (data) {
        todo.remove()
    })
}


function addTodo(todo){
    var adding = $('<li class="task">'+todo.name+'<span>X</span></li>')
    adding.data('id', todo._id);
    adding.data('completed', todo.completed);
    if(todo.completed == true){
        adding.addClass('done')
    }
    $('.list').append(adding)
}

function addTodos(todos) {
    todos.forEach(function (item) {
        addTodo(item);
    })
}

function createTodo(){
    var userInput = $('#todoInput').val()
    $.post('/api/todo', {name: userInput})
    .then(function(item){
        $('#todoInput').val('')
        addTodo(item)
    })
    .catch(function(err){
        console.log(err)
    })
}




// function addTodos(todos){
//     todos.forEach((ele) => {
//         var adding = $('<li class="task">' + ele.name + '<span>X</span></li>')
//         if (ele.completed == true){
//             adding.addClass('done')
//         }
//         $('.list').append(adding)
//     })
// }
