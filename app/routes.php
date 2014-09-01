<?php
header('Access-Control-Allow-Origin: *');
// =============================================
// HOME PAGE ===================================
// =============================================
Route::get('/', function()
{
	return View::make('index');
});

// =============================================
// API ROUTES ==================================
// =============================================
Route::group(array('prefix' => 'api'), function() {

	// since we will be using this just for CRUD, we won't need create and edit
	// Angular will handle both of those forms
	// this ensures that a user can't access api/create or api/edit when there's nothing there
	Route::resource('user', 'UserController', 
		array('except' => array('create', 'edit', 'update')));
	Route::resource('award', 'AwardController', 
		array('except' => array('create', 'edit', 'update')));
	Route::resource('portfolio', 'PortfolioController', 
		array('except' => array('create', 'edit', 'update')));
	Route::resource('task', 'TaskController', 
		array('except' => array('create', 'edit', 'update')));
	Route::resource('event', 'EventController', 
		array('except' => array('create', 'edit', 'update')));
	Route::resource('presence', 'PresenceController', 
		array('except' => array('create', 'edit', 'update')));
	Route::get('/task/deadline/{id}', 'TaskController@getDeadline');
	Route::post('/login','AuthController@login');
	Route::get('/logout','AuthController@logout');
	Route::get('/portfolio/getProgress/{id}', 'PortfolioController@getProgress');
	Route::post('/uploadImage', 'UploadController@uploadImage');
});

// =============================================
// CATCH ALL ROUTE =============================
// =============================================
// all routes that are not home or api will be redirected to the frontend
// this allows angular to route them
App::missing(function($exception)
{
	return View::make('index');
});