var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var TodoConstants = require('../constants/todo_constants.js');

var TodoStore = new Store(Dispatcher);
var _todos = [];

TodoStore.all = function(){
  return _todos;
};

TodoStore.resetTodos = function(todos){
  _todos = todos;
};

TodoStore.resetTodo = function(todo){
  var i = TodoStore.getIndex(todo.id);
  if (_todos[i]){
    _todos[i] = todo;
  }
  else {
    _todos.push(todo);
  }
};

TodoStore.getIndex = function(id){
  for (var i = 0; i < _todos.length; i++){
    if (_todos[i].id == id){
      return i;
    }
  }
};

TodoStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case TodoConstants.ALL_TODOS_RECEIVED:
      TodoStore.resetTodos(payload.todos);
      TodoStore.__emitChange();
      break;
  }
  switch (payload.actionType) {
    case TodoConstants.SINGLE_TODO_RECEIVED:
      TodoStore.resetTodo(payload.todo);
      TodoStore.__emitChange();
      break;
  }
};

module.exports = TodoStore;
