/**
 * Created by jgluhov on 31/01/16.
 */
/*eslint-env jasmine*/
/*global angular:true*/

import home from './index';
import '../../services/random-names';

describe('Home Controller', () => {
  let $controller,
    randomNames;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject((_$controller_, _randomNames_) => {
    $controller = _$controller_;
    randomNames = _randomNames_;
  }));

  it(`name is initialized to 'JGluhov'`, () => {
    const HomeController = $controller('HomeController');
    expect(HomeController.name).toBe('JGluhov');
  });

  it('should change name to the one of the names from random-service names array', () => {
    const HomeController = $controller('HomeController');
    HomeController.randomName();
    const index = randomNames.names.indexOf(HomeController.name);
    expect(index).not.toBe(-1);
  });
});
