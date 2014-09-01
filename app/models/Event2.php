<?php

Class Event2 extends Eloquent {

	protected $table = 'event';
	protected $fillable = array('event_title','time','description');

	public function presence () {
		return $this->hasMany('Presence', 'event_id');
	}

}