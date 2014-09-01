<?php

Class UserMis extends Eloquent {

	protected $table = 'user';
	protected $fillable = array('name','profession', 'birthDate', 'gender', 'nrp', 'faculty', 'department', 'contact', 'email', 'facebook', 'twitter', 'password', 'level');


	public function portfolio() {
		return $this->hasMany('Portfolio','user_id');
	}

	public function award() {
		return $this->hasMany('Award','user_id');
	}

	public function presence() {
		return $this->belongsToMany('Event','presence', 'user_id', 'event_id');
	}

	public function task() {
		return $this->hasMany('Task','recipient');
	}

}