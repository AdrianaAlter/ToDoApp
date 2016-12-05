var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var BrowserHistory = require('react-router').browserHistory;
var App = require('./components/app.jsx');

var routes = (
  <Router history={BrowserHistory}>
    <Route path="/" component={App} />
  </Router>
)

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById("root");
  ReactDOM.render(routes, root);
});
