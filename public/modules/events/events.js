var events_module = angular.module('events', 
	['apiRequestService', 'toaster']);

// configure route
events_module.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home.events', {
		url: '/events',
		templateUrl: 'modules/events/events.html',
		controller: 'eventsController',
		title: 'Events',
		data: {
			ncyBreadcrumbLabel: 'events'
		}
	});
});

amberApp.controller('eventsController', function($rootScope, $scope, ApiRequestService, toaster) {
	$rootScope.pageTitle = 'Events - Koran Kampus';
	ApiRequestService.get('event').success(function (data){
		$scope.events = data;
	});
	$scope.new_event = {
		title : '',
		date : '',
		time: '',
		description: ''
	};
	$scope.addNewEvent = function () {
		ApiRequestService.save('event', $scope.new_event).success(function() {
			$scope.new_event = {
				title : '',
				date : '',
				time: '',
				description: ''
			};
			toaster.pop('success', "Success", "Your event has been successfully added");
			ApiRequestService.get('event').success(function (data){
				$scope.events = data;
			});
		});
	};
});
