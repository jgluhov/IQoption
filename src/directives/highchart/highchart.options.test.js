/*eslint-env jasmine*/
import HighchartOptions from './highchart.options';

describe('highchart directive', () => {
	let options;

	beforeEach(() => {
		//angular.mock.module(highchart);
		//
		//angular.mock.inject(($rootScope, $compile) => {
		//	compile = $compile;
		//	scope = $rootScope;
		//});
		//
		//element = compile('<highchart></highchart>')(scope);
		options = new HighchartOptions(new Date(2010, 0, 1), new Date());
	});

	it('highchart options should be set', () => {
		expect(options.chart).to.be.an('object');
		expect(options.credits.text).to.equal('IQOption');
		expect(options.title.text).to.equal('Russia and Turkey economic relations.');
		expect(options.xAxis.type).to.equal('datetime');
		expect(options.plotOptions).to.be.an('object');
		expect(options.series).to.be.an('array');
	});

	it('highchart options generateDates should return an array of dates', () => {
		expect(options.generateDates(10, new Date(2010, 0, 1), new Date())).to.be.an('array');
	});

	it('highchart options random function should return a value', () => {
		expect(options.random(10, 20)).to.be.an('number');
	});

});
