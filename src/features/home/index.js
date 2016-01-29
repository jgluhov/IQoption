/**
 * Created by jgluhov on 29/01/16.
 */
import './home.styl';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './home.config';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service.js';

export default angular.module('app.home', [uirouter, randomNames])
  .config(config)
  .controller('HomeController', HomeController)
  .name;
