<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('UserTableSeeder');
		$this->call('PortfolioSeeder');
		$this->call('TaskTableSeeder');
		$this->call('PresenceTableSeeder');
		$this->call('EventSeeder');
		$this->call('AwardTableSeeder');
	}

}
