/**
 * Created by jgluhov on 29/01/16.
 */
export default class Greeting {
  constructor() {
    this.restrict = 'A';
    this.template = require('./greeting.html');
    this.scope = {};
  }

  link(scope, element, attrs) {
    console.log('directives');
  }
}

