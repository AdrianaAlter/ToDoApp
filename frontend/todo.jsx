var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var BrowserHistory = require('react-router').browserHistory;
var HashHistory = require('react-router').HashHistory;
var Modal = require('react-modal');
var App = require('./components/app.jsx');

var routes = (
  <Router history={BrowserHistory}>
    <Route path="/" component={App} />
  </Router>
)

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById("root");
  Modal.setAppElement(root);
  ReactDOM.render(routes, root);
});
