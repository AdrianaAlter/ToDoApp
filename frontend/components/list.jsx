var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var ApiUtil = require('../util/api_util.js');
var Item = require('./item.jsx');

var List = React.createClass({
  getInitialState: function(){
    return { todos: TodoStore.all() };
  },
  componentDidMount: function(){
    this.listener = TodoStore.addListener(this._onChange);
    ApiUtil.fetchAllTodos();
  },
  componentWillUnmount: function(){
    this.listener.remove();
  },
  _onChange: function(){
    this.setState({ todos: TodoStore.all() });
  },
  render: function(){
    var items = this.state.todos.map(function(todo){
      return <Item key={todo.id} todo={todo} />
    });
    return (
      <ul id="list">
        <h2>My Todos</h2>
        {items}
      </ul>
    )
  }
});

module.exports = List;
