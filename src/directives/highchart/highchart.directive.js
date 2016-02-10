/**
 * Created by jgluhov on 10.02.16.
 */
import './highchart.styl';

import Highcharts from 'highcharts';
require('highcharts/modules/exporting')(Highcharts);
import HighchartOptions from './highchart.options';

/*
 * @returns {{restrict: string}}
 */
export default function highchart() {

	function link() {
		Highcharts.chart(document.querySelector('.highchart-area'), new HighchartOptions());
	}

	return {
		restrict: 'E',
		link,
		template: require('./highchart.jade')()
	};
}
