var React = require('react');
var DescriptionForm = require('./description_form.jsx');
var DescriptionView = require('./description_view.jsx');

var DescriptionButton = React.createClass({
  render: function(){
    var addIcon = "fa fa-plus-square fa-2x";
    var viewIcon = "fa fa-ellipsis-h fa-2x";
    if (this.props.todo.description && this.props.todo.description.length > 0){
      return <DescriptionView todo={this.props.todo} icon={viewIcon} />
    }
    else {
      return  <DescriptionForm todo={this.props.todo} icon={addIcon} />
    }
  }
});

module.exports = DescriptionButton;
