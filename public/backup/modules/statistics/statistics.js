// create module for statistics
var statistics_module =  angular.module('statistics', ['highcharts-ng','ui.router']);

statistics_module.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home.statistics', {
			abstract: true,
			url: '/statistics',
			templateUrl: 'modules/statistics/statistics.html',
			title: 'Statistics'
		})
		.state('home.statistics.absence', {
			url: '/absence',
			templateUrl: 'modules/statistics/statistics.absence.html',
			controller: 'absenceController',
			title: 'Absence'
		})
		.state('home.statistics.progress', {
			url: '/progress',
			templateUrl : 'modules/statistics/statistics.progress.html',
			controller: 'progressController',
			title: 'Progress'
		});
});

// statistics_module.run(function (scope, state) {
// 	state.go('home.statistics.absence');
// });

statistics_module.controller('statisticsController', function($scope, $location){
	$scope.isTabActive = function(route) {
		return route == $location.path();
	}
});

statistics_module.controller('absenceController', ['$scope', function($scope){
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
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
			data: [100, 60, 50, 100, 90, 80, 100]
		}]
    }
}]);

statistics_module.controller('progressController', ['$scope', function($scope){
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
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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
			data: [100, 60, 50, 100, 90, 80, 100]
		}]
    }
}]);