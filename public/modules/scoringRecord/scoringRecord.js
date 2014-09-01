var scoringRecord_module =  angular.module('scoringRecord', ['apiRequestService', 'Mac', 'toaster']);

scoringRecord_module.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home.scoringRecord', {
		url: '/scoringRecord',
		templateUrl: 'modules/scoringRecord/scoringRecord.html',
		controller: 'scoringRecordController',
		title: 'Scoring',
		data: {
			ncyBreadcrumbLabel: 'scoring'
		}
	});
});

scoringRecord_module.controller('scoringRecordController', function($rootScope, $scope, ApiRequestService, toaster) {
	$rootScope.pageTitle = 'Score Record - Koran Kampus';
	$scope.owner = [];
	$scope.typeOptions = [
	{ name: 'news', value: 'news'},
	{ name: 'photography', value: 'photography'},
	{ name: 'infographic', value: 'infographic'},
	{ name: 'cartoon', value: 'cartoon'}
	];
	$scope.publishOnOptions = [
	{ name: 'tabloid', value: 'tabloid'},
	{ name: 'website', value: 'website'},
	{ name: 'bulletin', value: 'bulletin'}
	];
	$scope.scoring = {
		id: '',
		createdBy: '',
		title: '',
		type: '',
		publishOn: '',
		date: '',
		score: ''
	};
	ApiRequestService.get('user').success(function(data){
		for(var i=0; i < data.length; i++) {
			var temp = {
				text : '',
				id : ''
			}
			temp.text = data[i].name;
			temp.id = data[i].id;
			$scope.owner.push(temp);
		}
		console.log($scope.owner);
	});

	$scope.setOwner = function (selected) {
		$scope.scoring.id = selected.id;
		// console.log(selected);
	}
	$scope.addNewScoreRecord = function () {
		console.log($scope.scoring);
		ApiRequestService.save('portfolio', $scope.scoring).success(function() {
			toaster.pop('success', "Success", "Your score has been successfully recorded");
		});
	}
});
