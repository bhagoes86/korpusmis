<?php

Class Task extends Eloquent {

	protected $table = 'task';
	protected $fillable = array('recipient','from','task','deadline','description','done');

	public function user() {
		return $this->belongsTo('User');
	}

}