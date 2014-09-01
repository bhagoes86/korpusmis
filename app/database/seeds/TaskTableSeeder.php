<?php

class TaskTableSeeder extends Seeder 
{

	public function run()
	{
		DB::table('task')->delete();
		$date = new DateTime();

		$date->setDate(2014, 6, 30);
		$date->setTime(9,0,0);
		Task::create(array (
		'recipient' => 1,
		'from' => 2,
		'task' => 'Please don\'t forget to check latest report from Karen every week',
		'deadline' => $date,
		'description' => 'Please don\'t forget to check latest report from Karen every week',
		'done' => 0
		));
		Task::create(array (
		'recipient' => 1,
		'from' => 3,
		'task' => 'Get the mail from director',
		'deadline' => $date,
		'description' => 'Get the mail from director',
		'done' => 0
		));
		Task::create(array (
		'recipient' => 1,
		'from' => 4,
		'task' => 'Don\'t forget to workout at our new gym',
		'deadline' => $date,
		'description' => 'Don\'t forget to workout at our new gym',
		'done' => 0
		));
		Task::create(array (
		'recipient' => 1,
		'from' => 5,
		'task' => 'Submit your tabloid work soon',
		'deadline' => $date,
		'description' => 'Submit your tabloid work soon',
		'done' => 0
		));
		Task::create(array (
		'recipient' => 1,
		'from' => 6,
		'task' => 'Please don\'t forget to check latest report from Karen every week',
		'deadline' => $date,
		'description' => 'Please don\'t forget to check latest report from Karen every week',
		'done' => 0
		));
		
	}

}