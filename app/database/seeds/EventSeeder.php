<?php

class EventSeeder extends Seeder 
{

	public function run()
	{
		// DB::table('event')->delete();

		Event::create(array (
		'event_title' => 'Please don\'t forget to check latest report from Karen every week',
		'date' => '2014-06-30',
		'time' => '09:00:00',
		'description' => 'Please don\'t forget to check latest report from Karen every week'
		));
		Event::create(array (
		'event_title' => 'Please don\'t forget to check latest report from Karen every week',
		'date' => '2014-06-30',
		'time' => '09:00:00',
		'description' => 'Please don\'t forget to check latest report from Karen every week'
		));		
	}

}