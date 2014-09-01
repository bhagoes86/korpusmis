var main_module = angular.module('main', ['statistics', 'profile', 'portfolios', 'tasks', 'events', 'absenceRecord', 'scoringRecord', 'profileService']);

main_module.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/app',
            templateUrl: 'modules/home/home.html',
            controller: 'mainController',
            title: 'Main'
        });
});
main_module.controller('mainController', function($scope, $location){
	$scope.message = 'Hello';
	$scope.custom = true;
	$scope.collapseMenu = false;
	$scope.isActive = function(route) {
		return route == $location.path();
	}
	$scope.collapseTrigger = function() {
		$scope.collapseMenu = !$scope.collapseMenu;
	}
});

main_module.directive('showOnRowHover',

function () {
    return {
        link: function (scope, element, attrs) {

            element.closest('tr').bind('mouseenter', function () {
                element.show();
            });
            element.closest('tr').bind('mouseleave', function () {
                element.hide();

            });

        }
    };
});