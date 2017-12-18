import '../imports/polyfills';

import '../imports/methods/todos';
import '../imports/publications/todos';

import { Meteor } from 'meteor/meteor';

import {
  enableProdMode,
} from '@angular/core';


Meteor.startup(() => {

  // Enable Angular's production mode if Meteor is in production mode
  if (Meteor.isProduction) {
    enableProdMode();
  }

});
