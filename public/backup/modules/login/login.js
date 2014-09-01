var login_module = angular.module('login', ['ui.router']);

login_module.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'modules/login/login.html',
			controller: 'loginController',
			title: 'Login'
		});
});

login_module.controller('loginController', function($scope, $rootScope, $state) {
	$scope.credentials =  {
		username: '',
		password: ''
	};
	$scope.login = function () {
		// AuthService.login(credentials).then(function () {
		// 	$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
		// }, function () {
		// 	$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
		// }
		// );
		if($scope.credentials.username=='admin@example.org') {
			$state.go('home.statistics.absence');
		}
	};
});

// login_module.constant('AUTH_EVENTS', {
// 	loginSuccess: 'auth-login-success',
// 	loginFailed: 'auth-login-failed',
// 	logoutSuccess: 'auth-logout-success',
// 	sessionTimeout: 'auth-session-timeout',
// 	notAuthenticated: 'auth-not-authenticated',
// 	notAuthorized: 'auth-not-authorized'
// });

// login_module.constant('USER_ROLES', {
// 	all: '*',
// 	admin: 'admin',
// 	editor: 'admin',
// 	guest: 'guest'
// });

// login_module.factory('AuthService', function($http, Session){
// 	return {
// 		login: function (credentials) {
// 			return $http
// 			.post('/login', credentials)
// 			.then(function (res) {
// 				Session.create(res.id, res.userid, res.role);
// 			});
// 		},
// 		isAuthenticated: function () {
// 			return !!Session.userId;
// 		},
// 		isAuthorized: function (authorizedRoles) {
// 			if (!angular.isArray(authorizedRoles)) {
// 				authorizedRoles = [authorizedRoles];
// 			}
// 			return (this.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
// 		}
// 	};
// });

// login_module.service('Session', function () {
// 	this.create = function (sessionId, userId, userRole) {
// 		this.id = sessionId;
// 		this.userId = userId;
// 		this.userRole = userRole;
// 	};
// 	this.destroy = function () {
// 		this.id = null;
// 		this.userId = null;
// 		this.userRole = null;
// 	};
// 	return this;
// });

