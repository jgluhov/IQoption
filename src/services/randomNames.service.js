/**
 * Created by jgluhov on 29/01/16.
 */
"use strict";

import angular from 'angular';

class RandomNames {
  constructor() {
    this.names = ['John', 'Elisa', 'Mark', 'Annie'];
  }

  getName ()  {
    let totalNames = this.names.length;
    let randomIndex = Math.floor(Math.random() * totalNames);
    return this.names[randomIndex];
  };
}

export default angular.module('services.random-names', [])
  .service('randomNames', RandomNames)
  .name;
