/**
 * Created by jgluhov on 29/01/16.
 */
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.jade')(),
      controller: 'HomeController',
      controllerAs: 'home'
    })
}
