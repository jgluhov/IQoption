/**
 * Created by jgluhov on 31/01/16.
 */
/*eslint-env jasmine*/
/*global angular:true*/
import home from './index';

describe('HomeController', function() {
  let $controller;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to World', function() {
    const HomeController = $controller('HomeController');
    expect(HomeController.name).toBe('World');
  });
});
