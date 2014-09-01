<?php

Class Presence extends Eloquent {

	protected $table = 'presence';
	protected $fillable = array('user_id','event_id','attended');

	public function event() {
		return $this->belongsTo('Event2');
	}
	public function user() {
		return $this->belongsTo('User');
	}

}