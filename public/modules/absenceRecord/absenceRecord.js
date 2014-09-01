var absenceRecord_module =  angular.module('absenceRecord', ['ngProgress', 'apiRequestService', 'ngTagsInput']);

absenceRecord_module.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home.absenceRecord', {
		url: '/absenceRecord',
		templateUrl: 'modules/absenceRecord/absenceRecord.html',
		controller: 'absenceRecordController',
		title: 'Absence',
		data: {
			ncyBreadcrumbLabel: 'absence record'
		}
	});
});

absenceRecord_module.controller('absenceRecordController', function($rootScope, $scope, ApiRequestService) {
	$rootScope.pageTitle = 'Presence Record - Koran Kampus';

});
