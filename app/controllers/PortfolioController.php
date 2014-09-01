<?php

class PortfolioController extends \BaseController {

	/**
	 * Send back all comments as JSON
	 *
	 * @return Response
	 */
	public function __construct()
    {
        $this->afterFilter(function(){

            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Method: GET, POST');
            header('Access-Control-Allow-Headers: Origin, X-Requested-With, X-Requested-Methods, Content-Type, Accept');

        });
    }

	public function index()
	{
		return Response::json(UserMis::get());
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$date = new DateTime();

		$date->setDate(2014, 6, 30);
		$date->setTime(9,0,0);
		
		Portfolio::create(array (
		'user_id' => Input::get('id'),
		'title' => Input::get('title'),
		'type' => Input::get('type'),
		'publish_on' => Input::get('publishOn'),
		'date' => Input::get('date'),
		'score' => Input::get('score')
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
		$user = UserMis::find($id);
		return Response::json($user->portfolio);
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

	public function getProgress($id)
	{
		$table = (array)DB::table('portfolio')
		->select(DB::raw('YEAR(date) year, DATE_FORMAT(date, "%b") AS month, SUM(score) as sum, COUNT(user_id) as count'))
		->groupBy('month')
		->groupBy('year')
		->orderBy('date')
		->where('user_id', $id)
		->get();

		foreach($table as $item) {
			$temp[$item->year] = array(
				'month' => array(),
				'score' => array());
		}

		for($i=0; $i < count($table); $i++) {
			array_push($temp[$table[$i]->year]['month'], $table[$i]->month);
			array_push($temp[$table[$i]->year]['score'], $table[$i]->sum/$table[$i]->count);
		}


		return Response::json($temp);
	}

}