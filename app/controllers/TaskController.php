<?php

class TaskController extends \BaseController {

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
		for($i=0; $i < count(Input::get('sendTo')); $i++) {
			$recipient = Input::get('sendTo')[$i];
			Task::create(array(
				'recipient' => $recipient,
				'from' => Input::get('from'),
				'task' => Input::get('title'),
				'deadline' => Input::get('date').' '.Input::get('time'),
				'description' => Input::get('desc'),
				'done' => 0
			));
		}

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
		$this->afterFilter(function(){

            header('Access-Control-Allow-Origin: *');

        });
		$user = User::find($id);
		$task = $user->task;
		$response = array();
		foreach($task as $item) {
			if($item['done'] == 1) continue;
			$array = array(
				'id' => $item['id'],
				'recipient' => $item['recipient'],
				'from' => User::find($item['from'])->name,
				'task' => $item['task'],
				'description' => $item['description'],
				'deadline' => $item['deadline'],
				'time' => $item['time'],
				'done' => $item['done']
				);
			array_push($response, $array);
		} 
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
		UserMis::destroy($id);

		return Response::json(array('success' => true));
	}

	public function recovery($id)
	{
		Mail::send('emails.auth.recovery', array('name'=>'Alex'), function($message) {
			$message->to('rahmandawibowo@gmail.com', 'Rahmanda Wibowo')->subject('Recovery your account');
		});
	}

	public function getDeadline($id)
	{
		$task = Task::where('recipient','=',$id)->where('deadline','>=', date('Y-m-d H:i:s'))->orderBy('deadline', 'asc');
		return Response::json($task->get()); 
	}

}