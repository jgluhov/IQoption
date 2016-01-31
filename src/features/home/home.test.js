/**
 * Created by jgluhov on 31/01/16.
 */
/*eslint-env jasmine*/
/*global angular:true*/

import home from './index';
import '../../services/random-names';

describe('Home Controller', () => {
  let $controller,
    randomNames,
    HomeController;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject((_$controller_, _randomNames_) => {
    $controller = _$controller_;
    randomNames = _randomNames_;
  }));

  beforeEach(() => {
    HomeController = $controller('HomeController');
  });

  it(`name is initialized to 'JGluhov'`, () => {
    expect(HomeController.name).to.be.a('string').to.equal('JGluhov');
  });

  it('should change name to the one of the names from random-service names array', () => {
    HomeController.randomName();
    expect(randomNames.names).to.be.instanceOf(Array);
    expect(randomNames.names).to.include(HomeController.name);
  });
});
