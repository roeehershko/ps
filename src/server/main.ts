import '../imports/polyfills';

import '../imports/methods/todos';
import '../imports/publications/todos';

import { Meteor } from 'meteor/meteor';
import { WebApp, WebAppInternals } from 'meteor/webapp';

import {
  enableProdMode,
  PlatformRef,
  ApplicationRef
} from '@angular/core';

import { ResourceLoader } from '@angular/compiler';
import { platformDynamicServer, BEFORE_APP_SERIALIZED ,INITIAL_CONFIG, PlatformState } from '@angular/platform-server';

import { ServerAppModule } from '../imports/app/server-app.module';

Meteor.startup(() => {

  // Enable Angular's production mode if Meteor is in production mode
  if (Meteor.isProduction) {
    enableProdMode();
  }

});
