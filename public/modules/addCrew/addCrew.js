var addCrew_module =  angular.module('addCrew', ['ngProgress', 'apiRequestService']);

addCrew_module.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home.addCrew', {
		url: '/addCrew',
		templateUrl: 'modules/addCrew/addCrew.html',
		controller: 'addCrewController',
		title: 'Add Crew',
		data: {
    		ncyBreadcrumbLabel: 'add crew'
  		}
	});
});

addCrew_module.controller('addCrewController', function($rootScope, $scope, ApiRequestService) {
	$rootScope.pageTitle = 'Add Crew - Koran Kampus';
	$scope.title = 'absence';
	$scope.newCrew = {
		profession: '',
		level: '',
	};
	$scope.profession = [
	{id: 1, name: 'reporter'},
	{id: 2, name: 'photographer'},
	{id: 3, name: 'layouter'},
	{id: 4, name: 'cartoonist'}
	];
	$scope.level = [
	{code: 'A', desc: 'admin'}, 
	{code: 'B1', desc: 'sekretaris umum'}, 
	{code: 'B2', desc: 'bendahara umum'}, 
	{code: 'B3', desc: 'pimpinan redaksi'}, 
	{code: 'B4', desc: 'pimpinan perusahaan'}, 
	{code: 'B5', desc: 'direktur hrd'},
	{code: 'C31', desc: 'pimpinan tabloid'}, 
	{code: 'C32', desc: 'pimpro online'}, 
	{code: 'C33', desc: 'litbang'},
	{code: 'C41', desc: 'manager dana dalam redaksi'}, 
	{code: 'C42', desc: 'manager dana luar redaksi'},
	{code: 'C51', desc: 'pengembangan internal'}, 
	{code: 'C52', desc: 'evaluasi'}
	]
});
