var portfolios_module = angular.module('portfolios', []);

// configure route
portfolios_module.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/statistics/absence');

	$stateProvider
	.state('home.portfolios', {
		url: '/portfolios',
		templateUrl: 'modules/portfolios/portfolios.html',
		controller: 'portfoliosController',
		title: 'Portfolios'
	});
});

amberApp.controller('portfoliosController', function() {

});
