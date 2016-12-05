var TodoActions = require('../actions/todo_actions.js');
var MessageActions = require('../actions/message_actions.js');

ApiUtil = {

  fetchAllTodos: function(){
    $.ajax({
      type: "GET",
      url: "/api/todos",
      dataType: "json",
      success: function(todos){
        TodoActions.allTodosReceived(todos);
      }
    });
  },

  createTodo: function(title){
    $.ajax({
      type: "POST",
      url: "/api/todos",
      dataType: "json",
      data: { title: title },
      success: function(todo){
        TodoActions.singleTodoReceived(todo);
      },
      error: function(){
        MessageActions.setMessage("This todo already exists!");
      }
    });
  },

  updateTodo: function(id, todo){
    $.ajax({
      type: "PATCH",
      url: "/api/todos/" + id,
      data: { todo: todo },
      dataType: "json",
      success: function(todo){
        TodoActions.singleTodoReceived(todo);
      }
    });
  },

  deleteTodo: function(id){
    $.ajax({
      type: "DELETE",
       url: "/api/todos/" + id,
       dataType: "json",
       success: function(todos){
         TodoActions.allTodosReceived(todos);
       }
    });
  }
};

module.exports = ApiUtil;
