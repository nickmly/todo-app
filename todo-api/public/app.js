$(document).ready(function(){
    $.getJSON("/api/todos").then(function(data){
        addTodos(data);
    }).catch(handleError);

    $("#todoInput").keypress(function(event) {
        if(event.which == 13) { // if enter pressed
            createTodo();
        }
    });
});

function createTodo(){
    var todoName = $("#todoInput").val();
    $.post("/api/todos", {name: todoName}).then(function(data){
        console.log(data);
    }).catch(handleError);
}


function addTodos(todos){
    todos.forEach(function(element) {
        var newTodo = $("<li>" + element.name + "</li>");
        if(element.completed){
            newTodo.addClass("done");
        }
        $("ul").append(newTodo);
    });
    
}

function handleError(err){
    var errorDiv = $("<div class='error'>" + err + "</div>");
    $("header").append(errorDiv);
}