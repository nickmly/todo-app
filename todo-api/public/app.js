$(document).ready(function(){
    $.getJSON("/api/todos").then(function(data){
        addTodos(data);
    }).catch(function(err){        
        var errorDiv = $("<div class='error'>" + err + "</div>");
        $("header").append(errorDiv);
    });
});

function addTodos(todos){
    todos.forEach(function(element) {
        var newTodo = $("<li>" + element.name + "</li>");
        $("ul").append(newTodo);
    });
    
}