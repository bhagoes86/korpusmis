/**********************************************************************************

	Project Name: Sistem Informasi
	Project Description: Manajemen Sistem Informasi (Evaluasi) Koran Kampus
	File Name: script.js
	Author: Rahmanda Wibowo
	Author URI: http://www.rahmandawibowo.com
	Version: 1.0.0
	
**********************************************************************************/
// create module for amberApp
var amberApp = angular.module('amberApp', 
	['main', 'login', 'ui.router']);

// configure route
amberApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');
});


