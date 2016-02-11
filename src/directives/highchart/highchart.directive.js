import './highchart.styl';

import Highcharts from 'highcharts';
require('highcharts/modules/exporting')(Highcharts);
import HighchartOptions from './highchart.options';

/*
 * @returns {{restrict: string}}
 */
export default function highchart() {

	function link(scope) {
		const options = new HighchartOptions(new Date(2010, 0, 1), new Date());
		const chart = Highcharts.chart(document.querySelector('.highchart-area'), options);

		scope.$on('onChangeDate', (e, args) => {
			const [minMonth, minDay, minYear] = args.startDate.split('/');
			const [maxMonth, maxDay, maxYear] = args.endDate.split('/');

			chart.xAxis[0].update({
				min: Date.UTC(minYear, minMonth, minDay),
				max: Date.UTC(maxYear, maxMonth, maxDay)
			});
		});
	}

	return {
		restrict: 'E',
		link,
		template: require('./highchart.jade')()
	};
}
