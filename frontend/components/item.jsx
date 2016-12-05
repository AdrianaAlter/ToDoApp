var React = require('react');
var ApiUtil = require('../util/api_util.js');
var DescriptionButton = require('./description_button.jsx');

var Item = React.createClass({
  getInitialState: function(){
    return { done: this.props.todo.done, urgent: this.props.todo.urgent, description: this.props.todo.description }
  },
  delete: function(){
    ApiUtil.deleteTodo(this.props.todo.id);
  },
  toggleDone: function(){
    var done = this.state.done ? false : true;
    var todo = {};
    todo.done = done;
    ApiUtil.updateTodo(this.props.todo.id, todo);
    this.state.done ? this.setState({ done: false }) : this.setState({ done: true });
  },
  toggleFlag: function(){
    var urgent = this.state.urgent ? false : true;
    var todo = {};
    todo.urgent = urgent;
    ApiUtil.updateTodo(this.props.todo.id, todo);
    this.state.urgent ? this.setState({ urgent: false }) : this.setState({ urgent: true });
  },
  render: function(){
    var className = "";
    var doneIcon;
    var urgentIcon;
    if (this.state.done){
      className += " done ";
      doneIcon = <i className="fa fa-check-square-o fa-2x"></i>
    }
    else {
      doneIcon = <i className="fa fa-square-o fa-2x"></i>
    }
    if (this.state.urgent){
      className += " urgent ";
      urgentIcon = <i className="fa fa-flag fa-2x"></i>
    }
    else {
      urgentIcon = <i className="fa fa-flag-o fa-2x"></i>
    }
    return (
      <li className={className}>
        <h3>{this.props.todo.title}</h3>
        <section id="buttons" className="group">
          <DescriptionButton todo={this.props.todo} />
          <button onClick={this.toggleDone}>{doneIcon}</button>
          <button onClick={this.toggleFlag}>{urgentIcon}</button>
          <button onClick={this.delete}><i className="fa fa-trash fa-2x"></i></button>
        </section>
      </li>
    )
  }
});

module.exports = Item;
