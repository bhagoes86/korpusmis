var login_module = angular.module('login', ['ui.router','authService', 'ngProgress']);

login_module.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'modules/login/login.html',
			controller: 'loginController',
			title: 'Login'
		});
});

login_module.controller('loginController', function($scope, $rootScope, $state, AuthService, SessionService, ngProgress) {
	$rootScope.pageTitle = 'Login - Koran Kampus';
	$scope.credentials = { email: "", password: "" };
	$scope.login = function () {
		ngProgress.color('#00B98D');
		ngProgress.start();
		if($scope.credentials.email != '' || $scope.credentials.password != '') {
		AuthService.login($scope.credentials).success(function(data) {
			// console.log(SessionService.get('userId'));
			SessionService.set('userId', data.id);
			SessionService.set('username', data.name);
			SessionService.set('userLevel', data.level);
			// console.log(SessionService.get('userId'));
			ngProgress.complete();
			$state.go('home.statistics.absence');
		}).error(function(response) {
			ngProgress.complete();
			$rootScope.message = response.flash;
		});
		} else {
			$rootScope.message = 'You haven\'t filled any field yet';
			ngProgress.complete();
		}
	}
});

