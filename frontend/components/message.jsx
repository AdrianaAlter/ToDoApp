var React = require('react');
var ApiUtil = require('../util/api_util.js');
var MessageStore = require('../stores/message_store.js');

var Message = React.createClass({
  getInitialState: function(){
    return { message: MessageStore.all() }
  },
  componentDidMount: function(){
    this.listener = MessageStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.listener.remove();
  },
  _onChange: function(){
    this.setState({ message: MessageStore.all() });
  },
  xout: function(){
    this.setState({ message: "" });
  },
  isMessage: function(){
    return this.state.message.length > 0;
  },
  render: function(){
    var display = this.isMessage() ? "block" : "none";
    var style = { "display": display };
    return (
      <section id="message" style={style}>
        <button onClick={this.xout}><i className="fa fa-window-close"></i></button>
        <h3>{this.state.message}</h3>
      </section>
    )
  }
});

module.exports = Message;
