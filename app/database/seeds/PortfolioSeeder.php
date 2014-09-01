<?php

class PortfolioSeeder extends Seeder 
{

	public function run()
	{
		DB::table('portfolio')->delete();

		$date = new DateTime();

		$date->setDate(2014, 6, 30);
		$date->setTime(9,0,0);

		Portfolio::create(array (
		'user_id' => 1,
		'title' => 'EPA Mulls Ethanol Change as Industry Profits Soar',
		'type' => 'News',
		'publish_on' => 'Tabloid',
		'date' => $date,
		'score' => 90
		));
		Portfolio::create(array (
		'user_id' => 1,
		'title' => 'Corn Planting Tops 70% Complete',
		'type' => 'News',
		'publish_on' => 'Tabloid',
		'date' => $date,
		'score' => 80
		));	
		Portfolio::create(array (
		'user_id' => 1,
		'title' => 'Kentucky Cow College Registration Open',
		'type' => 'News',
		'publish_on' => 'Tabloid',
		'date' => $date,
		'score' => 85
		));	
		Portfolio::create(array (
		'user_id' => 1,
		'title' => 'Power Hour: Overvalued Commodity Prices Leak Air',
		'type' => 'News',
		'publish_on' => 'Tabloid',
		'date' => $date,
		'score' => 70
		));	
		Portfolio::create(array (
		'user_id' => 1,
		'title' => 'House GOP Bill Would Roll Back School Lunch Rules',
		'type' => 'News',
		'publish_on' => 'Tabloid',
		'date' => $date,
		'score' => 90
		));		
	}

}