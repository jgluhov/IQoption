import '../../../node_modules/bootstrap-daterangepicker/daterangepicker.css';
import './home.styl';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './home.config';
import HomeController from './home.controller';
import daterangepicker from '../../directives/daterangepicker';
import highchart from '../../directives/highchart';

export default angular.module('app.home', [
	uirouter, daterangepicker, highchart
])
	.config(config)
	.controller('HomeController', HomeController)
	.name;
