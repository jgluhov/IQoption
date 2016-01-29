/**
 * Created by jgluhov on 29/01/16.
 */
import angular from 'angular';

import randomNames from './random-names.service';

export default angular.module('services.random-names', [])
  .service('randomNames', randomNames)
  .name;
