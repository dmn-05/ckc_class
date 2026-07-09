<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PersonalAccessTokensTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('personal_access_tokens')->delete();
        
        \DB::table('personal_access_tokens')->insert(array (
            0 => 
            array (
                'id' => 27,
                'tokenable_type' => 'App\\Models\\NguoiDung',
                'tokenable_id' => 104,
                'name' => 'auth_token',
                'token' => '601f5876c3be544c63ba03e90ad042129dcf438048eda00f5baf5c1900b7d639',
                'abilities' => '["*"]',
                'last_used_at' => '2026-07-09 08:45:29',
                'expires_at' => NULL,
                'created_at' => '2026-07-02 14:43:43',
                'updated_at' => '2026-07-09 08:45:29',
            ),
            1 => 
            array (
                'id' => 32,
                'tokenable_type' => 'App\\Models\\NguoiDung',
                'tokenable_id' => 22,
                'name' => 'auth_token',
                'token' => 'afb3cccbe24932bcb93d7c7a92d7aee537d608899bfab475453d7f5aab3e5c2f',
                'abilities' => '["*"]',
                'last_used_at' => NULL,
                'expires_at' => NULL,
                'created_at' => '2026-07-08 02:52:49',
                'updated_at' => '2026-07-08 02:52:49',
            ),
            2 => 
            array (
                'id' => 34,
                'tokenable_type' => 'App\\Models\\NguoiDung',
                'tokenable_id' => 1,
                'name' => 'auth_token',
                'token' => '2baa342763a9479b0f62c4cc48252f159eccc6a6dffea0380c7766c1ca27def0',
                'abilities' => '["*"]',
                'last_used_at' => '2026-07-08 07:39:25',
                'expires_at' => NULL,
                'created_at' => '2026-07-08 07:35:46',
                'updated_at' => '2026-07-08 07:39:25',
            ),
            3 => 
            array (
                'id' => 37,
                'tokenable_type' => 'App\\Models\\NguoiDung',
                'tokenable_id' => 22,
                'name' => 'auth_token',
                'token' => 'd88fe3d6e433ac643caf004f83b07c42fa589d03a42e905d6b25750404b67bc7',
                'abilities' => '["*"]',
                'last_used_at' => '2026-07-09 08:39:36',
                'expires_at' => NULL,
                'created_at' => '2026-07-09 08:33:18',
                'updated_at' => '2026-07-09 08:39:36',
            ),
        ));
        
        
    }
}