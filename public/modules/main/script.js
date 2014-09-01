/**********************************************************************************

	Project Name: Sistem Informasi
	Project Description: Manajemen Sistem Informasi (Evaluasi) Koran Kampus
	File Name: script.js
	Author: Rahmanda Wibowo
	Author URI: http://www.rahmandawibowo.com
	Version: 1.0.0
	
**********************************************************************************/
// create module for amberApp
var amberApp = angular.module('amberApp', 
	['main', 'login', 'ui.router', 'authService', 'ngRoute', 'ncy-angular-breadcrumb', 'ui.bootstrap']);

// configure route
amberApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');
});

amberApp.run(function($rootScope, $location, $state, AuthService) {
	var routesThatRequireAuth = [
	'/app/statistics/absence', '/app/statistics/progress', '/app/profile', '/app/tasks', '/app/events',
	'/app/absenceRecord', '/app/scoringRecord', '/app/profile/edit'
	];
	$rootScope.$on('$stateChangeStart', function(event, next, current) {
		if(_.contains(routesThatRequireAuth, $location.path()) && !AuthService.isLoggedIn()) {
			event.preventDefault();
			$state.go('login');
		}
		console.log(_.contains(routesThatRequireAuth, $location.path()));
	})
});

amberApp.filter('myDateFormat', function myDateFormat($filter){
    return function(text){
        var  tempdate= new Date(text.replace(/-/g,"/"));
        return $filter('date')(tempdate, "MMMM, dd yyyy HH:mm");
    }
})


