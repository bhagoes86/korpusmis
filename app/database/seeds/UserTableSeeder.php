<?php

class UserTableSeeder extends Seeder 
{

	public function run()
	{
		DB::table('user')->delete();

		UserMis::create(array (
		'name' => 'Song Ji Hyo',
		'profession' => 'Reporter',
		'birthDate' => '1981-08-15',
		'gender' => 'female',
		'nrp' => 'G94110032',
		'faculty' => 'FMIPA',
		'department' => 'Biology',
		'contact' => '085669724021',
		'email' => 'song@jihyo.com',
		'facebook' => 'Song Ji Hyo',
		'twitter' => '@songjihyo',
		'profpicturl' => 'song-ji-hyo.jpg',
		'password' => Hash::make('admin'),
		'level' => 'A'
		));

		UserMis::create(array (
		'name' => 'Lee Kwang Soo',
		'profession' => 'Reporter',
		'birthDate' => '1985-07-14',
		'gender' => 'male',
		'nrp' => 'G94110028',
		'faculty' => 'FMIPA',
		'department' => 'Computer Science',
		'contact' => '085669724021',
		'email' => 'lee@kwangsoo.com',
		'facebook' => 'Lee Kwang Soo',
		'twitter' => '@leekwangsoo',
		'profpicturl' => 'lee-kwang-soo.jpg',
		'password' => Hash::make('leekwangsoo'),
		'level' => 'C52'
		));

		UserMis::create(array (
		'name' => 'Ji Suk Jin',
		'profession' => 'Reporter',
		'birthDate' => '1966-02-10',
		'gender' => 'male',
		'nrp' => 'G94110048',
		'faculty' => 'FMIPA',
		'department' => 'Statistics',
		'contact' => '085669724021',
		'email' => 'ji@sukjin.com',
		'facebook' => 'Ji Suk Jin',
		'twitter' => '@jisukjin',
		'profpicturl' => 'jin-suk-jin.jpg',
		'password' => Hash::make('jisukjin'),
		'level' => 'C31'
		));

		UserMis::create(array (
		'name' => 'Kim Jong Kook',
		'profession' => 'Reporter',
		'birthDate' => '1976-04-25',
		'gender' => 'male',
		'nrp' => 'G94110038',
		'faculty' => 'FMIPA',
		'department' => 'Physics',
		'contact' => '085669724021',
		'email' => 'kim@jongkook.com',
		'facebook' => 'Kim Jong Kook',
		'twitter' => '@kimjongkook',
		'profpicturl' => 'ji-suk-jin.jpg',
		'password' => Hash::make('kimjongkook'),
		'level' => 'B5'
		));

		UserMis::create(array (
		'name' => 'Yoo Jae Seok',
		'profession' => 'Reporter',
		'birthDate' => '1972-08-14',
		'gender' => 'male',
		'nrp' => 'G94110041',
		'faculty' => 'FMIPA',
		'department' => 'Statistics',
		'contact' => '085669724021',
		'email' => 'yoo@jaeseok.com',
		'facebook' => 'Yoo Jae Seok',
		'twitter' => '@yoojaeseok',
		'profpicturl' => 'yoo-jae-seok.jpg',
		'password' => Hash::make('yoojaeseok'),
		'level' => 'B3'
		));

		UserMis::create(array (
		'name' => 'Ha Dong Hoon',
		'profession' => 'Cartoonist',
		'birthDate' => '1979-08-20',
		'gender' => 'male',
		'nrp' => 'G94110034',
		'faculty' => 'FMIPA',
		'department' => 'Computer Science',
		'contact' => '085669724021',
		'email' => 'ha@donghoon.com',
		'facebook' => 'Ha Dong Hoon',
		'twitter' => '@hadonghoon',
		'profpicturl' => 'ha-dong-hoon.jpg',
		'password' => Hash::make('hadonghoon'),
		'level' => 'C51'
		));

		UserMis::create(array (
		'name' => 'Kang Hee Gun',
		'profession' => 'Photographer',
		'birthDate' => '1978-02-24',
		'gender' => 'male',
		'nrp' => 'G94110036',
		'faculty' => 'FMIPA',
		'department' => 'Chemistry',
		'contact' => '085669724021',
		'email' => 'kang@heegun.com',
		'facebook' => 'Kang Hee Gun',
		'twitter' => '@kangheegun',
		'profpicturl' => 'kang-hee-gun.jpg',
		'password' => Hash::make('kangheegun'),
		'level' => 'C32'
		));
	}

}