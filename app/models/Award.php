<?php

Class Award extends Eloquent {

	protected $table = 'award';
	protected $fillable = array('user_id','title','date');

	public function user() {
		return $this->belongsTo('User');
	}

}