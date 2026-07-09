<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TepTinBaiTapTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('tep_tin_bai_tap')->delete();
        
        \DB::table('tep_tin_bai_tap')->insert(array (
            0 => 
            array (
                'id' => 3,
                'bai_tap_id' => 154,
                'tep_tin_id' => 146,
                'created_at' => '2026-06-30 20:50:41',
                'updated_at' => '2026-06-30 20:50:41',
            ),
        ));
        
        
    }
}