var MessageConstants = require('../constants/todo_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var MessageActions = {
  setMessage: function(message){
    Dispatcher.dispatch({
      actionType: MessageConstants.MESSAGE_RECEIVED,
      message: message
    });
  }
};

module.exports = MessageActions;
