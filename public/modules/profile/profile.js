var profile_module =  angular.module('profile', ['apiRequestService', 'ngProgress', 'authService', 'lr.upload', 'angularSpinner']);

profile_module.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home.profile', {
		url: '/profile',
		templateUrl: 'modules/profile/profile.html',
		controller: 'profileController',
		title: 'Profile',
		data: {
    		ncyBreadcrumbLabel: 'profile'
  		}
	})
	.state('home.editProfile', {
		url: '/profile/edit',
		templateUrl: 'modules/profile/editProfile.html',
		controller: 'editProfileController',
		// title: 'Profile'
		data: {
    		ncyBreadcrumbLabel: 'edit profile'
  		}
	})
	.state('home.crew', {
		url: '/profile/:id',
		templateUrl: 'modules/profile/crew.html',
		controller: 'crewController',
		data: {
    		ncyBreadcrumbLabel: 'crew'
  		}
	});
});

profile_module.controller('profileController', function($rootScope, $scope, $http, ApiRequestService, ngProgress, SessionService) {
	$rootScope.pageTitle = 'Profile - Koran Kampus';
	var id = SessionService.get('userId');
	ngProgress.color('#00B98D');
	ngProgress.start();
		// get all the comments first and bind it to the $scope.comments object
		ApiRequestService.show('user',id)
		.success(function(data) {
			$scope.user = data;
			console.log(data);
				// $scope.loading = false;
			});
		ApiRequestService.show('award',id)
		.success(function(data) {
			$rootScope.awards = data;
			console.log(data);
				// $scope.loading = false;
			});
		ApiRequestService.show('portfolio',id)
		.success(function(data) {
			$rootScope.portfolios = data;
			console.log(data);
				// $scope.loading = false;
			});
		ngProgress.complete();


	});

profile_module.controller('editProfileController', function($rootScope, $scope, $http, ApiRequestService, ngProgress, SessionService) {
	$rootScope.pageTitle = 'Edit Profile - Koran Kampus';
	$scope.uploadImage = function() {
		console.log($scope.profPict);
	}

});

profile_module.controller('crewController', function($rootScope, $scope, $stateParams, ApiRequestService, usSpinnerService) {

	$rootScope.pageTitle = 'Crew - Koran Kampus';

	$scope.tabChart = 1;

	$scope.chartHidden = true;

	$scope.tabChartSwitcher = function(params) {
		if($scope.tabChart != params) {
			$scope.tabChart = params;
			console.log(params);
		}
	};
	usSpinnerService.spin('spinner-2');
	ApiRequestService.show('user', $stateParams.id)
	.success(function(data) {
		$scope.crew = data;
	});
	ApiRequestService.show('award', $stateParams.id)
	.success(function(data) {
		$scope.crewAward = data;
	});
	ApiRequestService.show('portfolio', $stateParams.id)
	.success(function(data) {
		$scope.crewPortfolios = data;
	});
	ApiRequestService.show('presence', $stateParams.id)
	.success(function(data) {
		usSpinnerService.stop('spinner-2');
		$scope.presence = data;
		$scope.chartConfig = {
			options: {
				chart: {
					type: 'column',
					backgroundColor: 'rgba(255, 255, 255, 0)',
					polar: true,
					height: 250,
				},
				colors: ['#00B98D']
			},
			title: {
				text: ''
			},
			xAxis: {
				categories: $scope.presence != null ? $scope.presence['2013']['month'] : '',
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
    		data: $scope.presence != null ? $scope.presence['2013']['count'] : ''
    	}]
    };
		$scope.chartHidden = false;
	});

	ApiRequestService.show('portfolio/getProgress', $stateParams.id)
	.success(function(data) {
		usSpinnerService.stop('spinner-2');
		$scope.learning = data;
		$scope.chartHidden = false;
	});

	$scope.$watch('tabChart', function(newValue) {
		if(newValue == 1 && $scope.presence != null) {
			$scope.chartConfig = {
				options: {
					chart: {
						type: 'column',
						backgroundColor: 'rgba(255, 255, 255, 0)',
						polar: true,
						height: 250,
					},
					colors: ['#00B98D']
				},
				title: {
					text: ''
				},
				xAxis: {
					categories: $scope.presence != null ? $scope.presence['2013']['month'] : '',
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
    		data: $scope.presence != null ? $scope.presence['2013']['count'] : ''
    	}]
    };
}
  if (newValue == 2 && $scope.learning != null){
	$scope.chartConfig = {
		options: {
			chart: {
				type: 'line',
				backgroundColor: 'rgba(255, 255, 255, 0)',
				polar: true,
				height: 250,
			},
			colors: ['#00B98D']
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
    		data: $scope.learning['2014']['score']
    	}]
    };
}
});
});


