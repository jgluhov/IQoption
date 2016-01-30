/**
 * Created by jgluhov on 29/01/16.
 */
import angular from 'angular';

import greeting from './greeting.directive';

export default angular.module('directives.greeting', [])
  .directive('greeting', greeting)
  .name;
