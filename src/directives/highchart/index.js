import angular from 'angular';

import highchart from './highchart.directive';

export default angular.module('directives.highchart', [])
	.directive('highchart', highchart)
	.name;
