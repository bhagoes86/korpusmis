// create module for statistics
var statistics_module =  angular.module('statistics', ['twitter.timeline','highcharts-ng','ui.router','authService', 'apiRequestService', 'angularSpinner']);

statistics_module.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home.statistics', {
		abstract: true,
		url: '/statistics',
		templateUrl: 'modules/statistics/statistics.html',
		title: 'Statistics',
		data: {
    		ncyBreadcrumbLabel: 'statistics'
  		}
	})
	.state('home.statistics.absence', {
		url: '/absence',
		templateUrl: 'modules/statistics/statistics.absence.html',
		controller: 'absenceController',
		title: 'Absence',
		data: {
    		ncyBreadcrumbLabel: 'absence'
  		}
	})
	.state('home.statistics.progress', {
		url: '/progress',
		templateUrl : 'modules/statistics/statistics.progress.html',
		controller: 'progressController',
		title: 'Progress',
		data: {
    		ncyBreadcrumbLabel: 'progress'
  		}
	});
});

statistics_module.controller('statisticsController', function($http, $rootScope, $scope, $location, SessionService, ApiRequestService){
	$rootScope.pageTitle = 'Dashboard - Koran Kampus';
	var id = SessionService.get('userId');
	ApiRequestService.show('task/deadline', id)
	.success(function(data) {
		$rootScope.tasks = data;
			// console.log(data);
		});

	ApiRequestService.show('user', id)
	.success(function(data) {
		$rootScope.user = data;
	});

	
	$scope.isTabActive = function(route) {
		return route == $location.path();
	}
});

statistics_module.controller('absenceController', function(usSpinnerService, $scope, ApiRequestService, SessionService){

	var id = SessionService.get('userId');
	$scope.chartHidden = true;
	$scope.presence = [];

	usSpinnerService.spin('spinner-1');
	ApiRequestService.show('presence', id)
	.success(function(data) {
		usSpinnerService.stop('spinner-1');
		$scope.presence = data;
		console.log(data);
		$scope.chartConfig = {
			options: {
				chart: {
					type: 'column',
					backgroundColor: 'rgba(255, 255, 255, 0)',
					polar: true,
					height: 250,
				},
				colors: ['#00B98D', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
			},
			title: {
				text: ''
			},
			xAxis: {
				categories: $scope.presence['2013']['month'],
				labels: {
					style: {
						color: '#FFFFFF',
						fontFamily: 'Cicle-semi'
					}
				}
			},
			yAxis: {
				min: 0,
				max: 100,
				labels: {
					style: {
						color: '#FFFFFF',
						fontFamily: 'Cicle-semi'
					}
				},
				title: {
					text: 'Percentage (%)',
					style: {
						color: '#FFFFFF',
						fontFamily: 'Cicle-semi'
					}
				},
				plotBands: [{
    			color: 'rgba(255,0,0,0.3)', // Color value
    			from: '0', // Start of the plot band
    			to: '20' // End of the plot band
    		}]
    	},
    	tooltip: {
    		pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}%</b><br/>',
    		shared: true
    	},
    	credits: {
    		enabled: false
    	},
    	legend: {
    		color: '#FFFFFF'
    	},
    	series: [{
    		name: 'absence',
    		data: $scope.presence['2013']['count'],
    	}]
    };
    $scope.chartHidden = false;
});
});

statistics_module.controller('progressController', function(usSpinnerService, $scope, ApiRequestService, SessionService){
	var id = SessionService.get('userId');
	$scope.learning = [];
	$scope.chartHidden = true;
	usSpinnerService.spin('spinner-1');
	ApiRequestService.show('portfolio/getProgress', id)
	.success(function(data) {
		usSpinnerService.stop('spinner-1');
		$scope.learning = data;
		$scope.chartConfig = {
			options: {
				chart: {
					type: 'line',
					backgroundColor: 'rgba(255, 255, 255, 0)',
					polar: true,
					height: 250,
				},
				colors: ['#00B98D', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
			},
			title: {
				text: ''
			},
			xAxis: {
				categories: $scope.learning['2014']['month'],
				labels: {
					style: {
						color: '#FFFFFF',
						fontFamily: 'Cicle-semi'
					}
				}
			},
			yAxis: {
				min: 0,
				max: 100,
				labels: {
					style: {
						color: '#FFFFFF',
						fontFamily: 'Cicle-semi'
					}
				},
				title: {
					text: 'Percentage (%)',
					style: {
						color: '#FFFFFF',
						fontFamily: 'Cicle-semi'
					}
				}
			},
			tooltip: {
				pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}%</b><br/>',
				shared: true
			},
			credits: {
				enabled: false
			},
			legend: {
				color: '#FFFFFF'
			},
			series: [{
				name: 'portfolio score',
				data: $scope.learning['2014']['score']
			}]
		};
		$scope.chartHidden = false;
	});
});