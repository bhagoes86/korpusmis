<?php

class AwardTableSeeder extends Seeder 
{

	public function run()
	{
		DB::table('award')->delete();
		$date = new DateTime();

		$date->setDate(2014, 6, 30);
		$date->setTime(9,0,0);
		Award::create(array (
		'user_id' => 1,
		'title' => 'First place for reportage competition at Annual News Strict 2014',
		'date' => $date
		));
		Award::create(array (
		'user_id' => 1,
		'title' => 'Best reporter at 12th CNN Award 2014',
		'date' => $date
		));	
		Award::create(array (
		'user_id' => 1,
		'title' => 'Honorable mention at 10th Kompas\'s Journalistics Day 2014',
		'date' => $date
		));		
	}

}