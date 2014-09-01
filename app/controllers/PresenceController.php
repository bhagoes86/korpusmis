<?php

class PresenceController extends \BaseController {

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
		return Response::json(Event2::where('time' ,'>=', date('Y-m-d H:i:s'))->get());
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
		$table = (array)DB::table('presence')
		->join('event', 'presence.event_id', '=', 'event.id')
		->select(DB::raw('YEAR(time) year, DATE_FORMAT(time, "%b") AS month, COUNT(attended) AS count'))
		->groupBy('month')
		->groupBy('year')
		->orderBy('time')
		->where('user_id', $id)
		->get();
		$user = (array)DB::table('presence')
		->join('event', 'presence.event_id', '=', 'event.id')
		->select(DB::raw('YEAR(time) year, DATE_FORMAT(time, "%b") AS month, COUNT(attended) AS count'))
		->groupBy('month')
		->groupBy('year')
		->orderBy('time')
		->where('user_id', $id)
		->where('attended', 0)
		->get();
		$year = (array)DB::table('event')
		->select(DB::raw('YEAR(time) year'))
		->orderBy('time')
		->distinct()
		->get();

		foreach($year as $yearItem) {
			$temp[$yearItem->year] = array(
				'month' => array(),
				'count' => array());
		}

		for($i=0, $j=0; $i<count($table) && $j<count($user);) {
			array_push($temp[$table[$i]->year]['month'], $table[$i]->month);
			if($table[$i]->month == $user[$j]->month) {
				array_push($temp[$table[$i]->year]['count'], round(($user[$j]->count/$table[$i]->count)*100, 2));
				$i++; $j++;
			}
			else {
				array_push($temp[$table[$i]->year]['count'], 0);
				$i++;
			}
		}

		return Response::json($temp);
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