import angular from 'angular';

import daterangepicker from './daterangepicker.directive';

export default angular.module('directives.daterangepicker', [])
	.directive('daterangepicker', daterangepicker)
	.name;
