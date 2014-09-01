var tasks_module = angular.module('tasks', ['apiRequestService', 'authService', 'ngTagsInput', 'Mac', 'toaster']);

// configure route
tasks_module.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home.tasks', {
		url: '/tasks',
		templateUrl: 'modules/tasks/tasks.html',
		controller: 'tasksController',
		title: 'Tasks',
		data: {
			ncyBreadcrumbLabel: 'task'
		}
	});
});

tasks_module.controller('tasksController', function($rootScope, $scope, ApiRequestService, SessionService, toaster) {
	var level = SessionService.get('userLevel');
	var id = SessionService.get('userId');
	$rootScope.pageTitle = 'Tasks - Koran Kampus';
	$scope.sendTo = [];
	$scope.recipients = [];
	$scope.send = [];
	$scope.newTask = {
		from : id,
		title : '',
		date : '',
		time : '',
		desc : '',
		sendTo : []
	};
	ApiRequestService.show('task',id)
	.success(function(data) {
		$scope.tasks = data;
				// $scope.loading = false;
			});
	ApiRequestService.get('user')
	.success(function(data) {
		if(level.charAt(0) == 'A') {
			for(var i=0; i < data.length; i++) {
				var temp = {
					text : '',
					id : ''
				}
				temp.text = data[i].name;
				temp.id = data[i].id;
					// console.log(level.charAt(1));
					$scope.recipients.push(temp);
						// $scope.recipients.id.push(data[i].id);
					}
				}
				if(level.charAt(0) == 'B') {
					for(var i=0; i < data.length; i++) {
						if(data[i].level.charAt(1) == level.charAt(1)) {
							var temp = {
								text : '',
								id : ''
							}
							temp.text = data[i].name;
							temp.id = data[i].id;
								// console.log(level.charAt(1));
								$scope.recipients.push(temp);
								// $scope.recipients.id.push(data[i].id);
							}
						}
					}
					console.log($scope.recipients);
				});
	$rootScope.loadTags = function (query) {
		var result = [];
		var recipients = $scope.recipients;
		for(var i = 0; i < recipients.length; i++) {
			if(recipients[i].text.indexOf(query) != -1)
			{
				var temp = {
					text : '',
					id : ''
				}
				temp.text = recipients[i].text;
				temp.id = recipients[i].id;
				result.push(temp);
			}
		}
		console.log(result);
		return result;
	}

	$scope.addNewTask = function () {
		$scope.newTask.sendTo = [];
		for(var i=0; i < $scope.sendTo.length; i++) {
			$scope.newTask.sendTo.push($scope.sendTo[i].id);
		}
		ApiRequestService.save('task', $scope.newTask).success(function() {
			$scope.sendTo = [];
			$scope.newTask = {
				from : id,
				title : '',
				date : '',
				time : '',
				desc : '',
				sendTo : []
			};
			toaster.pop('success', "Success", "Your task has been successfully added");
		});
		console.log($scope.newTask);
	}
});

