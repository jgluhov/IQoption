/*eslint-env jasmine*/
/*global angular:true*/

import daterangepicker from './index';

describe('daterangepicker directive', () => {
	let element, scope, compile;

	beforeEach(() => {
		angular.mock.module(daterangepicker);

		angular.mock.inject(($rootScope, $compile) => {
			compile = $compile;
			scope = $rootScope;
		});

		element = compile('<div class="well well-sm"><daterangepicker></daterangepicker></div>')(scope);
	});

	it('should applied template', () => {
		expect(element.find('input').length).to.not.equal(0);
	});

});
