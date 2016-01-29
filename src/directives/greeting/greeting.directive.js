/**
 * Created by jgluhov on 29/01/16.
 */
export default function greeting($http) {

  function link(scope, element, attrs) {
    $http.get('/', {}).then(res => console.log(res));
    console.log('directives');
  }

  return {
    restrict: 'A',
    link: link,
    scope: {
      name: '='
    },
    template: require('./greeting.jade')()
  };
}

greeting.$inject = ['$http'];
