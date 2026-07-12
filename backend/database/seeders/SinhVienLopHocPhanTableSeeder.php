<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SinhVienLopHocPhanTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('sinh_vien_lop_hoc_phan')->delete();
        
        \DB::table('sinh_vien_lop_hoc_phan')->insert(array (
            0 => 
            array (
                'id' => 1,
                'sinh_vien_id' => 1,
                'lop_hoc_phan_id' => 10,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-16 00:24:00',
                'ngay_cap_nhat' => '2025-06-16 00:24:00',
            ),
            1 => 
            array (
                'id' => 2,
                'sinh_vien_id' => 1,
                'lop_hoc_phan_id' => 9,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-01 06:44:00',
                'ngay_cap_nhat' => '2025-11-01 06:44:00',
            ),
            2 => 
            array (
                'id' => 3,
                'sinh_vien_id' => 1,
                'lop_hoc_phan_id' => 2,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-03 10:26:00',
                'ngay_cap_nhat' => '2026-04-03 10:26:00',
            ),
            3 => 
            array (
                'id' => 4,
                'sinh_vien_id' => 2,
                'lop_hoc_phan_id' => 2,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-16 08:54:00',
                'ngay_cap_nhat' => '2024-09-16 08:54:00',
            ),
            4 => 
            array (
                'id' => 5,
                'sinh_vien_id' => 2,
                'lop_hoc_phan_id' => 3,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-02 13:36:00',
                'ngay_cap_nhat' => '2025-07-02 13:36:00',
            ),
            5 => 
            array (
                'id' => 6,
                'sinh_vien_id' => 2,
                'lop_hoc_phan_id' => 7,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-09 19:17:00',
                'ngay_cap_nhat' => '2025-01-09 19:17:00',
            ),
            6 => 
            array (
                'id' => 7,
                'sinh_vien_id' => 2,
                'lop_hoc_phan_id' => 6,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-27 12:48:00',
                'ngay_cap_nhat' => '2025-11-27 12:48:00',
            ),
            7 => 
            array (
                'id' => 8,
                'sinh_vien_id' => 2,
                'lop_hoc_phan_id' => 5,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-27 13:35:00',
                'ngay_cap_nhat' => '2024-07-27 13:35:00',
            ),
            8 => 
            array (
                'id' => 9,
                'sinh_vien_id' => 3,
                'lop_hoc_phan_id' => 3,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-18 22:25:00',
                'ngay_cap_nhat' => '2024-12-18 22:25:00',
            ),
            9 => 
            array (
                'id' => 10,
                'sinh_vien_id' => 3,
                'lop_hoc_phan_id' => 6,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-23 04:54:00',
                'ngay_cap_nhat' => '2026-01-23 04:54:00',
            ),
            10 => 
            array (
                'id' => 11,
                'sinh_vien_id' => 3,
                'lop_hoc_phan_id' => 8,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-03 21:07:00',
                'ngay_cap_nhat' => '2026-06-03 21:07:00',
            ),
            11 => 
            array (
                'id' => 12,
                'sinh_vien_id' => 3,
                'lop_hoc_phan_id' => 10,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-04 07:28:00',
                'ngay_cap_nhat' => '2026-02-04 07:28:00',
            ),
            12 => 
            array (
                'id' => 13,
                'sinh_vien_id' => 3,
                'lop_hoc_phan_id' => 7,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-12 22:10:00',
                'ngay_cap_nhat' => '2026-03-12 22:10:00',
            ),
            13 => 
            array (
                'id' => 14,
                'sinh_vien_id' => 3,
                'lop_hoc_phan_id' => 5,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-12 06:32:00',
                'ngay_cap_nhat' => '2024-04-12 06:32:00',
            ),
            14 => 
            array (
                'id' => 15,
                'sinh_vien_id' => 4,
                'lop_hoc_phan_id' => 6,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-03 02:52:00',
                'ngay_cap_nhat' => '2026-04-03 02:52:00',
            ),
            15 => 
            array (
                'id' => 16,
                'sinh_vien_id' => 4,
                'lop_hoc_phan_id' => 9,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-28 15:59:00',
                'ngay_cap_nhat' => '2024-05-28 15:59:00',
            ),
            16 => 
            array (
                'id' => 17,
                'sinh_vien_id' => 4,
                'lop_hoc_phan_id' => 1,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-06 13:05:00',
                'ngay_cap_nhat' => '2025-09-06 13:05:00',
            ),
            17 => 
            array (
                'id' => 18,
                'sinh_vien_id' => 4,
                'lop_hoc_phan_id' => 2,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-06 08:14:00',
                'ngay_cap_nhat' => '2024-03-06 08:14:00',
            ),
            18 => 
            array (
                'id' => 19,
                'sinh_vien_id' => 4,
                'lop_hoc_phan_id' => 4,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-14 02:38:00',
                'ngay_cap_nhat' => '2025-01-14 02:38:00',
            ),
            19 => 
            array (
                'id' => 20,
                'sinh_vien_id' => 4,
                'lop_hoc_phan_id' => 8,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-08 23:24:00',
                'ngay_cap_nhat' => '2024-02-08 23:24:00',
            ),
            20 => 
            array (
                'id' => 21,
                'sinh_vien_id' => 5,
                'lop_hoc_phan_id' => 10,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-03 05:40:00',
                'ngay_cap_nhat' => '2026-03-03 05:40:00',
            ),
            21 => 
            array (
                'id' => 22,
                'sinh_vien_id' => 5,
                'lop_hoc_phan_id' => 9,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-21 14:00:00',
                'ngay_cap_nhat' => '2025-05-21 14:00:00',
            ),
            22 => 
            array (
                'id' => 23,
                'sinh_vien_id' => 5,
                'lop_hoc_phan_id' => 5,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-25 21:59:00',
                'ngay_cap_nhat' => '2024-07-25 21:59:00',
            ),
            23 => 
            array (
                'id' => 24,
                'sinh_vien_id' => 5,
                'lop_hoc_phan_id' => 6,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-03 16:18:00',
                'ngay_cap_nhat' => '2026-04-03 16:18:00',
            ),
            24 => 
            array (
                'id' => 25,
                'sinh_vien_id' => 5,
                'lop_hoc_phan_id' => 8,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-18 01:50:00',
                'ngay_cap_nhat' => '2024-07-18 01:50:00',
            ),
            25 => 
            array (
                'id' => 26,
                'sinh_vien_id' => 5,
                'lop_hoc_phan_id' => 1,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-05 16:33:00',
                'ngay_cap_nhat' => '2025-09-05 16:33:00',
            ),
            26 => 
            array (
                'id' => 27,
                'sinh_vien_id' => 6,
                'lop_hoc_phan_id' => 10,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-01 20:00:00',
                'ngay_cap_nhat' => '2024-09-01 20:00:00',
            ),
            27 => 
            array (
                'id' => 28,
                'sinh_vien_id' => 6,
                'lop_hoc_phan_id' => 3,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-10 02:17:00',
                'ngay_cap_nhat' => '2024-06-10 02:17:00',
            ),
            28 => 
            array (
                'id' => 29,
                'sinh_vien_id' => 6,
                'lop_hoc_phan_id' => 1,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-09 12:22:00',
                'ngay_cap_nhat' => '2026-03-09 12:22:00',
            ),
            29 => 
            array (
                'id' => 30,
                'sinh_vien_id' => 6,
                'lop_hoc_phan_id' => 9,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-16 12:25:00',
                'ngay_cap_nhat' => '2025-11-16 12:25:00',
            ),
            30 => 
            array (
                'id' => 31,
                'sinh_vien_id' => 7,
                'lop_hoc_phan_id' => 9,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-16 09:46:00',
                'ngay_cap_nhat' => '2025-07-16 09:46:00',
            ),
            31 => 
            array (
                'id' => 32,
                'sinh_vien_id' => 7,
                'lop_hoc_phan_id' => 1,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-29 17:58:00',
                'ngay_cap_nhat' => '2026-04-29 17:58:00',
            ),
            32 => 
            array (
                'id' => 33,
                'sinh_vien_id' => 7,
                'lop_hoc_phan_id' => 2,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-19 11:22:00',
                'ngay_cap_nhat' => '2025-08-19 11:22:00',
            ),
            33 => 
            array (
                'id' => 34,
                'sinh_vien_id' => 7,
                'lop_hoc_phan_id' => 10,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-15 08:14:00',
                'ngay_cap_nhat' => '2026-04-15 08:14:00',
            ),
            34 => 
            array (
                'id' => 35,
                'sinh_vien_id' => 8,
                'lop_hoc_phan_id' => 8,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-28 13:32:00',
                'ngay_cap_nhat' => '2024-06-28 13:32:00',
            ),
            35 => 
            array (
                'id' => 36,
                'sinh_vien_id' => 8,
                'lop_hoc_phan_id' => 7,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-19 17:04:00',
                'ngay_cap_nhat' => '2024-04-19 17:04:00',
            ),
            36 => 
            array (
                'id' => 37,
                'sinh_vien_id' => 8,
                'lop_hoc_phan_id' => 1,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-30 09:21:00',
                'ngay_cap_nhat' => '2025-05-30 09:21:00',
            ),
            37 => 
            array (
                'id' => 38,
                'sinh_vien_id' => 8,
                'lop_hoc_phan_id' => 3,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-29 16:16:00',
                'ngay_cap_nhat' => '2024-04-29 16:16:00',
            ),
            38 => 
            array (
                'id' => 39,
                'sinh_vien_id' => 9,
                'lop_hoc_phan_id' => 8,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-14 10:49:00',
                'ngay_cap_nhat' => '2026-02-14 10:49:00',
            ),
            39 => 
            array (
                'id' => 40,
                'sinh_vien_id' => 9,
                'lop_hoc_phan_id' => 7,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-14 21:29:00',
                'ngay_cap_nhat' => '2025-04-14 21:29:00',
            ),
            40 => 
            array (
                'id' => 41,
                'sinh_vien_id' => 9,
                'lop_hoc_phan_id' => 10,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-23 00:30:00',
                'ngay_cap_nhat' => '2025-08-23 00:30:00',
            ),
            41 => 
            array (
                'id' => 42,
                'sinh_vien_id' => 9,
                'lop_hoc_phan_id' => 9,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-29 08:04:00',
                'ngay_cap_nhat' => '2024-04-29 08:04:00',
            ),
            42 => 
            array (
                'id' => 43,
                'sinh_vien_id' => 9,
                'lop_hoc_phan_id' => 2,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-26 20:50:00',
                'ngay_cap_nhat' => '2025-01-26 20:50:00',
            ),
            43 => 
            array (
                'id' => 44,
                'sinh_vien_id' => 10,
                'lop_hoc_phan_id' => 4,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-12 17:00:00',
                'ngay_cap_nhat' => '2025-06-12 17:00:00',
            ),
            44 => 
            array (
                'id' => 45,
                'sinh_vien_id' => 10,
                'lop_hoc_phan_id' => 6,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-18 08:15:00',
                'ngay_cap_nhat' => '2025-12-18 08:15:00',
            ),
            45 => 
            array (
                'id' => 46,
                'sinh_vien_id' => 10,
                'lop_hoc_phan_id' => 7,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-21 02:25:00',
                'ngay_cap_nhat' => '2024-10-21 02:25:00',
            ),
            46 => 
            array (
                'id' => 47,
                'sinh_vien_id' => 10,
                'lop_hoc_phan_id' => 3,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-20 23:52:00',
                'ngay_cap_nhat' => '2025-11-20 23:52:00',
            ),
            47 => 
            array (
                'id' => 48,
                'sinh_vien_id' => 11,
                'lop_hoc_phan_id' => 2,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-28 06:57:00',
                'ngay_cap_nhat' => '2024-12-28 06:57:00',
            ),
            48 => 
            array (
                'id' => 49,
                'sinh_vien_id' => 11,
                'lop_hoc_phan_id' => 9,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-10 08:11:00',
                'ngay_cap_nhat' => '2025-08-10 08:11:00',
            ),
            49 => 
            array (
                'id' => 50,
                'sinh_vien_id' => 11,
                'lop_hoc_phan_id' => 3,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-03 21:59:00',
                'ngay_cap_nhat' => '2026-02-03 21:59:00',
            ),
            50 => 
            array (
                'id' => 51,
                'sinh_vien_id' => 11,
                'lop_hoc_phan_id' => 4,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-13 15:47:00',
                'ngay_cap_nhat' => '2024-07-13 15:47:00',
            ),
            51 => 
            array (
                'id' => 52,
                'sinh_vien_id' => 11,
                'lop_hoc_phan_id' => 8,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-23 07:47:00',
                'ngay_cap_nhat' => '2024-07-23 07:47:00',
            ),
            52 => 
            array (
                'id' => 53,
                'sinh_vien_id' => 12,
                'lop_hoc_phan_id' => 5,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-04 07:53:00',
                'ngay_cap_nhat' => '2026-05-04 07:53:00',
            ),
            53 => 
            array (
                'id' => 54,
                'sinh_vien_id' => 12,
                'lop_hoc_phan_id' => 4,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-25 11:09:00',
                'ngay_cap_nhat' => '2025-09-25 11:09:00',
            ),
            54 => 
            array (
                'id' => 55,
                'sinh_vien_id' => 12,
                'lop_hoc_phan_id' => 9,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-08 03:07:00',
                'ngay_cap_nhat' => '2026-03-08 03:07:00',
            ),
            55 => 
            array (
                'id' => 56,
                'sinh_vien_id' => 12,
                'lop_hoc_phan_id' => 2,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-21 21:42:00',
                'ngay_cap_nhat' => '2024-03-21 21:42:00',
            ),
            56 => 
            array (
                'id' => 57,
                'sinh_vien_id' => 13,
                'lop_hoc_phan_id' => 10,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-27 10:31:00',
                'ngay_cap_nhat' => '2025-09-27 10:31:00',
            ),
            57 => 
            array (
                'id' => 58,
                'sinh_vien_id' => 13,
                'lop_hoc_phan_id' => 1,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-21 18:55:00',
                'ngay_cap_nhat' => '2026-06-21 18:55:00',
            ),
            58 => 
            array (
                'id' => 59,
                'sinh_vien_id' => 13,
                'lop_hoc_phan_id' => 9,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-08 15:11:00',
                'ngay_cap_nhat' => '2024-10-08 15:11:00',
            ),
            59 => 
            array (
                'id' => 60,
                'sinh_vien_id' => 13,
                'lop_hoc_phan_id' => 7,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-21 16:17:00',
                'ngay_cap_nhat' => '2026-02-21 16:17:00',
            ),
            60 => 
            array (
                'id' => 61,
                'sinh_vien_id' => 13,
                'lop_hoc_phan_id' => 4,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-11 07:48:00',
                'ngay_cap_nhat' => '2025-02-11 07:48:00',
            ),
            61 => 
            array (
                'id' => 62,
                'sinh_vien_id' => 13,
                'lop_hoc_phan_id' => 3,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-13 04:03:00',
                'ngay_cap_nhat' => '2025-08-13 04:03:00',
            ),
            62 => 
            array (
                'id' => 63,
                'sinh_vien_id' => 14,
                'lop_hoc_phan_id' => 8,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-31 21:49:00',
                'ngay_cap_nhat' => '2026-05-31 21:49:00',
            ),
            63 => 
            array (
                'id' => 64,
                'sinh_vien_id' => 14,
                'lop_hoc_phan_id' => 9,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-27 14:07:00',
                'ngay_cap_nhat' => '2024-06-27 14:07:00',
            ),
            64 => 
            array (
                'id' => 65,
                'sinh_vien_id' => 14,
                'lop_hoc_phan_id' => 1,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-16 16:29:00',
                'ngay_cap_nhat' => '2025-12-16 16:29:00',
            ),
            65 => 
            array (
                'id' => 66,
                'sinh_vien_id' => 14,
                'lop_hoc_phan_id' => 5,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-19 22:00:00',
                'ngay_cap_nhat' => '2024-11-19 22:00:00',
            ),
            66 => 
            array (
                'id' => 67,
                'sinh_vien_id' => 14,
                'lop_hoc_phan_id' => 3,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-13 21:13:00',
                'ngay_cap_nhat' => '2024-01-13 21:13:00',
            ),
            67 => 
            array (
                'id' => 68,
                'sinh_vien_id' => 14,
                'lop_hoc_phan_id' => 4,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-23 18:06:00',
                'ngay_cap_nhat' => '2025-01-23 18:06:00',
            ),
            68 => 
            array (
                'id' => 69,
                'sinh_vien_id' => 15,
                'lop_hoc_phan_id' => 6,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-30 08:30:00',
                'ngay_cap_nhat' => '2024-08-30 08:30:00',
            ),
            69 => 
            array (
                'id' => 70,
                'sinh_vien_id' => 15,
                'lop_hoc_phan_id' => 5,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-19 10:23:00',
                'ngay_cap_nhat' => '2025-09-19 10:23:00',
            ),
            70 => 
            array (
                'id' => 71,
                'sinh_vien_id' => 15,
                'lop_hoc_phan_id' => 3,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-07 15:27:00',
                'ngay_cap_nhat' => '2024-07-07 15:27:00',
            ),
            71 => 
            array (
                'id' => 72,
                'sinh_vien_id' => 15,
                'lop_hoc_phan_id' => 9,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-03 13:44:00',
                'ngay_cap_nhat' => '2024-08-03 13:44:00',
            ),
            72 => 
            array (
                'id' => 73,
                'sinh_vien_id' => 15,
                'lop_hoc_phan_id' => 8,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-09 11:23:00',
                'ngay_cap_nhat' => '2026-02-09 11:23:00',
            ),
            73 => 
            array (
                'id' => 74,
                'sinh_vien_id' => 16,
                'lop_hoc_phan_id' => 5,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-03 07:52:00',
                'ngay_cap_nhat' => '2025-12-03 07:52:00',
            ),
            74 => 
            array (
                'id' => 75,
                'sinh_vien_id' => 16,
                'lop_hoc_phan_id' => 8,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-12 23:17:00',
                'ngay_cap_nhat' => '2024-04-12 23:17:00',
            ),
            75 => 
            array (
                'id' => 76,
                'sinh_vien_id' => 16,
                'lop_hoc_phan_id' => 3,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-03 07:35:00',
                'ngay_cap_nhat' => '2026-04-03 07:35:00',
            ),
            76 => 
            array (
                'id' => 77,
                'sinh_vien_id' => 16,
                'lop_hoc_phan_id' => 10,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-03-18 12:12:00',
                'ngay_cap_nhat' => '2025-03-18 12:12:00',
            ),
            77 => 
            array (
                'id' => 78,
                'sinh_vien_id' => 16,
                'lop_hoc_phan_id' => 2,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-29 23:09:00',
                'ngay_cap_nhat' => '2024-05-29 23:09:00',
            ),
            78 => 
            array (
                'id' => 79,
                'sinh_vien_id' => 16,
                'lop_hoc_phan_id' => 7,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-29 00:11:00',
                'ngay_cap_nhat' => '2025-04-29 00:11:00',
            ),
            79 => 
            array (
                'id' => 80,
                'sinh_vien_id' => 17,
                'lop_hoc_phan_id' => 8,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-13 17:54:00',
                'ngay_cap_nhat' => '2024-09-13 17:54:00',
            ),
            80 => 
            array (
                'id' => 81,
                'sinh_vien_id' => 17,
                'lop_hoc_phan_id' => 3,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-04 01:25:00',
                'ngay_cap_nhat' => '2025-08-04 01:25:00',
            ),
            81 => 
            array (
                'id' => 82,
                'sinh_vien_id' => 17,
                'lop_hoc_phan_id' => 6,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-11 22:10:00',
                'ngay_cap_nhat' => '2024-04-11 22:10:00',
            ),
            82 => 
            array (
                'id' => 83,
                'sinh_vien_id' => 17,
                'lop_hoc_phan_id' => 7,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-02 06:52:00',
                'ngay_cap_nhat' => '2024-03-02 06:52:00',
            ),
            83 => 
            array (
                'id' => 84,
                'sinh_vien_id' => 17,
                'lop_hoc_phan_id' => 4,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-17 15:53:00',
                'ngay_cap_nhat' => '2024-09-17 15:53:00',
            ),
            84 => 
            array (
                'id' => 85,
                'sinh_vien_id' => 17,
                'lop_hoc_phan_id' => 9,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-06 03:28:00',
                'ngay_cap_nhat' => '2025-10-06 03:28:00',
            ),
            85 => 
            array (
                'id' => 86,
                'sinh_vien_id' => 18,
                'lop_hoc_phan_id' => 5,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-09 08:22:00',
                'ngay_cap_nhat' => '2026-04-09 08:22:00',
            ),
            86 => 
            array (
                'id' => 87,
                'sinh_vien_id' => 18,
                'lop_hoc_phan_id' => 6,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-21 13:07:00',
                'ngay_cap_nhat' => '2024-01-21 13:07:00',
            ),
            87 => 
            array (
                'id' => 88,
                'sinh_vien_id' => 18,
                'lop_hoc_phan_id' => 9,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-25 21:38:00',
                'ngay_cap_nhat' => '2024-12-25 21:38:00',
            ),
            88 => 
            array (
                'id' => 89,
                'sinh_vien_id' => 18,
                'lop_hoc_phan_id' => 10,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-22 18:36:00',
                'ngay_cap_nhat' => '2024-07-22 18:36:00',
            ),
            89 => 
            array (
                'id' => 90,
                'sinh_vien_id' => 18,
                'lop_hoc_phan_id' => 7,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-27 20:34:00',
                'ngay_cap_nhat' => '2025-10-27 20:34:00',
            ),
            90 => 
            array (
                'id' => 91,
                'sinh_vien_id' => 19,
                'lop_hoc_phan_id' => 15,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-06 15:49:00',
                'ngay_cap_nhat' => '2025-06-06 15:49:00',
            ),
            91 => 
            array (
                'id' => 92,
                'sinh_vien_id' => 19,
                'lop_hoc_phan_id' => 16,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-24 14:56:00',
                'ngay_cap_nhat' => '2026-01-24 14:56:00',
            ),
            92 => 
            array (
                'id' => 93,
                'sinh_vien_id' => 19,
                'lop_hoc_phan_id' => 19,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-21 12:39:00',
                'ngay_cap_nhat' => '2024-03-21 12:39:00',
            ),
            93 => 
            array (
                'id' => 94,
                'sinh_vien_id' => 19,
                'lop_hoc_phan_id' => 18,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-20 14:40:00',
                'ngay_cap_nhat' => '2024-10-20 14:40:00',
            ),
            94 => 
            array (
                'id' => 95,
                'sinh_vien_id' => 20,
                'lop_hoc_phan_id' => 13,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-19 18:25:00',
                'ngay_cap_nhat' => '2025-09-19 18:25:00',
            ),
            95 => 
            array (
                'id' => 96,
                'sinh_vien_id' => 20,
                'lop_hoc_phan_id' => 16,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-19 02:05:00',
                'ngay_cap_nhat' => '2026-05-19 02:05:00',
            ),
            96 => 
            array (
                'id' => 97,
                'sinh_vien_id' => 20,
                'lop_hoc_phan_id' => 17,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-14 10:14:00',
                'ngay_cap_nhat' => '2024-06-14 10:14:00',
            ),
            97 => 
            array (
                'id' => 98,
                'sinh_vien_id' => 20,
                'lop_hoc_phan_id' => 19,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-17 10:41:00',
                'ngay_cap_nhat' => '2024-11-17 10:41:00',
            ),
            98 => 
            array (
                'id' => 99,
                'sinh_vien_id' => 21,
                'lop_hoc_phan_id' => 15,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-04 18:33:00',
                'ngay_cap_nhat' => '2026-02-04 18:33:00',
            ),
            99 => 
            array (
                'id' => 100,
                'sinh_vien_id' => 21,
                'lop_hoc_phan_id' => 17,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-06 13:10:00',
                'ngay_cap_nhat' => '2025-04-06 13:10:00',
            ),
            100 => 
            array (
                'id' => 101,
                'sinh_vien_id' => 21,
                'lop_hoc_phan_id' => 20,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-07 00:08:00',
                'ngay_cap_nhat' => '2024-07-07 00:08:00',
            ),
            101 => 
            array (
                'id' => 102,
                'sinh_vien_id' => 21,
                'lop_hoc_phan_id' => 14,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-15 07:42:00',
                'ngay_cap_nhat' => '2026-01-15 07:42:00',
            ),
            102 => 
            array (
                'id' => 103,
                'sinh_vien_id' => 21,
                'lop_hoc_phan_id' => 13,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-14 23:44:00',
                'ngay_cap_nhat' => '2024-09-14 23:44:00',
            ),
            103 => 
            array (
                'id' => 104,
                'sinh_vien_id' => 22,
                'lop_hoc_phan_id' => 14,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-15 03:04:00',
                'ngay_cap_nhat' => '2024-04-15 03:04:00',
            ),
            104 => 
            array (
                'id' => 105,
                'sinh_vien_id' => 22,
                'lop_hoc_phan_id' => 13,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-18 15:35:00',
                'ngay_cap_nhat' => '2026-06-18 15:35:00',
            ),
            105 => 
            array (
                'id' => 106,
                'sinh_vien_id' => 22,
                'lop_hoc_phan_id' => 17,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-25 00:49:00',
                'ngay_cap_nhat' => '2024-02-25 00:49:00',
            ),
            106 => 
            array (
                'id' => 107,
                'sinh_vien_id' => 23,
                'lop_hoc_phan_id' => 19,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-27 20:59:00',
                'ngay_cap_nhat' => '2024-03-27 20:59:00',
            ),
            107 => 
            array (
                'id' => 108,
                'sinh_vien_id' => 23,
                'lop_hoc_phan_id' => 12,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-25 12:19:00',
                'ngay_cap_nhat' => '2026-06-25 12:19:00',
            ),
            108 => 
            array (
                'id' => 109,
                'sinh_vien_id' => 23,
                'lop_hoc_phan_id' => 20,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-22 07:47:00',
                'ngay_cap_nhat' => '2024-08-22 07:47:00',
            ),
            109 => 
            array (
                'id' => 110,
                'sinh_vien_id' => 23,
                'lop_hoc_phan_id' => 13,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-17 14:40:00',
                'ngay_cap_nhat' => '2024-10-17 14:40:00',
            ),
            110 => 
            array (
                'id' => 111,
                'sinh_vien_id' => 23,
                'lop_hoc_phan_id' => 15,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-09 04:33:00',
                'ngay_cap_nhat' => '2024-05-09 04:33:00',
            ),
            111 => 
            array (
                'id' => 112,
                'sinh_vien_id' => 23,
                'lop_hoc_phan_id' => 18,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-08 05:01:00',
                'ngay_cap_nhat' => '2026-05-08 05:01:00',
            ),
            112 => 
            array (
                'id' => 113,
                'sinh_vien_id' => 24,
                'lop_hoc_phan_id' => 16,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-23 17:59:00',
                'ngay_cap_nhat' => '2025-04-23 17:59:00',
            ),
            113 => 
            array (
                'id' => 114,
                'sinh_vien_id' => 24,
                'lop_hoc_phan_id' => 20,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-05 17:28:00',
                'ngay_cap_nhat' => '2024-10-05 17:28:00',
            ),
            114 => 
            array (
                'id' => 115,
                'sinh_vien_id' => 24,
                'lop_hoc_phan_id' => 18,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-18 22:34:00',
                'ngay_cap_nhat' => '2024-05-18 22:34:00',
            ),
            115 => 
            array (
                'id' => 116,
                'sinh_vien_id' => 25,
                'lop_hoc_phan_id' => 20,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-17 20:34:00',
                'ngay_cap_nhat' => '2025-10-17 20:34:00',
            ),
            116 => 
            array (
                'id' => 117,
                'sinh_vien_id' => 25,
                'lop_hoc_phan_id' => 18,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-13 11:30:00',
                'ngay_cap_nhat' => '2024-11-13 11:30:00',
            ),
            117 => 
            array (
                'id' => 118,
                'sinh_vien_id' => 25,
                'lop_hoc_phan_id' => 17,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-06 07:51:00',
                'ngay_cap_nhat' => '2025-07-06 07:51:00',
            ),
            118 => 
            array (
                'id' => 119,
                'sinh_vien_id' => 25,
                'lop_hoc_phan_id' => 15,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-01 14:19:00',
                'ngay_cap_nhat' => '2024-04-01 14:19:00',
            ),
            119 => 
            array (
                'id' => 120,
                'sinh_vien_id' => 26,
                'lop_hoc_phan_id' => 17,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-01 16:52:00',
                'ngay_cap_nhat' => '2024-01-01 16:52:00',
            ),
            120 => 
            array (
                'id' => 121,
                'sinh_vien_id' => 26,
                'lop_hoc_phan_id' => 15,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-15 04:22:00',
                'ngay_cap_nhat' => '2026-02-15 04:22:00',
            ),
            121 => 
            array (
                'id' => 122,
                'sinh_vien_id' => 26,
                'lop_hoc_phan_id' => 13,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-20 15:34:00',
                'ngay_cap_nhat' => '2024-10-20 15:34:00',
            ),
            122 => 
            array (
                'id' => 123,
                'sinh_vien_id' => 26,
                'lop_hoc_phan_id' => 18,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-09 22:59:00',
                'ngay_cap_nhat' => '2024-01-09 22:59:00',
            ),
            123 => 
            array (
                'id' => 124,
                'sinh_vien_id' => 26,
                'lop_hoc_phan_id' => 11,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-18 15:19:00',
                'ngay_cap_nhat' => '2025-05-18 15:19:00',
            ),
            124 => 
            array (
                'id' => 125,
                'sinh_vien_id' => 27,
                'lop_hoc_phan_id' => 17,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-26 00:35:00',
                'ngay_cap_nhat' => '2026-03-26 00:35:00',
            ),
            125 => 
            array (
                'id' => 126,
                'sinh_vien_id' => 27,
                'lop_hoc_phan_id' => 15,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-17 06:26:00',
                'ngay_cap_nhat' => '2025-01-17 06:26:00',
            ),
            126 => 
            array (
                'id' => 127,
                'sinh_vien_id' => 27,
                'lop_hoc_phan_id' => 14,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-22 17:27:00',
                'ngay_cap_nhat' => '2026-06-22 17:27:00',
            ),
            127 => 
            array (
                'id' => 128,
                'sinh_vien_id' => 28,
                'lop_hoc_phan_id' => 14,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-26 02:27:00',
                'ngay_cap_nhat' => '2024-09-26 02:27:00',
            ),
            128 => 
            array (
                'id' => 129,
                'sinh_vien_id' => 28,
                'lop_hoc_phan_id' => 13,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-02 07:33:00',
                'ngay_cap_nhat' => '2025-10-02 07:33:00',
            ),
            129 => 
            array (
                'id' => 130,
                'sinh_vien_id' => 28,
                'lop_hoc_phan_id' => 17,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-21 19:51:00',
                'ngay_cap_nhat' => '2026-02-21 19:51:00',
            ),
            130 => 
            array (
                'id' => 131,
                'sinh_vien_id' => 28,
                'lop_hoc_phan_id' => 18,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-11 21:17:00',
                'ngay_cap_nhat' => '2025-12-11 21:17:00',
            ),
            131 => 
            array (
                'id' => 132,
                'sinh_vien_id' => 28,
                'lop_hoc_phan_id' => 20,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-18 20:47:00',
                'ngay_cap_nhat' => '2024-10-18 20:47:00',
            ),
            132 => 
            array (
                'id' => 133,
                'sinh_vien_id' => 28,
                'lop_hoc_phan_id' => 12,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-28 08:26:00',
                'ngay_cap_nhat' => '2025-06-28 08:26:00',
            ),
            133 => 
            array (
                'id' => 134,
                'sinh_vien_id' => 29,
                'lop_hoc_phan_id' => 12,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-23 20:29:00',
                'ngay_cap_nhat' => '2024-04-23 20:29:00',
            ),
            134 => 
            array (
                'id' => 135,
                'sinh_vien_id' => 29,
                'lop_hoc_phan_id' => 13,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-24 14:17:00',
                'ngay_cap_nhat' => '2025-09-24 14:17:00',
            ),
            135 => 
            array (
                'id' => 136,
                'sinh_vien_id' => 29,
                'lop_hoc_phan_id' => 19,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-18 19:31:00',
                'ngay_cap_nhat' => '2025-12-18 19:31:00',
            ),
            136 => 
            array (
                'id' => 137,
                'sinh_vien_id' => 29,
                'lop_hoc_phan_id' => 18,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-11 10:01:00',
                'ngay_cap_nhat' => '2024-07-11 10:01:00',
            ),
            137 => 
            array (
                'id' => 138,
                'sinh_vien_id' => 30,
                'lop_hoc_phan_id' => 11,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-14 09:17:00',
                'ngay_cap_nhat' => '2024-04-14 09:17:00',
            ),
            138 => 
            array (
                'id' => 139,
                'sinh_vien_id' => 30,
                'lop_hoc_phan_id' => 19,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-08 22:28:00',
                'ngay_cap_nhat' => '2024-05-08 22:28:00',
            ),
            139 => 
            array (
                'id' => 140,
                'sinh_vien_id' => 30,
                'lop_hoc_phan_id' => 20,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-14 00:14:00',
                'ngay_cap_nhat' => '2026-01-14 00:14:00',
            ),
            140 => 
            array (
                'id' => 141,
                'sinh_vien_id' => 30,
                'lop_hoc_phan_id' => 12,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-02 04:00:00',
                'ngay_cap_nhat' => '2024-04-02 04:00:00',
            ),
            141 => 
            array (
                'id' => 142,
                'sinh_vien_id' => 31,
                'lop_hoc_phan_id' => 24,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-19 22:50:00',
                'ngay_cap_nhat' => '2025-04-19 22:50:00',
            ),
            142 => 
            array (
                'id' => 143,
                'sinh_vien_id' => 31,
                'lop_hoc_phan_id' => 26,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-02 10:05:00',
                'ngay_cap_nhat' => '2024-02-02 10:05:00',
            ),
            143 => 
            array (
                'id' => 144,
                'sinh_vien_id' => 31,
                'lop_hoc_phan_id' => 27,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-13 04:03:00',
                'ngay_cap_nhat' => '2026-05-13 04:03:00',
            ),
            144 => 
            array (
                'id' => 145,
                'sinh_vien_id' => 31,
                'lop_hoc_phan_id' => 23,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-29 12:04:00',
                'ngay_cap_nhat' => '2024-09-29 12:04:00',
            ),
            145 => 
            array (
                'id' => 146,
                'sinh_vien_id' => 31,
                'lop_hoc_phan_id' => 30,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-10 15:11:00',
                'ngay_cap_nhat' => '2025-07-10 15:11:00',
            ),
            146 => 
            array (
                'id' => 147,
                'sinh_vien_id' => 31,
                'lop_hoc_phan_id' => 28,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-15 08:52:00',
                'ngay_cap_nhat' => '2024-07-15 08:52:00',
            ),
            147 => 
            array (
                'id' => 148,
                'sinh_vien_id' => 32,
                'lop_hoc_phan_id' => 21,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-25 01:12:00',
                'ngay_cap_nhat' => '2026-01-25 01:12:00',
            ),
            148 => 
            array (
                'id' => 149,
                'sinh_vien_id' => 32,
                'lop_hoc_phan_id' => 22,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-16 23:49:00',
                'ngay_cap_nhat' => '2025-04-16 23:49:00',
            ),
            149 => 
            array (
                'id' => 150,
                'sinh_vien_id' => 32,
                'lop_hoc_phan_id' => 24,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-06 16:42:00',
                'ngay_cap_nhat' => '2024-04-06 16:42:00',
            ),
            150 => 
            array (
                'id' => 151,
                'sinh_vien_id' => 32,
                'lop_hoc_phan_id' => 28,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-01 15:24:00',
                'ngay_cap_nhat' => '2024-08-01 15:24:00',
            ),
            151 => 
            array (
                'id' => 152,
                'sinh_vien_id' => 32,
                'lop_hoc_phan_id' => 27,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-28 09:59:00',
                'ngay_cap_nhat' => '2025-11-28 09:59:00',
            ),
            152 => 
            array (
                'id' => 153,
                'sinh_vien_id' => 32,
                'lop_hoc_phan_id' => 29,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-26 05:40:00',
                'ngay_cap_nhat' => '2024-11-26 05:40:00',
            ),
            153 => 
            array (
                'id' => 154,
                'sinh_vien_id' => 33,
                'lop_hoc_phan_id' => 29,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-16 15:40:00',
                'ngay_cap_nhat' => '2024-09-16 15:40:00',
            ),
            154 => 
            array (
                'id' => 155,
                'sinh_vien_id' => 33,
                'lop_hoc_phan_id' => 30,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-01 06:23:00',
                'ngay_cap_nhat' => '2024-11-01 06:23:00',
            ),
            155 => 
            array (
                'id' => 156,
                'sinh_vien_id' => 33,
                'lop_hoc_phan_id' => 22,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-27 01:55:00',
                'ngay_cap_nhat' => '2026-06-27 01:55:00',
            ),
            156 => 
            array (
                'id' => 157,
                'sinh_vien_id' => 34,
                'lop_hoc_phan_id' => 22,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-16 05:50:00',
                'ngay_cap_nhat' => '2024-01-16 05:50:00',
            ),
            157 => 
            array (
                'id' => 158,
                'sinh_vien_id' => 34,
                'lop_hoc_phan_id' => 24,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-09 18:07:00',
                'ngay_cap_nhat' => '2024-10-09 18:07:00',
            ),
            158 => 
            array (
                'id' => 159,
                'sinh_vien_id' => 34,
                'lop_hoc_phan_id' => 27,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-09 07:00:00',
                'ngay_cap_nhat' => '2025-02-09 07:00:00',
            ),
            159 => 
            array (
                'id' => 160,
                'sinh_vien_id' => 34,
                'lop_hoc_phan_id' => 23,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-13 18:50:00',
                'ngay_cap_nhat' => '2024-02-13 18:50:00',
            ),
            160 => 
            array (
                'id' => 161,
                'sinh_vien_id' => 35,
                'lop_hoc_phan_id' => 30,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-10 15:05:00',
                'ngay_cap_nhat' => '2024-06-10 15:05:00',
            ),
            161 => 
            array (
                'id' => 162,
                'sinh_vien_id' => 35,
                'lop_hoc_phan_id' => 23,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-03 19:21:00',
                'ngay_cap_nhat' => '2025-12-03 19:21:00',
            ),
            162 => 
            array (
                'id' => 163,
                'sinh_vien_id' => 35,
                'lop_hoc_phan_id' => 26,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-16 20:03:00',
                'ngay_cap_nhat' => '2026-02-16 20:03:00',
            ),
            163 => 
            array (
                'id' => 164,
                'sinh_vien_id' => 35,
                'lop_hoc_phan_id' => 27,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-02 11:41:00',
                'ngay_cap_nhat' => '2024-03-02 11:41:00',
            ),
            164 => 
            array (
                'id' => 165,
                'sinh_vien_id' => 35,
                'lop_hoc_phan_id' => 21,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-06 22:34:00',
                'ngay_cap_nhat' => '2024-06-06 22:34:00',
            ),
            165 => 
            array (
                'id' => 166,
                'sinh_vien_id' => 35,
                'lop_hoc_phan_id' => 22,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-21 03:08:00',
                'ngay_cap_nhat' => '2026-03-21 03:08:00',
            ),
            166 => 
            array (
                'id' => 167,
                'sinh_vien_id' => 36,
                'lop_hoc_phan_id' => 24,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-22 22:24:00',
                'ngay_cap_nhat' => '2024-01-22 22:24:00',
            ),
            167 => 
            array (
                'id' => 168,
                'sinh_vien_id' => 36,
                'lop_hoc_phan_id' => 26,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-01 23:08:00',
                'ngay_cap_nhat' => '2025-01-01 23:08:00',
            ),
            168 => 
            array (
                'id' => 169,
                'sinh_vien_id' => 36,
                'lop_hoc_phan_id' => 29,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-13 01:31:00',
                'ngay_cap_nhat' => '2024-09-13 01:31:00',
            ),
            169 => 
            array (
                'id' => 170,
                'sinh_vien_id' => 36,
                'lop_hoc_phan_id' => 27,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-24 14:35:00',
                'ngay_cap_nhat' => '2025-12-24 14:35:00',
            ),
            170 => 
            array (
                'id' => 171,
                'sinh_vien_id' => 36,
                'lop_hoc_phan_id' => 30,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-28 17:44:00',
                'ngay_cap_nhat' => '2024-10-28 17:44:00',
            ),
            171 => 
            array (
                'id' => 172,
                'sinh_vien_id' => 36,
                'lop_hoc_phan_id' => 22,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-16 06:36:00',
                'ngay_cap_nhat' => '2025-05-16 06:36:00',
            ),
            172 => 
            array (
                'id' => 173,
                'sinh_vien_id' => 37,
                'lop_hoc_phan_id' => 29,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-24 08:55:00',
                'ngay_cap_nhat' => '2025-04-24 08:55:00',
            ),
            173 => 
            array (
                'id' => 174,
                'sinh_vien_id' => 37,
                'lop_hoc_phan_id' => 26,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-01 19:58:00',
                'ngay_cap_nhat' => '2026-05-01 19:58:00',
            ),
            174 => 
            array (
                'id' => 175,
                'sinh_vien_id' => 37,
                'lop_hoc_phan_id' => 30,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-31 17:10:00',
                'ngay_cap_nhat' => '2026-05-31 17:10:00',
            ),
            175 => 
            array (
                'id' => 176,
                'sinh_vien_id' => 37,
                'lop_hoc_phan_id' => 28,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-11 16:09:00',
                'ngay_cap_nhat' => '2024-03-11 16:09:00',
            ),
            176 => 
            array (
                'id' => 177,
                'sinh_vien_id' => 38,
                'lop_hoc_phan_id' => 25,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-23 23:11:00',
                'ngay_cap_nhat' => '2025-01-23 23:11:00',
            ),
            177 => 
            array (
                'id' => 178,
                'sinh_vien_id' => 38,
                'lop_hoc_phan_id' => 30,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-23 00:39:00',
                'ngay_cap_nhat' => '2026-06-23 00:39:00',
            ),
            178 => 
            array (
                'id' => 179,
                'sinh_vien_id' => 38,
                'lop_hoc_phan_id' => 26,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-27 11:49:00',
                'ngay_cap_nhat' => '2026-05-27 11:49:00',
            ),
            179 => 
            array (
                'id' => 180,
                'sinh_vien_id' => 38,
                'lop_hoc_phan_id' => 24,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-27 07:20:00',
                'ngay_cap_nhat' => '2025-09-27 07:20:00',
            ),
            180 => 
            array (
                'id' => 181,
                'sinh_vien_id' => 38,
                'lop_hoc_phan_id' => 21,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-08 02:42:00',
                'ngay_cap_nhat' => '2026-01-08 02:42:00',
            ),
            181 => 
            array (
                'id' => 182,
                'sinh_vien_id' => 38,
                'lop_hoc_phan_id' => 29,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-05 12:12:00',
                'ngay_cap_nhat' => '2025-07-05 12:12:00',
            ),
            182 => 
            array (
                'id' => 183,
                'sinh_vien_id' => 39,
                'lop_hoc_phan_id' => 29,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-23 03:33:00',
                'ngay_cap_nhat' => '2024-04-23 03:33:00',
            ),
            183 => 
            array (
                'id' => 184,
                'sinh_vien_id' => 39,
                'lop_hoc_phan_id' => 23,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-05 02:02:00',
                'ngay_cap_nhat' => '2025-11-05 02:02:00',
            ),
            184 => 
            array (
                'id' => 185,
                'sinh_vien_id' => 39,
                'lop_hoc_phan_id' => 25,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-05 04:11:00',
                'ngay_cap_nhat' => '2026-05-05 04:11:00',
            ),
            185 => 
            array (
                'id' => 186,
                'sinh_vien_id' => 39,
                'lop_hoc_phan_id' => 30,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-13 01:12:00',
                'ngay_cap_nhat' => '2026-06-13 01:12:00',
            ),
            186 => 
            array (
                'id' => 187,
                'sinh_vien_id' => 39,
                'lop_hoc_phan_id' => 24,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-19 15:12:00',
                'ngay_cap_nhat' => '2024-04-19 15:12:00',
            ),
            187 => 
            array (
                'id' => 188,
                'sinh_vien_id' => 39,
                'lop_hoc_phan_id' => 27,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-11 01:36:00',
                'ngay_cap_nhat' => '2024-04-11 01:36:00',
            ),
            188 => 
            array (
                'id' => 189,
                'sinh_vien_id' => 40,
                'lop_hoc_phan_id' => 28,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-12 22:04:00',
                'ngay_cap_nhat' => '2025-09-12 22:04:00',
            ),
            189 => 
            array (
                'id' => 190,
                'sinh_vien_id' => 40,
                'lop_hoc_phan_id' => 29,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-14 06:41:00',
                'ngay_cap_nhat' => '2024-01-14 06:41:00',
            ),
            190 => 
            array (
                'id' => 191,
                'sinh_vien_id' => 40,
                'lop_hoc_phan_id' => 25,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-18 02:29:00',
                'ngay_cap_nhat' => '2025-05-18 02:29:00',
            ),
            191 => 
            array (
                'id' => 192,
                'sinh_vien_id' => 40,
                'lop_hoc_phan_id' => 21,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-31 20:03:00',
                'ngay_cap_nhat' => '2026-03-31 20:03:00',
            ),
            192 => 
            array (
                'id' => 193,
                'sinh_vien_id' => 40,
                'lop_hoc_phan_id' => 23,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-04 17:47:00',
                'ngay_cap_nhat' => '2025-01-04 17:47:00',
            ),
            193 => 
            array (
                'id' => 194,
                'sinh_vien_id' => 40,
                'lop_hoc_phan_id' => 22,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-03-01 11:50:00',
                'ngay_cap_nhat' => '2025-03-01 11:50:00',
            ),
            194 => 
            array (
                'id' => 195,
                'sinh_vien_id' => 41,
                'lop_hoc_phan_id' => 30,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-21 02:53:00',
                'ngay_cap_nhat' => '2026-01-21 02:53:00',
            ),
            195 => 
            array (
                'id' => 196,
                'sinh_vien_id' => 41,
                'lop_hoc_phan_id' => 25,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-07 02:13:00',
                'ngay_cap_nhat' => '2024-11-07 02:13:00',
            ),
            196 => 
            array (
                'id' => 197,
                'sinh_vien_id' => 41,
                'lop_hoc_phan_id' => 21,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-15 03:06:00',
                'ngay_cap_nhat' => '2025-06-15 03:06:00',
            ),
            197 => 
            array (
                'id' => 198,
                'sinh_vien_id' => 42,
                'lop_hoc_phan_id' => 29,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-22 21:15:00',
                'ngay_cap_nhat' => '2025-06-22 21:15:00',
            ),
            198 => 
            array (
                'id' => 199,
                'sinh_vien_id' => 42,
                'lop_hoc_phan_id' => 27,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-06 20:11:00',
                'ngay_cap_nhat' => '2025-08-06 20:11:00',
            ),
            199 => 
            array (
                'id' => 200,
                'sinh_vien_id' => 42,
                'lop_hoc_phan_id' => 24,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-25 23:35:00',
                'ngay_cap_nhat' => '2025-07-25 23:35:00',
            ),
            200 => 
            array (
                'id' => 201,
                'sinh_vien_id' => 42,
                'lop_hoc_phan_id' => 22,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-03-01 23:06:00',
                'ngay_cap_nhat' => '2025-03-01 23:06:00',
            ),
            201 => 
            array (
                'id' => 202,
                'sinh_vien_id' => 43,
                'lop_hoc_phan_id' => 28,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-17 12:32:00',
                'ngay_cap_nhat' => '2025-07-17 12:32:00',
            ),
            202 => 
            array (
                'id' => 203,
                'sinh_vien_id' => 43,
                'lop_hoc_phan_id' => 27,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-11 21:10:00',
                'ngay_cap_nhat' => '2024-12-11 21:10:00',
            ),
            203 => 
            array (
                'id' => 204,
                'sinh_vien_id' => 43,
                'lop_hoc_phan_id' => 22,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-30 19:28:00',
                'ngay_cap_nhat' => '2025-06-30 19:28:00',
            ),
            204 => 
            array (
                'id' => 205,
                'sinh_vien_id' => 43,
                'lop_hoc_phan_id' => 30,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-26 10:35:00',
                'ngay_cap_nhat' => '2024-12-26 10:35:00',
            ),
            205 => 
            array (
                'id' => 206,
                'sinh_vien_id' => 43,
                'lop_hoc_phan_id' => 29,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-28 11:26:00',
                'ngay_cap_nhat' => '2024-11-28 11:26:00',
            ),
            206 => 
            array (
                'id' => 207,
                'sinh_vien_id' => 44,
                'lop_hoc_phan_id' => 26,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-03 14:28:00',
                'ngay_cap_nhat' => '2025-01-03 14:28:00',
            ),
            207 => 
            array (
                'id' => 208,
                'sinh_vien_id' => 44,
                'lop_hoc_phan_id' => 24,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-10 00:46:00',
                'ngay_cap_nhat' => '2025-02-10 00:46:00',
            ),
            208 => 
            array (
                'id' => 209,
                'sinh_vien_id' => 44,
                'lop_hoc_phan_id' => 29,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-05 09:38:00',
                'ngay_cap_nhat' => '2024-02-05 09:38:00',
            ),
            209 => 
            array (
                'id' => 210,
                'sinh_vien_id' => 44,
                'lop_hoc_phan_id' => 28,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-17 16:08:00',
                'ngay_cap_nhat' => '2024-01-17 16:08:00',
            ),
            210 => 
            array (
                'id' => 211,
                'sinh_vien_id' => 44,
                'lop_hoc_phan_id' => 25,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-05 00:19:00',
                'ngay_cap_nhat' => '2024-11-05 00:19:00',
            ),
            211 => 
            array (
                'id' => 212,
                'sinh_vien_id' => 44,
                'lop_hoc_phan_id' => 23,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-15 06:54:00',
                'ngay_cap_nhat' => '2024-08-15 06:54:00',
            ),
            212 => 
            array (
                'id' => 213,
                'sinh_vien_id' => 45,
                'lop_hoc_phan_id' => 21,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-16 11:09:00',
                'ngay_cap_nhat' => '2025-04-16 11:09:00',
            ),
            213 => 
            array (
                'id' => 214,
                'sinh_vien_id' => 45,
                'lop_hoc_phan_id' => 25,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-21 08:23:00',
                'ngay_cap_nhat' => '2024-05-21 08:23:00',
            ),
            214 => 
            array (
                'id' => 215,
                'sinh_vien_id' => 45,
                'lop_hoc_phan_id' => 23,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-19 07:14:00',
                'ngay_cap_nhat' => '2025-08-19 07:14:00',
            ),
            215 => 
            array (
                'id' => 216,
                'sinh_vien_id' => 45,
                'lop_hoc_phan_id' => 30,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-19 09:05:00',
                'ngay_cap_nhat' => '2024-09-19 09:05:00',
            ),
            216 => 
            array (
                'id' => 217,
                'sinh_vien_id' => 45,
                'lop_hoc_phan_id' => 27,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-07 12:36:00',
                'ngay_cap_nhat' => '2025-08-07 12:36:00',
            ),
            217 => 
            array (
                'id' => 218,
                'sinh_vien_id' => 46,
                'lop_hoc_phan_id' => 22,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-14 22:44:00',
                'ngay_cap_nhat' => '2025-05-14 22:44:00',
            ),
            218 => 
            array (
                'id' => 219,
                'sinh_vien_id' => 46,
                'lop_hoc_phan_id' => 26,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-13 03:38:00',
                'ngay_cap_nhat' => '2025-08-13 03:38:00',
            ),
            219 => 
            array (
                'id' => 220,
                'sinh_vien_id' => 46,
                'lop_hoc_phan_id' => 28,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-19 09:02:00',
                'ngay_cap_nhat' => '2025-10-19 09:02:00',
            ),
            220 => 
            array (
                'id' => 221,
                'sinh_vien_id' => 46,
                'lop_hoc_phan_id' => 30,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-18 18:24:00',
                'ngay_cap_nhat' => '2026-01-18 18:24:00',
            ),
            221 => 
            array (
                'id' => 222,
                'sinh_vien_id' => 47,
                'lop_hoc_phan_id' => 21,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-19 13:26:00',
                'ngay_cap_nhat' => '2026-06-19 13:26:00',
            ),
            222 => 
            array (
                'id' => 223,
                'sinh_vien_id' => 47,
                'lop_hoc_phan_id' => 26,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-07 03:55:00',
                'ngay_cap_nhat' => '2026-06-07 03:55:00',
            ),
            223 => 
            array (
                'id' => 224,
                'sinh_vien_id' => 47,
                'lop_hoc_phan_id' => 29,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-27 07:47:00',
                'ngay_cap_nhat' => '2026-02-27 07:47:00',
            ),
            224 => 
            array (
                'id' => 225,
                'sinh_vien_id' => 48,
                'lop_hoc_phan_id' => 27,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-20 01:20:00',
                'ngay_cap_nhat' => '2025-06-20 01:20:00',
            ),
            225 => 
            array (
                'id' => 226,
                'sinh_vien_id' => 48,
                'lop_hoc_phan_id' => 21,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-06 18:09:00',
                'ngay_cap_nhat' => '2025-07-06 18:09:00',
            ),
            226 => 
            array (
                'id' => 227,
                'sinh_vien_id' => 48,
                'lop_hoc_phan_id' => 25,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-30 16:44:00',
                'ngay_cap_nhat' => '2024-11-30 16:44:00',
            ),
            227 => 
            array (
                'id' => 228,
                'sinh_vien_id' => 49,
                'lop_hoc_phan_id' => 33,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-09 19:36:00',
                'ngay_cap_nhat' => '2026-02-09 19:36:00',
            ),
            228 => 
            array (
                'id' => 229,
                'sinh_vien_id' => 49,
                'lop_hoc_phan_id' => 31,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-31 02:14:00',
                'ngay_cap_nhat' => '2025-05-31 02:14:00',
            ),
            229 => 
            array (
                'id' => 230,
                'sinh_vien_id' => 49,
                'lop_hoc_phan_id' => 37,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-03-18 09:50:00',
                'ngay_cap_nhat' => '2025-03-18 09:50:00',
            ),
            230 => 
            array (
                'id' => 231,
                'sinh_vien_id' => 49,
                'lop_hoc_phan_id' => 34,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-07 04:08:00',
                'ngay_cap_nhat' => '2025-02-07 04:08:00',
            ),
            231 => 
            array (
                'id' => 232,
                'sinh_vien_id' => 50,
                'lop_hoc_phan_id' => 32,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-25 02:25:00',
                'ngay_cap_nhat' => '2024-09-25 02:25:00',
            ),
            232 => 
            array (
                'id' => 233,
                'sinh_vien_id' => 50,
                'lop_hoc_phan_id' => 38,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-28 13:49:00',
                'ngay_cap_nhat' => '2025-05-28 13:49:00',
            ),
            233 => 
            array (
                'id' => 234,
                'sinh_vien_id' => 50,
                'lop_hoc_phan_id' => 31,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-15 04:48:00',
                'ngay_cap_nhat' => '2025-12-15 04:48:00',
            ),
            234 => 
            array (
                'id' => 235,
                'sinh_vien_id' => 50,
                'lop_hoc_phan_id' => 35,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-18 15:35:00',
                'ngay_cap_nhat' => '2024-05-18 15:35:00',
            ),
            235 => 
            array (
                'id' => 236,
                'sinh_vien_id' => 50,
                'lop_hoc_phan_id' => 34,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-21 15:25:00',
                'ngay_cap_nhat' => '2024-07-21 15:25:00',
            ),
            236 => 
            array (
                'id' => 237,
                'sinh_vien_id' => 51,
                'lop_hoc_phan_id' => 39,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-14 08:49:00',
                'ngay_cap_nhat' => '2024-03-14 08:49:00',
            ),
            237 => 
            array (
                'id' => 238,
                'sinh_vien_id' => 51,
                'lop_hoc_phan_id' => 40,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-03-16 10:43:00',
                'ngay_cap_nhat' => '2025-03-16 10:43:00',
            ),
            238 => 
            array (
                'id' => 239,
                'sinh_vien_id' => 51,
                'lop_hoc_phan_id' => 34,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-12 02:07:00',
                'ngay_cap_nhat' => '2025-08-12 02:07:00',
            ),
            239 => 
            array (
                'id' => 240,
                'sinh_vien_id' => 51,
                'lop_hoc_phan_id' => 32,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-18 13:27:00',
                'ngay_cap_nhat' => '2025-11-18 13:27:00',
            ),
            240 => 
            array (
                'id' => 241,
                'sinh_vien_id' => 52,
                'lop_hoc_phan_id' => 36,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-02 00:49:00',
                'ngay_cap_nhat' => '2025-11-02 00:49:00',
            ),
            241 => 
            array (
                'id' => 242,
                'sinh_vien_id' => 52,
                'lop_hoc_phan_id' => 34,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-08 05:22:00',
                'ngay_cap_nhat' => '2024-11-08 05:22:00',
            ),
            242 => 
            array (
                'id' => 243,
                'sinh_vien_id' => 52,
                'lop_hoc_phan_id' => 40,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-23 14:39:00',
                'ngay_cap_nhat' => '2025-09-23 14:39:00',
            ),
            243 => 
            array (
                'id' => 244,
                'sinh_vien_id' => 52,
                'lop_hoc_phan_id' => 33,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-29 14:02:00',
                'ngay_cap_nhat' => '2024-05-29 14:02:00',
            ),
            244 => 
            array (
                'id' => 245,
                'sinh_vien_id' => 52,
                'lop_hoc_phan_id' => 35,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-17 07:12:00',
                'ngay_cap_nhat' => '2026-04-17 07:12:00',
            ),
            245 => 
            array (
                'id' => 246,
                'sinh_vien_id' => 53,
                'lop_hoc_phan_id' => 33,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-05 19:59:00',
                'ngay_cap_nhat' => '2024-09-05 19:59:00',
            ),
            246 => 
            array (
                'id' => 247,
                'sinh_vien_id' => 53,
                'lop_hoc_phan_id' => 32,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-31 09:00:00',
                'ngay_cap_nhat' => '2024-05-31 09:00:00',
            ),
            247 => 
            array (
                'id' => 248,
                'sinh_vien_id' => 53,
                'lop_hoc_phan_id' => 39,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-17 22:51:00',
                'ngay_cap_nhat' => '2024-12-17 22:51:00',
            ),
            248 => 
            array (
                'id' => 249,
                'sinh_vien_id' => 53,
                'lop_hoc_phan_id' => 36,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-23 09:28:00',
                'ngay_cap_nhat' => '2024-04-23 09:28:00',
            ),
            249 => 
            array (
                'id' => 250,
                'sinh_vien_id' => 53,
                'lop_hoc_phan_id' => 31,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-27 00:21:00',
                'ngay_cap_nhat' => '2025-04-27 00:21:00',
            ),
            250 => 
            array (
                'id' => 251,
                'sinh_vien_id' => 54,
                'lop_hoc_phan_id' => 39,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-19 08:35:00',
                'ngay_cap_nhat' => '2025-06-19 08:35:00',
            ),
            251 => 
            array (
                'id' => 252,
                'sinh_vien_id' => 54,
                'lop_hoc_phan_id' => 34,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-09 19:46:00',
                'ngay_cap_nhat' => '2025-05-09 19:46:00',
            ),
            252 => 
            array (
                'id' => 253,
                'sinh_vien_id' => 54,
                'lop_hoc_phan_id' => 40,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-24 22:44:00',
                'ngay_cap_nhat' => '2024-05-24 22:44:00',
            ),
            253 => 
            array (
                'id' => 254,
                'sinh_vien_id' => 54,
                'lop_hoc_phan_id' => 35,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-15 00:24:00',
                'ngay_cap_nhat' => '2025-11-15 00:24:00',
            ),
            254 => 
            array (
                'id' => 255,
                'sinh_vien_id' => 55,
                'lop_hoc_phan_id' => 35,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-17 06:50:00',
                'ngay_cap_nhat' => '2024-10-17 06:50:00',
            ),
            255 => 
            array (
                'id' => 256,
                'sinh_vien_id' => 55,
                'lop_hoc_phan_id' => 33,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-14 19:17:00',
                'ngay_cap_nhat' => '2025-12-14 19:17:00',
            ),
            256 => 
            array (
                'id' => 257,
                'sinh_vien_id' => 55,
                'lop_hoc_phan_id' => 31,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-24 14:41:00',
                'ngay_cap_nhat' => '2024-02-24 14:41:00',
            ),
            257 => 
            array (
                'id' => 258,
                'sinh_vien_id' => 56,
                'lop_hoc_phan_id' => 32,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-09 21:23:00',
                'ngay_cap_nhat' => '2025-11-09 21:23:00',
            ),
            258 => 
            array (
                'id' => 259,
                'sinh_vien_id' => 56,
                'lop_hoc_phan_id' => 37,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-04 03:01:00',
                'ngay_cap_nhat' => '2026-06-04 03:01:00',
            ),
            259 => 
            array (
                'id' => 260,
                'sinh_vien_id' => 56,
                'lop_hoc_phan_id' => 35,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-26 20:24:00',
                'ngay_cap_nhat' => '2024-10-26 20:24:00',
            ),
            260 => 
            array (
                'id' => 261,
                'sinh_vien_id' => 57,
                'lop_hoc_phan_id' => 37,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-11 19:34:00',
                'ngay_cap_nhat' => '2025-05-11 19:34:00',
            ),
            261 => 
            array (
                'id' => 262,
                'sinh_vien_id' => 57,
                'lop_hoc_phan_id' => 39,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-31 05:12:00',
                'ngay_cap_nhat' => '2024-03-31 05:12:00',
            ),
            262 => 
            array (
                'id' => 263,
                'sinh_vien_id' => 57,
                'lop_hoc_phan_id' => 32,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-27 14:35:00',
                'ngay_cap_nhat' => '2025-05-27 14:35:00',
            ),
            263 => 
            array (
                'id' => 264,
                'sinh_vien_id' => 57,
                'lop_hoc_phan_id' => 33,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-30 00:02:00',
                'ngay_cap_nhat' => '2025-12-30 00:02:00',
            ),
            264 => 
            array (
                'id' => 265,
                'sinh_vien_id' => 58,
                'lop_hoc_phan_id' => 39,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-06 23:10:00',
                'ngay_cap_nhat' => '2025-02-06 23:10:00',
            ),
            265 => 
            array (
                'id' => 266,
                'sinh_vien_id' => 58,
                'lop_hoc_phan_id' => 35,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-19 11:43:00',
                'ngay_cap_nhat' => '2024-01-19 11:43:00',
            ),
            266 => 
            array (
                'id' => 267,
                'sinh_vien_id' => 58,
                'lop_hoc_phan_id' => 36,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-26 11:40:00',
                'ngay_cap_nhat' => '2024-12-26 11:40:00',
            ),
            267 => 
            array (
                'id' => 268,
                'sinh_vien_id' => 58,
                'lop_hoc_phan_id' => 34,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-05 07:32:00',
                'ngay_cap_nhat' => '2024-11-05 07:32:00',
            ),
            268 => 
            array (
                'id' => 269,
                'sinh_vien_id' => 59,
                'lop_hoc_phan_id' => 31,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-22 08:14:00',
                'ngay_cap_nhat' => '2025-07-22 08:14:00',
            ),
            269 => 
            array (
                'id' => 270,
                'sinh_vien_id' => 59,
                'lop_hoc_phan_id' => 35,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-04 10:57:00',
                'ngay_cap_nhat' => '2024-06-04 10:57:00',
            ),
            270 => 
            array (
                'id' => 271,
                'sinh_vien_id' => 59,
                'lop_hoc_phan_id' => 37,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-06 21:08:00',
                'ngay_cap_nhat' => '2025-02-06 21:08:00',
            ),
            271 => 
            array (
                'id' => 272,
                'sinh_vien_id' => 59,
                'lop_hoc_phan_id' => 38,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-30 23:24:00',
                'ngay_cap_nhat' => '2024-03-30 23:24:00',
            ),
            272 => 
            array (
                'id' => 273,
                'sinh_vien_id' => 59,
                'lop_hoc_phan_id' => 40,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-17 21:39:00',
                'ngay_cap_nhat' => '2025-06-17 21:39:00',
            ),
            273 => 
            array (
                'id' => 274,
                'sinh_vien_id' => 60,
                'lop_hoc_phan_id' => 37,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-15 19:21:00',
                'ngay_cap_nhat' => '2024-11-15 19:21:00',
            ),
            274 => 
            array (
                'id' => 275,
                'sinh_vien_id' => 60,
                'lop_hoc_phan_id' => 34,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-04 17:08:00',
                'ngay_cap_nhat' => '2025-04-04 17:08:00',
            ),
            275 => 
            array (
                'id' => 276,
                'sinh_vien_id' => 60,
                'lop_hoc_phan_id' => 33,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-30 20:08:00',
                'ngay_cap_nhat' => '2024-07-30 20:08:00',
            ),
            276 => 
            array (
                'id' => 277,
                'sinh_vien_id' => 60,
                'lop_hoc_phan_id' => 39,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-17 17:43:00',
                'ngay_cap_nhat' => '2025-08-17 17:43:00',
            ),
            277 => 
            array (
                'id' => 278,
                'sinh_vien_id' => 61,
                'lop_hoc_phan_id' => 43,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-27 04:41:00',
                'ngay_cap_nhat' => '2026-02-27 04:41:00',
            ),
            278 => 
            array (
                'id' => 279,
                'sinh_vien_id' => 61,
                'lop_hoc_phan_id' => 45,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-01 05:20:00',
                'ngay_cap_nhat' => '2025-08-01 05:20:00',
            ),
            279 => 
            array (
                'id' => 280,
                'sinh_vien_id' => 61,
                'lop_hoc_phan_id' => 50,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-10 17:34:00',
                'ngay_cap_nhat' => '2024-03-10 17:34:00',
            ),
            280 => 
            array (
                'id' => 281,
                'sinh_vien_id' => 61,
                'lop_hoc_phan_id' => 44,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-06 03:11:00',
                'ngay_cap_nhat' => '2026-01-06 03:11:00',
            ),
            281 => 
            array (
                'id' => 282,
                'sinh_vien_id' => 62,
                'lop_hoc_phan_id' => 43,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-06 14:47:00',
                'ngay_cap_nhat' => '2024-11-06 14:47:00',
            ),
            282 => 
            array (
                'id' => 283,
                'sinh_vien_id' => 62,
                'lop_hoc_phan_id' => 41,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-21 20:59:00',
                'ngay_cap_nhat' => '2026-04-21 20:59:00',
            ),
            283 => 
            array (
                'id' => 284,
                'sinh_vien_id' => 62,
                'lop_hoc_phan_id' => 46,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-26 08:09:00',
                'ngay_cap_nhat' => '2026-01-26 08:09:00',
            ),
            284 => 
            array (
                'id' => 285,
                'sinh_vien_id' => 62,
                'lop_hoc_phan_id' => 44,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-08 06:06:00',
                'ngay_cap_nhat' => '2026-03-08 06:06:00',
            ),
            285 => 
            array (
                'id' => 286,
                'sinh_vien_id' => 62,
                'lop_hoc_phan_id' => 47,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-14 05:01:00',
                'ngay_cap_nhat' => '2024-05-14 05:01:00',
            ),
            286 => 
            array (
                'id' => 287,
                'sinh_vien_id' => 63,
                'lop_hoc_phan_id' => 50,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-27 11:05:00',
                'ngay_cap_nhat' => '2024-01-27 11:05:00',
            ),
            287 => 
            array (
                'id' => 288,
                'sinh_vien_id' => 63,
                'lop_hoc_phan_id' => 44,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-05 15:08:00',
                'ngay_cap_nhat' => '2025-12-05 15:08:00',
            ),
            288 => 
            array (
                'id' => 289,
                'sinh_vien_id' => 63,
                'lop_hoc_phan_id' => 49,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-29 19:30:00',
                'ngay_cap_nhat' => '2025-05-29 19:30:00',
            ),
            289 => 
            array (
                'id' => 290,
                'sinh_vien_id' => 63,
                'lop_hoc_phan_id' => 42,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-30 20:23:00',
                'ngay_cap_nhat' => '2025-12-30 20:23:00',
            ),
            290 => 
            array (
                'id' => 291,
                'sinh_vien_id' => 63,
                'lop_hoc_phan_id' => 46,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-07 12:31:00',
                'ngay_cap_nhat' => '2024-07-07 12:31:00',
            ),
            291 => 
            array (
                'id' => 292,
                'sinh_vien_id' => 64,
                'lop_hoc_phan_id' => 43,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-21 00:59:00',
                'ngay_cap_nhat' => '2026-02-21 00:59:00',
            ),
            292 => 
            array (
                'id' => 293,
                'sinh_vien_id' => 64,
                'lop_hoc_phan_id' => 50,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-03 13:14:00',
                'ngay_cap_nhat' => '2024-10-03 13:14:00',
            ),
            293 => 
            array (
                'id' => 294,
                'sinh_vien_id' => 64,
                'lop_hoc_phan_id' => 44,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-30 21:12:00',
                'ngay_cap_nhat' => '2026-01-30 21:12:00',
            ),
            294 => 
            array (
                'id' => 295,
                'sinh_vien_id' => 64,
                'lop_hoc_phan_id' => 42,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-14 06:04:00',
                'ngay_cap_nhat' => '2026-02-14 06:04:00',
            ),
            295 => 
            array (
                'id' => 296,
                'sinh_vien_id' => 64,
                'lop_hoc_phan_id' => 41,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-30 14:55:00',
                'ngay_cap_nhat' => '2024-06-30 14:55:00',
            ),
            296 => 
            array (
                'id' => 297,
                'sinh_vien_id' => 64,
                'lop_hoc_phan_id' => 48,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-23 15:44:00',
                'ngay_cap_nhat' => '2025-09-23 15:44:00',
            ),
            297 => 
            array (
                'id' => 298,
                'sinh_vien_id' => 65,
                'lop_hoc_phan_id' => 48,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-14 23:52:00',
                'ngay_cap_nhat' => '2025-09-14 23:52:00',
            ),
            298 => 
            array (
                'id' => 299,
                'sinh_vien_id' => 65,
                'lop_hoc_phan_id' => 44,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-24 23:20:00',
                'ngay_cap_nhat' => '2025-01-24 23:20:00',
            ),
            299 => 
            array (
                'id' => 300,
                'sinh_vien_id' => 65,
                'lop_hoc_phan_id' => 47,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-07 19:47:00',
                'ngay_cap_nhat' => '2025-02-07 19:47:00',
            ),
            300 => 
            array (
                'id' => 301,
                'sinh_vien_id' => 65,
                'lop_hoc_phan_id' => 49,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-08 19:34:00',
                'ngay_cap_nhat' => '2025-08-08 19:34:00',
            ),
            301 => 
            array (
                'id' => 302,
                'sinh_vien_id' => 65,
                'lop_hoc_phan_id' => 41,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-21 20:56:00',
                'ngay_cap_nhat' => '2025-06-21 20:56:00',
            ),
            302 => 
            array (
                'id' => 303,
                'sinh_vien_id' => 66,
                'lop_hoc_phan_id' => 49,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-12 01:56:00',
                'ngay_cap_nhat' => '2025-04-12 01:56:00',
            ),
            303 => 
            array (
                'id' => 304,
                'sinh_vien_id' => 66,
                'lop_hoc_phan_id' => 42,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-08 16:34:00',
                'ngay_cap_nhat' => '2024-09-08 16:34:00',
            ),
            304 => 
            array (
                'id' => 305,
                'sinh_vien_id' => 66,
                'lop_hoc_phan_id' => 48,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-09 23:02:00',
                'ngay_cap_nhat' => '2025-02-09 23:02:00',
            ),
            305 => 
            array (
                'id' => 306,
                'sinh_vien_id' => 67,
                'lop_hoc_phan_id' => 49,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-24 09:49:00',
                'ngay_cap_nhat' => '2026-06-24 09:49:00',
            ),
            306 => 
            array (
                'id' => 307,
                'sinh_vien_id' => 67,
                'lop_hoc_phan_id' => 41,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-27 09:29:00',
                'ngay_cap_nhat' => '2026-04-27 09:29:00',
            ),
            307 => 
            array (
                'id' => 308,
                'sinh_vien_id' => 67,
                'lop_hoc_phan_id' => 44,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-19 13:18:00',
                'ngay_cap_nhat' => '2024-06-19 13:18:00',
            ),
            308 => 
            array (
                'id' => 309,
                'sinh_vien_id' => 67,
                'lop_hoc_phan_id' => 43,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-19 01:44:00',
                'ngay_cap_nhat' => '2025-09-19 01:44:00',
            ),
            309 => 
            array (
                'id' => 310,
                'sinh_vien_id' => 67,
                'lop_hoc_phan_id' => 48,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-13 04:29:00',
                'ngay_cap_nhat' => '2025-06-13 04:29:00',
            ),
            310 => 
            array (
                'id' => 311,
                'sinh_vien_id' => 67,
                'lop_hoc_phan_id' => 46,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-29 20:28:00',
                'ngay_cap_nhat' => '2026-04-29 20:28:00',
            ),
            311 => 
            array (
                'id' => 312,
                'sinh_vien_id' => 68,
                'lop_hoc_phan_id' => 49,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-08 18:57:00',
                'ngay_cap_nhat' => '2026-03-08 18:57:00',
            ),
            312 => 
            array (
                'id' => 313,
                'sinh_vien_id' => 68,
                'lop_hoc_phan_id' => 42,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-13 17:08:00',
                'ngay_cap_nhat' => '2025-12-13 17:08:00',
            ),
            313 => 
            array (
                'id' => 314,
                'sinh_vien_id' => 68,
                'lop_hoc_phan_id' => 43,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-06 13:20:00',
                'ngay_cap_nhat' => '2025-02-06 13:20:00',
            ),
            314 => 
            array (
                'id' => 315,
                'sinh_vien_id' => 69,
                'lop_hoc_phan_id' => 41,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-22 14:05:00',
                'ngay_cap_nhat' => '2026-06-22 14:05:00',
            ),
            315 => 
            array (
                'id' => 316,
                'sinh_vien_id' => 69,
                'lop_hoc_phan_id' => 43,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-13 10:44:00',
                'ngay_cap_nhat' => '2024-09-13 10:44:00',
            ),
            316 => 
            array (
                'id' => 317,
                'sinh_vien_id' => 69,
                'lop_hoc_phan_id' => 48,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-26 22:50:00',
                'ngay_cap_nhat' => '2025-10-26 22:50:00',
            ),
            317 => 
            array (
                'id' => 318,
                'sinh_vien_id' => 69,
                'lop_hoc_phan_id' => 45,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-16 22:46:00',
                'ngay_cap_nhat' => '2024-06-16 22:46:00',
            ),
            318 => 
            array (
                'id' => 319,
                'sinh_vien_id' => 69,
                'lop_hoc_phan_id' => 46,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-06 02:07:00',
                'ngay_cap_nhat' => '2024-05-06 02:07:00',
            ),
            319 => 
            array (
                'id' => 320,
                'sinh_vien_id' => 69,
                'lop_hoc_phan_id' => 42,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-24 14:40:00',
                'ngay_cap_nhat' => '2025-12-24 14:40:00',
            ),
            320 => 
            array (
                'id' => 321,
                'sinh_vien_id' => 70,
                'lop_hoc_phan_id' => 42,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-18 05:24:00',
                'ngay_cap_nhat' => '2025-09-18 05:24:00',
            ),
            321 => 
            array (
                'id' => 322,
                'sinh_vien_id' => 70,
                'lop_hoc_phan_id' => 49,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-17 12:02:00',
                'ngay_cap_nhat' => '2025-07-17 12:02:00',
            ),
            322 => 
            array (
                'id' => 323,
                'sinh_vien_id' => 70,
                'lop_hoc_phan_id' => 47,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-25 05:58:00',
                'ngay_cap_nhat' => '2026-02-25 05:58:00',
            ),
            323 => 
            array (
                'id' => 324,
                'sinh_vien_id' => 70,
                'lop_hoc_phan_id' => 46,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-09 18:55:00',
                'ngay_cap_nhat' => '2024-12-09 18:55:00',
            ),
            324 => 
            array (
                'id' => 325,
                'sinh_vien_id' => 70,
                'lop_hoc_phan_id' => 45,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-06 04:10:00',
                'ngay_cap_nhat' => '2025-11-06 04:10:00',
            ),
            325 => 
            array (
                'id' => 326,
                'sinh_vien_id' => 71,
                'lop_hoc_phan_id' => 43,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-12 23:49:00',
                'ngay_cap_nhat' => '2024-11-12 23:49:00',
            ),
            326 => 
            array (
                'id' => 327,
                'sinh_vien_id' => 71,
                'lop_hoc_phan_id' => 41,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-01 09:40:00',
                'ngay_cap_nhat' => '2025-04-01 09:40:00',
            ),
            327 => 
            array (
                'id' => 328,
                'sinh_vien_id' => 71,
                'lop_hoc_phan_id' => 47,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-04 03:57:00',
                'ngay_cap_nhat' => '2024-07-04 03:57:00',
            ),
            328 => 
            array (
                'id' => 329,
                'sinh_vien_id' => 71,
                'lop_hoc_phan_id' => 50,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-14 06:00:00',
                'ngay_cap_nhat' => '2024-05-14 06:00:00',
            ),
            329 => 
            array (
                'id' => 330,
                'sinh_vien_id' => 72,
                'lop_hoc_phan_id' => 41,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-10 00:38:00',
                'ngay_cap_nhat' => '2025-07-10 00:38:00',
            ),
            330 => 
            array (
                'id' => 331,
                'sinh_vien_id' => 72,
                'lop_hoc_phan_id' => 48,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-22 15:15:00',
                'ngay_cap_nhat' => '2026-06-22 15:15:00',
            ),
            331 => 
            array (
                'id' => 332,
                'sinh_vien_id' => 72,
                'lop_hoc_phan_id' => 49,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-10 18:42:00',
                'ngay_cap_nhat' => '2024-08-10 18:42:00',
            ),
            332 => 
            array (
                'id' => 333,
                'sinh_vien_id' => 72,
                'lop_hoc_phan_id' => 47,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-02 14:26:00',
                'ngay_cap_nhat' => '2025-05-02 14:26:00',
            ),
            333 => 
            array (
                'id' => 334,
                'sinh_vien_id' => 72,
                'lop_hoc_phan_id' => 44,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-03-28 02:38:00',
                'ngay_cap_nhat' => '2025-03-28 02:38:00',
            ),
            334 => 
            array (
                'id' => 335,
                'sinh_vien_id' => 73,
                'lop_hoc_phan_id' => 44,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-26 20:35:00',
                'ngay_cap_nhat' => '2025-09-26 20:35:00',
            ),
            335 => 
            array (
                'id' => 336,
                'sinh_vien_id' => 73,
                'lop_hoc_phan_id' => 49,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-19 06:03:00',
                'ngay_cap_nhat' => '2026-04-19 06:03:00',
            ),
            336 => 
            array (
                'id' => 337,
                'sinh_vien_id' => 73,
                'lop_hoc_phan_id' => 45,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-08 04:03:00',
                'ngay_cap_nhat' => '2024-07-08 04:03:00',
            ),
            337 => 
            array (
                'id' => 338,
                'sinh_vien_id' => 74,
                'lop_hoc_phan_id' => 41,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-08 19:19:00',
                'ngay_cap_nhat' => '2026-05-08 19:19:00',
            ),
            338 => 
            array (
                'id' => 339,
                'sinh_vien_id' => 74,
                'lop_hoc_phan_id' => 43,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-05 02:03:00',
                'ngay_cap_nhat' => '2024-12-05 02:03:00',
            ),
            339 => 
            array (
                'id' => 340,
                'sinh_vien_id' => 74,
                'lop_hoc_phan_id' => 50,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-21 13:11:00',
                'ngay_cap_nhat' => '2024-04-21 13:11:00',
            ),
            340 => 
            array (
                'id' => 341,
                'sinh_vien_id' => 74,
                'lop_hoc_phan_id' => 46,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-14 21:18:00',
                'ngay_cap_nhat' => '2024-06-14 21:18:00',
            ),
            341 => 
            array (
                'id' => 342,
                'sinh_vien_id' => 74,
                'lop_hoc_phan_id' => 45,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-17 21:44:00',
                'ngay_cap_nhat' => '2025-09-17 21:44:00',
            ),
            342 => 
            array (
                'id' => 343,
                'sinh_vien_id' => 75,
                'lop_hoc_phan_id' => 48,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-25 09:20:00',
                'ngay_cap_nhat' => '2026-02-25 09:20:00',
            ),
            343 => 
            array (
                'id' => 344,
                'sinh_vien_id' => 75,
                'lop_hoc_phan_id' => 46,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-12 12:52:00',
                'ngay_cap_nhat' => '2025-01-12 12:52:00',
            ),
            344 => 
            array (
                'id' => 345,
                'sinh_vien_id' => 75,
                'lop_hoc_phan_id' => 41,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-10 13:53:00',
                'ngay_cap_nhat' => '2024-03-10 13:53:00',
            ),
            345 => 
            array (
                'id' => 346,
                'sinh_vien_id' => 75,
                'lop_hoc_phan_id' => 50,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-17 02:18:00',
                'ngay_cap_nhat' => '2025-07-17 02:18:00',
            ),
            346 => 
            array (
                'id' => 347,
                'sinh_vien_id' => 76,
                'lop_hoc_phan_id' => 43,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-21 06:44:00',
                'ngay_cap_nhat' => '2025-06-21 06:44:00',
            ),
            347 => 
            array (
                'id' => 348,
                'sinh_vien_id' => 76,
                'lop_hoc_phan_id' => 42,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-02 19:03:00',
                'ngay_cap_nhat' => '2024-08-02 19:03:00',
            ),
            348 => 
            array (
                'id' => 349,
                'sinh_vien_id' => 76,
                'lop_hoc_phan_id' => 45,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-21 18:46:00',
                'ngay_cap_nhat' => '2024-04-21 18:46:00',
            ),
            349 => 
            array (
                'id' => 350,
                'sinh_vien_id' => 76,
                'lop_hoc_phan_id' => 50,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-06 16:05:00',
                'ngay_cap_nhat' => '2025-10-06 16:05:00',
            ),
            350 => 
            array (
                'id' => 351,
                'sinh_vien_id' => 76,
                'lop_hoc_phan_id' => 48,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-10 23:44:00',
                'ngay_cap_nhat' => '2025-05-10 23:44:00',
            ),
            351 => 
            array (
                'id' => 352,
                'sinh_vien_id' => 76,
                'lop_hoc_phan_id' => 44,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-11 22:18:00',
                'ngay_cap_nhat' => '2025-09-11 22:18:00',
            ),
            352 => 
            array (
                'id' => 353,
                'sinh_vien_id' => 77,
                'lop_hoc_phan_id' => 50,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-28 04:39:00',
                'ngay_cap_nhat' => '2024-12-28 04:39:00',
            ),
            353 => 
            array (
                'id' => 354,
                'sinh_vien_id' => 77,
                'lop_hoc_phan_id' => 46,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-30 15:33:00',
                'ngay_cap_nhat' => '2025-07-30 15:33:00',
            ),
            354 => 
            array (
                'id' => 355,
                'sinh_vien_id' => 77,
                'lop_hoc_phan_id' => 45,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-16 20:31:00',
                'ngay_cap_nhat' => '2026-01-16 20:31:00',
            ),
            355 => 
            array (
                'id' => 356,
                'sinh_vien_id' => 77,
                'lop_hoc_phan_id' => 48,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-19 05:56:00',
                'ngay_cap_nhat' => '2025-05-19 05:56:00',
            ),
            356 => 
            array (
                'id' => 357,
                'sinh_vien_id' => 77,
                'lop_hoc_phan_id' => 47,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-16 07:45:00',
                'ngay_cap_nhat' => '2025-09-16 07:45:00',
            ),
            357 => 
            array (
                'id' => 358,
                'sinh_vien_id' => 77,
                'lop_hoc_phan_id' => 49,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-24 06:00:00',
                'ngay_cap_nhat' => '2024-10-24 06:00:00',
            ),
            358 => 
            array (
                'id' => 359,
                'sinh_vien_id' => 78,
                'lop_hoc_phan_id' => 41,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-25 06:51:00',
                'ngay_cap_nhat' => '2026-01-25 06:51:00',
            ),
            359 => 
            array (
                'id' => 360,
                'sinh_vien_id' => 78,
                'lop_hoc_phan_id' => 48,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-22 13:26:00',
                'ngay_cap_nhat' => '2025-09-22 13:26:00',
            ),
            360 => 
            array (
                'id' => 361,
                'sinh_vien_id' => 78,
                'lop_hoc_phan_id' => 42,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-16 10:22:00',
                'ngay_cap_nhat' => '2024-02-16 10:22:00',
            ),
            361 => 
            array (
                'id' => 362,
                'sinh_vien_id' => 79,
                'lop_hoc_phan_id' => 51,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-20 02:19:00',
                'ngay_cap_nhat' => '2026-03-20 02:19:00',
            ),
            362 => 
            array (
                'id' => 363,
                'sinh_vien_id' => 79,
                'lop_hoc_phan_id' => 54,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-03 16:35:00',
                'ngay_cap_nhat' => '2024-11-03 16:35:00',
            ),
            363 => 
            array (
                'id' => 364,
                'sinh_vien_id' => 79,
                'lop_hoc_phan_id' => 55,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-27 00:07:00',
                'ngay_cap_nhat' => '2024-11-27 00:07:00',
            ),
            364 => 
            array (
                'id' => 365,
                'sinh_vien_id' => 79,
                'lop_hoc_phan_id' => 53,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-03 10:21:00',
                'ngay_cap_nhat' => '2025-12-03 10:21:00',
            ),
            365 => 
            array (
                'id' => 366,
                'sinh_vien_id' => 80,
                'lop_hoc_phan_id' => 60,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-19 15:58:00',
                'ngay_cap_nhat' => '2025-11-19 15:58:00',
            ),
            366 => 
            array (
                'id' => 367,
                'sinh_vien_id' => 80,
                'lop_hoc_phan_id' => 51,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-30 01:41:00',
                'ngay_cap_nhat' => '2025-04-30 01:41:00',
            ),
            367 => 
            array (
                'id' => 368,
                'sinh_vien_id' => 80,
                'lop_hoc_phan_id' => 53,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-19 15:09:00',
                'ngay_cap_nhat' => '2024-05-19 15:09:00',
            ),
            368 => 
            array (
                'id' => 369,
                'sinh_vien_id' => 80,
                'lop_hoc_phan_id' => 52,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-04 14:57:00',
                'ngay_cap_nhat' => '2025-10-04 14:57:00',
            ),
            369 => 
            array (
                'id' => 370,
                'sinh_vien_id' => 80,
                'lop_hoc_phan_id' => 58,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-04 17:57:00',
                'ngay_cap_nhat' => '2026-06-04 17:57:00',
            ),
            370 => 
            array (
                'id' => 371,
                'sinh_vien_id' => 80,
                'lop_hoc_phan_id' => 56,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-09 14:50:00',
                'ngay_cap_nhat' => '2024-12-09 14:50:00',
            ),
            371 => 
            array (
                'id' => 372,
                'sinh_vien_id' => 81,
                'lop_hoc_phan_id' => 51,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-22 17:01:00',
                'ngay_cap_nhat' => '2025-07-22 17:01:00',
            ),
            372 => 
            array (
                'id' => 373,
                'sinh_vien_id' => 81,
                'lop_hoc_phan_id' => 59,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-01 18:43:00',
                'ngay_cap_nhat' => '2024-08-01 18:43:00',
            ),
            373 => 
            array (
                'id' => 374,
                'sinh_vien_id' => 81,
                'lop_hoc_phan_id' => 55,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-05 11:04:00',
                'ngay_cap_nhat' => '2024-12-05 11:04:00',
            ),
            374 => 
            array (
                'id' => 375,
                'sinh_vien_id' => 81,
                'lop_hoc_phan_id' => 58,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-01 08:53:00',
                'ngay_cap_nhat' => '2024-06-01 08:53:00',
            ),
            375 => 
            array (
                'id' => 376,
                'sinh_vien_id' => 81,
                'lop_hoc_phan_id' => 56,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-01 10:24:00',
                'ngay_cap_nhat' => '2024-02-01 10:24:00',
            ),
            376 => 
            array (
                'id' => 377,
                'sinh_vien_id' => 81,
                'lop_hoc_phan_id' => 53,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-03 17:53:00',
                'ngay_cap_nhat' => '2025-10-03 17:53:00',
            ),
            377 => 
            array (
                'id' => 378,
                'sinh_vien_id' => 82,
                'lop_hoc_phan_id' => 60,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-29 09:45:00',
                'ngay_cap_nhat' => '2024-04-29 09:45:00',
            ),
            378 => 
            array (
                'id' => 379,
                'sinh_vien_id' => 82,
                'lop_hoc_phan_id' => 57,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-28 10:45:00',
                'ngay_cap_nhat' => '2026-05-28 10:45:00',
            ),
            379 => 
            array (
                'id' => 380,
                'sinh_vien_id' => 82,
                'lop_hoc_phan_id' => 53,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-02 08:26:00',
                'ngay_cap_nhat' => '2024-02-02 08:26:00',
            ),
            380 => 
            array (
                'id' => 381,
                'sinh_vien_id' => 82,
                'lop_hoc_phan_id' => 55,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-29 15:56:00',
                'ngay_cap_nhat' => '2024-03-29 15:56:00',
            ),
            381 => 
            array (
                'id' => 382,
                'sinh_vien_id' => 83,
                'lop_hoc_phan_id' => 56,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-21 09:11:00',
                'ngay_cap_nhat' => '2025-06-21 09:11:00',
            ),
            382 => 
            array (
                'id' => 383,
                'sinh_vien_id' => 83,
                'lop_hoc_phan_id' => 58,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-24 11:50:00',
                'ngay_cap_nhat' => '2024-04-24 11:50:00',
            ),
            383 => 
            array (
                'id' => 384,
                'sinh_vien_id' => 83,
                'lop_hoc_phan_id' => 55,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-08 06:58:00',
                'ngay_cap_nhat' => '2024-02-08 06:58:00',
            ),
            384 => 
            array (
                'id' => 385,
                'sinh_vien_id' => 83,
                'lop_hoc_phan_id' => 52,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-04 14:32:00',
                'ngay_cap_nhat' => '2024-04-04 14:32:00',
            ),
            385 => 
            array (
                'id' => 386,
                'sinh_vien_id' => 84,
                'lop_hoc_phan_id' => 58,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-13 10:59:00',
                'ngay_cap_nhat' => '2024-07-13 10:59:00',
            ),
            386 => 
            array (
                'id' => 387,
                'sinh_vien_id' => 84,
                'lop_hoc_phan_id' => 59,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-10 23:55:00',
                'ngay_cap_nhat' => '2025-05-10 23:55:00',
            ),
            387 => 
            array (
                'id' => 388,
                'sinh_vien_id' => 84,
                'lop_hoc_phan_id' => 53,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-20 09:49:00',
                'ngay_cap_nhat' => '2025-06-20 09:49:00',
            ),
            388 => 
            array (
                'id' => 389,
                'sinh_vien_id' => 85,
                'lop_hoc_phan_id' => 53,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-07 14:24:00',
                'ngay_cap_nhat' => '2024-02-07 14:24:00',
            ),
            389 => 
            array (
                'id' => 390,
                'sinh_vien_id' => 85,
                'lop_hoc_phan_id' => 52,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-31 16:07:00',
                'ngay_cap_nhat' => '2025-12-31 16:07:00',
            ),
            390 => 
            array (
                'id' => 391,
                'sinh_vien_id' => 85,
                'lop_hoc_phan_id' => 60,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-05 09:59:00',
                'ngay_cap_nhat' => '2024-01-05 09:59:00',
            ),
            391 => 
            array (
                'id' => 392,
                'sinh_vien_id' => 85,
                'lop_hoc_phan_id' => 59,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-15 21:54:00',
                'ngay_cap_nhat' => '2024-02-15 21:54:00',
            ),
            392 => 
            array (
                'id' => 393,
                'sinh_vien_id' => 85,
                'lop_hoc_phan_id' => 56,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-31 02:21:00',
                'ngay_cap_nhat' => '2025-08-31 02:21:00',
            ),
            393 => 
            array (
                'id' => 394,
                'sinh_vien_id' => 86,
                'lop_hoc_phan_id' => 51,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-16 06:20:00',
                'ngay_cap_nhat' => '2025-10-16 06:20:00',
            ),
            394 => 
            array (
                'id' => 395,
                'sinh_vien_id' => 86,
                'lop_hoc_phan_id' => 52,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-24 06:18:00',
                'ngay_cap_nhat' => '2024-07-24 06:18:00',
            ),
            395 => 
            array (
                'id' => 396,
                'sinh_vien_id' => 86,
                'lop_hoc_phan_id' => 55,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-10 17:20:00',
                'ngay_cap_nhat' => '2024-10-10 17:20:00',
            ),
            396 => 
            array (
                'id' => 397,
                'sinh_vien_id' => 86,
                'lop_hoc_phan_id' => 60,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-02 14:42:00',
                'ngay_cap_nhat' => '2026-03-02 14:42:00',
            ),
            397 => 
            array (
                'id' => 398,
                'sinh_vien_id' => 86,
                'lop_hoc_phan_id' => 58,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-30 08:09:00',
                'ngay_cap_nhat' => '2024-04-30 08:09:00',
            ),
            398 => 
            array (
                'id' => 399,
                'sinh_vien_id' => 86,
                'lop_hoc_phan_id' => 53,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-10 08:07:00',
                'ngay_cap_nhat' => '2024-06-10 08:07:00',
            ),
            399 => 
            array (
                'id' => 400,
                'sinh_vien_id' => 87,
                'lop_hoc_phan_id' => 60,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-30 17:22:00',
                'ngay_cap_nhat' => '2024-07-30 17:22:00',
            ),
            400 => 
            array (
                'id' => 401,
                'sinh_vien_id' => 87,
                'lop_hoc_phan_id' => 59,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-16 10:17:00',
                'ngay_cap_nhat' => '2025-07-16 10:17:00',
            ),
            401 => 
            array (
                'id' => 402,
                'sinh_vien_id' => 87,
                'lop_hoc_phan_id' => 52,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-24 22:51:00',
                'ngay_cap_nhat' => '2024-05-24 22:51:00',
            ),
            402 => 
            array (
                'id' => 403,
                'sinh_vien_id' => 88,
                'lop_hoc_phan_id' => 60,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-19 10:34:00',
                'ngay_cap_nhat' => '2025-09-19 10:34:00',
            ),
            403 => 
            array (
                'id' => 404,
                'sinh_vien_id' => 88,
                'lop_hoc_phan_id' => 54,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-03-30 01:08:00',
                'ngay_cap_nhat' => '2025-03-30 01:08:00',
            ),
            404 => 
            array (
                'id' => 405,
                'sinh_vien_id' => 88,
                'lop_hoc_phan_id' => 53,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-30 15:57:00',
                'ngay_cap_nhat' => '2024-01-30 15:57:00',
            ),
            405 => 
            array (
                'id' => 406,
                'sinh_vien_id' => 88,
                'lop_hoc_phan_id' => 51,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-22 01:06:00',
                'ngay_cap_nhat' => '2025-11-22 01:06:00',
            ),
            406 => 
            array (
                'id' => 407,
                'sinh_vien_id' => 88,
                'lop_hoc_phan_id' => 58,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-27 01:05:00',
                'ngay_cap_nhat' => '2025-01-27 01:05:00',
            ),
            407 => 
            array (
                'id' => 408,
                'sinh_vien_id' => 89,
                'lop_hoc_phan_id' => 57,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-06 06:45:00',
                'ngay_cap_nhat' => '2024-12-06 06:45:00',
            ),
            408 => 
            array (
                'id' => 409,
                'sinh_vien_id' => 89,
                'lop_hoc_phan_id' => 53,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-15 21:51:00',
                'ngay_cap_nhat' => '2026-02-15 21:51:00',
            ),
            409 => 
            array (
                'id' => 410,
                'sinh_vien_id' => 89,
                'lop_hoc_phan_id' => 58,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-30 02:59:00',
                'ngay_cap_nhat' => '2025-06-30 02:59:00',
            ),
            410 => 
            array (
                'id' => 411,
                'sinh_vien_id' => 89,
                'lop_hoc_phan_id' => 55,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-12 14:36:00',
                'ngay_cap_nhat' => '2026-02-12 14:36:00',
            ),
            411 => 
            array (
                'id' => 412,
                'sinh_vien_id' => 89,
                'lop_hoc_phan_id' => 59,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-14 02:52:00',
                'ngay_cap_nhat' => '2024-05-14 02:52:00',
            ),
            412 => 
            array (
                'id' => 413,
                'sinh_vien_id' => 89,
                'lop_hoc_phan_id' => 56,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-01 22:29:00',
                'ngay_cap_nhat' => '2026-04-01 22:29:00',
            ),
            413 => 
            array (
                'id' => 414,
                'sinh_vien_id' => 90,
                'lop_hoc_phan_id' => 58,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-26 07:14:00',
                'ngay_cap_nhat' => '2025-04-26 07:14:00',
            ),
            414 => 
            array (
                'id' => 415,
                'sinh_vien_id' => 90,
                'lop_hoc_phan_id' => 55,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-27 19:16:00',
                'ngay_cap_nhat' => '2024-05-27 19:16:00',
            ),
            415 => 
            array (
                'id' => 416,
                'sinh_vien_id' => 90,
                'lop_hoc_phan_id' => 60,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-07 12:11:00',
                'ngay_cap_nhat' => '2025-01-07 12:11:00',
            ),
            416 => 
            array (
                'id' => 417,
                'sinh_vien_id' => 91,
                'lop_hoc_phan_id' => 66,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-01 03:22:00',
                'ngay_cap_nhat' => '2025-05-01 03:22:00',
            ),
            417 => 
            array (
                'id' => 418,
                'sinh_vien_id' => 91,
                'lop_hoc_phan_id' => 68,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-05 14:54:00',
                'ngay_cap_nhat' => '2025-05-05 14:54:00',
            ),
            418 => 
            array (
                'id' => 419,
                'sinh_vien_id' => 91,
                'lop_hoc_phan_id' => 69,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-23 09:49:00',
                'ngay_cap_nhat' => '2024-06-23 09:49:00',
            ),
            419 => 
            array (
                'id' => 420,
                'sinh_vien_id' => 91,
                'lop_hoc_phan_id' => 61,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-22 19:36:00',
                'ngay_cap_nhat' => '2024-12-22 19:36:00',
            ),
            420 => 
            array (
                'id' => 421,
                'sinh_vien_id' => 91,
                'lop_hoc_phan_id' => 67,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-10 16:06:00',
                'ngay_cap_nhat' => '2024-05-10 16:06:00',
            ),
            421 => 
            array (
                'id' => 422,
                'sinh_vien_id' => 92,
                'lop_hoc_phan_id' => 62,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-17 12:37:00',
                'ngay_cap_nhat' => '2025-04-17 12:37:00',
            ),
            422 => 
            array (
                'id' => 423,
                'sinh_vien_id' => 92,
                'lop_hoc_phan_id' => 66,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-27 07:39:00',
                'ngay_cap_nhat' => '2025-02-27 07:39:00',
            ),
            423 => 
            array (
                'id' => 424,
                'sinh_vien_id' => 92,
                'lop_hoc_phan_id' => 70,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-06 17:10:00',
                'ngay_cap_nhat' => '2024-09-06 17:10:00',
            ),
            424 => 
            array (
                'id' => 425,
                'sinh_vien_id' => 92,
                'lop_hoc_phan_id' => 67,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-08 12:04:00',
                'ngay_cap_nhat' => '2025-05-08 12:04:00',
            ),
            425 => 
            array (
                'id' => 426,
                'sinh_vien_id' => 92,
                'lop_hoc_phan_id' => 63,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-14 06:52:00',
                'ngay_cap_nhat' => '2024-12-14 06:52:00',
            ),
            426 => 
            array (
                'id' => 427,
                'sinh_vien_id' => 92,
                'lop_hoc_phan_id' => 65,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-11 18:27:00',
                'ngay_cap_nhat' => '2025-12-11 18:27:00',
            ),
            427 => 
            array (
                'id' => 428,
                'sinh_vien_id' => 93,
                'lop_hoc_phan_id' => 70,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-27 22:36:00',
                'ngay_cap_nhat' => '2026-01-27 22:36:00',
            ),
            428 => 
            array (
                'id' => 429,
                'sinh_vien_id' => 93,
                'lop_hoc_phan_id' => 66,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-06 15:07:00',
                'ngay_cap_nhat' => '2026-05-06 15:07:00',
            ),
            429 => 
            array (
                'id' => 430,
                'sinh_vien_id' => 93,
                'lop_hoc_phan_id' => 64,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-29 19:29:00',
                'ngay_cap_nhat' => '2025-08-29 19:29:00',
            ),
            430 => 
            array (
                'id' => 431,
                'sinh_vien_id' => 93,
                'lop_hoc_phan_id' => 62,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-29 17:06:00',
                'ngay_cap_nhat' => '2024-11-29 17:06:00',
            ),
            431 => 
            array (
                'id' => 432,
                'sinh_vien_id' => 93,
                'lop_hoc_phan_id' => 69,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-21 14:11:00',
                'ngay_cap_nhat' => '2026-04-21 14:11:00',
            ),
            432 => 
            array (
                'id' => 433,
                'sinh_vien_id' => 93,
                'lop_hoc_phan_id' => 61,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-11 12:04:00',
                'ngay_cap_nhat' => '2024-11-11 12:04:00',
            ),
            433 => 
            array (
                'id' => 434,
                'sinh_vien_id' => 94,
                'lop_hoc_phan_id' => 70,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-21 20:42:00',
                'ngay_cap_nhat' => '2025-05-21 20:42:00',
            ),
            434 => 
            array (
                'id' => 435,
                'sinh_vien_id' => 94,
                'lop_hoc_phan_id' => 67,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-03 02:13:00',
                'ngay_cap_nhat' => '2024-03-03 02:13:00',
            ),
            435 => 
            array (
                'id' => 436,
                'sinh_vien_id' => 94,
                'lop_hoc_phan_id' => 66,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-16 04:56:00',
                'ngay_cap_nhat' => '2026-04-16 04:56:00',
            ),
            436 => 
            array (
                'id' => 437,
                'sinh_vien_id' => 95,
                'lop_hoc_phan_id' => 63,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-28 09:24:00',
                'ngay_cap_nhat' => '2025-06-28 09:24:00',
            ),
            437 => 
            array (
                'id' => 438,
                'sinh_vien_id' => 95,
                'lop_hoc_phan_id' => 70,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-22 18:28:00',
                'ngay_cap_nhat' => '2025-09-22 18:28:00',
            ),
            438 => 
            array (
                'id' => 439,
                'sinh_vien_id' => 95,
                'lop_hoc_phan_id' => 68,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-19 06:43:00',
                'ngay_cap_nhat' => '2024-07-19 06:43:00',
            ),
            439 => 
            array (
                'id' => 440,
                'sinh_vien_id' => 96,
                'lop_hoc_phan_id' => 65,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-01 18:00:00',
                'ngay_cap_nhat' => '2024-04-01 18:00:00',
            ),
            440 => 
            array (
                'id' => 441,
                'sinh_vien_id' => 96,
                'lop_hoc_phan_id' => 70,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-18 16:25:00',
                'ngay_cap_nhat' => '2025-09-18 16:25:00',
            ),
            441 => 
            array (
                'id' => 442,
                'sinh_vien_id' => 96,
                'lop_hoc_phan_id' => 67,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-17 04:54:00',
                'ngay_cap_nhat' => '2026-05-17 04:54:00',
            ),
            442 => 
            array (
                'id' => 443,
                'sinh_vien_id' => 96,
                'lop_hoc_phan_id' => 66,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-28 01:23:00',
                'ngay_cap_nhat' => '2024-10-28 01:23:00',
            ),
            443 => 
            array (
                'id' => 444,
                'sinh_vien_id' => 96,
                'lop_hoc_phan_id' => 63,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-16 01:00:00',
                'ngay_cap_nhat' => '2025-07-16 01:00:00',
            ),
            444 => 
            array (
                'id' => 445,
                'sinh_vien_id' => 97,
                'lop_hoc_phan_id' => 62,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-20 18:25:00',
                'ngay_cap_nhat' => '2025-12-20 18:25:00',
            ),
            445 => 
            array (
                'id' => 446,
                'sinh_vien_id' => 97,
                'lop_hoc_phan_id' => 65,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-02 10:45:00',
                'ngay_cap_nhat' => '2025-10-02 10:45:00',
            ),
            446 => 
            array (
                'id' => 447,
                'sinh_vien_id' => 97,
                'lop_hoc_phan_id' => 61,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-26 12:24:00',
                'ngay_cap_nhat' => '2025-01-26 12:24:00',
            ),
            447 => 
            array (
                'id' => 448,
                'sinh_vien_id' => 97,
                'lop_hoc_phan_id' => 70,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-03-21 17:13:00',
                'ngay_cap_nhat' => '2025-03-21 17:13:00',
            ),
            448 => 
            array (
                'id' => 449,
                'sinh_vien_id' => 97,
                'lop_hoc_phan_id' => 64,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-09 05:30:00',
                'ngay_cap_nhat' => '2025-11-09 05:30:00',
            ),
            449 => 
            array (
                'id' => 450,
                'sinh_vien_id' => 98,
                'lop_hoc_phan_id' => 64,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-03 13:09:00',
                'ngay_cap_nhat' => '2025-01-03 13:09:00',
            ),
            450 => 
            array (
                'id' => 451,
                'sinh_vien_id' => 98,
                'lop_hoc_phan_id' => 69,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-22 21:08:00',
                'ngay_cap_nhat' => '2024-10-22 21:08:00',
            ),
            451 => 
            array (
                'id' => 452,
                'sinh_vien_id' => 98,
                'lop_hoc_phan_id' => 67,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-17 00:04:00',
                'ngay_cap_nhat' => '2024-05-17 00:04:00',
            ),
            452 => 
            array (
                'id' => 453,
                'sinh_vien_id' => 98,
                'lop_hoc_phan_id' => 68,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-25 00:09:00',
                'ngay_cap_nhat' => '2025-10-25 00:09:00',
            ),
            453 => 
            array (
                'id' => 454,
                'sinh_vien_id' => 99,
                'lop_hoc_phan_id' => 67,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-30 14:57:00',
                'ngay_cap_nhat' => '2026-05-30 14:57:00',
            ),
            454 => 
            array (
                'id' => 455,
                'sinh_vien_id' => 99,
                'lop_hoc_phan_id' => 63,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-18 22:38:00',
                'ngay_cap_nhat' => '2026-03-18 22:38:00',
            ),
            455 => 
            array (
                'id' => 456,
                'sinh_vien_id' => 99,
                'lop_hoc_phan_id' => 62,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-03-11 19:11:00',
                'ngay_cap_nhat' => '2025-03-11 19:11:00',
            ),
            456 => 
            array (
                'id' => 457,
                'sinh_vien_id' => 99,
                'lop_hoc_phan_id' => 68,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-10 16:27:00',
                'ngay_cap_nhat' => '2025-04-10 16:27:00',
            ),
            457 => 
            array (
                'id' => 458,
                'sinh_vien_id' => 99,
                'lop_hoc_phan_id' => 66,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-19 14:24:00',
                'ngay_cap_nhat' => '2025-07-19 14:24:00',
            ),
            458 => 
            array (
                'id' => 459,
                'sinh_vien_id' => 99,
                'lop_hoc_phan_id' => 64,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-29 07:11:00',
                'ngay_cap_nhat' => '2024-12-29 07:11:00',
            ),
            459 => 
            array (
                'id' => 460,
                'sinh_vien_id' => 100,
                'lop_hoc_phan_id' => 70,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-30 16:17:00',
                'ngay_cap_nhat' => '2025-12-30 16:17:00',
            ),
            460 => 
            array (
                'id' => 461,
                'sinh_vien_id' => 100,
                'lop_hoc_phan_id' => 61,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-24 17:36:00',
                'ngay_cap_nhat' => '2025-02-24 17:36:00',
            ),
            461 => 
            array (
                'id' => 462,
                'sinh_vien_id' => 100,
                'lop_hoc_phan_id' => 68,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-10 01:02:00',
                'ngay_cap_nhat' => '2025-01-10 01:02:00',
            ),
            462 => 
            array (
                'id' => 463,
                'sinh_vien_id' => 100,
                'lop_hoc_phan_id' => 67,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-04 15:45:00',
                'ngay_cap_nhat' => '2025-08-04 15:45:00',
            ),
            463 => 
            array (
                'id' => 464,
                'sinh_vien_id' => 100,
                'lop_hoc_phan_id' => 66,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-12 03:37:00',
                'ngay_cap_nhat' => '2025-01-12 03:37:00',
            ),
            464 => 
            array (
                'id' => 465,
                'sinh_vien_id' => 100,
                'lop_hoc_phan_id' => 62,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-08 22:05:00',
                'ngay_cap_nhat' => '2025-05-08 22:05:00',
            ),
            465 => 
            array (
                'id' => 466,
                'sinh_vien_id' => 101,
                'lop_hoc_phan_id' => 69,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-21 16:56:00',
                'ngay_cap_nhat' => '2024-03-21 16:56:00',
            ),
            466 => 
            array (
                'id' => 467,
                'sinh_vien_id' => 101,
                'lop_hoc_phan_id' => 65,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-16 02:15:00',
                'ngay_cap_nhat' => '2025-09-16 02:15:00',
            ),
            467 => 
            array (
                'id' => 468,
                'sinh_vien_id' => 101,
                'lop_hoc_phan_id' => 68,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-28 20:47:00',
                'ngay_cap_nhat' => '2025-04-28 20:47:00',
            ),
            468 => 
            array (
                'id' => 469,
                'sinh_vien_id' => 101,
                'lop_hoc_phan_id' => 70,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-10 21:04:00',
                'ngay_cap_nhat' => '2025-11-10 21:04:00',
            ),
            469 => 
            array (
                'id' => 470,
                'sinh_vien_id' => 102,
                'lop_hoc_phan_id' => 70,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-25 14:32:00',
                'ngay_cap_nhat' => '2025-04-25 14:32:00',
            ),
            470 => 
            array (
                'id' => 471,
                'sinh_vien_id' => 102,
                'lop_hoc_phan_id' => 61,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-25 18:46:00',
                'ngay_cap_nhat' => '2025-04-25 18:46:00',
            ),
            471 => 
            array (
                'id' => 472,
                'sinh_vien_id' => 102,
                'lop_hoc_phan_id' => 66,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-05 13:22:00',
                'ngay_cap_nhat' => '2024-12-05 13:22:00',
            ),
            472 => 
            array (
                'id' => 473,
                'sinh_vien_id' => 102,
                'lop_hoc_phan_id' => 65,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-28 09:18:00',
                'ngay_cap_nhat' => '2026-03-28 09:18:00',
            ),
            473 => 
            array (
                'id' => 474,
                'sinh_vien_id' => 102,
                'lop_hoc_phan_id' => 69,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-20 01:44:00',
                'ngay_cap_nhat' => '2024-06-20 01:44:00',
            ),
            474 => 
            array (
                'id' => 475,
                'sinh_vien_id' => 103,
                'lop_hoc_phan_id' => 70,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-15 05:36:00',
                'ngay_cap_nhat' => '2025-08-15 05:36:00',
            ),
            475 => 
            array (
                'id' => 476,
                'sinh_vien_id' => 103,
                'lop_hoc_phan_id' => 65,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-22 21:18:00',
                'ngay_cap_nhat' => '2024-02-22 21:18:00',
            ),
            476 => 
            array (
                'id' => 477,
                'sinh_vien_id' => 103,
                'lop_hoc_phan_id' => 61,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-08 23:39:00',
                'ngay_cap_nhat' => '2026-04-08 23:39:00',
            ),
            477 => 
            array (
                'id' => 478,
                'sinh_vien_id' => 103,
                'lop_hoc_phan_id' => 66,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-28 09:31:00',
                'ngay_cap_nhat' => '2024-01-28 09:31:00',
            ),
            478 => 
            array (
                'id' => 479,
                'sinh_vien_id' => 103,
                'lop_hoc_phan_id' => 64,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-25 04:32:00',
                'ngay_cap_nhat' => '2024-03-25 04:32:00',
            ),
            479 => 
            array (
                'id' => 480,
                'sinh_vien_id' => 104,
                'lop_hoc_phan_id' => 65,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-22 08:17:00',
                'ngay_cap_nhat' => '2025-09-22 08:17:00',
            ),
            480 => 
            array (
                'id' => 481,
                'sinh_vien_id' => 104,
                'lop_hoc_phan_id' => 70,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-28 08:00:00',
                'ngay_cap_nhat' => '2026-05-28 08:00:00',
            ),
            481 => 
            array (
                'id' => 482,
                'sinh_vien_id' => 104,
                'lop_hoc_phan_id' => 63,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-29 03:38:00',
                'ngay_cap_nhat' => '2026-01-29 03:38:00',
            ),
            482 => 
            array (
                'id' => 483,
                'sinh_vien_id' => 105,
                'lop_hoc_phan_id' => 70,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-07 05:16:00',
                'ngay_cap_nhat' => '2026-04-07 05:16:00',
            ),
            483 => 
            array (
                'id' => 484,
                'sinh_vien_id' => 105,
                'lop_hoc_phan_id' => 63,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-12 22:15:00',
                'ngay_cap_nhat' => '2026-03-12 22:15:00',
            ),
            484 => 
            array (
                'id' => 485,
                'sinh_vien_id' => 105,
                'lop_hoc_phan_id' => 68,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-11 05:51:00',
                'ngay_cap_nhat' => '2025-05-11 05:51:00',
            ),
            485 => 
            array (
                'id' => 486,
                'sinh_vien_id' => 105,
                'lop_hoc_phan_id' => 69,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-24 01:21:00',
                'ngay_cap_nhat' => '2025-06-24 01:21:00',
            ),
            486 => 
            array (
                'id' => 487,
                'sinh_vien_id' => 106,
                'lop_hoc_phan_id' => 63,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-09 13:49:00',
                'ngay_cap_nhat' => '2026-02-09 13:49:00',
            ),
            487 => 
            array (
                'id' => 488,
                'sinh_vien_id' => 106,
                'lop_hoc_phan_id' => 70,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-27 07:42:00',
                'ngay_cap_nhat' => '2025-01-27 07:42:00',
            ),
            488 => 
            array (
                'id' => 489,
                'sinh_vien_id' => 106,
                'lop_hoc_phan_id' => 68,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-03-26 23:40:00',
                'ngay_cap_nhat' => '2025-03-26 23:40:00',
            ),
            489 => 
            array (
                'id' => 490,
                'sinh_vien_id' => 107,
                'lop_hoc_phan_id' => 64,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-27 03:03:00',
                'ngay_cap_nhat' => '2024-09-27 03:03:00',
            ),
            490 => 
            array (
                'id' => 491,
                'sinh_vien_id' => 107,
                'lop_hoc_phan_id' => 66,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-20 14:25:00',
                'ngay_cap_nhat' => '2024-06-20 14:25:00',
            ),
            491 => 
            array (
                'id' => 492,
                'sinh_vien_id' => 107,
                'lop_hoc_phan_id' => 61,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-02 09:30:00',
                'ngay_cap_nhat' => '2025-05-02 09:30:00',
            ),
            492 => 
            array (
                'id' => 493,
                'sinh_vien_id' => 107,
                'lop_hoc_phan_id' => 69,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-03 17:14:00',
                'ngay_cap_nhat' => '2026-02-03 17:14:00',
            ),
            493 => 
            array (
                'id' => 494,
                'sinh_vien_id' => 108,
                'lop_hoc_phan_id' => 67,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-13 09:59:00',
                'ngay_cap_nhat' => '2024-01-13 09:59:00',
            ),
            494 => 
            array (
                'id' => 495,
                'sinh_vien_id' => 108,
                'lop_hoc_phan_id' => 68,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-27 14:24:00',
                'ngay_cap_nhat' => '2026-03-27 14:24:00',
            ),
            495 => 
            array (
                'id' => 496,
                'sinh_vien_id' => 108,
                'lop_hoc_phan_id' => 65,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-25 10:33:00',
                'ngay_cap_nhat' => '2025-11-25 10:33:00',
            ),
            496 => 
            array (
                'id' => 497,
                'sinh_vien_id' => 108,
                'lop_hoc_phan_id' => 62,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-30 01:06:00',
                'ngay_cap_nhat' => '2025-11-30 01:06:00',
            ),
            497 => 
            array (
                'id' => 498,
                'sinh_vien_id' => 108,
                'lop_hoc_phan_id' => 69,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-28 20:22:00',
                'ngay_cap_nhat' => '2025-06-28 20:22:00',
            ),
            498 => 
            array (
                'id' => 499,
                'sinh_vien_id' => 108,
                'lop_hoc_phan_id' => 64,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-14 13:39:00',
                'ngay_cap_nhat' => '2026-05-14 13:39:00',
            ),
            499 => 
            array (
                'id' => 500,
                'sinh_vien_id' => 109,
                'lop_hoc_phan_id' => 76,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-18 20:37:00',
                'ngay_cap_nhat' => '2024-09-18 20:37:00',
            ),
        ));
        \DB::table('sinh_vien_lop_hoc_phan')->insert(array (
            0 => 
            array (
                'id' => 501,
                'sinh_vien_id' => 109,
                'lop_hoc_phan_id' => 75,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-04 14:49:00',
                'ngay_cap_nhat' => '2025-02-04 14:49:00',
            ),
            1 => 
            array (
                'id' => 502,
                'sinh_vien_id' => 109,
                'lop_hoc_phan_id' => 79,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-22 23:15:00',
                'ngay_cap_nhat' => '2025-11-22 23:15:00',
            ),
            2 => 
            array (
                'id' => 503,
                'sinh_vien_id' => 109,
                'lop_hoc_phan_id' => 77,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-21 21:37:00',
                'ngay_cap_nhat' => '2026-01-21 21:37:00',
            ),
            3 => 
            array (
                'id' => 504,
                'sinh_vien_id' => 109,
                'lop_hoc_phan_id' => 71,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-27 06:33:00',
                'ngay_cap_nhat' => '2026-02-27 06:33:00',
            ),
            4 => 
            array (
                'id' => 505,
                'sinh_vien_id' => 110,
                'lop_hoc_phan_id' => 73,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-01 02:00:00',
                'ngay_cap_nhat' => '2026-05-01 02:00:00',
            ),
            5 => 
            array (
                'id' => 506,
                'sinh_vien_id' => 110,
                'lop_hoc_phan_id' => 76,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-25 03:33:00',
                'ngay_cap_nhat' => '2025-02-25 03:33:00',
            ),
            6 => 
            array (
                'id' => 507,
                'sinh_vien_id' => 110,
                'lop_hoc_phan_id' => 71,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-16 21:28:00',
                'ngay_cap_nhat' => '2024-04-16 21:28:00',
            ),
            7 => 
            array (
                'id' => 508,
                'sinh_vien_id' => 110,
                'lop_hoc_phan_id' => 79,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-25 07:46:00',
                'ngay_cap_nhat' => '2024-12-25 07:46:00',
            ),
            8 => 
            array (
                'id' => 509,
                'sinh_vien_id' => 110,
                'lop_hoc_phan_id' => 78,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-17 08:12:00',
                'ngay_cap_nhat' => '2024-10-17 08:12:00',
            ),
            9 => 
            array (
                'id' => 510,
                'sinh_vien_id' => 111,
                'lop_hoc_phan_id' => 71,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-31 21:57:00',
                'ngay_cap_nhat' => '2025-08-31 21:57:00',
            ),
            10 => 
            array (
                'id' => 511,
                'sinh_vien_id' => 111,
                'lop_hoc_phan_id' => 72,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-05 06:38:00',
                'ngay_cap_nhat' => '2026-05-05 06:38:00',
            ),
            11 => 
            array (
                'id' => 512,
                'sinh_vien_id' => 111,
                'lop_hoc_phan_id' => 80,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-15 03:45:00',
                'ngay_cap_nhat' => '2025-10-15 03:45:00',
            ),
            12 => 
            array (
                'id' => 513,
                'sinh_vien_id' => 112,
                'lop_hoc_phan_id' => 72,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-03 20:36:00',
                'ngay_cap_nhat' => '2025-11-03 20:36:00',
            ),
            13 => 
            array (
                'id' => 514,
                'sinh_vien_id' => 112,
                'lop_hoc_phan_id' => 73,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-02 05:57:00',
                'ngay_cap_nhat' => '2026-04-02 05:57:00',
            ),
            14 => 
            array (
                'id' => 515,
                'sinh_vien_id' => 112,
                'lop_hoc_phan_id' => 77,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-23 22:11:00',
                'ngay_cap_nhat' => '2024-04-23 22:11:00',
            ),
            15 => 
            array (
                'id' => 516,
                'sinh_vien_id' => 113,
                'lop_hoc_phan_id' => 75,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-10 13:44:00',
                'ngay_cap_nhat' => '2024-10-10 13:44:00',
            ),
            16 => 
            array (
                'id' => 517,
                'sinh_vien_id' => 113,
                'lop_hoc_phan_id' => 78,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-14 10:16:00',
                'ngay_cap_nhat' => '2025-11-14 10:16:00',
            ),
            17 => 
            array (
                'id' => 518,
                'sinh_vien_id' => 113,
                'lop_hoc_phan_id' => 72,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-14 02:17:00',
                'ngay_cap_nhat' => '2024-06-14 02:17:00',
            ),
            18 => 
            array (
                'id' => 519,
                'sinh_vien_id' => 113,
                'lop_hoc_phan_id' => 76,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-06 01:24:00',
                'ngay_cap_nhat' => '2026-03-06 01:24:00',
            ),
            19 => 
            array (
                'id' => 520,
                'sinh_vien_id' => 113,
                'lop_hoc_phan_id' => 74,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-01 10:03:00',
                'ngay_cap_nhat' => '2025-02-01 10:03:00',
            ),
            20 => 
            array (
                'id' => 521,
                'sinh_vien_id' => 114,
                'lop_hoc_phan_id' => 75,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-24 19:25:00',
                'ngay_cap_nhat' => '2024-07-24 19:25:00',
            ),
            21 => 
            array (
                'id' => 522,
                'sinh_vien_id' => 114,
                'lop_hoc_phan_id' => 73,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-01 20:31:00',
                'ngay_cap_nhat' => '2024-07-01 20:31:00',
            ),
            22 => 
            array (
                'id' => 523,
                'sinh_vien_id' => 114,
                'lop_hoc_phan_id' => 78,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-21 04:34:00',
                'ngay_cap_nhat' => '2024-04-21 04:34:00',
            ),
            23 => 
            array (
                'id' => 524,
                'sinh_vien_id' => 114,
                'lop_hoc_phan_id' => 71,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-26 13:13:00',
                'ngay_cap_nhat' => '2026-02-26 13:13:00',
            ),
            24 => 
            array (
                'id' => 525,
                'sinh_vien_id' => 114,
                'lop_hoc_phan_id' => 74,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-20 20:06:00',
                'ngay_cap_nhat' => '2025-09-20 20:06:00',
            ),
            25 => 
            array (
                'id' => 526,
                'sinh_vien_id' => 115,
                'lop_hoc_phan_id' => 75,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-15 08:49:00',
                'ngay_cap_nhat' => '2026-01-15 08:49:00',
            ),
            26 => 
            array (
                'id' => 527,
                'sinh_vien_id' => 115,
                'lop_hoc_phan_id' => 72,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-01 00:57:00',
                'ngay_cap_nhat' => '2025-04-01 00:57:00',
            ),
            27 => 
            array (
                'id' => 528,
                'sinh_vien_id' => 115,
                'lop_hoc_phan_id' => 71,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-24 04:41:00',
                'ngay_cap_nhat' => '2025-05-24 04:41:00',
            ),
            28 => 
            array (
                'id' => 529,
                'sinh_vien_id' => 115,
                'lop_hoc_phan_id' => 78,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-17 00:59:00',
                'ngay_cap_nhat' => '2025-10-17 00:59:00',
            ),
            29 => 
            array (
                'id' => 530,
                'sinh_vien_id' => 115,
                'lop_hoc_phan_id' => 77,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-08 21:24:00',
                'ngay_cap_nhat' => '2024-02-08 21:24:00',
            ),
            30 => 
            array (
                'id' => 531,
                'sinh_vien_id' => 115,
                'lop_hoc_phan_id' => 80,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-29 04:44:00',
                'ngay_cap_nhat' => '2024-09-29 04:44:00',
            ),
            31 => 
            array (
                'id' => 532,
                'sinh_vien_id' => 116,
                'lop_hoc_phan_id' => 77,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-17 23:49:00',
                'ngay_cap_nhat' => '2025-02-17 23:49:00',
            ),
            32 => 
            array (
                'id' => 533,
                'sinh_vien_id' => 116,
                'lop_hoc_phan_id' => 71,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-11 02:34:00',
                'ngay_cap_nhat' => '2026-04-11 02:34:00',
            ),
            33 => 
            array (
                'id' => 534,
                'sinh_vien_id' => 116,
                'lop_hoc_phan_id' => 78,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-19 00:24:00',
                'ngay_cap_nhat' => '2024-08-19 00:24:00',
            ),
            34 => 
            array (
                'id' => 535,
                'sinh_vien_id' => 116,
                'lop_hoc_phan_id' => 74,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-06 15:07:00',
                'ngay_cap_nhat' => '2025-12-06 15:07:00',
            ),
            35 => 
            array (
                'id' => 536,
                'sinh_vien_id' => 116,
                'lop_hoc_phan_id' => 80,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-03 17:59:00',
                'ngay_cap_nhat' => '2025-08-03 17:59:00',
            ),
            36 => 
            array (
                'id' => 537,
                'sinh_vien_id' => 117,
                'lop_hoc_phan_id' => 76,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-24 02:23:00',
                'ngay_cap_nhat' => '2025-10-24 02:23:00',
            ),
            37 => 
            array (
                'id' => 538,
                'sinh_vien_id' => 117,
                'lop_hoc_phan_id' => 75,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-07-01 10:05:00',
                'ngay_cap_nhat' => '2025-07-01 10:05:00',
            ),
            38 => 
            array (
                'id' => 539,
                'sinh_vien_id' => 117,
                'lop_hoc_phan_id' => 77,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-11 14:48:00',
                'ngay_cap_nhat' => '2026-05-11 14:48:00',
            ),
            39 => 
            array (
                'id' => 540,
                'sinh_vien_id' => 117,
                'lop_hoc_phan_id' => 71,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-23 09:41:00',
                'ngay_cap_nhat' => '2026-02-23 09:41:00',
            ),
            40 => 
            array (
                'id' => 541,
                'sinh_vien_id' => 117,
                'lop_hoc_phan_id' => 80,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-26 05:35:00',
                'ngay_cap_nhat' => '2024-07-26 05:35:00',
            ),
            41 => 
            array (
                'id' => 542,
                'sinh_vien_id' => 118,
                'lop_hoc_phan_id' => 77,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-13 12:57:00',
                'ngay_cap_nhat' => '2025-12-13 12:57:00',
            ),
            42 => 
            array (
                'id' => 543,
                'sinh_vien_id' => 118,
                'lop_hoc_phan_id' => 74,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-19 20:44:00',
                'ngay_cap_nhat' => '2024-04-19 20:44:00',
            ),
            43 => 
            array (
                'id' => 544,
                'sinh_vien_id' => 118,
                'lop_hoc_phan_id' => 75,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-02 15:05:00',
                'ngay_cap_nhat' => '2025-01-02 15:05:00',
            ),
            44 => 
            array (
                'id' => 545,
                'sinh_vien_id' => 119,
                'lop_hoc_phan_id' => 74,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-01 15:24:00',
                'ngay_cap_nhat' => '2024-09-01 15:24:00',
            ),
            45 => 
            array (
                'id' => 546,
                'sinh_vien_id' => 119,
                'lop_hoc_phan_id' => 73,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-05 17:41:00',
                'ngay_cap_nhat' => '2024-03-05 17:41:00',
            ),
            46 => 
            array (
                'id' => 547,
                'sinh_vien_id' => 119,
                'lop_hoc_phan_id' => 71,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-11 15:34:00',
                'ngay_cap_nhat' => '2024-11-11 15:34:00',
            ),
            47 => 
            array (
                'id' => 548,
                'sinh_vien_id' => 119,
                'lop_hoc_phan_id' => 72,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-04 14:01:00',
                'ngay_cap_nhat' => '2026-05-04 14:01:00',
            ),
            48 => 
            array (
                'id' => 549,
                'sinh_vien_id' => 119,
                'lop_hoc_phan_id' => 78,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-07 10:03:00',
                'ngay_cap_nhat' => '2024-02-07 10:03:00',
            ),
            49 => 
            array (
                'id' => 550,
                'sinh_vien_id' => 119,
                'lop_hoc_phan_id' => 75,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-11 23:02:00',
                'ngay_cap_nhat' => '2024-12-11 23:02:00',
            ),
            50 => 
            array (
                'id' => 551,
                'sinh_vien_id' => 120,
                'lop_hoc_phan_id' => 72,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-28 18:14:00',
                'ngay_cap_nhat' => '2026-01-28 18:14:00',
            ),
            51 => 
            array (
                'id' => 552,
                'sinh_vien_id' => 120,
                'lop_hoc_phan_id' => 74,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-14 01:47:00',
                'ngay_cap_nhat' => '2024-03-14 01:47:00',
            ),
            52 => 
            array (
                'id' => 553,
                'sinh_vien_id' => 120,
                'lop_hoc_phan_id' => 78,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-24 15:41:00',
                'ngay_cap_nhat' => '2024-05-24 15:41:00',
            ),
            53 => 
            array (
                'id' => 554,
                'sinh_vien_id' => 120,
                'lop_hoc_phan_id' => 76,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-20 15:58:00',
                'ngay_cap_nhat' => '2024-01-20 15:58:00',
            ),
            54 => 
            array (
                'id' => 555,
                'sinh_vien_id' => 120,
                'lop_hoc_phan_id' => 75,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-25 01:15:00',
                'ngay_cap_nhat' => '2025-09-25 01:15:00',
            ),
            55 => 
            array (
                'id' => 556,
                'sinh_vien_id' => 120,
                'lop_hoc_phan_id' => 80,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-19 20:08:00',
                'ngay_cap_nhat' => '2025-12-19 20:08:00',
            ),
            56 => 
            array (
                'id' => 557,
                'sinh_vien_id' => 121,
                'lop_hoc_phan_id' => 83,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-20 03:29:00',
                'ngay_cap_nhat' => '2026-04-20 03:29:00',
            ),
            57 => 
            array (
                'id' => 558,
                'sinh_vien_id' => 121,
                'lop_hoc_phan_id' => 81,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-17 05:53:00',
                'ngay_cap_nhat' => '2025-09-17 05:53:00',
            ),
            58 => 
            array (
                'id' => 559,
                'sinh_vien_id' => 121,
                'lop_hoc_phan_id' => 85,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-28 02:52:00',
                'ngay_cap_nhat' => '2025-08-28 02:52:00',
            ),
            59 => 
            array (
                'id' => 560,
                'sinh_vien_id' => 122,
                'lop_hoc_phan_id' => 82,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-05 06:27:00',
                'ngay_cap_nhat' => '2024-03-05 06:27:00',
            ),
            60 => 
            array (
                'id' => 561,
                'sinh_vien_id' => 122,
                'lop_hoc_phan_id' => 88,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-11 23:43:00',
                'ngay_cap_nhat' => '2024-12-11 23:43:00',
            ),
            61 => 
            array (
                'id' => 562,
                'sinh_vien_id' => 122,
                'lop_hoc_phan_id' => 84,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-15 10:07:00',
                'ngay_cap_nhat' => '2025-02-15 10:07:00',
            ),
            62 => 
            array (
                'id' => 563,
                'sinh_vien_id' => 123,
                'lop_hoc_phan_id' => 86,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-26 10:04:00',
                'ngay_cap_nhat' => '2024-06-26 10:04:00',
            ),
            63 => 
            array (
                'id' => 564,
                'sinh_vien_id' => 123,
                'lop_hoc_phan_id' => 84,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-03 08:09:00',
                'ngay_cap_nhat' => '2024-05-03 08:09:00',
            ),
            64 => 
            array (
                'id' => 565,
                'sinh_vien_id' => 123,
                'lop_hoc_phan_id' => 81,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-14 13:10:00',
                'ngay_cap_nhat' => '2026-02-14 13:10:00',
            ),
            65 => 
            array (
                'id' => 566,
                'sinh_vien_id' => 123,
                'lop_hoc_phan_id' => 85,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-14 11:35:00',
                'ngay_cap_nhat' => '2025-12-14 11:35:00',
            ),
            66 => 
            array (
                'id' => 567,
                'sinh_vien_id' => 124,
                'lop_hoc_phan_id' => 88,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-12 20:39:00',
                'ngay_cap_nhat' => '2024-04-12 20:39:00',
            ),
            67 => 
            array (
                'id' => 568,
                'sinh_vien_id' => 124,
                'lop_hoc_phan_id' => 84,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-20 05:01:00',
                'ngay_cap_nhat' => '2025-01-20 05:01:00',
            ),
            68 => 
            array (
                'id' => 569,
                'sinh_vien_id' => 124,
                'lop_hoc_phan_id' => 81,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-19 15:05:00',
                'ngay_cap_nhat' => '2026-06-19 15:05:00',
            ),
            69 => 
            array (
                'id' => 570,
                'sinh_vien_id' => 124,
                'lop_hoc_phan_id' => 82,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-07 00:11:00',
                'ngay_cap_nhat' => '2024-01-07 00:11:00',
            ),
            70 => 
            array (
                'id' => 571,
                'sinh_vien_id' => 125,
                'lop_hoc_phan_id' => 90,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-11 15:44:00',
                'ngay_cap_nhat' => '2025-12-11 15:44:00',
            ),
            71 => 
            array (
                'id' => 572,
                'sinh_vien_id' => 125,
                'lop_hoc_phan_id' => 85,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-09 06:09:00',
                'ngay_cap_nhat' => '2024-05-09 06:09:00',
            ),
            72 => 
            array (
                'id' => 573,
                'sinh_vien_id' => 125,
                'lop_hoc_phan_id' => 87,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-17 08:33:00',
                'ngay_cap_nhat' => '2025-10-17 08:33:00',
            ),
            73 => 
            array (
                'id' => 574,
                'sinh_vien_id' => 126,
                'lop_hoc_phan_id' => 87,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-02 05:45:00',
                'ngay_cap_nhat' => '2025-09-02 05:45:00',
            ),
            74 => 
            array (
                'id' => 575,
                'sinh_vien_id' => 126,
                'lop_hoc_phan_id' => 84,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-26 19:05:00',
                'ngay_cap_nhat' => '2025-05-26 19:05:00',
            ),
            75 => 
            array (
                'id' => 576,
                'sinh_vien_id' => 126,
                'lop_hoc_phan_id' => 83,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-04 09:22:00',
                'ngay_cap_nhat' => '2025-10-04 09:22:00',
            ),
            76 => 
            array (
                'id' => 577,
                'sinh_vien_id' => 126,
                'lop_hoc_phan_id' => 85,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-03-04 00:35:00',
                'ngay_cap_nhat' => '2025-03-04 00:35:00',
            ),
            77 => 
            array (
                'id' => 578,
                'sinh_vien_id' => 126,
                'lop_hoc_phan_id' => 86,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-29 06:07:00',
                'ngay_cap_nhat' => '2024-08-29 06:07:00',
            ),
            78 => 
            array (
                'id' => 579,
                'sinh_vien_id' => 126,
                'lop_hoc_phan_id' => 81,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-26 03:39:00',
                'ngay_cap_nhat' => '2025-06-26 03:39:00',
            ),
            79 => 
            array (
                'id' => 580,
                'sinh_vien_id' => 127,
                'lop_hoc_phan_id' => 89,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-06 06:17:00',
                'ngay_cap_nhat' => '2025-11-06 06:17:00',
            ),
            80 => 
            array (
                'id' => 581,
                'sinh_vien_id' => 127,
                'lop_hoc_phan_id' => 90,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-24 06:07:00',
                'ngay_cap_nhat' => '2024-02-24 06:07:00',
            ),
            81 => 
            array (
                'id' => 582,
                'sinh_vien_id' => 127,
                'lop_hoc_phan_id' => 84,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-26 04:43:00',
                'ngay_cap_nhat' => '2026-03-26 04:43:00',
            ),
            82 => 
            array (
                'id' => 583,
                'sinh_vien_id' => 127,
                'lop_hoc_phan_id' => 88,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-14 15:31:00',
                'ngay_cap_nhat' => '2026-05-14 15:31:00',
            ),
            83 => 
            array (
                'id' => 584,
                'sinh_vien_id' => 127,
                'lop_hoc_phan_id' => 86,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-29 05:42:00',
                'ngay_cap_nhat' => '2024-06-29 05:42:00',
            ),
            84 => 
            array (
                'id' => 585,
                'sinh_vien_id' => 128,
                'lop_hoc_phan_id' => 81,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-02 13:16:00',
                'ngay_cap_nhat' => '2024-08-02 13:16:00',
            ),
            85 => 
            array (
                'id' => 586,
                'sinh_vien_id' => 128,
                'lop_hoc_phan_id' => 86,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-08 19:51:00',
                'ngay_cap_nhat' => '2024-12-08 19:51:00',
            ),
            86 => 
            array (
                'id' => 587,
                'sinh_vien_id' => 128,
                'lop_hoc_phan_id' => 85,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-15 14:02:00',
                'ngay_cap_nhat' => '2026-02-15 14:02:00',
            ),
            87 => 
            array (
                'id' => 588,
                'sinh_vien_id' => 129,
                'lop_hoc_phan_id' => 81,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-10 00:31:00',
                'ngay_cap_nhat' => '2024-06-10 00:31:00',
            ),
            88 => 
            array (
                'id' => 589,
                'sinh_vien_id' => 129,
                'lop_hoc_phan_id' => 89,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-11 03:04:00',
                'ngay_cap_nhat' => '2025-06-11 03:04:00',
            ),
            89 => 
            array (
                'id' => 590,
                'sinh_vien_id' => 129,
                'lop_hoc_phan_id' => 83,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-28 23:28:00',
                'ngay_cap_nhat' => '2024-08-28 23:28:00',
            ),
            90 => 
            array (
                'id' => 591,
                'sinh_vien_id' => 130,
                'lop_hoc_phan_id' => 87,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-29 07:06:00',
                'ngay_cap_nhat' => '2024-11-29 07:06:00',
            ),
            91 => 
            array (
                'id' => 592,
                'sinh_vien_id' => 130,
                'lop_hoc_phan_id' => 84,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-30 23:26:00',
                'ngay_cap_nhat' => '2024-08-30 23:26:00',
            ),
            92 => 
            array (
                'id' => 593,
                'sinh_vien_id' => 130,
                'lop_hoc_phan_id' => 86,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-09 06:24:00',
                'ngay_cap_nhat' => '2026-06-09 06:24:00',
            ),
            93 => 
            array (
                'id' => 594,
                'sinh_vien_id' => 130,
                'lop_hoc_phan_id' => 82,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-13 02:30:00',
                'ngay_cap_nhat' => '2024-08-13 02:30:00',
            ),
            94 => 
            array (
                'id' => 595,
                'sinh_vien_id' => 130,
                'lop_hoc_phan_id' => 81,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-22 15:03:00',
                'ngay_cap_nhat' => '2025-08-22 15:03:00',
            ),
            95 => 
            array (
                'id' => 596,
                'sinh_vien_id' => 131,
                'lop_hoc_phan_id' => 83,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-19 14:46:00',
                'ngay_cap_nhat' => '2024-05-19 14:46:00',
            ),
            96 => 
            array (
                'id' => 597,
                'sinh_vien_id' => 131,
                'lop_hoc_phan_id' => 84,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-17 20:22:00',
                'ngay_cap_nhat' => '2024-07-17 20:22:00',
            ),
            97 => 
            array (
                'id' => 598,
                'sinh_vien_id' => 131,
                'lop_hoc_phan_id' => 88,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-03 06:21:00',
                'ngay_cap_nhat' => '2024-10-03 06:21:00',
            ),
            98 => 
            array (
                'id' => 599,
                'sinh_vien_id' => 131,
                'lop_hoc_phan_id' => 82,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-10 01:44:00',
                'ngay_cap_nhat' => '2024-05-10 01:44:00',
            ),
            99 => 
            array (
                'id' => 600,
                'sinh_vien_id' => 131,
                'lop_hoc_phan_id' => 89,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-05 01:17:00',
                'ngay_cap_nhat' => '2025-08-05 01:17:00',
            ),
            100 => 
            array (
                'id' => 601,
                'sinh_vien_id' => 131,
                'lop_hoc_phan_id' => 90,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-19 03:54:00',
                'ngay_cap_nhat' => '2024-05-19 03:54:00',
            ),
            101 => 
            array (
                'id' => 602,
                'sinh_vien_id' => 132,
                'lop_hoc_phan_id' => 88,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-26 09:38:00',
                'ngay_cap_nhat' => '2026-06-26 09:38:00',
            ),
            102 => 
            array (
                'id' => 603,
                'sinh_vien_id' => 132,
                'lop_hoc_phan_id' => 87,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-09 20:39:00',
                'ngay_cap_nhat' => '2024-06-09 20:39:00',
            ),
            103 => 
            array (
                'id' => 604,
                'sinh_vien_id' => 132,
                'lop_hoc_phan_id' => 83,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-23 18:35:00',
                'ngay_cap_nhat' => '2024-06-23 18:35:00',
            ),
            104 => 
            array (
                'id' => 605,
                'sinh_vien_id' => 132,
                'lop_hoc_phan_id' => 89,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-25 07:05:00',
                'ngay_cap_nhat' => '2026-05-25 07:05:00',
            ),
            105 => 
            array (
                'id' => 606,
                'sinh_vien_id' => 132,
                'lop_hoc_phan_id' => 90,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-25 16:31:00',
                'ngay_cap_nhat' => '2025-02-25 16:31:00',
            ),
            106 => 
            array (
                'id' => 607,
                'sinh_vien_id' => 132,
                'lop_hoc_phan_id' => 82,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-01 06:37:00',
                'ngay_cap_nhat' => '2026-06-01 06:37:00',
            ),
            107 => 
            array (
                'id' => 608,
                'sinh_vien_id' => 133,
                'lop_hoc_phan_id' => 88,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-09-10 10:27:00',
                'ngay_cap_nhat' => '2024-09-10 10:27:00',
            ),
            108 => 
            array (
                'id' => 609,
                'sinh_vien_id' => 133,
                'lop_hoc_phan_id' => 85,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-16 07:57:00',
                'ngay_cap_nhat' => '2025-08-16 07:57:00',
            ),
            109 => 
            array (
                'id' => 610,
                'sinh_vien_id' => 133,
                'lop_hoc_phan_id' => 81,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-28 04:58:00',
                'ngay_cap_nhat' => '2025-08-28 04:58:00',
            ),
            110 => 
            array (
                'id' => 611,
                'sinh_vien_id' => 133,
                'lop_hoc_phan_id' => 86,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-10 00:26:00',
                'ngay_cap_nhat' => '2025-08-10 00:26:00',
            ),
            111 => 
            array (
                'id' => 612,
                'sinh_vien_id' => 133,
                'lop_hoc_phan_id' => 84,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-15 01:30:00',
                'ngay_cap_nhat' => '2024-02-15 01:30:00',
            ),
            112 => 
            array (
                'id' => 613,
                'sinh_vien_id' => 133,
                'lop_hoc_phan_id' => 82,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-21 16:02:00',
                'ngay_cap_nhat' => '2026-01-21 16:02:00',
            ),
            113 => 
            array (
                'id' => 614,
                'sinh_vien_id' => 134,
                'lop_hoc_phan_id' => 89,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-08 15:15:00',
                'ngay_cap_nhat' => '2025-04-08 15:15:00',
            ),
            114 => 
            array (
                'id' => 615,
                'sinh_vien_id' => 134,
                'lop_hoc_phan_id' => 87,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-03-26 17:48:00',
                'ngay_cap_nhat' => '2024-03-26 17:48:00',
            ),
            115 => 
            array (
                'id' => 616,
                'sinh_vien_id' => 134,
                'lop_hoc_phan_id' => 88,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-13 22:46:00',
                'ngay_cap_nhat' => '2024-01-13 22:46:00',
            ),
            116 => 
            array (
                'id' => 617,
                'sinh_vien_id' => 134,
                'lop_hoc_phan_id' => 90,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-20 06:08:00',
                'ngay_cap_nhat' => '2025-02-20 06:08:00',
            ),
            117 => 
            array (
                'id' => 618,
                'sinh_vien_id' => 134,
                'lop_hoc_phan_id' => 86,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-02 09:15:00',
                'ngay_cap_nhat' => '2025-01-02 09:15:00',
            ),
            118 => 
            array (
                'id' => 619,
                'sinh_vien_id' => 134,
                'lop_hoc_phan_id' => 81,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-25 02:01:00',
                'ngay_cap_nhat' => '2025-10-25 02:01:00',
            ),
            119 => 
            array (
                'id' => 620,
                'sinh_vien_id' => 135,
                'lop_hoc_phan_id' => 85,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-25 14:29:00',
                'ngay_cap_nhat' => '2024-01-25 14:29:00',
            ),
            120 => 
            array (
                'id' => 621,
                'sinh_vien_id' => 135,
                'lop_hoc_phan_id' => 83,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-01 04:55:00',
                'ngay_cap_nhat' => '2026-03-01 04:55:00',
            ),
            121 => 
            array (
                'id' => 622,
                'sinh_vien_id' => 135,
                'lop_hoc_phan_id' => 88,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-21 12:11:00',
                'ngay_cap_nhat' => '2025-12-21 12:11:00',
            ),
            122 => 
            array (
                'id' => 623,
                'sinh_vien_id' => 135,
                'lop_hoc_phan_id' => 87,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-19 11:40:00',
                'ngay_cap_nhat' => '2026-03-19 11:40:00',
            ),
            123 => 
            array (
                'id' => 624,
                'sinh_vien_id' => 135,
                'lop_hoc_phan_id' => 90,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-20 22:40:00',
                'ngay_cap_nhat' => '2025-04-20 22:40:00',
            ),
            124 => 
            array (
                'id' => 625,
                'sinh_vien_id' => 135,
                'lop_hoc_phan_id' => 86,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-02 20:04:00',
                'ngay_cap_nhat' => '2024-01-02 20:04:00',
            ),
            125 => 
            array (
                'id' => 626,
                'sinh_vien_id' => 136,
                'lop_hoc_phan_id' => 86,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-15 19:34:00',
                'ngay_cap_nhat' => '2025-12-15 19:34:00',
            ),
            126 => 
            array (
                'id' => 627,
                'sinh_vien_id' => 136,
                'lop_hoc_phan_id' => 89,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-12 06:50:00',
                'ngay_cap_nhat' => '2025-08-12 06:50:00',
            ),
            127 => 
            array (
                'id' => 628,
                'sinh_vien_id' => 136,
                'lop_hoc_phan_id' => 81,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-02 02:39:00',
                'ngay_cap_nhat' => '2025-12-02 02:39:00',
            ),
            128 => 
            array (
                'id' => 629,
                'sinh_vien_id' => 136,
                'lop_hoc_phan_id' => 83,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-20 10:47:00',
                'ngay_cap_nhat' => '2026-06-20 10:47:00',
            ),
            129 => 
            array (
                'id' => 630,
                'sinh_vien_id' => 136,
                'lop_hoc_phan_id' => 84,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-26 16:58:00',
                'ngay_cap_nhat' => '2024-02-26 16:58:00',
            ),
            130 => 
            array (
                'id' => 631,
                'sinh_vien_id' => 136,
                'lop_hoc_phan_id' => 87,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-21 11:56:00',
                'ngay_cap_nhat' => '2025-11-21 11:56:00',
            ),
            131 => 
            array (
                'id' => 632,
                'sinh_vien_id' => 137,
                'lop_hoc_phan_id' => 82,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-21 19:02:00',
                'ngay_cap_nhat' => '2025-04-21 19:02:00',
            ),
            132 => 
            array (
                'id' => 633,
                'sinh_vien_id' => 137,
                'lop_hoc_phan_id' => 87,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-09 11:11:00',
                'ngay_cap_nhat' => '2025-01-09 11:11:00',
            ),
            133 => 
            array (
                'id' => 634,
                'sinh_vien_id' => 137,
                'lop_hoc_phan_id' => 86,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-10-25 17:45:00',
                'ngay_cap_nhat' => '2025-10-25 17:45:00',
            ),
            134 => 
            array (
                'id' => 635,
                'sinh_vien_id' => 138,
                'lop_hoc_phan_id' => 89,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-08 07:34:00',
                'ngay_cap_nhat' => '2024-12-08 07:34:00',
            ),
            135 => 
            array (
                'id' => 636,
                'sinh_vien_id' => 138,
                'lop_hoc_phan_id' => 84,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-26 20:30:00',
                'ngay_cap_nhat' => '2024-04-26 20:30:00',
            ),
            136 => 
            array (
                'id' => 637,
                'sinh_vien_id' => 138,
                'lop_hoc_phan_id' => 83,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-25 18:55:00',
                'ngay_cap_nhat' => '2026-01-25 18:55:00',
            ),
            137 => 
            array (
                'id' => 638,
                'sinh_vien_id' => 139,
                'lop_hoc_phan_id' => 94,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-30 21:27:00',
                'ngay_cap_nhat' => '2025-05-30 21:27:00',
            ),
            138 => 
            array (
                'id' => 639,
                'sinh_vien_id' => 139,
                'lop_hoc_phan_id' => 96,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-10 01:04:00',
                'ngay_cap_nhat' => '2024-10-10 01:04:00',
            ),
            139 => 
            array (
                'id' => 640,
                'sinh_vien_id' => 139,
                'lop_hoc_phan_id' => 99,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-16 11:28:00',
                'ngay_cap_nhat' => '2025-01-16 11:28:00',
            ),
            140 => 
            array (
                'id' => 641,
                'sinh_vien_id' => 139,
                'lop_hoc_phan_id' => 93,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-12 16:33:00',
                'ngay_cap_nhat' => '2025-05-12 16:33:00',
            ),
            141 => 
            array (
                'id' => 642,
                'sinh_vien_id' => 140,
                'lop_hoc_phan_id' => 98,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-07 19:23:00',
                'ngay_cap_nhat' => '2025-04-07 19:23:00',
            ),
            142 => 
            array (
                'id' => 643,
                'sinh_vien_id' => 140,
                'lop_hoc_phan_id' => 99,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-30 21:44:00',
                'ngay_cap_nhat' => '2026-03-30 21:44:00',
            ),
            143 => 
            array (
                'id' => 644,
                'sinh_vien_id' => 140,
                'lop_hoc_phan_id' => 95,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-04-08 02:12:00',
                'ngay_cap_nhat' => '2026-04-08 02:12:00',
            ),
            144 => 
            array (
                'id' => 645,
                'sinh_vien_id' => 141,
                'lop_hoc_phan_id' => 92,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-21 05:17:00',
                'ngay_cap_nhat' => '2024-04-21 05:17:00',
            ),
            145 => 
            array (
                'id' => 646,
                'sinh_vien_id' => 141,
                'lop_hoc_phan_id' => 100,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-24 22:09:00',
                'ngay_cap_nhat' => '2024-04-24 22:09:00',
            ),
            146 => 
            array (
                'id' => 647,
                'sinh_vien_id' => 141,
                'lop_hoc_phan_id' => 97,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-23 04:55:00',
                'ngay_cap_nhat' => '2025-05-23 04:55:00',
            ),
            147 => 
            array (
                'id' => 648,
                'sinh_vien_id' => 141,
                'lop_hoc_phan_id' => 99,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-28 16:40:00',
                'ngay_cap_nhat' => '2024-07-28 16:40:00',
            ),
            148 => 
            array (
                'id' => 649,
                'sinh_vien_id' => 141,
                'lop_hoc_phan_id' => 93,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-24 09:26:00',
                'ngay_cap_nhat' => '2024-01-24 09:26:00',
            ),
            149 => 
            array (
                'id' => 650,
                'sinh_vien_id' => 141,
                'lop_hoc_phan_id' => 91,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-29 17:59:00',
                'ngay_cap_nhat' => '2025-11-29 17:59:00',
            ),
            150 => 
            array (
                'id' => 651,
                'sinh_vien_id' => 142,
                'lop_hoc_phan_id' => 98,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-25 20:01:00',
                'ngay_cap_nhat' => '2026-01-25 20:01:00',
            ),
            151 => 
            array (
                'id' => 652,
                'sinh_vien_id' => 142,
                'lop_hoc_phan_id' => 96,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-25 06:04:00',
                'ngay_cap_nhat' => '2024-10-25 06:04:00',
            ),
            152 => 
            array (
                'id' => 653,
                'sinh_vien_id' => 142,
                'lop_hoc_phan_id' => 97,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-23 07:53:00',
                'ngay_cap_nhat' => '2024-01-23 07:53:00',
            ),
            153 => 
            array (
                'id' => 654,
                'sinh_vien_id' => 142,
                'lop_hoc_phan_id' => 94,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-06-16 20:21:00',
                'ngay_cap_nhat' => '2025-06-16 20:21:00',
            ),
            154 => 
            array (
                'id' => 655,
                'sinh_vien_id' => 143,
                'lop_hoc_phan_id' => 100,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-12 17:28:00',
                'ngay_cap_nhat' => '2026-05-12 17:28:00',
            ),
            155 => 
            array (
                'id' => 656,
                'sinh_vien_id' => 143,
                'lop_hoc_phan_id' => 96,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-04-13 09:36:00',
                'ngay_cap_nhat' => '2025-04-13 09:36:00',
            ),
            156 => 
            array (
                'id' => 657,
                'sinh_vien_id' => 143,
                'lop_hoc_phan_id' => 99,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-05-15 09:10:00',
                'ngay_cap_nhat' => '2024-05-15 09:10:00',
            ),
            157 => 
            array (
                'id' => 658,
                'sinh_vien_id' => 143,
                'lop_hoc_phan_id' => 94,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-03-19 08:14:00',
                'ngay_cap_nhat' => '2026-03-19 08:14:00',
            ),
            158 => 
            array (
                'id' => 659,
                'sinh_vien_id' => 143,
                'lop_hoc_phan_id' => 95,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-05-10 11:18:00',
                'ngay_cap_nhat' => '2025-05-10 11:18:00',
            ),
            159 => 
            array (
                'id' => 660,
                'sinh_vien_id' => 143,
                'lop_hoc_phan_id' => 98,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-27 01:09:00',
                'ngay_cap_nhat' => '2026-02-27 01:09:00',
            ),
            160 => 
            array (
                'id' => 661,
                'sinh_vien_id' => 144,
                'lop_hoc_phan_id' => 95,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-29 17:18:00',
                'ngay_cap_nhat' => '2025-12-29 17:18:00',
            ),
            161 => 
            array (
                'id' => 662,
                'sinh_vien_id' => 144,
                'lop_hoc_phan_id' => 98,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-05 05:53:00',
                'ngay_cap_nhat' => '2024-07-05 05:53:00',
            ),
            162 => 
            array (
                'id' => 663,
                'sinh_vien_id' => 144,
                'lop_hoc_phan_id' => 93,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-26 22:57:00',
                'ngay_cap_nhat' => '2025-12-26 22:57:00',
            ),
            163 => 
            array (
                'id' => 664,
                'sinh_vien_id' => 144,
                'lop_hoc_phan_id' => 100,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-13 04:10:00',
                'ngay_cap_nhat' => '2025-11-13 04:10:00',
            ),
            164 => 
            array (
                'id' => 665,
                'sinh_vien_id' => 144,
                'lop_hoc_phan_id' => 92,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-08-31 03:02:00',
                'ngay_cap_nhat' => '2024-08-31 03:02:00',
            ),
            165 => 
            array (
                'id' => 666,
                'sinh_vien_id' => 145,
                'lop_hoc_phan_id' => 100,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-07-07 06:35:00',
                'ngay_cap_nhat' => '2024-07-07 06:35:00',
            ),
            166 => 
            array (
                'id' => 667,
                'sinh_vien_id' => 145,
                'lop_hoc_phan_id' => 93,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-12-25 01:42:00',
                'ngay_cap_nhat' => '2025-12-25 01:42:00',
            ),
            167 => 
            array (
                'id' => 668,
                'sinh_vien_id' => 145,
                'lop_hoc_phan_id' => 98,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-20 11:09:00',
                'ngay_cap_nhat' => '2024-11-20 11:09:00',
            ),
            168 => 
            array (
                'id' => 669,
                'sinh_vien_id' => 145,
                'lop_hoc_phan_id' => 99,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-16 14:34:00',
                'ngay_cap_nhat' => '2025-01-16 14:34:00',
            ),
            169 => 
            array (
                'id' => 670,
                'sinh_vien_id' => 145,
                'lop_hoc_phan_id' => 97,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-06-15 17:19:00',
                'ngay_cap_nhat' => '2024-06-15 17:19:00',
            ),
            170 => 
            array (
                'id' => 671,
                'sinh_vien_id' => 146,
                'lop_hoc_phan_id' => 91,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-25 04:29:00',
                'ngay_cap_nhat' => '2026-02-25 04:29:00',
            ),
            171 => 
            array (
                'id' => 672,
                'sinh_vien_id' => 146,
                'lop_hoc_phan_id' => 97,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-23 04:00:00',
                'ngay_cap_nhat' => '2024-11-23 04:00:00',
            ),
            172 => 
            array (
                'id' => 673,
                'sinh_vien_id' => 146,
                'lop_hoc_phan_id' => 98,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-01-26 17:32:00',
                'ngay_cap_nhat' => '2026-01-26 17:32:00',
            ),
            173 => 
            array (
                'id' => 674,
                'sinh_vien_id' => 147,
                'lop_hoc_phan_id' => 95,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-13 04:51:00',
                'ngay_cap_nhat' => '2025-11-13 04:51:00',
            ),
            174 => 
            array (
                'id' => 675,
                'sinh_vien_id' => 147,
                'lop_hoc_phan_id' => 98,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-08-01 23:58:00',
                'ngay_cap_nhat' => '2025-08-01 23:58:00',
            ),
            175 => 
            array (
                'id' => 676,
                'sinh_vien_id' => 147,
                'lop_hoc_phan_id' => 100,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-03-28 10:44:00',
                'ngay_cap_nhat' => '2025-03-28 10:44:00',
            ),
            176 => 
            array (
                'id' => 677,
                'sinh_vien_id' => 147,
                'lop_hoc_phan_id' => 97,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-04-25 23:30:00',
                'ngay_cap_nhat' => '2024-04-25 23:30:00',
            ),
            177 => 
            array (
                'id' => 678,
                'sinh_vien_id' => 147,
                'lop_hoc_phan_id' => 99,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-11 04:43:00',
                'ngay_cap_nhat' => '2024-02-11 04:43:00',
            ),
            178 => 
            array (
                'id' => 679,
                'sinh_vien_id' => 148,
                'lop_hoc_phan_id' => 95,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-09-24 07:28:00',
                'ngay_cap_nhat' => '2025-09-24 07:28:00',
            ),
            179 => 
            array (
                'id' => 680,
                'sinh_vien_id' => 148,
                'lop_hoc_phan_id' => 91,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-12-31 02:20:00',
                'ngay_cap_nhat' => '2024-12-31 02:20:00',
            ),
            180 => 
            array (
                'id' => 681,
                'sinh_vien_id' => 148,
                'lop_hoc_phan_id' => 97,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-26 19:41:00',
                'ngay_cap_nhat' => '2024-02-26 19:41:00',
            ),
            181 => 
            array (
                'id' => 682,
                'sinh_vien_id' => 149,
                'lop_hoc_phan_id' => 100,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-02-24 08:12:00',
                'ngay_cap_nhat' => '2026-02-24 08:12:00',
            ),
            182 => 
            array (
                'id' => 683,
                'sinh_vien_id' => 149,
                'lop_hoc_phan_id' => 99,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-01-24 02:34:00',
                'ngay_cap_nhat' => '2024-01-24 02:34:00',
            ),
            183 => 
            array (
                'id' => 684,
                'sinh_vien_id' => 149,
                'lop_hoc_phan_id' => 94,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-19 14:43:00',
                'ngay_cap_nhat' => '2026-05-19 14:43:00',
            ),
            184 => 
            array (
                'id' => 685,
                'sinh_vien_id' => 149,
                'lop_hoc_phan_id' => 97,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-11-18 02:32:00',
                'ngay_cap_nhat' => '2025-11-18 02:32:00',
            ),
            185 => 
            array (
                'id' => 686,
                'sinh_vien_id' => 150,
                'lop_hoc_phan_id' => 94,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-02-27 21:23:00',
                'ngay_cap_nhat' => '2024-02-27 21:23:00',
            ),
            186 => 
            array (
                'id' => 687,
                'sinh_vien_id' => 150,
                'lop_hoc_phan_id' => 98,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-02-11 04:45:00',
                'ngay_cap_nhat' => '2025-02-11 04:45:00',
            ),
            187 => 
            array (
                'id' => 688,
                'sinh_vien_id' => 150,
                'lop_hoc_phan_id' => 96,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-05-24 13:23:00',
                'ngay_cap_nhat' => '2026-05-24 13:23:00',
            ),
            188 => 
            array (
                'id' => 689,
                'sinh_vien_id' => 150,
                'lop_hoc_phan_id' => 95,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2025-01-30 11:00:00',
                'ngay_cap_nhat' => '2025-01-30 11:00:00',
            ),
            189 => 
            array (
                'id' => 690,
                'sinh_vien_id' => 150,
                'lop_hoc_phan_id' => 97,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-10-18 11:22:00',
                'ngay_cap_nhat' => '2024-10-18 11:22:00',
            ),
            190 => 
            array (
                'id' => 691,
                'sinh_vien_id' => 150,
                'lop_hoc_phan_id' => 99,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2024-11-11 14:55:00',
                'ngay_cap_nhat' => '2024-11-11 14:55:00',
            ),
            191 => 
            array (
                'id' => 692,
                'sinh_vien_id' => 2,
                'lop_hoc_phan_id' => 13,
                'trang_thai' => 'dang_hoc',
                'ngay_dang_ky' => '2026-07-11 20:06:24',
                'ngay_tao' => '2026-06-30 19:08:02',
                'ngay_cap_nhat' => '2026-06-30 19:08:02',
            ),
        ));
        
        
    }
}