/*global $*/

/*
 * @returns {{restrict: string}}
 */
export default function daterangepicker() {

	function link(scope) {
		const input = document.querySelector('.daterangeinput');
		$(input).daterangepicker({
			startDate: '01/01/2010',
			endDate: '02/11/2016'
		});
		$(input).on('apply.daterangepicker', (e, picker) => {
			const startDate = picker.startDate.format('MM/DD/YYYY');
			const endDate = picker.endDate.format('MM/DD/YYYY');

			input.value = [startDate, endDate].join(' - ');

			scope.$emit('onChangeDate', {startDate, endDate});
		});
	}

	return {
		restrict: 'E',
		link,
		template: require('./daterangepicker.jade')()
	};

}
