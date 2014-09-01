var main_module = angular.module('main', ['statistics', 'profile', 'portfolios', 'tasks', 'events', 'absenceRecord', 'scoringRecord', 'authService', 'ngProgress', 'authService', 'apiRequestService', 'addCrew', 'Mac']);
main_module.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/app',
            templateUrl: 'modules/home/home.html',
            controller: 'mainController',
            title: 'Main'
        });
});
main_module.controller('mainController', function($rootScope, $state, $scope, $location, AuthService, SessionService, ngProgress, ApiRequestService){
    $scope.userList = [];
    $scope.userSelected = '';
    $scope.message = 'Hello';
	$scope.custom = true;
	$scope.collapseMenu = false;
    // $scope.username = SessionService.get('username');
    var id = SessionService.get('userId');
    $rootScope.level = SessionService.get('userLevel');
    ApiRequestService.get('user')
        .success(function(data) {
            $scope.userList = data;
            // console.log($scope.userList);
        });
    $scope.setUser = function(selected) {
        $scope.userSelected = selected;
        $location.path('app/profile/'+selected.id);
        // console.log(selected);
    }
    $scope.search = function() {
        console.log($scope.userSelected);
    }
    ApiRequestService.show('user',id)
        .success(function(data) {
            $scope.user = data;
            console.log($scope.user);
            console.log($scope.user.level)
                // $scope.loading = false;
            });
    ApiRequestService.show('award',id)
        .success(function(data) {
            $rootScope.awards = data;
            console.log(data);
            });
	$scope.isActive = function(route) {
		return route == $location.path();
	}
	$scope.collapseTrigger = function() {
		$scope.collapseMenu = !$scope.collapseMenu;
	}
    $scope.logout = function () {
        ngProgress.color('#00B98D');
        ngProgress.start();
        AuthService.logout().success(function (response) {
            SessionService.unset('userId');
            SessionService.unset('username');
            // console.log(SessionService.get('userId'));
            ngProgress.complete();
            $location.path('/login');
            // $location.path('/login');
            // console.log(response);
        });
    }

    $rootScope.isRestricted = function(value) {
        if($rootScope.level == 'C51' || $rootScope.level == 'C52'){
            if(value == 'absenceRecord'){
                return false;
            }
            if(value == 'scoringRecord') {
                return true;
            }
            if(value == 'eventForm') {
                return false;
            }
            if(value == 'taskForm') {
                return true;
            }
        }
        if($rootScope.level == 'C31' || $rootScope.level == 'C32'){
            if(value == 'absenceRecord'){
                return true;
            }
            if(value == 'scoringRecord') {
                return false;
            }
            if(value == 'eventForm') {
                return true;
            }
            if(value == 'taskForm') {
                return true;
            }
        }
        if($rootScope.level == 'A') {
            return false;
        }
        if($rootScope.level == 'B3' || $rootScope.level == 'B5'){
            if(value == 'absenceRecord'){
                return true;
            }
            if(value == 'scoringRecord') {
                return true;
            }
            if(value == 'eventForm') {
                return true;
            }
            if(value == 'taskForm') {
                return false;
            }
        }

    }
});