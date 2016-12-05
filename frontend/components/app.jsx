var React = require('react');
var List = require('./list.jsx');
var Form = require('./form.jsx');

var App = React.createClass({
  render: function(){
    return(
      <div id="app">
        <List />
        <Form />
      </div>
    )
  }
});

module.exports = App;
