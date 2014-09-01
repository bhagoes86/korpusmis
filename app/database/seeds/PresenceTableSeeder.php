<?php

class PresenceTableSeeder extends Seeder 
{

	public function run()
	{
		// DB::table('event')->delete();
		for($i=5;$i<=44;$i++) {
			for($j=1;$j<=7;$j++){
				$attended = rand(0,1);
				Presence::create(array (
					'user_id' => $j,
					'event_id' => $i,
					'attended' => $attended
					));
			}
		}		
	}

}