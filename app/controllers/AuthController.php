<?php

class AuthController extends \BaseController {

	public function __construct()
    {
        $this->afterFilter(function(){

            header('Access-Control-Allow-Origin: *');

        });
    }

	public function login() {
		$this->afterFilter(function(){

            header('Access-Control-Allow-Origin: *');

        });
        // return Response::json(Input::json('email'));
		if(Auth::attempt(array('email' => Input::json('email'), 'password' => Input::json('password')))) {
			return Response::json(Auth::user());
		} else {
			return Response::json(array('flash' => 'Invalid username or password'), 500);
		}
	} 

	public function logout() {
		$this->afterFilter(function(){

            header('Access-Control-Allow-Origin: *');

        });
		Auth::logout();
		return Response::json(array('flash' => 'Logged out'));
	} 
}