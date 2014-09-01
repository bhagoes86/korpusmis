var tasks_module = angular.module('tasks', 
	[]);

// configure route
tasks_module.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home.tasks', {
			url: '/tasks',
			templateUrl: 'modules/tasks/tasks.html',
			controller: 'tasksController',
			title: 'Tasks'
		});
});

tasks_module.controller('tasksController', function() {

});

