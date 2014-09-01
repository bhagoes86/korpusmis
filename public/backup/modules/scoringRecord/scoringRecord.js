var scoringRecord_module =  angular.module('scoringRecord', []);

scoringRecord_module.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home.scoringRecord', {
			url: '/scoringRecord',
			templateUrl: 'modules/scoringRecord/scoringRecord.html',
			controller: 'scoringRecordController',
			title: 'Scoring'
		});
});

scoringRecord_module.controller('scoringRecordController', function($scope) {
	$scope.title = 'scoring';

});
