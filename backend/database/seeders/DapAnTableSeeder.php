<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DapAnTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('dap_an')->delete();
        
        \DB::table('dap_an')->insert(array (
            0 => 
            array (
                'id' => 1,
                'cau_hoi_id' => 1,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-03 04:44:00',
                'ngay_cap_nhat' => '2025-03-03 04:44:00',
            ),
            1 => 
            array (
                'id' => 2,
                'cau_hoi_id' => 1,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-03 04:44:00',
                'ngay_cap_nhat' => '2025-03-03 04:44:00',
            ),
            2 => 
            array (
                'id' => 3,
                'cau_hoi_id' => 2,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-17 22:12:00',
                'ngay_cap_nhat' => '2025-03-17 22:12:00',
            ),
            3 => 
            array (
                'id' => 4,
                'cau_hoi_id' => 2,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-17 22:12:00',
                'ngay_cap_nhat' => '2025-03-17 22:12:00',
            ),
            4 => 
            array (
                'id' => 5,
                'cau_hoi_id' => 2,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-03-17 22:12:00',
                'ngay_cap_nhat' => '2025-03-17 22:12:00',
            ),
            5 => 
            array (
                'id' => 6,
                'cau_hoi_id' => 2,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-03-17 22:12:00',
                'ngay_cap_nhat' => '2025-03-17 22:12:00',
            ),
            6 => 
            array (
                'id' => 7,
                'cau_hoi_id' => 3,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-18 13:16:00',
                'ngay_cap_nhat' => '2024-04-18 13:16:00',
            ),
            7 => 
            array (
                'id' => 8,
                'cau_hoi_id' => 3,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-18 13:16:00',
                'ngay_cap_nhat' => '2024-04-18 13:16:00',
            ),
            8 => 
            array (
                'id' => 9,
                'cau_hoi_id' => 4,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-03 21:52:00',
                'ngay_cap_nhat' => '2024-03-03 21:52:00',
            ),
            9 => 
            array (
                'id' => 10,
                'cau_hoi_id' => 4,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-03 21:52:00',
                'ngay_cap_nhat' => '2024-03-03 21:52:00',
            ),
            10 => 
            array (
                'id' => 11,
                'cau_hoi_id' => 5,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-03 19:14:00',
                'ngay_cap_nhat' => '2026-03-03 19:14:00',
            ),
            11 => 
            array (
                'id' => 12,
                'cau_hoi_id' => 5,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-03 19:14:00',
                'ngay_cap_nhat' => '2026-03-03 19:14:00',
            ),
            12 => 
            array (
                'id' => 13,
                'cau_hoi_id' => 5,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-03-03 19:14:00',
                'ngay_cap_nhat' => '2026-03-03 19:14:00',
            ),
            13 => 
            array (
                'id' => 14,
                'cau_hoi_id' => 5,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-03-03 19:14:00',
                'ngay_cap_nhat' => '2026-03-03 19:14:00',
            ),
            14 => 
            array (
                'id' => 15,
                'cau_hoi_id' => 6,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-02 07:08:00',
                'ngay_cap_nhat' => '2025-09-02 07:08:00',
            ),
            15 => 
            array (
                'id' => 16,
                'cau_hoi_id' => 6,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-02 07:08:00',
                'ngay_cap_nhat' => '2025-09-02 07:08:00',
            ),
            16 => 
            array (
                'id' => 17,
                'cau_hoi_id' => 6,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-09-02 07:08:00',
                'ngay_cap_nhat' => '2025-09-02 07:08:00',
            ),
            17 => 
            array (
                'id' => 18,
                'cau_hoi_id' => 6,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-09-02 07:08:00',
                'ngay_cap_nhat' => '2025-09-02 07:08:00',
            ),
            18 => 
            array (
                'id' => 19,
                'cau_hoi_id' => 7,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-29 21:47:00',
                'ngay_cap_nhat' => '2026-01-29 21:47:00',
            ),
            19 => 
            array (
                'id' => 20,
                'cau_hoi_id' => 7,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-29 21:47:00',
                'ngay_cap_nhat' => '2026-01-29 21:47:00',
            ),
            20 => 
            array (
                'id' => 21,
                'cau_hoi_id' => 7,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-29 21:47:00',
                'ngay_cap_nhat' => '2026-01-29 21:47:00',
            ),
            21 => 
            array (
                'id' => 22,
                'cau_hoi_id' => 7,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-29 21:47:00',
                'ngay_cap_nhat' => '2026-01-29 21:47:00',
            ),
            22 => 
            array (
                'id' => 23,
                'cau_hoi_id' => 8,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-18 23:33:00',
                'ngay_cap_nhat' => '2025-10-18 23:33:00',
            ),
            23 => 
            array (
                'id' => 24,
                'cau_hoi_id' => 8,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-18 23:33:00',
                'ngay_cap_nhat' => '2025-10-18 23:33:00',
            ),
            24 => 
            array (
                'id' => 25,
                'cau_hoi_id' => 8,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-18 23:33:00',
                'ngay_cap_nhat' => '2025-10-18 23:33:00',
            ),
            25 => 
            array (
                'id' => 26,
                'cau_hoi_id' => 8,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-18 23:33:00',
                'ngay_cap_nhat' => '2025-10-18 23:33:00',
            ),
            26 => 
            array (
                'id' => 27,
                'cau_hoi_id' => 9,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-06 08:04:00',
                'ngay_cap_nhat' => '2025-09-06 08:04:00',
            ),
            27 => 
            array (
                'id' => 28,
                'cau_hoi_id' => 9,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-06 08:04:00',
                'ngay_cap_nhat' => '2025-09-06 08:04:00',
            ),
            28 => 
            array (
                'id' => 29,
                'cau_hoi_id' => 9,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-09-06 08:04:00',
                'ngay_cap_nhat' => '2025-09-06 08:04:00',
            ),
            29 => 
            array (
                'id' => 30,
                'cau_hoi_id' => 9,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-09-06 08:04:00',
                'ngay_cap_nhat' => '2025-09-06 08:04:00',
            ),
            30 => 
            array (
                'id' => 31,
                'cau_hoi_id' => 10,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-30 13:31:00',
                'ngay_cap_nhat' => '2024-06-30 13:31:00',
            ),
            31 => 
            array (
                'id' => 32,
                'cau_hoi_id' => 10,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-30 13:31:00',
                'ngay_cap_nhat' => '2024-06-30 13:31:00',
            ),
            32 => 
            array (
                'id' => 33,
                'cau_hoi_id' => 10,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-30 13:31:00',
                'ngay_cap_nhat' => '2024-06-30 13:31:00',
            ),
            33 => 
            array (
                'id' => 34,
                'cau_hoi_id' => 10,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-30 13:31:00',
                'ngay_cap_nhat' => '2024-06-30 13:31:00',
            ),
            34 => 
            array (
                'id' => 35,
                'cau_hoi_id' => 11,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-07 14:48:00',
                'ngay_cap_nhat' => '2025-04-07 14:48:00',
            ),
            35 => 
            array (
                'id' => 36,
                'cau_hoi_id' => 11,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-07 14:48:00',
                'ngay_cap_nhat' => '2025-04-07 14:48:00',
            ),
            36 => 
            array (
                'id' => 37,
                'cau_hoi_id' => 11,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-07 14:48:00',
                'ngay_cap_nhat' => '2025-04-07 14:48:00',
            ),
            37 => 
            array (
                'id' => 38,
                'cau_hoi_id' => 11,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-07 14:48:00',
                'ngay_cap_nhat' => '2025-04-07 14:48:00',
            ),
            38 => 
            array (
                'id' => 39,
                'cau_hoi_id' => 12,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-06 01:19:00',
                'ngay_cap_nhat' => '2025-03-06 01:19:00',
            ),
            39 => 
            array (
                'id' => 40,
                'cau_hoi_id' => 12,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-06 01:19:00',
                'ngay_cap_nhat' => '2025-03-06 01:19:00',
            ),
            40 => 
            array (
                'id' => 41,
                'cau_hoi_id' => 13,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-02 20:02:00',
                'ngay_cap_nhat' => '2025-01-02 20:02:00',
            ),
            41 => 
            array (
                'id' => 42,
                'cau_hoi_id' => 13,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-02 20:02:00',
                'ngay_cap_nhat' => '2025-01-02 20:02:00',
            ),
            42 => 
            array (
                'id' => 43,
                'cau_hoi_id' => 13,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-02 20:02:00',
                'ngay_cap_nhat' => '2025-01-02 20:02:00',
            ),
            43 => 
            array (
                'id' => 44,
                'cau_hoi_id' => 13,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-02 20:02:00',
                'ngay_cap_nhat' => '2025-01-02 20:02:00',
            ),
            44 => 
            array (
                'id' => 45,
                'cau_hoi_id' => 14,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-17 18:26:00',
                'ngay_cap_nhat' => '2024-10-17 18:26:00',
            ),
            45 => 
            array (
                'id' => 46,
                'cau_hoi_id' => 14,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-17 18:26:00',
                'ngay_cap_nhat' => '2024-10-17 18:26:00',
            ),
            46 => 
            array (
                'id' => 47,
                'cau_hoi_id' => 14,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-17 18:26:00',
                'ngay_cap_nhat' => '2024-10-17 18:26:00',
            ),
            47 => 
            array (
                'id' => 48,
                'cau_hoi_id' => 14,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-17 18:26:00',
                'ngay_cap_nhat' => '2024-10-17 18:26:00',
            ),
            48 => 
            array (
                'id' => 49,
                'cau_hoi_id' => 15,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-11 04:54:00',
                'ngay_cap_nhat' => '2024-09-11 04:54:00',
            ),
            49 => 
            array (
                'id' => 50,
                'cau_hoi_id' => 15,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-11 04:54:00',
                'ngay_cap_nhat' => '2024-09-11 04:54:00',
            ),
            50 => 
            array (
                'id' => 51,
                'cau_hoi_id' => 15,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-11 04:54:00',
                'ngay_cap_nhat' => '2024-09-11 04:54:00',
            ),
            51 => 
            array (
                'id' => 52,
                'cau_hoi_id' => 15,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-11 04:54:00',
                'ngay_cap_nhat' => '2024-09-11 04:54:00',
            ),
            52 => 
            array (
                'id' => 53,
                'cau_hoi_id' => 16,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-28 04:16:00',
                'ngay_cap_nhat' => '2024-12-28 04:16:00',
            ),
            53 => 
            array (
                'id' => 54,
                'cau_hoi_id' => 16,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-28 04:16:00',
                'ngay_cap_nhat' => '2024-12-28 04:16:00',
            ),
            54 => 
            array (
                'id' => 55,
                'cau_hoi_id' => 16,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-28 04:16:00',
                'ngay_cap_nhat' => '2024-12-28 04:16:00',
            ),
            55 => 
            array (
                'id' => 56,
                'cau_hoi_id' => 16,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-28 04:16:00',
                'ngay_cap_nhat' => '2024-12-28 04:16:00',
            ),
            56 => 
            array (
                'id' => 57,
                'cau_hoi_id' => 17,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-20 22:20:00',
                'ngay_cap_nhat' => '2025-09-20 22:20:00',
            ),
            57 => 
            array (
                'id' => 58,
                'cau_hoi_id' => 17,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-20 22:20:00',
                'ngay_cap_nhat' => '2025-09-20 22:20:00',
            ),
            58 => 
            array (
                'id' => 59,
                'cau_hoi_id' => 17,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-09-20 22:20:00',
                'ngay_cap_nhat' => '2025-09-20 22:20:00',
            ),
            59 => 
            array (
                'id' => 60,
                'cau_hoi_id' => 17,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-09-20 22:20:00',
                'ngay_cap_nhat' => '2025-09-20 22:20:00',
            ),
            60 => 
            array (
                'id' => 61,
                'cau_hoi_id' => 18,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-28 13:09:00',
                'ngay_cap_nhat' => '2025-11-28 13:09:00',
            ),
            61 => 
            array (
                'id' => 62,
                'cau_hoi_id' => 18,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-28 13:09:00',
                'ngay_cap_nhat' => '2025-11-28 13:09:00',
            ),
            62 => 
            array (
                'id' => 63,
                'cau_hoi_id' => 18,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-28 13:09:00',
                'ngay_cap_nhat' => '2025-11-28 13:09:00',
            ),
            63 => 
            array (
                'id' => 64,
                'cau_hoi_id' => 18,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-28 13:09:00',
                'ngay_cap_nhat' => '2025-11-28 13:09:00',
            ),
            64 => 
            array (
                'id' => 65,
                'cau_hoi_id' => 19,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-06 18:43:00',
                'ngay_cap_nhat' => '2025-11-06 18:43:00',
            ),
            65 => 
            array (
                'id' => 66,
                'cau_hoi_id' => 19,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-06 18:43:00',
                'ngay_cap_nhat' => '2025-11-06 18:43:00',
            ),
            66 => 
            array (
                'id' => 67,
                'cau_hoi_id' => 19,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-06 18:43:00',
                'ngay_cap_nhat' => '2025-11-06 18:43:00',
            ),
            67 => 
            array (
                'id' => 68,
                'cau_hoi_id' => 19,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-06 18:43:00',
                'ngay_cap_nhat' => '2025-11-06 18:43:00',
            ),
            68 => 
            array (
                'id' => 69,
                'cau_hoi_id' => 20,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-16 23:18:00',
                'ngay_cap_nhat' => '2024-07-16 23:18:00',
            ),
            69 => 
            array (
                'id' => 70,
                'cau_hoi_id' => 20,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-16 23:18:00',
                'ngay_cap_nhat' => '2024-07-16 23:18:00',
            ),
            70 => 
            array (
                'id' => 71,
                'cau_hoi_id' => 20,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-16 23:18:00',
                'ngay_cap_nhat' => '2024-07-16 23:18:00',
            ),
            71 => 
            array (
                'id' => 72,
                'cau_hoi_id' => 20,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-16 23:18:00',
                'ngay_cap_nhat' => '2024-07-16 23:18:00',
            ),
            72 => 
            array (
                'id' => 73,
                'cau_hoi_id' => 21,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-07 08:12:00',
                'ngay_cap_nhat' => '2024-11-07 08:12:00',
            ),
            73 => 
            array (
                'id' => 74,
                'cau_hoi_id' => 21,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-07 08:12:00',
                'ngay_cap_nhat' => '2024-11-07 08:12:00',
            ),
            74 => 
            array (
                'id' => 75,
                'cau_hoi_id' => 21,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-07 08:12:00',
                'ngay_cap_nhat' => '2024-11-07 08:12:00',
            ),
            75 => 
            array (
                'id' => 76,
                'cau_hoi_id' => 21,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-07 08:12:00',
                'ngay_cap_nhat' => '2024-11-07 08:12:00',
            ),
            76 => 
            array (
                'id' => 77,
                'cau_hoi_id' => 22,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-24 15:25:00',
                'ngay_cap_nhat' => '2025-08-24 15:25:00',
            ),
            77 => 
            array (
                'id' => 78,
                'cau_hoi_id' => 22,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-24 15:25:00',
                'ngay_cap_nhat' => '2025-08-24 15:25:00',
            ),
            78 => 
            array (
                'id' => 79,
                'cau_hoi_id' => 22,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-08-24 15:25:00',
                'ngay_cap_nhat' => '2025-08-24 15:25:00',
            ),
            79 => 
            array (
                'id' => 80,
                'cau_hoi_id' => 22,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-08-24 15:25:00',
                'ngay_cap_nhat' => '2025-08-24 15:25:00',
            ),
            80 => 
            array (
                'id' => 81,
                'cau_hoi_id' => 23,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-29 21:17:00',
                'ngay_cap_nhat' => '2025-09-29 21:17:00',
            ),
            81 => 
            array (
                'id' => 82,
                'cau_hoi_id' => 23,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-29 21:17:00',
                'ngay_cap_nhat' => '2025-09-29 21:17:00',
            ),
            82 => 
            array (
                'id' => 83,
                'cau_hoi_id' => 24,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-25 14:25:00',
                'ngay_cap_nhat' => '2026-05-25 14:25:00',
            ),
            83 => 
            array (
                'id' => 84,
                'cau_hoi_id' => 24,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-25 14:25:00',
                'ngay_cap_nhat' => '2026-05-25 14:25:00',
            ),
            84 => 
            array (
                'id' => 85,
                'cau_hoi_id' => 25,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-30 20:21:00',
                'ngay_cap_nhat' => '2026-04-30 20:21:00',
            ),
            85 => 
            array (
                'id' => 86,
                'cau_hoi_id' => 25,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-30 20:21:00',
                'ngay_cap_nhat' => '2026-04-30 20:21:00',
            ),
            86 => 
            array (
                'id' => 87,
                'cau_hoi_id' => 25,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-30 20:21:00',
                'ngay_cap_nhat' => '2026-04-30 20:21:00',
            ),
            87 => 
            array (
                'id' => 88,
                'cau_hoi_id' => 25,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-30 20:21:00',
                'ngay_cap_nhat' => '2026-04-30 20:21:00',
            ),
            88 => 
            array (
                'id' => 89,
                'cau_hoi_id' => 26,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-07 12:59:00',
                'ngay_cap_nhat' => '2025-04-07 12:59:00',
            ),
            89 => 
            array (
                'id' => 90,
                'cau_hoi_id' => 26,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-07 12:59:00',
                'ngay_cap_nhat' => '2025-04-07 12:59:00',
            ),
            90 => 
            array (
                'id' => 91,
                'cau_hoi_id' => 27,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-16 06:57:00',
                'ngay_cap_nhat' => '2025-05-16 06:57:00',
            ),
            91 => 
            array (
                'id' => 92,
                'cau_hoi_id' => 27,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-16 06:57:00',
                'ngay_cap_nhat' => '2025-05-16 06:57:00',
            ),
            92 => 
            array (
                'id' => 93,
                'cau_hoi_id' => 28,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-29 10:18:00',
                'ngay_cap_nhat' => '2024-08-29 10:18:00',
            ),
            93 => 
            array (
                'id' => 94,
                'cau_hoi_id' => 28,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-29 10:18:00',
                'ngay_cap_nhat' => '2024-08-29 10:18:00',
            ),
            94 => 
            array (
                'id' => 95,
                'cau_hoi_id' => 28,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-08-29 10:18:00',
                'ngay_cap_nhat' => '2024-08-29 10:18:00',
            ),
            95 => 
            array (
                'id' => 96,
                'cau_hoi_id' => 28,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-08-29 10:18:00',
                'ngay_cap_nhat' => '2024-08-29 10:18:00',
            ),
            96 => 
            array (
                'id' => 97,
                'cau_hoi_id' => 29,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-08 16:05:00',
                'ngay_cap_nhat' => '2025-01-08 16:05:00',
            ),
            97 => 
            array (
                'id' => 98,
                'cau_hoi_id' => 29,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-08 16:05:00',
                'ngay_cap_nhat' => '2025-01-08 16:05:00',
            ),
            98 => 
            array (
                'id' => 99,
                'cau_hoi_id' => 29,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-08 16:05:00',
                'ngay_cap_nhat' => '2025-01-08 16:05:00',
            ),
            99 => 
            array (
                'id' => 100,
                'cau_hoi_id' => 29,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-08 16:05:00',
                'ngay_cap_nhat' => '2025-01-08 16:05:00',
            ),
            100 => 
            array (
                'id' => 101,
                'cau_hoi_id' => 30,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-04 14:11:00',
                'ngay_cap_nhat' => '2025-01-04 14:11:00',
            ),
            101 => 
            array (
                'id' => 102,
                'cau_hoi_id' => 30,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-04 14:11:00',
                'ngay_cap_nhat' => '2025-01-04 14:11:00',
            ),
            102 => 
            array (
                'id' => 103,
                'cau_hoi_id' => 31,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-14 14:55:00',
                'ngay_cap_nhat' => '2024-03-14 14:55:00',
            ),
            103 => 
            array (
                'id' => 104,
                'cau_hoi_id' => 31,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-14 14:55:00',
                'ngay_cap_nhat' => '2024-03-14 14:55:00',
            ),
            104 => 
            array (
                'id' => 105,
                'cau_hoi_id' => 31,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-14 14:55:00',
                'ngay_cap_nhat' => '2024-03-14 14:55:00',
            ),
            105 => 
            array (
                'id' => 106,
                'cau_hoi_id' => 31,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-14 14:55:00',
                'ngay_cap_nhat' => '2024-03-14 14:55:00',
            ),
            106 => 
            array (
                'id' => 107,
                'cau_hoi_id' => 32,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-02 12:07:00',
                'ngay_cap_nhat' => '2024-09-02 12:07:00',
            ),
            107 => 
            array (
                'id' => 108,
                'cau_hoi_id' => 32,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-02 12:07:00',
                'ngay_cap_nhat' => '2024-09-02 12:07:00',
            ),
            108 => 
            array (
                'id' => 109,
                'cau_hoi_id' => 32,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-02 12:07:00',
                'ngay_cap_nhat' => '2024-09-02 12:07:00',
            ),
            109 => 
            array (
                'id' => 110,
                'cau_hoi_id' => 32,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-02 12:07:00',
                'ngay_cap_nhat' => '2024-09-02 12:07:00',
            ),
            110 => 
            array (
                'id' => 111,
                'cau_hoi_id' => 33,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-21 05:26:00',
                'ngay_cap_nhat' => '2026-05-21 05:26:00',
            ),
            111 => 
            array (
                'id' => 112,
                'cau_hoi_id' => 33,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-21 05:26:00',
                'ngay_cap_nhat' => '2026-05-21 05:26:00',
            ),
            112 => 
            array (
                'id' => 113,
                'cau_hoi_id' => 33,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-21 05:26:00',
                'ngay_cap_nhat' => '2026-05-21 05:26:00',
            ),
            113 => 
            array (
                'id' => 114,
                'cau_hoi_id' => 33,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-21 05:26:00',
                'ngay_cap_nhat' => '2026-05-21 05:26:00',
            ),
            114 => 
            array (
                'id' => 115,
                'cau_hoi_id' => 34,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-06-08 01:28:00',
                'ngay_cap_nhat' => '2026-06-08 01:28:00',
            ),
            115 => 
            array (
                'id' => 116,
                'cau_hoi_id' => 34,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-06-08 01:28:00',
                'ngay_cap_nhat' => '2026-06-08 01:28:00',
            ),
            116 => 
            array (
                'id' => 117,
                'cau_hoi_id' => 34,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-06-08 01:28:00',
                'ngay_cap_nhat' => '2026-06-08 01:28:00',
            ),
            117 => 
            array (
                'id' => 118,
                'cau_hoi_id' => 34,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-06-08 01:28:00',
                'ngay_cap_nhat' => '2026-06-08 01:28:00',
            ),
            118 => 
            array (
                'id' => 119,
                'cau_hoi_id' => 35,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-27 00:01:00',
                'ngay_cap_nhat' => '2026-01-27 00:01:00',
            ),
            119 => 
            array (
                'id' => 120,
                'cau_hoi_id' => 35,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-27 00:01:00',
                'ngay_cap_nhat' => '2026-01-27 00:01:00',
            ),
            120 => 
            array (
                'id' => 121,
                'cau_hoi_id' => 35,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-27 00:01:00',
                'ngay_cap_nhat' => '2026-01-27 00:01:00',
            ),
            121 => 
            array (
                'id' => 122,
                'cau_hoi_id' => 35,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-27 00:01:00',
                'ngay_cap_nhat' => '2026-01-27 00:01:00',
            ),
            122 => 
            array (
                'id' => 123,
                'cau_hoi_id' => 36,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-02 02:23:00',
                'ngay_cap_nhat' => '2024-07-02 02:23:00',
            ),
            123 => 
            array (
                'id' => 124,
                'cau_hoi_id' => 36,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-02 02:23:00',
                'ngay_cap_nhat' => '2024-07-02 02:23:00',
            ),
            124 => 
            array (
                'id' => 125,
                'cau_hoi_id' => 36,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-02 02:23:00',
                'ngay_cap_nhat' => '2024-07-02 02:23:00',
            ),
            125 => 
            array (
                'id' => 126,
                'cau_hoi_id' => 36,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-02 02:23:00',
                'ngay_cap_nhat' => '2024-07-02 02:23:00',
            ),
            126 => 
            array (
                'id' => 127,
                'cau_hoi_id' => 37,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-07 21:17:00',
                'ngay_cap_nhat' => '2025-03-07 21:17:00',
            ),
            127 => 
            array (
                'id' => 128,
                'cau_hoi_id' => 37,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-07 21:17:00',
                'ngay_cap_nhat' => '2025-03-07 21:17:00',
            ),
            128 => 
            array (
                'id' => 129,
                'cau_hoi_id' => 37,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-03-07 21:17:00',
                'ngay_cap_nhat' => '2025-03-07 21:17:00',
            ),
            129 => 
            array (
                'id' => 130,
                'cau_hoi_id' => 37,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-03-07 21:17:00',
                'ngay_cap_nhat' => '2025-03-07 21:17:00',
            ),
            130 => 
            array (
                'id' => 131,
                'cau_hoi_id' => 38,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-26 20:56:00',
                'ngay_cap_nhat' => '2026-01-26 20:56:00',
            ),
            131 => 
            array (
                'id' => 132,
                'cau_hoi_id' => 38,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-26 20:56:00',
                'ngay_cap_nhat' => '2026-01-26 20:56:00',
            ),
            132 => 
            array (
                'id' => 133,
                'cau_hoi_id' => 38,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-26 20:56:00',
                'ngay_cap_nhat' => '2026-01-26 20:56:00',
            ),
            133 => 
            array (
                'id' => 134,
                'cau_hoi_id' => 38,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-26 20:56:00',
                'ngay_cap_nhat' => '2026-01-26 20:56:00',
            ),
            134 => 
            array (
                'id' => 135,
                'cau_hoi_id' => 39,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-22 00:44:00',
                'ngay_cap_nhat' => '2026-01-22 00:44:00',
            ),
            135 => 
            array (
                'id' => 136,
                'cau_hoi_id' => 39,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-22 00:44:00',
                'ngay_cap_nhat' => '2026-01-22 00:44:00',
            ),
            136 => 
            array (
                'id' => 137,
                'cau_hoi_id' => 39,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-22 00:44:00',
                'ngay_cap_nhat' => '2026-01-22 00:44:00',
            ),
            137 => 
            array (
                'id' => 138,
                'cau_hoi_id' => 39,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-22 00:44:00',
                'ngay_cap_nhat' => '2026-01-22 00:44:00',
            ),
            138 => 
            array (
                'id' => 139,
                'cau_hoi_id' => 40,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-17 14:08:00',
                'ngay_cap_nhat' => '2025-06-17 14:08:00',
            ),
            139 => 
            array (
                'id' => 140,
                'cau_hoi_id' => 40,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-17 14:08:00',
                'ngay_cap_nhat' => '2025-06-17 14:08:00',
            ),
            140 => 
            array (
                'id' => 141,
                'cau_hoi_id' => 40,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-17 14:08:00',
                'ngay_cap_nhat' => '2025-06-17 14:08:00',
            ),
            141 => 
            array (
                'id' => 142,
                'cau_hoi_id' => 40,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-17 14:08:00',
                'ngay_cap_nhat' => '2025-06-17 14:08:00',
            ),
            142 => 
            array (
                'id' => 143,
                'cau_hoi_id' => 41,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-23 00:07:00',
                'ngay_cap_nhat' => '2025-06-23 00:07:00',
            ),
            143 => 
            array (
                'id' => 144,
                'cau_hoi_id' => 41,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-23 00:07:00',
                'ngay_cap_nhat' => '2025-06-23 00:07:00',
            ),
            144 => 
            array (
                'id' => 145,
                'cau_hoi_id' => 41,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-23 00:07:00',
                'ngay_cap_nhat' => '2025-06-23 00:07:00',
            ),
            145 => 
            array (
                'id' => 146,
                'cau_hoi_id' => 41,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-23 00:07:00',
                'ngay_cap_nhat' => '2025-06-23 00:07:00',
            ),
            146 => 
            array (
                'id' => 147,
                'cau_hoi_id' => 42,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-24 17:04:00',
                'ngay_cap_nhat' => '2025-05-24 17:04:00',
            ),
            147 => 
            array (
                'id' => 148,
                'cau_hoi_id' => 42,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-24 17:04:00',
                'ngay_cap_nhat' => '2025-05-24 17:04:00',
            ),
            148 => 
            array (
                'id' => 149,
                'cau_hoi_id' => 42,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-24 17:04:00',
                'ngay_cap_nhat' => '2025-05-24 17:04:00',
            ),
            149 => 
            array (
                'id' => 150,
                'cau_hoi_id' => 42,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-24 17:04:00',
                'ngay_cap_nhat' => '2025-05-24 17:04:00',
            ),
            150 => 
            array (
                'id' => 151,
                'cau_hoi_id' => 43,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-28 05:46:00',
                'ngay_cap_nhat' => '2026-01-28 05:46:00',
            ),
            151 => 
            array (
                'id' => 152,
                'cau_hoi_id' => 43,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-28 05:46:00',
                'ngay_cap_nhat' => '2026-01-28 05:46:00',
            ),
            152 => 
            array (
                'id' => 153,
                'cau_hoi_id' => 43,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-28 05:46:00',
                'ngay_cap_nhat' => '2026-01-28 05:46:00',
            ),
            153 => 
            array (
                'id' => 154,
                'cau_hoi_id' => 43,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-28 05:46:00',
                'ngay_cap_nhat' => '2026-01-28 05:46:00',
            ),
            154 => 
            array (
                'id' => 155,
                'cau_hoi_id' => 44,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-08 06:07:00',
                'ngay_cap_nhat' => '2026-01-08 06:07:00',
            ),
            155 => 
            array (
                'id' => 156,
                'cau_hoi_id' => 44,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-08 06:07:00',
                'ngay_cap_nhat' => '2026-01-08 06:07:00',
            ),
            156 => 
            array (
                'id' => 157,
                'cau_hoi_id' => 44,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-08 06:07:00',
                'ngay_cap_nhat' => '2026-01-08 06:07:00',
            ),
            157 => 
            array (
                'id' => 158,
                'cau_hoi_id' => 44,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-08 06:07:00',
                'ngay_cap_nhat' => '2026-01-08 06:07:00',
            ),
            158 => 
            array (
                'id' => 159,
                'cau_hoi_id' => 45,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-21 12:33:00',
                'ngay_cap_nhat' => '2026-04-21 12:33:00',
            ),
            159 => 
            array (
                'id' => 160,
                'cau_hoi_id' => 45,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-21 12:33:00',
                'ngay_cap_nhat' => '2026-04-21 12:33:00',
            ),
            160 => 
            array (
                'id' => 161,
                'cau_hoi_id' => 45,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-21 12:33:00',
                'ngay_cap_nhat' => '2026-04-21 12:33:00',
            ),
            161 => 
            array (
                'id' => 162,
                'cau_hoi_id' => 45,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-21 12:33:00',
                'ngay_cap_nhat' => '2026-04-21 12:33:00',
            ),
            162 => 
            array (
                'id' => 163,
                'cau_hoi_id' => 46,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-03 06:24:00',
                'ngay_cap_nhat' => '2024-07-03 06:24:00',
            ),
            163 => 
            array (
                'id' => 164,
                'cau_hoi_id' => 46,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-03 06:24:00',
                'ngay_cap_nhat' => '2024-07-03 06:24:00',
            ),
            164 => 
            array (
                'id' => 165,
                'cau_hoi_id' => 46,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-03 06:24:00',
                'ngay_cap_nhat' => '2024-07-03 06:24:00',
            ),
            165 => 
            array (
                'id' => 166,
                'cau_hoi_id' => 46,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-03 06:24:00',
                'ngay_cap_nhat' => '2024-07-03 06:24:00',
            ),
            166 => 
            array (
                'id' => 167,
                'cau_hoi_id' => 47,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-09 00:38:00',
                'ngay_cap_nhat' => '2026-03-09 00:38:00',
            ),
            167 => 
            array (
                'id' => 168,
                'cau_hoi_id' => 47,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-09 00:38:00',
                'ngay_cap_nhat' => '2026-03-09 00:38:00',
            ),
            168 => 
            array (
                'id' => 169,
                'cau_hoi_id' => 48,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-14 20:54:00',
                'ngay_cap_nhat' => '2026-03-14 20:54:00',
            ),
            169 => 
            array (
                'id' => 170,
                'cau_hoi_id' => 48,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-14 20:54:00',
                'ngay_cap_nhat' => '2026-03-14 20:54:00',
            ),
            170 => 
            array (
                'id' => 171,
                'cau_hoi_id' => 48,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-03-14 20:54:00',
                'ngay_cap_nhat' => '2026-03-14 20:54:00',
            ),
            171 => 
            array (
                'id' => 172,
                'cau_hoi_id' => 48,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-03-14 20:54:00',
                'ngay_cap_nhat' => '2026-03-14 20:54:00',
            ),
            172 => 
            array (
                'id' => 173,
                'cau_hoi_id' => 49,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-24 21:43:00',
                'ngay_cap_nhat' => '2025-02-24 21:43:00',
            ),
            173 => 
            array (
                'id' => 174,
                'cau_hoi_id' => 49,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-24 21:43:00',
                'ngay_cap_nhat' => '2025-02-24 21:43:00',
            ),
            174 => 
            array (
                'id' => 175,
                'cau_hoi_id' => 49,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-24 21:43:00',
                'ngay_cap_nhat' => '2025-02-24 21:43:00',
            ),
            175 => 
            array (
                'id' => 176,
                'cau_hoi_id' => 49,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-24 21:43:00',
                'ngay_cap_nhat' => '2025-02-24 21:43:00',
            ),
            176 => 
            array (
                'id' => 177,
                'cau_hoi_id' => 50,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-15 19:12:00',
                'ngay_cap_nhat' => '2026-02-15 19:12:00',
            ),
            177 => 
            array (
                'id' => 178,
                'cau_hoi_id' => 50,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-15 19:12:00',
                'ngay_cap_nhat' => '2026-02-15 19:12:00',
            ),
            178 => 
            array (
                'id' => 179,
                'cau_hoi_id' => 51,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-20 11:54:00',
                'ngay_cap_nhat' => '2024-12-20 11:54:00',
            ),
            179 => 
            array (
                'id' => 180,
                'cau_hoi_id' => 51,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-20 11:54:00',
                'ngay_cap_nhat' => '2024-12-20 11:54:00',
            ),
            180 => 
            array (
                'id' => 181,
                'cau_hoi_id' => 51,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-20 11:54:00',
                'ngay_cap_nhat' => '2024-12-20 11:54:00',
            ),
            181 => 
            array (
                'id' => 182,
                'cau_hoi_id' => 51,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-20 11:54:00',
                'ngay_cap_nhat' => '2024-12-20 11:54:00',
            ),
            182 => 
            array (
                'id' => 183,
                'cau_hoi_id' => 52,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-08 13:05:00',
                'ngay_cap_nhat' => '2025-05-08 13:05:00',
            ),
            183 => 
            array (
                'id' => 184,
                'cau_hoi_id' => 52,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-08 13:05:00',
                'ngay_cap_nhat' => '2025-05-08 13:05:00',
            ),
            184 => 
            array (
                'id' => 185,
                'cau_hoi_id' => 52,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-08 13:05:00',
                'ngay_cap_nhat' => '2025-05-08 13:05:00',
            ),
            185 => 
            array (
                'id' => 186,
                'cau_hoi_id' => 52,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-08 13:05:00',
                'ngay_cap_nhat' => '2025-05-08 13:05:00',
            ),
            186 => 
            array (
                'id' => 187,
                'cau_hoi_id' => 53,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-20 17:29:00',
                'ngay_cap_nhat' => '2024-04-20 17:29:00',
            ),
            187 => 
            array (
                'id' => 188,
                'cau_hoi_id' => 53,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-20 17:29:00',
                'ngay_cap_nhat' => '2024-04-20 17:29:00',
            ),
            188 => 
            array (
                'id' => 189,
                'cau_hoi_id' => 54,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-08 12:38:00',
                'ngay_cap_nhat' => '2024-09-08 12:38:00',
            ),
            189 => 
            array (
                'id' => 190,
                'cau_hoi_id' => 54,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-08 12:38:00',
                'ngay_cap_nhat' => '2024-09-08 12:38:00',
            ),
            190 => 
            array (
                'id' => 191,
                'cau_hoi_id' => 54,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-08 12:38:00',
                'ngay_cap_nhat' => '2024-09-08 12:38:00',
            ),
            191 => 
            array (
                'id' => 192,
                'cau_hoi_id' => 54,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-08 12:38:00',
                'ngay_cap_nhat' => '2024-09-08 12:38:00',
            ),
            192 => 
            array (
                'id' => 193,
                'cau_hoi_id' => 55,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-10 00:31:00',
                'ngay_cap_nhat' => '2024-06-10 00:31:00',
            ),
            193 => 
            array (
                'id' => 194,
                'cau_hoi_id' => 55,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-10 00:31:00',
                'ngay_cap_nhat' => '2024-06-10 00:31:00',
            ),
            194 => 
            array (
                'id' => 195,
                'cau_hoi_id' => 56,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-10 03:22:00',
                'ngay_cap_nhat' => '2025-04-10 03:22:00',
            ),
            195 => 
            array (
                'id' => 196,
                'cau_hoi_id' => 56,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-10 03:22:00',
                'ngay_cap_nhat' => '2025-04-10 03:22:00',
            ),
            196 => 
            array (
                'id' => 197,
                'cau_hoi_id' => 56,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-10 03:22:00',
                'ngay_cap_nhat' => '2025-04-10 03:22:00',
            ),
            197 => 
            array (
                'id' => 198,
                'cau_hoi_id' => 56,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-10 03:22:00',
                'ngay_cap_nhat' => '2025-04-10 03:22:00',
            ),
            198 => 
            array (
                'id' => 199,
                'cau_hoi_id' => 57,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-12 20:27:00',
                'ngay_cap_nhat' => '2026-01-12 20:27:00',
            ),
            199 => 
            array (
                'id' => 200,
                'cau_hoi_id' => 57,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-12 20:27:00',
                'ngay_cap_nhat' => '2026-01-12 20:27:00',
            ),
            200 => 
            array (
                'id' => 201,
                'cau_hoi_id' => 57,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-12 20:27:00',
                'ngay_cap_nhat' => '2026-01-12 20:27:00',
            ),
            201 => 
            array (
                'id' => 202,
                'cau_hoi_id' => 57,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-12 20:27:00',
                'ngay_cap_nhat' => '2026-01-12 20:27:00',
            ),
            202 => 
            array (
                'id' => 203,
                'cau_hoi_id' => 58,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-27 14:48:00',
                'ngay_cap_nhat' => '2025-01-27 14:48:00',
            ),
            203 => 
            array (
                'id' => 204,
                'cau_hoi_id' => 58,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-27 14:48:00',
                'ngay_cap_nhat' => '2025-01-27 14:48:00',
            ),
            204 => 
            array (
                'id' => 205,
                'cau_hoi_id' => 59,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-27 06:13:00',
                'ngay_cap_nhat' => '2024-07-27 06:13:00',
            ),
            205 => 
            array (
                'id' => 206,
                'cau_hoi_id' => 59,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-27 06:13:00',
                'ngay_cap_nhat' => '2024-07-27 06:13:00',
            ),
            206 => 
            array (
                'id' => 207,
                'cau_hoi_id' => 59,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-27 06:13:00',
                'ngay_cap_nhat' => '2024-07-27 06:13:00',
            ),
            207 => 
            array (
                'id' => 208,
                'cau_hoi_id' => 59,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-27 06:13:00',
                'ngay_cap_nhat' => '2024-07-27 06:13:00',
            ),
            208 => 
            array (
                'id' => 209,
                'cau_hoi_id' => 60,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-25 08:09:00',
                'ngay_cap_nhat' => '2024-12-25 08:09:00',
            ),
            209 => 
            array (
                'id' => 210,
                'cau_hoi_id' => 60,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-25 08:09:00',
                'ngay_cap_nhat' => '2024-12-25 08:09:00',
            ),
            210 => 
            array (
                'id' => 211,
                'cau_hoi_id' => 60,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-25 08:09:00',
                'ngay_cap_nhat' => '2024-12-25 08:09:00',
            ),
            211 => 
            array (
                'id' => 212,
                'cau_hoi_id' => 60,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-25 08:09:00',
                'ngay_cap_nhat' => '2024-12-25 08:09:00',
            ),
            212 => 
            array (
                'id' => 213,
                'cau_hoi_id' => 61,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-26 12:03:00',
                'ngay_cap_nhat' => '2025-02-26 12:03:00',
            ),
            213 => 
            array (
                'id' => 214,
                'cau_hoi_id' => 61,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-26 12:03:00',
                'ngay_cap_nhat' => '2025-02-26 12:03:00',
            ),
            214 => 
            array (
                'id' => 215,
                'cau_hoi_id' => 61,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-26 12:03:00',
                'ngay_cap_nhat' => '2025-02-26 12:03:00',
            ),
            215 => 
            array (
                'id' => 216,
                'cau_hoi_id' => 61,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-26 12:03:00',
                'ngay_cap_nhat' => '2025-02-26 12:03:00',
            ),
            216 => 
            array (
                'id' => 217,
                'cau_hoi_id' => 62,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-20 12:15:00',
                'ngay_cap_nhat' => '2024-04-20 12:15:00',
            ),
            217 => 
            array (
                'id' => 218,
                'cau_hoi_id' => 62,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-20 12:15:00',
                'ngay_cap_nhat' => '2024-04-20 12:15:00',
            ),
            218 => 
            array (
                'id' => 219,
                'cau_hoi_id' => 62,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-04-20 12:15:00',
                'ngay_cap_nhat' => '2024-04-20 12:15:00',
            ),
            219 => 
            array (
                'id' => 220,
                'cau_hoi_id' => 62,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-04-20 12:15:00',
                'ngay_cap_nhat' => '2024-04-20 12:15:00',
            ),
            220 => 
            array (
                'id' => 221,
                'cau_hoi_id' => 63,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-11 21:50:00',
                'ngay_cap_nhat' => '2025-04-11 21:50:00',
            ),
            221 => 
            array (
                'id' => 222,
                'cau_hoi_id' => 63,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-11 21:50:00',
                'ngay_cap_nhat' => '2025-04-11 21:50:00',
            ),
            222 => 
            array (
                'id' => 223,
                'cau_hoi_id' => 63,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-11 21:50:00',
                'ngay_cap_nhat' => '2025-04-11 21:50:00',
            ),
            223 => 
            array (
                'id' => 224,
                'cau_hoi_id' => 63,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-11 21:50:00',
                'ngay_cap_nhat' => '2025-04-11 21:50:00',
            ),
            224 => 
            array (
                'id' => 225,
                'cau_hoi_id' => 64,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-15 10:14:00',
                'ngay_cap_nhat' => '2026-01-15 10:14:00',
            ),
            225 => 
            array (
                'id' => 226,
                'cau_hoi_id' => 64,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-15 10:14:00',
                'ngay_cap_nhat' => '2026-01-15 10:14:00',
            ),
            226 => 
            array (
                'id' => 227,
                'cau_hoi_id' => 64,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-15 10:14:00',
                'ngay_cap_nhat' => '2026-01-15 10:14:00',
            ),
            227 => 
            array (
                'id' => 228,
                'cau_hoi_id' => 64,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-15 10:14:00',
                'ngay_cap_nhat' => '2026-01-15 10:14:00',
            ),
            228 => 
            array (
                'id' => 229,
                'cau_hoi_id' => 65,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-13 07:49:00',
                'ngay_cap_nhat' => '2024-05-13 07:49:00',
            ),
            229 => 
            array (
                'id' => 230,
                'cau_hoi_id' => 65,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-13 07:49:00',
                'ngay_cap_nhat' => '2024-05-13 07:49:00',
            ),
            230 => 
            array (
                'id' => 231,
                'cau_hoi_id' => 65,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-05-13 07:49:00',
                'ngay_cap_nhat' => '2024-05-13 07:49:00',
            ),
            231 => 
            array (
                'id' => 232,
                'cau_hoi_id' => 65,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-05-13 07:49:00',
                'ngay_cap_nhat' => '2024-05-13 07:49:00',
            ),
            232 => 
            array (
                'id' => 233,
                'cau_hoi_id' => 66,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-13 07:36:00',
                'ngay_cap_nhat' => '2025-04-13 07:36:00',
            ),
            233 => 
            array (
                'id' => 234,
                'cau_hoi_id' => 66,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-13 07:36:00',
                'ngay_cap_nhat' => '2025-04-13 07:36:00',
            ),
            234 => 
            array (
                'id' => 235,
                'cau_hoi_id' => 66,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-13 07:36:00',
                'ngay_cap_nhat' => '2025-04-13 07:36:00',
            ),
            235 => 
            array (
                'id' => 236,
                'cau_hoi_id' => 66,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-13 07:36:00',
                'ngay_cap_nhat' => '2025-04-13 07:36:00',
            ),
            236 => 
            array (
                'id' => 237,
                'cau_hoi_id' => 67,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-09 15:02:00',
                'ngay_cap_nhat' => '2024-12-09 15:02:00',
            ),
            237 => 
            array (
                'id' => 238,
                'cau_hoi_id' => 67,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-09 15:02:00',
                'ngay_cap_nhat' => '2024-12-09 15:02:00',
            ),
            238 => 
            array (
                'id' => 239,
                'cau_hoi_id' => 67,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-09 15:02:00',
                'ngay_cap_nhat' => '2024-12-09 15:02:00',
            ),
            239 => 
            array (
                'id' => 240,
                'cau_hoi_id' => 67,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-09 15:02:00',
                'ngay_cap_nhat' => '2024-12-09 15:02:00',
            ),
            240 => 
            array (
                'id' => 241,
                'cau_hoi_id' => 68,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-28 13:46:00',
                'ngay_cap_nhat' => '2024-05-28 13:46:00',
            ),
            241 => 
            array (
                'id' => 242,
                'cau_hoi_id' => 68,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-28 13:46:00',
                'ngay_cap_nhat' => '2024-05-28 13:46:00',
            ),
            242 => 
            array (
                'id' => 243,
                'cau_hoi_id' => 68,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-05-28 13:46:00',
                'ngay_cap_nhat' => '2024-05-28 13:46:00',
            ),
            243 => 
            array (
                'id' => 244,
                'cau_hoi_id' => 68,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-05-28 13:46:00',
                'ngay_cap_nhat' => '2024-05-28 13:46:00',
            ),
            244 => 
            array (
                'id' => 245,
                'cau_hoi_id' => 69,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-04 00:36:00',
                'ngay_cap_nhat' => '2024-12-04 00:36:00',
            ),
            245 => 
            array (
                'id' => 246,
                'cau_hoi_id' => 69,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-04 00:36:00',
                'ngay_cap_nhat' => '2024-12-04 00:36:00',
            ),
            246 => 
            array (
                'id' => 247,
                'cau_hoi_id' => 69,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-04 00:36:00',
                'ngay_cap_nhat' => '2024-12-04 00:36:00',
            ),
            247 => 
            array (
                'id' => 248,
                'cau_hoi_id' => 69,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-04 00:36:00',
                'ngay_cap_nhat' => '2024-12-04 00:36:00',
            ),
            248 => 
            array (
                'id' => 249,
                'cau_hoi_id' => 70,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-12 15:22:00',
                'ngay_cap_nhat' => '2025-09-12 15:22:00',
            ),
            249 => 
            array (
                'id' => 250,
                'cau_hoi_id' => 70,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-12 15:22:00',
                'ngay_cap_nhat' => '2025-09-12 15:22:00',
            ),
            250 => 
            array (
                'id' => 251,
                'cau_hoi_id' => 70,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-09-12 15:22:00',
                'ngay_cap_nhat' => '2025-09-12 15:22:00',
            ),
            251 => 
            array (
                'id' => 252,
                'cau_hoi_id' => 70,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-09-12 15:22:00',
                'ngay_cap_nhat' => '2025-09-12 15:22:00',
            ),
            252 => 
            array (
                'id' => 253,
                'cau_hoi_id' => 71,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-20 05:42:00',
                'ngay_cap_nhat' => '2025-05-20 05:42:00',
            ),
            253 => 
            array (
                'id' => 254,
                'cau_hoi_id' => 71,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-20 05:42:00',
                'ngay_cap_nhat' => '2025-05-20 05:42:00',
            ),
            254 => 
            array (
                'id' => 255,
                'cau_hoi_id' => 71,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-20 05:42:00',
                'ngay_cap_nhat' => '2025-05-20 05:42:00',
            ),
            255 => 
            array (
                'id' => 256,
                'cau_hoi_id' => 71,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-20 05:42:00',
                'ngay_cap_nhat' => '2025-05-20 05:42:00',
            ),
            256 => 
            array (
                'id' => 257,
                'cau_hoi_id' => 72,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-09 02:12:00',
                'ngay_cap_nhat' => '2025-01-09 02:12:00',
            ),
            257 => 
            array (
                'id' => 258,
                'cau_hoi_id' => 72,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-09 02:12:00',
                'ngay_cap_nhat' => '2025-01-09 02:12:00',
            ),
            258 => 
            array (
                'id' => 259,
                'cau_hoi_id' => 72,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-09 02:12:00',
                'ngay_cap_nhat' => '2025-01-09 02:12:00',
            ),
            259 => 
            array (
                'id' => 260,
                'cau_hoi_id' => 72,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-09 02:12:00',
                'ngay_cap_nhat' => '2025-01-09 02:12:00',
            ),
            260 => 
            array (
                'id' => 261,
                'cau_hoi_id' => 73,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-27 18:41:00',
                'ngay_cap_nhat' => '2025-08-27 18:41:00',
            ),
            261 => 
            array (
                'id' => 262,
                'cau_hoi_id' => 73,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-27 18:41:00',
                'ngay_cap_nhat' => '2025-08-27 18:41:00',
            ),
            262 => 
            array (
                'id' => 263,
                'cau_hoi_id' => 74,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-07 18:33:00',
                'ngay_cap_nhat' => '2024-04-07 18:33:00',
            ),
            263 => 
            array (
                'id' => 264,
                'cau_hoi_id' => 74,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-07 18:33:00',
                'ngay_cap_nhat' => '2024-04-07 18:33:00',
            ),
            264 => 
            array (
                'id' => 265,
                'cau_hoi_id' => 75,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-15 05:27:00',
                'ngay_cap_nhat' => '2024-05-15 05:27:00',
            ),
            265 => 
            array (
                'id' => 266,
                'cau_hoi_id' => 75,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-15 05:27:00',
                'ngay_cap_nhat' => '2024-05-15 05:27:00',
            ),
            266 => 
            array (
                'id' => 267,
                'cau_hoi_id' => 76,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-23 02:51:00',
                'ngay_cap_nhat' => '2024-10-23 02:51:00',
            ),
            267 => 
            array (
                'id' => 268,
                'cau_hoi_id' => 76,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-23 02:51:00',
                'ngay_cap_nhat' => '2024-10-23 02:51:00',
            ),
            268 => 
            array (
                'id' => 269,
                'cau_hoi_id' => 77,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-23 20:24:00',
                'ngay_cap_nhat' => '2025-05-23 20:24:00',
            ),
            269 => 
            array (
                'id' => 270,
                'cau_hoi_id' => 77,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-23 20:24:00',
                'ngay_cap_nhat' => '2025-05-23 20:24:00',
            ),
            270 => 
            array (
                'id' => 271,
                'cau_hoi_id' => 77,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-23 20:24:00',
                'ngay_cap_nhat' => '2025-05-23 20:24:00',
            ),
            271 => 
            array (
                'id' => 272,
                'cau_hoi_id' => 77,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-23 20:24:00',
                'ngay_cap_nhat' => '2025-05-23 20:24:00',
            ),
            272 => 
            array (
                'id' => 273,
                'cau_hoi_id' => 78,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-09 13:22:00',
                'ngay_cap_nhat' => '2025-09-09 13:22:00',
            ),
            273 => 
            array (
                'id' => 274,
                'cau_hoi_id' => 78,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-09 13:22:00',
                'ngay_cap_nhat' => '2025-09-09 13:22:00',
            ),
            274 => 
            array (
                'id' => 275,
                'cau_hoi_id' => 79,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-29 20:43:00',
                'ngay_cap_nhat' => '2024-09-29 20:43:00',
            ),
            275 => 
            array (
                'id' => 276,
                'cau_hoi_id' => 79,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-29 20:43:00',
                'ngay_cap_nhat' => '2024-09-29 20:43:00',
            ),
            276 => 
            array (
                'id' => 277,
                'cau_hoi_id' => 79,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-29 20:43:00',
                'ngay_cap_nhat' => '2024-09-29 20:43:00',
            ),
            277 => 
            array (
                'id' => 278,
                'cau_hoi_id' => 79,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-29 20:43:00',
                'ngay_cap_nhat' => '2024-09-29 20:43:00',
            ),
            278 => 
            array (
                'id' => 279,
                'cau_hoi_id' => 80,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-28 12:21:00',
                'ngay_cap_nhat' => '2026-04-28 12:21:00',
            ),
            279 => 
            array (
                'id' => 280,
                'cau_hoi_id' => 80,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-28 12:21:00',
                'ngay_cap_nhat' => '2026-04-28 12:21:00',
            ),
            280 => 
            array (
                'id' => 281,
                'cau_hoi_id' => 80,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-28 12:21:00',
                'ngay_cap_nhat' => '2026-04-28 12:21:00',
            ),
            281 => 
            array (
                'id' => 282,
                'cau_hoi_id' => 80,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-28 12:21:00',
                'ngay_cap_nhat' => '2026-04-28 12:21:00',
            ),
            282 => 
            array (
                'id' => 283,
                'cau_hoi_id' => 81,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-06 04:02:00',
                'ngay_cap_nhat' => '2024-07-06 04:02:00',
            ),
            283 => 
            array (
                'id' => 284,
                'cau_hoi_id' => 81,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-06 04:02:00',
                'ngay_cap_nhat' => '2024-07-06 04:02:00',
            ),
            284 => 
            array (
                'id' => 285,
                'cau_hoi_id' => 81,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-06 04:02:00',
                'ngay_cap_nhat' => '2024-07-06 04:02:00',
            ),
            285 => 
            array (
                'id' => 286,
                'cau_hoi_id' => 81,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-06 04:02:00',
                'ngay_cap_nhat' => '2024-07-06 04:02:00',
            ),
            286 => 
            array (
                'id' => 287,
                'cau_hoi_id' => 82,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-03 11:31:00',
                'ngay_cap_nhat' => '2026-05-03 11:31:00',
            ),
            287 => 
            array (
                'id' => 288,
                'cau_hoi_id' => 82,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-03 11:31:00',
                'ngay_cap_nhat' => '2026-05-03 11:31:00',
            ),
            288 => 
            array (
                'id' => 289,
                'cau_hoi_id' => 82,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-03 11:31:00',
                'ngay_cap_nhat' => '2026-05-03 11:31:00',
            ),
            289 => 
            array (
                'id' => 290,
                'cau_hoi_id' => 82,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-03 11:31:00',
                'ngay_cap_nhat' => '2026-05-03 11:31:00',
            ),
            290 => 
            array (
                'id' => 291,
                'cau_hoi_id' => 83,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-22 13:35:00',
                'ngay_cap_nhat' => '2024-07-22 13:35:00',
            ),
            291 => 
            array (
                'id' => 292,
                'cau_hoi_id' => 83,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-22 13:35:00',
                'ngay_cap_nhat' => '2024-07-22 13:35:00',
            ),
            292 => 
            array (
                'id' => 293,
                'cau_hoi_id' => 83,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-22 13:35:00',
                'ngay_cap_nhat' => '2024-07-22 13:35:00',
            ),
            293 => 
            array (
                'id' => 294,
                'cau_hoi_id' => 83,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-22 13:35:00',
                'ngay_cap_nhat' => '2024-07-22 13:35:00',
            ),
            294 => 
            array (
                'id' => 295,
                'cau_hoi_id' => 84,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-15 09:36:00',
                'ngay_cap_nhat' => '2025-04-15 09:36:00',
            ),
            295 => 
            array (
                'id' => 296,
                'cau_hoi_id' => 84,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-15 09:36:00',
                'ngay_cap_nhat' => '2025-04-15 09:36:00',
            ),
            296 => 
            array (
                'id' => 297,
                'cau_hoi_id' => 85,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-04 09:56:00',
                'ngay_cap_nhat' => '2025-06-04 09:56:00',
            ),
            297 => 
            array (
                'id' => 298,
                'cau_hoi_id' => 85,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-04 09:56:00',
                'ngay_cap_nhat' => '2025-06-04 09:56:00',
            ),
            298 => 
            array (
                'id' => 299,
                'cau_hoi_id' => 86,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-30 11:27:00',
                'ngay_cap_nhat' => '2025-03-30 11:27:00',
            ),
            299 => 
            array (
                'id' => 300,
                'cau_hoi_id' => 86,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-30 11:27:00',
                'ngay_cap_nhat' => '2025-03-30 11:27:00',
            ),
            300 => 
            array (
                'id' => 301,
                'cau_hoi_id' => 87,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-02 01:01:00',
                'ngay_cap_nhat' => '2025-02-02 01:01:00',
            ),
            301 => 
            array (
                'id' => 302,
                'cau_hoi_id' => 87,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-02 01:01:00',
                'ngay_cap_nhat' => '2025-02-02 01:01:00',
            ),
            302 => 
            array (
                'id' => 303,
                'cau_hoi_id' => 87,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-02 01:01:00',
                'ngay_cap_nhat' => '2025-02-02 01:01:00',
            ),
            303 => 
            array (
                'id' => 304,
                'cau_hoi_id' => 87,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-02 01:01:00',
                'ngay_cap_nhat' => '2025-02-02 01:01:00',
            ),
            304 => 
            array (
                'id' => 305,
                'cau_hoi_id' => 88,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-20 01:37:00',
                'ngay_cap_nhat' => '2024-09-20 01:37:00',
            ),
            305 => 
            array (
                'id' => 306,
                'cau_hoi_id' => 88,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-20 01:37:00',
                'ngay_cap_nhat' => '2024-09-20 01:37:00',
            ),
            306 => 
            array (
                'id' => 307,
                'cau_hoi_id' => 88,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-20 01:37:00',
                'ngay_cap_nhat' => '2024-09-20 01:37:00',
            ),
            307 => 
            array (
                'id' => 308,
                'cau_hoi_id' => 88,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-20 01:37:00',
                'ngay_cap_nhat' => '2024-09-20 01:37:00',
            ),
            308 => 
            array (
                'id' => 309,
                'cau_hoi_id' => 89,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-26 02:07:00',
                'ngay_cap_nhat' => '2025-05-26 02:07:00',
            ),
            309 => 
            array (
                'id' => 310,
                'cau_hoi_id' => 89,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-26 02:07:00',
                'ngay_cap_nhat' => '2025-05-26 02:07:00',
            ),
            310 => 
            array (
                'id' => 311,
                'cau_hoi_id' => 89,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-26 02:07:00',
                'ngay_cap_nhat' => '2025-05-26 02:07:00',
            ),
            311 => 
            array (
                'id' => 312,
                'cau_hoi_id' => 89,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-26 02:07:00',
                'ngay_cap_nhat' => '2025-05-26 02:07:00',
            ),
            312 => 
            array (
                'id' => 313,
                'cau_hoi_id' => 90,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-27 01:44:00',
                'ngay_cap_nhat' => '2024-09-27 01:44:00',
            ),
            313 => 
            array (
                'id' => 314,
                'cau_hoi_id' => 90,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-27 01:44:00',
                'ngay_cap_nhat' => '2024-09-27 01:44:00',
            ),
            314 => 
            array (
                'id' => 315,
                'cau_hoi_id' => 90,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-27 01:44:00',
                'ngay_cap_nhat' => '2024-09-27 01:44:00',
            ),
            315 => 
            array (
                'id' => 316,
                'cau_hoi_id' => 90,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-27 01:44:00',
                'ngay_cap_nhat' => '2024-09-27 01:44:00',
            ),
            316 => 
            array (
                'id' => 317,
                'cau_hoi_id' => 91,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-22 03:10:00',
                'ngay_cap_nhat' => '2025-02-22 03:10:00',
            ),
            317 => 
            array (
                'id' => 318,
                'cau_hoi_id' => 91,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-22 03:10:00',
                'ngay_cap_nhat' => '2025-02-22 03:10:00',
            ),
            318 => 
            array (
                'id' => 319,
                'cau_hoi_id' => 91,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-22 03:10:00',
                'ngay_cap_nhat' => '2025-02-22 03:10:00',
            ),
            319 => 
            array (
                'id' => 320,
                'cau_hoi_id' => 91,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-22 03:10:00',
                'ngay_cap_nhat' => '2025-02-22 03:10:00',
            ),
            320 => 
            array (
                'id' => 321,
                'cau_hoi_id' => 92,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-01 07:05:00',
                'ngay_cap_nhat' => '2025-01-01 07:05:00',
            ),
            321 => 
            array (
                'id' => 322,
                'cau_hoi_id' => 92,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-01 07:05:00',
                'ngay_cap_nhat' => '2025-01-01 07:05:00',
            ),
            322 => 
            array (
                'id' => 323,
                'cau_hoi_id' => 92,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-01 07:05:00',
                'ngay_cap_nhat' => '2025-01-01 07:05:00',
            ),
            323 => 
            array (
                'id' => 324,
                'cau_hoi_id' => 92,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-01 07:05:00',
                'ngay_cap_nhat' => '2025-01-01 07:05:00',
            ),
            324 => 
            array (
                'id' => 325,
                'cau_hoi_id' => 93,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-14 13:42:00',
                'ngay_cap_nhat' => '2024-12-14 13:42:00',
            ),
            325 => 
            array (
                'id' => 326,
                'cau_hoi_id' => 93,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-14 13:42:00',
                'ngay_cap_nhat' => '2024-12-14 13:42:00',
            ),
            326 => 
            array (
                'id' => 327,
                'cau_hoi_id' => 94,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-02 08:55:00',
                'ngay_cap_nhat' => '2025-02-02 08:55:00',
            ),
            327 => 
            array (
                'id' => 328,
                'cau_hoi_id' => 94,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-02 08:55:00',
                'ngay_cap_nhat' => '2025-02-02 08:55:00',
            ),
            328 => 
            array (
                'id' => 329,
                'cau_hoi_id' => 94,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-02 08:55:00',
                'ngay_cap_nhat' => '2025-02-02 08:55:00',
            ),
            329 => 
            array (
                'id' => 330,
                'cau_hoi_id' => 94,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-02 08:55:00',
                'ngay_cap_nhat' => '2025-02-02 08:55:00',
            ),
            330 => 
            array (
                'id' => 331,
                'cau_hoi_id' => 95,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-17 03:25:00',
                'ngay_cap_nhat' => '2025-11-17 03:25:00',
            ),
            331 => 
            array (
                'id' => 332,
                'cau_hoi_id' => 95,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-17 03:25:00',
                'ngay_cap_nhat' => '2025-11-17 03:25:00',
            ),
            332 => 
            array (
                'id' => 333,
                'cau_hoi_id' => 95,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-17 03:25:00',
                'ngay_cap_nhat' => '2025-11-17 03:25:00',
            ),
            333 => 
            array (
                'id' => 334,
                'cau_hoi_id' => 95,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-17 03:25:00',
                'ngay_cap_nhat' => '2025-11-17 03:25:00',
            ),
            334 => 
            array (
                'id' => 335,
                'cau_hoi_id' => 96,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-14 14:18:00',
                'ngay_cap_nhat' => '2025-10-14 14:18:00',
            ),
            335 => 
            array (
                'id' => 336,
                'cau_hoi_id' => 96,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-14 14:18:00',
                'ngay_cap_nhat' => '2025-10-14 14:18:00',
            ),
            336 => 
            array (
                'id' => 337,
                'cau_hoi_id' => 96,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-14 14:18:00',
                'ngay_cap_nhat' => '2025-10-14 14:18:00',
            ),
            337 => 
            array (
                'id' => 338,
                'cau_hoi_id' => 96,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-14 14:18:00',
                'ngay_cap_nhat' => '2025-10-14 14:18:00',
            ),
            338 => 
            array (
                'id' => 339,
                'cau_hoi_id' => 97,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-16 01:37:00',
                'ngay_cap_nhat' => '2024-10-16 01:37:00',
            ),
            339 => 
            array (
                'id' => 340,
                'cau_hoi_id' => 97,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-16 01:37:00',
                'ngay_cap_nhat' => '2024-10-16 01:37:00',
            ),
            340 => 
            array (
                'id' => 341,
                'cau_hoi_id' => 97,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-16 01:37:00',
                'ngay_cap_nhat' => '2024-10-16 01:37:00',
            ),
            341 => 
            array (
                'id' => 342,
                'cau_hoi_id' => 97,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-16 01:37:00',
                'ngay_cap_nhat' => '2024-10-16 01:37:00',
            ),
            342 => 
            array (
                'id' => 343,
                'cau_hoi_id' => 98,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-15 17:41:00',
                'ngay_cap_nhat' => '2026-01-15 17:41:00',
            ),
            343 => 
            array (
                'id' => 344,
                'cau_hoi_id' => 98,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-15 17:41:00',
                'ngay_cap_nhat' => '2026-01-15 17:41:00',
            ),
            344 => 
            array (
                'id' => 345,
                'cau_hoi_id' => 98,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-15 17:41:00',
                'ngay_cap_nhat' => '2026-01-15 17:41:00',
            ),
            345 => 
            array (
                'id' => 346,
                'cau_hoi_id' => 98,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-15 17:41:00',
                'ngay_cap_nhat' => '2026-01-15 17:41:00',
            ),
            346 => 
            array (
                'id' => 347,
                'cau_hoi_id' => 99,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-09 18:28:00',
                'ngay_cap_nhat' => '2024-03-09 18:28:00',
            ),
            347 => 
            array (
                'id' => 348,
                'cau_hoi_id' => 99,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-09 18:28:00',
                'ngay_cap_nhat' => '2024-03-09 18:28:00',
            ),
            348 => 
            array (
                'id' => 349,
                'cau_hoi_id' => 99,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-09 18:28:00',
                'ngay_cap_nhat' => '2024-03-09 18:28:00',
            ),
            349 => 
            array (
                'id' => 350,
                'cau_hoi_id' => 99,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-09 18:28:00',
                'ngay_cap_nhat' => '2024-03-09 18:28:00',
            ),
            350 => 
            array (
                'id' => 351,
                'cau_hoi_id' => 100,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-19 01:30:00',
                'ngay_cap_nhat' => '2026-04-19 01:30:00',
            ),
            351 => 
            array (
                'id' => 352,
                'cau_hoi_id' => 100,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-19 01:30:00',
                'ngay_cap_nhat' => '2026-04-19 01:30:00',
            ),
            352 => 
            array (
                'id' => 353,
                'cau_hoi_id' => 100,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-19 01:30:00',
                'ngay_cap_nhat' => '2026-04-19 01:30:00',
            ),
            353 => 
            array (
                'id' => 354,
                'cau_hoi_id' => 100,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-19 01:30:00',
                'ngay_cap_nhat' => '2026-04-19 01:30:00',
            ),
            354 => 
            array (
                'id' => 355,
                'cau_hoi_id' => 101,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-06 22:50:00',
                'ngay_cap_nhat' => '2025-12-06 22:50:00',
            ),
            355 => 
            array (
                'id' => 356,
                'cau_hoi_id' => 101,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-06 22:50:00',
                'ngay_cap_nhat' => '2025-12-06 22:50:00',
            ),
            356 => 
            array (
                'id' => 357,
                'cau_hoi_id' => 101,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-12-06 22:50:00',
                'ngay_cap_nhat' => '2025-12-06 22:50:00',
            ),
            357 => 
            array (
                'id' => 358,
                'cau_hoi_id' => 101,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-12-06 22:50:00',
                'ngay_cap_nhat' => '2025-12-06 22:50:00',
            ),
            358 => 
            array (
                'id' => 359,
                'cau_hoi_id' => 102,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-08 07:00:00',
                'ngay_cap_nhat' => '2024-04-08 07:00:00',
            ),
            359 => 
            array (
                'id' => 360,
                'cau_hoi_id' => 102,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-08 07:00:00',
                'ngay_cap_nhat' => '2024-04-08 07:00:00',
            ),
            360 => 
            array (
                'id' => 361,
                'cau_hoi_id' => 102,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-04-08 07:00:00',
                'ngay_cap_nhat' => '2024-04-08 07:00:00',
            ),
            361 => 
            array (
                'id' => 362,
                'cau_hoi_id' => 102,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-04-08 07:00:00',
                'ngay_cap_nhat' => '2024-04-08 07:00:00',
            ),
            362 => 
            array (
                'id' => 363,
                'cau_hoi_id' => 103,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-30 23:39:00',
                'ngay_cap_nhat' => '2024-07-30 23:39:00',
            ),
            363 => 
            array (
                'id' => 364,
                'cau_hoi_id' => 103,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-30 23:39:00',
                'ngay_cap_nhat' => '2024-07-30 23:39:00',
            ),
            364 => 
            array (
                'id' => 365,
                'cau_hoi_id' => 104,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-25 00:09:00',
                'ngay_cap_nhat' => '2024-04-25 00:09:00',
            ),
            365 => 
            array (
                'id' => 366,
                'cau_hoi_id' => 104,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-25 00:09:00',
                'ngay_cap_nhat' => '2024-04-25 00:09:00',
            ),
            366 => 
            array (
                'id' => 367,
                'cau_hoi_id' => 104,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-04-25 00:09:00',
                'ngay_cap_nhat' => '2024-04-25 00:09:00',
            ),
            367 => 
            array (
                'id' => 368,
                'cau_hoi_id' => 104,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-04-25 00:09:00',
                'ngay_cap_nhat' => '2024-04-25 00:09:00',
            ),
            368 => 
            array (
                'id' => 369,
                'cau_hoi_id' => 105,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-22 14:21:00',
                'ngay_cap_nhat' => '2026-03-22 14:21:00',
            ),
            369 => 
            array (
                'id' => 370,
                'cau_hoi_id' => 105,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-22 14:21:00',
                'ngay_cap_nhat' => '2026-03-22 14:21:00',
            ),
            370 => 
            array (
                'id' => 371,
                'cau_hoi_id' => 105,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-03-22 14:21:00',
                'ngay_cap_nhat' => '2026-03-22 14:21:00',
            ),
            371 => 
            array (
                'id' => 372,
                'cau_hoi_id' => 105,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-03-22 14:21:00',
                'ngay_cap_nhat' => '2026-03-22 14:21:00',
            ),
            372 => 
            array (
                'id' => 373,
                'cau_hoi_id' => 106,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-18 10:40:00',
                'ngay_cap_nhat' => '2025-10-18 10:40:00',
            ),
            373 => 
            array (
                'id' => 374,
                'cau_hoi_id' => 106,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-18 10:40:00',
                'ngay_cap_nhat' => '2025-10-18 10:40:00',
            ),
            374 => 
            array (
                'id' => 375,
                'cau_hoi_id' => 106,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-18 10:40:00',
                'ngay_cap_nhat' => '2025-10-18 10:40:00',
            ),
            375 => 
            array (
                'id' => 376,
                'cau_hoi_id' => 106,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-18 10:40:00',
                'ngay_cap_nhat' => '2025-10-18 10:40:00',
            ),
            376 => 
            array (
                'id' => 377,
                'cau_hoi_id' => 107,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-23 22:23:00',
                'ngay_cap_nhat' => '2024-11-23 22:23:00',
            ),
            377 => 
            array (
                'id' => 378,
                'cau_hoi_id' => 107,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-23 22:23:00',
                'ngay_cap_nhat' => '2024-11-23 22:23:00',
            ),
            378 => 
            array (
                'id' => 379,
                'cau_hoi_id' => 107,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-23 22:23:00',
                'ngay_cap_nhat' => '2024-11-23 22:23:00',
            ),
            379 => 
            array (
                'id' => 380,
                'cau_hoi_id' => 107,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-23 22:23:00',
                'ngay_cap_nhat' => '2024-11-23 22:23:00',
            ),
            380 => 
            array (
                'id' => 381,
                'cau_hoi_id' => 108,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-02 07:05:00',
                'ngay_cap_nhat' => '2025-04-02 07:05:00',
            ),
            381 => 
            array (
                'id' => 382,
                'cau_hoi_id' => 108,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-02 07:05:00',
                'ngay_cap_nhat' => '2025-04-02 07:05:00',
            ),
            382 => 
            array (
                'id' => 383,
                'cau_hoi_id' => 108,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-02 07:05:00',
                'ngay_cap_nhat' => '2025-04-02 07:05:00',
            ),
            383 => 
            array (
                'id' => 384,
                'cau_hoi_id' => 108,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-02 07:05:00',
                'ngay_cap_nhat' => '2025-04-02 07:05:00',
            ),
            384 => 
            array (
                'id' => 385,
                'cau_hoi_id' => 109,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-12 13:10:00',
                'ngay_cap_nhat' => '2024-09-12 13:10:00',
            ),
            385 => 
            array (
                'id' => 386,
                'cau_hoi_id' => 109,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-12 13:10:00',
                'ngay_cap_nhat' => '2024-09-12 13:10:00',
            ),
            386 => 
            array (
                'id' => 387,
                'cau_hoi_id' => 109,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-12 13:10:00',
                'ngay_cap_nhat' => '2024-09-12 13:10:00',
            ),
            387 => 
            array (
                'id' => 388,
                'cau_hoi_id' => 109,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-12 13:10:00',
                'ngay_cap_nhat' => '2024-09-12 13:10:00',
            ),
            388 => 
            array (
                'id' => 389,
                'cau_hoi_id' => 110,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-27 13:13:00',
                'ngay_cap_nhat' => '2024-11-27 13:13:00',
            ),
            389 => 
            array (
                'id' => 390,
                'cau_hoi_id' => 110,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-27 13:13:00',
                'ngay_cap_nhat' => '2024-11-27 13:13:00',
            ),
            390 => 
            array (
                'id' => 391,
                'cau_hoi_id' => 110,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-27 13:13:00',
                'ngay_cap_nhat' => '2024-11-27 13:13:00',
            ),
            391 => 
            array (
                'id' => 392,
                'cau_hoi_id' => 110,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-27 13:13:00',
                'ngay_cap_nhat' => '2024-11-27 13:13:00',
            ),
            392 => 
            array (
                'id' => 393,
                'cau_hoi_id' => 111,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-15 13:32:00',
                'ngay_cap_nhat' => '2025-10-15 13:32:00',
            ),
            393 => 
            array (
                'id' => 394,
                'cau_hoi_id' => 111,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-15 13:32:00',
                'ngay_cap_nhat' => '2025-10-15 13:32:00',
            ),
            394 => 
            array (
                'id' => 395,
                'cau_hoi_id' => 112,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-29 01:35:00',
                'ngay_cap_nhat' => '2024-03-29 01:35:00',
            ),
            395 => 
            array (
                'id' => 396,
                'cau_hoi_id' => 112,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-29 01:35:00',
                'ngay_cap_nhat' => '2024-03-29 01:35:00',
            ),
            396 => 
            array (
                'id' => 397,
                'cau_hoi_id' => 113,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-23 04:36:00',
                'ngay_cap_nhat' => '2026-02-23 04:36:00',
            ),
            397 => 
            array (
                'id' => 398,
                'cau_hoi_id' => 113,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-23 04:36:00',
                'ngay_cap_nhat' => '2026-02-23 04:36:00',
            ),
            398 => 
            array (
                'id' => 399,
                'cau_hoi_id' => 113,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-02-23 04:36:00',
                'ngay_cap_nhat' => '2026-02-23 04:36:00',
            ),
            399 => 
            array (
                'id' => 400,
                'cau_hoi_id' => 113,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-02-23 04:36:00',
                'ngay_cap_nhat' => '2026-02-23 04:36:00',
            ),
            400 => 
            array (
                'id' => 401,
                'cau_hoi_id' => 114,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-18 02:29:00',
                'ngay_cap_nhat' => '2024-12-18 02:29:00',
            ),
            401 => 
            array (
                'id' => 402,
                'cau_hoi_id' => 114,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-18 02:29:00',
                'ngay_cap_nhat' => '2024-12-18 02:29:00',
            ),
            402 => 
            array (
                'id' => 403,
                'cau_hoi_id' => 115,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-08 09:13:00',
                'ngay_cap_nhat' => '2024-04-08 09:13:00',
            ),
            403 => 
            array (
                'id' => 404,
                'cau_hoi_id' => 115,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-08 09:13:00',
                'ngay_cap_nhat' => '2024-04-08 09:13:00',
            ),
            404 => 
            array (
                'id' => 405,
                'cau_hoi_id' => 115,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-04-08 09:13:00',
                'ngay_cap_nhat' => '2024-04-08 09:13:00',
            ),
            405 => 
            array (
                'id' => 406,
                'cau_hoi_id' => 115,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-04-08 09:13:00',
                'ngay_cap_nhat' => '2024-04-08 09:13:00',
            ),
            406 => 
            array (
                'id' => 407,
                'cau_hoi_id' => 116,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-24 19:17:00',
                'ngay_cap_nhat' => '2025-09-24 19:17:00',
            ),
            407 => 
            array (
                'id' => 408,
                'cau_hoi_id' => 116,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-24 19:17:00',
                'ngay_cap_nhat' => '2025-09-24 19:17:00',
            ),
            408 => 
            array (
                'id' => 409,
                'cau_hoi_id' => 116,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-09-24 19:17:00',
                'ngay_cap_nhat' => '2025-09-24 19:17:00',
            ),
            409 => 
            array (
                'id' => 410,
                'cau_hoi_id' => 116,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-09-24 19:17:00',
                'ngay_cap_nhat' => '2025-09-24 19:17:00',
            ),
            410 => 
            array (
                'id' => 411,
                'cau_hoi_id' => 117,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-11 05:12:00',
                'ngay_cap_nhat' => '2026-04-11 05:12:00',
            ),
            411 => 
            array (
                'id' => 412,
                'cau_hoi_id' => 117,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-11 05:12:00',
                'ngay_cap_nhat' => '2026-04-11 05:12:00',
            ),
            412 => 
            array (
                'id' => 413,
                'cau_hoi_id' => 117,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-11 05:12:00',
                'ngay_cap_nhat' => '2026-04-11 05:12:00',
            ),
            413 => 
            array (
                'id' => 414,
                'cau_hoi_id' => 117,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-11 05:12:00',
                'ngay_cap_nhat' => '2026-04-11 05:12:00',
            ),
            414 => 
            array (
                'id' => 415,
                'cau_hoi_id' => 118,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-16 10:25:00',
                'ngay_cap_nhat' => '2024-07-16 10:25:00',
            ),
            415 => 
            array (
                'id' => 416,
                'cau_hoi_id' => 118,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-16 10:25:00',
                'ngay_cap_nhat' => '2024-07-16 10:25:00',
            ),
            416 => 
            array (
                'id' => 417,
                'cau_hoi_id' => 118,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-16 10:25:00',
                'ngay_cap_nhat' => '2024-07-16 10:25:00',
            ),
            417 => 
            array (
                'id' => 418,
                'cau_hoi_id' => 118,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-16 10:25:00',
                'ngay_cap_nhat' => '2024-07-16 10:25:00',
            ),
            418 => 
            array (
                'id' => 419,
                'cau_hoi_id' => 119,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-23 07:12:00',
                'ngay_cap_nhat' => '2024-03-23 07:12:00',
            ),
            419 => 
            array (
                'id' => 420,
                'cau_hoi_id' => 119,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-23 07:12:00',
                'ngay_cap_nhat' => '2024-03-23 07:12:00',
            ),
            420 => 
            array (
                'id' => 421,
                'cau_hoi_id' => 119,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-23 07:12:00',
                'ngay_cap_nhat' => '2024-03-23 07:12:00',
            ),
            421 => 
            array (
                'id' => 422,
                'cau_hoi_id' => 119,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-23 07:12:00',
                'ngay_cap_nhat' => '2024-03-23 07:12:00',
            ),
            422 => 
            array (
                'id' => 423,
                'cau_hoi_id' => 120,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-07 03:42:00',
                'ngay_cap_nhat' => '2026-02-07 03:42:00',
            ),
            423 => 
            array (
                'id' => 424,
                'cau_hoi_id' => 120,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-07 03:42:00',
                'ngay_cap_nhat' => '2026-02-07 03:42:00',
            ),
            424 => 
            array (
                'id' => 425,
                'cau_hoi_id' => 120,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-02-07 03:42:00',
                'ngay_cap_nhat' => '2026-02-07 03:42:00',
            ),
            425 => 
            array (
                'id' => 426,
                'cau_hoi_id' => 120,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-02-07 03:42:00',
                'ngay_cap_nhat' => '2026-02-07 03:42:00',
            ),
            426 => 
            array (
                'id' => 427,
                'cau_hoi_id' => 121,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-04 15:39:00',
                'ngay_cap_nhat' => '2026-05-04 15:39:00',
            ),
            427 => 
            array (
                'id' => 428,
                'cau_hoi_id' => 121,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-04 15:39:00',
                'ngay_cap_nhat' => '2026-05-04 15:39:00',
            ),
            428 => 
            array (
                'id' => 429,
                'cau_hoi_id' => 122,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-11 23:03:00',
                'ngay_cap_nhat' => '2024-11-11 23:03:00',
            ),
            429 => 
            array (
                'id' => 430,
                'cau_hoi_id' => 122,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-11 23:03:00',
                'ngay_cap_nhat' => '2024-11-11 23:03:00',
            ),
            430 => 
            array (
                'id' => 431,
                'cau_hoi_id' => 122,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-11 23:03:00',
                'ngay_cap_nhat' => '2024-11-11 23:03:00',
            ),
            431 => 
            array (
                'id' => 432,
                'cau_hoi_id' => 122,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-11 23:03:00',
                'ngay_cap_nhat' => '2024-11-11 23:03:00',
            ),
            432 => 
            array (
                'id' => 433,
                'cau_hoi_id' => 123,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-23 23:37:00',
                'ngay_cap_nhat' => '2024-10-23 23:37:00',
            ),
            433 => 
            array (
                'id' => 434,
                'cau_hoi_id' => 123,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-23 23:37:00',
                'ngay_cap_nhat' => '2024-10-23 23:37:00',
            ),
            434 => 
            array (
                'id' => 435,
                'cau_hoi_id' => 123,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-23 23:37:00',
                'ngay_cap_nhat' => '2024-10-23 23:37:00',
            ),
            435 => 
            array (
                'id' => 436,
                'cau_hoi_id' => 123,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-23 23:37:00',
                'ngay_cap_nhat' => '2024-10-23 23:37:00',
            ),
            436 => 
            array (
                'id' => 437,
                'cau_hoi_id' => 124,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-08 08:45:00',
                'ngay_cap_nhat' => '2024-10-08 08:45:00',
            ),
            437 => 
            array (
                'id' => 438,
                'cau_hoi_id' => 124,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-08 08:45:00',
                'ngay_cap_nhat' => '2024-10-08 08:45:00',
            ),
            438 => 
            array (
                'id' => 439,
                'cau_hoi_id' => 124,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-08 08:45:00',
                'ngay_cap_nhat' => '2024-10-08 08:45:00',
            ),
            439 => 
            array (
                'id' => 440,
                'cau_hoi_id' => 124,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-08 08:45:00',
                'ngay_cap_nhat' => '2024-10-08 08:45:00',
            ),
            440 => 
            array (
                'id' => 441,
                'cau_hoi_id' => 125,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-06-07 23:51:00',
                'ngay_cap_nhat' => '2026-06-07 23:51:00',
            ),
            441 => 
            array (
                'id' => 442,
                'cau_hoi_id' => 125,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-06-07 23:51:00',
                'ngay_cap_nhat' => '2026-06-07 23:51:00',
            ),
            442 => 
            array (
                'id' => 443,
                'cau_hoi_id' => 125,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-06-07 23:51:00',
                'ngay_cap_nhat' => '2026-06-07 23:51:00',
            ),
            443 => 
            array (
                'id' => 444,
                'cau_hoi_id' => 125,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-06-07 23:51:00',
                'ngay_cap_nhat' => '2026-06-07 23:51:00',
            ),
            444 => 
            array (
                'id' => 445,
                'cau_hoi_id' => 126,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-26 04:18:00',
                'ngay_cap_nhat' => '2026-05-26 04:18:00',
            ),
            445 => 
            array (
                'id' => 446,
                'cau_hoi_id' => 126,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-26 04:18:00',
                'ngay_cap_nhat' => '2026-05-26 04:18:00',
            ),
            446 => 
            array (
                'id' => 447,
                'cau_hoi_id' => 126,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-26 04:18:00',
                'ngay_cap_nhat' => '2026-05-26 04:18:00',
            ),
            447 => 
            array (
                'id' => 448,
                'cau_hoi_id' => 126,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-26 04:18:00',
                'ngay_cap_nhat' => '2026-05-26 04:18:00',
            ),
            448 => 
            array (
                'id' => 449,
                'cau_hoi_id' => 127,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-06 17:29:00',
                'ngay_cap_nhat' => '2026-01-06 17:29:00',
            ),
            449 => 
            array (
                'id' => 450,
                'cau_hoi_id' => 127,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-06 17:29:00',
                'ngay_cap_nhat' => '2026-01-06 17:29:00',
            ),
            450 => 
            array (
                'id' => 451,
                'cau_hoi_id' => 128,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-18 20:44:00',
                'ngay_cap_nhat' => '2025-12-18 20:44:00',
            ),
            451 => 
            array (
                'id' => 452,
                'cau_hoi_id' => 128,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-18 20:44:00',
                'ngay_cap_nhat' => '2025-12-18 20:44:00',
            ),
            452 => 
            array (
                'id' => 453,
                'cau_hoi_id' => 128,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-12-18 20:44:00',
                'ngay_cap_nhat' => '2025-12-18 20:44:00',
            ),
            453 => 
            array (
                'id' => 454,
                'cau_hoi_id' => 128,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-12-18 20:44:00',
                'ngay_cap_nhat' => '2025-12-18 20:44:00',
            ),
            454 => 
            array (
                'id' => 455,
                'cau_hoi_id' => 129,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-21 12:23:00',
                'ngay_cap_nhat' => '2024-04-21 12:23:00',
            ),
            455 => 
            array (
                'id' => 456,
                'cau_hoi_id' => 129,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-21 12:23:00',
                'ngay_cap_nhat' => '2024-04-21 12:23:00',
            ),
            456 => 
            array (
                'id' => 457,
                'cau_hoi_id' => 129,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-04-21 12:23:00',
                'ngay_cap_nhat' => '2024-04-21 12:23:00',
            ),
            457 => 
            array (
                'id' => 458,
                'cau_hoi_id' => 129,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-04-21 12:23:00',
                'ngay_cap_nhat' => '2024-04-21 12:23:00',
            ),
            458 => 
            array (
                'id' => 459,
                'cau_hoi_id' => 130,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-24 20:09:00',
                'ngay_cap_nhat' => '2025-06-24 20:09:00',
            ),
            459 => 
            array (
                'id' => 460,
                'cau_hoi_id' => 130,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-24 20:09:00',
                'ngay_cap_nhat' => '2025-06-24 20:09:00',
            ),
            460 => 
            array (
                'id' => 461,
                'cau_hoi_id' => 130,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-24 20:09:00',
                'ngay_cap_nhat' => '2025-06-24 20:09:00',
            ),
            461 => 
            array (
                'id' => 462,
                'cau_hoi_id' => 130,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-24 20:09:00',
                'ngay_cap_nhat' => '2025-06-24 20:09:00',
            ),
            462 => 
            array (
                'id' => 463,
                'cau_hoi_id' => 131,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-11 18:50:00',
                'ngay_cap_nhat' => '2024-04-11 18:50:00',
            ),
            463 => 
            array (
                'id' => 464,
                'cau_hoi_id' => 131,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-11 18:50:00',
                'ngay_cap_nhat' => '2024-04-11 18:50:00',
            ),
            464 => 
            array (
                'id' => 465,
                'cau_hoi_id' => 131,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-04-11 18:50:00',
                'ngay_cap_nhat' => '2024-04-11 18:50:00',
            ),
            465 => 
            array (
                'id' => 466,
                'cau_hoi_id' => 131,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-04-11 18:50:00',
                'ngay_cap_nhat' => '2024-04-11 18:50:00',
            ),
            466 => 
            array (
                'id' => 467,
                'cau_hoi_id' => 132,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-11 07:40:00',
                'ngay_cap_nhat' => '2025-07-11 07:40:00',
            ),
            467 => 
            array (
                'id' => 468,
                'cau_hoi_id' => 132,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-11 07:40:00',
                'ngay_cap_nhat' => '2025-07-11 07:40:00',
            ),
            468 => 
            array (
                'id' => 469,
                'cau_hoi_id' => 132,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-07-11 07:40:00',
                'ngay_cap_nhat' => '2025-07-11 07:40:00',
            ),
            469 => 
            array (
                'id' => 470,
                'cau_hoi_id' => 132,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-07-11 07:40:00',
                'ngay_cap_nhat' => '2025-07-11 07:40:00',
            ),
            470 => 
            array (
                'id' => 471,
                'cau_hoi_id' => 133,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-12 02:05:00',
                'ngay_cap_nhat' => '2024-07-12 02:05:00',
            ),
            471 => 
            array (
                'id' => 472,
                'cau_hoi_id' => 133,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-12 02:05:00',
                'ngay_cap_nhat' => '2024-07-12 02:05:00',
            ),
            472 => 
            array (
                'id' => 473,
                'cau_hoi_id' => 133,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-12 02:05:00',
                'ngay_cap_nhat' => '2024-07-12 02:05:00',
            ),
            473 => 
            array (
                'id' => 474,
                'cau_hoi_id' => 133,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-12 02:05:00',
                'ngay_cap_nhat' => '2024-07-12 02:05:00',
            ),
            474 => 
            array (
                'id' => 475,
                'cau_hoi_id' => 134,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-12 11:44:00',
                'ngay_cap_nhat' => '2026-02-12 11:44:00',
            ),
            475 => 
            array (
                'id' => 476,
                'cau_hoi_id' => 134,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-12 11:44:00',
                'ngay_cap_nhat' => '2026-02-12 11:44:00',
            ),
            476 => 
            array (
                'id' => 477,
                'cau_hoi_id' => 134,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-02-12 11:44:00',
                'ngay_cap_nhat' => '2026-02-12 11:44:00',
            ),
            477 => 
            array (
                'id' => 478,
                'cau_hoi_id' => 134,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-02-12 11:44:00',
                'ngay_cap_nhat' => '2026-02-12 11:44:00',
            ),
            478 => 
            array (
                'id' => 479,
                'cau_hoi_id' => 135,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-20 15:18:00',
                'ngay_cap_nhat' => '2024-04-20 15:18:00',
            ),
            479 => 
            array (
                'id' => 480,
                'cau_hoi_id' => 135,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-20 15:18:00',
                'ngay_cap_nhat' => '2024-04-20 15:18:00',
            ),
            480 => 
            array (
                'id' => 481,
                'cau_hoi_id' => 135,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-04-20 15:18:00',
                'ngay_cap_nhat' => '2024-04-20 15:18:00',
            ),
            481 => 
            array (
                'id' => 482,
                'cau_hoi_id' => 135,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-04-20 15:18:00',
                'ngay_cap_nhat' => '2024-04-20 15:18:00',
            ),
            482 => 
            array (
                'id' => 483,
                'cau_hoi_id' => 136,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-15 18:39:00',
                'ngay_cap_nhat' => '2024-06-15 18:39:00',
            ),
            483 => 
            array (
                'id' => 484,
                'cau_hoi_id' => 136,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-15 18:39:00',
                'ngay_cap_nhat' => '2024-06-15 18:39:00',
            ),
            484 => 
            array (
                'id' => 485,
                'cau_hoi_id' => 136,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-15 18:39:00',
                'ngay_cap_nhat' => '2024-06-15 18:39:00',
            ),
            485 => 
            array (
                'id' => 486,
                'cau_hoi_id' => 136,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-15 18:39:00',
                'ngay_cap_nhat' => '2024-06-15 18:39:00',
            ),
            486 => 
            array (
                'id' => 487,
                'cau_hoi_id' => 137,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-20 23:56:00',
                'ngay_cap_nhat' => '2025-01-20 23:56:00',
            ),
            487 => 
            array (
                'id' => 488,
                'cau_hoi_id' => 137,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-20 23:56:00',
                'ngay_cap_nhat' => '2025-01-20 23:56:00',
            ),
            488 => 
            array (
                'id' => 489,
                'cau_hoi_id' => 137,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-20 23:56:00',
                'ngay_cap_nhat' => '2025-01-20 23:56:00',
            ),
            489 => 
            array (
                'id' => 490,
                'cau_hoi_id' => 137,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-20 23:56:00',
                'ngay_cap_nhat' => '2025-01-20 23:56:00',
            ),
            490 => 
            array (
                'id' => 491,
                'cau_hoi_id' => 138,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-18 12:47:00',
                'ngay_cap_nhat' => '2025-07-18 12:47:00',
            ),
            491 => 
            array (
                'id' => 492,
                'cau_hoi_id' => 138,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-18 12:47:00',
                'ngay_cap_nhat' => '2025-07-18 12:47:00',
            ),
            492 => 
            array (
                'id' => 493,
                'cau_hoi_id' => 138,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-07-18 12:47:00',
                'ngay_cap_nhat' => '2025-07-18 12:47:00',
            ),
            493 => 
            array (
                'id' => 494,
                'cau_hoi_id' => 138,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-07-18 12:47:00',
                'ngay_cap_nhat' => '2025-07-18 12:47:00',
            ),
            494 => 
            array (
                'id' => 495,
                'cau_hoi_id' => 139,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-22 11:54:00',
                'ngay_cap_nhat' => '2024-03-22 11:54:00',
            ),
            495 => 
            array (
                'id' => 496,
                'cau_hoi_id' => 139,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-22 11:54:00',
                'ngay_cap_nhat' => '2024-03-22 11:54:00',
            ),
            496 => 
            array (
                'id' => 497,
                'cau_hoi_id' => 139,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-22 11:54:00',
                'ngay_cap_nhat' => '2024-03-22 11:54:00',
            ),
            497 => 
            array (
                'id' => 498,
                'cau_hoi_id' => 139,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-22 11:54:00',
                'ngay_cap_nhat' => '2024-03-22 11:54:00',
            ),
            498 => 
            array (
                'id' => 499,
                'cau_hoi_id' => 140,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-21 21:20:00',
                'ngay_cap_nhat' => '2025-03-21 21:20:00',
            ),
            499 => 
            array (
                'id' => 500,
                'cau_hoi_id' => 140,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-21 21:20:00',
                'ngay_cap_nhat' => '2025-03-21 21:20:00',
            ),
        ));
        \DB::table('dap_an')->insert(array (
            0 => 
            array (
                'id' => 501,
                'cau_hoi_id' => 141,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-22 12:54:00',
                'ngay_cap_nhat' => '2025-12-22 12:54:00',
            ),
            1 => 
            array (
                'id' => 502,
                'cau_hoi_id' => 141,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-22 12:54:00',
                'ngay_cap_nhat' => '2025-12-22 12:54:00',
            ),
            2 => 
            array (
                'id' => 503,
                'cau_hoi_id' => 141,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-12-22 12:54:00',
                'ngay_cap_nhat' => '2025-12-22 12:54:00',
            ),
            3 => 
            array (
                'id' => 504,
                'cau_hoi_id' => 141,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-12-22 12:54:00',
                'ngay_cap_nhat' => '2025-12-22 12:54:00',
            ),
            4 => 
            array (
                'id' => 505,
                'cau_hoi_id' => 142,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-04 14:56:00',
                'ngay_cap_nhat' => '2025-01-04 14:56:00',
            ),
            5 => 
            array (
                'id' => 506,
                'cau_hoi_id' => 142,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-04 14:56:00',
                'ngay_cap_nhat' => '2025-01-04 14:56:00',
            ),
            6 => 
            array (
                'id' => 507,
                'cau_hoi_id' => 142,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-04 14:56:00',
                'ngay_cap_nhat' => '2025-01-04 14:56:00',
            ),
            7 => 
            array (
                'id' => 508,
                'cau_hoi_id' => 142,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-04 14:56:00',
                'ngay_cap_nhat' => '2025-01-04 14:56:00',
            ),
            8 => 
            array (
                'id' => 509,
                'cau_hoi_id' => 143,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-22 05:00:00',
                'ngay_cap_nhat' => '2024-03-22 05:00:00',
            ),
            9 => 
            array (
                'id' => 510,
                'cau_hoi_id' => 143,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-22 05:00:00',
                'ngay_cap_nhat' => '2024-03-22 05:00:00',
            ),
            10 => 
            array (
                'id' => 511,
                'cau_hoi_id' => 143,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-22 05:00:00',
                'ngay_cap_nhat' => '2024-03-22 05:00:00',
            ),
            11 => 
            array (
                'id' => 512,
                'cau_hoi_id' => 143,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-22 05:00:00',
                'ngay_cap_nhat' => '2024-03-22 05:00:00',
            ),
            12 => 
            array (
                'id' => 513,
                'cau_hoi_id' => 144,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-16 21:28:00',
                'ngay_cap_nhat' => '2026-05-16 21:28:00',
            ),
            13 => 
            array (
                'id' => 514,
                'cau_hoi_id' => 144,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-16 21:28:00',
                'ngay_cap_nhat' => '2026-05-16 21:28:00',
            ),
            14 => 
            array (
                'id' => 515,
                'cau_hoi_id' => 144,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-16 21:28:00',
                'ngay_cap_nhat' => '2026-05-16 21:28:00',
            ),
            15 => 
            array (
                'id' => 516,
                'cau_hoi_id' => 144,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-16 21:28:00',
                'ngay_cap_nhat' => '2026-05-16 21:28:00',
            ),
            16 => 
            array (
                'id' => 517,
                'cau_hoi_id' => 145,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-03 23:20:00',
                'ngay_cap_nhat' => '2025-11-03 23:20:00',
            ),
            17 => 
            array (
                'id' => 518,
                'cau_hoi_id' => 145,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-03 23:20:00',
                'ngay_cap_nhat' => '2025-11-03 23:20:00',
            ),
            18 => 
            array (
                'id' => 519,
                'cau_hoi_id' => 145,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-03 23:20:00',
                'ngay_cap_nhat' => '2025-11-03 23:20:00',
            ),
            19 => 
            array (
                'id' => 520,
                'cau_hoi_id' => 145,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-03 23:20:00',
                'ngay_cap_nhat' => '2025-11-03 23:20:00',
            ),
            20 => 
            array (
                'id' => 521,
                'cau_hoi_id' => 146,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-21 05:10:00',
                'ngay_cap_nhat' => '2025-01-21 05:10:00',
            ),
            21 => 
            array (
                'id' => 522,
                'cau_hoi_id' => 146,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-21 05:10:00',
                'ngay_cap_nhat' => '2025-01-21 05:10:00',
            ),
            22 => 
            array (
                'id' => 523,
                'cau_hoi_id' => 147,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-05 00:26:00',
                'ngay_cap_nhat' => '2024-08-05 00:26:00',
            ),
            23 => 
            array (
                'id' => 524,
                'cau_hoi_id' => 147,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-05 00:26:00',
                'ngay_cap_nhat' => '2024-08-05 00:26:00',
            ),
            24 => 
            array (
                'id' => 525,
                'cau_hoi_id' => 147,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-08-05 00:26:00',
                'ngay_cap_nhat' => '2024-08-05 00:26:00',
            ),
            25 => 
            array (
                'id' => 526,
                'cau_hoi_id' => 147,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-08-05 00:26:00',
                'ngay_cap_nhat' => '2024-08-05 00:26:00',
            ),
            26 => 
            array (
                'id' => 527,
                'cau_hoi_id' => 148,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-30 11:36:00',
                'ngay_cap_nhat' => '2025-12-30 11:36:00',
            ),
            27 => 
            array (
                'id' => 528,
                'cau_hoi_id' => 148,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-30 11:36:00',
                'ngay_cap_nhat' => '2025-12-30 11:36:00',
            ),
            28 => 
            array (
                'id' => 529,
                'cau_hoi_id' => 148,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-12-30 11:36:00',
                'ngay_cap_nhat' => '2025-12-30 11:36:00',
            ),
            29 => 
            array (
                'id' => 530,
                'cau_hoi_id' => 148,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-12-30 11:36:00',
                'ngay_cap_nhat' => '2025-12-30 11:36:00',
            ),
            30 => 
            array (
                'id' => 531,
                'cau_hoi_id' => 149,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-25 13:13:00',
                'ngay_cap_nhat' => '2025-01-25 13:13:00',
            ),
            31 => 
            array (
                'id' => 532,
                'cau_hoi_id' => 149,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-25 13:13:00',
                'ngay_cap_nhat' => '2025-01-25 13:13:00',
            ),
            32 => 
            array (
                'id' => 533,
                'cau_hoi_id' => 149,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-25 13:13:00',
                'ngay_cap_nhat' => '2025-01-25 13:13:00',
            ),
            33 => 
            array (
                'id' => 534,
                'cau_hoi_id' => 149,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-25 13:13:00',
                'ngay_cap_nhat' => '2025-01-25 13:13:00',
            ),
            34 => 
            array (
                'id' => 535,
                'cau_hoi_id' => 150,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-21 07:29:00',
                'ngay_cap_nhat' => '2025-05-21 07:29:00',
            ),
            35 => 
            array (
                'id' => 536,
                'cau_hoi_id' => 150,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-21 07:29:00',
                'ngay_cap_nhat' => '2025-05-21 07:29:00',
            ),
            36 => 
            array (
                'id' => 537,
                'cau_hoi_id' => 151,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-23 05:52:00',
                'ngay_cap_nhat' => '2025-04-23 05:52:00',
            ),
            37 => 
            array (
                'id' => 538,
                'cau_hoi_id' => 151,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-23 05:52:00',
                'ngay_cap_nhat' => '2025-04-23 05:52:00',
            ),
            38 => 
            array (
                'id' => 539,
                'cau_hoi_id' => 151,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-23 05:52:00',
                'ngay_cap_nhat' => '2025-04-23 05:52:00',
            ),
            39 => 
            array (
                'id' => 540,
                'cau_hoi_id' => 151,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-23 05:52:00',
                'ngay_cap_nhat' => '2025-04-23 05:52:00',
            ),
            40 => 
            array (
                'id' => 541,
                'cau_hoi_id' => 152,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-22 02:21:00',
                'ngay_cap_nhat' => '2025-03-22 02:21:00',
            ),
            41 => 
            array (
                'id' => 542,
                'cau_hoi_id' => 152,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-22 02:21:00',
                'ngay_cap_nhat' => '2025-03-22 02:21:00',
            ),
            42 => 
            array (
                'id' => 543,
                'cau_hoi_id' => 152,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-03-22 02:21:00',
                'ngay_cap_nhat' => '2025-03-22 02:21:00',
            ),
            43 => 
            array (
                'id' => 544,
                'cau_hoi_id' => 152,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-03-22 02:21:00',
                'ngay_cap_nhat' => '2025-03-22 02:21:00',
            ),
            44 => 
            array (
                'id' => 545,
                'cau_hoi_id' => 153,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-16 06:46:00',
                'ngay_cap_nhat' => '2024-09-16 06:46:00',
            ),
            45 => 
            array (
                'id' => 546,
                'cau_hoi_id' => 153,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-16 06:46:00',
                'ngay_cap_nhat' => '2024-09-16 06:46:00',
            ),
            46 => 
            array (
                'id' => 547,
                'cau_hoi_id' => 153,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-16 06:46:00',
                'ngay_cap_nhat' => '2024-09-16 06:46:00',
            ),
            47 => 
            array (
                'id' => 548,
                'cau_hoi_id' => 153,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-16 06:46:00',
                'ngay_cap_nhat' => '2024-09-16 06:46:00',
            ),
            48 => 
            array (
                'id' => 549,
                'cau_hoi_id' => 154,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-08 02:52:00',
                'ngay_cap_nhat' => '2024-08-08 02:52:00',
            ),
            49 => 
            array (
                'id' => 550,
                'cau_hoi_id' => 154,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-08 02:52:00',
                'ngay_cap_nhat' => '2024-08-08 02:52:00',
            ),
            50 => 
            array (
                'id' => 551,
                'cau_hoi_id' => 154,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-08-08 02:52:00',
                'ngay_cap_nhat' => '2024-08-08 02:52:00',
            ),
            51 => 
            array (
                'id' => 552,
                'cau_hoi_id' => 154,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-08-08 02:52:00',
                'ngay_cap_nhat' => '2024-08-08 02:52:00',
            ),
            52 => 
            array (
                'id' => 553,
                'cau_hoi_id' => 155,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-10 02:23:00',
                'ngay_cap_nhat' => '2026-05-10 02:23:00',
            ),
            53 => 
            array (
                'id' => 554,
                'cau_hoi_id' => 155,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-10 02:23:00',
                'ngay_cap_nhat' => '2026-05-10 02:23:00',
            ),
            54 => 
            array (
                'id' => 555,
                'cau_hoi_id' => 155,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-10 02:23:00',
                'ngay_cap_nhat' => '2026-05-10 02:23:00',
            ),
            55 => 
            array (
                'id' => 556,
                'cau_hoi_id' => 155,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-10 02:23:00',
                'ngay_cap_nhat' => '2026-05-10 02:23:00',
            ),
            56 => 
            array (
                'id' => 557,
                'cau_hoi_id' => 156,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-05 13:34:00',
                'ngay_cap_nhat' => '2024-08-05 13:34:00',
            ),
            57 => 
            array (
                'id' => 558,
                'cau_hoi_id' => 156,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-05 13:34:00',
                'ngay_cap_nhat' => '2024-08-05 13:34:00',
            ),
            58 => 
            array (
                'id' => 559,
                'cau_hoi_id' => 156,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-08-05 13:34:00',
                'ngay_cap_nhat' => '2024-08-05 13:34:00',
            ),
            59 => 
            array (
                'id' => 560,
                'cau_hoi_id' => 156,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-08-05 13:34:00',
                'ngay_cap_nhat' => '2024-08-05 13:34:00',
            ),
            60 => 
            array (
                'id' => 561,
                'cau_hoi_id' => 157,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-29 08:35:00',
                'ngay_cap_nhat' => '2025-01-29 08:35:00',
            ),
            61 => 
            array (
                'id' => 562,
                'cau_hoi_id' => 157,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-29 08:35:00',
                'ngay_cap_nhat' => '2025-01-29 08:35:00',
            ),
            62 => 
            array (
                'id' => 563,
                'cau_hoi_id' => 157,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-29 08:35:00',
                'ngay_cap_nhat' => '2025-01-29 08:35:00',
            ),
            63 => 
            array (
                'id' => 564,
                'cau_hoi_id' => 157,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-29 08:35:00',
                'ngay_cap_nhat' => '2025-01-29 08:35:00',
            ),
            64 => 
            array (
                'id' => 565,
                'cau_hoi_id' => 158,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-19 00:02:00',
                'ngay_cap_nhat' => '2026-01-19 00:02:00',
            ),
            65 => 
            array (
                'id' => 566,
                'cau_hoi_id' => 158,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-19 00:02:00',
                'ngay_cap_nhat' => '2026-01-19 00:02:00',
            ),
            66 => 
            array (
                'id' => 567,
                'cau_hoi_id' => 158,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-19 00:02:00',
                'ngay_cap_nhat' => '2026-01-19 00:02:00',
            ),
            67 => 
            array (
                'id' => 568,
                'cau_hoi_id' => 158,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-19 00:02:00',
                'ngay_cap_nhat' => '2026-01-19 00:02:00',
            ),
            68 => 
            array (
                'id' => 569,
                'cau_hoi_id' => 159,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-16 16:20:00',
                'ngay_cap_nhat' => '2025-01-16 16:20:00',
            ),
            69 => 
            array (
                'id' => 570,
                'cau_hoi_id' => 159,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-16 16:20:00',
                'ngay_cap_nhat' => '2025-01-16 16:20:00',
            ),
            70 => 
            array (
                'id' => 571,
                'cau_hoi_id' => 160,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-16 09:55:00',
                'ngay_cap_nhat' => '2025-04-16 09:55:00',
            ),
            71 => 
            array (
                'id' => 572,
                'cau_hoi_id' => 160,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-16 09:55:00',
                'ngay_cap_nhat' => '2025-04-16 09:55:00',
            ),
            72 => 
            array (
                'id' => 573,
                'cau_hoi_id' => 161,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-13 23:07:00',
                'ngay_cap_nhat' => '2025-01-13 23:07:00',
            ),
            73 => 
            array (
                'id' => 574,
                'cau_hoi_id' => 161,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-13 23:07:00',
                'ngay_cap_nhat' => '2025-01-13 23:07:00',
            ),
            74 => 
            array (
                'id' => 575,
                'cau_hoi_id' => 162,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-11 06:18:00',
                'ngay_cap_nhat' => '2024-07-11 06:18:00',
            ),
            75 => 
            array (
                'id' => 576,
                'cau_hoi_id' => 162,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-11 06:18:00',
                'ngay_cap_nhat' => '2024-07-11 06:18:00',
            ),
            76 => 
            array (
                'id' => 577,
                'cau_hoi_id' => 163,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-16 04:45:00',
                'ngay_cap_nhat' => '2025-11-16 04:45:00',
            ),
            77 => 
            array (
                'id' => 578,
                'cau_hoi_id' => 163,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-16 04:45:00',
                'ngay_cap_nhat' => '2025-11-16 04:45:00',
            ),
            78 => 
            array (
                'id' => 579,
                'cau_hoi_id' => 163,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-16 04:45:00',
                'ngay_cap_nhat' => '2025-11-16 04:45:00',
            ),
            79 => 
            array (
                'id' => 580,
                'cau_hoi_id' => 163,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-16 04:45:00',
                'ngay_cap_nhat' => '2025-11-16 04:45:00',
            ),
            80 => 
            array (
                'id' => 581,
                'cau_hoi_id' => 164,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-07 22:04:00',
                'ngay_cap_nhat' => '2025-01-07 22:04:00',
            ),
            81 => 
            array (
                'id' => 582,
                'cau_hoi_id' => 164,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-07 22:04:00',
                'ngay_cap_nhat' => '2025-01-07 22:04:00',
            ),
            82 => 
            array (
                'id' => 583,
                'cau_hoi_id' => 164,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-07 22:04:00',
                'ngay_cap_nhat' => '2025-01-07 22:04:00',
            ),
            83 => 
            array (
                'id' => 584,
                'cau_hoi_id' => 164,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-07 22:04:00',
                'ngay_cap_nhat' => '2025-01-07 22:04:00',
            ),
            84 => 
            array (
                'id' => 585,
                'cau_hoi_id' => 165,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-14 23:31:00',
                'ngay_cap_nhat' => '2024-12-14 23:31:00',
            ),
            85 => 
            array (
                'id' => 586,
                'cau_hoi_id' => 165,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-14 23:31:00',
                'ngay_cap_nhat' => '2024-12-14 23:31:00',
            ),
            86 => 
            array (
                'id' => 587,
                'cau_hoi_id' => 165,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-14 23:31:00',
                'ngay_cap_nhat' => '2024-12-14 23:31:00',
            ),
            87 => 
            array (
                'id' => 588,
                'cau_hoi_id' => 165,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-14 23:31:00',
                'ngay_cap_nhat' => '2024-12-14 23:31:00',
            ),
            88 => 
            array (
                'id' => 589,
                'cau_hoi_id' => 166,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-18 13:37:00',
                'ngay_cap_nhat' => '2026-04-18 13:37:00',
            ),
            89 => 
            array (
                'id' => 590,
                'cau_hoi_id' => 166,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-18 13:37:00',
                'ngay_cap_nhat' => '2026-04-18 13:37:00',
            ),
            90 => 
            array (
                'id' => 591,
                'cau_hoi_id' => 167,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-06 16:06:00',
                'ngay_cap_nhat' => '2026-02-06 16:06:00',
            ),
            91 => 
            array (
                'id' => 592,
                'cau_hoi_id' => 167,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-06 16:06:00',
                'ngay_cap_nhat' => '2026-02-06 16:06:00',
            ),
            92 => 
            array (
                'id' => 593,
                'cau_hoi_id' => 167,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-02-06 16:06:00',
                'ngay_cap_nhat' => '2026-02-06 16:06:00',
            ),
            93 => 
            array (
                'id' => 594,
                'cau_hoi_id' => 167,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-02-06 16:06:00',
                'ngay_cap_nhat' => '2026-02-06 16:06:00',
            ),
            94 => 
            array (
                'id' => 595,
                'cau_hoi_id' => 168,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-11 13:27:00',
                'ngay_cap_nhat' => '2024-10-11 13:27:00',
            ),
            95 => 
            array (
                'id' => 596,
                'cau_hoi_id' => 168,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-11 13:27:00',
                'ngay_cap_nhat' => '2024-10-11 13:27:00',
            ),
            96 => 
            array (
                'id' => 597,
                'cau_hoi_id' => 168,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-11 13:27:00',
                'ngay_cap_nhat' => '2024-10-11 13:27:00',
            ),
            97 => 
            array (
                'id' => 598,
                'cau_hoi_id' => 168,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-11 13:27:00',
                'ngay_cap_nhat' => '2024-10-11 13:27:00',
            ),
            98 => 
            array (
                'id' => 599,
                'cau_hoi_id' => 169,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-06 11:59:00',
                'ngay_cap_nhat' => '2024-03-06 11:59:00',
            ),
            99 => 
            array (
                'id' => 600,
                'cau_hoi_id' => 169,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-06 11:59:00',
                'ngay_cap_nhat' => '2024-03-06 11:59:00',
            ),
            100 => 
            array (
                'id' => 601,
                'cau_hoi_id' => 169,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-06 11:59:00',
                'ngay_cap_nhat' => '2024-03-06 11:59:00',
            ),
            101 => 
            array (
                'id' => 602,
                'cau_hoi_id' => 169,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-06 11:59:00',
                'ngay_cap_nhat' => '2024-03-06 11:59:00',
            ),
            102 => 
            array (
                'id' => 603,
                'cau_hoi_id' => 170,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-10 06:55:00',
                'ngay_cap_nhat' => '2025-04-10 06:55:00',
            ),
            103 => 
            array (
                'id' => 604,
                'cau_hoi_id' => 170,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-10 06:55:00',
                'ngay_cap_nhat' => '2025-04-10 06:55:00',
            ),
            104 => 
            array (
                'id' => 605,
                'cau_hoi_id' => 170,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-10 06:55:00',
                'ngay_cap_nhat' => '2025-04-10 06:55:00',
            ),
            105 => 
            array (
                'id' => 606,
                'cau_hoi_id' => 170,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-10 06:55:00',
                'ngay_cap_nhat' => '2025-04-10 06:55:00',
            ),
            106 => 
            array (
                'id' => 607,
                'cau_hoi_id' => 171,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-02 07:56:00',
                'ngay_cap_nhat' => '2024-12-02 07:56:00',
            ),
            107 => 
            array (
                'id' => 608,
                'cau_hoi_id' => 171,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-02 07:56:00',
                'ngay_cap_nhat' => '2024-12-02 07:56:00',
            ),
            108 => 
            array (
                'id' => 609,
                'cau_hoi_id' => 171,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-02 07:56:00',
                'ngay_cap_nhat' => '2024-12-02 07:56:00',
            ),
            109 => 
            array (
                'id' => 610,
                'cau_hoi_id' => 171,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-02 07:56:00',
                'ngay_cap_nhat' => '2024-12-02 07:56:00',
            ),
            110 => 
            array (
                'id' => 611,
                'cau_hoi_id' => 172,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-06-08 19:10:00',
                'ngay_cap_nhat' => '2026-06-08 19:10:00',
            ),
            111 => 
            array (
                'id' => 612,
                'cau_hoi_id' => 172,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-06-08 19:10:00',
                'ngay_cap_nhat' => '2026-06-08 19:10:00',
            ),
            112 => 
            array (
                'id' => 613,
                'cau_hoi_id' => 172,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-06-08 19:10:00',
                'ngay_cap_nhat' => '2026-06-08 19:10:00',
            ),
            113 => 
            array (
                'id' => 614,
                'cau_hoi_id' => 172,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-06-08 19:10:00',
                'ngay_cap_nhat' => '2026-06-08 19:10:00',
            ),
            114 => 
            array (
                'id' => 615,
                'cau_hoi_id' => 173,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-13 13:10:00',
                'ngay_cap_nhat' => '2026-02-13 13:10:00',
            ),
            115 => 
            array (
                'id' => 616,
                'cau_hoi_id' => 173,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-13 13:10:00',
                'ngay_cap_nhat' => '2026-02-13 13:10:00',
            ),
            116 => 
            array (
                'id' => 617,
                'cau_hoi_id' => 174,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-05 07:11:00',
                'ngay_cap_nhat' => '2024-11-05 07:11:00',
            ),
            117 => 
            array (
                'id' => 618,
                'cau_hoi_id' => 174,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-05 07:11:00',
                'ngay_cap_nhat' => '2024-11-05 07:11:00',
            ),
            118 => 
            array (
                'id' => 619,
                'cau_hoi_id' => 175,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-15 12:43:00',
                'ngay_cap_nhat' => '2025-11-15 12:43:00',
            ),
            119 => 
            array (
                'id' => 620,
                'cau_hoi_id' => 175,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-15 12:43:00',
                'ngay_cap_nhat' => '2025-11-15 12:43:00',
            ),
            120 => 
            array (
                'id' => 621,
                'cau_hoi_id' => 175,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-15 12:43:00',
                'ngay_cap_nhat' => '2025-11-15 12:43:00',
            ),
            121 => 
            array (
                'id' => 622,
                'cau_hoi_id' => 175,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-15 12:43:00',
                'ngay_cap_nhat' => '2025-11-15 12:43:00',
            ),
            122 => 
            array (
                'id' => 623,
                'cau_hoi_id' => 176,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-08 20:07:00',
                'ngay_cap_nhat' => '2025-02-08 20:07:00',
            ),
            123 => 
            array (
                'id' => 624,
                'cau_hoi_id' => 176,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-08 20:07:00',
                'ngay_cap_nhat' => '2025-02-08 20:07:00',
            ),
            124 => 
            array (
                'id' => 625,
                'cau_hoi_id' => 176,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-08 20:07:00',
                'ngay_cap_nhat' => '2025-02-08 20:07:00',
            ),
            125 => 
            array (
                'id' => 626,
                'cau_hoi_id' => 176,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-08 20:07:00',
                'ngay_cap_nhat' => '2025-02-08 20:07:00',
            ),
            126 => 
            array (
                'id' => 627,
                'cau_hoi_id' => 177,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-19 17:19:00',
                'ngay_cap_nhat' => '2025-05-19 17:19:00',
            ),
            127 => 
            array (
                'id' => 628,
                'cau_hoi_id' => 177,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-19 17:19:00',
                'ngay_cap_nhat' => '2025-05-19 17:19:00',
            ),
            128 => 
            array (
                'id' => 629,
                'cau_hoi_id' => 177,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-19 17:19:00',
                'ngay_cap_nhat' => '2025-05-19 17:19:00',
            ),
            129 => 
            array (
                'id' => 630,
                'cau_hoi_id' => 177,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-19 17:19:00',
                'ngay_cap_nhat' => '2025-05-19 17:19:00',
            ),
            130 => 
            array (
                'id' => 631,
                'cau_hoi_id' => 178,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-31 05:12:00',
                'ngay_cap_nhat' => '2025-07-31 05:12:00',
            ),
            131 => 
            array (
                'id' => 632,
                'cau_hoi_id' => 178,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-31 05:12:00',
                'ngay_cap_nhat' => '2025-07-31 05:12:00',
            ),
            132 => 
            array (
                'id' => 633,
                'cau_hoi_id' => 178,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-07-31 05:12:00',
                'ngay_cap_nhat' => '2025-07-31 05:12:00',
            ),
            133 => 
            array (
                'id' => 634,
                'cau_hoi_id' => 178,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-07-31 05:12:00',
                'ngay_cap_nhat' => '2025-07-31 05:12:00',
            ),
            134 => 
            array (
                'id' => 635,
                'cau_hoi_id' => 179,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-16 23:38:00',
                'ngay_cap_nhat' => '2025-06-16 23:38:00',
            ),
            135 => 
            array (
                'id' => 636,
                'cau_hoi_id' => 179,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-16 23:38:00',
                'ngay_cap_nhat' => '2025-06-16 23:38:00',
            ),
            136 => 
            array (
                'id' => 637,
                'cau_hoi_id' => 179,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-16 23:38:00',
                'ngay_cap_nhat' => '2025-06-16 23:38:00',
            ),
            137 => 
            array (
                'id' => 638,
                'cau_hoi_id' => 179,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-16 23:38:00',
                'ngay_cap_nhat' => '2025-06-16 23:38:00',
            ),
            138 => 
            array (
                'id' => 639,
                'cau_hoi_id' => 180,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-07 15:24:00',
                'ngay_cap_nhat' => '2025-07-07 15:24:00',
            ),
            139 => 
            array (
                'id' => 640,
                'cau_hoi_id' => 180,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-07 15:24:00',
                'ngay_cap_nhat' => '2025-07-07 15:24:00',
            ),
            140 => 
            array (
                'id' => 641,
                'cau_hoi_id' => 180,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-07-07 15:24:00',
                'ngay_cap_nhat' => '2025-07-07 15:24:00',
            ),
            141 => 
            array (
                'id' => 642,
                'cau_hoi_id' => 180,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-07-07 15:24:00',
                'ngay_cap_nhat' => '2025-07-07 15:24:00',
            ),
            142 => 
            array (
                'id' => 643,
                'cau_hoi_id' => 181,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-11 17:33:00',
                'ngay_cap_nhat' => '2025-12-11 17:33:00',
            ),
            143 => 
            array (
                'id' => 644,
                'cau_hoi_id' => 181,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-11 17:33:00',
                'ngay_cap_nhat' => '2025-12-11 17:33:00',
            ),
            144 => 
            array (
                'id' => 645,
                'cau_hoi_id' => 181,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-12-11 17:33:00',
                'ngay_cap_nhat' => '2025-12-11 17:33:00',
            ),
            145 => 
            array (
                'id' => 646,
                'cau_hoi_id' => 181,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-12-11 17:33:00',
                'ngay_cap_nhat' => '2025-12-11 17:33:00',
            ),
            146 => 
            array (
                'id' => 647,
                'cau_hoi_id' => 182,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-12 14:26:00',
                'ngay_cap_nhat' => '2025-11-12 14:26:00',
            ),
            147 => 
            array (
                'id' => 648,
                'cau_hoi_id' => 182,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-12 14:26:00',
                'ngay_cap_nhat' => '2025-11-12 14:26:00',
            ),
            148 => 
            array (
                'id' => 649,
                'cau_hoi_id' => 182,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-12 14:26:00',
                'ngay_cap_nhat' => '2025-11-12 14:26:00',
            ),
            149 => 
            array (
                'id' => 650,
                'cau_hoi_id' => 182,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-12 14:26:00',
                'ngay_cap_nhat' => '2025-11-12 14:26:00',
            ),
            150 => 
            array (
                'id' => 651,
                'cau_hoi_id' => 183,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-04 18:54:00',
                'ngay_cap_nhat' => '2025-05-04 18:54:00',
            ),
            151 => 
            array (
                'id' => 652,
                'cau_hoi_id' => 183,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-04 18:54:00',
                'ngay_cap_nhat' => '2025-05-04 18:54:00',
            ),
            152 => 
            array (
                'id' => 653,
                'cau_hoi_id' => 183,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-04 18:54:00',
                'ngay_cap_nhat' => '2025-05-04 18:54:00',
            ),
            153 => 
            array (
                'id' => 654,
                'cau_hoi_id' => 183,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-04 18:54:00',
                'ngay_cap_nhat' => '2025-05-04 18:54:00',
            ),
            154 => 
            array (
                'id' => 655,
                'cau_hoi_id' => 184,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-23 21:01:00',
                'ngay_cap_nhat' => '2026-03-23 21:01:00',
            ),
            155 => 
            array (
                'id' => 656,
                'cau_hoi_id' => 184,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-23 21:01:00',
                'ngay_cap_nhat' => '2026-03-23 21:01:00',
            ),
            156 => 
            array (
                'id' => 657,
                'cau_hoi_id' => 185,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-05 12:23:00',
                'ngay_cap_nhat' => '2025-04-05 12:23:00',
            ),
            157 => 
            array (
                'id' => 658,
                'cau_hoi_id' => 185,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-05 12:23:00',
                'ngay_cap_nhat' => '2025-04-05 12:23:00',
            ),
            158 => 
            array (
                'id' => 659,
                'cau_hoi_id' => 185,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-05 12:23:00',
                'ngay_cap_nhat' => '2025-04-05 12:23:00',
            ),
            159 => 
            array (
                'id' => 660,
                'cau_hoi_id' => 185,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-05 12:23:00',
                'ngay_cap_nhat' => '2025-04-05 12:23:00',
            ),
            160 => 
            array (
                'id' => 661,
                'cau_hoi_id' => 186,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-05 04:20:00',
                'ngay_cap_nhat' => '2024-06-05 04:20:00',
            ),
            161 => 
            array (
                'id' => 662,
                'cau_hoi_id' => 186,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-05 04:20:00',
                'ngay_cap_nhat' => '2024-06-05 04:20:00',
            ),
            162 => 
            array (
                'id' => 663,
                'cau_hoi_id' => 186,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-05 04:20:00',
                'ngay_cap_nhat' => '2024-06-05 04:20:00',
            ),
            163 => 
            array (
                'id' => 664,
                'cau_hoi_id' => 186,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-05 04:20:00',
                'ngay_cap_nhat' => '2024-06-05 04:20:00',
            ),
            164 => 
            array (
                'id' => 665,
                'cau_hoi_id' => 187,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-05 21:27:00',
                'ngay_cap_nhat' => '2024-12-05 21:27:00',
            ),
            165 => 
            array (
                'id' => 666,
                'cau_hoi_id' => 187,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-05 21:27:00',
                'ngay_cap_nhat' => '2024-12-05 21:27:00',
            ),
            166 => 
            array (
                'id' => 667,
                'cau_hoi_id' => 187,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-05 21:27:00',
                'ngay_cap_nhat' => '2024-12-05 21:27:00',
            ),
            167 => 
            array (
                'id' => 668,
                'cau_hoi_id' => 187,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-05 21:27:00',
                'ngay_cap_nhat' => '2024-12-05 21:27:00',
            ),
            168 => 
            array (
                'id' => 669,
                'cau_hoi_id' => 188,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-13 00:28:00',
                'ngay_cap_nhat' => '2025-11-13 00:28:00',
            ),
            169 => 
            array (
                'id' => 670,
                'cau_hoi_id' => 188,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-13 00:28:00',
                'ngay_cap_nhat' => '2025-11-13 00:28:00',
            ),
            170 => 
            array (
                'id' => 671,
                'cau_hoi_id' => 188,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-13 00:28:00',
                'ngay_cap_nhat' => '2025-11-13 00:28:00',
            ),
            171 => 
            array (
                'id' => 672,
                'cau_hoi_id' => 188,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-13 00:28:00',
                'ngay_cap_nhat' => '2025-11-13 00:28:00',
            ),
            172 => 
            array (
                'id' => 673,
                'cau_hoi_id' => 189,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-22 14:36:00',
                'ngay_cap_nhat' => '2026-04-22 14:36:00',
            ),
            173 => 
            array (
                'id' => 674,
                'cau_hoi_id' => 189,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-22 14:36:00',
                'ngay_cap_nhat' => '2026-04-22 14:36:00',
            ),
            174 => 
            array (
                'id' => 675,
                'cau_hoi_id' => 189,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-22 14:36:00',
                'ngay_cap_nhat' => '2026-04-22 14:36:00',
            ),
            175 => 
            array (
                'id' => 676,
                'cau_hoi_id' => 189,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-22 14:36:00',
                'ngay_cap_nhat' => '2026-04-22 14:36:00',
            ),
            176 => 
            array (
                'id' => 677,
                'cau_hoi_id' => 190,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-01 21:31:00',
                'ngay_cap_nhat' => '2026-02-01 21:31:00',
            ),
            177 => 
            array (
                'id' => 678,
                'cau_hoi_id' => 190,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-01 21:31:00',
                'ngay_cap_nhat' => '2026-02-01 21:31:00',
            ),
            178 => 
            array (
                'id' => 679,
                'cau_hoi_id' => 191,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-24 21:39:00',
                'ngay_cap_nhat' => '2025-02-24 21:39:00',
            ),
            179 => 
            array (
                'id' => 680,
                'cau_hoi_id' => 191,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-24 21:39:00',
                'ngay_cap_nhat' => '2025-02-24 21:39:00',
            ),
            180 => 
            array (
                'id' => 681,
                'cau_hoi_id' => 191,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-24 21:39:00',
                'ngay_cap_nhat' => '2025-02-24 21:39:00',
            ),
            181 => 
            array (
                'id' => 682,
                'cau_hoi_id' => 191,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-24 21:39:00',
                'ngay_cap_nhat' => '2025-02-24 21:39:00',
            ),
            182 => 
            array (
                'id' => 683,
                'cau_hoi_id' => 192,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-31 16:54:00',
                'ngay_cap_nhat' => '2026-05-31 16:54:00',
            ),
            183 => 
            array (
                'id' => 684,
                'cau_hoi_id' => 192,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-31 16:54:00',
                'ngay_cap_nhat' => '2026-05-31 16:54:00',
            ),
            184 => 
            array (
                'id' => 685,
                'cau_hoi_id' => 192,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-31 16:54:00',
                'ngay_cap_nhat' => '2026-05-31 16:54:00',
            ),
            185 => 
            array (
                'id' => 686,
                'cau_hoi_id' => 192,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-31 16:54:00',
                'ngay_cap_nhat' => '2026-05-31 16:54:00',
            ),
            186 => 
            array (
                'id' => 687,
                'cau_hoi_id' => 193,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-14 20:21:00',
                'ngay_cap_nhat' => '2025-08-14 20:21:00',
            ),
            187 => 
            array (
                'id' => 688,
                'cau_hoi_id' => 193,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-14 20:21:00',
                'ngay_cap_nhat' => '2025-08-14 20:21:00',
            ),
            188 => 
            array (
                'id' => 689,
                'cau_hoi_id' => 193,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-08-14 20:21:00',
                'ngay_cap_nhat' => '2025-08-14 20:21:00',
            ),
            189 => 
            array (
                'id' => 690,
                'cau_hoi_id' => 193,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-08-14 20:21:00',
                'ngay_cap_nhat' => '2025-08-14 20:21:00',
            ),
            190 => 
            array (
                'id' => 691,
                'cau_hoi_id' => 194,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-22 10:00:00',
                'ngay_cap_nhat' => '2024-12-22 10:00:00',
            ),
            191 => 
            array (
                'id' => 692,
                'cau_hoi_id' => 194,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-22 10:00:00',
                'ngay_cap_nhat' => '2024-12-22 10:00:00',
            ),
            192 => 
            array (
                'id' => 693,
                'cau_hoi_id' => 194,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-22 10:00:00',
                'ngay_cap_nhat' => '2024-12-22 10:00:00',
            ),
            193 => 
            array (
                'id' => 694,
                'cau_hoi_id' => 194,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-22 10:00:00',
                'ngay_cap_nhat' => '2024-12-22 10:00:00',
            ),
            194 => 
            array (
                'id' => 695,
                'cau_hoi_id' => 195,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-23 03:53:00',
                'ngay_cap_nhat' => '2024-08-23 03:53:00',
            ),
            195 => 
            array (
                'id' => 696,
                'cau_hoi_id' => 195,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-23 03:53:00',
                'ngay_cap_nhat' => '2024-08-23 03:53:00',
            ),
            196 => 
            array (
                'id' => 697,
                'cau_hoi_id' => 195,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-08-23 03:53:00',
                'ngay_cap_nhat' => '2024-08-23 03:53:00',
            ),
            197 => 
            array (
                'id' => 698,
                'cau_hoi_id' => 195,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-08-23 03:53:00',
                'ngay_cap_nhat' => '2024-08-23 03:53:00',
            ),
            198 => 
            array (
                'id' => 699,
                'cau_hoi_id' => 196,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-14 09:35:00',
                'ngay_cap_nhat' => '2025-04-14 09:35:00',
            ),
            199 => 
            array (
                'id' => 700,
                'cau_hoi_id' => 196,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-14 09:35:00',
                'ngay_cap_nhat' => '2025-04-14 09:35:00',
            ),
            200 => 
            array (
                'id' => 701,
                'cau_hoi_id' => 196,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-14 09:35:00',
                'ngay_cap_nhat' => '2025-04-14 09:35:00',
            ),
            201 => 
            array (
                'id' => 702,
                'cau_hoi_id' => 196,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-14 09:35:00',
                'ngay_cap_nhat' => '2025-04-14 09:35:00',
            ),
            202 => 
            array (
                'id' => 703,
                'cau_hoi_id' => 197,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-14 11:33:00',
                'ngay_cap_nhat' => '2024-11-14 11:33:00',
            ),
            203 => 
            array (
                'id' => 704,
                'cau_hoi_id' => 197,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-14 11:33:00',
                'ngay_cap_nhat' => '2024-11-14 11:33:00',
            ),
            204 => 
            array (
                'id' => 705,
                'cau_hoi_id' => 197,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-14 11:33:00',
                'ngay_cap_nhat' => '2024-11-14 11:33:00',
            ),
            205 => 
            array (
                'id' => 706,
                'cau_hoi_id' => 197,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-14 11:33:00',
                'ngay_cap_nhat' => '2024-11-14 11:33:00',
            ),
            206 => 
            array (
                'id' => 707,
                'cau_hoi_id' => 198,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-12 17:35:00',
                'ngay_cap_nhat' => '2026-01-12 17:35:00',
            ),
            207 => 
            array (
                'id' => 708,
                'cau_hoi_id' => 198,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-12 17:35:00',
                'ngay_cap_nhat' => '2026-01-12 17:35:00',
            ),
            208 => 
            array (
                'id' => 709,
                'cau_hoi_id' => 199,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-31 23:30:00',
                'ngay_cap_nhat' => '2025-10-31 23:30:00',
            ),
            209 => 
            array (
                'id' => 710,
                'cau_hoi_id' => 199,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-31 23:30:00',
                'ngay_cap_nhat' => '2025-10-31 23:30:00',
            ),
            210 => 
            array (
                'id' => 711,
                'cau_hoi_id' => 199,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-31 23:30:00',
                'ngay_cap_nhat' => '2025-10-31 23:30:00',
            ),
            211 => 
            array (
                'id' => 712,
                'cau_hoi_id' => 199,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-31 23:30:00',
                'ngay_cap_nhat' => '2025-10-31 23:30:00',
            ),
            212 => 
            array (
                'id' => 713,
                'cau_hoi_id' => 200,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-31 14:50:00',
                'ngay_cap_nhat' => '2024-07-31 14:50:00',
            ),
            213 => 
            array (
                'id' => 714,
                'cau_hoi_id' => 200,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-31 14:50:00',
                'ngay_cap_nhat' => '2024-07-31 14:50:00',
            ),
            214 => 
            array (
                'id' => 715,
                'cau_hoi_id' => 200,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-31 14:50:00',
                'ngay_cap_nhat' => '2024-07-31 14:50:00',
            ),
            215 => 
            array (
                'id' => 716,
                'cau_hoi_id' => 200,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-31 14:50:00',
                'ngay_cap_nhat' => '2024-07-31 14:50:00',
            ),
            216 => 
            array (
                'id' => 717,
                'cau_hoi_id' => 201,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-25 11:46:00',
                'ngay_cap_nhat' => '2026-01-25 11:46:00',
            ),
            217 => 
            array (
                'id' => 718,
                'cau_hoi_id' => 201,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-25 11:46:00',
                'ngay_cap_nhat' => '2026-01-25 11:46:00',
            ),
            218 => 
            array (
                'id' => 719,
                'cau_hoi_id' => 201,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-25 11:46:00',
                'ngay_cap_nhat' => '2026-01-25 11:46:00',
            ),
            219 => 
            array (
                'id' => 720,
                'cau_hoi_id' => 201,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-25 11:46:00',
                'ngay_cap_nhat' => '2026-01-25 11:46:00',
            ),
            220 => 
            array (
                'id' => 721,
                'cau_hoi_id' => 202,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-02 12:18:00',
                'ngay_cap_nhat' => '2025-03-02 12:18:00',
            ),
            221 => 
            array (
                'id' => 722,
                'cau_hoi_id' => 202,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-02 12:18:00',
                'ngay_cap_nhat' => '2025-03-02 12:18:00',
            ),
            222 => 
            array (
                'id' => 723,
                'cau_hoi_id' => 202,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-03-02 12:18:00',
                'ngay_cap_nhat' => '2025-03-02 12:18:00',
            ),
            223 => 
            array (
                'id' => 724,
                'cau_hoi_id' => 202,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-03-02 12:18:00',
                'ngay_cap_nhat' => '2025-03-02 12:18:00',
            ),
            224 => 
            array (
                'id' => 725,
                'cau_hoi_id' => 203,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-10 09:27:00',
                'ngay_cap_nhat' => '2026-01-10 09:27:00',
            ),
            225 => 
            array (
                'id' => 726,
                'cau_hoi_id' => 203,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-10 09:27:00',
                'ngay_cap_nhat' => '2026-01-10 09:27:00',
            ),
            226 => 
            array (
                'id' => 727,
                'cau_hoi_id' => 204,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-19 15:58:00',
                'ngay_cap_nhat' => '2026-04-19 15:58:00',
            ),
            227 => 
            array (
                'id' => 728,
                'cau_hoi_id' => 204,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-19 15:58:00',
                'ngay_cap_nhat' => '2026-04-19 15:58:00',
            ),
            228 => 
            array (
                'id' => 729,
                'cau_hoi_id' => 204,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-19 15:58:00',
                'ngay_cap_nhat' => '2026-04-19 15:58:00',
            ),
            229 => 
            array (
                'id' => 730,
                'cau_hoi_id' => 204,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-19 15:58:00',
                'ngay_cap_nhat' => '2026-04-19 15:58:00',
            ),
            230 => 
            array (
                'id' => 731,
                'cau_hoi_id' => 205,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-29 20:51:00',
                'ngay_cap_nhat' => '2025-04-29 20:51:00',
            ),
            231 => 
            array (
                'id' => 732,
                'cau_hoi_id' => 205,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-29 20:51:00',
                'ngay_cap_nhat' => '2025-04-29 20:51:00',
            ),
            232 => 
            array (
                'id' => 733,
                'cau_hoi_id' => 206,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-24 20:48:00',
                'ngay_cap_nhat' => '2024-06-24 20:48:00',
            ),
            233 => 
            array (
                'id' => 734,
                'cau_hoi_id' => 206,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-24 20:48:00',
                'ngay_cap_nhat' => '2024-06-24 20:48:00',
            ),
            234 => 
            array (
                'id' => 735,
                'cau_hoi_id' => 206,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-24 20:48:00',
                'ngay_cap_nhat' => '2024-06-24 20:48:00',
            ),
            235 => 
            array (
                'id' => 736,
                'cau_hoi_id' => 206,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-24 20:48:00',
                'ngay_cap_nhat' => '2024-06-24 20:48:00',
            ),
            236 => 
            array (
                'id' => 737,
                'cau_hoi_id' => 207,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-03 09:19:00',
                'ngay_cap_nhat' => '2024-12-03 09:19:00',
            ),
            237 => 
            array (
                'id' => 738,
                'cau_hoi_id' => 207,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-03 09:19:00',
                'ngay_cap_nhat' => '2024-12-03 09:19:00',
            ),
            238 => 
            array (
                'id' => 739,
                'cau_hoi_id' => 207,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-03 09:19:00',
                'ngay_cap_nhat' => '2024-12-03 09:19:00',
            ),
            239 => 
            array (
                'id' => 740,
                'cau_hoi_id' => 207,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-03 09:19:00',
                'ngay_cap_nhat' => '2024-12-03 09:19:00',
            ),
            240 => 
            array (
                'id' => 741,
                'cau_hoi_id' => 208,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-11 10:27:00',
                'ngay_cap_nhat' => '2026-01-11 10:27:00',
            ),
            241 => 
            array (
                'id' => 742,
                'cau_hoi_id' => 208,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-11 10:27:00',
                'ngay_cap_nhat' => '2026-01-11 10:27:00',
            ),
            242 => 
            array (
                'id' => 743,
                'cau_hoi_id' => 209,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-16 09:02:00',
                'ngay_cap_nhat' => '2024-08-16 09:02:00',
            ),
            243 => 
            array (
                'id' => 744,
                'cau_hoi_id' => 209,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-16 09:02:00',
                'ngay_cap_nhat' => '2024-08-16 09:02:00',
            ),
            244 => 
            array (
                'id' => 745,
                'cau_hoi_id' => 210,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-16 04:07:00',
                'ngay_cap_nhat' => '2026-05-16 04:07:00',
            ),
            245 => 
            array (
                'id' => 746,
                'cau_hoi_id' => 210,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-16 04:07:00',
                'ngay_cap_nhat' => '2026-05-16 04:07:00',
            ),
            246 => 
            array (
                'id' => 747,
                'cau_hoi_id' => 211,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-16 19:27:00',
                'ngay_cap_nhat' => '2025-11-16 19:27:00',
            ),
            247 => 
            array (
                'id' => 748,
                'cau_hoi_id' => 211,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-16 19:27:00',
                'ngay_cap_nhat' => '2025-11-16 19:27:00',
            ),
            248 => 
            array (
                'id' => 749,
                'cau_hoi_id' => 211,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-16 19:27:00',
                'ngay_cap_nhat' => '2025-11-16 19:27:00',
            ),
            249 => 
            array (
                'id' => 750,
                'cau_hoi_id' => 211,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-16 19:27:00',
                'ngay_cap_nhat' => '2025-11-16 19:27:00',
            ),
            250 => 
            array (
                'id' => 751,
                'cau_hoi_id' => 212,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-09 10:15:00',
                'ngay_cap_nhat' => '2024-03-09 10:15:00',
            ),
            251 => 
            array (
                'id' => 752,
                'cau_hoi_id' => 212,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-09 10:15:00',
                'ngay_cap_nhat' => '2024-03-09 10:15:00',
            ),
            252 => 
            array (
                'id' => 753,
                'cau_hoi_id' => 212,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-09 10:15:00',
                'ngay_cap_nhat' => '2024-03-09 10:15:00',
            ),
            253 => 
            array (
                'id' => 754,
                'cau_hoi_id' => 212,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-09 10:15:00',
                'ngay_cap_nhat' => '2024-03-09 10:15:00',
            ),
            254 => 
            array (
                'id' => 755,
                'cau_hoi_id' => 213,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-09 15:57:00',
                'ngay_cap_nhat' => '2025-01-09 15:57:00',
            ),
            255 => 
            array (
                'id' => 756,
                'cau_hoi_id' => 213,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-09 15:57:00',
                'ngay_cap_nhat' => '2025-01-09 15:57:00',
            ),
            256 => 
            array (
                'id' => 757,
                'cau_hoi_id' => 213,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-09 15:57:00',
                'ngay_cap_nhat' => '2025-01-09 15:57:00',
            ),
            257 => 
            array (
                'id' => 758,
                'cau_hoi_id' => 213,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-09 15:57:00',
                'ngay_cap_nhat' => '2025-01-09 15:57:00',
            ),
            258 => 
            array (
                'id' => 759,
                'cau_hoi_id' => 214,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-22 10:10:00',
                'ngay_cap_nhat' => '2025-05-22 10:10:00',
            ),
            259 => 
            array (
                'id' => 760,
                'cau_hoi_id' => 214,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-22 10:10:00',
                'ngay_cap_nhat' => '2025-05-22 10:10:00',
            ),
            260 => 
            array (
                'id' => 761,
                'cau_hoi_id' => 214,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-22 10:10:00',
                'ngay_cap_nhat' => '2025-05-22 10:10:00',
            ),
            261 => 
            array (
                'id' => 762,
                'cau_hoi_id' => 214,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-22 10:10:00',
                'ngay_cap_nhat' => '2025-05-22 10:10:00',
            ),
            262 => 
            array (
                'id' => 763,
                'cau_hoi_id' => 215,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-23 04:18:00',
                'ngay_cap_nhat' => '2024-05-23 04:18:00',
            ),
            263 => 
            array (
                'id' => 764,
                'cau_hoi_id' => 215,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-23 04:18:00',
                'ngay_cap_nhat' => '2024-05-23 04:18:00',
            ),
            264 => 
            array (
                'id' => 765,
                'cau_hoi_id' => 215,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-05-23 04:18:00',
                'ngay_cap_nhat' => '2024-05-23 04:18:00',
            ),
            265 => 
            array (
                'id' => 766,
                'cau_hoi_id' => 215,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-05-23 04:18:00',
                'ngay_cap_nhat' => '2024-05-23 04:18:00',
            ),
            266 => 
            array (
                'id' => 767,
                'cau_hoi_id' => 216,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-01 01:00:00',
                'ngay_cap_nhat' => '2025-11-01 01:00:00',
            ),
            267 => 
            array (
                'id' => 768,
                'cau_hoi_id' => 216,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-01 01:00:00',
                'ngay_cap_nhat' => '2025-11-01 01:00:00',
            ),
            268 => 
            array (
                'id' => 769,
                'cau_hoi_id' => 216,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-01 01:00:00',
                'ngay_cap_nhat' => '2025-11-01 01:00:00',
            ),
            269 => 
            array (
                'id' => 770,
                'cau_hoi_id' => 216,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-01 01:00:00',
                'ngay_cap_nhat' => '2025-11-01 01:00:00',
            ),
            270 => 
            array (
                'id' => 771,
                'cau_hoi_id' => 217,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-09 22:49:00',
                'ngay_cap_nhat' => '2024-05-09 22:49:00',
            ),
            271 => 
            array (
                'id' => 772,
                'cau_hoi_id' => 217,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-09 22:49:00',
                'ngay_cap_nhat' => '2024-05-09 22:49:00',
            ),
            272 => 
            array (
                'id' => 773,
                'cau_hoi_id' => 217,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-05-09 22:49:00',
                'ngay_cap_nhat' => '2024-05-09 22:49:00',
            ),
            273 => 
            array (
                'id' => 774,
                'cau_hoi_id' => 217,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-05-09 22:49:00',
                'ngay_cap_nhat' => '2024-05-09 22:49:00',
            ),
            274 => 
            array (
                'id' => 775,
                'cau_hoi_id' => 218,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-08 13:49:00',
                'ngay_cap_nhat' => '2024-08-08 13:49:00',
            ),
            275 => 
            array (
                'id' => 776,
                'cau_hoi_id' => 218,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-08 13:49:00',
                'ngay_cap_nhat' => '2024-08-08 13:49:00',
            ),
            276 => 
            array (
                'id' => 777,
                'cau_hoi_id' => 219,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-18 17:20:00',
                'ngay_cap_nhat' => '2025-02-18 17:20:00',
            ),
            277 => 
            array (
                'id' => 778,
                'cau_hoi_id' => 219,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-18 17:20:00',
                'ngay_cap_nhat' => '2025-02-18 17:20:00',
            ),
            278 => 
            array (
                'id' => 779,
                'cau_hoi_id' => 219,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-18 17:20:00',
                'ngay_cap_nhat' => '2025-02-18 17:20:00',
            ),
            279 => 
            array (
                'id' => 780,
                'cau_hoi_id' => 219,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-18 17:20:00',
                'ngay_cap_nhat' => '2025-02-18 17:20:00',
            ),
            280 => 
            array (
                'id' => 781,
                'cau_hoi_id' => 220,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-20 21:19:00',
                'ngay_cap_nhat' => '2025-10-20 21:19:00',
            ),
            281 => 
            array (
                'id' => 782,
                'cau_hoi_id' => 220,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-20 21:19:00',
                'ngay_cap_nhat' => '2025-10-20 21:19:00',
            ),
            282 => 
            array (
                'id' => 783,
                'cau_hoi_id' => 220,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-20 21:19:00',
                'ngay_cap_nhat' => '2025-10-20 21:19:00',
            ),
            283 => 
            array (
                'id' => 784,
                'cau_hoi_id' => 220,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-20 21:19:00',
                'ngay_cap_nhat' => '2025-10-20 21:19:00',
            ),
            284 => 
            array (
                'id' => 785,
                'cau_hoi_id' => 221,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-27 16:20:00',
                'ngay_cap_nhat' => '2024-06-27 16:20:00',
            ),
            285 => 
            array (
                'id' => 786,
                'cau_hoi_id' => 221,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-27 16:20:00',
                'ngay_cap_nhat' => '2024-06-27 16:20:00',
            ),
            286 => 
            array (
                'id' => 787,
                'cau_hoi_id' => 221,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-27 16:20:00',
                'ngay_cap_nhat' => '2024-06-27 16:20:00',
            ),
            287 => 
            array (
                'id' => 788,
                'cau_hoi_id' => 221,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-27 16:20:00',
                'ngay_cap_nhat' => '2024-06-27 16:20:00',
            ),
            288 => 
            array (
                'id' => 789,
                'cau_hoi_id' => 222,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-26 10:58:00',
                'ngay_cap_nhat' => '2024-04-26 10:58:00',
            ),
            289 => 
            array (
                'id' => 790,
                'cau_hoi_id' => 222,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-26 10:58:00',
                'ngay_cap_nhat' => '2024-04-26 10:58:00',
            ),
            290 => 
            array (
                'id' => 791,
                'cau_hoi_id' => 223,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-10 19:05:00',
                'ngay_cap_nhat' => '2025-01-10 19:05:00',
            ),
            291 => 
            array (
                'id' => 792,
                'cau_hoi_id' => 223,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-10 19:05:00',
                'ngay_cap_nhat' => '2025-01-10 19:05:00',
            ),
            292 => 
            array (
                'id' => 793,
                'cau_hoi_id' => 223,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-10 19:05:00',
                'ngay_cap_nhat' => '2025-01-10 19:05:00',
            ),
            293 => 
            array (
                'id' => 794,
                'cau_hoi_id' => 223,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-10 19:05:00',
                'ngay_cap_nhat' => '2025-01-10 19:05:00',
            ),
            294 => 
            array (
                'id' => 795,
                'cau_hoi_id' => 224,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-22 11:40:00',
                'ngay_cap_nhat' => '2024-10-22 11:40:00',
            ),
            295 => 
            array (
                'id' => 796,
                'cau_hoi_id' => 224,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-22 11:40:00',
                'ngay_cap_nhat' => '2024-10-22 11:40:00',
            ),
            296 => 
            array (
                'id' => 797,
                'cau_hoi_id' => 224,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-22 11:40:00',
                'ngay_cap_nhat' => '2024-10-22 11:40:00',
            ),
            297 => 
            array (
                'id' => 798,
                'cau_hoi_id' => 224,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-22 11:40:00',
                'ngay_cap_nhat' => '2024-10-22 11:40:00',
            ),
            298 => 
            array (
                'id' => 799,
                'cau_hoi_id' => 225,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-18 14:07:00',
                'ngay_cap_nhat' => '2026-05-18 14:07:00',
            ),
            299 => 
            array (
                'id' => 800,
                'cau_hoi_id' => 225,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-18 14:07:00',
                'ngay_cap_nhat' => '2026-05-18 14:07:00',
            ),
            300 => 
            array (
                'id' => 801,
                'cau_hoi_id' => 225,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-18 14:07:00',
                'ngay_cap_nhat' => '2026-05-18 14:07:00',
            ),
            301 => 
            array (
                'id' => 802,
                'cau_hoi_id' => 225,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-18 14:07:00',
                'ngay_cap_nhat' => '2026-05-18 14:07:00',
            ),
            302 => 
            array (
                'id' => 803,
                'cau_hoi_id' => 226,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-05 07:31:00',
                'ngay_cap_nhat' => '2025-02-05 07:31:00',
            ),
            303 => 
            array (
                'id' => 804,
                'cau_hoi_id' => 226,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-05 07:31:00',
                'ngay_cap_nhat' => '2025-02-05 07:31:00',
            ),
            304 => 
            array (
                'id' => 805,
                'cau_hoi_id' => 226,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-05 07:31:00',
                'ngay_cap_nhat' => '2025-02-05 07:31:00',
            ),
            305 => 
            array (
                'id' => 806,
                'cau_hoi_id' => 226,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-05 07:31:00',
                'ngay_cap_nhat' => '2025-02-05 07:31:00',
            ),
            306 => 
            array (
                'id' => 807,
                'cau_hoi_id' => 227,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-09 13:05:00',
                'ngay_cap_nhat' => '2024-10-09 13:05:00',
            ),
            307 => 
            array (
                'id' => 808,
                'cau_hoi_id' => 227,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-09 13:05:00',
                'ngay_cap_nhat' => '2024-10-09 13:05:00',
            ),
            308 => 
            array (
                'id' => 809,
                'cau_hoi_id' => 227,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-09 13:05:00',
                'ngay_cap_nhat' => '2024-10-09 13:05:00',
            ),
            309 => 
            array (
                'id' => 810,
                'cau_hoi_id' => 227,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-09 13:05:00',
                'ngay_cap_nhat' => '2024-10-09 13:05:00',
            ),
            310 => 
            array (
                'id' => 811,
                'cau_hoi_id' => 228,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-08 15:32:00',
                'ngay_cap_nhat' => '2025-08-08 15:32:00',
            ),
            311 => 
            array (
                'id' => 812,
                'cau_hoi_id' => 228,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-08 15:32:00',
                'ngay_cap_nhat' => '2025-08-08 15:32:00',
            ),
            312 => 
            array (
                'id' => 813,
                'cau_hoi_id' => 229,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-09 11:50:00',
                'ngay_cap_nhat' => '2024-05-09 11:50:00',
            ),
            313 => 
            array (
                'id' => 814,
                'cau_hoi_id' => 229,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-09 11:50:00',
                'ngay_cap_nhat' => '2024-05-09 11:50:00',
            ),
            314 => 
            array (
                'id' => 815,
                'cau_hoi_id' => 229,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-05-09 11:50:00',
                'ngay_cap_nhat' => '2024-05-09 11:50:00',
            ),
            315 => 
            array (
                'id' => 816,
                'cau_hoi_id' => 229,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-05-09 11:50:00',
                'ngay_cap_nhat' => '2024-05-09 11:50:00',
            ),
            316 => 
            array (
                'id' => 817,
                'cau_hoi_id' => 230,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-20 13:11:00',
                'ngay_cap_nhat' => '2025-09-20 13:11:00',
            ),
            317 => 
            array (
                'id' => 818,
                'cau_hoi_id' => 230,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-20 13:11:00',
                'ngay_cap_nhat' => '2025-09-20 13:11:00',
            ),
            318 => 
            array (
                'id' => 819,
                'cau_hoi_id' => 230,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-09-20 13:11:00',
                'ngay_cap_nhat' => '2025-09-20 13:11:00',
            ),
            319 => 
            array (
                'id' => 820,
                'cau_hoi_id' => 230,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-09-20 13:11:00',
                'ngay_cap_nhat' => '2025-09-20 13:11:00',
            ),
            320 => 
            array (
                'id' => 821,
                'cau_hoi_id' => 231,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-07 09:26:00',
                'ngay_cap_nhat' => '2026-02-07 09:26:00',
            ),
            321 => 
            array (
                'id' => 822,
                'cau_hoi_id' => 231,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-07 09:26:00',
                'ngay_cap_nhat' => '2026-02-07 09:26:00',
            ),
            322 => 
            array (
                'id' => 823,
                'cau_hoi_id' => 231,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-02-07 09:26:00',
                'ngay_cap_nhat' => '2026-02-07 09:26:00',
            ),
            323 => 
            array (
                'id' => 824,
                'cau_hoi_id' => 231,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-02-07 09:26:00',
                'ngay_cap_nhat' => '2026-02-07 09:26:00',
            ),
            324 => 
            array (
                'id' => 825,
                'cau_hoi_id' => 232,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-21 03:32:00',
                'ngay_cap_nhat' => '2024-04-21 03:32:00',
            ),
            325 => 
            array (
                'id' => 826,
                'cau_hoi_id' => 232,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-21 03:32:00',
                'ngay_cap_nhat' => '2024-04-21 03:32:00',
            ),
            326 => 
            array (
                'id' => 827,
                'cau_hoi_id' => 233,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-10 21:30:00',
                'ngay_cap_nhat' => '2025-05-10 21:30:00',
            ),
            327 => 
            array (
                'id' => 828,
                'cau_hoi_id' => 233,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-10 21:30:00',
                'ngay_cap_nhat' => '2025-05-10 21:30:00',
            ),
            328 => 
            array (
                'id' => 829,
                'cau_hoi_id' => 233,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-10 21:30:00',
                'ngay_cap_nhat' => '2025-05-10 21:30:00',
            ),
            329 => 
            array (
                'id' => 830,
                'cau_hoi_id' => 233,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-10 21:30:00',
                'ngay_cap_nhat' => '2025-05-10 21:30:00',
            ),
            330 => 
            array (
                'id' => 831,
                'cau_hoi_id' => 234,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-23 15:28:00',
                'ngay_cap_nhat' => '2026-03-23 15:28:00',
            ),
            331 => 
            array (
                'id' => 832,
                'cau_hoi_id' => 234,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-23 15:28:00',
                'ngay_cap_nhat' => '2026-03-23 15:28:00',
            ),
            332 => 
            array (
                'id' => 833,
                'cau_hoi_id' => 235,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-28 12:37:00',
                'ngay_cap_nhat' => '2025-10-28 12:37:00',
            ),
            333 => 
            array (
                'id' => 834,
                'cau_hoi_id' => 235,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-28 12:37:00',
                'ngay_cap_nhat' => '2025-10-28 12:37:00',
            ),
            334 => 
            array (
                'id' => 835,
                'cau_hoi_id' => 236,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-16 06:52:00',
                'ngay_cap_nhat' => '2024-10-16 06:52:00',
            ),
            335 => 
            array (
                'id' => 836,
                'cau_hoi_id' => 236,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-16 06:52:00',
                'ngay_cap_nhat' => '2024-10-16 06:52:00',
            ),
            336 => 
            array (
                'id' => 837,
                'cau_hoi_id' => 236,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-16 06:52:00',
                'ngay_cap_nhat' => '2024-10-16 06:52:00',
            ),
            337 => 
            array (
                'id' => 838,
                'cau_hoi_id' => 236,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-16 06:52:00',
                'ngay_cap_nhat' => '2024-10-16 06:52:00',
            ),
            338 => 
            array (
                'id' => 839,
                'cau_hoi_id' => 237,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-22 13:16:00',
                'ngay_cap_nhat' => '2026-05-22 13:16:00',
            ),
            339 => 
            array (
                'id' => 840,
                'cau_hoi_id' => 237,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-22 13:16:00',
                'ngay_cap_nhat' => '2026-05-22 13:16:00',
            ),
            340 => 
            array (
                'id' => 841,
                'cau_hoi_id' => 238,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-23 18:37:00',
                'ngay_cap_nhat' => '2025-10-23 18:37:00',
            ),
            341 => 
            array (
                'id' => 842,
                'cau_hoi_id' => 238,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-23 18:37:00',
                'ngay_cap_nhat' => '2025-10-23 18:37:00',
            ),
            342 => 
            array (
                'id' => 843,
                'cau_hoi_id' => 238,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-23 18:37:00',
                'ngay_cap_nhat' => '2025-10-23 18:37:00',
            ),
            343 => 
            array (
                'id' => 844,
                'cau_hoi_id' => 238,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-23 18:37:00',
                'ngay_cap_nhat' => '2025-10-23 18:37:00',
            ),
            344 => 
            array (
                'id' => 845,
                'cau_hoi_id' => 239,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-20 18:01:00',
                'ngay_cap_nhat' => '2024-10-20 18:01:00',
            ),
            345 => 
            array (
                'id' => 846,
                'cau_hoi_id' => 239,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-20 18:01:00',
                'ngay_cap_nhat' => '2024-10-20 18:01:00',
            ),
            346 => 
            array (
                'id' => 847,
                'cau_hoi_id' => 239,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-20 18:01:00',
                'ngay_cap_nhat' => '2024-10-20 18:01:00',
            ),
            347 => 
            array (
                'id' => 848,
                'cau_hoi_id' => 239,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-20 18:01:00',
                'ngay_cap_nhat' => '2024-10-20 18:01:00',
            ),
            348 => 
            array (
                'id' => 849,
                'cau_hoi_id' => 240,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-30 13:42:00',
                'ngay_cap_nhat' => '2025-10-30 13:42:00',
            ),
            349 => 
            array (
                'id' => 850,
                'cau_hoi_id' => 240,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-30 13:42:00',
                'ngay_cap_nhat' => '2025-10-30 13:42:00',
            ),
            350 => 
            array (
                'id' => 851,
                'cau_hoi_id' => 240,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-30 13:42:00',
                'ngay_cap_nhat' => '2025-10-30 13:42:00',
            ),
            351 => 
            array (
                'id' => 852,
                'cau_hoi_id' => 240,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-30 13:42:00',
                'ngay_cap_nhat' => '2025-10-30 13:42:00',
            ),
            352 => 
            array (
                'id' => 853,
                'cau_hoi_id' => 241,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-09 23:32:00',
                'ngay_cap_nhat' => '2024-12-09 23:32:00',
            ),
            353 => 
            array (
                'id' => 854,
                'cau_hoi_id' => 241,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-09 23:32:00',
                'ngay_cap_nhat' => '2024-12-09 23:32:00',
            ),
            354 => 
            array (
                'id' => 855,
                'cau_hoi_id' => 241,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-09 23:32:00',
                'ngay_cap_nhat' => '2024-12-09 23:32:00',
            ),
            355 => 
            array (
                'id' => 856,
                'cau_hoi_id' => 241,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-09 23:32:00',
                'ngay_cap_nhat' => '2024-12-09 23:32:00',
            ),
            356 => 
            array (
                'id' => 857,
                'cau_hoi_id' => 242,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-31 20:45:00',
                'ngay_cap_nhat' => '2025-01-31 20:45:00',
            ),
            357 => 
            array (
                'id' => 858,
                'cau_hoi_id' => 242,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-31 20:45:00',
                'ngay_cap_nhat' => '2025-01-31 20:45:00',
            ),
            358 => 
            array (
                'id' => 859,
                'cau_hoi_id' => 242,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-31 20:45:00',
                'ngay_cap_nhat' => '2025-01-31 20:45:00',
            ),
            359 => 
            array (
                'id' => 860,
                'cau_hoi_id' => 242,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-31 20:45:00',
                'ngay_cap_nhat' => '2025-01-31 20:45:00',
            ),
            360 => 
            array (
                'id' => 861,
                'cau_hoi_id' => 243,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-25 02:28:00',
                'ngay_cap_nhat' => '2024-07-25 02:28:00',
            ),
            361 => 
            array (
                'id' => 862,
                'cau_hoi_id' => 243,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-25 02:28:00',
                'ngay_cap_nhat' => '2024-07-25 02:28:00',
            ),
            362 => 
            array (
                'id' => 863,
                'cau_hoi_id' => 243,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-25 02:28:00',
                'ngay_cap_nhat' => '2024-07-25 02:28:00',
            ),
            363 => 
            array (
                'id' => 864,
                'cau_hoi_id' => 243,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-25 02:28:00',
                'ngay_cap_nhat' => '2024-07-25 02:28:00',
            ),
            364 => 
            array (
                'id' => 865,
                'cau_hoi_id' => 244,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-24 17:12:00',
                'ngay_cap_nhat' => '2025-08-24 17:12:00',
            ),
            365 => 
            array (
                'id' => 866,
                'cau_hoi_id' => 244,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-24 17:12:00',
                'ngay_cap_nhat' => '2025-08-24 17:12:00',
            ),
            366 => 
            array (
                'id' => 867,
                'cau_hoi_id' => 244,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-08-24 17:12:00',
                'ngay_cap_nhat' => '2025-08-24 17:12:00',
            ),
            367 => 
            array (
                'id' => 868,
                'cau_hoi_id' => 244,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-08-24 17:12:00',
                'ngay_cap_nhat' => '2025-08-24 17:12:00',
            ),
            368 => 
            array (
                'id' => 869,
                'cau_hoi_id' => 245,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-24 09:58:00',
                'ngay_cap_nhat' => '2025-08-24 09:58:00',
            ),
            369 => 
            array (
                'id' => 870,
                'cau_hoi_id' => 245,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-24 09:58:00',
                'ngay_cap_nhat' => '2025-08-24 09:58:00',
            ),
            370 => 
            array (
                'id' => 871,
                'cau_hoi_id' => 245,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-08-24 09:58:00',
                'ngay_cap_nhat' => '2025-08-24 09:58:00',
            ),
            371 => 
            array (
                'id' => 872,
                'cau_hoi_id' => 245,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-08-24 09:58:00',
                'ngay_cap_nhat' => '2025-08-24 09:58:00',
            ),
            372 => 
            array (
                'id' => 873,
                'cau_hoi_id' => 246,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-18 12:33:00',
                'ngay_cap_nhat' => '2025-08-18 12:33:00',
            ),
            373 => 
            array (
                'id' => 874,
                'cau_hoi_id' => 246,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-18 12:33:00',
                'ngay_cap_nhat' => '2025-08-18 12:33:00',
            ),
            374 => 
            array (
                'id' => 875,
                'cau_hoi_id' => 247,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-03 23:13:00',
                'ngay_cap_nhat' => '2024-09-03 23:13:00',
            ),
            375 => 
            array (
                'id' => 876,
                'cau_hoi_id' => 247,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-03 23:13:00',
                'ngay_cap_nhat' => '2024-09-03 23:13:00',
            ),
            376 => 
            array (
                'id' => 877,
                'cau_hoi_id' => 247,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-03 23:13:00',
                'ngay_cap_nhat' => '2024-09-03 23:13:00',
            ),
            377 => 
            array (
                'id' => 878,
                'cau_hoi_id' => 247,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-03 23:13:00',
                'ngay_cap_nhat' => '2024-09-03 23:13:00',
            ),
            378 => 
            array (
                'id' => 879,
                'cau_hoi_id' => 248,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-13 07:39:00',
                'ngay_cap_nhat' => '2025-10-13 07:39:00',
            ),
            379 => 
            array (
                'id' => 880,
                'cau_hoi_id' => 248,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-13 07:39:00',
                'ngay_cap_nhat' => '2025-10-13 07:39:00',
            ),
            380 => 
            array (
                'id' => 881,
                'cau_hoi_id' => 248,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-13 07:39:00',
                'ngay_cap_nhat' => '2025-10-13 07:39:00',
            ),
            381 => 
            array (
                'id' => 882,
                'cau_hoi_id' => 248,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-13 07:39:00',
                'ngay_cap_nhat' => '2025-10-13 07:39:00',
            ),
            382 => 
            array (
                'id' => 883,
                'cau_hoi_id' => 249,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-26 19:42:00',
                'ngay_cap_nhat' => '2026-03-26 19:42:00',
            ),
            383 => 
            array (
                'id' => 884,
                'cau_hoi_id' => 249,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-26 19:42:00',
                'ngay_cap_nhat' => '2026-03-26 19:42:00',
            ),
            384 => 
            array (
                'id' => 885,
                'cau_hoi_id' => 249,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-03-26 19:42:00',
                'ngay_cap_nhat' => '2026-03-26 19:42:00',
            ),
            385 => 
            array (
                'id' => 886,
                'cau_hoi_id' => 249,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-03-26 19:42:00',
                'ngay_cap_nhat' => '2026-03-26 19:42:00',
            ),
            386 => 
            array (
                'id' => 887,
                'cau_hoi_id' => 250,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-18 11:20:00',
                'ngay_cap_nhat' => '2024-04-18 11:20:00',
            ),
            387 => 
            array (
                'id' => 888,
                'cau_hoi_id' => 250,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-18 11:20:00',
                'ngay_cap_nhat' => '2024-04-18 11:20:00',
            ),
            388 => 
            array (
                'id' => 889,
                'cau_hoi_id' => 251,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-10 13:37:00',
                'ngay_cap_nhat' => '2025-05-10 13:37:00',
            ),
            389 => 
            array (
                'id' => 890,
                'cau_hoi_id' => 251,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-10 13:37:00',
                'ngay_cap_nhat' => '2025-05-10 13:37:00',
            ),
            390 => 
            array (
                'id' => 891,
                'cau_hoi_id' => 251,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-10 13:37:00',
                'ngay_cap_nhat' => '2025-05-10 13:37:00',
            ),
            391 => 
            array (
                'id' => 892,
                'cau_hoi_id' => 251,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-10 13:37:00',
                'ngay_cap_nhat' => '2025-05-10 13:37:00',
            ),
            392 => 
            array (
                'id' => 893,
                'cau_hoi_id' => 252,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-30 17:48:00',
                'ngay_cap_nhat' => '2025-07-30 17:48:00',
            ),
            393 => 
            array (
                'id' => 894,
                'cau_hoi_id' => 252,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-30 17:48:00',
                'ngay_cap_nhat' => '2025-07-30 17:48:00',
            ),
            394 => 
            array (
                'id' => 895,
                'cau_hoi_id' => 252,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-07-30 17:48:00',
                'ngay_cap_nhat' => '2025-07-30 17:48:00',
            ),
            395 => 
            array (
                'id' => 896,
                'cau_hoi_id' => 252,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-07-30 17:48:00',
                'ngay_cap_nhat' => '2025-07-30 17:48:00',
            ),
            396 => 
            array (
                'id' => 897,
                'cau_hoi_id' => 253,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-09 00:47:00',
                'ngay_cap_nhat' => '2025-04-09 00:47:00',
            ),
            397 => 
            array (
                'id' => 898,
                'cau_hoi_id' => 253,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-09 00:47:00',
                'ngay_cap_nhat' => '2025-04-09 00:47:00',
            ),
            398 => 
            array (
                'id' => 899,
                'cau_hoi_id' => 253,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-09 00:47:00',
                'ngay_cap_nhat' => '2025-04-09 00:47:00',
            ),
            399 => 
            array (
                'id' => 900,
                'cau_hoi_id' => 253,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-09 00:47:00',
                'ngay_cap_nhat' => '2025-04-09 00:47:00',
            ),
            400 => 
            array (
                'id' => 901,
                'cau_hoi_id' => 254,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-10 17:08:00',
                'ngay_cap_nhat' => '2024-11-10 17:08:00',
            ),
            401 => 
            array (
                'id' => 902,
                'cau_hoi_id' => 254,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-10 17:08:00',
                'ngay_cap_nhat' => '2024-11-10 17:08:00',
            ),
            402 => 
            array (
                'id' => 903,
                'cau_hoi_id' => 254,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-10 17:08:00',
                'ngay_cap_nhat' => '2024-11-10 17:08:00',
            ),
            403 => 
            array (
                'id' => 904,
                'cau_hoi_id' => 254,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-10 17:08:00',
                'ngay_cap_nhat' => '2024-11-10 17:08:00',
            ),
            404 => 
            array (
                'id' => 905,
                'cau_hoi_id' => 255,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-03 07:46:00',
                'ngay_cap_nhat' => '2024-07-03 07:46:00',
            ),
            405 => 
            array (
                'id' => 906,
                'cau_hoi_id' => 255,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-03 07:46:00',
                'ngay_cap_nhat' => '2024-07-03 07:46:00',
            ),
            406 => 
            array (
                'id' => 907,
                'cau_hoi_id' => 255,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-03 07:46:00',
                'ngay_cap_nhat' => '2024-07-03 07:46:00',
            ),
            407 => 
            array (
                'id' => 908,
                'cau_hoi_id' => 255,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-03 07:46:00',
                'ngay_cap_nhat' => '2024-07-03 07:46:00',
            ),
            408 => 
            array (
                'id' => 909,
                'cau_hoi_id' => 256,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-05 03:02:00',
                'ngay_cap_nhat' => '2026-03-05 03:02:00',
            ),
            409 => 
            array (
                'id' => 910,
                'cau_hoi_id' => 256,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-05 03:02:00',
                'ngay_cap_nhat' => '2026-03-05 03:02:00',
            ),
            410 => 
            array (
                'id' => 911,
                'cau_hoi_id' => 256,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-03-05 03:02:00',
                'ngay_cap_nhat' => '2026-03-05 03:02:00',
            ),
            411 => 
            array (
                'id' => 912,
                'cau_hoi_id' => 256,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-03-05 03:02:00',
                'ngay_cap_nhat' => '2026-03-05 03:02:00',
            ),
            412 => 
            array (
                'id' => 913,
                'cau_hoi_id' => 257,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-16 06:25:00',
                'ngay_cap_nhat' => '2025-06-16 06:25:00',
            ),
            413 => 
            array (
                'id' => 914,
                'cau_hoi_id' => 257,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-16 06:25:00',
                'ngay_cap_nhat' => '2025-06-16 06:25:00',
            ),
            414 => 
            array (
                'id' => 915,
                'cau_hoi_id' => 257,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-16 06:25:00',
                'ngay_cap_nhat' => '2025-06-16 06:25:00',
            ),
            415 => 
            array (
                'id' => 916,
                'cau_hoi_id' => 257,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-16 06:25:00',
                'ngay_cap_nhat' => '2025-06-16 06:25:00',
            ),
            416 => 
            array (
                'id' => 917,
                'cau_hoi_id' => 258,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-15 12:08:00',
                'ngay_cap_nhat' => '2026-04-15 12:08:00',
            ),
            417 => 
            array (
                'id' => 918,
                'cau_hoi_id' => 258,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-15 12:08:00',
                'ngay_cap_nhat' => '2026-04-15 12:08:00',
            ),
            418 => 
            array (
                'id' => 919,
                'cau_hoi_id' => 258,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-15 12:08:00',
                'ngay_cap_nhat' => '2026-04-15 12:08:00',
            ),
            419 => 
            array (
                'id' => 920,
                'cau_hoi_id' => 258,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-15 12:08:00',
                'ngay_cap_nhat' => '2026-04-15 12:08:00',
            ),
            420 => 
            array (
                'id' => 921,
                'cau_hoi_id' => 259,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-07 06:22:00',
                'ngay_cap_nhat' => '2024-11-07 06:22:00',
            ),
            421 => 
            array (
                'id' => 922,
                'cau_hoi_id' => 259,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-07 06:22:00',
                'ngay_cap_nhat' => '2024-11-07 06:22:00',
            ),
            422 => 
            array (
                'id' => 923,
                'cau_hoi_id' => 260,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-01 22:00:00',
                'ngay_cap_nhat' => '2024-05-01 22:00:00',
            ),
            423 => 
            array (
                'id' => 924,
                'cau_hoi_id' => 260,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-01 22:00:00',
                'ngay_cap_nhat' => '2024-05-01 22:00:00',
            ),
            424 => 
            array (
                'id' => 925,
                'cau_hoi_id' => 260,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-05-01 22:00:00',
                'ngay_cap_nhat' => '2024-05-01 22:00:00',
            ),
            425 => 
            array (
                'id' => 926,
                'cau_hoi_id' => 260,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-05-01 22:00:00',
                'ngay_cap_nhat' => '2024-05-01 22:00:00',
            ),
            426 => 
            array (
                'id' => 927,
                'cau_hoi_id' => 261,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-09 09:28:00',
                'ngay_cap_nhat' => '2025-12-09 09:28:00',
            ),
            427 => 
            array (
                'id' => 928,
                'cau_hoi_id' => 261,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-09 09:28:00',
                'ngay_cap_nhat' => '2025-12-09 09:28:00',
            ),
            428 => 
            array (
                'id' => 929,
                'cau_hoi_id' => 261,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-12-09 09:28:00',
                'ngay_cap_nhat' => '2025-12-09 09:28:00',
            ),
            429 => 
            array (
                'id' => 930,
                'cau_hoi_id' => 261,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-12-09 09:28:00',
                'ngay_cap_nhat' => '2025-12-09 09:28:00',
            ),
            430 => 
            array (
                'id' => 931,
                'cau_hoi_id' => 262,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-01 18:31:00',
                'ngay_cap_nhat' => '2024-11-01 18:31:00',
            ),
            431 => 
            array (
                'id' => 932,
                'cau_hoi_id' => 262,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-01 18:31:00',
                'ngay_cap_nhat' => '2024-11-01 18:31:00',
            ),
            432 => 
            array (
                'id' => 933,
                'cau_hoi_id' => 263,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-19 03:06:00',
                'ngay_cap_nhat' => '2025-02-19 03:06:00',
            ),
            433 => 
            array (
                'id' => 934,
                'cau_hoi_id' => 263,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-19 03:06:00',
                'ngay_cap_nhat' => '2025-02-19 03:06:00',
            ),
            434 => 
            array (
                'id' => 935,
                'cau_hoi_id' => 263,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-19 03:06:00',
                'ngay_cap_nhat' => '2025-02-19 03:06:00',
            ),
            435 => 
            array (
                'id' => 936,
                'cau_hoi_id' => 263,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-19 03:06:00',
                'ngay_cap_nhat' => '2025-02-19 03:06:00',
            ),
            436 => 
            array (
                'id' => 937,
                'cau_hoi_id' => 264,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-16 16:58:00',
                'ngay_cap_nhat' => '2024-07-16 16:58:00',
            ),
            437 => 
            array (
                'id' => 938,
                'cau_hoi_id' => 264,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-16 16:58:00',
                'ngay_cap_nhat' => '2024-07-16 16:58:00',
            ),
            438 => 
            array (
                'id' => 939,
                'cau_hoi_id' => 264,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-16 16:58:00',
                'ngay_cap_nhat' => '2024-07-16 16:58:00',
            ),
            439 => 
            array (
                'id' => 940,
                'cau_hoi_id' => 264,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-16 16:58:00',
                'ngay_cap_nhat' => '2024-07-16 16:58:00',
            ),
            440 => 
            array (
                'id' => 941,
                'cau_hoi_id' => 265,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-09 19:26:00',
                'ngay_cap_nhat' => '2025-09-09 19:26:00',
            ),
            441 => 
            array (
                'id' => 942,
                'cau_hoi_id' => 265,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-09 19:26:00',
                'ngay_cap_nhat' => '2025-09-09 19:26:00',
            ),
            442 => 
            array (
                'id' => 943,
                'cau_hoi_id' => 265,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-09-09 19:26:00',
                'ngay_cap_nhat' => '2025-09-09 19:26:00',
            ),
            443 => 
            array (
                'id' => 944,
                'cau_hoi_id' => 265,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-09-09 19:26:00',
                'ngay_cap_nhat' => '2025-09-09 19:26:00',
            ),
            444 => 
            array (
                'id' => 945,
                'cau_hoi_id' => 266,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-28 05:33:00',
                'ngay_cap_nhat' => '2024-12-28 05:33:00',
            ),
            445 => 
            array (
                'id' => 946,
                'cau_hoi_id' => 266,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-28 05:33:00',
                'ngay_cap_nhat' => '2024-12-28 05:33:00',
            ),
            446 => 
            array (
                'id' => 947,
                'cau_hoi_id' => 266,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-28 05:33:00',
                'ngay_cap_nhat' => '2024-12-28 05:33:00',
            ),
            447 => 
            array (
                'id' => 948,
                'cau_hoi_id' => 266,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-28 05:33:00',
                'ngay_cap_nhat' => '2024-12-28 05:33:00',
            ),
            448 => 
            array (
                'id' => 949,
                'cau_hoi_id' => 267,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-05 03:39:00',
                'ngay_cap_nhat' => '2024-04-05 03:39:00',
            ),
            449 => 
            array (
                'id' => 950,
                'cau_hoi_id' => 267,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-05 03:39:00',
                'ngay_cap_nhat' => '2024-04-05 03:39:00',
            ),
            450 => 
            array (
                'id' => 951,
                'cau_hoi_id' => 268,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-10 06:21:00',
                'ngay_cap_nhat' => '2025-12-10 06:21:00',
            ),
            451 => 
            array (
                'id' => 952,
                'cau_hoi_id' => 268,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-10 06:21:00',
                'ngay_cap_nhat' => '2025-12-10 06:21:00',
            ),
            452 => 
            array (
                'id' => 953,
                'cau_hoi_id' => 269,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-27 01:23:00',
                'ngay_cap_nhat' => '2024-11-27 01:23:00',
            ),
            453 => 
            array (
                'id' => 954,
                'cau_hoi_id' => 269,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-27 01:23:00',
                'ngay_cap_nhat' => '2024-11-27 01:23:00',
            ),
            454 => 
            array (
                'id' => 955,
                'cau_hoi_id' => 269,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-27 01:23:00',
                'ngay_cap_nhat' => '2024-11-27 01:23:00',
            ),
            455 => 
            array (
                'id' => 956,
                'cau_hoi_id' => 269,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-27 01:23:00',
                'ngay_cap_nhat' => '2024-11-27 01:23:00',
            ),
            456 => 
            array (
                'id' => 957,
                'cau_hoi_id' => 270,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-26 04:31:00',
                'ngay_cap_nhat' => '2024-11-26 04:31:00',
            ),
            457 => 
            array (
                'id' => 958,
                'cau_hoi_id' => 270,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-26 04:31:00',
                'ngay_cap_nhat' => '2024-11-26 04:31:00',
            ),
            458 => 
            array (
                'id' => 959,
                'cau_hoi_id' => 270,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-26 04:31:00',
                'ngay_cap_nhat' => '2024-11-26 04:31:00',
            ),
            459 => 
            array (
                'id' => 960,
                'cau_hoi_id' => 270,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-26 04:31:00',
                'ngay_cap_nhat' => '2024-11-26 04:31:00',
            ),
            460 => 
            array (
                'id' => 961,
                'cau_hoi_id' => 271,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-09 08:43:00',
                'ngay_cap_nhat' => '2025-12-09 08:43:00',
            ),
            461 => 
            array (
                'id' => 962,
                'cau_hoi_id' => 271,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-09 08:43:00',
                'ngay_cap_nhat' => '2025-12-09 08:43:00',
            ),
            462 => 
            array (
                'id' => 963,
                'cau_hoi_id' => 271,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-12-09 08:43:00',
                'ngay_cap_nhat' => '2025-12-09 08:43:00',
            ),
            463 => 
            array (
                'id' => 964,
                'cau_hoi_id' => 271,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-12-09 08:43:00',
                'ngay_cap_nhat' => '2025-12-09 08:43:00',
            ),
            464 => 
            array (
                'id' => 965,
                'cau_hoi_id' => 272,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-23 18:26:00',
                'ngay_cap_nhat' => '2024-03-23 18:26:00',
            ),
            465 => 
            array (
                'id' => 966,
                'cau_hoi_id' => 272,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-23 18:26:00',
                'ngay_cap_nhat' => '2024-03-23 18:26:00',
            ),
            466 => 
            array (
                'id' => 967,
                'cau_hoi_id' => 272,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-23 18:26:00',
                'ngay_cap_nhat' => '2024-03-23 18:26:00',
            ),
            467 => 
            array (
                'id' => 968,
                'cau_hoi_id' => 272,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-23 18:26:00',
                'ngay_cap_nhat' => '2024-03-23 18:26:00',
            ),
            468 => 
            array (
                'id' => 969,
                'cau_hoi_id' => 273,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-25 05:32:00',
                'ngay_cap_nhat' => '2024-08-25 05:32:00',
            ),
            469 => 
            array (
                'id' => 970,
                'cau_hoi_id' => 273,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-25 05:32:00',
                'ngay_cap_nhat' => '2024-08-25 05:32:00',
            ),
            470 => 
            array (
                'id' => 971,
                'cau_hoi_id' => 273,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-08-25 05:32:00',
                'ngay_cap_nhat' => '2024-08-25 05:32:00',
            ),
            471 => 
            array (
                'id' => 972,
                'cau_hoi_id' => 273,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-08-25 05:32:00',
                'ngay_cap_nhat' => '2024-08-25 05:32:00',
            ),
            472 => 
            array (
                'id' => 973,
                'cau_hoi_id' => 274,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-23 22:15:00',
                'ngay_cap_nhat' => '2024-06-23 22:15:00',
            ),
            473 => 
            array (
                'id' => 974,
                'cau_hoi_id' => 274,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-23 22:15:00',
                'ngay_cap_nhat' => '2024-06-23 22:15:00',
            ),
            474 => 
            array (
                'id' => 975,
                'cau_hoi_id' => 274,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-23 22:15:00',
                'ngay_cap_nhat' => '2024-06-23 22:15:00',
            ),
            475 => 
            array (
                'id' => 976,
                'cau_hoi_id' => 274,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-23 22:15:00',
                'ngay_cap_nhat' => '2024-06-23 22:15:00',
            ),
            476 => 
            array (
                'id' => 977,
                'cau_hoi_id' => 275,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-22 20:27:00',
                'ngay_cap_nhat' => '2024-03-22 20:27:00',
            ),
            477 => 
            array (
                'id' => 978,
                'cau_hoi_id' => 275,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-22 20:27:00',
                'ngay_cap_nhat' => '2024-03-22 20:27:00',
            ),
            478 => 
            array (
                'id' => 979,
                'cau_hoi_id' => 275,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-22 20:27:00',
                'ngay_cap_nhat' => '2024-03-22 20:27:00',
            ),
            479 => 
            array (
                'id' => 980,
                'cau_hoi_id' => 275,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-22 20:27:00',
                'ngay_cap_nhat' => '2024-03-22 20:27:00',
            ),
            480 => 
            array (
                'id' => 981,
                'cau_hoi_id' => 276,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-07 06:37:00',
                'ngay_cap_nhat' => '2025-01-07 06:37:00',
            ),
            481 => 
            array (
                'id' => 982,
                'cau_hoi_id' => 276,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-07 06:37:00',
                'ngay_cap_nhat' => '2025-01-07 06:37:00',
            ),
            482 => 
            array (
                'id' => 983,
                'cau_hoi_id' => 276,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-07 06:37:00',
                'ngay_cap_nhat' => '2025-01-07 06:37:00',
            ),
            483 => 
            array (
                'id' => 984,
                'cau_hoi_id' => 276,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-07 06:37:00',
                'ngay_cap_nhat' => '2025-01-07 06:37:00',
            ),
            484 => 
            array (
                'id' => 985,
                'cau_hoi_id' => 277,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-25 14:41:00',
                'ngay_cap_nhat' => '2025-06-25 14:41:00',
            ),
            485 => 
            array (
                'id' => 986,
                'cau_hoi_id' => 277,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-25 14:41:00',
                'ngay_cap_nhat' => '2025-06-25 14:41:00',
            ),
            486 => 
            array (
                'id' => 987,
                'cau_hoi_id' => 277,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-25 14:41:00',
                'ngay_cap_nhat' => '2025-06-25 14:41:00',
            ),
            487 => 
            array (
                'id' => 988,
                'cau_hoi_id' => 277,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-25 14:41:00',
                'ngay_cap_nhat' => '2025-06-25 14:41:00',
            ),
            488 => 
            array (
                'id' => 989,
                'cau_hoi_id' => 278,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-19 09:48:00',
                'ngay_cap_nhat' => '2025-04-19 09:48:00',
            ),
            489 => 
            array (
                'id' => 990,
                'cau_hoi_id' => 278,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-19 09:48:00',
                'ngay_cap_nhat' => '2025-04-19 09:48:00',
            ),
            490 => 
            array (
                'id' => 991,
                'cau_hoi_id' => 278,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-19 09:48:00',
                'ngay_cap_nhat' => '2025-04-19 09:48:00',
            ),
            491 => 
            array (
                'id' => 992,
                'cau_hoi_id' => 278,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-19 09:48:00',
                'ngay_cap_nhat' => '2025-04-19 09:48:00',
            ),
            492 => 
            array (
                'id' => 993,
                'cau_hoi_id' => 279,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-05 00:38:00',
                'ngay_cap_nhat' => '2026-03-05 00:38:00',
            ),
            493 => 
            array (
                'id' => 994,
                'cau_hoi_id' => 279,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-05 00:38:00',
                'ngay_cap_nhat' => '2026-03-05 00:38:00',
            ),
            494 => 
            array (
                'id' => 995,
                'cau_hoi_id' => 279,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-03-05 00:38:00',
                'ngay_cap_nhat' => '2026-03-05 00:38:00',
            ),
            495 => 
            array (
                'id' => 996,
                'cau_hoi_id' => 279,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-03-05 00:38:00',
                'ngay_cap_nhat' => '2026-03-05 00:38:00',
            ),
            496 => 
            array (
                'id' => 997,
                'cau_hoi_id' => 280,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-07 17:08:00',
                'ngay_cap_nhat' => '2024-09-07 17:08:00',
            ),
            497 => 
            array (
                'id' => 998,
                'cau_hoi_id' => 280,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-07 17:08:00',
                'ngay_cap_nhat' => '2024-09-07 17:08:00',
            ),
            498 => 
            array (
                'id' => 999,
                'cau_hoi_id' => 281,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-21 08:50:00',
                'ngay_cap_nhat' => '2025-02-21 08:50:00',
            ),
            499 => 
            array (
                'id' => 1000,
                'cau_hoi_id' => 281,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-21 08:50:00',
                'ngay_cap_nhat' => '2025-02-21 08:50:00',
            ),
        ));
        \DB::table('dap_an')->insert(array (
            0 => 
            array (
                'id' => 1001,
                'cau_hoi_id' => 282,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-24 02:41:00',
                'ngay_cap_nhat' => '2024-11-24 02:41:00',
            ),
            1 => 
            array (
                'id' => 1002,
                'cau_hoi_id' => 282,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-24 02:41:00',
                'ngay_cap_nhat' => '2024-11-24 02:41:00',
            ),
            2 => 
            array (
                'id' => 1003,
                'cau_hoi_id' => 282,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-24 02:41:00',
                'ngay_cap_nhat' => '2024-11-24 02:41:00',
            ),
            3 => 
            array (
                'id' => 1004,
                'cau_hoi_id' => 282,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-24 02:41:00',
                'ngay_cap_nhat' => '2024-11-24 02:41:00',
            ),
            4 => 
            array (
                'id' => 1005,
                'cau_hoi_id' => 283,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-16 04:00:00',
                'ngay_cap_nhat' => '2025-06-16 04:00:00',
            ),
            5 => 
            array (
                'id' => 1006,
                'cau_hoi_id' => 283,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-16 04:00:00',
                'ngay_cap_nhat' => '2025-06-16 04:00:00',
            ),
            6 => 
            array (
                'id' => 1007,
                'cau_hoi_id' => 283,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-16 04:00:00',
                'ngay_cap_nhat' => '2025-06-16 04:00:00',
            ),
            7 => 
            array (
                'id' => 1008,
                'cau_hoi_id' => 283,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-16 04:00:00',
                'ngay_cap_nhat' => '2025-06-16 04:00:00',
            ),
            8 => 
            array (
                'id' => 1009,
                'cau_hoi_id' => 284,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-27 22:17:00',
                'ngay_cap_nhat' => '2025-10-27 22:17:00',
            ),
            9 => 
            array (
                'id' => 1010,
                'cau_hoi_id' => 284,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-27 22:17:00',
                'ngay_cap_nhat' => '2025-10-27 22:17:00',
            ),
            10 => 
            array (
                'id' => 1011,
                'cau_hoi_id' => 285,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-07 05:17:00',
                'ngay_cap_nhat' => '2024-10-07 05:17:00',
            ),
            11 => 
            array (
                'id' => 1012,
                'cau_hoi_id' => 285,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-07 05:17:00',
                'ngay_cap_nhat' => '2024-10-07 05:17:00',
            ),
            12 => 
            array (
                'id' => 1013,
                'cau_hoi_id' => 285,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-07 05:17:00',
                'ngay_cap_nhat' => '2024-10-07 05:17:00',
            ),
            13 => 
            array (
                'id' => 1014,
                'cau_hoi_id' => 285,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-07 05:17:00',
                'ngay_cap_nhat' => '2024-10-07 05:17:00',
            ),
            14 => 
            array (
                'id' => 1015,
                'cau_hoi_id' => 286,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-08 22:39:00',
                'ngay_cap_nhat' => '2025-07-08 22:39:00',
            ),
            15 => 
            array (
                'id' => 1016,
                'cau_hoi_id' => 286,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-08 22:39:00',
                'ngay_cap_nhat' => '2025-07-08 22:39:00',
            ),
            16 => 
            array (
                'id' => 1017,
                'cau_hoi_id' => 286,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-07-08 22:39:00',
                'ngay_cap_nhat' => '2025-07-08 22:39:00',
            ),
            17 => 
            array (
                'id' => 1018,
                'cau_hoi_id' => 286,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-07-08 22:39:00',
                'ngay_cap_nhat' => '2025-07-08 22:39:00',
            ),
            18 => 
            array (
                'id' => 1019,
                'cau_hoi_id' => 287,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-09 14:01:00',
                'ngay_cap_nhat' => '2025-09-09 14:01:00',
            ),
            19 => 
            array (
                'id' => 1020,
                'cau_hoi_id' => 287,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-09 14:01:00',
                'ngay_cap_nhat' => '2025-09-09 14:01:00',
            ),
            20 => 
            array (
                'id' => 1021,
                'cau_hoi_id' => 287,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-09-09 14:01:00',
                'ngay_cap_nhat' => '2025-09-09 14:01:00',
            ),
            21 => 
            array (
                'id' => 1022,
                'cau_hoi_id' => 287,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-09-09 14:01:00',
                'ngay_cap_nhat' => '2025-09-09 14:01:00',
            ),
            22 => 
            array (
                'id' => 1023,
                'cau_hoi_id' => 288,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-04 05:23:00',
                'ngay_cap_nhat' => '2024-09-04 05:23:00',
            ),
            23 => 
            array (
                'id' => 1024,
                'cau_hoi_id' => 288,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-04 05:23:00',
                'ngay_cap_nhat' => '2024-09-04 05:23:00',
            ),
            24 => 
            array (
                'id' => 1025,
                'cau_hoi_id' => 289,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-31 04:11:00',
                'ngay_cap_nhat' => '2024-12-31 04:11:00',
            ),
            25 => 
            array (
                'id' => 1026,
                'cau_hoi_id' => 289,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-31 04:11:00',
                'ngay_cap_nhat' => '2024-12-31 04:11:00',
            ),
            26 => 
            array (
                'id' => 1027,
                'cau_hoi_id' => 289,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-31 04:11:00',
                'ngay_cap_nhat' => '2024-12-31 04:11:00',
            ),
            27 => 
            array (
                'id' => 1028,
                'cau_hoi_id' => 289,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-31 04:11:00',
                'ngay_cap_nhat' => '2024-12-31 04:11:00',
            ),
            28 => 
            array (
                'id' => 1029,
                'cau_hoi_id' => 290,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-11 03:34:00',
                'ngay_cap_nhat' => '2024-06-11 03:34:00',
            ),
            29 => 
            array (
                'id' => 1030,
                'cau_hoi_id' => 290,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-11 03:34:00',
                'ngay_cap_nhat' => '2024-06-11 03:34:00',
            ),
            30 => 
            array (
                'id' => 1031,
                'cau_hoi_id' => 290,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-11 03:34:00',
                'ngay_cap_nhat' => '2024-06-11 03:34:00',
            ),
            31 => 
            array (
                'id' => 1032,
                'cau_hoi_id' => 290,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-11 03:34:00',
                'ngay_cap_nhat' => '2024-06-11 03:34:00',
            ),
            32 => 
            array (
                'id' => 1033,
                'cau_hoi_id' => 291,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-21 13:06:00',
                'ngay_cap_nhat' => '2025-08-21 13:06:00',
            ),
            33 => 
            array (
                'id' => 1034,
                'cau_hoi_id' => 291,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-21 13:06:00',
                'ngay_cap_nhat' => '2025-08-21 13:06:00',
            ),
            34 => 
            array (
                'id' => 1035,
                'cau_hoi_id' => 291,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-08-21 13:06:00',
                'ngay_cap_nhat' => '2025-08-21 13:06:00',
            ),
            35 => 
            array (
                'id' => 1036,
                'cau_hoi_id' => 291,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-08-21 13:06:00',
                'ngay_cap_nhat' => '2025-08-21 13:06:00',
            ),
            36 => 
            array (
                'id' => 1037,
                'cau_hoi_id' => 292,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-10 20:10:00',
                'ngay_cap_nhat' => '2026-02-10 20:10:00',
            ),
            37 => 
            array (
                'id' => 1038,
                'cau_hoi_id' => 292,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-10 20:10:00',
                'ngay_cap_nhat' => '2026-02-10 20:10:00',
            ),
            38 => 
            array (
                'id' => 1039,
                'cau_hoi_id' => 293,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-07 01:02:00',
                'ngay_cap_nhat' => '2026-05-07 01:02:00',
            ),
            39 => 
            array (
                'id' => 1040,
                'cau_hoi_id' => 293,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-07 01:02:00',
                'ngay_cap_nhat' => '2026-05-07 01:02:00',
            ),
            40 => 
            array (
                'id' => 1041,
                'cau_hoi_id' => 293,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-07 01:02:00',
                'ngay_cap_nhat' => '2026-05-07 01:02:00',
            ),
            41 => 
            array (
                'id' => 1042,
                'cau_hoi_id' => 293,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-07 01:02:00',
                'ngay_cap_nhat' => '2026-05-07 01:02:00',
            ),
            42 => 
            array (
                'id' => 1043,
                'cau_hoi_id' => 294,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-17 02:36:00',
                'ngay_cap_nhat' => '2024-07-17 02:36:00',
            ),
            43 => 
            array (
                'id' => 1044,
                'cau_hoi_id' => 294,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-17 02:36:00',
                'ngay_cap_nhat' => '2024-07-17 02:36:00',
            ),
            44 => 
            array (
                'id' => 1045,
                'cau_hoi_id' => 295,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-08 18:01:00',
                'ngay_cap_nhat' => '2025-09-08 18:01:00',
            ),
            45 => 
            array (
                'id' => 1046,
                'cau_hoi_id' => 295,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-08 18:01:00',
                'ngay_cap_nhat' => '2025-09-08 18:01:00',
            ),
            46 => 
            array (
                'id' => 1047,
                'cau_hoi_id' => 295,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-09-08 18:01:00',
                'ngay_cap_nhat' => '2025-09-08 18:01:00',
            ),
            47 => 
            array (
                'id' => 1048,
                'cau_hoi_id' => 295,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-09-08 18:01:00',
                'ngay_cap_nhat' => '2025-09-08 18:01:00',
            ),
            48 => 
            array (
                'id' => 1049,
                'cau_hoi_id' => 296,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-01 03:31:00',
                'ngay_cap_nhat' => '2024-05-01 03:31:00',
            ),
            49 => 
            array (
                'id' => 1050,
                'cau_hoi_id' => 296,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-01 03:31:00',
                'ngay_cap_nhat' => '2024-05-01 03:31:00',
            ),
            50 => 
            array (
                'id' => 1051,
                'cau_hoi_id' => 296,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-05-01 03:31:00',
                'ngay_cap_nhat' => '2024-05-01 03:31:00',
            ),
            51 => 
            array (
                'id' => 1052,
                'cau_hoi_id' => 296,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-05-01 03:31:00',
                'ngay_cap_nhat' => '2024-05-01 03:31:00',
            ),
            52 => 
            array (
                'id' => 1053,
                'cau_hoi_id' => 297,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-16 02:12:00',
                'ngay_cap_nhat' => '2025-06-16 02:12:00',
            ),
            53 => 
            array (
                'id' => 1054,
                'cau_hoi_id' => 297,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-16 02:12:00',
                'ngay_cap_nhat' => '2025-06-16 02:12:00',
            ),
            54 => 
            array (
                'id' => 1055,
                'cau_hoi_id' => 297,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-16 02:12:00',
                'ngay_cap_nhat' => '2025-06-16 02:12:00',
            ),
            55 => 
            array (
                'id' => 1056,
                'cau_hoi_id' => 297,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-16 02:12:00',
                'ngay_cap_nhat' => '2025-06-16 02:12:00',
            ),
            56 => 
            array (
                'id' => 1057,
                'cau_hoi_id' => 298,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-26 17:52:00',
                'ngay_cap_nhat' => '2024-09-26 17:52:00',
            ),
            57 => 
            array (
                'id' => 1058,
                'cau_hoi_id' => 298,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-26 17:52:00',
                'ngay_cap_nhat' => '2024-09-26 17:52:00',
            ),
            58 => 
            array (
                'id' => 1059,
                'cau_hoi_id' => 298,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-26 17:52:00',
                'ngay_cap_nhat' => '2024-09-26 17:52:00',
            ),
            59 => 
            array (
                'id' => 1060,
                'cau_hoi_id' => 298,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-26 17:52:00',
                'ngay_cap_nhat' => '2024-09-26 17:52:00',
            ),
            60 => 
            array (
                'id' => 1061,
                'cau_hoi_id' => 299,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-24 05:07:00',
                'ngay_cap_nhat' => '2024-07-24 05:07:00',
            ),
            61 => 
            array (
                'id' => 1062,
                'cau_hoi_id' => 299,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-24 05:07:00',
                'ngay_cap_nhat' => '2024-07-24 05:07:00',
            ),
            62 => 
            array (
                'id' => 1063,
                'cau_hoi_id' => 300,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-18 22:49:00',
                'ngay_cap_nhat' => '2025-01-18 22:49:00',
            ),
            63 => 
            array (
                'id' => 1064,
                'cau_hoi_id' => 300,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-18 22:49:00',
                'ngay_cap_nhat' => '2025-01-18 22:49:00',
            ),
            64 => 
            array (
                'id' => 1065,
                'cau_hoi_id' => 300,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-18 22:49:00',
                'ngay_cap_nhat' => '2025-01-18 22:49:00',
            ),
            65 => 
            array (
                'id' => 1066,
                'cau_hoi_id' => 300,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-18 22:49:00',
                'ngay_cap_nhat' => '2025-01-18 22:49:00',
            ),
            66 => 
            array (
                'id' => 1067,
                'cau_hoi_id' => 301,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-19 17:51:00',
                'ngay_cap_nhat' => '2024-08-19 17:51:00',
            ),
            67 => 
            array (
                'id' => 1068,
                'cau_hoi_id' => 301,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-19 17:51:00',
                'ngay_cap_nhat' => '2024-08-19 17:51:00',
            ),
            68 => 
            array (
                'id' => 1069,
                'cau_hoi_id' => 301,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-08-19 17:51:00',
                'ngay_cap_nhat' => '2024-08-19 17:51:00',
            ),
            69 => 
            array (
                'id' => 1070,
                'cau_hoi_id' => 301,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-08-19 17:51:00',
                'ngay_cap_nhat' => '2024-08-19 17:51:00',
            ),
            70 => 
            array (
                'id' => 1071,
                'cau_hoi_id' => 302,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-21 01:09:00',
                'ngay_cap_nhat' => '2025-04-21 01:09:00',
            ),
            71 => 
            array (
                'id' => 1072,
                'cau_hoi_id' => 302,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-21 01:09:00',
                'ngay_cap_nhat' => '2025-04-21 01:09:00',
            ),
            72 => 
            array (
                'id' => 1073,
                'cau_hoi_id' => 302,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-21 01:09:00',
                'ngay_cap_nhat' => '2025-04-21 01:09:00',
            ),
            73 => 
            array (
                'id' => 1074,
                'cau_hoi_id' => 302,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-21 01:09:00',
                'ngay_cap_nhat' => '2025-04-21 01:09:00',
            ),
            74 => 
            array (
                'id' => 1075,
                'cau_hoi_id' => 303,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-24 12:00:00',
                'ngay_cap_nhat' => '2025-12-24 12:00:00',
            ),
            75 => 
            array (
                'id' => 1076,
                'cau_hoi_id' => 303,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-24 12:00:00',
                'ngay_cap_nhat' => '2025-12-24 12:00:00',
            ),
            76 => 
            array (
                'id' => 1077,
                'cau_hoi_id' => 303,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-12-24 12:00:00',
                'ngay_cap_nhat' => '2025-12-24 12:00:00',
            ),
            77 => 
            array (
                'id' => 1078,
                'cau_hoi_id' => 303,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-12-24 12:00:00',
                'ngay_cap_nhat' => '2025-12-24 12:00:00',
            ),
            78 => 
            array (
                'id' => 1079,
                'cau_hoi_id' => 304,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-24 23:58:00',
                'ngay_cap_nhat' => '2024-07-24 23:58:00',
            ),
            79 => 
            array (
                'id' => 1080,
                'cau_hoi_id' => 304,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-24 23:58:00',
                'ngay_cap_nhat' => '2024-07-24 23:58:00',
            ),
            80 => 
            array (
                'id' => 1081,
                'cau_hoi_id' => 304,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-24 23:58:00',
                'ngay_cap_nhat' => '2024-07-24 23:58:00',
            ),
            81 => 
            array (
                'id' => 1082,
                'cau_hoi_id' => 304,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-24 23:58:00',
                'ngay_cap_nhat' => '2024-07-24 23:58:00',
            ),
            82 => 
            array (
                'id' => 1083,
                'cau_hoi_id' => 305,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-01 12:39:00',
                'ngay_cap_nhat' => '2024-09-01 12:39:00',
            ),
            83 => 
            array (
                'id' => 1084,
                'cau_hoi_id' => 305,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-01 12:39:00',
                'ngay_cap_nhat' => '2024-09-01 12:39:00',
            ),
            84 => 
            array (
                'id' => 1085,
                'cau_hoi_id' => 306,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-04 13:41:00',
                'ngay_cap_nhat' => '2024-09-04 13:41:00',
            ),
            85 => 
            array (
                'id' => 1086,
                'cau_hoi_id' => 306,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-04 13:41:00',
                'ngay_cap_nhat' => '2024-09-04 13:41:00',
            ),
            86 => 
            array (
                'id' => 1087,
                'cau_hoi_id' => 306,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-04 13:41:00',
                'ngay_cap_nhat' => '2024-09-04 13:41:00',
            ),
            87 => 
            array (
                'id' => 1088,
                'cau_hoi_id' => 306,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-04 13:41:00',
                'ngay_cap_nhat' => '2024-09-04 13:41:00',
            ),
            88 => 
            array (
                'id' => 1089,
                'cau_hoi_id' => 307,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-25 13:05:00',
                'ngay_cap_nhat' => '2025-06-25 13:05:00',
            ),
            89 => 
            array (
                'id' => 1090,
                'cau_hoi_id' => 307,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-25 13:05:00',
                'ngay_cap_nhat' => '2025-06-25 13:05:00',
            ),
            90 => 
            array (
                'id' => 1091,
                'cau_hoi_id' => 307,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-25 13:05:00',
                'ngay_cap_nhat' => '2025-06-25 13:05:00',
            ),
            91 => 
            array (
                'id' => 1092,
                'cau_hoi_id' => 307,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-25 13:05:00',
                'ngay_cap_nhat' => '2025-06-25 13:05:00',
            ),
            92 => 
            array (
                'id' => 1093,
                'cau_hoi_id' => 308,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-16 08:22:00',
                'ngay_cap_nhat' => '2024-07-16 08:22:00',
            ),
            93 => 
            array (
                'id' => 1094,
                'cau_hoi_id' => 308,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-16 08:22:00',
                'ngay_cap_nhat' => '2024-07-16 08:22:00',
            ),
            94 => 
            array (
                'id' => 1095,
                'cau_hoi_id' => 308,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-16 08:22:00',
                'ngay_cap_nhat' => '2024-07-16 08:22:00',
            ),
            95 => 
            array (
                'id' => 1096,
                'cau_hoi_id' => 308,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-16 08:22:00',
                'ngay_cap_nhat' => '2024-07-16 08:22:00',
            ),
            96 => 
            array (
                'id' => 1097,
                'cau_hoi_id' => 309,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-13 03:06:00',
                'ngay_cap_nhat' => '2024-07-13 03:06:00',
            ),
            97 => 
            array (
                'id' => 1098,
                'cau_hoi_id' => 309,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-13 03:06:00',
                'ngay_cap_nhat' => '2024-07-13 03:06:00',
            ),
            98 => 
            array (
                'id' => 1099,
                'cau_hoi_id' => 310,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-01 18:59:00',
                'ngay_cap_nhat' => '2025-09-01 18:59:00',
            ),
            99 => 
            array (
                'id' => 1100,
                'cau_hoi_id' => 310,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-01 18:59:00',
                'ngay_cap_nhat' => '2025-09-01 18:59:00',
            ),
            100 => 
            array (
                'id' => 1101,
                'cau_hoi_id' => 310,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-09-01 18:59:00',
                'ngay_cap_nhat' => '2025-09-01 18:59:00',
            ),
            101 => 
            array (
                'id' => 1102,
                'cau_hoi_id' => 310,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-09-01 18:59:00',
                'ngay_cap_nhat' => '2025-09-01 18:59:00',
            ),
            102 => 
            array (
                'id' => 1103,
                'cau_hoi_id' => 311,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-12 17:56:00',
                'ngay_cap_nhat' => '2025-11-12 17:56:00',
            ),
            103 => 
            array (
                'id' => 1104,
                'cau_hoi_id' => 311,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-12 17:56:00',
                'ngay_cap_nhat' => '2025-11-12 17:56:00',
            ),
            104 => 
            array (
                'id' => 1105,
                'cau_hoi_id' => 311,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-12 17:56:00',
                'ngay_cap_nhat' => '2025-11-12 17:56:00',
            ),
            105 => 
            array (
                'id' => 1106,
                'cau_hoi_id' => 311,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-12 17:56:00',
                'ngay_cap_nhat' => '2025-11-12 17:56:00',
            ),
            106 => 
            array (
                'id' => 1107,
                'cau_hoi_id' => 312,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-30 00:32:00',
                'ngay_cap_nhat' => '2024-04-30 00:32:00',
            ),
            107 => 
            array (
                'id' => 1108,
                'cau_hoi_id' => 312,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-30 00:32:00',
                'ngay_cap_nhat' => '2024-04-30 00:32:00',
            ),
            108 => 
            array (
                'id' => 1109,
                'cau_hoi_id' => 313,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-11 08:01:00',
                'ngay_cap_nhat' => '2025-06-11 08:01:00',
            ),
            109 => 
            array (
                'id' => 1110,
                'cau_hoi_id' => 313,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-11 08:01:00',
                'ngay_cap_nhat' => '2025-06-11 08:01:00',
            ),
            110 => 
            array (
                'id' => 1111,
                'cau_hoi_id' => 313,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-11 08:01:00',
                'ngay_cap_nhat' => '2025-06-11 08:01:00',
            ),
            111 => 
            array (
                'id' => 1112,
                'cau_hoi_id' => 313,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-11 08:01:00',
                'ngay_cap_nhat' => '2025-06-11 08:01:00',
            ),
            112 => 
            array (
                'id' => 1113,
                'cau_hoi_id' => 314,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-24 19:54:00',
                'ngay_cap_nhat' => '2024-12-24 19:54:00',
            ),
            113 => 
            array (
                'id' => 1114,
                'cau_hoi_id' => 314,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-24 19:54:00',
                'ngay_cap_nhat' => '2024-12-24 19:54:00',
            ),
            114 => 
            array (
                'id' => 1115,
                'cau_hoi_id' => 314,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-24 19:54:00',
                'ngay_cap_nhat' => '2024-12-24 19:54:00',
            ),
            115 => 
            array (
                'id' => 1116,
                'cau_hoi_id' => 314,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-24 19:54:00',
                'ngay_cap_nhat' => '2024-12-24 19:54:00',
            ),
            116 => 
            array (
                'id' => 1117,
                'cau_hoi_id' => 315,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-18 18:47:00',
                'ngay_cap_nhat' => '2025-04-18 18:47:00',
            ),
            117 => 
            array (
                'id' => 1118,
                'cau_hoi_id' => 315,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-18 18:47:00',
                'ngay_cap_nhat' => '2025-04-18 18:47:00',
            ),
            118 => 
            array (
                'id' => 1119,
                'cau_hoi_id' => 315,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-18 18:47:00',
                'ngay_cap_nhat' => '2025-04-18 18:47:00',
            ),
            119 => 
            array (
                'id' => 1120,
                'cau_hoi_id' => 315,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-18 18:47:00',
                'ngay_cap_nhat' => '2025-04-18 18:47:00',
            ),
            120 => 
            array (
                'id' => 1121,
                'cau_hoi_id' => 316,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-22 08:34:00',
                'ngay_cap_nhat' => '2024-10-22 08:34:00',
            ),
            121 => 
            array (
                'id' => 1122,
                'cau_hoi_id' => 316,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-22 08:34:00',
                'ngay_cap_nhat' => '2024-10-22 08:34:00',
            ),
            122 => 
            array (
                'id' => 1123,
                'cau_hoi_id' => 316,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-22 08:34:00',
                'ngay_cap_nhat' => '2024-10-22 08:34:00',
            ),
            123 => 
            array (
                'id' => 1124,
                'cau_hoi_id' => 316,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-22 08:34:00',
                'ngay_cap_nhat' => '2024-10-22 08:34:00',
            ),
            124 => 
            array (
                'id' => 1125,
                'cau_hoi_id' => 317,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-09 03:14:00',
                'ngay_cap_nhat' => '2024-08-09 03:14:00',
            ),
            125 => 
            array (
                'id' => 1126,
                'cau_hoi_id' => 317,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-09 03:14:00',
                'ngay_cap_nhat' => '2024-08-09 03:14:00',
            ),
            126 => 
            array (
                'id' => 1127,
                'cau_hoi_id' => 317,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-08-09 03:14:00',
                'ngay_cap_nhat' => '2024-08-09 03:14:00',
            ),
            127 => 
            array (
                'id' => 1128,
                'cau_hoi_id' => 317,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-08-09 03:14:00',
                'ngay_cap_nhat' => '2024-08-09 03:14:00',
            ),
            128 => 
            array (
                'id' => 1129,
                'cau_hoi_id' => 318,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-30 22:54:00',
                'ngay_cap_nhat' => '2024-07-30 22:54:00',
            ),
            129 => 
            array (
                'id' => 1130,
                'cau_hoi_id' => 318,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-30 22:54:00',
                'ngay_cap_nhat' => '2024-07-30 22:54:00',
            ),
            130 => 
            array (
                'id' => 1131,
                'cau_hoi_id' => 319,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-18 06:47:00',
                'ngay_cap_nhat' => '2024-08-18 06:47:00',
            ),
            131 => 
            array (
                'id' => 1132,
                'cau_hoi_id' => 319,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-18 06:47:00',
                'ngay_cap_nhat' => '2024-08-18 06:47:00',
            ),
            132 => 
            array (
                'id' => 1133,
                'cau_hoi_id' => 319,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-08-18 06:47:00',
                'ngay_cap_nhat' => '2024-08-18 06:47:00',
            ),
            133 => 
            array (
                'id' => 1134,
                'cau_hoi_id' => 319,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-08-18 06:47:00',
                'ngay_cap_nhat' => '2024-08-18 06:47:00',
            ),
            134 => 
            array (
                'id' => 1135,
                'cau_hoi_id' => 320,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-31 00:56:00',
                'ngay_cap_nhat' => '2025-01-31 00:56:00',
            ),
            135 => 
            array (
                'id' => 1136,
                'cau_hoi_id' => 320,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-31 00:56:00',
                'ngay_cap_nhat' => '2025-01-31 00:56:00',
            ),
            136 => 
            array (
                'id' => 1137,
                'cau_hoi_id' => 320,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-31 00:56:00',
                'ngay_cap_nhat' => '2025-01-31 00:56:00',
            ),
            137 => 
            array (
                'id' => 1138,
                'cau_hoi_id' => 320,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-31 00:56:00',
                'ngay_cap_nhat' => '2025-01-31 00:56:00',
            ),
            138 => 
            array (
                'id' => 1139,
                'cau_hoi_id' => 321,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-13 16:24:00',
                'ngay_cap_nhat' => '2025-09-13 16:24:00',
            ),
            139 => 
            array (
                'id' => 1140,
                'cau_hoi_id' => 321,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-13 16:24:00',
                'ngay_cap_nhat' => '2025-09-13 16:24:00',
            ),
            140 => 
            array (
                'id' => 1141,
                'cau_hoi_id' => 321,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-09-13 16:24:00',
                'ngay_cap_nhat' => '2025-09-13 16:24:00',
            ),
            141 => 
            array (
                'id' => 1142,
                'cau_hoi_id' => 321,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-09-13 16:24:00',
                'ngay_cap_nhat' => '2025-09-13 16:24:00',
            ),
            142 => 
            array (
                'id' => 1143,
                'cau_hoi_id' => 322,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-22 19:00:00',
                'ngay_cap_nhat' => '2024-06-22 19:00:00',
            ),
            143 => 
            array (
                'id' => 1144,
                'cau_hoi_id' => 322,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-22 19:00:00',
                'ngay_cap_nhat' => '2024-06-22 19:00:00',
            ),
            144 => 
            array (
                'id' => 1145,
                'cau_hoi_id' => 322,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-22 19:00:00',
                'ngay_cap_nhat' => '2024-06-22 19:00:00',
            ),
            145 => 
            array (
                'id' => 1146,
                'cau_hoi_id' => 322,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-22 19:00:00',
                'ngay_cap_nhat' => '2024-06-22 19:00:00',
            ),
            146 => 
            array (
                'id' => 1147,
                'cau_hoi_id' => 323,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-27 00:01:00',
                'ngay_cap_nhat' => '2026-05-27 00:01:00',
            ),
            147 => 
            array (
                'id' => 1148,
                'cau_hoi_id' => 323,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-27 00:01:00',
                'ngay_cap_nhat' => '2026-05-27 00:01:00',
            ),
            148 => 
            array (
                'id' => 1149,
                'cau_hoi_id' => 323,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-27 00:01:00',
                'ngay_cap_nhat' => '2026-05-27 00:01:00',
            ),
            149 => 
            array (
                'id' => 1150,
                'cau_hoi_id' => 323,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-27 00:01:00',
                'ngay_cap_nhat' => '2026-05-27 00:01:00',
            ),
            150 => 
            array (
                'id' => 1151,
                'cau_hoi_id' => 324,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-31 15:12:00',
                'ngay_cap_nhat' => '2026-01-31 15:12:00',
            ),
            151 => 
            array (
                'id' => 1152,
                'cau_hoi_id' => 324,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-31 15:12:00',
                'ngay_cap_nhat' => '2026-01-31 15:12:00',
            ),
            152 => 
            array (
                'id' => 1153,
                'cau_hoi_id' => 324,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-31 15:12:00',
                'ngay_cap_nhat' => '2026-01-31 15:12:00',
            ),
            153 => 
            array (
                'id' => 1154,
                'cau_hoi_id' => 324,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-31 15:12:00',
                'ngay_cap_nhat' => '2026-01-31 15:12:00',
            ),
            154 => 
            array (
                'id' => 1155,
                'cau_hoi_id' => 325,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-06 23:21:00',
                'ngay_cap_nhat' => '2025-09-06 23:21:00',
            ),
            155 => 
            array (
                'id' => 1156,
                'cau_hoi_id' => 325,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-06 23:21:00',
                'ngay_cap_nhat' => '2025-09-06 23:21:00',
            ),
            156 => 
            array (
                'id' => 1157,
                'cau_hoi_id' => 326,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-10 15:16:00',
                'ngay_cap_nhat' => '2025-05-10 15:16:00',
            ),
            157 => 
            array (
                'id' => 1158,
                'cau_hoi_id' => 326,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-10 15:16:00',
                'ngay_cap_nhat' => '2025-05-10 15:16:00',
            ),
            158 => 
            array (
                'id' => 1159,
                'cau_hoi_id' => 326,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-10 15:16:00',
                'ngay_cap_nhat' => '2025-05-10 15:16:00',
            ),
            159 => 
            array (
                'id' => 1160,
                'cau_hoi_id' => 326,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-10 15:16:00',
                'ngay_cap_nhat' => '2025-05-10 15:16:00',
            ),
            160 => 
            array (
                'id' => 1161,
                'cau_hoi_id' => 327,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-25 16:17:00',
                'ngay_cap_nhat' => '2025-10-25 16:17:00',
            ),
            161 => 
            array (
                'id' => 1162,
                'cau_hoi_id' => 327,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-25 16:17:00',
                'ngay_cap_nhat' => '2025-10-25 16:17:00',
            ),
            162 => 
            array (
                'id' => 1163,
                'cau_hoi_id' => 327,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-25 16:17:00',
                'ngay_cap_nhat' => '2025-10-25 16:17:00',
            ),
            163 => 
            array (
                'id' => 1164,
                'cau_hoi_id' => 327,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-25 16:17:00',
                'ngay_cap_nhat' => '2025-10-25 16:17:00',
            ),
            164 => 
            array (
                'id' => 1165,
                'cau_hoi_id' => 328,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-11 07:28:00',
                'ngay_cap_nhat' => '2026-03-11 07:28:00',
            ),
            165 => 
            array (
                'id' => 1166,
                'cau_hoi_id' => 328,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-11 07:28:00',
                'ngay_cap_nhat' => '2026-03-11 07:28:00',
            ),
            166 => 
            array (
                'id' => 1167,
                'cau_hoi_id' => 328,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-03-11 07:28:00',
                'ngay_cap_nhat' => '2026-03-11 07:28:00',
            ),
            167 => 
            array (
                'id' => 1168,
                'cau_hoi_id' => 328,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-03-11 07:28:00',
                'ngay_cap_nhat' => '2026-03-11 07:28:00',
            ),
            168 => 
            array (
                'id' => 1169,
                'cau_hoi_id' => 329,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-08 19:35:00',
                'ngay_cap_nhat' => '2026-01-08 19:35:00',
            ),
            169 => 
            array (
                'id' => 1170,
                'cau_hoi_id' => 329,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-08 19:35:00',
                'ngay_cap_nhat' => '2026-01-08 19:35:00',
            ),
            170 => 
            array (
                'id' => 1171,
                'cau_hoi_id' => 329,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-08 19:35:00',
                'ngay_cap_nhat' => '2026-01-08 19:35:00',
            ),
            171 => 
            array (
                'id' => 1172,
                'cau_hoi_id' => 329,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-08 19:35:00',
                'ngay_cap_nhat' => '2026-01-08 19:35:00',
            ),
            172 => 
            array (
                'id' => 1173,
                'cau_hoi_id' => 330,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-19 06:40:00',
                'ngay_cap_nhat' => '2024-03-19 06:40:00',
            ),
            173 => 
            array (
                'id' => 1174,
                'cau_hoi_id' => 330,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-19 06:40:00',
                'ngay_cap_nhat' => '2024-03-19 06:40:00',
            ),
            174 => 
            array (
                'id' => 1175,
                'cau_hoi_id' => 330,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-19 06:40:00',
                'ngay_cap_nhat' => '2024-03-19 06:40:00',
            ),
            175 => 
            array (
                'id' => 1176,
                'cau_hoi_id' => 330,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-19 06:40:00',
                'ngay_cap_nhat' => '2024-03-19 06:40:00',
            ),
            176 => 
            array (
                'id' => 1177,
                'cau_hoi_id' => 331,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-27 13:01:00',
                'ngay_cap_nhat' => '2025-04-27 13:01:00',
            ),
            177 => 
            array (
                'id' => 1178,
                'cau_hoi_id' => 331,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-27 13:01:00',
                'ngay_cap_nhat' => '2025-04-27 13:01:00',
            ),
            178 => 
            array (
                'id' => 1179,
                'cau_hoi_id' => 331,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-27 13:01:00',
                'ngay_cap_nhat' => '2025-04-27 13:01:00',
            ),
            179 => 
            array (
                'id' => 1180,
                'cau_hoi_id' => 331,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-27 13:01:00',
                'ngay_cap_nhat' => '2025-04-27 13:01:00',
            ),
            180 => 
            array (
                'id' => 1181,
                'cau_hoi_id' => 332,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-19 08:55:00',
                'ngay_cap_nhat' => '2026-02-19 08:55:00',
            ),
            181 => 
            array (
                'id' => 1182,
                'cau_hoi_id' => 332,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-19 08:55:00',
                'ngay_cap_nhat' => '2026-02-19 08:55:00',
            ),
            182 => 
            array (
                'id' => 1183,
                'cau_hoi_id' => 332,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-02-19 08:55:00',
                'ngay_cap_nhat' => '2026-02-19 08:55:00',
            ),
            183 => 
            array (
                'id' => 1184,
                'cau_hoi_id' => 332,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-02-19 08:55:00',
                'ngay_cap_nhat' => '2026-02-19 08:55:00',
            ),
            184 => 
            array (
                'id' => 1185,
                'cau_hoi_id' => 333,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-20 23:01:00',
                'ngay_cap_nhat' => '2025-12-20 23:01:00',
            ),
            185 => 
            array (
                'id' => 1186,
                'cau_hoi_id' => 333,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-20 23:01:00',
                'ngay_cap_nhat' => '2025-12-20 23:01:00',
            ),
            186 => 
            array (
                'id' => 1187,
                'cau_hoi_id' => 333,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-12-20 23:01:00',
                'ngay_cap_nhat' => '2025-12-20 23:01:00',
            ),
            187 => 
            array (
                'id' => 1188,
                'cau_hoi_id' => 333,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-12-20 23:01:00',
                'ngay_cap_nhat' => '2025-12-20 23:01:00',
            ),
            188 => 
            array (
                'id' => 1189,
                'cau_hoi_id' => 334,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-14 16:28:00',
                'ngay_cap_nhat' => '2024-10-14 16:28:00',
            ),
            189 => 
            array (
                'id' => 1190,
                'cau_hoi_id' => 334,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-14 16:28:00',
                'ngay_cap_nhat' => '2024-10-14 16:28:00',
            ),
            190 => 
            array (
                'id' => 1191,
                'cau_hoi_id' => 334,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-14 16:28:00',
                'ngay_cap_nhat' => '2024-10-14 16:28:00',
            ),
            191 => 
            array (
                'id' => 1192,
                'cau_hoi_id' => 334,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-14 16:28:00',
                'ngay_cap_nhat' => '2024-10-14 16:28:00',
            ),
            192 => 
            array (
                'id' => 1193,
                'cau_hoi_id' => 335,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-04 16:22:00',
                'ngay_cap_nhat' => '2024-04-04 16:22:00',
            ),
            193 => 
            array (
                'id' => 1194,
                'cau_hoi_id' => 335,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-04 16:22:00',
                'ngay_cap_nhat' => '2024-04-04 16:22:00',
            ),
            194 => 
            array (
                'id' => 1195,
                'cau_hoi_id' => 336,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-24 22:20:00',
                'ngay_cap_nhat' => '2024-11-24 22:20:00',
            ),
            195 => 
            array (
                'id' => 1196,
                'cau_hoi_id' => 336,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-24 22:20:00',
                'ngay_cap_nhat' => '2024-11-24 22:20:00',
            ),
            196 => 
            array (
                'id' => 1197,
                'cau_hoi_id' => 336,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-24 22:20:00',
                'ngay_cap_nhat' => '2024-11-24 22:20:00',
            ),
            197 => 
            array (
                'id' => 1198,
                'cau_hoi_id' => 336,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-24 22:20:00',
                'ngay_cap_nhat' => '2024-11-24 22:20:00',
            ),
            198 => 
            array (
                'id' => 1199,
                'cau_hoi_id' => 337,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-14 05:59:00',
                'ngay_cap_nhat' => '2025-01-14 05:59:00',
            ),
            199 => 
            array (
                'id' => 1200,
                'cau_hoi_id' => 337,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-14 05:59:00',
                'ngay_cap_nhat' => '2025-01-14 05:59:00',
            ),
            200 => 
            array (
                'id' => 1201,
                'cau_hoi_id' => 337,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-14 05:59:00',
                'ngay_cap_nhat' => '2025-01-14 05:59:00',
            ),
            201 => 
            array (
                'id' => 1202,
                'cau_hoi_id' => 337,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-14 05:59:00',
                'ngay_cap_nhat' => '2025-01-14 05:59:00',
            ),
            202 => 
            array (
                'id' => 1203,
                'cau_hoi_id' => 338,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-29 05:39:00',
                'ngay_cap_nhat' => '2024-05-29 05:39:00',
            ),
            203 => 
            array (
                'id' => 1204,
                'cau_hoi_id' => 338,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-29 05:39:00',
                'ngay_cap_nhat' => '2024-05-29 05:39:00',
            ),
            204 => 
            array (
                'id' => 1205,
                'cau_hoi_id' => 338,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-05-29 05:39:00',
                'ngay_cap_nhat' => '2024-05-29 05:39:00',
            ),
            205 => 
            array (
                'id' => 1206,
                'cau_hoi_id' => 338,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-05-29 05:39:00',
                'ngay_cap_nhat' => '2024-05-29 05:39:00',
            ),
            206 => 
            array (
                'id' => 1207,
                'cau_hoi_id' => 339,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-27 21:26:00',
                'ngay_cap_nhat' => '2024-06-27 21:26:00',
            ),
            207 => 
            array (
                'id' => 1208,
                'cau_hoi_id' => 339,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-27 21:26:00',
                'ngay_cap_nhat' => '2024-06-27 21:26:00',
            ),
            208 => 
            array (
                'id' => 1209,
                'cau_hoi_id' => 339,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-27 21:26:00',
                'ngay_cap_nhat' => '2024-06-27 21:26:00',
            ),
            209 => 
            array (
                'id' => 1210,
                'cau_hoi_id' => 339,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-27 21:26:00',
                'ngay_cap_nhat' => '2024-06-27 21:26:00',
            ),
            210 => 
            array (
                'id' => 1211,
                'cau_hoi_id' => 340,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-19 09:42:00',
                'ngay_cap_nhat' => '2024-03-19 09:42:00',
            ),
            211 => 
            array (
                'id' => 1212,
                'cau_hoi_id' => 340,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-19 09:42:00',
                'ngay_cap_nhat' => '2024-03-19 09:42:00',
            ),
            212 => 
            array (
                'id' => 1213,
                'cau_hoi_id' => 340,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-19 09:42:00',
                'ngay_cap_nhat' => '2024-03-19 09:42:00',
            ),
            213 => 
            array (
                'id' => 1214,
                'cau_hoi_id' => 340,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-19 09:42:00',
                'ngay_cap_nhat' => '2024-03-19 09:42:00',
            ),
            214 => 
            array (
                'id' => 1215,
                'cau_hoi_id' => 341,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-26 13:26:00',
                'ngay_cap_nhat' => '2024-11-26 13:26:00',
            ),
            215 => 
            array (
                'id' => 1216,
                'cau_hoi_id' => 341,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-26 13:26:00',
                'ngay_cap_nhat' => '2024-11-26 13:26:00',
            ),
            216 => 
            array (
                'id' => 1217,
                'cau_hoi_id' => 341,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-26 13:26:00',
                'ngay_cap_nhat' => '2024-11-26 13:26:00',
            ),
            217 => 
            array (
                'id' => 1218,
                'cau_hoi_id' => 341,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-26 13:26:00',
                'ngay_cap_nhat' => '2024-11-26 13:26:00',
            ),
            218 => 
            array (
                'id' => 1219,
                'cau_hoi_id' => 342,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-25 14:05:00',
                'ngay_cap_nhat' => '2024-07-25 14:05:00',
            ),
            219 => 
            array (
                'id' => 1220,
                'cau_hoi_id' => 342,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-25 14:05:00',
                'ngay_cap_nhat' => '2024-07-25 14:05:00',
            ),
            220 => 
            array (
                'id' => 1221,
                'cau_hoi_id' => 342,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-25 14:05:00',
                'ngay_cap_nhat' => '2024-07-25 14:05:00',
            ),
            221 => 
            array (
                'id' => 1222,
                'cau_hoi_id' => 342,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-25 14:05:00',
                'ngay_cap_nhat' => '2024-07-25 14:05:00',
            ),
            222 => 
            array (
                'id' => 1223,
                'cau_hoi_id' => 343,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-03 23:59:00',
                'ngay_cap_nhat' => '2025-10-03 23:59:00',
            ),
            223 => 
            array (
                'id' => 1224,
                'cau_hoi_id' => 343,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-03 23:59:00',
                'ngay_cap_nhat' => '2025-10-03 23:59:00',
            ),
            224 => 
            array (
                'id' => 1225,
                'cau_hoi_id' => 343,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-03 23:59:00',
                'ngay_cap_nhat' => '2025-10-03 23:59:00',
            ),
            225 => 
            array (
                'id' => 1226,
                'cau_hoi_id' => 343,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-03 23:59:00',
                'ngay_cap_nhat' => '2025-10-03 23:59:00',
            ),
            226 => 
            array (
                'id' => 1227,
                'cau_hoi_id' => 344,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-31 08:34:00',
                'ngay_cap_nhat' => '2025-12-31 08:34:00',
            ),
            227 => 
            array (
                'id' => 1228,
                'cau_hoi_id' => 344,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-31 08:34:00',
                'ngay_cap_nhat' => '2025-12-31 08:34:00',
            ),
            228 => 
            array (
                'id' => 1229,
                'cau_hoi_id' => 344,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-12-31 08:34:00',
                'ngay_cap_nhat' => '2025-12-31 08:34:00',
            ),
            229 => 
            array (
                'id' => 1230,
                'cau_hoi_id' => 344,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-12-31 08:34:00',
                'ngay_cap_nhat' => '2025-12-31 08:34:00',
            ),
            230 => 
            array (
                'id' => 1231,
                'cau_hoi_id' => 345,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-09 10:14:00',
                'ngay_cap_nhat' => '2026-04-09 10:14:00',
            ),
            231 => 
            array (
                'id' => 1232,
                'cau_hoi_id' => 345,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-09 10:14:00',
                'ngay_cap_nhat' => '2026-04-09 10:14:00',
            ),
            232 => 
            array (
                'id' => 1233,
                'cau_hoi_id' => 346,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-26 23:02:00',
                'ngay_cap_nhat' => '2025-03-26 23:02:00',
            ),
            233 => 
            array (
                'id' => 1234,
                'cau_hoi_id' => 346,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-26 23:02:00',
                'ngay_cap_nhat' => '2025-03-26 23:02:00',
            ),
            234 => 
            array (
                'id' => 1235,
                'cau_hoi_id' => 346,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-03-26 23:02:00',
                'ngay_cap_nhat' => '2025-03-26 23:02:00',
            ),
            235 => 
            array (
                'id' => 1236,
                'cau_hoi_id' => 346,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-03-26 23:02:00',
                'ngay_cap_nhat' => '2025-03-26 23:02:00',
            ),
            236 => 
            array (
                'id' => 1237,
                'cau_hoi_id' => 347,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-26 03:39:00',
                'ngay_cap_nhat' => '2024-03-26 03:39:00',
            ),
            237 => 
            array (
                'id' => 1238,
                'cau_hoi_id' => 347,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-26 03:39:00',
                'ngay_cap_nhat' => '2024-03-26 03:39:00',
            ),
            238 => 
            array (
                'id' => 1239,
                'cau_hoi_id' => 347,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-26 03:39:00',
                'ngay_cap_nhat' => '2024-03-26 03:39:00',
            ),
            239 => 
            array (
                'id' => 1240,
                'cau_hoi_id' => 347,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-26 03:39:00',
                'ngay_cap_nhat' => '2024-03-26 03:39:00',
            ),
            240 => 
            array (
                'id' => 1241,
                'cau_hoi_id' => 348,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-11 15:54:00',
                'ngay_cap_nhat' => '2025-01-11 15:54:00',
            ),
            241 => 
            array (
                'id' => 1242,
                'cau_hoi_id' => 348,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-11 15:54:00',
                'ngay_cap_nhat' => '2025-01-11 15:54:00',
            ),
            242 => 
            array (
                'id' => 1243,
                'cau_hoi_id' => 348,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-11 15:54:00',
                'ngay_cap_nhat' => '2025-01-11 15:54:00',
            ),
            243 => 
            array (
                'id' => 1244,
                'cau_hoi_id' => 348,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-11 15:54:00',
                'ngay_cap_nhat' => '2025-01-11 15:54:00',
            ),
            244 => 
            array (
                'id' => 1245,
                'cau_hoi_id' => 349,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-16 13:34:00',
                'ngay_cap_nhat' => '2025-07-16 13:34:00',
            ),
            245 => 
            array (
                'id' => 1246,
                'cau_hoi_id' => 349,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-16 13:34:00',
                'ngay_cap_nhat' => '2025-07-16 13:34:00',
            ),
            246 => 
            array (
                'id' => 1247,
                'cau_hoi_id' => 350,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-20 03:47:00',
                'ngay_cap_nhat' => '2025-01-20 03:47:00',
            ),
            247 => 
            array (
                'id' => 1248,
                'cau_hoi_id' => 350,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-20 03:47:00',
                'ngay_cap_nhat' => '2025-01-20 03:47:00',
            ),
            248 => 
            array (
                'id' => 1249,
                'cau_hoi_id' => 350,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-20 03:47:00',
                'ngay_cap_nhat' => '2025-01-20 03:47:00',
            ),
            249 => 
            array (
                'id' => 1250,
                'cau_hoi_id' => 350,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-20 03:47:00',
                'ngay_cap_nhat' => '2025-01-20 03:47:00',
            ),
            250 => 
            array (
                'id' => 1251,
                'cau_hoi_id' => 351,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-04 16:25:00',
                'ngay_cap_nhat' => '2024-03-04 16:25:00',
            ),
            251 => 
            array (
                'id' => 1252,
                'cau_hoi_id' => 351,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-04 16:25:00',
                'ngay_cap_nhat' => '2024-03-04 16:25:00',
            ),
            252 => 
            array (
                'id' => 1253,
                'cau_hoi_id' => 352,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-14 12:09:00',
                'ngay_cap_nhat' => '2026-02-14 12:09:00',
            ),
            253 => 
            array (
                'id' => 1254,
                'cau_hoi_id' => 352,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-14 12:09:00',
                'ngay_cap_nhat' => '2026-02-14 12:09:00',
            ),
            254 => 
            array (
                'id' => 1255,
                'cau_hoi_id' => 353,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-18 19:56:00',
                'ngay_cap_nhat' => '2024-05-18 19:56:00',
            ),
            255 => 
            array (
                'id' => 1256,
                'cau_hoi_id' => 353,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-18 19:56:00',
                'ngay_cap_nhat' => '2024-05-18 19:56:00',
            ),
            256 => 
            array (
                'id' => 1257,
                'cau_hoi_id' => 353,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-05-18 19:56:00',
                'ngay_cap_nhat' => '2024-05-18 19:56:00',
            ),
            257 => 
            array (
                'id' => 1258,
                'cau_hoi_id' => 353,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-05-18 19:56:00',
                'ngay_cap_nhat' => '2024-05-18 19:56:00',
            ),
            258 => 
            array (
                'id' => 1259,
                'cau_hoi_id' => 354,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-26 15:29:00',
                'ngay_cap_nhat' => '2024-12-26 15:29:00',
            ),
            259 => 
            array (
                'id' => 1260,
                'cau_hoi_id' => 354,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-26 15:29:00',
                'ngay_cap_nhat' => '2024-12-26 15:29:00',
            ),
            260 => 
            array (
                'id' => 1261,
                'cau_hoi_id' => 354,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-26 15:29:00',
                'ngay_cap_nhat' => '2024-12-26 15:29:00',
            ),
            261 => 
            array (
                'id' => 1262,
                'cau_hoi_id' => 354,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-26 15:29:00',
                'ngay_cap_nhat' => '2024-12-26 15:29:00',
            ),
            262 => 
            array (
                'id' => 1263,
                'cau_hoi_id' => 355,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-27 03:51:00',
                'ngay_cap_nhat' => '2025-04-27 03:51:00',
            ),
            263 => 
            array (
                'id' => 1264,
                'cau_hoi_id' => 355,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-27 03:51:00',
                'ngay_cap_nhat' => '2025-04-27 03:51:00',
            ),
            264 => 
            array (
                'id' => 1265,
                'cau_hoi_id' => 355,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-27 03:51:00',
                'ngay_cap_nhat' => '2025-04-27 03:51:00',
            ),
            265 => 
            array (
                'id' => 1266,
                'cau_hoi_id' => 355,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-27 03:51:00',
                'ngay_cap_nhat' => '2025-04-27 03:51:00',
            ),
            266 => 
            array (
                'id' => 1267,
                'cau_hoi_id' => 356,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-27 10:55:00',
                'ngay_cap_nhat' => '2024-10-27 10:55:00',
            ),
            267 => 
            array (
                'id' => 1268,
                'cau_hoi_id' => 356,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-27 10:55:00',
                'ngay_cap_nhat' => '2024-10-27 10:55:00',
            ),
            268 => 
            array (
                'id' => 1269,
                'cau_hoi_id' => 356,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-27 10:55:00',
                'ngay_cap_nhat' => '2024-10-27 10:55:00',
            ),
            269 => 
            array (
                'id' => 1270,
                'cau_hoi_id' => 356,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-27 10:55:00',
                'ngay_cap_nhat' => '2024-10-27 10:55:00',
            ),
            270 => 
            array (
                'id' => 1271,
                'cau_hoi_id' => 357,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-04 23:48:00',
                'ngay_cap_nhat' => '2025-05-04 23:48:00',
            ),
            271 => 
            array (
                'id' => 1272,
                'cau_hoi_id' => 357,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-04 23:48:00',
                'ngay_cap_nhat' => '2025-05-04 23:48:00',
            ),
            272 => 
            array (
                'id' => 1273,
                'cau_hoi_id' => 357,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-04 23:48:00',
                'ngay_cap_nhat' => '2025-05-04 23:48:00',
            ),
            273 => 
            array (
                'id' => 1274,
                'cau_hoi_id' => 357,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-04 23:48:00',
                'ngay_cap_nhat' => '2025-05-04 23:48:00',
            ),
            274 => 
            array (
                'id' => 1275,
                'cau_hoi_id' => 358,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-10 23:48:00',
                'ngay_cap_nhat' => '2025-11-10 23:48:00',
            ),
            275 => 
            array (
                'id' => 1276,
                'cau_hoi_id' => 358,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-10 23:48:00',
                'ngay_cap_nhat' => '2025-11-10 23:48:00',
            ),
            276 => 
            array (
                'id' => 1277,
                'cau_hoi_id' => 359,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-01 08:36:00',
                'ngay_cap_nhat' => '2025-03-01 08:36:00',
            ),
            277 => 
            array (
                'id' => 1278,
                'cau_hoi_id' => 359,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-01 08:36:00',
                'ngay_cap_nhat' => '2025-03-01 08:36:00',
            ),
            278 => 
            array (
                'id' => 1279,
                'cau_hoi_id' => 359,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-03-01 08:36:00',
                'ngay_cap_nhat' => '2025-03-01 08:36:00',
            ),
            279 => 
            array (
                'id' => 1280,
                'cau_hoi_id' => 359,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-03-01 08:36:00',
                'ngay_cap_nhat' => '2025-03-01 08:36:00',
            ),
            280 => 
            array (
                'id' => 1281,
                'cau_hoi_id' => 360,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-16 22:39:00',
                'ngay_cap_nhat' => '2026-01-16 22:39:00',
            ),
            281 => 
            array (
                'id' => 1282,
                'cau_hoi_id' => 360,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-16 22:39:00',
                'ngay_cap_nhat' => '2026-01-16 22:39:00',
            ),
            282 => 
            array (
                'id' => 1283,
                'cau_hoi_id' => 360,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-16 22:39:00',
                'ngay_cap_nhat' => '2026-01-16 22:39:00',
            ),
            283 => 
            array (
                'id' => 1284,
                'cau_hoi_id' => 360,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-16 22:39:00',
                'ngay_cap_nhat' => '2026-01-16 22:39:00',
            ),
            284 => 
            array (
                'id' => 1285,
                'cau_hoi_id' => 361,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-11 00:54:00',
                'ngay_cap_nhat' => '2024-11-11 00:54:00',
            ),
            285 => 
            array (
                'id' => 1286,
                'cau_hoi_id' => 361,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-11 00:54:00',
                'ngay_cap_nhat' => '2024-11-11 00:54:00',
            ),
            286 => 
            array (
                'id' => 1287,
                'cau_hoi_id' => 361,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-11 00:54:00',
                'ngay_cap_nhat' => '2024-11-11 00:54:00',
            ),
            287 => 
            array (
                'id' => 1288,
                'cau_hoi_id' => 361,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-11 00:54:00',
                'ngay_cap_nhat' => '2024-11-11 00:54:00',
            ),
            288 => 
            array (
                'id' => 1289,
                'cau_hoi_id' => 362,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-23 18:50:00',
                'ngay_cap_nhat' => '2026-01-23 18:50:00',
            ),
            289 => 
            array (
                'id' => 1290,
                'cau_hoi_id' => 362,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-23 18:50:00',
                'ngay_cap_nhat' => '2026-01-23 18:50:00',
            ),
            290 => 
            array (
                'id' => 1291,
                'cau_hoi_id' => 362,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-23 18:50:00',
                'ngay_cap_nhat' => '2026-01-23 18:50:00',
            ),
            291 => 
            array (
                'id' => 1292,
                'cau_hoi_id' => 362,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-23 18:50:00',
                'ngay_cap_nhat' => '2026-01-23 18:50:00',
            ),
            292 => 
            array (
                'id' => 1293,
                'cau_hoi_id' => 363,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-30 13:34:00',
                'ngay_cap_nhat' => '2026-05-30 13:34:00',
            ),
            293 => 
            array (
                'id' => 1294,
                'cau_hoi_id' => 363,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-30 13:34:00',
                'ngay_cap_nhat' => '2026-05-30 13:34:00',
            ),
            294 => 
            array (
                'id' => 1295,
                'cau_hoi_id' => 363,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-30 13:34:00',
                'ngay_cap_nhat' => '2026-05-30 13:34:00',
            ),
            295 => 
            array (
                'id' => 1296,
                'cau_hoi_id' => 363,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-30 13:34:00',
                'ngay_cap_nhat' => '2026-05-30 13:34:00',
            ),
            296 => 
            array (
                'id' => 1297,
                'cau_hoi_id' => 364,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-14 05:05:00',
                'ngay_cap_nhat' => '2024-04-14 05:05:00',
            ),
            297 => 
            array (
                'id' => 1298,
                'cau_hoi_id' => 364,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-14 05:05:00',
                'ngay_cap_nhat' => '2024-04-14 05:05:00',
            ),
            298 => 
            array (
                'id' => 1299,
                'cau_hoi_id' => 364,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-04-14 05:05:00',
                'ngay_cap_nhat' => '2024-04-14 05:05:00',
            ),
            299 => 
            array (
                'id' => 1300,
                'cau_hoi_id' => 364,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-04-14 05:05:00',
                'ngay_cap_nhat' => '2024-04-14 05:05:00',
            ),
            300 => 
            array (
                'id' => 1301,
                'cau_hoi_id' => 365,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-31 23:11:00',
                'ngay_cap_nhat' => '2026-05-31 23:11:00',
            ),
            301 => 
            array (
                'id' => 1302,
                'cau_hoi_id' => 365,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-31 23:11:00',
                'ngay_cap_nhat' => '2026-05-31 23:11:00',
            ),
            302 => 
            array (
                'id' => 1303,
                'cau_hoi_id' => 365,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-31 23:11:00',
                'ngay_cap_nhat' => '2026-05-31 23:11:00',
            ),
            303 => 
            array (
                'id' => 1304,
                'cau_hoi_id' => 365,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-31 23:11:00',
                'ngay_cap_nhat' => '2026-05-31 23:11:00',
            ),
            304 => 
            array (
                'id' => 1305,
                'cau_hoi_id' => 366,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-01 15:09:00',
                'ngay_cap_nhat' => '2024-11-01 15:09:00',
            ),
            305 => 
            array (
                'id' => 1306,
                'cau_hoi_id' => 366,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-01 15:09:00',
                'ngay_cap_nhat' => '2024-11-01 15:09:00',
            ),
            306 => 
            array (
                'id' => 1307,
                'cau_hoi_id' => 367,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-18 20:55:00',
                'ngay_cap_nhat' => '2026-03-18 20:55:00',
            ),
            307 => 
            array (
                'id' => 1308,
                'cau_hoi_id' => 367,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-18 20:55:00',
                'ngay_cap_nhat' => '2026-03-18 20:55:00',
            ),
            308 => 
            array (
                'id' => 1309,
                'cau_hoi_id' => 367,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-03-18 20:55:00',
                'ngay_cap_nhat' => '2026-03-18 20:55:00',
            ),
            309 => 
            array (
                'id' => 1310,
                'cau_hoi_id' => 367,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-03-18 20:55:00',
                'ngay_cap_nhat' => '2026-03-18 20:55:00',
            ),
            310 => 
            array (
                'id' => 1311,
                'cau_hoi_id' => 368,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-14 06:06:00',
                'ngay_cap_nhat' => '2026-02-14 06:06:00',
            ),
            311 => 
            array (
                'id' => 1312,
                'cau_hoi_id' => 368,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-14 06:06:00',
                'ngay_cap_nhat' => '2026-02-14 06:06:00',
            ),
            312 => 
            array (
                'id' => 1313,
                'cau_hoi_id' => 368,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-02-14 06:06:00',
                'ngay_cap_nhat' => '2026-02-14 06:06:00',
            ),
            313 => 
            array (
                'id' => 1314,
                'cau_hoi_id' => 368,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-02-14 06:06:00',
                'ngay_cap_nhat' => '2026-02-14 06:06:00',
            ),
            314 => 
            array (
                'id' => 1315,
                'cau_hoi_id' => 369,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-06-05 08:02:00',
                'ngay_cap_nhat' => '2026-06-05 08:02:00',
            ),
            315 => 
            array (
                'id' => 1316,
                'cau_hoi_id' => 369,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-06-05 08:02:00',
                'ngay_cap_nhat' => '2026-06-05 08:02:00',
            ),
            316 => 
            array (
                'id' => 1317,
                'cau_hoi_id' => 369,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-06-05 08:02:00',
                'ngay_cap_nhat' => '2026-06-05 08:02:00',
            ),
            317 => 
            array (
                'id' => 1318,
                'cau_hoi_id' => 369,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-06-05 08:02:00',
                'ngay_cap_nhat' => '2026-06-05 08:02:00',
            ),
            318 => 
            array (
                'id' => 1319,
                'cau_hoi_id' => 370,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-18 22:31:00',
                'ngay_cap_nhat' => '2024-06-18 22:31:00',
            ),
            319 => 
            array (
                'id' => 1320,
                'cau_hoi_id' => 370,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-18 22:31:00',
                'ngay_cap_nhat' => '2024-06-18 22:31:00',
            ),
            320 => 
            array (
                'id' => 1321,
                'cau_hoi_id' => 370,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-18 22:31:00',
                'ngay_cap_nhat' => '2024-06-18 22:31:00',
            ),
            321 => 
            array (
                'id' => 1322,
                'cau_hoi_id' => 370,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-18 22:31:00',
                'ngay_cap_nhat' => '2024-06-18 22:31:00',
            ),
            322 => 
            array (
                'id' => 1323,
                'cau_hoi_id' => 371,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-09 23:06:00',
                'ngay_cap_nhat' => '2026-05-09 23:06:00',
            ),
            323 => 
            array (
                'id' => 1324,
                'cau_hoi_id' => 371,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-09 23:06:00',
                'ngay_cap_nhat' => '2026-05-09 23:06:00',
            ),
            324 => 
            array (
                'id' => 1325,
                'cau_hoi_id' => 372,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-18 11:43:00',
                'ngay_cap_nhat' => '2026-04-18 11:43:00',
            ),
            325 => 
            array (
                'id' => 1326,
                'cau_hoi_id' => 372,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-18 11:43:00',
                'ngay_cap_nhat' => '2026-04-18 11:43:00',
            ),
            326 => 
            array (
                'id' => 1327,
                'cau_hoi_id' => 373,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-02 08:06:00',
                'ngay_cap_nhat' => '2025-08-02 08:06:00',
            ),
            327 => 
            array (
                'id' => 1328,
                'cau_hoi_id' => 373,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-02 08:06:00',
                'ngay_cap_nhat' => '2025-08-02 08:06:00',
            ),
            328 => 
            array (
                'id' => 1329,
                'cau_hoi_id' => 373,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-08-02 08:06:00',
                'ngay_cap_nhat' => '2025-08-02 08:06:00',
            ),
            329 => 
            array (
                'id' => 1330,
                'cau_hoi_id' => 373,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-08-02 08:06:00',
                'ngay_cap_nhat' => '2025-08-02 08:06:00',
            ),
            330 => 
            array (
                'id' => 1331,
                'cau_hoi_id' => 374,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-10 20:07:00',
                'ngay_cap_nhat' => '2024-03-10 20:07:00',
            ),
            331 => 
            array (
                'id' => 1332,
                'cau_hoi_id' => 374,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-10 20:07:00',
                'ngay_cap_nhat' => '2024-03-10 20:07:00',
            ),
            332 => 
            array (
                'id' => 1333,
                'cau_hoi_id' => 374,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-10 20:07:00',
                'ngay_cap_nhat' => '2024-03-10 20:07:00',
            ),
            333 => 
            array (
                'id' => 1334,
                'cau_hoi_id' => 374,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-10 20:07:00',
                'ngay_cap_nhat' => '2024-03-10 20:07:00',
            ),
            334 => 
            array (
                'id' => 1335,
                'cau_hoi_id' => 375,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-01 00:30:00',
                'ngay_cap_nhat' => '2024-07-01 00:30:00',
            ),
            335 => 
            array (
                'id' => 1336,
                'cau_hoi_id' => 375,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-01 00:30:00',
                'ngay_cap_nhat' => '2024-07-01 00:30:00',
            ),
            336 => 
            array (
                'id' => 1337,
                'cau_hoi_id' => 375,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-01 00:30:00',
                'ngay_cap_nhat' => '2024-07-01 00:30:00',
            ),
            337 => 
            array (
                'id' => 1338,
                'cau_hoi_id' => 375,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-01 00:30:00',
                'ngay_cap_nhat' => '2024-07-01 00:30:00',
            ),
            338 => 
            array (
                'id' => 1339,
                'cau_hoi_id' => 376,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-04 01:45:00',
                'ngay_cap_nhat' => '2025-11-04 01:45:00',
            ),
            339 => 
            array (
                'id' => 1340,
                'cau_hoi_id' => 376,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-04 01:45:00',
                'ngay_cap_nhat' => '2025-11-04 01:45:00',
            ),
            340 => 
            array (
                'id' => 1341,
                'cau_hoi_id' => 376,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-04 01:45:00',
                'ngay_cap_nhat' => '2025-11-04 01:45:00',
            ),
            341 => 
            array (
                'id' => 1342,
                'cau_hoi_id' => 376,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-04 01:45:00',
                'ngay_cap_nhat' => '2025-11-04 01:45:00',
            ),
            342 => 
            array (
                'id' => 1343,
                'cau_hoi_id' => 377,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-29 17:44:00',
                'ngay_cap_nhat' => '2024-03-29 17:44:00',
            ),
            343 => 
            array (
                'id' => 1344,
                'cau_hoi_id' => 377,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-29 17:44:00',
                'ngay_cap_nhat' => '2024-03-29 17:44:00',
            ),
            344 => 
            array (
                'id' => 1345,
                'cau_hoi_id' => 377,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-29 17:44:00',
                'ngay_cap_nhat' => '2024-03-29 17:44:00',
            ),
            345 => 
            array (
                'id' => 1346,
                'cau_hoi_id' => 377,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-29 17:44:00',
                'ngay_cap_nhat' => '2024-03-29 17:44:00',
            ),
            346 => 
            array (
                'id' => 1347,
                'cau_hoi_id' => 378,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-24 21:38:00',
                'ngay_cap_nhat' => '2024-09-24 21:38:00',
            ),
            347 => 
            array (
                'id' => 1348,
                'cau_hoi_id' => 378,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-24 21:38:00',
                'ngay_cap_nhat' => '2024-09-24 21:38:00',
            ),
            348 => 
            array (
                'id' => 1349,
                'cau_hoi_id' => 378,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-24 21:38:00',
                'ngay_cap_nhat' => '2024-09-24 21:38:00',
            ),
            349 => 
            array (
                'id' => 1350,
                'cau_hoi_id' => 378,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-24 21:38:00',
                'ngay_cap_nhat' => '2024-09-24 21:38:00',
            ),
            350 => 
            array (
                'id' => 1351,
                'cau_hoi_id' => 379,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-31 06:31:00',
                'ngay_cap_nhat' => '2025-08-31 06:31:00',
            ),
            351 => 
            array (
                'id' => 1352,
                'cau_hoi_id' => 379,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-31 06:31:00',
                'ngay_cap_nhat' => '2025-08-31 06:31:00',
            ),
            352 => 
            array (
                'id' => 1353,
                'cau_hoi_id' => 380,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-02 13:35:00',
                'ngay_cap_nhat' => '2025-06-02 13:35:00',
            ),
            353 => 
            array (
                'id' => 1354,
                'cau_hoi_id' => 380,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-02 13:35:00',
                'ngay_cap_nhat' => '2025-06-02 13:35:00',
            ),
            354 => 
            array (
                'id' => 1355,
                'cau_hoi_id' => 380,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-02 13:35:00',
                'ngay_cap_nhat' => '2025-06-02 13:35:00',
            ),
            355 => 
            array (
                'id' => 1356,
                'cau_hoi_id' => 380,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-02 13:35:00',
                'ngay_cap_nhat' => '2025-06-02 13:35:00',
            ),
            356 => 
            array (
                'id' => 1357,
                'cau_hoi_id' => 381,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-11 22:35:00',
                'ngay_cap_nhat' => '2026-03-11 22:35:00',
            ),
            357 => 
            array (
                'id' => 1358,
                'cau_hoi_id' => 381,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-11 22:35:00',
                'ngay_cap_nhat' => '2026-03-11 22:35:00',
            ),
            358 => 
            array (
                'id' => 1359,
                'cau_hoi_id' => 381,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-03-11 22:35:00',
                'ngay_cap_nhat' => '2026-03-11 22:35:00',
            ),
            359 => 
            array (
                'id' => 1360,
                'cau_hoi_id' => 381,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-03-11 22:35:00',
                'ngay_cap_nhat' => '2026-03-11 22:35:00',
            ),
            360 => 
            array (
                'id' => 1361,
                'cau_hoi_id' => 382,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-27 08:42:00',
                'ngay_cap_nhat' => '2025-12-27 08:42:00',
            ),
            361 => 
            array (
                'id' => 1362,
                'cau_hoi_id' => 382,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-27 08:42:00',
                'ngay_cap_nhat' => '2025-12-27 08:42:00',
            ),
            362 => 
            array (
                'id' => 1363,
                'cau_hoi_id' => 382,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-12-27 08:42:00',
                'ngay_cap_nhat' => '2025-12-27 08:42:00',
            ),
            363 => 
            array (
                'id' => 1364,
                'cau_hoi_id' => 382,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-12-27 08:42:00',
                'ngay_cap_nhat' => '2025-12-27 08:42:00',
            ),
            364 => 
            array (
                'id' => 1365,
                'cau_hoi_id' => 383,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-14 03:25:00',
                'ngay_cap_nhat' => '2024-08-14 03:25:00',
            ),
            365 => 
            array (
                'id' => 1366,
                'cau_hoi_id' => 383,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-14 03:25:00',
                'ngay_cap_nhat' => '2024-08-14 03:25:00',
            ),
            366 => 
            array (
                'id' => 1367,
                'cau_hoi_id' => 384,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-07 21:48:00',
                'ngay_cap_nhat' => '2025-11-07 21:48:00',
            ),
            367 => 
            array (
                'id' => 1368,
                'cau_hoi_id' => 384,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-07 21:48:00',
                'ngay_cap_nhat' => '2025-11-07 21:48:00',
            ),
            368 => 
            array (
                'id' => 1369,
                'cau_hoi_id' => 384,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-07 21:48:00',
                'ngay_cap_nhat' => '2025-11-07 21:48:00',
            ),
            369 => 
            array (
                'id' => 1370,
                'cau_hoi_id' => 384,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-07 21:48:00',
                'ngay_cap_nhat' => '2025-11-07 21:48:00',
            ),
            370 => 
            array (
                'id' => 1371,
                'cau_hoi_id' => 385,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-27 00:24:00',
                'ngay_cap_nhat' => '2025-06-27 00:24:00',
            ),
            371 => 
            array (
                'id' => 1372,
                'cau_hoi_id' => 385,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-27 00:24:00',
                'ngay_cap_nhat' => '2025-06-27 00:24:00',
            ),
            372 => 
            array (
                'id' => 1373,
                'cau_hoi_id' => 386,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-29 11:04:00',
                'ngay_cap_nhat' => '2026-01-29 11:04:00',
            ),
            373 => 
            array (
                'id' => 1374,
                'cau_hoi_id' => 386,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-29 11:04:00',
                'ngay_cap_nhat' => '2026-01-29 11:04:00',
            ),
            374 => 
            array (
                'id' => 1375,
                'cau_hoi_id' => 387,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-05 03:15:00',
                'ngay_cap_nhat' => '2026-02-05 03:15:00',
            ),
            375 => 
            array (
                'id' => 1376,
                'cau_hoi_id' => 387,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-05 03:15:00',
                'ngay_cap_nhat' => '2026-02-05 03:15:00',
            ),
            376 => 
            array (
                'id' => 1377,
                'cau_hoi_id' => 388,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-06 04:05:00',
                'ngay_cap_nhat' => '2026-04-06 04:05:00',
            ),
            377 => 
            array (
                'id' => 1378,
                'cau_hoi_id' => 388,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-06 04:05:00',
                'ngay_cap_nhat' => '2026-04-06 04:05:00',
            ),
            378 => 
            array (
                'id' => 1379,
                'cau_hoi_id' => 388,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-06 04:05:00',
                'ngay_cap_nhat' => '2026-04-06 04:05:00',
            ),
            379 => 
            array (
                'id' => 1380,
                'cau_hoi_id' => 388,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-06 04:05:00',
                'ngay_cap_nhat' => '2026-04-06 04:05:00',
            ),
            380 => 
            array (
                'id' => 1381,
                'cau_hoi_id' => 389,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-05 15:59:00',
                'ngay_cap_nhat' => '2024-03-05 15:59:00',
            ),
            381 => 
            array (
                'id' => 1382,
                'cau_hoi_id' => 389,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-05 15:59:00',
                'ngay_cap_nhat' => '2024-03-05 15:59:00',
            ),
            382 => 
            array (
                'id' => 1383,
                'cau_hoi_id' => 390,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-19 11:02:00',
                'ngay_cap_nhat' => '2024-09-19 11:02:00',
            ),
            383 => 
            array (
                'id' => 1384,
                'cau_hoi_id' => 390,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-19 11:02:00',
                'ngay_cap_nhat' => '2024-09-19 11:02:00',
            ),
            384 => 
            array (
                'id' => 1385,
                'cau_hoi_id' => 390,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-19 11:02:00',
                'ngay_cap_nhat' => '2024-09-19 11:02:00',
            ),
            385 => 
            array (
                'id' => 1386,
                'cau_hoi_id' => 390,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-19 11:02:00',
                'ngay_cap_nhat' => '2024-09-19 11:02:00',
            ),
            386 => 
            array (
                'id' => 1387,
                'cau_hoi_id' => 391,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-06 22:07:00',
                'ngay_cap_nhat' => '2026-04-06 22:07:00',
            ),
            387 => 
            array (
                'id' => 1388,
                'cau_hoi_id' => 391,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-06 22:07:00',
                'ngay_cap_nhat' => '2026-04-06 22:07:00',
            ),
            388 => 
            array (
                'id' => 1389,
                'cau_hoi_id' => 391,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-06 22:07:00',
                'ngay_cap_nhat' => '2026-04-06 22:07:00',
            ),
            389 => 
            array (
                'id' => 1390,
                'cau_hoi_id' => 391,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-06 22:07:00',
                'ngay_cap_nhat' => '2026-04-06 22:07:00',
            ),
            390 => 
            array (
                'id' => 1391,
                'cau_hoi_id' => 392,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-07 07:01:00',
                'ngay_cap_nhat' => '2024-05-07 07:01:00',
            ),
            391 => 
            array (
                'id' => 1392,
                'cau_hoi_id' => 392,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-07 07:01:00',
                'ngay_cap_nhat' => '2024-05-07 07:01:00',
            ),
            392 => 
            array (
                'id' => 1393,
                'cau_hoi_id' => 392,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-05-07 07:01:00',
                'ngay_cap_nhat' => '2024-05-07 07:01:00',
            ),
            393 => 
            array (
                'id' => 1394,
                'cau_hoi_id' => 392,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-05-07 07:01:00',
                'ngay_cap_nhat' => '2024-05-07 07:01:00',
            ),
            394 => 
            array (
                'id' => 1395,
                'cau_hoi_id' => 393,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-17 04:06:00',
                'ngay_cap_nhat' => '2024-04-17 04:06:00',
            ),
            395 => 
            array (
                'id' => 1396,
                'cau_hoi_id' => 393,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-17 04:06:00',
                'ngay_cap_nhat' => '2024-04-17 04:06:00',
            ),
            396 => 
            array (
                'id' => 1397,
                'cau_hoi_id' => 393,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-04-17 04:06:00',
                'ngay_cap_nhat' => '2024-04-17 04:06:00',
            ),
            397 => 
            array (
                'id' => 1398,
                'cau_hoi_id' => 393,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-04-17 04:06:00',
                'ngay_cap_nhat' => '2024-04-17 04:06:00',
            ),
            398 => 
            array (
                'id' => 1399,
                'cau_hoi_id' => 394,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-23 12:45:00',
                'ngay_cap_nhat' => '2024-12-23 12:45:00',
            ),
            399 => 
            array (
                'id' => 1400,
                'cau_hoi_id' => 394,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-23 12:45:00',
                'ngay_cap_nhat' => '2024-12-23 12:45:00',
            ),
            400 => 
            array (
                'id' => 1401,
                'cau_hoi_id' => 395,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-13 19:55:00',
                'ngay_cap_nhat' => '2026-01-13 19:55:00',
            ),
            401 => 
            array (
                'id' => 1402,
                'cau_hoi_id' => 395,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-13 19:55:00',
                'ngay_cap_nhat' => '2026-01-13 19:55:00',
            ),
            402 => 
            array (
                'id' => 1403,
                'cau_hoi_id' => 395,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-13 19:55:00',
                'ngay_cap_nhat' => '2026-01-13 19:55:00',
            ),
            403 => 
            array (
                'id' => 1404,
                'cau_hoi_id' => 395,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-13 19:55:00',
                'ngay_cap_nhat' => '2026-01-13 19:55:00',
            ),
            404 => 
            array (
                'id' => 1405,
                'cau_hoi_id' => 396,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-18 03:56:00',
                'ngay_cap_nhat' => '2024-03-18 03:56:00',
            ),
            405 => 
            array (
                'id' => 1406,
                'cau_hoi_id' => 396,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-18 03:56:00',
                'ngay_cap_nhat' => '2024-03-18 03:56:00',
            ),
            406 => 
            array (
                'id' => 1407,
                'cau_hoi_id' => 396,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-18 03:56:00',
                'ngay_cap_nhat' => '2024-03-18 03:56:00',
            ),
            407 => 
            array (
                'id' => 1408,
                'cau_hoi_id' => 396,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-18 03:56:00',
                'ngay_cap_nhat' => '2024-03-18 03:56:00',
            ),
            408 => 
            array (
                'id' => 1409,
                'cau_hoi_id' => 397,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-31 18:50:00',
                'ngay_cap_nhat' => '2025-07-31 18:50:00',
            ),
            409 => 
            array (
                'id' => 1410,
                'cau_hoi_id' => 397,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-31 18:50:00',
                'ngay_cap_nhat' => '2025-07-31 18:50:00',
            ),
            410 => 
            array (
                'id' => 1411,
                'cau_hoi_id' => 397,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-07-31 18:50:00',
                'ngay_cap_nhat' => '2025-07-31 18:50:00',
            ),
            411 => 
            array (
                'id' => 1412,
                'cau_hoi_id' => 397,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-07-31 18:50:00',
                'ngay_cap_nhat' => '2025-07-31 18:50:00',
            ),
            412 => 
            array (
                'id' => 1413,
                'cau_hoi_id' => 398,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-09 10:47:00',
                'ngay_cap_nhat' => '2025-02-09 10:47:00',
            ),
            413 => 
            array (
                'id' => 1414,
                'cau_hoi_id' => 398,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-09 10:47:00',
                'ngay_cap_nhat' => '2025-02-09 10:47:00',
            ),
            414 => 
            array (
                'id' => 1415,
                'cau_hoi_id' => 398,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-09 10:47:00',
                'ngay_cap_nhat' => '2025-02-09 10:47:00',
            ),
            415 => 
            array (
                'id' => 1416,
                'cau_hoi_id' => 398,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-09 10:47:00',
                'ngay_cap_nhat' => '2025-02-09 10:47:00',
            ),
            416 => 
            array (
                'id' => 1417,
                'cau_hoi_id' => 399,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-06-05 03:08:00',
                'ngay_cap_nhat' => '2026-06-05 03:08:00',
            ),
            417 => 
            array (
                'id' => 1418,
                'cau_hoi_id' => 399,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-06-05 03:08:00',
                'ngay_cap_nhat' => '2026-06-05 03:08:00',
            ),
            418 => 
            array (
                'id' => 1419,
                'cau_hoi_id' => 400,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-17 18:31:00',
                'ngay_cap_nhat' => '2025-03-17 18:31:00',
            ),
            419 => 
            array (
                'id' => 1420,
                'cau_hoi_id' => 400,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-17 18:31:00',
                'ngay_cap_nhat' => '2025-03-17 18:31:00',
            ),
            420 => 
            array (
                'id' => 1421,
                'cau_hoi_id' => 400,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-03-17 18:31:00',
                'ngay_cap_nhat' => '2025-03-17 18:31:00',
            ),
            421 => 
            array (
                'id' => 1422,
                'cau_hoi_id' => 400,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-03-17 18:31:00',
                'ngay_cap_nhat' => '2025-03-17 18:31:00',
            ),
            422 => 
            array (
                'id' => 1423,
                'cau_hoi_id' => 401,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-21 20:02:00',
                'ngay_cap_nhat' => '2025-03-21 20:02:00',
            ),
            423 => 
            array (
                'id' => 1424,
                'cau_hoi_id' => 401,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-21 20:02:00',
                'ngay_cap_nhat' => '2025-03-21 20:02:00',
            ),
            424 => 
            array (
                'id' => 1425,
                'cau_hoi_id' => 401,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-03-21 20:02:00',
                'ngay_cap_nhat' => '2025-03-21 20:02:00',
            ),
            425 => 
            array (
                'id' => 1426,
                'cau_hoi_id' => 401,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-03-21 20:02:00',
                'ngay_cap_nhat' => '2025-03-21 20:02:00',
            ),
            426 => 
            array (
                'id' => 1427,
                'cau_hoi_id' => 402,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-15 09:27:00',
                'ngay_cap_nhat' => '2026-05-15 09:27:00',
            ),
            427 => 
            array (
                'id' => 1428,
                'cau_hoi_id' => 402,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-15 09:27:00',
                'ngay_cap_nhat' => '2026-05-15 09:27:00',
            ),
            428 => 
            array (
                'id' => 1429,
                'cau_hoi_id' => 402,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-15 09:27:00',
                'ngay_cap_nhat' => '2026-05-15 09:27:00',
            ),
            429 => 
            array (
                'id' => 1430,
                'cau_hoi_id' => 402,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-15 09:27:00',
                'ngay_cap_nhat' => '2026-05-15 09:27:00',
            ),
            430 => 
            array (
                'id' => 1431,
                'cau_hoi_id' => 403,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-07 11:04:00',
                'ngay_cap_nhat' => '2024-04-07 11:04:00',
            ),
            431 => 
            array (
                'id' => 1432,
                'cau_hoi_id' => 403,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-07 11:04:00',
                'ngay_cap_nhat' => '2024-04-07 11:04:00',
            ),
            432 => 
            array (
                'id' => 1433,
                'cau_hoi_id' => 404,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-28 14:13:00',
                'ngay_cap_nhat' => '2024-03-28 14:13:00',
            ),
            433 => 
            array (
                'id' => 1434,
                'cau_hoi_id' => 404,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-28 14:13:00',
                'ngay_cap_nhat' => '2024-03-28 14:13:00',
            ),
            434 => 
            array (
                'id' => 1435,
                'cau_hoi_id' => 405,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-18 03:23:00',
                'ngay_cap_nhat' => '2025-06-18 03:23:00',
            ),
            435 => 
            array (
                'id' => 1436,
                'cau_hoi_id' => 405,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-18 03:23:00',
                'ngay_cap_nhat' => '2025-06-18 03:23:00',
            ),
            436 => 
            array (
                'id' => 1437,
                'cau_hoi_id' => 405,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-18 03:23:00',
                'ngay_cap_nhat' => '2025-06-18 03:23:00',
            ),
            437 => 
            array (
                'id' => 1438,
                'cau_hoi_id' => 405,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-18 03:23:00',
                'ngay_cap_nhat' => '2025-06-18 03:23:00',
            ),
            438 => 
            array (
                'id' => 1439,
                'cau_hoi_id' => 406,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-10 23:03:00',
                'ngay_cap_nhat' => '2026-01-10 23:03:00',
            ),
            439 => 
            array (
                'id' => 1440,
                'cau_hoi_id' => 406,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-10 23:03:00',
                'ngay_cap_nhat' => '2026-01-10 23:03:00',
            ),
            440 => 
            array (
                'id' => 1441,
                'cau_hoi_id' => 406,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-10 23:03:00',
                'ngay_cap_nhat' => '2026-01-10 23:03:00',
            ),
            441 => 
            array (
                'id' => 1442,
                'cau_hoi_id' => 406,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-10 23:03:00',
                'ngay_cap_nhat' => '2026-01-10 23:03:00',
            ),
            442 => 
            array (
                'id' => 1443,
                'cau_hoi_id' => 407,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-17 05:56:00',
                'ngay_cap_nhat' => '2024-03-17 05:56:00',
            ),
            443 => 
            array (
                'id' => 1444,
                'cau_hoi_id' => 407,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-17 05:56:00',
                'ngay_cap_nhat' => '2024-03-17 05:56:00',
            ),
            444 => 
            array (
                'id' => 1445,
                'cau_hoi_id' => 407,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-17 05:56:00',
                'ngay_cap_nhat' => '2024-03-17 05:56:00',
            ),
            445 => 
            array (
                'id' => 1446,
                'cau_hoi_id' => 407,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-17 05:56:00',
                'ngay_cap_nhat' => '2024-03-17 05:56:00',
            ),
            446 => 
            array (
                'id' => 1447,
                'cau_hoi_id' => 408,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-14 21:11:00',
                'ngay_cap_nhat' => '2025-06-14 21:11:00',
            ),
            447 => 
            array (
                'id' => 1448,
                'cau_hoi_id' => 408,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-14 21:11:00',
                'ngay_cap_nhat' => '2025-06-14 21:11:00',
            ),
            448 => 
            array (
                'id' => 1449,
                'cau_hoi_id' => 408,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-14 21:11:00',
                'ngay_cap_nhat' => '2025-06-14 21:11:00',
            ),
            449 => 
            array (
                'id' => 1450,
                'cau_hoi_id' => 408,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-14 21:11:00',
                'ngay_cap_nhat' => '2025-06-14 21:11:00',
            ),
            450 => 
            array (
                'id' => 1451,
                'cau_hoi_id' => 409,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-23 12:09:00',
                'ngay_cap_nhat' => '2025-08-23 12:09:00',
            ),
            451 => 
            array (
                'id' => 1452,
                'cau_hoi_id' => 409,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-23 12:09:00',
                'ngay_cap_nhat' => '2025-08-23 12:09:00',
            ),
            452 => 
            array (
                'id' => 1453,
                'cau_hoi_id' => 410,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-20 16:53:00',
                'ngay_cap_nhat' => '2025-09-20 16:53:00',
            ),
            453 => 
            array (
                'id' => 1454,
                'cau_hoi_id' => 410,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-20 16:53:00',
                'ngay_cap_nhat' => '2025-09-20 16:53:00',
            ),
            454 => 
            array (
                'id' => 1455,
                'cau_hoi_id' => 411,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-01 13:16:00',
                'ngay_cap_nhat' => '2025-05-01 13:16:00',
            ),
            455 => 
            array (
                'id' => 1456,
                'cau_hoi_id' => 411,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-01 13:16:00',
                'ngay_cap_nhat' => '2025-05-01 13:16:00',
            ),
            456 => 
            array (
                'id' => 1457,
                'cau_hoi_id' => 411,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-01 13:16:00',
                'ngay_cap_nhat' => '2025-05-01 13:16:00',
            ),
            457 => 
            array (
                'id' => 1458,
                'cau_hoi_id' => 411,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-01 13:16:00',
                'ngay_cap_nhat' => '2025-05-01 13:16:00',
            ),
            458 => 
            array (
                'id' => 1459,
                'cau_hoi_id' => 412,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-03 02:55:00',
                'ngay_cap_nhat' => '2025-07-03 02:55:00',
            ),
            459 => 
            array (
                'id' => 1460,
                'cau_hoi_id' => 412,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-03 02:55:00',
                'ngay_cap_nhat' => '2025-07-03 02:55:00',
            ),
            460 => 
            array (
                'id' => 1461,
                'cau_hoi_id' => 412,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-07-03 02:55:00',
                'ngay_cap_nhat' => '2025-07-03 02:55:00',
            ),
            461 => 
            array (
                'id' => 1462,
                'cau_hoi_id' => 412,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-07-03 02:55:00',
                'ngay_cap_nhat' => '2025-07-03 02:55:00',
            ),
            462 => 
            array (
                'id' => 1463,
                'cau_hoi_id' => 413,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-02 22:08:00',
                'ngay_cap_nhat' => '2025-05-02 22:08:00',
            ),
            463 => 
            array (
                'id' => 1464,
                'cau_hoi_id' => 413,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-02 22:08:00',
                'ngay_cap_nhat' => '2025-05-02 22:08:00',
            ),
            464 => 
            array (
                'id' => 1465,
                'cau_hoi_id' => 414,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-07 06:57:00',
                'ngay_cap_nhat' => '2024-07-07 06:57:00',
            ),
            465 => 
            array (
                'id' => 1466,
                'cau_hoi_id' => 414,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-07 06:57:00',
                'ngay_cap_nhat' => '2024-07-07 06:57:00',
            ),
            466 => 
            array (
                'id' => 1467,
                'cau_hoi_id' => 414,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-07 06:57:00',
                'ngay_cap_nhat' => '2024-07-07 06:57:00',
            ),
            467 => 
            array (
                'id' => 1468,
                'cau_hoi_id' => 414,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-07 06:57:00',
                'ngay_cap_nhat' => '2024-07-07 06:57:00',
            ),
            468 => 
            array (
                'id' => 1469,
                'cau_hoi_id' => 415,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-12 16:25:00',
                'ngay_cap_nhat' => '2025-08-12 16:25:00',
            ),
            469 => 
            array (
                'id' => 1470,
                'cau_hoi_id' => 415,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-12 16:25:00',
                'ngay_cap_nhat' => '2025-08-12 16:25:00',
            ),
            470 => 
            array (
                'id' => 1471,
                'cau_hoi_id' => 415,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-08-12 16:25:00',
                'ngay_cap_nhat' => '2025-08-12 16:25:00',
            ),
            471 => 
            array (
                'id' => 1472,
                'cau_hoi_id' => 415,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-08-12 16:25:00',
                'ngay_cap_nhat' => '2025-08-12 16:25:00',
            ),
            472 => 
            array (
                'id' => 1473,
                'cau_hoi_id' => 416,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-06 07:16:00',
                'ngay_cap_nhat' => '2026-05-06 07:16:00',
            ),
            473 => 
            array (
                'id' => 1474,
                'cau_hoi_id' => 416,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-06 07:16:00',
                'ngay_cap_nhat' => '2026-05-06 07:16:00',
            ),
            474 => 
            array (
                'id' => 1475,
                'cau_hoi_id' => 416,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-06 07:16:00',
                'ngay_cap_nhat' => '2026-05-06 07:16:00',
            ),
            475 => 
            array (
                'id' => 1476,
                'cau_hoi_id' => 416,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-06 07:16:00',
                'ngay_cap_nhat' => '2026-05-06 07:16:00',
            ),
            476 => 
            array (
                'id' => 1477,
                'cau_hoi_id' => 417,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-25 10:38:00',
                'ngay_cap_nhat' => '2024-05-25 10:38:00',
            ),
            477 => 
            array (
                'id' => 1478,
                'cau_hoi_id' => 417,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-25 10:38:00',
                'ngay_cap_nhat' => '2024-05-25 10:38:00',
            ),
            478 => 
            array (
                'id' => 1479,
                'cau_hoi_id' => 418,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-19 00:20:00',
                'ngay_cap_nhat' => '2024-11-19 00:20:00',
            ),
            479 => 
            array (
                'id' => 1480,
                'cau_hoi_id' => 418,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-19 00:20:00',
                'ngay_cap_nhat' => '2024-11-19 00:20:00',
            ),
            480 => 
            array (
                'id' => 1481,
                'cau_hoi_id' => 419,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-01 23:20:00',
                'ngay_cap_nhat' => '2026-01-01 23:20:00',
            ),
            481 => 
            array (
                'id' => 1482,
                'cau_hoi_id' => 419,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-01 23:20:00',
                'ngay_cap_nhat' => '2026-01-01 23:20:00',
            ),
            482 => 
            array (
                'id' => 1483,
                'cau_hoi_id' => 419,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-01 23:20:00',
                'ngay_cap_nhat' => '2026-01-01 23:20:00',
            ),
            483 => 
            array (
                'id' => 1484,
                'cau_hoi_id' => 419,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-01 23:20:00',
                'ngay_cap_nhat' => '2026-01-01 23:20:00',
            ),
            484 => 
            array (
                'id' => 1485,
                'cau_hoi_id' => 420,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-26 10:22:00',
                'ngay_cap_nhat' => '2026-02-26 10:22:00',
            ),
            485 => 
            array (
                'id' => 1486,
                'cau_hoi_id' => 420,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-26 10:22:00',
                'ngay_cap_nhat' => '2026-02-26 10:22:00',
            ),
            486 => 
            array (
                'id' => 1487,
                'cau_hoi_id' => 421,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-21 02:37:00',
                'ngay_cap_nhat' => '2025-05-21 02:37:00',
            ),
            487 => 
            array (
                'id' => 1488,
                'cau_hoi_id' => 421,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-21 02:37:00',
                'ngay_cap_nhat' => '2025-05-21 02:37:00',
            ),
            488 => 
            array (
                'id' => 1489,
                'cau_hoi_id' => 421,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-21 02:37:00',
                'ngay_cap_nhat' => '2025-05-21 02:37:00',
            ),
            489 => 
            array (
                'id' => 1490,
                'cau_hoi_id' => 421,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-21 02:37:00',
                'ngay_cap_nhat' => '2025-05-21 02:37:00',
            ),
            490 => 
            array (
                'id' => 1491,
                'cau_hoi_id' => 422,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-17 23:53:00',
                'ngay_cap_nhat' => '2025-04-17 23:53:00',
            ),
            491 => 
            array (
                'id' => 1492,
                'cau_hoi_id' => 422,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-17 23:53:00',
                'ngay_cap_nhat' => '2025-04-17 23:53:00',
            ),
            492 => 
            array (
                'id' => 1493,
                'cau_hoi_id' => 423,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-17 06:11:00',
                'ngay_cap_nhat' => '2026-03-17 06:11:00',
            ),
            493 => 
            array (
                'id' => 1494,
                'cau_hoi_id' => 423,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-17 06:11:00',
                'ngay_cap_nhat' => '2026-03-17 06:11:00',
            ),
            494 => 
            array (
                'id' => 1495,
                'cau_hoi_id' => 423,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-03-17 06:11:00',
                'ngay_cap_nhat' => '2026-03-17 06:11:00',
            ),
            495 => 
            array (
                'id' => 1496,
                'cau_hoi_id' => 423,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-03-17 06:11:00',
                'ngay_cap_nhat' => '2026-03-17 06:11:00',
            ),
            496 => 
            array (
                'id' => 1497,
                'cau_hoi_id' => 424,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-17 02:53:00',
                'ngay_cap_nhat' => '2024-06-17 02:53:00',
            ),
            497 => 
            array (
                'id' => 1498,
                'cau_hoi_id' => 424,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-17 02:53:00',
                'ngay_cap_nhat' => '2024-06-17 02:53:00',
            ),
            498 => 
            array (
                'id' => 1499,
                'cau_hoi_id' => 425,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-15 13:38:00',
                'ngay_cap_nhat' => '2025-07-15 13:38:00',
            ),
            499 => 
            array (
                'id' => 1500,
                'cau_hoi_id' => 425,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-15 13:38:00',
                'ngay_cap_nhat' => '2025-07-15 13:38:00',
            ),
        ));
        \DB::table('dap_an')->insert(array (
            0 => 
            array (
                'id' => 1501,
                'cau_hoi_id' => 425,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-07-15 13:38:00',
                'ngay_cap_nhat' => '2025-07-15 13:38:00',
            ),
            1 => 
            array (
                'id' => 1502,
                'cau_hoi_id' => 425,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-07-15 13:38:00',
                'ngay_cap_nhat' => '2025-07-15 13:38:00',
            ),
            2 => 
            array (
                'id' => 1503,
                'cau_hoi_id' => 426,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-22 17:23:00',
                'ngay_cap_nhat' => '2025-11-22 17:23:00',
            ),
            3 => 
            array (
                'id' => 1504,
                'cau_hoi_id' => 426,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-22 17:23:00',
                'ngay_cap_nhat' => '2025-11-22 17:23:00',
            ),
            4 => 
            array (
                'id' => 1505,
                'cau_hoi_id' => 426,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-22 17:23:00',
                'ngay_cap_nhat' => '2025-11-22 17:23:00',
            ),
            5 => 
            array (
                'id' => 1506,
                'cau_hoi_id' => 426,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-22 17:23:00',
                'ngay_cap_nhat' => '2025-11-22 17:23:00',
            ),
            6 => 
            array (
                'id' => 1507,
                'cau_hoi_id' => 427,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-15 13:37:00',
                'ngay_cap_nhat' => '2024-06-15 13:37:00',
            ),
            7 => 
            array (
                'id' => 1508,
                'cau_hoi_id' => 427,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-15 13:37:00',
                'ngay_cap_nhat' => '2024-06-15 13:37:00',
            ),
            8 => 
            array (
                'id' => 1509,
                'cau_hoi_id' => 427,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-15 13:37:00',
                'ngay_cap_nhat' => '2024-06-15 13:37:00',
            ),
            9 => 
            array (
                'id' => 1510,
                'cau_hoi_id' => 427,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-15 13:37:00',
                'ngay_cap_nhat' => '2024-06-15 13:37:00',
            ),
            10 => 
            array (
                'id' => 1511,
                'cau_hoi_id' => 428,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-28 18:50:00',
                'ngay_cap_nhat' => '2025-04-28 18:50:00',
            ),
            11 => 
            array (
                'id' => 1512,
                'cau_hoi_id' => 428,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-28 18:50:00',
                'ngay_cap_nhat' => '2025-04-28 18:50:00',
            ),
            12 => 
            array (
                'id' => 1513,
                'cau_hoi_id' => 428,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-28 18:50:00',
                'ngay_cap_nhat' => '2025-04-28 18:50:00',
            ),
            13 => 
            array (
                'id' => 1514,
                'cau_hoi_id' => 428,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-28 18:50:00',
                'ngay_cap_nhat' => '2025-04-28 18:50:00',
            ),
            14 => 
            array (
                'id' => 1515,
                'cau_hoi_id' => 429,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-21 02:03:00',
                'ngay_cap_nhat' => '2025-07-21 02:03:00',
            ),
            15 => 
            array (
                'id' => 1516,
                'cau_hoi_id' => 429,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-21 02:03:00',
                'ngay_cap_nhat' => '2025-07-21 02:03:00',
            ),
            16 => 
            array (
                'id' => 1517,
                'cau_hoi_id' => 430,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-26 02:28:00',
                'ngay_cap_nhat' => '2024-03-26 02:28:00',
            ),
            17 => 
            array (
                'id' => 1518,
                'cau_hoi_id' => 430,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-26 02:28:00',
                'ngay_cap_nhat' => '2024-03-26 02:28:00',
            ),
            18 => 
            array (
                'id' => 1519,
                'cau_hoi_id' => 431,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-08 02:25:00',
                'ngay_cap_nhat' => '2024-10-08 02:25:00',
            ),
            19 => 
            array (
                'id' => 1520,
                'cau_hoi_id' => 431,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-08 02:25:00',
                'ngay_cap_nhat' => '2024-10-08 02:25:00',
            ),
            20 => 
            array (
                'id' => 1521,
                'cau_hoi_id' => 432,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-14 21:00:00',
                'ngay_cap_nhat' => '2025-02-14 21:00:00',
            ),
            21 => 
            array (
                'id' => 1522,
                'cau_hoi_id' => 432,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-14 21:00:00',
                'ngay_cap_nhat' => '2025-02-14 21:00:00',
            ),
            22 => 
            array (
                'id' => 1523,
                'cau_hoi_id' => 433,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-19 06:13:00',
                'ngay_cap_nhat' => '2025-10-19 06:13:00',
            ),
            23 => 
            array (
                'id' => 1524,
                'cau_hoi_id' => 433,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-19 06:13:00',
                'ngay_cap_nhat' => '2025-10-19 06:13:00',
            ),
            24 => 
            array (
                'id' => 1525,
                'cau_hoi_id' => 433,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-19 06:13:00',
                'ngay_cap_nhat' => '2025-10-19 06:13:00',
            ),
            25 => 
            array (
                'id' => 1526,
                'cau_hoi_id' => 433,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-19 06:13:00',
                'ngay_cap_nhat' => '2025-10-19 06:13:00',
            ),
            26 => 
            array (
                'id' => 1527,
                'cau_hoi_id' => 434,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-21 18:14:00',
                'ngay_cap_nhat' => '2025-03-21 18:14:00',
            ),
            27 => 
            array (
                'id' => 1528,
                'cau_hoi_id' => 434,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-21 18:14:00',
                'ngay_cap_nhat' => '2025-03-21 18:14:00',
            ),
            28 => 
            array (
                'id' => 1529,
                'cau_hoi_id' => 434,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-03-21 18:14:00',
                'ngay_cap_nhat' => '2025-03-21 18:14:00',
            ),
            29 => 
            array (
                'id' => 1530,
                'cau_hoi_id' => 434,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-03-21 18:14:00',
                'ngay_cap_nhat' => '2025-03-21 18:14:00',
            ),
            30 => 
            array (
                'id' => 1531,
                'cau_hoi_id' => 435,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-14 18:02:00',
                'ngay_cap_nhat' => '2024-10-14 18:02:00',
            ),
            31 => 
            array (
                'id' => 1532,
                'cau_hoi_id' => 435,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-14 18:02:00',
                'ngay_cap_nhat' => '2024-10-14 18:02:00',
            ),
            32 => 
            array (
                'id' => 1533,
                'cau_hoi_id' => 435,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-14 18:02:00',
                'ngay_cap_nhat' => '2024-10-14 18:02:00',
            ),
            33 => 
            array (
                'id' => 1534,
                'cau_hoi_id' => 435,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-14 18:02:00',
                'ngay_cap_nhat' => '2024-10-14 18:02:00',
            ),
            34 => 
            array (
                'id' => 1535,
                'cau_hoi_id' => 436,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-22 19:46:00',
                'ngay_cap_nhat' => '2025-02-22 19:46:00',
            ),
            35 => 
            array (
                'id' => 1536,
                'cau_hoi_id' => 436,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-22 19:46:00',
                'ngay_cap_nhat' => '2025-02-22 19:46:00',
            ),
            36 => 
            array (
                'id' => 1537,
                'cau_hoi_id' => 436,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-22 19:46:00',
                'ngay_cap_nhat' => '2025-02-22 19:46:00',
            ),
            37 => 
            array (
                'id' => 1538,
                'cau_hoi_id' => 436,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-22 19:46:00',
                'ngay_cap_nhat' => '2025-02-22 19:46:00',
            ),
            38 => 
            array (
                'id' => 1539,
                'cau_hoi_id' => 437,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-17 22:10:00',
                'ngay_cap_nhat' => '2025-06-17 22:10:00',
            ),
            39 => 
            array (
                'id' => 1540,
                'cau_hoi_id' => 437,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-17 22:10:00',
                'ngay_cap_nhat' => '2025-06-17 22:10:00',
            ),
            40 => 
            array (
                'id' => 1541,
                'cau_hoi_id' => 437,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-17 22:10:00',
                'ngay_cap_nhat' => '2025-06-17 22:10:00',
            ),
            41 => 
            array (
                'id' => 1542,
                'cau_hoi_id' => 437,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-17 22:10:00',
                'ngay_cap_nhat' => '2025-06-17 22:10:00',
            ),
            42 => 
            array (
                'id' => 1543,
                'cau_hoi_id' => 438,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-14 11:41:00',
                'ngay_cap_nhat' => '2024-10-14 11:41:00',
            ),
            43 => 
            array (
                'id' => 1544,
                'cau_hoi_id' => 438,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-14 11:41:00',
                'ngay_cap_nhat' => '2024-10-14 11:41:00',
            ),
            44 => 
            array (
                'id' => 1545,
                'cau_hoi_id' => 438,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-14 11:41:00',
                'ngay_cap_nhat' => '2024-10-14 11:41:00',
            ),
            45 => 
            array (
                'id' => 1546,
                'cau_hoi_id' => 438,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-14 11:41:00',
                'ngay_cap_nhat' => '2024-10-14 11:41:00',
            ),
            46 => 
            array (
                'id' => 1547,
                'cau_hoi_id' => 439,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-15 22:26:00',
                'ngay_cap_nhat' => '2025-05-15 22:26:00',
            ),
            47 => 
            array (
                'id' => 1548,
                'cau_hoi_id' => 439,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-15 22:26:00',
                'ngay_cap_nhat' => '2025-05-15 22:26:00',
            ),
            48 => 
            array (
                'id' => 1549,
                'cau_hoi_id' => 439,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-15 22:26:00',
                'ngay_cap_nhat' => '2025-05-15 22:26:00',
            ),
            49 => 
            array (
                'id' => 1550,
                'cau_hoi_id' => 439,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-15 22:26:00',
                'ngay_cap_nhat' => '2025-05-15 22:26:00',
            ),
            50 => 
            array (
                'id' => 1551,
                'cau_hoi_id' => 440,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-18 17:41:00',
                'ngay_cap_nhat' => '2024-08-18 17:41:00',
            ),
            51 => 
            array (
                'id' => 1552,
                'cau_hoi_id' => 440,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-18 17:41:00',
                'ngay_cap_nhat' => '2024-08-18 17:41:00',
            ),
            52 => 
            array (
                'id' => 1553,
                'cau_hoi_id' => 440,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-08-18 17:41:00',
                'ngay_cap_nhat' => '2024-08-18 17:41:00',
            ),
            53 => 
            array (
                'id' => 1554,
                'cau_hoi_id' => 440,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-08-18 17:41:00',
                'ngay_cap_nhat' => '2024-08-18 17:41:00',
            ),
            54 => 
            array (
                'id' => 1555,
                'cau_hoi_id' => 441,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-07 23:00:00',
                'ngay_cap_nhat' => '2025-06-07 23:00:00',
            ),
            55 => 
            array (
                'id' => 1556,
                'cau_hoi_id' => 441,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-07 23:00:00',
                'ngay_cap_nhat' => '2025-06-07 23:00:00',
            ),
            56 => 
            array (
                'id' => 1557,
                'cau_hoi_id' => 441,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-07 23:00:00',
                'ngay_cap_nhat' => '2025-06-07 23:00:00',
            ),
            57 => 
            array (
                'id' => 1558,
                'cau_hoi_id' => 441,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-07 23:00:00',
                'ngay_cap_nhat' => '2025-06-07 23:00:00',
            ),
            58 => 
            array (
                'id' => 1559,
                'cau_hoi_id' => 442,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-11 13:54:00',
                'ngay_cap_nhat' => '2026-04-11 13:54:00',
            ),
            59 => 
            array (
                'id' => 1560,
                'cau_hoi_id' => 442,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-11 13:54:00',
                'ngay_cap_nhat' => '2026-04-11 13:54:00',
            ),
            60 => 
            array (
                'id' => 1561,
                'cau_hoi_id' => 443,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-15 17:00:00',
                'ngay_cap_nhat' => '2024-04-15 17:00:00',
            ),
            61 => 
            array (
                'id' => 1562,
                'cau_hoi_id' => 443,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-15 17:00:00',
                'ngay_cap_nhat' => '2024-04-15 17:00:00',
            ),
            62 => 
            array (
                'id' => 1563,
                'cau_hoi_id' => 443,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-04-15 17:00:00',
                'ngay_cap_nhat' => '2024-04-15 17:00:00',
            ),
            63 => 
            array (
                'id' => 1564,
                'cau_hoi_id' => 443,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-04-15 17:00:00',
                'ngay_cap_nhat' => '2024-04-15 17:00:00',
            ),
            64 => 
            array (
                'id' => 1565,
                'cau_hoi_id' => 444,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-07 02:57:00',
                'ngay_cap_nhat' => '2024-09-07 02:57:00',
            ),
            65 => 
            array (
                'id' => 1566,
                'cau_hoi_id' => 444,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-07 02:57:00',
                'ngay_cap_nhat' => '2024-09-07 02:57:00',
            ),
            66 => 
            array (
                'id' => 1567,
                'cau_hoi_id' => 444,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-07 02:57:00',
                'ngay_cap_nhat' => '2024-09-07 02:57:00',
            ),
            67 => 
            array (
                'id' => 1568,
                'cau_hoi_id' => 444,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-07 02:57:00',
                'ngay_cap_nhat' => '2024-09-07 02:57:00',
            ),
            68 => 
            array (
                'id' => 1569,
                'cau_hoi_id' => 445,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-08 01:37:00',
                'ngay_cap_nhat' => '2025-10-08 01:37:00',
            ),
            69 => 
            array (
                'id' => 1570,
                'cau_hoi_id' => 445,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-08 01:37:00',
                'ngay_cap_nhat' => '2025-10-08 01:37:00',
            ),
            70 => 
            array (
                'id' => 1571,
                'cau_hoi_id' => 445,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-08 01:37:00',
                'ngay_cap_nhat' => '2025-10-08 01:37:00',
            ),
            71 => 
            array (
                'id' => 1572,
                'cau_hoi_id' => 445,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-08 01:37:00',
                'ngay_cap_nhat' => '2025-10-08 01:37:00',
            ),
            72 => 
            array (
                'id' => 1573,
                'cau_hoi_id' => 446,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-07 05:15:00',
                'ngay_cap_nhat' => '2024-03-07 05:15:00',
            ),
            73 => 
            array (
                'id' => 1574,
                'cau_hoi_id' => 446,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-07 05:15:00',
                'ngay_cap_nhat' => '2024-03-07 05:15:00',
            ),
            74 => 
            array (
                'id' => 1575,
                'cau_hoi_id' => 446,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-07 05:15:00',
                'ngay_cap_nhat' => '2024-03-07 05:15:00',
            ),
            75 => 
            array (
                'id' => 1576,
                'cau_hoi_id' => 446,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-07 05:15:00',
                'ngay_cap_nhat' => '2024-03-07 05:15:00',
            ),
            76 => 
            array (
                'id' => 1577,
                'cau_hoi_id' => 447,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-06-03 10:22:00',
                'ngay_cap_nhat' => '2026-06-03 10:22:00',
            ),
            77 => 
            array (
                'id' => 1578,
                'cau_hoi_id' => 447,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-06-03 10:22:00',
                'ngay_cap_nhat' => '2026-06-03 10:22:00',
            ),
            78 => 
            array (
                'id' => 1579,
                'cau_hoi_id' => 447,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-06-03 10:22:00',
                'ngay_cap_nhat' => '2026-06-03 10:22:00',
            ),
            79 => 
            array (
                'id' => 1580,
                'cau_hoi_id' => 447,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-06-03 10:22:00',
                'ngay_cap_nhat' => '2026-06-03 10:22:00',
            ),
            80 => 
            array (
                'id' => 1581,
                'cau_hoi_id' => 448,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-29 01:14:00',
                'ngay_cap_nhat' => '2026-01-29 01:14:00',
            ),
            81 => 
            array (
                'id' => 1582,
                'cau_hoi_id' => 448,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-29 01:14:00',
                'ngay_cap_nhat' => '2026-01-29 01:14:00',
            ),
            82 => 
            array (
                'id' => 1583,
                'cau_hoi_id' => 448,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-29 01:14:00',
                'ngay_cap_nhat' => '2026-01-29 01:14:00',
            ),
            83 => 
            array (
                'id' => 1584,
                'cau_hoi_id' => 448,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-29 01:14:00',
                'ngay_cap_nhat' => '2026-01-29 01:14:00',
            ),
            84 => 
            array (
                'id' => 1585,
                'cau_hoi_id' => 449,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-08 12:58:00',
                'ngay_cap_nhat' => '2024-11-08 12:58:00',
            ),
            85 => 
            array (
                'id' => 1586,
                'cau_hoi_id' => 449,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-08 12:58:00',
                'ngay_cap_nhat' => '2024-11-08 12:58:00',
            ),
            86 => 
            array (
                'id' => 1587,
                'cau_hoi_id' => 449,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-08 12:58:00',
                'ngay_cap_nhat' => '2024-11-08 12:58:00',
            ),
            87 => 
            array (
                'id' => 1588,
                'cau_hoi_id' => 449,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-08 12:58:00',
                'ngay_cap_nhat' => '2024-11-08 12:58:00',
            ),
            88 => 
            array (
                'id' => 1589,
                'cau_hoi_id' => 450,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-09-29 23:47:00',
                'ngay_cap_nhat' => '2025-09-29 23:47:00',
            ),
            89 => 
            array (
                'id' => 1590,
                'cau_hoi_id' => 450,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-09-29 23:47:00',
                'ngay_cap_nhat' => '2025-09-29 23:47:00',
            ),
            90 => 
            array (
                'id' => 1591,
                'cau_hoi_id' => 450,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-09-29 23:47:00',
                'ngay_cap_nhat' => '2025-09-29 23:47:00',
            ),
            91 => 
            array (
                'id' => 1592,
                'cau_hoi_id' => 450,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-09-29 23:47:00',
                'ngay_cap_nhat' => '2025-09-29 23:47:00',
            ),
            92 => 
            array (
                'id' => 1593,
                'cau_hoi_id' => 451,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-01 05:56:00',
                'ngay_cap_nhat' => '2024-06-01 05:56:00',
            ),
            93 => 
            array (
                'id' => 1594,
                'cau_hoi_id' => 451,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-01 05:56:00',
                'ngay_cap_nhat' => '2024-06-01 05:56:00',
            ),
            94 => 
            array (
                'id' => 1595,
                'cau_hoi_id' => 451,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-01 05:56:00',
                'ngay_cap_nhat' => '2024-06-01 05:56:00',
            ),
            95 => 
            array (
                'id' => 1596,
                'cau_hoi_id' => 451,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-01 05:56:00',
                'ngay_cap_nhat' => '2024-06-01 05:56:00',
            ),
            96 => 
            array (
                'id' => 1597,
                'cau_hoi_id' => 452,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-29 04:15:00',
                'ngay_cap_nhat' => '2024-06-29 04:15:00',
            ),
            97 => 
            array (
                'id' => 1598,
                'cau_hoi_id' => 452,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-29 04:15:00',
                'ngay_cap_nhat' => '2024-06-29 04:15:00',
            ),
            98 => 
            array (
                'id' => 1599,
                'cau_hoi_id' => 452,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-29 04:15:00',
                'ngay_cap_nhat' => '2024-06-29 04:15:00',
            ),
            99 => 
            array (
                'id' => 1600,
                'cau_hoi_id' => 452,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-29 04:15:00',
                'ngay_cap_nhat' => '2024-06-29 04:15:00',
            ),
            100 => 
            array (
                'id' => 1601,
                'cau_hoi_id' => 453,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-11 18:23:00',
                'ngay_cap_nhat' => '2025-01-11 18:23:00',
            ),
            101 => 
            array (
                'id' => 1602,
                'cau_hoi_id' => 453,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-11 18:23:00',
                'ngay_cap_nhat' => '2025-01-11 18:23:00',
            ),
            102 => 
            array (
                'id' => 1603,
                'cau_hoi_id' => 454,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-07 00:24:00',
                'ngay_cap_nhat' => '2024-05-07 00:24:00',
            ),
            103 => 
            array (
                'id' => 1604,
                'cau_hoi_id' => 454,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-07 00:24:00',
                'ngay_cap_nhat' => '2024-05-07 00:24:00',
            ),
            104 => 
            array (
                'id' => 1605,
                'cau_hoi_id' => 454,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-05-07 00:24:00',
                'ngay_cap_nhat' => '2024-05-07 00:24:00',
            ),
            105 => 
            array (
                'id' => 1606,
                'cau_hoi_id' => 454,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-05-07 00:24:00',
                'ngay_cap_nhat' => '2024-05-07 00:24:00',
            ),
            106 => 
            array (
                'id' => 1607,
                'cau_hoi_id' => 455,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-25 03:37:00',
                'ngay_cap_nhat' => '2026-05-25 03:37:00',
            ),
            107 => 
            array (
                'id' => 1608,
                'cau_hoi_id' => 455,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-25 03:37:00',
                'ngay_cap_nhat' => '2026-05-25 03:37:00',
            ),
            108 => 
            array (
                'id' => 1609,
                'cau_hoi_id' => 455,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-25 03:37:00',
                'ngay_cap_nhat' => '2026-05-25 03:37:00',
            ),
            109 => 
            array (
                'id' => 1610,
                'cau_hoi_id' => 455,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-25 03:37:00',
                'ngay_cap_nhat' => '2026-05-25 03:37:00',
            ),
            110 => 
            array (
                'id' => 1611,
                'cau_hoi_id' => 456,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-07 11:14:00',
                'ngay_cap_nhat' => '2025-07-07 11:14:00',
            ),
            111 => 
            array (
                'id' => 1612,
                'cau_hoi_id' => 456,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-07 11:14:00',
                'ngay_cap_nhat' => '2025-07-07 11:14:00',
            ),
            112 => 
            array (
                'id' => 1613,
                'cau_hoi_id' => 456,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-07-07 11:14:00',
                'ngay_cap_nhat' => '2025-07-07 11:14:00',
            ),
            113 => 
            array (
                'id' => 1614,
                'cau_hoi_id' => 456,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-07-07 11:14:00',
                'ngay_cap_nhat' => '2025-07-07 11:14:00',
            ),
            114 => 
            array (
                'id' => 1615,
                'cau_hoi_id' => 457,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-02 21:54:00',
                'ngay_cap_nhat' => '2024-08-02 21:54:00',
            ),
            115 => 
            array (
                'id' => 1616,
                'cau_hoi_id' => 457,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-02 21:54:00',
                'ngay_cap_nhat' => '2024-08-02 21:54:00',
            ),
            116 => 
            array (
                'id' => 1617,
                'cau_hoi_id' => 458,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-28 03:57:00',
                'ngay_cap_nhat' => '2025-03-28 03:57:00',
            ),
            117 => 
            array (
                'id' => 1618,
                'cau_hoi_id' => 458,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-28 03:57:00',
                'ngay_cap_nhat' => '2025-03-28 03:57:00',
            ),
            118 => 
            array (
                'id' => 1619,
                'cau_hoi_id' => 459,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-27 19:27:00',
                'ngay_cap_nhat' => '2024-03-27 19:27:00',
            ),
            119 => 
            array (
                'id' => 1620,
                'cau_hoi_id' => 459,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-27 19:27:00',
                'ngay_cap_nhat' => '2024-03-27 19:27:00',
            ),
            120 => 
            array (
                'id' => 1621,
                'cau_hoi_id' => 459,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-27 19:27:00',
                'ngay_cap_nhat' => '2024-03-27 19:27:00',
            ),
            121 => 
            array (
                'id' => 1622,
                'cau_hoi_id' => 459,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-27 19:27:00',
                'ngay_cap_nhat' => '2024-03-27 19:27:00',
            ),
            122 => 
            array (
                'id' => 1623,
                'cau_hoi_id' => 460,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-29 05:42:00',
                'ngay_cap_nhat' => '2025-10-29 05:42:00',
            ),
            123 => 
            array (
                'id' => 1624,
                'cau_hoi_id' => 460,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-29 05:42:00',
                'ngay_cap_nhat' => '2025-10-29 05:42:00',
            ),
            124 => 
            array (
                'id' => 1625,
                'cau_hoi_id' => 460,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-29 05:42:00',
                'ngay_cap_nhat' => '2025-10-29 05:42:00',
            ),
            125 => 
            array (
                'id' => 1626,
                'cau_hoi_id' => 460,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-29 05:42:00',
                'ngay_cap_nhat' => '2025-10-29 05:42:00',
            ),
            126 => 
            array (
                'id' => 1627,
                'cau_hoi_id' => 461,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-18 22:06:00',
                'ngay_cap_nhat' => '2024-08-18 22:06:00',
            ),
            127 => 
            array (
                'id' => 1628,
                'cau_hoi_id' => 461,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-18 22:06:00',
                'ngay_cap_nhat' => '2024-08-18 22:06:00',
            ),
            128 => 
            array (
                'id' => 1629,
                'cau_hoi_id' => 461,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-08-18 22:06:00',
                'ngay_cap_nhat' => '2024-08-18 22:06:00',
            ),
            129 => 
            array (
                'id' => 1630,
                'cau_hoi_id' => 461,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-08-18 22:06:00',
                'ngay_cap_nhat' => '2024-08-18 22:06:00',
            ),
            130 => 
            array (
                'id' => 1631,
                'cau_hoi_id' => 462,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-11 10:06:00',
                'ngay_cap_nhat' => '2024-03-11 10:06:00',
            ),
            131 => 
            array (
                'id' => 1632,
                'cau_hoi_id' => 462,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-11 10:06:00',
                'ngay_cap_nhat' => '2024-03-11 10:06:00',
            ),
            132 => 
            array (
                'id' => 1633,
                'cau_hoi_id' => 462,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-11 10:06:00',
                'ngay_cap_nhat' => '2024-03-11 10:06:00',
            ),
            133 => 
            array (
                'id' => 1634,
                'cau_hoi_id' => 462,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-11 10:06:00',
                'ngay_cap_nhat' => '2024-03-11 10:06:00',
            ),
            134 => 
            array (
                'id' => 1635,
                'cau_hoi_id' => 463,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-30 21:53:00',
                'ngay_cap_nhat' => '2024-10-30 21:53:00',
            ),
            135 => 
            array (
                'id' => 1636,
                'cau_hoi_id' => 463,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-30 21:53:00',
                'ngay_cap_nhat' => '2024-10-30 21:53:00',
            ),
            136 => 
            array (
                'id' => 1637,
                'cau_hoi_id' => 463,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-30 21:53:00',
                'ngay_cap_nhat' => '2024-10-30 21:53:00',
            ),
            137 => 
            array (
                'id' => 1638,
                'cau_hoi_id' => 463,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-30 21:53:00',
                'ngay_cap_nhat' => '2024-10-30 21:53:00',
            ),
            138 => 
            array (
                'id' => 1639,
                'cau_hoi_id' => 464,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-21 19:08:00',
                'ngay_cap_nhat' => '2025-06-21 19:08:00',
            ),
            139 => 
            array (
                'id' => 1640,
                'cau_hoi_id' => 464,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-21 19:08:00',
                'ngay_cap_nhat' => '2025-06-21 19:08:00',
            ),
            140 => 
            array (
                'id' => 1641,
                'cau_hoi_id' => 464,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-21 19:08:00',
                'ngay_cap_nhat' => '2025-06-21 19:08:00',
            ),
            141 => 
            array (
                'id' => 1642,
                'cau_hoi_id' => 464,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-21 19:08:00',
                'ngay_cap_nhat' => '2025-06-21 19:08:00',
            ),
            142 => 
            array (
                'id' => 1643,
                'cau_hoi_id' => 465,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-16 20:51:00',
                'ngay_cap_nhat' => '2024-11-16 20:51:00',
            ),
            143 => 
            array (
                'id' => 1644,
                'cau_hoi_id' => 465,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-16 20:51:00',
                'ngay_cap_nhat' => '2024-11-16 20:51:00',
            ),
            144 => 
            array (
                'id' => 1645,
                'cau_hoi_id' => 465,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-16 20:51:00',
                'ngay_cap_nhat' => '2024-11-16 20:51:00',
            ),
            145 => 
            array (
                'id' => 1646,
                'cau_hoi_id' => 465,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-16 20:51:00',
                'ngay_cap_nhat' => '2024-11-16 20:51:00',
            ),
            146 => 
            array (
                'id' => 1647,
                'cau_hoi_id' => 466,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-08 09:49:00',
                'ngay_cap_nhat' => '2024-03-08 09:49:00',
            ),
            147 => 
            array (
                'id' => 1648,
                'cau_hoi_id' => 466,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-08 09:49:00',
                'ngay_cap_nhat' => '2024-03-08 09:49:00',
            ),
            148 => 
            array (
                'id' => 1649,
                'cau_hoi_id' => 466,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-08 09:49:00',
                'ngay_cap_nhat' => '2024-03-08 09:49:00',
            ),
            149 => 
            array (
                'id' => 1650,
                'cau_hoi_id' => 466,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-08 09:49:00',
                'ngay_cap_nhat' => '2024-03-08 09:49:00',
            ),
            150 => 
            array (
                'id' => 1651,
                'cau_hoi_id' => 467,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-10 12:53:00',
                'ngay_cap_nhat' => '2025-12-10 12:53:00',
            ),
            151 => 
            array (
                'id' => 1652,
                'cau_hoi_id' => 467,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-10 12:53:00',
                'ngay_cap_nhat' => '2025-12-10 12:53:00',
            ),
            152 => 
            array (
                'id' => 1653,
                'cau_hoi_id' => 468,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-27 05:37:00',
                'ngay_cap_nhat' => '2024-10-27 05:37:00',
            ),
            153 => 
            array (
                'id' => 1654,
                'cau_hoi_id' => 468,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-27 05:37:00',
                'ngay_cap_nhat' => '2024-10-27 05:37:00',
            ),
            154 => 
            array (
                'id' => 1655,
                'cau_hoi_id' => 468,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-27 05:37:00',
                'ngay_cap_nhat' => '2024-10-27 05:37:00',
            ),
            155 => 
            array (
                'id' => 1656,
                'cau_hoi_id' => 468,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-27 05:37:00',
                'ngay_cap_nhat' => '2024-10-27 05:37:00',
            ),
            156 => 
            array (
                'id' => 1657,
                'cau_hoi_id' => 469,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-04-28 05:21:00',
                'ngay_cap_nhat' => '2024-04-28 05:21:00',
            ),
            157 => 
            array (
                'id' => 1658,
                'cau_hoi_id' => 469,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-04-28 05:21:00',
                'ngay_cap_nhat' => '2024-04-28 05:21:00',
            ),
            158 => 
            array (
                'id' => 1659,
                'cau_hoi_id' => 469,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-04-28 05:21:00',
                'ngay_cap_nhat' => '2024-04-28 05:21:00',
            ),
            159 => 
            array (
                'id' => 1660,
                'cau_hoi_id' => 469,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-04-28 05:21:00',
                'ngay_cap_nhat' => '2024-04-28 05:21:00',
            ),
            160 => 
            array (
                'id' => 1661,
                'cau_hoi_id' => 470,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-29 11:47:00',
                'ngay_cap_nhat' => '2025-07-29 11:47:00',
            ),
            161 => 
            array (
                'id' => 1662,
                'cau_hoi_id' => 470,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-29 11:47:00',
                'ngay_cap_nhat' => '2025-07-29 11:47:00',
            ),
            162 => 
            array (
                'id' => 1663,
                'cau_hoi_id' => 470,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-07-29 11:47:00',
                'ngay_cap_nhat' => '2025-07-29 11:47:00',
            ),
            163 => 
            array (
                'id' => 1664,
                'cau_hoi_id' => 470,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-07-29 11:47:00',
                'ngay_cap_nhat' => '2025-07-29 11:47:00',
            ),
            164 => 
            array (
                'id' => 1665,
                'cau_hoi_id' => 471,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-22 15:08:00',
                'ngay_cap_nhat' => '2026-05-22 15:08:00',
            ),
            165 => 
            array (
                'id' => 1666,
                'cau_hoi_id' => 471,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-22 15:08:00',
                'ngay_cap_nhat' => '2026-05-22 15:08:00',
            ),
            166 => 
            array (
                'id' => 1667,
                'cau_hoi_id' => 472,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-19 23:32:00',
                'ngay_cap_nhat' => '2024-03-19 23:32:00',
            ),
            167 => 
            array (
                'id' => 1668,
                'cau_hoi_id' => 472,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-19 23:32:00',
                'ngay_cap_nhat' => '2024-03-19 23:32:00',
            ),
            168 => 
            array (
                'id' => 1669,
                'cau_hoi_id' => 473,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-07 21:37:00',
                'ngay_cap_nhat' => '2024-07-07 21:37:00',
            ),
            169 => 
            array (
                'id' => 1670,
                'cau_hoi_id' => 473,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-07 21:37:00',
                'ngay_cap_nhat' => '2024-07-07 21:37:00',
            ),
            170 => 
            array (
                'id' => 1671,
                'cau_hoi_id' => 474,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-07 06:55:00',
                'ngay_cap_nhat' => '2025-01-07 06:55:00',
            ),
            171 => 
            array (
                'id' => 1672,
                'cau_hoi_id' => 474,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-07 06:55:00',
                'ngay_cap_nhat' => '2025-01-07 06:55:00',
            ),
            172 => 
            array (
                'id' => 1673,
                'cau_hoi_id' => 474,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-07 06:55:00',
                'ngay_cap_nhat' => '2025-01-07 06:55:00',
            ),
            173 => 
            array (
                'id' => 1674,
                'cau_hoi_id' => 474,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-07 06:55:00',
                'ngay_cap_nhat' => '2025-01-07 06:55:00',
            ),
            174 => 
            array (
                'id' => 1675,
                'cau_hoi_id' => 475,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-06 05:35:00',
                'ngay_cap_nhat' => '2025-04-06 05:35:00',
            ),
            175 => 
            array (
                'id' => 1676,
                'cau_hoi_id' => 475,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-06 05:35:00',
                'ngay_cap_nhat' => '2025-04-06 05:35:00',
            ),
            176 => 
            array (
                'id' => 1677,
                'cau_hoi_id' => 475,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-06 05:35:00',
                'ngay_cap_nhat' => '2025-04-06 05:35:00',
            ),
            177 => 
            array (
                'id' => 1678,
                'cau_hoi_id' => 475,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-06 05:35:00',
                'ngay_cap_nhat' => '2025-04-06 05:35:00',
            ),
            178 => 
            array (
                'id' => 1679,
                'cau_hoi_id' => 476,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-29 05:22:00',
                'ngay_cap_nhat' => '2025-08-29 05:22:00',
            ),
            179 => 
            array (
                'id' => 1680,
                'cau_hoi_id' => 476,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-29 05:22:00',
                'ngay_cap_nhat' => '2025-08-29 05:22:00',
            ),
            180 => 
            array (
                'id' => 1681,
                'cau_hoi_id' => 476,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-08-29 05:22:00',
                'ngay_cap_nhat' => '2025-08-29 05:22:00',
            ),
            181 => 
            array (
                'id' => 1682,
                'cau_hoi_id' => 476,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-08-29 05:22:00',
                'ngay_cap_nhat' => '2025-08-29 05:22:00',
            ),
            182 => 
            array (
                'id' => 1683,
                'cau_hoi_id' => 477,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-26 06:37:00',
                'ngay_cap_nhat' => '2025-04-26 06:37:00',
            ),
            183 => 
            array (
                'id' => 1684,
                'cau_hoi_id' => 477,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-26 06:37:00',
                'ngay_cap_nhat' => '2025-04-26 06:37:00',
            ),
            184 => 
            array (
                'id' => 1685,
                'cau_hoi_id' => 477,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-26 06:37:00',
                'ngay_cap_nhat' => '2025-04-26 06:37:00',
            ),
            185 => 
            array (
                'id' => 1686,
                'cau_hoi_id' => 477,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-26 06:37:00',
                'ngay_cap_nhat' => '2025-04-26 06:37:00',
            ),
            186 => 
            array (
                'id' => 1687,
                'cau_hoi_id' => 478,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-21 05:15:00',
                'ngay_cap_nhat' => '2026-05-21 05:15:00',
            ),
            187 => 
            array (
                'id' => 1688,
                'cau_hoi_id' => 478,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-21 05:15:00',
                'ngay_cap_nhat' => '2026-05-21 05:15:00',
            ),
            188 => 
            array (
                'id' => 1689,
                'cau_hoi_id' => 478,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-21 05:15:00',
                'ngay_cap_nhat' => '2026-05-21 05:15:00',
            ),
            189 => 
            array (
                'id' => 1690,
                'cau_hoi_id' => 478,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-21 05:15:00',
                'ngay_cap_nhat' => '2026-05-21 05:15:00',
            ),
            190 => 
            array (
                'id' => 1691,
                'cau_hoi_id' => 479,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-11 22:41:00',
                'ngay_cap_nhat' => '2025-11-11 22:41:00',
            ),
            191 => 
            array (
                'id' => 1692,
                'cau_hoi_id' => 479,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-11 22:41:00',
                'ngay_cap_nhat' => '2025-11-11 22:41:00',
            ),
            192 => 
            array (
                'id' => 1693,
                'cau_hoi_id' => 479,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-11 22:41:00',
                'ngay_cap_nhat' => '2025-11-11 22:41:00',
            ),
            193 => 
            array (
                'id' => 1694,
                'cau_hoi_id' => 479,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-11 22:41:00',
                'ngay_cap_nhat' => '2025-11-11 22:41:00',
            ),
            194 => 
            array (
                'id' => 1695,
                'cau_hoi_id' => 480,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-24 12:00:00',
                'ngay_cap_nhat' => '2025-04-24 12:00:00',
            ),
            195 => 
            array (
                'id' => 1696,
                'cau_hoi_id' => 480,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-24 12:00:00',
                'ngay_cap_nhat' => '2025-04-24 12:00:00',
            ),
            196 => 
            array (
                'id' => 1697,
                'cau_hoi_id' => 480,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-24 12:00:00',
                'ngay_cap_nhat' => '2025-04-24 12:00:00',
            ),
            197 => 
            array (
                'id' => 1698,
                'cau_hoi_id' => 480,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-24 12:00:00',
                'ngay_cap_nhat' => '2025-04-24 12:00:00',
            ),
            198 => 
            array (
                'id' => 1699,
                'cau_hoi_id' => 481,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-08 15:53:00',
                'ngay_cap_nhat' => '2024-05-08 15:53:00',
            ),
            199 => 
            array (
                'id' => 1700,
                'cau_hoi_id' => 481,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-08 15:53:00',
                'ngay_cap_nhat' => '2024-05-08 15:53:00',
            ),
            200 => 
            array (
                'id' => 1701,
                'cau_hoi_id' => 481,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-05-08 15:53:00',
                'ngay_cap_nhat' => '2024-05-08 15:53:00',
            ),
            201 => 
            array (
                'id' => 1702,
                'cau_hoi_id' => 481,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-05-08 15:53:00',
                'ngay_cap_nhat' => '2024-05-08 15:53:00',
            ),
            202 => 
            array (
                'id' => 1703,
                'cau_hoi_id' => 482,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-26 02:36:00',
                'ngay_cap_nhat' => '2026-03-26 02:36:00',
            ),
            203 => 
            array (
                'id' => 1704,
                'cau_hoi_id' => 482,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-26 02:36:00',
                'ngay_cap_nhat' => '2026-03-26 02:36:00',
            ),
            204 => 
            array (
                'id' => 1705,
                'cau_hoi_id' => 482,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-03-26 02:36:00',
                'ngay_cap_nhat' => '2026-03-26 02:36:00',
            ),
            205 => 
            array (
                'id' => 1706,
                'cau_hoi_id' => 482,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-03-26 02:36:00',
                'ngay_cap_nhat' => '2026-03-26 02:36:00',
            ),
            206 => 
            array (
                'id' => 1707,
                'cau_hoi_id' => 483,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-12 09:53:00',
                'ngay_cap_nhat' => '2024-08-12 09:53:00',
            ),
            207 => 
            array (
                'id' => 1708,
                'cau_hoi_id' => 483,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-12 09:53:00',
                'ngay_cap_nhat' => '2024-08-12 09:53:00',
            ),
            208 => 
            array (
                'id' => 1709,
                'cau_hoi_id' => 483,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-08-12 09:53:00',
                'ngay_cap_nhat' => '2024-08-12 09:53:00',
            ),
            209 => 
            array (
                'id' => 1710,
                'cau_hoi_id' => 483,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-08-12 09:53:00',
                'ngay_cap_nhat' => '2024-08-12 09:53:00',
            ),
            210 => 
            array (
                'id' => 1711,
                'cau_hoi_id' => 484,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-10 01:26:00',
                'ngay_cap_nhat' => '2026-02-10 01:26:00',
            ),
            211 => 
            array (
                'id' => 1712,
                'cau_hoi_id' => 484,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-10 01:26:00',
                'ngay_cap_nhat' => '2026-02-10 01:26:00',
            ),
            212 => 
            array (
                'id' => 1713,
                'cau_hoi_id' => 485,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-11 21:02:00',
                'ngay_cap_nhat' => '2025-07-11 21:02:00',
            ),
            213 => 
            array (
                'id' => 1714,
                'cau_hoi_id' => 485,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-11 21:02:00',
                'ngay_cap_nhat' => '2025-07-11 21:02:00',
            ),
            214 => 
            array (
                'id' => 1715,
                'cau_hoi_id' => 485,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-07-11 21:02:00',
                'ngay_cap_nhat' => '2025-07-11 21:02:00',
            ),
            215 => 
            array (
                'id' => 1716,
                'cau_hoi_id' => 485,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-07-11 21:02:00',
                'ngay_cap_nhat' => '2025-07-11 21:02:00',
            ),
            216 => 
            array (
                'id' => 1717,
                'cau_hoi_id' => 486,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-06 13:53:00',
                'ngay_cap_nhat' => '2026-04-06 13:53:00',
            ),
            217 => 
            array (
                'id' => 1718,
                'cau_hoi_id' => 486,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-06 13:53:00',
                'ngay_cap_nhat' => '2026-04-06 13:53:00',
            ),
            218 => 
            array (
                'id' => 1719,
                'cau_hoi_id' => 486,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-06 13:53:00',
                'ngay_cap_nhat' => '2026-04-06 13:53:00',
            ),
            219 => 
            array (
                'id' => 1720,
                'cau_hoi_id' => 486,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-06 13:53:00',
                'ngay_cap_nhat' => '2026-04-06 13:53:00',
            ),
            220 => 
            array (
                'id' => 1721,
                'cau_hoi_id' => 487,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-10 22:33:00',
                'ngay_cap_nhat' => '2024-10-10 22:33:00',
            ),
            221 => 
            array (
                'id' => 1722,
                'cau_hoi_id' => 487,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-10 22:33:00',
                'ngay_cap_nhat' => '2024-10-10 22:33:00',
            ),
            222 => 
            array (
                'id' => 1723,
                'cau_hoi_id' => 488,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-16 18:20:00',
                'ngay_cap_nhat' => '2024-03-16 18:20:00',
            ),
            223 => 
            array (
                'id' => 1724,
                'cau_hoi_id' => 488,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-16 18:20:00',
                'ngay_cap_nhat' => '2024-03-16 18:20:00',
            ),
            224 => 
            array (
                'id' => 1725,
                'cau_hoi_id' => 488,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-03-16 18:20:00',
                'ngay_cap_nhat' => '2024-03-16 18:20:00',
            ),
            225 => 
            array (
                'id' => 1726,
                'cau_hoi_id' => 488,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-03-16 18:20:00',
                'ngay_cap_nhat' => '2024-03-16 18:20:00',
            ),
            226 => 
            array (
                'id' => 1727,
                'cau_hoi_id' => 489,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-10 21:09:00',
                'ngay_cap_nhat' => '2025-05-10 21:09:00',
            ),
            227 => 
            array (
                'id' => 1728,
                'cau_hoi_id' => 489,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-10 21:09:00',
                'ngay_cap_nhat' => '2025-05-10 21:09:00',
            ),
            228 => 
            array (
                'id' => 1729,
                'cau_hoi_id' => 489,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-10 21:09:00',
                'ngay_cap_nhat' => '2025-05-10 21:09:00',
            ),
            229 => 
            array (
                'id' => 1730,
                'cau_hoi_id' => 489,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-10 21:09:00',
                'ngay_cap_nhat' => '2025-05-10 21:09:00',
            ),
            230 => 
            array (
                'id' => 1731,
                'cau_hoi_id' => 490,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-13 20:59:00',
                'ngay_cap_nhat' => '2024-03-13 20:59:00',
            ),
            231 => 
            array (
                'id' => 1732,
                'cau_hoi_id' => 490,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-13 20:59:00',
                'ngay_cap_nhat' => '2024-03-13 20:59:00',
            ),
            232 => 
            array (
                'id' => 1733,
                'cau_hoi_id' => 491,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-28 02:27:00',
                'ngay_cap_nhat' => '2026-02-28 02:27:00',
            ),
            233 => 
            array (
                'id' => 1734,
                'cau_hoi_id' => 491,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-28 02:27:00',
                'ngay_cap_nhat' => '2026-02-28 02:27:00',
            ),
            234 => 
            array (
                'id' => 1735,
                'cau_hoi_id' => 491,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-02-28 02:27:00',
                'ngay_cap_nhat' => '2026-02-28 02:27:00',
            ),
            235 => 
            array (
                'id' => 1736,
                'cau_hoi_id' => 491,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-02-28 02:27:00',
                'ngay_cap_nhat' => '2026-02-28 02:27:00',
            ),
            236 => 
            array (
                'id' => 1737,
                'cau_hoi_id' => 492,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-28 23:12:00',
                'ngay_cap_nhat' => '2024-06-28 23:12:00',
            ),
            237 => 
            array (
                'id' => 1738,
                'cau_hoi_id' => 492,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-28 23:12:00',
                'ngay_cap_nhat' => '2024-06-28 23:12:00',
            ),
            238 => 
            array (
                'id' => 1739,
                'cau_hoi_id' => 492,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-28 23:12:00',
                'ngay_cap_nhat' => '2024-06-28 23:12:00',
            ),
            239 => 
            array (
                'id' => 1740,
                'cau_hoi_id' => 492,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-28 23:12:00',
                'ngay_cap_nhat' => '2024-06-28 23:12:00',
            ),
            240 => 
            array (
                'id' => 1741,
                'cau_hoi_id' => 493,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-10 01:27:00',
                'ngay_cap_nhat' => '2026-04-10 01:27:00',
            ),
            241 => 
            array (
                'id' => 1742,
                'cau_hoi_id' => 493,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-10 01:27:00',
                'ngay_cap_nhat' => '2026-04-10 01:27:00',
            ),
            242 => 
            array (
                'id' => 1743,
                'cau_hoi_id' => 494,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-09 09:11:00',
                'ngay_cap_nhat' => '2025-11-09 09:11:00',
            ),
            243 => 
            array (
                'id' => 1744,
                'cau_hoi_id' => 494,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-09 09:11:00',
                'ngay_cap_nhat' => '2025-11-09 09:11:00',
            ),
            244 => 
            array (
                'id' => 1745,
                'cau_hoi_id' => 494,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-09 09:11:00',
                'ngay_cap_nhat' => '2025-11-09 09:11:00',
            ),
            245 => 
            array (
                'id' => 1746,
                'cau_hoi_id' => 494,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-09 09:11:00',
                'ngay_cap_nhat' => '2025-11-09 09:11:00',
            ),
            246 => 
            array (
                'id' => 1747,
                'cau_hoi_id' => 495,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-30 10:06:00',
                'ngay_cap_nhat' => '2025-01-30 10:06:00',
            ),
            247 => 
            array (
                'id' => 1748,
                'cau_hoi_id' => 495,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-30 10:06:00',
                'ngay_cap_nhat' => '2025-01-30 10:06:00',
            ),
            248 => 
            array (
                'id' => 1749,
                'cau_hoi_id' => 495,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-30 10:06:00',
                'ngay_cap_nhat' => '2025-01-30 10:06:00',
            ),
            249 => 
            array (
                'id' => 1750,
                'cau_hoi_id' => 495,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-30 10:06:00',
                'ngay_cap_nhat' => '2025-01-30 10:06:00',
            ),
            250 => 
            array (
                'id' => 1751,
                'cau_hoi_id' => 496,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-21 18:12:00',
                'ngay_cap_nhat' => '2025-11-21 18:12:00',
            ),
            251 => 
            array (
                'id' => 1752,
                'cau_hoi_id' => 496,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-21 18:12:00',
                'ngay_cap_nhat' => '2025-11-21 18:12:00',
            ),
            252 => 
            array (
                'id' => 1753,
                'cau_hoi_id' => 497,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-04 01:56:00',
                'ngay_cap_nhat' => '2024-09-04 01:56:00',
            ),
            253 => 
            array (
                'id' => 1754,
                'cau_hoi_id' => 497,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-04 01:56:00',
                'ngay_cap_nhat' => '2024-09-04 01:56:00',
            ),
            254 => 
            array (
                'id' => 1755,
                'cau_hoi_id' => 497,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-04 01:56:00',
                'ngay_cap_nhat' => '2024-09-04 01:56:00',
            ),
            255 => 
            array (
                'id' => 1756,
                'cau_hoi_id' => 497,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-04 01:56:00',
                'ngay_cap_nhat' => '2024-09-04 01:56:00',
            ),
            256 => 
            array (
                'id' => 1757,
                'cau_hoi_id' => 498,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-05-19 15:10:00',
                'ngay_cap_nhat' => '2024-05-19 15:10:00',
            ),
            257 => 
            array (
                'id' => 1758,
                'cau_hoi_id' => 498,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-05-19 15:10:00',
                'ngay_cap_nhat' => '2024-05-19 15:10:00',
            ),
            258 => 
            array (
                'id' => 1759,
                'cau_hoi_id' => 498,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-05-19 15:10:00',
                'ngay_cap_nhat' => '2024-05-19 15:10:00',
            ),
            259 => 
            array (
                'id' => 1760,
                'cau_hoi_id' => 498,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-05-19 15:10:00',
                'ngay_cap_nhat' => '2024-05-19 15:10:00',
            ),
            260 => 
            array (
                'id' => 1761,
                'cau_hoi_id' => 499,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-17 14:36:00',
                'ngay_cap_nhat' => '2024-11-17 14:36:00',
            ),
            261 => 
            array (
                'id' => 1762,
                'cau_hoi_id' => 499,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-17 14:36:00',
                'ngay_cap_nhat' => '2024-11-17 14:36:00',
            ),
            262 => 
            array (
                'id' => 1763,
                'cau_hoi_id' => 500,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-26 17:23:00',
                'ngay_cap_nhat' => '2024-12-26 17:23:00',
            ),
            263 => 
            array (
                'id' => 1764,
                'cau_hoi_id' => 500,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-26 17:23:00',
                'ngay_cap_nhat' => '2024-12-26 17:23:00',
            ),
            264 => 
            array (
                'id' => 1765,
                'cau_hoi_id' => 500,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-12-26 17:23:00',
                'ngay_cap_nhat' => '2024-12-26 17:23:00',
            ),
            265 => 
            array (
                'id' => 1766,
                'cau_hoi_id' => 500,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-12-26 17:23:00',
                'ngay_cap_nhat' => '2024-12-26 17:23:00',
            ),
            266 => 
            array (
                'id' => 1767,
                'cau_hoi_id' => 501,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-03 01:17:00',
                'ngay_cap_nhat' => '2025-10-03 01:17:00',
            ),
            267 => 
            array (
                'id' => 1768,
                'cau_hoi_id' => 501,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-03 01:17:00',
                'ngay_cap_nhat' => '2025-10-03 01:17:00',
            ),
            268 => 
            array (
                'id' => 1769,
                'cau_hoi_id' => 502,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-19 16:27:00',
                'ngay_cap_nhat' => '2024-09-19 16:27:00',
            ),
            269 => 
            array (
                'id' => 1770,
                'cau_hoi_id' => 502,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-19 16:27:00',
                'ngay_cap_nhat' => '2024-09-19 16:27:00',
            ),
            270 => 
            array (
                'id' => 1771,
                'cau_hoi_id' => 503,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-29 00:00:00',
                'ngay_cap_nhat' => '2025-12-29 00:00:00',
            ),
            271 => 
            array (
                'id' => 1772,
                'cau_hoi_id' => 503,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-29 00:00:00',
                'ngay_cap_nhat' => '2025-12-29 00:00:00',
            ),
            272 => 
            array (
                'id' => 1773,
                'cau_hoi_id' => 503,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-12-29 00:00:00',
                'ngay_cap_nhat' => '2025-12-29 00:00:00',
            ),
            273 => 
            array (
                'id' => 1774,
                'cau_hoi_id' => 503,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-12-29 00:00:00',
                'ngay_cap_nhat' => '2025-12-29 00:00:00',
            ),
            274 => 
            array (
                'id' => 1775,
                'cau_hoi_id' => 504,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-06-02 12:46:00',
                'ngay_cap_nhat' => '2024-06-02 12:46:00',
            ),
            275 => 
            array (
                'id' => 1776,
                'cau_hoi_id' => 504,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-06-02 12:46:00',
                'ngay_cap_nhat' => '2024-06-02 12:46:00',
            ),
            276 => 
            array (
                'id' => 1777,
                'cau_hoi_id' => 504,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-06-02 12:46:00',
                'ngay_cap_nhat' => '2024-06-02 12:46:00',
            ),
            277 => 
            array (
                'id' => 1778,
                'cau_hoi_id' => 504,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-06-02 12:46:00',
                'ngay_cap_nhat' => '2024-06-02 12:46:00',
            ),
            278 => 
            array (
                'id' => 1779,
                'cau_hoi_id' => 505,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-29 02:16:00',
                'ngay_cap_nhat' => '2025-08-29 02:16:00',
            ),
            279 => 
            array (
                'id' => 1780,
                'cau_hoi_id' => 505,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-29 02:16:00',
                'ngay_cap_nhat' => '2025-08-29 02:16:00',
            ),
            280 => 
            array (
                'id' => 1781,
                'cau_hoi_id' => 505,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-08-29 02:16:00',
                'ngay_cap_nhat' => '2025-08-29 02:16:00',
            ),
            281 => 
            array (
                'id' => 1782,
                'cau_hoi_id' => 505,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-08-29 02:16:00',
                'ngay_cap_nhat' => '2025-08-29 02:16:00',
            ),
            282 => 
            array (
                'id' => 1783,
                'cau_hoi_id' => 506,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-11 13:47:00',
                'ngay_cap_nhat' => '2025-12-11 13:47:00',
            ),
            283 => 
            array (
                'id' => 1784,
                'cau_hoi_id' => 506,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-11 13:47:00',
                'ngay_cap_nhat' => '2025-12-11 13:47:00',
            ),
            284 => 
            array (
                'id' => 1785,
                'cau_hoi_id' => 507,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-14 14:32:00',
                'ngay_cap_nhat' => '2024-10-14 14:32:00',
            ),
            285 => 
            array (
                'id' => 1786,
                'cau_hoi_id' => 507,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-14 14:32:00',
                'ngay_cap_nhat' => '2024-10-14 14:32:00',
            ),
            286 => 
            array (
                'id' => 1787,
                'cau_hoi_id' => 507,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-14 14:32:00',
                'ngay_cap_nhat' => '2024-10-14 14:32:00',
            ),
            287 => 
            array (
                'id' => 1788,
                'cau_hoi_id' => 507,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-14 14:32:00',
                'ngay_cap_nhat' => '2024-10-14 14:32:00',
            ),
            288 => 
            array (
                'id' => 1789,
                'cau_hoi_id' => 508,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-16 12:05:00',
                'ngay_cap_nhat' => '2026-03-16 12:05:00',
            ),
            289 => 
            array (
                'id' => 1790,
                'cau_hoi_id' => 508,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-16 12:05:00',
                'ngay_cap_nhat' => '2026-03-16 12:05:00',
            ),
            290 => 
            array (
                'id' => 1791,
                'cau_hoi_id' => 508,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-03-16 12:05:00',
                'ngay_cap_nhat' => '2026-03-16 12:05:00',
            ),
            291 => 
            array (
                'id' => 1792,
                'cau_hoi_id' => 508,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-03-16 12:05:00',
                'ngay_cap_nhat' => '2026-03-16 12:05:00',
            ),
            292 => 
            array (
                'id' => 1793,
                'cau_hoi_id' => 509,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-29 14:08:00',
                'ngay_cap_nhat' => '2025-04-29 14:08:00',
            ),
            293 => 
            array (
                'id' => 1794,
                'cau_hoi_id' => 509,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-29 14:08:00',
                'ngay_cap_nhat' => '2025-04-29 14:08:00',
            ),
            294 => 
            array (
                'id' => 1795,
                'cau_hoi_id' => 510,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-18 17:59:00',
                'ngay_cap_nhat' => '2025-04-18 17:59:00',
            ),
            295 => 
            array (
                'id' => 1796,
                'cau_hoi_id' => 510,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-18 17:59:00',
                'ngay_cap_nhat' => '2025-04-18 17:59:00',
            ),
            296 => 
            array (
                'id' => 1797,
                'cau_hoi_id' => 511,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-01-04 09:56:00',
                'ngay_cap_nhat' => '2026-01-04 09:56:00',
            ),
            297 => 
            array (
                'id' => 1798,
                'cau_hoi_id' => 511,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-01-04 09:56:00',
                'ngay_cap_nhat' => '2026-01-04 09:56:00',
            ),
            298 => 
            array (
                'id' => 1799,
                'cau_hoi_id' => 511,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-01-04 09:56:00',
                'ngay_cap_nhat' => '2026-01-04 09:56:00',
            ),
            299 => 
            array (
                'id' => 1800,
                'cau_hoi_id' => 511,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-01-04 09:56:00',
                'ngay_cap_nhat' => '2026-01-04 09:56:00',
            ),
            300 => 
            array (
                'id' => 1801,
                'cau_hoi_id' => 512,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-31 14:30:00',
                'ngay_cap_nhat' => '2024-07-31 14:30:00',
            ),
            301 => 
            array (
                'id' => 1802,
                'cau_hoi_id' => 512,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-31 14:30:00',
                'ngay_cap_nhat' => '2024-07-31 14:30:00',
            ),
            302 => 
            array (
                'id' => 1803,
                'cau_hoi_id' => 512,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-31 14:30:00',
                'ngay_cap_nhat' => '2024-07-31 14:30:00',
            ),
            303 => 
            array (
                'id' => 1804,
                'cau_hoi_id' => 512,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-31 14:30:00',
                'ngay_cap_nhat' => '2024-07-31 14:30:00',
            ),
            304 => 
            array (
                'id' => 1805,
                'cau_hoi_id' => 513,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-10 10:02:00',
                'ngay_cap_nhat' => '2025-01-10 10:02:00',
            ),
            305 => 
            array (
                'id' => 1806,
                'cau_hoi_id' => 513,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-10 10:02:00',
                'ngay_cap_nhat' => '2025-01-10 10:02:00',
            ),
            306 => 
            array (
                'id' => 1807,
                'cau_hoi_id' => 513,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-10 10:02:00',
                'ngay_cap_nhat' => '2025-01-10 10:02:00',
            ),
            307 => 
            array (
                'id' => 1808,
                'cau_hoi_id' => 513,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-10 10:02:00',
                'ngay_cap_nhat' => '2025-01-10 10:02:00',
            ),
            308 => 
            array (
                'id' => 1809,
                'cau_hoi_id' => 514,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-28 11:26:00',
                'ngay_cap_nhat' => '2024-10-28 11:26:00',
            ),
            309 => 
            array (
                'id' => 1810,
                'cau_hoi_id' => 514,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-28 11:26:00',
                'ngay_cap_nhat' => '2024-10-28 11:26:00',
            ),
            310 => 
            array (
                'id' => 1811,
                'cau_hoi_id' => 514,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-28 11:26:00',
                'ngay_cap_nhat' => '2024-10-28 11:26:00',
            ),
            311 => 
            array (
                'id' => 1812,
                'cau_hoi_id' => 514,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-28 11:26:00',
                'ngay_cap_nhat' => '2024-10-28 11:26:00',
            ),
            312 => 
            array (
                'id' => 1813,
                'cau_hoi_id' => 515,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-09 14:17:00',
                'ngay_cap_nhat' => '2024-11-09 14:17:00',
            ),
            313 => 
            array (
                'id' => 1814,
                'cau_hoi_id' => 515,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-09 14:17:00',
                'ngay_cap_nhat' => '2024-11-09 14:17:00',
            ),
            314 => 
            array (
                'id' => 1815,
                'cau_hoi_id' => 515,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-09 14:17:00',
                'ngay_cap_nhat' => '2024-11-09 14:17:00',
            ),
            315 => 
            array (
                'id' => 1816,
                'cau_hoi_id' => 515,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-09 14:17:00',
                'ngay_cap_nhat' => '2024-11-09 14:17:00',
            ),
            316 => 
            array (
                'id' => 1817,
                'cau_hoi_id' => 516,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-21 14:42:00',
                'ngay_cap_nhat' => '2025-12-21 14:42:00',
            ),
            317 => 
            array (
                'id' => 1818,
                'cau_hoi_id' => 516,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-21 14:42:00',
                'ngay_cap_nhat' => '2025-12-21 14:42:00',
            ),
            318 => 
            array (
                'id' => 1819,
                'cau_hoi_id' => 517,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-26 22:50:00',
                'ngay_cap_nhat' => '2025-06-26 22:50:00',
            ),
            319 => 
            array (
                'id' => 1820,
                'cau_hoi_id' => 517,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-26 22:50:00',
                'ngay_cap_nhat' => '2025-06-26 22:50:00',
            ),
            320 => 
            array (
                'id' => 1821,
                'cau_hoi_id' => 517,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-06-26 22:50:00',
                'ngay_cap_nhat' => '2025-06-26 22:50:00',
            ),
            321 => 
            array (
                'id' => 1822,
                'cau_hoi_id' => 517,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-06-26 22:50:00',
                'ngay_cap_nhat' => '2025-06-26 22:50:00',
            ),
            322 => 
            array (
                'id' => 1823,
                'cau_hoi_id' => 518,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-06-30 18:41:00',
                'ngay_cap_nhat' => '2025-06-30 18:41:00',
            ),
            323 => 
            array (
                'id' => 1824,
                'cau_hoi_id' => 518,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-06-30 18:41:00',
                'ngay_cap_nhat' => '2025-06-30 18:41:00',
            ),
            324 => 
            array (
                'id' => 1825,
                'cau_hoi_id' => 519,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-20 00:49:00',
                'ngay_cap_nhat' => '2025-11-20 00:49:00',
            ),
            325 => 
            array (
                'id' => 1826,
                'cau_hoi_id' => 519,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-20 00:49:00',
                'ngay_cap_nhat' => '2025-11-20 00:49:00',
            ),
            326 => 
            array (
                'id' => 1827,
                'cau_hoi_id' => 519,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-20 00:49:00',
                'ngay_cap_nhat' => '2025-11-20 00:49:00',
            ),
            327 => 
            array (
                'id' => 1828,
                'cau_hoi_id' => 519,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-20 00:49:00',
                'ngay_cap_nhat' => '2025-11-20 00:49:00',
            ),
            328 => 
            array (
                'id' => 1829,
                'cau_hoi_id' => 520,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-03 01:24:00',
                'ngay_cap_nhat' => '2025-11-03 01:24:00',
            ),
            329 => 
            array (
                'id' => 1830,
                'cau_hoi_id' => 520,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-03 01:24:00',
                'ngay_cap_nhat' => '2025-11-03 01:24:00',
            ),
            330 => 
            array (
                'id' => 1831,
                'cau_hoi_id' => 520,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-03 01:24:00',
                'ngay_cap_nhat' => '2025-11-03 01:24:00',
            ),
            331 => 
            array (
                'id' => 1832,
                'cau_hoi_id' => 520,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-03 01:24:00',
                'ngay_cap_nhat' => '2025-11-03 01:24:00',
            ),
            332 => 
            array (
                'id' => 1833,
                'cau_hoi_id' => 521,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-10 22:39:00',
                'ngay_cap_nhat' => '2025-08-10 22:39:00',
            ),
            333 => 
            array (
                'id' => 1834,
                'cau_hoi_id' => 521,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-10 22:39:00',
                'ngay_cap_nhat' => '2025-08-10 22:39:00',
            ),
            334 => 
            array (
                'id' => 1835,
                'cau_hoi_id' => 521,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-08-10 22:39:00',
                'ngay_cap_nhat' => '2025-08-10 22:39:00',
            ),
            335 => 
            array (
                'id' => 1836,
                'cau_hoi_id' => 521,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-08-10 22:39:00',
                'ngay_cap_nhat' => '2025-08-10 22:39:00',
            ),
            336 => 
            array (
                'id' => 1837,
                'cau_hoi_id' => 522,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-01-25 00:54:00',
                'ngay_cap_nhat' => '2025-01-25 00:54:00',
            ),
            337 => 
            array (
                'id' => 1838,
                'cau_hoi_id' => 522,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-01-25 00:54:00',
                'ngay_cap_nhat' => '2025-01-25 00:54:00',
            ),
            338 => 
            array (
                'id' => 1839,
                'cau_hoi_id' => 522,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-01-25 00:54:00',
                'ngay_cap_nhat' => '2025-01-25 00:54:00',
            ),
            339 => 
            array (
                'id' => 1840,
                'cau_hoi_id' => 522,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-01-25 00:54:00',
                'ngay_cap_nhat' => '2025-01-25 00:54:00',
            ),
            340 => 
            array (
                'id' => 1841,
                'cau_hoi_id' => 523,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-24 20:54:00',
                'ngay_cap_nhat' => '2024-11-24 20:54:00',
            ),
            341 => 
            array (
                'id' => 1842,
                'cau_hoi_id' => 523,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-24 20:54:00',
                'ngay_cap_nhat' => '2024-11-24 20:54:00',
            ),
            342 => 
            array (
                'id' => 1843,
                'cau_hoi_id' => 524,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-23 02:34:00',
                'ngay_cap_nhat' => '2026-04-23 02:34:00',
            ),
            343 => 
            array (
                'id' => 1844,
                'cau_hoi_id' => 524,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-23 02:34:00',
                'ngay_cap_nhat' => '2026-04-23 02:34:00',
            ),
            344 => 
            array (
                'id' => 1845,
                'cau_hoi_id' => 525,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-21 12:13:00',
                'ngay_cap_nhat' => '2025-04-21 12:13:00',
            ),
            345 => 
            array (
                'id' => 1846,
                'cau_hoi_id' => 525,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-21 12:13:00',
                'ngay_cap_nhat' => '2025-04-21 12:13:00',
            ),
            346 => 
            array (
                'id' => 1847,
                'cau_hoi_id' => 526,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-20 02:25:00',
                'ngay_cap_nhat' => '2026-04-20 02:25:00',
            ),
            347 => 
            array (
                'id' => 1848,
                'cau_hoi_id' => 526,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-20 02:25:00',
                'ngay_cap_nhat' => '2026-04-20 02:25:00',
            ),
            348 => 
            array (
                'id' => 1849,
                'cau_hoi_id' => 526,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-20 02:25:00',
                'ngay_cap_nhat' => '2026-04-20 02:25:00',
            ),
            349 => 
            array (
                'id' => 1850,
                'cau_hoi_id' => 526,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-20 02:25:00',
                'ngay_cap_nhat' => '2026-04-20 02:25:00',
            ),
            350 => 
            array (
                'id' => 1851,
                'cau_hoi_id' => 527,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-21 02:43:00',
                'ngay_cap_nhat' => '2025-11-21 02:43:00',
            ),
            351 => 
            array (
                'id' => 1852,
                'cau_hoi_id' => 527,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-21 02:43:00',
                'ngay_cap_nhat' => '2025-11-21 02:43:00',
            ),
            352 => 
            array (
                'id' => 1853,
                'cau_hoi_id' => 527,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-11-21 02:43:00',
                'ngay_cap_nhat' => '2025-11-21 02:43:00',
            ),
            353 => 
            array (
                'id' => 1854,
                'cau_hoi_id' => 527,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-11-21 02:43:00',
                'ngay_cap_nhat' => '2025-11-21 02:43:00',
            ),
            354 => 
            array (
                'id' => 1855,
                'cau_hoi_id' => 528,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-18 10:56:00',
                'ngay_cap_nhat' => '2026-02-18 10:56:00',
            ),
            355 => 
            array (
                'id' => 1856,
                'cau_hoi_id' => 528,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-18 10:56:00',
                'ngay_cap_nhat' => '2026-02-18 10:56:00',
            ),
            356 => 
            array (
                'id' => 1857,
                'cau_hoi_id' => 528,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-02-18 10:56:00',
                'ngay_cap_nhat' => '2026-02-18 10:56:00',
            ),
            357 => 
            array (
                'id' => 1858,
                'cau_hoi_id' => 528,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-02-18 10:56:00',
                'ngay_cap_nhat' => '2026-02-18 10:56:00',
            ),
            358 => 
            array (
                'id' => 1859,
                'cau_hoi_id' => 529,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-08 09:39:00',
                'ngay_cap_nhat' => '2025-05-08 09:39:00',
            ),
            359 => 
            array (
                'id' => 1860,
                'cau_hoi_id' => 529,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-08 09:39:00',
                'ngay_cap_nhat' => '2025-05-08 09:39:00',
            ),
            360 => 
            array (
                'id' => 1861,
                'cau_hoi_id' => 529,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-08 09:39:00',
                'ngay_cap_nhat' => '2025-05-08 09:39:00',
            ),
            361 => 
            array (
                'id' => 1862,
                'cau_hoi_id' => 529,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-08 09:39:00',
                'ngay_cap_nhat' => '2025-05-08 09:39:00',
            ),
            362 => 
            array (
                'id' => 1863,
                'cau_hoi_id' => 530,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-28 22:44:00',
                'ngay_cap_nhat' => '2024-09-28 22:44:00',
            ),
            363 => 
            array (
                'id' => 1864,
                'cau_hoi_id' => 530,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-28 22:44:00',
                'ngay_cap_nhat' => '2024-09-28 22:44:00',
            ),
            364 => 
            array (
                'id' => 1865,
                'cau_hoi_id' => 530,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-28 22:44:00',
                'ngay_cap_nhat' => '2024-09-28 22:44:00',
            ),
            365 => 
            array (
                'id' => 1866,
                'cau_hoi_id' => 530,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-28 22:44:00',
                'ngay_cap_nhat' => '2024-09-28 22:44:00',
            ),
            366 => 
            array (
                'id' => 1867,
                'cau_hoi_id' => 531,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-02 20:38:00',
                'ngay_cap_nhat' => '2026-02-02 20:38:00',
            ),
            367 => 
            array (
                'id' => 1868,
                'cau_hoi_id' => 531,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-02 20:38:00',
                'ngay_cap_nhat' => '2026-02-02 20:38:00',
            ),
            368 => 
            array (
                'id' => 1869,
                'cau_hoi_id' => 531,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-02-02 20:38:00',
                'ngay_cap_nhat' => '2026-02-02 20:38:00',
            ),
            369 => 
            array (
                'id' => 1870,
                'cau_hoi_id' => 531,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-02-02 20:38:00',
                'ngay_cap_nhat' => '2026-02-02 20:38:00',
            ),
            370 => 
            array (
                'id' => 1871,
                'cau_hoi_id' => 532,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-28 12:38:00',
                'ngay_cap_nhat' => '2024-03-28 12:38:00',
            ),
            371 => 
            array (
                'id' => 1872,
                'cau_hoi_id' => 532,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-28 12:38:00',
                'ngay_cap_nhat' => '2024-03-28 12:38:00',
            ),
            372 => 
            array (
                'id' => 1873,
                'cau_hoi_id' => 533,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-12 17:28:00',
                'ngay_cap_nhat' => '2025-02-12 17:28:00',
            ),
            373 => 
            array (
                'id' => 1874,
                'cau_hoi_id' => 533,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-12 17:28:00',
                'ngay_cap_nhat' => '2025-02-12 17:28:00',
            ),
            374 => 
            array (
                'id' => 1875,
                'cau_hoi_id' => 533,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-12 17:28:00',
                'ngay_cap_nhat' => '2025-02-12 17:28:00',
            ),
            375 => 
            array (
                'id' => 1876,
                'cau_hoi_id' => 533,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-12 17:28:00',
                'ngay_cap_nhat' => '2025-02-12 17:28:00',
            ),
            376 => 
            array (
                'id' => 1877,
                'cau_hoi_id' => 534,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-10-24 17:58:00',
                'ngay_cap_nhat' => '2024-10-24 17:58:00',
            ),
            377 => 
            array (
                'id' => 1878,
                'cau_hoi_id' => 534,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-10-24 17:58:00',
                'ngay_cap_nhat' => '2024-10-24 17:58:00',
            ),
            378 => 
            array (
                'id' => 1879,
                'cau_hoi_id' => 534,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-10-24 17:58:00',
                'ngay_cap_nhat' => '2024-10-24 17:58:00',
            ),
            379 => 
            array (
                'id' => 1880,
                'cau_hoi_id' => 534,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-10-24 17:58:00',
                'ngay_cap_nhat' => '2024-10-24 17:58:00',
            ),
            380 => 
            array (
                'id' => 1881,
                'cau_hoi_id' => 535,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-29 22:43:00',
                'ngay_cap_nhat' => '2024-07-29 22:43:00',
            ),
            381 => 
            array (
                'id' => 1882,
                'cau_hoi_id' => 535,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-29 22:43:00',
                'ngay_cap_nhat' => '2024-07-29 22:43:00',
            ),
            382 => 
            array (
                'id' => 1883,
                'cau_hoi_id' => 535,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-29 22:43:00',
                'ngay_cap_nhat' => '2024-07-29 22:43:00',
            ),
            383 => 
            array (
                'id' => 1884,
                'cau_hoi_id' => 535,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-29 22:43:00',
                'ngay_cap_nhat' => '2024-07-29 22:43:00',
            ),
            384 => 
            array (
                'id' => 1885,
                'cau_hoi_id' => 536,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-03-06 12:40:00',
                'ngay_cap_nhat' => '2024-03-06 12:40:00',
            ),
            385 => 
            array (
                'id' => 1886,
                'cau_hoi_id' => 536,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-03-06 12:40:00',
                'ngay_cap_nhat' => '2024-03-06 12:40:00',
            ),
            386 => 
            array (
                'id' => 1887,
                'cau_hoi_id' => 537,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-12-03 21:14:00',
                'ngay_cap_nhat' => '2024-12-03 21:14:00',
            ),
            387 => 
            array (
                'id' => 1888,
                'cau_hoi_id' => 537,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-12-03 21:14:00',
                'ngay_cap_nhat' => '2024-12-03 21:14:00',
            ),
            388 => 
            array (
                'id' => 1889,
                'cau_hoi_id' => 538,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-12-21 16:37:00',
                'ngay_cap_nhat' => '2025-12-21 16:37:00',
            ),
            389 => 
            array (
                'id' => 1890,
                'cau_hoi_id' => 538,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-12-21 16:37:00',
                'ngay_cap_nhat' => '2025-12-21 16:37:00',
            ),
            390 => 
            array (
                'id' => 1891,
                'cau_hoi_id' => 538,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-12-21 16:37:00',
                'ngay_cap_nhat' => '2025-12-21 16:37:00',
            ),
            391 => 
            array (
                'id' => 1892,
                'cau_hoi_id' => 538,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-12-21 16:37:00',
                'ngay_cap_nhat' => '2025-12-21 16:37:00',
            ),
            392 => 
            array (
                'id' => 1893,
                'cau_hoi_id' => 539,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-06 02:21:00',
                'ngay_cap_nhat' => '2025-08-06 02:21:00',
            ),
            393 => 
            array (
                'id' => 1894,
                'cau_hoi_id' => 539,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-06 02:21:00',
                'ngay_cap_nhat' => '2025-08-06 02:21:00',
            ),
            394 => 
            array (
                'id' => 1895,
                'cau_hoi_id' => 539,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-08-06 02:21:00',
                'ngay_cap_nhat' => '2025-08-06 02:21:00',
            ),
            395 => 
            array (
                'id' => 1896,
                'cau_hoi_id' => 539,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-08-06 02:21:00',
                'ngay_cap_nhat' => '2025-08-06 02:21:00',
            ),
            396 => 
            array (
                'id' => 1897,
                'cau_hoi_id' => 540,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-04 04:26:00',
                'ngay_cap_nhat' => '2025-11-04 04:26:00',
            ),
            397 => 
            array (
                'id' => 1898,
                'cau_hoi_id' => 540,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-04 04:26:00',
                'ngay_cap_nhat' => '2025-11-04 04:26:00',
            ),
            398 => 
            array (
                'id' => 1899,
                'cau_hoi_id' => 541,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-05-31 01:13:00',
                'ngay_cap_nhat' => '2025-05-31 01:13:00',
            ),
            399 => 
            array (
                'id' => 1900,
                'cau_hoi_id' => 541,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-05-31 01:13:00',
                'ngay_cap_nhat' => '2025-05-31 01:13:00',
            ),
            400 => 
            array (
                'id' => 1901,
                'cau_hoi_id' => 541,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-05-31 01:13:00',
                'ngay_cap_nhat' => '2025-05-31 01:13:00',
            ),
            401 => 
            array (
                'id' => 1902,
                'cau_hoi_id' => 541,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-05-31 01:13:00',
                'ngay_cap_nhat' => '2025-05-31 01:13:00',
            ),
            402 => 
            array (
                'id' => 1903,
                'cau_hoi_id' => 542,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-24 05:38:00',
                'ngay_cap_nhat' => '2025-08-24 05:38:00',
            ),
            403 => 
            array (
                'id' => 1904,
                'cau_hoi_id' => 542,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-24 05:38:00',
                'ngay_cap_nhat' => '2025-08-24 05:38:00',
            ),
            404 => 
            array (
                'id' => 1905,
                'cau_hoi_id' => 543,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-28 09:53:00',
                'ngay_cap_nhat' => '2026-04-28 09:53:00',
            ),
            405 => 
            array (
                'id' => 1906,
                'cau_hoi_id' => 543,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-28 09:53:00',
                'ngay_cap_nhat' => '2026-04-28 09:53:00',
            ),
            406 => 
            array (
                'id' => 1907,
                'cau_hoi_id' => 543,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-28 09:53:00',
                'ngay_cap_nhat' => '2026-04-28 09:53:00',
            ),
            407 => 
            array (
                'id' => 1908,
                'cau_hoi_id' => 543,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-28 09:53:00',
                'ngay_cap_nhat' => '2026-04-28 09:53:00',
            ),
            408 => 
            array (
                'id' => 1909,
                'cau_hoi_id' => 544,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-11 16:42:00',
                'ngay_cap_nhat' => '2025-08-11 16:42:00',
            ),
            409 => 
            array (
                'id' => 1910,
                'cau_hoi_id' => 544,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-11 16:42:00',
                'ngay_cap_nhat' => '2025-08-11 16:42:00',
            ),
            410 => 
            array (
                'id' => 1911,
                'cau_hoi_id' => 545,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-05 20:41:00',
                'ngay_cap_nhat' => '2024-09-05 20:41:00',
            ),
            411 => 
            array (
                'id' => 1912,
                'cau_hoi_id' => 545,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-05 20:41:00',
                'ngay_cap_nhat' => '2024-09-05 20:41:00',
            ),
            412 => 
            array (
                'id' => 1913,
                'cau_hoi_id' => 545,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-05 20:41:00',
                'ngay_cap_nhat' => '2024-09-05 20:41:00',
            ),
            413 => 
            array (
                'id' => 1914,
                'cau_hoi_id' => 545,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-05 20:41:00',
                'ngay_cap_nhat' => '2024-09-05 20:41:00',
            ),
            414 => 
            array (
                'id' => 1915,
                'cau_hoi_id' => 546,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-28 21:07:00',
                'ngay_cap_nhat' => '2025-10-28 21:07:00',
            ),
            415 => 
            array (
                'id' => 1916,
                'cau_hoi_id' => 546,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-28 21:07:00',
                'ngay_cap_nhat' => '2025-10-28 21:07:00',
            ),
            416 => 
            array (
                'id' => 1917,
                'cau_hoi_id' => 546,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-10-28 21:07:00',
                'ngay_cap_nhat' => '2025-10-28 21:07:00',
            ),
            417 => 
            array (
                'id' => 1918,
                'cau_hoi_id' => 546,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-10-28 21:07:00',
                'ngay_cap_nhat' => '2025-10-28 21:07:00',
            ),
            418 => 
            array (
                'id' => 1919,
                'cau_hoi_id' => 547,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-14 00:35:00',
                'ngay_cap_nhat' => '2024-07-14 00:35:00',
            ),
            419 => 
            array (
                'id' => 1920,
                'cau_hoi_id' => 547,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-14 00:35:00',
                'ngay_cap_nhat' => '2024-07-14 00:35:00',
            ),
            420 => 
            array (
                'id' => 1921,
                'cau_hoi_id' => 548,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-07-15 00:15:00',
                'ngay_cap_nhat' => '2024-07-15 00:15:00',
            ),
            421 => 
            array (
                'id' => 1922,
                'cau_hoi_id' => 548,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-07-15 00:15:00',
                'ngay_cap_nhat' => '2024-07-15 00:15:00',
            ),
            422 => 
            array (
                'id' => 1923,
                'cau_hoi_id' => 548,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-07-15 00:15:00',
                'ngay_cap_nhat' => '2024-07-15 00:15:00',
            ),
            423 => 
            array (
                'id' => 1924,
                'cau_hoi_id' => 548,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2024-07-15 00:15:00',
                'ngay_cap_nhat' => '2024-07-15 00:15:00',
            ),
            424 => 
            array (
                'id' => 1925,
                'cau_hoi_id' => 549,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-16 21:57:00',
                'ngay_cap_nhat' => '2024-09-16 21:57:00',
            ),
            425 => 
            array (
                'id' => 1926,
                'cau_hoi_id' => 549,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-16 21:57:00',
                'ngay_cap_nhat' => '2024-09-16 21:57:00',
            ),
            426 => 
            array (
                'id' => 1927,
                'cau_hoi_id' => 549,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-16 21:57:00',
                'ngay_cap_nhat' => '2024-09-16 21:57:00',
            ),
            427 => 
            array (
                'id' => 1928,
                'cau_hoi_id' => 549,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-16 21:57:00',
                'ngay_cap_nhat' => '2024-09-16 21:57:00',
            ),
            428 => 
            array (
                'id' => 1929,
                'cau_hoi_id' => 550,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-26 20:41:00',
                'ngay_cap_nhat' => '2025-03-26 20:41:00',
            ),
            429 => 
            array (
                'id' => 1930,
                'cau_hoi_id' => 550,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-26 20:41:00',
                'ngay_cap_nhat' => '2025-03-26 20:41:00',
            ),
            430 => 
            array (
                'id' => 1931,
                'cau_hoi_id' => 550,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-03-26 20:41:00',
                'ngay_cap_nhat' => '2025-03-26 20:41:00',
            ),
            431 => 
            array (
                'id' => 1932,
                'cau_hoi_id' => 550,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-03-26 20:41:00',
                'ngay_cap_nhat' => '2025-03-26 20:41:00',
            ),
            432 => 
            array (
                'id' => 1933,
                'cau_hoi_id' => 551,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-04 09:51:00',
                'ngay_cap_nhat' => '2026-04-04 09:51:00',
            ),
            433 => 
            array (
                'id' => 1934,
                'cau_hoi_id' => 551,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-04 09:51:00',
                'ngay_cap_nhat' => '2026-04-04 09:51:00',
            ),
            434 => 
            array (
                'id' => 1935,
                'cau_hoi_id' => 551,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-04-04 09:51:00',
                'ngay_cap_nhat' => '2026-04-04 09:51:00',
            ),
            435 => 
            array (
                'id' => 1936,
                'cau_hoi_id' => 551,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-04-04 09:51:00',
                'ngay_cap_nhat' => '2026-04-04 09:51:00',
            ),
            436 => 
            array (
                'id' => 1937,
                'cau_hoi_id' => 552,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-22 19:01:00',
                'ngay_cap_nhat' => '2025-04-22 19:01:00',
            ),
            437 => 
            array (
                'id' => 1938,
                'cau_hoi_id' => 552,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-22 19:01:00',
                'ngay_cap_nhat' => '2025-04-22 19:01:00',
            ),
            438 => 
            array (
                'id' => 1939,
                'cau_hoi_id' => 552,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-22 19:01:00',
                'ngay_cap_nhat' => '2025-04-22 19:01:00',
            ),
            439 => 
            array (
                'id' => 1940,
                'cau_hoi_id' => 552,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-22 19:01:00',
                'ngay_cap_nhat' => '2025-04-22 19:01:00',
            ),
            440 => 
            array (
                'id' => 1941,
                'cau_hoi_id' => 553,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-09-04 17:58:00',
                'ngay_cap_nhat' => '2024-09-04 17:58:00',
            ),
            441 => 
            array (
                'id' => 1942,
                'cau_hoi_id' => 553,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2024-09-04 17:58:00',
                'ngay_cap_nhat' => '2024-09-04 17:58:00',
            ),
            442 => 
            array (
                'id' => 1943,
                'cau_hoi_id' => 553,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2024-09-04 17:58:00',
                'ngay_cap_nhat' => '2024-09-04 17:58:00',
            ),
            443 => 
            array (
                'id' => 1944,
                'cau_hoi_id' => 553,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-09-04 17:58:00',
                'ngay_cap_nhat' => '2024-09-04 17:58:00',
            ),
            444 => 
            array (
                'id' => 1945,
                'cau_hoi_id' => 554,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-04-19 14:00:00',
                'ngay_cap_nhat' => '2026-04-19 14:00:00',
            ),
            445 => 
            array (
                'id' => 1946,
                'cau_hoi_id' => 554,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-04-19 14:00:00',
                'ngay_cap_nhat' => '2026-04-19 14:00:00',
            ),
            446 => 
            array (
                'id' => 1947,
                'cau_hoi_id' => 555,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-04 12:20:00',
                'ngay_cap_nhat' => '2024-11-04 12:20:00',
            ),
            447 => 
            array (
                'id' => 1948,
                'cau_hoi_id' => 555,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-04 12:20:00',
                'ngay_cap_nhat' => '2024-11-04 12:20:00',
            ),
            448 => 
            array (
                'id' => 1949,
                'cau_hoi_id' => 555,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2024-11-04 12:20:00',
                'ngay_cap_nhat' => '2024-11-04 12:20:00',
            ),
            449 => 
            array (
                'id' => 1950,
                'cau_hoi_id' => 555,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2024-11-04 12:20:00',
                'ngay_cap_nhat' => '2024-11-04 12:20:00',
            ),
            450 => 
            array (
                'id' => 1951,
                'cau_hoi_id' => 556,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-02-14 13:16:00',
                'ngay_cap_nhat' => '2026-02-14 13:16:00',
            ),
            451 => 
            array (
                'id' => 1952,
                'cau_hoi_id' => 556,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2026-02-14 13:16:00',
                'ngay_cap_nhat' => '2026-02-14 13:16:00',
            ),
            452 => 
            array (
                'id' => 1953,
                'cau_hoi_id' => 556,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-02-14 13:16:00',
                'ngay_cap_nhat' => '2026-02-14 13:16:00',
            ),
            453 => 
            array (
                'id' => 1954,
                'cau_hoi_id' => 556,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2026-02-14 13:16:00',
                'ngay_cap_nhat' => '2026-02-14 13:16:00',
            ),
            454 => 
            array (
                'id' => 1955,
                'cau_hoi_id' => 557,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-14 22:17:00',
                'ngay_cap_nhat' => '2025-04-14 22:17:00',
            ),
            455 => 
            array (
                'id' => 1956,
                'cau_hoi_id' => 557,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-14 22:17:00',
                'ngay_cap_nhat' => '2025-04-14 22:17:00',
            ),
            456 => 
            array (
                'id' => 1957,
                'cau_hoi_id' => 557,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-14 22:17:00',
                'ngay_cap_nhat' => '2025-04-14 22:17:00',
            ),
            457 => 
            array (
                'id' => 1958,
                'cau_hoi_id' => 557,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-14 22:17:00',
                'ngay_cap_nhat' => '2025-04-14 22:17:00',
            ),
            458 => 
            array (
                'id' => 1959,
                'cau_hoi_id' => 558,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-11-10 16:23:00',
                'ngay_cap_nhat' => '2024-11-10 16:23:00',
            ),
            459 => 
            array (
                'id' => 1960,
                'cau_hoi_id' => 558,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-11-10 16:23:00',
                'ngay_cap_nhat' => '2024-11-10 16:23:00',
            ),
            460 => 
            array (
                'id' => 1961,
                'cau_hoi_id' => 559,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-04-14 13:09:00',
                'ngay_cap_nhat' => '2025-04-14 13:09:00',
            ),
            461 => 
            array (
                'id' => 1962,
                'cau_hoi_id' => 559,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-04-14 13:09:00',
                'ngay_cap_nhat' => '2025-04-14 13:09:00',
            ),
            462 => 
            array (
                'id' => 1963,
                'cau_hoi_id' => 559,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-04-14 13:09:00',
                'ngay_cap_nhat' => '2025-04-14 13:09:00',
            ),
            463 => 
            array (
                'id' => 1964,
                'cau_hoi_id' => 559,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-04-14 13:09:00',
                'ngay_cap_nhat' => '2025-04-14 13:09:00',
            ),
            464 => 
            array (
                'id' => 1965,
                'cau_hoi_id' => 560,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-11-09 19:33:00',
                'ngay_cap_nhat' => '2025-11-09 19:33:00',
            ),
            465 => 
            array (
                'id' => 1966,
                'cau_hoi_id' => 560,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-11-09 19:33:00',
                'ngay_cap_nhat' => '2025-11-09 19:33:00',
            ),
            466 => 
            array (
                'id' => 1967,
                'cau_hoi_id' => 561,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-10-21 02:08:00',
                'ngay_cap_nhat' => '2025-10-21 02:08:00',
            ),
            467 => 
            array (
                'id' => 1968,
                'cau_hoi_id' => 561,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-10-21 02:08:00',
                'ngay_cap_nhat' => '2025-10-21 02:08:00',
            ),
            468 => 
            array (
                'id' => 1969,
                'cau_hoi_id' => 562,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-07-10 21:57:00',
                'ngay_cap_nhat' => '2025-07-10 21:57:00',
            ),
            469 => 
            array (
                'id' => 1970,
                'cau_hoi_id' => 562,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-07-10 21:57:00',
                'ngay_cap_nhat' => '2025-07-10 21:57:00',
            ),
            470 => 
            array (
                'id' => 1971,
                'cau_hoi_id' => 562,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-07-10 21:57:00',
                'ngay_cap_nhat' => '2025-07-10 21:57:00',
            ),
            471 => 
            array (
                'id' => 1972,
                'cau_hoi_id' => 562,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-07-10 21:57:00',
                'ngay_cap_nhat' => '2025-07-10 21:57:00',
            ),
            472 => 
            array (
                'id' => 1973,
                'cau_hoi_id' => 563,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2024-08-17 13:36:00',
                'ngay_cap_nhat' => '2024-08-17 13:36:00',
            ),
            473 => 
            array (
                'id' => 1974,
                'cau_hoi_id' => 563,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2024-08-17 13:36:00',
                'ngay_cap_nhat' => '2024-08-17 13:36:00',
            ),
            474 => 
            array (
                'id' => 1975,
                'cau_hoi_id' => 564,
                'noi_dung' => 'Phương án A - chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2025-03-29 13:25:00',
                'ngay_cap_nhat' => '2025-03-29 13:25:00',
            ),
            475 => 
            array (
                'id' => 1976,
                'cau_hoi_id' => 564,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-03-29 13:25:00',
                'ngay_cap_nhat' => '2025-03-29 13:25:00',
            ),
            476 => 
            array (
                'id' => 1977,
                'cau_hoi_id' => 564,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-03-29 13:25:00',
                'ngay_cap_nhat' => '2025-03-29 13:25:00',
            ),
            477 => 
            array (
                'id' => 1978,
                'cau_hoi_id' => 564,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-03-29 13:25:00',
                'ngay_cap_nhat' => '2025-03-29 13:25:00',
            ),
            478 => 
            array (
                'id' => 1979,
                'cau_hoi_id' => 565,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-02-17 12:39:00',
                'ngay_cap_nhat' => '2025-02-17 12:39:00',
            ),
            479 => 
            array (
                'id' => 1980,
                'cau_hoi_id' => 565,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 2,
                'ngay_tao' => '2025-02-17 12:39:00',
                'ngay_cap_nhat' => '2025-02-17 12:39:00',
            ),
            480 => 
            array (
                'id' => 1981,
                'cau_hoi_id' => 565,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2025-02-17 12:39:00',
                'ngay_cap_nhat' => '2025-02-17 12:39:00',
            ),
            481 => 
            array (
                'id' => 1982,
                'cau_hoi_id' => 565,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-02-17 12:39:00',
                'ngay_cap_nhat' => '2025-02-17 12:39:00',
            ),
            482 => 
            array (
                'id' => 1983,
                'cau_hoi_id' => 566,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-03-23 15:55:00',
                'ngay_cap_nhat' => '2026-03-23 15:55:00',
            ),
            483 => 
            array (
                'id' => 1984,
                'cau_hoi_id' => 566,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-03-23 15:55:00',
                'ngay_cap_nhat' => '2026-03-23 15:55:00',
            ),
            484 => 
            array (
                'id' => 1985,
                'cau_hoi_id' => 566,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2026-03-23 15:55:00',
                'ngay_cap_nhat' => '2026-03-23 15:55:00',
            ),
            485 => 
            array (
                'id' => 1986,
                'cau_hoi_id' => 566,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-03-23 15:55:00',
                'ngay_cap_nhat' => '2026-03-23 15:55:00',
            ),
            486 => 
            array (
                'id' => 1987,
                'cau_hoi_id' => 567,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-05-09 13:00:00',
                'ngay_cap_nhat' => '2026-05-09 13:00:00',
            ),
            487 => 
            array (
                'id' => 1988,
                'cau_hoi_id' => 567,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-05-09 13:00:00',
                'ngay_cap_nhat' => '2026-05-09 13:00:00',
            ),
            488 => 
            array (
                'id' => 1989,
                'cau_hoi_id' => 567,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-05-09 13:00:00',
                'ngay_cap_nhat' => '2026-05-09 13:00:00',
            ),
            489 => 
            array (
                'id' => 1990,
                'cau_hoi_id' => 567,
                'noi_dung' => 'Phương án A - theo lý thuyết chuẩn',
                'la_dap_an_dung' => 1,
                'thu_tu' => 4,
                'ngay_tao' => '2026-05-09 13:00:00',
                'ngay_cap_nhat' => '2026-05-09 13:00:00',
            ),
            490 => 
            array (
                'id' => 1991,
                'cau_hoi_id' => 568,
                'noi_dung' => 'Phương án C - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2025-08-18 08:57:00',
                'ngay_cap_nhat' => '2025-08-18 08:57:00',
            ),
            491 => 
            array (
                'id' => 1992,
                'cau_hoi_id' => 568,
                'noi_dung' => 'Phương án D - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2025-08-18 08:57:00',
                'ngay_cap_nhat' => '2025-08-18 08:57:00',
            ),
            492 => 
            array (
                'id' => 1993,
                'cau_hoi_id' => 568,
                'noi_dung' => 'Phương án A - đúng theo tài liệu',
                'la_dap_an_dung' => 1,
                'thu_tu' => 3,
                'ngay_tao' => '2025-08-18 08:57:00',
                'ngay_cap_nhat' => '2025-08-18 08:57:00',
            ),
            493 => 
            array (
                'id' => 1994,
                'cau_hoi_id' => 568,
                'noi_dung' => 'Phương án B - phương án nhiễu chưa chính xác',
                'la_dap_an_dung' => 0,
                'thu_tu' => 4,
                'ngay_tao' => '2025-08-18 08:57:00',
                'ngay_cap_nhat' => '2025-08-18 08:57:00',
            ),
            494 => 
            array (
                'id' => 1995,
                'cau_hoi_id' => 569,
                'noi_dung' => '2',
                'la_dap_an_dung' => 1,
                'thu_tu' => 0,
                'ngay_tao' => '2026-06-30 19:31:34',
                'ngay_cap_nhat' => '2026-06-30 19:31:34',
            ),
            495 => 
            array (
                'id' => 1996,
                'cau_hoi_id' => 569,
                'noi_dung' => '1',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-06-30 19:31:34',
                'ngay_cap_nhat' => '2026-06-30 19:31:34',
            ),
            496 => 
            array (
                'id' => 1997,
                'cau_hoi_id' => 570,
                'noi_dung' => '10',
                'la_dap_an_dung' => 0,
                'thu_tu' => 0,
                'ngay_tao' => '2026-06-30 19:31:35',
                'ngay_cap_nhat' => '2026-06-30 19:31:35',
            ),
            497 => 
            array (
                'id' => 1998,
                'cau_hoi_id' => 570,
                'noi_dung' => '7',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-06-30 19:31:35',
                'ngay_cap_nhat' => '2026-06-30 19:31:35',
            ),
            498 => 
            array (
                'id' => 2005,
                'cau_hoi_id' => 574,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 0,
                'thu_tu' => 0,
                'ngay_tao' => '2026-07-13 03:10:45',
                'ngay_cap_nhat' => '2026-07-13 03:10:45',
            ),
            499 => 
            array (
                'id' => 2006,
                'cau_hoi_id' => 574,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-07-13 03:10:45',
                'ngay_cap_nhat' => '2026-07-13 03:10:45',
            ),
        ));
        \DB::table('dap_an')->insert(array (
            0 => 
            array (
                'id' => 2007,
                'cau_hoi_id' => 572,
                'noi_dung' => 'Đúng',
                'la_dap_an_dung' => 1,
                'thu_tu' => 0,
                'ngay_tao' => '2026-07-13 03:11:30',
                'ngay_cap_nhat' => '2026-07-13 03:11:30',
            ),
            1 => 
            array (
                'id' => 2008,
                'cau_hoi_id' => 572,
                'noi_dung' => 'Sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 1,
                'ngay_tao' => '2026-07-13 03:11:30',
                'ngay_cap_nhat' => '2026-07-13 03:11:30',
            ),
            2 => 
            array (
                'id' => 2009,
                'cau_hoi_id' => 572,
                'noi_dung' => 'Chưa đúng',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-07-13 03:11:30',
                'ngay_cap_nhat' => '2026-07-13 03:11:30',
            ),
            3 => 
            array (
                'id' => 2010,
                'cau_hoi_id' => 572,
                'noi_dung' => 'Quá sai',
                'la_dap_an_dung' => 0,
                'thu_tu' => 3,
                'ngay_tao' => '2026-07-13 03:11:30',
                'ngay_cap_nhat' => '2026-07-13 03:11:30',
            ),
            4 => 
            array (
                'id' => 2011,
                'cau_hoi_id' => 573,
                'noi_dung' => '2',
                'la_dap_an_dung' => 1,
                'thu_tu' => 0,
                'ngay_tao' => '2026-07-13 03:11:47',
                'ngay_cap_nhat' => '2026-07-13 03:11:47',
            ),
            5 => 
            array (
                'id' => 2012,
                'cau_hoi_id' => 573,
                'noi_dung' => '3-1',
                'la_dap_an_dung' => 1,
                'thu_tu' => 1,
                'ngay_tao' => '2026-07-13 03:11:47',
                'ngay_cap_nhat' => '2026-07-13 03:11:47',
            ),
            6 => 
            array (
                'id' => 2013,
                'cau_hoi_id' => 573,
                'noi_dung' => '4',
                'la_dap_an_dung' => 0,
                'thu_tu' => 2,
                'ngay_tao' => '2026-07-13 03:11:47',
                'ngay_cap_nhat' => '2026-07-13 03:11:47',
            ),
        ));
        
        
    }
}