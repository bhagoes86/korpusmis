<?php

Class Portfolio extends Eloquent {

	protected $table = 'portfolio';
	protected $fillable = array('user_id','title','type','publish_on','date','score');

	public function user() {
		return $this->belongsTo('User');
	}

}