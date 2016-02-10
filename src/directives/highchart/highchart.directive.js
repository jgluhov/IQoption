/**
 * Created by jgluhov on 10.02.16.
 */
import Highcharts from 'highcharts';
require('highcharts/modules/exporting')(Highcharts);
import HighchartOptions from './highchart.options';
/*
 * @returns {{restrict: string}}
 */
export default function highchart() {

	function link(scope, element) {
		Highcharts.chart(element[0], new HighchartOptions());
	}

	return {
		restrict: 'E',
		link,
		template: require('./highchart.jade')()
	};
}
