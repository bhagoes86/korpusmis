<?php

Class Event extends Eloquent {

	protected $table = 'event';
	protected $fillable = array('event_title','date','time','description');

	// public function user() {
	// 	return $this->belongsToMany('User', 'presence', 'event_id', 'user_id');
	// }

}