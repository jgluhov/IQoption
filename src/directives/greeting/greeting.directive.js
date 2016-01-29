/**
 * Created by jgluhov on 29/01/16.
 */
export default function greeting() {

  function link(scope, element, attrs) {
    console.log('directives');
  }

  return {
    restrict: 'E',
    link: link,
    scope: {
      name: '='
    },
    template: require('./greeting.jade')()
  };
}
