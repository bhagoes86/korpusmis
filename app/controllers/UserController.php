<?php

class UserController extends \BaseController {

	/**
	 * Send back all comments as JSON
	 *
	 * @return Response
	 */
	public function __construct()
    {
        $this->afterFilter(function(){

            header('Access-Control-Allow-Origin: *');

        });
    }
    
	public function index()
	{
		return Response::json(User::get());
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		UserMis::create(array(
			'author' => Input::get('author'),
			'text' => Input::get('text')
		));

		return Response::json(array('success' => true));
	}

	/**
	 * Return the specified resource using JSON
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{	
		$user = User::find($id);
		$jobsRemain = Task::where('recipient','=',$id)->where('done','=',0)->count();
		$jobsDone = Task::where('recipient','=',$id)->where('done','=',1)->count();
		$response = array(
			'id' => $user->id,
			'name' => $user->name,
			'profession' => $user->profession,
			'birthDate' => $user->birthDate,
			'gender' => $user->gender,
			'nrp' => $user->nrp,
			'faculty' => $user->faculty,
			'department' => $user->department,
			'contact' => $user->contact,
			'email' => $user->email,
			'facebook' => $user->facebook,
			'twitter' => $user->twitter,
			'profpicturl' => $user->profpicturl,
			'jobsRemain' => $jobsRemain,
			'jobsDone' => $jobsDone,
			'level' => $user->level
			);
		return Response::json($response);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		User::destroy($id);

		return Response::json(array('success' => true));
	}

	public function recovery($id)
	{
		Mail::send('emails.auth.recovery', array('name'=>'Alex'), function($message) {
			$message->to('rahmandawibowo@gmail.com', 'Rahmanda Wibowo')->subject('Recovery your account');
		});
	}

	// public function getAward($id)
	// {
	// 	return Response::json(Award::find($id));
	// }

}