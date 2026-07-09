<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class VaiTroTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('vai_tro')->delete();
        
        \DB::table('vai_tro')->insert(array (
            0 => 
            array (
                'id' => 1,
                'ten_vai_tro' => 'quan_tri',
            ),
            1 => 
            array (
                'id' => 2,
                'ten_vai_tro' => 'giang_vien',
            ),
            2 => 
            array (
                'id' => 3,
                'ten_vai_tro' => 'sinh_vien',
            ),
        ));
        
        
    }
}