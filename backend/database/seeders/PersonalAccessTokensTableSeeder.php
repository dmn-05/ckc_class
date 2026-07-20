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
            4 => 
            array (
                'id' => 38,
                'tokenable_type' => 'App\\Models\\NguoiDung',
                'tokenable_id' => 1,
                'name' => 'auth_token',
                'token' => '799ce96df0c3779e68f103e4c91ae123b25fc9d288f2aa8fc5fec0b4aa8332be',
                'abilities' => '["*"]',
                'last_used_at' => '2026-07-11 13:48:02',
                'expires_at' => NULL,
                'created_at' => '2026-07-11 13:47:44',
                'updated_at' => '2026-07-11 13:48:02',
            ),
            5 => 
            array (
                'id' => 40,
                'tokenable_type' => 'App\\Models\\NguoiDung',
                'tokenable_id' => 22,
                'name' => 'auth_token',
                'token' => '2780d75531fa4dc40596e7911d72886b6cd59700bf1f42db8463a1b2b06d64b9',
                'abilities' => '["*"]',
                'last_used_at' => '2026-07-11 15:55:39',
                'expires_at' => NULL,
                'created_at' => '2026-07-11 15:55:27',
                'updated_at' => '2026-07-11 15:55:39',
            ),
            6 => 
            array (
                'id' => 41,
                'tokenable_type' => 'App\\Models\\NguoiDung',
                'tokenable_id' => 22,
                'name' => 'auth_token',
                'token' => '48f52da7e3b76e7e81be3eb63932fa3e6c9e727a61c17d6f5be5510005d2ed18',
                'abilities' => '["*"]',
                'last_used_at' => '2026-07-13 03:24:35',
                'expires_at' => NULL,
                'created_at' => '2026-07-12 19:14:40',
                'updated_at' => '2026-07-13 03:24:35',
            ),
            7 => 
            array (
                'id' => 42,
                'tokenable_type' => 'App\\Models\\NguoiDung',
                'tokenable_id' => 104,
                'name' => 'auth_token',
                'token' => '0d6a3dd81b8ca9d15d18d6fc7e4ff51b7b9a375cd14f66d90001ac46f72a692f',
                'abilities' => '["*"]',
                'last_used_at' => '2026-07-13 03:22:37',
                'expires_at' => NULL,
                'created_at' => '2026-07-12 19:15:06',
                'updated_at' => '2026-07-13 03:22:37',
            ),
        ));
        
        
    }
}