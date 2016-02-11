import 'bootstrap/dist/css/bootstrap.min.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './app.config';
import home from './features/home';

angular.module('app', [uirouter, home])
  .config(config);

angular.bootstrap(document, ['app']);
