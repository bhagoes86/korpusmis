<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RecreateUserTable extends Migration {

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
			$table->string('profpicturl');
			$table->string('password');
			$table->string('level');
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
	}

}
