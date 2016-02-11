export default function config($urlRouterProvider, $locationProvider, $compileProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	// Performance boost if false
	$compileProvider.debugInfoEnabled(true);
}

config.$inject = ['$urlRouterProvider', '$locationProvider', '$compileProvider'];
