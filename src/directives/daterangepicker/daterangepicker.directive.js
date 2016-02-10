/**
 * Created by jgluhov on 10.02.16.
 */
/*
 * @returns {{restrict: string}}
 */
/*global $*/
export default function daterangepicker() {

	function link(scope, element) {
		$(element[0]).daterangepicker();
	}

	return {
		restrict: 'E',
		link,
		template: require('./daterangepicker.jade')()
	};

}
