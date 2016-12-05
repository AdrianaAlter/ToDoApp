var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var MessageConstants = require('../constants/todo_constants.js');

var MessageStore = new Store(Dispatcher);

var _message = [];

MessageStore.all = function(){
  return _message;
};

MessageStore.resetMessage = function(message){
  _message = message;
};

MessageStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case MessageConstants.MESSAGE_RECEIVED:
      MessageStore.resetMessage(payload.message);
      MessageStore.__emitChange();
      break;
  }
};

module.exports = MessageStore;
