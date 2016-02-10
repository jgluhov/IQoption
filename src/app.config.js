/**
 * Created by jgluhov on 29/01/16.
 */
config.$inject = ['$urlRouterProvider', '$locationProvider', '$compileProvider'];

export default function config($urlRouterProvider, $locationProvider, $compileProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	// Performance boost if false
	$compileProvider.debugInfoEnabled(true);
}
