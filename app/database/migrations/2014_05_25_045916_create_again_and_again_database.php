<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAgainAndAgainDatabase extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name');
			$table->string('profession');
			$table->date('birthDate');
			$table->string('gender');
			$table->string('nrp')->unique();
			$table->string('faculty');
			$table->string('department');
			$table->string('contact');
			$table->string('email')->unique();
			$table->string('facebook');
			$table->string('twitter');
			$table->string('password');
			$table->string('level');
			$table->timestamps();
		});
		Schema::create('task', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('recipient');
			$table->string('from');
			$table->string('task');
			$table->string('description');
			$table->date('deadline');
			$table->integer('done');
			$table->timestamps();
		});
		Schema::create('event', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('event_title');
			$table->date('date');
			$table->time('time');
			$table->string('description');
			$table->timestamps();
		});
		Schema::create('portfolio', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('user_id');
			$table->string('title');
			$table->string('type');
			$table->string('publish_on');
			$table->date('date');
			$table->integer('score');
			$table->timestamps();
		});
		Schema::create('award', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('user_id');
			$table->string('title');
			$table->date('date');
			$table->timestamps();
		});
		Schema::create('presence', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('event_id');
			$table->string('user_id');
			$table->integer('attended');
			$table->timestamps();
		});


	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('user');
		Schema::drop('task');
		Schema::drop('event');
		Schema::drop('portfolio');
		Schema::drop('award');
		Schema::drop('presence');
	}

}
