var absenceRecord_module =  angular.module('absenceRecord', []);

absenceRecord_module.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home.absenceRecord', {
			url: '/absenceRecord',
			templateUrl: 'modules/absenceRecord/absenceRecord.html',
			controller: 'absenceRecordController',
			title: 'Absence'
		});
});

absenceRecord_module.controller('absenceRecordController', function($scope) {
	$scope.title = 'absence';

});
