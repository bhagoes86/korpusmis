<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RegenerateTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('task', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('recipient');
			$table->string('from');
			$table->string('task');
			$table->string('description');
			$table->dateTime('deadline');
			$table->integer('done');
			$table->timestamps();
		});
		Schema::create('event', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('event_title');
			$table->dateTime('time');
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
			$table->dateTime('date');
			$table->integer('score');
			$table->timestamps();
		});
		Schema::create('award', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('user_id');
			$table->string('title');
			$table->dateTime('date');
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
		//
	}

}
