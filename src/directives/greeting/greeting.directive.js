/**
 * Created by jgluhov on 29/01/16.
 */

/**
 * @returns {{restrict: string, link: link, scope: {name: string}, template: string}}
 */

export default function greeting() {

  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    template: require('./greeting.jade')()
  };

}
