/**
 * Created by jgluhov on 29/01/16.
 */
import '../../../node_modules/bootstrap-daterangepicker/daterangepicker.css';
import './home.styl';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './home.config';
import HomeController from './home.controller';
import daterangepicker from '../../directives/daterangepicker';
import randomNames from '../../services/random-names';
import greeting from '../../directives/greeting';

export default angular.module('app.home', [uirouter, randomNames, greeting, daterangepicker])
  .config(config)
  .controller('HomeController', HomeController)
  .name;
