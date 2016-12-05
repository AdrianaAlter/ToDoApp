var TodoConstants = require('../constants/todo_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var TodoActions = {
  allTodosReceived: function(todos){
    Dispatcher.dispatch({
      actionType: TodoConstants.ALL_TODOS_RECEIVED,
      todos: todos
    });
  },
  singleTodoReceived: function(todo){
    Dispatcher.dispatch({
      actionType: TodoConstants.SINGLE_TODO_RECEIVED,
      todo: todo
    });
  }
};

module.exports = TodoActions;
