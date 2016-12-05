var React = require('react');
var ApiUtil = require('../util/api_util.js');
var Message = require('./message.jsx');
var MessageActions = require('../actions/message_actions.js');

var Form = React.createClass({

  getInitialState: function(){
    return { title: "" }
  },

  updateTitle: function(e){
    var newTitle = e.currentTarget.value;
    this.setState({ title: newTitle});
  },

  submit: function(){
    if (this.state.title.length == 0){
      MessageActions.setMessage("Title field is blank!")
    }
    else {
      ApiUtil.createTodo(this.state.title);
      this.setState({ title: "" });
    }
  },

  render: function(){
    return (
      <section id="form">
        <h2>New</h2>
        <input type="text" value={this.state.title} onChange={this.updateTitle}></input>
        <button onClick={this.submit}>Create!</button>
        <Message />
      </section>
    )
  }

});

module.exports = Form;
