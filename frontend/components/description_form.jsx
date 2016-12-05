var React = require('react');
var ApiUtil = require('../util/api_util.js');

var DescriptionForm = React.createClass({
  getInitialState: function(){
    return { display: "none", description: "" }
  },
  toggleDisplay: function(){
    this.state.display == "none" ? this.setState({ display: "block" }) : this.setState({ display: "none" });
  },
  update: function(e){
    e.preventDefault();
    this.setState({ description: e.currentTarget.value });
  },
  submit: function(){
    var todo = {};
    todo.description = this.state.description;
    ApiUtil.updateTodo(this.props.todo.id, todo);
    this.toggleDisplay();
  },
  render: function(){
    var style = { "display": this.state.display }
    return (
      <button>
        <section onClick={this.toggleDisplay} className="buffer">
          <i className={this.props.icon}></i>
        </section>
        <form id="description-form" style={style}>
          <textarea value={this.state.description} onChange={this.update}></textarea>
          <span onClick={this.submit}>Done!</span>
        </form>
      </button>
    )
  }

})

module.exports = DescriptionForm;
