<?php

class EventController extends \BaseController {

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
		return Response::json(Event2::where('time' ,'>=', date('Y-m-d H:i:s'))->orderBy('time')->get());
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		Event2::create(array(
			'event_title' => Input::get('title'),
			'time' => Input::get('date').' '.Input::get('time'),
			'description' => Input::get('description')
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
		return Response::json($user->event);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Event::destroy($id);

		return Response::json(array('success' => true));
	}
}