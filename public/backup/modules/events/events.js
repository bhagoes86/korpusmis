var events_module = angular.module('events', 
	[]);

// configure route
events_module.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home.events', {
			url: '/events',
			templateUrl: 'modules/events/events.html',
			controller: 'eventsController',
			title: 'Events'
		});
});

amberApp.controller('eventsController', function() {

});
