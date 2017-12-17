import { Meteor } from 'meteor/meteor';

import { Todos } from '../../imports/collections/todos';

Meteor.publish('todoList', function() {
  return Todos.find({});
});

Meteor.publish("userData", function () {
    if (this.userId) {
        return Meteor.users.find({_id: this.userId});
    } else {
        this.ready();
    }
});
