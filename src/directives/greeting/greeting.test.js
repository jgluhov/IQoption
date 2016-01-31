/**
 * Created by jgluhov on 31/01/16.
 */
/*eslint-env jasmine*/
/*global angular:true*/

import greeting from './index';

describe('greeting directive', () => {
  let element, scope, compile;

  beforeEach(() => {
    angular.mock.module(greeting);

    angular.mock.inject(($rootScope, $compile) => {
      compile = $compile;
      scope = $rootScope;
    });

    element = compile('<greeting name="angularjs-es6"></greeting>')(scope);
    scope.$digest();
  });

  it('should applied template', () => {
    expect(element.find('h1')).not.toBe(0);
  });

  it('name of isolated scope should exactly the same as attr name', () => {
    const isolatedScope = element.isolateScope();
    expect(isolatedScope.name).toEqual('angularjs-es6');
  });

});


