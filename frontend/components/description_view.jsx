var React = require('react');
var ApiUtil = require('../util/api_util.js');

var DescriptionView = React.createClass({
  getInitialState: function(){
    return { display: "none" }
  },
  toggleDisplay: function(){
    this.state.display == "none" ? this.setState({ display: "block" }) : this.setState({ display: "none" });
  },
  deleteDescription: function(){
    ApiUtil.updateTodo(this.props.todo.id, {description: null});
    this.setState({ display: "none" });
  },
  render: function(){
    var style = { "display": this.state.display };
    return (
            <button>
              <section onClick={this.toggleDisplay} className="buffer">
                <i className={this.props.icon}></i>
              </section>
              <section id="description" style={style}>
                <p>{this.props.todo.description}</p>
                <span onClick={this.deleteDescription}><i className="fa fa-trash"></i></span>
              </section>
            </button>
          )
  }

});

module.exports = DescriptionView;
