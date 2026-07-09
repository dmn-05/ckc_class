<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ChuDeTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('chu_de')->delete();
        
        \DB::table('chu_de')->insert(array (
            0 => 
            array (
                'id' => 1,
                'ten_chu_de' => 'Chương 1: Thực hành trên lớp',
                'lop_hoc_phan_id' => 1,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-03-30 23:26:00',
                'ngay_cap_nhat' => '2025-03-30 23:26:00',
            ),
            1 => 
            array (
                'id' => 2,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 2,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-03-10 23:57:00',
                'ngay_cap_nhat' => '2025-03-10 23:57:00',
            ),
            2 => 
            array (
                'id' => 3,
                'ten_chu_de' => 'Chương 2: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 2,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-05-22 18:38:00',
                'ngay_cap_nhat' => '2024-05-22 18:38:00',
            ),
            3 => 
            array (
                'id' => 4,
                'ten_chu_de' => 'Chương 1: Bài tập thực hành',
                'lop_hoc_phan_id' => 3,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-11-06 15:55:00',
                'ngay_cap_nhat' => '2024-11-06 15:55:00',
            ),
            4 => 
            array (
                'id' => 5,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 4,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-03-31 00:26:00',
                'ngay_cap_nhat' => '2024-03-31 00:26:00',
            ),
            5 => 
            array (
                'id' => 6,
                'ten_chu_de' => 'Chương 2: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 4,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-10-06 13:11:00',
                'ngay_cap_nhat' => '2024-10-06 13:11:00',
            ),
            6 => 
            array (
                'id' => 7,
                'ten_chu_de' => 'Chương 1: Bài tập thực hành',
                'lop_hoc_phan_id' => 5,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-05-02 12:18:00',
                'ngay_cap_nhat' => '2026-05-02 12:18:00',
            ),
            7 => 
            array (
                'id' => 8,
                'ten_chu_de' => 'Chương 2: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 5,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-05-17 01:52:00',
                'ngay_cap_nhat' => '2025-05-17 01:52:00',
            ),
            8 => 
            array (
                'id' => 9,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 6,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2026-01-27 14:14:00',
                'ngay_cap_nhat' => '2026-01-27 14:14:00',
            ),
            9 => 
            array (
                'id' => 10,
                'ten_chu_de' => 'Chương 2: Thực hành trên lớp',
                'lop_hoc_phan_id' => 6,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-03-21 00:09:00',
                'ngay_cap_nhat' => '2026-03-21 00:09:00',
            ),
            10 => 
            array (
                'id' => 11,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 7,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-04-28 03:41:00',
                'ngay_cap_nhat' => '2025-04-28 03:41:00',
            ),
            11 => 
            array (
                'id' => 12,
                'ten_chu_de' => 'Chương 2: Đồ án nhóm',
                'lop_hoc_phan_id' => 7,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-10-21 13:11:00',
                'ngay_cap_nhat' => '2024-10-21 13:11:00',
            ),
            12 => 
            array (
                'id' => 13,
                'ten_chu_de' => 'Chương 1: Thực hành trên lớp',
                'lop_hoc_phan_id' => 8,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-02-22 08:31:00',
                'ngay_cap_nhat' => '2026-02-22 08:31:00',
            ),
            13 => 
            array (
                'id' => 14,
                'ten_chu_de' => 'Chương 2: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 8,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-09-05 23:23:00',
                'ngay_cap_nhat' => '2025-09-05 23:23:00',
            ),
            14 => 
            array (
                'id' => 15,
                'ten_chu_de' => 'Chương 1: Kiểm tra cuối kỳ',
                'lop_hoc_phan_id' => 9,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-10-05 21:30:00',
                'ngay_cap_nhat' => '2025-10-05 21:30:00',
            ),
            15 => 
            array (
                'id' => 16,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 9,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2026-04-17 03:23:00',
                'ngay_cap_nhat' => '2026-04-17 03:23:00',
            ),
            16 => 
            array (
                'id' => 17,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 10,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-08-18 01:09:00',
                'ngay_cap_nhat' => '2025-08-18 01:09:00',
            ),
            17 => 
            array (
                'id' => 18,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 11,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-12-31 05:03:00',
                'ngay_cap_nhat' => '2024-12-31 05:03:00',
            ),
            18 => 
            array (
                'id' => 19,
                'ten_chu_de' => 'Chương 2: Đồ án nhóm',
                'lop_hoc_phan_id' => 11,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-01-04 13:40:00',
                'ngay_cap_nhat' => '2025-01-04 13:40:00',
            ),
            19 => 
            array (
                'id' => 20,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 12,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-06-26 20:59:00',
                'ngay_cap_nhat' => '2025-06-26 20:59:00',
            ),
            20 => 
            array (
                'id' => 21,
                'ten_chu_de' => 'Chương 2: Bài tập thực hành',
                'lop_hoc_phan_id' => 12,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-06-10 06:49:00',
                'ngay_cap_nhat' => '2025-06-10 06:49:00',
            ),
            21 => 
            array (
                'id' => 22,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 13,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2026-02-09 05:34:00',
                'ngay_cap_nhat' => '2026-02-09 05:34:00',
            ),
            22 => 
            array (
                'id' => 23,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 14,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2026-03-30 09:17:00',
                'ngay_cap_nhat' => '2026-03-30 09:17:00',
            ),
            23 => 
            array (
                'id' => 24,
                'ten_chu_de' => 'Chương 2: Kiểm tra cuối kỳ',
                'lop_hoc_phan_id' => 14,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-12-15 22:23:00',
                'ngay_cap_nhat' => '2025-12-15 22:23:00',
            ),
            24 => 
            array (
                'id' => 25,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 15,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-01-14 04:33:00',
                'ngay_cap_nhat' => '2024-01-14 04:33:00',
            ),
            25 => 
            array (
                'id' => 26,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 16,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-02-25 10:58:00',
                'ngay_cap_nhat' => '2025-02-25 10:58:00',
            ),
            26 => 
            array (
                'id' => 27,
                'ten_chu_de' => 'Chương 2: Kiểm tra cuối kỳ',
                'lop_hoc_phan_id' => 16,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-04-14 06:09:00',
                'ngay_cap_nhat' => '2024-04-14 06:09:00',
            ),
            27 => 
            array (
                'id' => 28,
                'ten_chu_de' => 'Chương 1: Thực hành trên lớp',
                'lop_hoc_phan_id' => 17,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-09-20 22:53:00',
                'ngay_cap_nhat' => '2025-09-20 22:53:00',
            ),
            28 => 
            array (
                'id' => 29,
                'ten_chu_de' => 'Chương 1: Kiểm tra cuối kỳ',
                'lop_hoc_phan_id' => 18,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-03-19 03:52:00',
                'ngay_cap_nhat' => '2024-03-19 03:52:00',
            ),
            29 => 
            array (
                'id' => 30,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 19,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-12-22 09:44:00',
                'ngay_cap_nhat' => '2024-12-22 09:44:00',
            ),
            30 => 
            array (
                'id' => 31,
                'ten_chu_de' => 'Chương 1: Bài tập thực hành',
                'lop_hoc_phan_id' => 20,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-09-03 16:48:00',
                'ngay_cap_nhat' => '2025-09-03 16:48:00',
            ),
            31 => 
            array (
                'id' => 32,
                'ten_chu_de' => 'Chương 2: Kiểm tra cuối kỳ',
                'lop_hoc_phan_id' => 20,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-06-25 22:19:00',
                'ngay_cap_nhat' => '2024-06-25 22:19:00',
            ),
            32 => 
            array (
                'id' => 33,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 21,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-05-11 22:09:00',
                'ngay_cap_nhat' => '2024-05-11 22:09:00',
            ),
            33 => 
            array (
                'id' => 34,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 22,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-08-02 04:05:00',
                'ngay_cap_nhat' => '2024-08-02 04:05:00',
            ),
            34 => 
            array (
                'id' => 35,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 23,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-03-04 15:48:00',
                'ngay_cap_nhat' => '2026-03-04 15:48:00',
            ),
            35 => 
            array (
                'id' => 36,
                'ten_chu_de' => 'Chương 2: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 23,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-02-13 06:06:00',
                'ngay_cap_nhat' => '2024-02-13 06:06:00',
            ),
            36 => 
            array (
                'id' => 37,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 24,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-05-01 08:02:00',
                'ngay_cap_nhat' => '2024-05-01 08:02:00',
            ),
            37 => 
            array (
                'id' => 38,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 25,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-01-11 03:50:00',
                'ngay_cap_nhat' => '2024-01-11 03:50:00',
            ),
            38 => 
            array (
                'id' => 39,
                'ten_chu_de' => 'Chương 1: Thực hành trên lớp',
                'lop_hoc_phan_id' => 26,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-07-23 05:42:00',
                'ngay_cap_nhat' => '2024-07-23 05:42:00',
            ),
            39 => 
            array (
                'id' => 40,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 27,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-05-16 23:17:00',
                'ngay_cap_nhat' => '2026-05-16 23:17:00',
            ),
            40 => 
            array (
                'id' => 41,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 27,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-12-22 11:10:00',
                'ngay_cap_nhat' => '2024-12-22 11:10:00',
            ),
            41 => 
            array (
                'id' => 42,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 28,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-04-19 18:48:00',
                'ngay_cap_nhat' => '2026-04-19 18:48:00',
            ),
            42 => 
            array (
                'id' => 43,
                'ten_chu_de' => 'Chương 1: Thực hành trên lớp',
                'lop_hoc_phan_id' => 29,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-07-15 09:10:00',
                'ngay_cap_nhat' => '2024-07-15 09:10:00',
            ),
            43 => 
            array (
                'id' => 44,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 30,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-05-31 22:30:00',
                'ngay_cap_nhat' => '2025-05-31 22:30:00',
            ),
            44 => 
            array (
                'id' => 45,
                'ten_chu_de' => 'Chương 1: Bài tập thực hành',
                'lop_hoc_phan_id' => 31,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-04-19 05:53:00',
                'ngay_cap_nhat' => '2024-04-19 05:53:00',
            ),
            45 => 
            array (
                'id' => 46,
                'ten_chu_de' => 'Chương 2: Thực hành trên lớp',
                'lop_hoc_phan_id' => 31,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-01-23 13:13:00',
                'ngay_cap_nhat' => '2025-01-23 13:13:00',
            ),
            46 => 
            array (
                'id' => 47,
                'ten_chu_de' => 'Chương 1: Kiểm tra cuối kỳ',
                'lop_hoc_phan_id' => 32,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-02-18 10:07:00',
                'ngay_cap_nhat' => '2026-02-18 10:07:00',
            ),
            47 => 
            array (
                'id' => 48,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 33,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-05-22 11:45:00',
                'ngay_cap_nhat' => '2025-05-22 11:45:00',
            ),
            48 => 
            array (
                'id' => 49,
                'ten_chu_de' => 'Chương 2: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 33,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-07-24 23:02:00',
                'ngay_cap_nhat' => '2025-07-24 23:02:00',
            ),
            49 => 
            array (
                'id' => 50,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 34,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-04-28 12:18:00',
                'ngay_cap_nhat' => '2024-04-28 12:18:00',
            ),
            50 => 
            array (
                'id' => 51,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 35,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-08-19 17:26:00',
                'ngay_cap_nhat' => '2024-08-19 17:26:00',
            ),
            51 => 
            array (
                'id' => 52,
                'ten_chu_de' => 'Chương 2: Đồ án nhóm',
                'lop_hoc_phan_id' => 35,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-05-25 13:12:00',
                'ngay_cap_nhat' => '2026-05-25 13:12:00',
            ),
            52 => 
            array (
                'id' => 53,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 36,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-01-11 05:00:00',
                'ngay_cap_nhat' => '2025-01-11 05:00:00',
            ),
            53 => 
            array (
                'id' => 54,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 37,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-06-19 21:43:00',
                'ngay_cap_nhat' => '2025-06-19 21:43:00',
            ),
            54 => 
            array (
                'id' => 55,
                'ten_chu_de' => 'Chương 2: Thực hành trên lớp',
                'lop_hoc_phan_id' => 37,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-05-02 04:25:00',
                'ngay_cap_nhat' => '2024-05-02 04:25:00',
            ),
            55 => 
            array (
                'id' => 56,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 38,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-03-07 11:12:00',
                'ngay_cap_nhat' => '2024-03-07 11:12:00',
            ),
            56 => 
            array (
                'id' => 57,
                'ten_chu_de' => 'Chương 2: Đồ án nhóm',
                'lop_hoc_phan_id' => 38,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-07-24 19:54:00',
                'ngay_cap_nhat' => '2024-07-24 19:54:00',
            ),
            57 => 
            array (
                'id' => 58,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 39,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-01-12 15:17:00',
                'ngay_cap_nhat' => '2026-01-12 15:17:00',
            ),
            58 => 
            array (
                'id' => 59,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 39,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2026-02-23 18:37:00',
                'ngay_cap_nhat' => '2026-02-23 18:37:00',
            ),
            59 => 
            array (
                'id' => 60,
                'ten_chu_de' => 'Chương 1: Kiểm tra cuối kỳ',
                'lop_hoc_phan_id' => 40,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-11-13 19:25:00',
                'ngay_cap_nhat' => '2025-11-13 19:25:00',
            ),
            60 => 
            array (
                'id' => 61,
                'ten_chu_de' => 'Chương 2: Bài tập thực hành',
                'lop_hoc_phan_id' => 40,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-06-07 08:09:00',
                'ngay_cap_nhat' => '2025-06-07 08:09:00',
            ),
            61 => 
            array (
                'id' => 62,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 41,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-05-16 15:14:00',
                'ngay_cap_nhat' => '2025-05-16 15:14:00',
            ),
            62 => 
            array (
                'id' => 63,
                'ten_chu_de' => 'Chương 2: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 41,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-05-17 00:06:00',
                'ngay_cap_nhat' => '2024-05-17 00:06:00',
            ),
            63 => 
            array (
                'id' => 64,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 42,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-11-25 00:11:00',
                'ngay_cap_nhat' => '2025-11-25 00:11:00',
            ),
            64 => 
            array (
                'id' => 65,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 43,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-09-28 19:06:00',
                'ngay_cap_nhat' => '2025-09-28 19:06:00',
            ),
            65 => 
            array (
                'id' => 66,
                'ten_chu_de' => 'Chương 2: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 43,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-11-07 16:49:00',
                'ngay_cap_nhat' => '2025-11-07 16:49:00',
            ),
            66 => 
            array (
                'id' => 67,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 44,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-11-08 15:31:00',
                'ngay_cap_nhat' => '2025-11-08 15:31:00',
            ),
            67 => 
            array (
                'id' => 68,
                'ten_chu_de' => 'Chương 2: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 44,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-09-24 17:21:00',
                'ngay_cap_nhat' => '2024-09-24 17:21:00',
            ),
            68 => 
            array (
                'id' => 69,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 45,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-06-20 03:24:00',
                'ngay_cap_nhat' => '2026-06-20 03:24:00',
            ),
            69 => 
            array (
                'id' => 70,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 46,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-03-29 14:02:00',
                'ngay_cap_nhat' => '2025-03-29 14:02:00',
            ),
            70 => 
            array (
                'id' => 71,
                'ten_chu_de' => 'Chương 2: Kiểm tra cuối kỳ',
                'lop_hoc_phan_id' => 46,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-06-30 17:42:00',
                'ngay_cap_nhat' => '2024-06-30 17:42:00',
            ),
            71 => 
            array (
                'id' => 72,
                'ten_chu_de' => 'Chương 1: Bài tập thực hành',
                'lop_hoc_phan_id' => 47,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-05-17 09:45:00',
                'ngay_cap_nhat' => '2024-05-17 09:45:00',
            ),
            72 => 
            array (
                'id' => 73,
                'ten_chu_de' => 'Chương 2: Thực hành trên lớp',
                'lop_hoc_phan_id' => 47,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-05-14 03:36:00',
                'ngay_cap_nhat' => '2025-05-14 03:36:00',
            ),
            73 => 
            array (
                'id' => 74,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 48,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2026-05-24 05:32:00',
                'ngay_cap_nhat' => '2026-05-24 05:32:00',
            ),
            74 => 
            array (
                'id' => 75,
                'ten_chu_de' => 'Chương 2: Thực hành trên lớp',
                'lop_hoc_phan_id' => 48,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-02-04 08:31:00',
                'ngay_cap_nhat' => '2025-02-04 08:31:00',
            ),
            75 => 
            array (
                'id' => 76,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 49,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-11-24 01:01:00',
                'ngay_cap_nhat' => '2024-11-24 01:01:00',
            ),
            76 => 
            array (
                'id' => 77,
                'ten_chu_de' => 'Chương 2: Kiểm tra cuối kỳ',
                'lop_hoc_phan_id' => 49,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-02-16 04:53:00',
                'ngay_cap_nhat' => '2024-02-16 04:53:00',
            ),
            77 => 
            array (
                'id' => 78,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 50,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-08-20 00:48:00',
                'ngay_cap_nhat' => '2025-08-20 00:48:00',
            ),
            78 => 
            array (
                'id' => 79,
                'ten_chu_de' => 'Chương 2: Kiểm tra cuối kỳ',
                'lop_hoc_phan_id' => 50,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-12-15 12:06:00',
                'ngay_cap_nhat' => '2024-12-15 12:06:00',
            ),
            79 => 
            array (
                'id' => 80,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 51,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-12-25 01:42:00',
                'ngay_cap_nhat' => '2024-12-25 01:42:00',
            ),
            80 => 
            array (
                'id' => 81,
                'ten_chu_de' => 'Chương 2: Bài tập thực hành',
                'lop_hoc_phan_id' => 51,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-09-10 07:41:00',
                'ngay_cap_nhat' => '2024-09-10 07:41:00',
            ),
            81 => 
            array (
                'id' => 82,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 52,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-06-08 09:07:00',
                'ngay_cap_nhat' => '2026-06-08 09:07:00',
            ),
            82 => 
            array (
                'id' => 83,
                'ten_chu_de' => 'Chương 2: Đồ án nhóm',
                'lop_hoc_phan_id' => 52,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-06-22 00:34:00',
                'ngay_cap_nhat' => '2024-06-22 00:34:00',
            ),
            83 => 
            array (
                'id' => 84,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 53,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2026-06-03 13:36:00',
                'ngay_cap_nhat' => '2026-06-03 13:36:00',
            ),
            84 => 
            array (
                'id' => 85,
                'ten_chu_de' => 'Chương 2: Thực hành trên lớp',
                'lop_hoc_phan_id' => 53,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-03-07 08:01:00',
                'ngay_cap_nhat' => '2025-03-07 08:01:00',
            ),
            85 => 
            array (
                'id' => 86,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 54,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-08-07 12:20:00',
                'ngay_cap_nhat' => '2025-08-07 12:20:00',
            ),
            86 => 
            array (
                'id' => 87,
                'ten_chu_de' => 'Chương 2: Bài tập thực hành',
                'lop_hoc_phan_id' => 54,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-04-10 15:06:00',
                'ngay_cap_nhat' => '2024-04-10 15:06:00',
            ),
            87 => 
            array (
                'id' => 88,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 55,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-05-29 21:21:00',
                'ngay_cap_nhat' => '2025-05-29 21:21:00',
            ),
            88 => 
            array (
                'id' => 89,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 56,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-03-22 06:31:00',
                'ngay_cap_nhat' => '2025-03-22 06:31:00',
            ),
            89 => 
            array (
                'id' => 90,
                'ten_chu_de' => 'Chương 1: Thực hành trên lớp',
                'lop_hoc_phan_id' => 57,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-09-28 01:19:00',
                'ngay_cap_nhat' => '2024-09-28 01:19:00',
            ),
            90 => 
            array (
                'id' => 91,
                'ten_chu_de' => 'Chương 1: Thực hành trên lớp',
                'lop_hoc_phan_id' => 58,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-04-04 22:54:00',
                'ngay_cap_nhat' => '2024-04-04 22:54:00',
            ),
            91 => 
            array (
                'id' => 92,
                'ten_chu_de' => 'Chương 2: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 58,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-04-07 18:21:00',
                'ngay_cap_nhat' => '2024-04-07 18:21:00',
            ),
            92 => 
            array (
                'id' => 93,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 59,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-05-01 13:13:00',
                'ngay_cap_nhat' => '2025-05-01 13:13:00',
            ),
            93 => 
            array (
                'id' => 94,
                'ten_chu_de' => 'Chương 2: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 59,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-03-25 02:41:00',
                'ngay_cap_nhat' => '2026-03-25 02:41:00',
            ),
            94 => 
            array (
                'id' => 95,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 60,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-07-06 10:12:00',
                'ngay_cap_nhat' => '2025-07-06 10:12:00',
            ),
            95 => 
            array (
                'id' => 96,
                'ten_chu_de' => 'Chương 2: Thực hành trên lớp',
                'lop_hoc_phan_id' => 60,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-02-15 08:39:00',
                'ngay_cap_nhat' => '2025-02-15 08:39:00',
            ),
            96 => 
            array (
                'id' => 97,
                'ten_chu_de' => 'Chương 1: Bài tập thực hành',
                'lop_hoc_phan_id' => 61,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-12-21 16:55:00',
                'ngay_cap_nhat' => '2025-12-21 16:55:00',
            ),
            97 => 
            array (
                'id' => 98,
                'ten_chu_de' => 'Chương 2: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 61,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-08-13 15:13:00',
                'ngay_cap_nhat' => '2025-08-13 15:13:00',
            ),
            98 => 
            array (
                'id' => 99,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 62,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2026-04-08 19:54:00',
                'ngay_cap_nhat' => '2026-04-08 19:54:00',
            ),
            99 => 
            array (
                'id' => 100,
                'ten_chu_de' => 'Chương 2: Đồ án nhóm',
                'lop_hoc_phan_id' => 62,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-08-02 23:40:00',
                'ngay_cap_nhat' => '2025-08-02 23:40:00',
            ),
            100 => 
            array (
                'id' => 101,
                'ten_chu_de' => 'Chương 1: Thực hành trên lớp',
                'lop_hoc_phan_id' => 63,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-04-18 04:15:00',
                'ngay_cap_nhat' => '2025-04-18 04:15:00',
            ),
            101 => 
            array (
                'id' => 102,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 64,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-02-24 10:55:00',
                'ngay_cap_nhat' => '2025-02-24 10:55:00',
            ),
            102 => 
            array (
                'id' => 103,
                'ten_chu_de' => 'Chương 1: Thực hành trên lớp',
                'lop_hoc_phan_id' => 65,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-09-30 09:41:00',
                'ngay_cap_nhat' => '2024-09-30 09:41:00',
            ),
            103 => 
            array (
                'id' => 104,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 66,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-09-07 07:25:00',
                'ngay_cap_nhat' => '2025-09-07 07:25:00',
            ),
            104 => 
            array (
                'id' => 105,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 67,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-07-15 00:15:00',
                'ngay_cap_nhat' => '2024-07-15 00:15:00',
            ),
            105 => 
            array (
                'id' => 106,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 68,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-03-22 13:41:00',
                'ngay_cap_nhat' => '2025-03-22 13:41:00',
            ),
            106 => 
            array (
                'id' => 107,
                'ten_chu_de' => 'Chương 2: Thực hành trên lớp',
                'lop_hoc_phan_id' => 68,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-07-25 05:17:00',
                'ngay_cap_nhat' => '2024-07-25 05:17:00',
            ),
            107 => 
            array (
                'id' => 108,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 69,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-03-19 08:42:00',
                'ngay_cap_nhat' => '2026-03-19 08:42:00',
            ),
            108 => 
            array (
                'id' => 109,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 70,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-05-12 00:03:00',
                'ngay_cap_nhat' => '2025-05-12 00:03:00',
            ),
            109 => 
            array (
                'id' => 110,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 71,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-11-01 02:57:00',
                'ngay_cap_nhat' => '2024-11-01 02:57:00',
            ),
            110 => 
            array (
                'id' => 111,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 72,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2026-06-25 02:25:00',
                'ngay_cap_nhat' => '2026-06-25 02:25:00',
            ),
            111 => 
            array (
                'id' => 112,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 72,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2026-05-12 04:15:00',
                'ngay_cap_nhat' => '2026-05-12 04:15:00',
            ),
            112 => 
            array (
                'id' => 113,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 73,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-11-11 18:49:00',
                'ngay_cap_nhat' => '2025-11-11 18:49:00',
            ),
            113 => 
            array (
                'id' => 114,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 74,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-09-06 03:49:00',
                'ngay_cap_nhat' => '2025-09-06 03:49:00',
            ),
            114 => 
            array (
                'id' => 115,
                'ten_chu_de' => 'Chương 2: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 74,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-12-03 18:47:00',
                'ngay_cap_nhat' => '2024-12-03 18:47:00',
            ),
            115 => 
            array (
                'id' => 116,
                'ten_chu_de' => 'Chương 1: Thực hành trên lớp',
                'lop_hoc_phan_id' => 75,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-05-27 03:11:00',
                'ngay_cap_nhat' => '2024-05-27 03:11:00',
            ),
            116 => 
            array (
                'id' => 117,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 75,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-10-08 14:26:00',
                'ngay_cap_nhat' => '2024-10-08 14:26:00',
            ),
            117 => 
            array (
                'id' => 118,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 76,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-01-18 22:07:00',
                'ngay_cap_nhat' => '2025-01-18 22:07:00',
            ),
            118 => 
            array (
                'id' => 119,
                'ten_chu_de' => 'Chương 2: Thực hành trên lớp',
                'lop_hoc_phan_id' => 76,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-07-12 13:30:00',
                'ngay_cap_nhat' => '2025-07-12 13:30:00',
            ),
            119 => 
            array (
                'id' => 120,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 77,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-01-06 15:45:00',
                'ngay_cap_nhat' => '2025-01-06 15:45:00',
            ),
            120 => 
            array (
                'id' => 121,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 78,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-09-12 01:53:00',
                'ngay_cap_nhat' => '2025-09-12 01:53:00',
            ),
            121 => 
            array (
                'id' => 122,
                'ten_chu_de' => 'Chương 2: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 78,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-11-09 01:44:00',
                'ngay_cap_nhat' => '2025-11-09 01:44:00',
            ),
            122 => 
            array (
                'id' => 123,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 79,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-01-28 09:40:00',
                'ngay_cap_nhat' => '2025-01-28 09:40:00',
            ),
            123 => 
            array (
                'id' => 124,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 80,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-05-28 14:24:00',
                'ngay_cap_nhat' => '2026-05-28 14:24:00',
            ),
            124 => 
            array (
                'id' => 125,
                'ten_chu_de' => 'Chương 2: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 80,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-02-06 08:19:00',
                'ngay_cap_nhat' => '2025-02-06 08:19:00',
            ),
            125 => 
            array (
                'id' => 126,
                'ten_chu_de' => 'Chương 1: Thực hành trên lớp',
                'lop_hoc_phan_id' => 81,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-08-03 05:58:00',
                'ngay_cap_nhat' => '2024-08-03 05:58:00',
            ),
            126 => 
            array (
                'id' => 127,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 82,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-02-20 01:17:00',
                'ngay_cap_nhat' => '2025-02-20 01:17:00',
            ),
            127 => 
            array (
                'id' => 128,
                'ten_chu_de' => 'Chương 2: Kiểm tra cuối kỳ',
                'lop_hoc_phan_id' => 82,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-04-22 15:30:00',
                'ngay_cap_nhat' => '2026-04-22 15:30:00',
            ),
            128 => 
            array (
                'id' => 129,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 83,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-06-16 03:52:00',
                'ngay_cap_nhat' => '2026-06-16 03:52:00',
            ),
            129 => 
            array (
                'id' => 130,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 83,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-12-16 08:32:00',
                'ngay_cap_nhat' => '2025-12-16 08:32:00',
            ),
            130 => 
            array (
                'id' => 131,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 84,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-09-08 23:52:00',
                'ngay_cap_nhat' => '2025-09-08 23:52:00',
            ),
            131 => 
            array (
                'id' => 132,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 85,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-02-19 01:41:00',
                'ngay_cap_nhat' => '2026-02-19 01:41:00',
            ),
            132 => 
            array (
                'id' => 133,
                'ten_chu_de' => 'Chương 2: Đồ án nhóm',
                'lop_hoc_phan_id' => 85,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-07-07 20:28:00',
                'ngay_cap_nhat' => '2024-07-07 20:28:00',
            ),
            133 => 
            array (
                'id' => 134,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 86,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-07-23 20:19:00',
                'ngay_cap_nhat' => '2024-07-23 20:19:00',
            ),
            134 => 
            array (
                'id' => 135,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 87,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-09-12 16:45:00',
                'ngay_cap_nhat' => '2024-09-12 16:45:00',
            ),
            135 => 
            array (
                'id' => 136,
                'ten_chu_de' => 'Chương 2: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 87,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2026-02-20 04:54:00',
                'ngay_cap_nhat' => '2026-02-20 04:54:00',
            ),
            136 => 
            array (
                'id' => 137,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 88,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-06-13 23:08:00',
                'ngay_cap_nhat' => '2026-06-13 23:08:00',
            ),
            137 => 
            array (
                'id' => 138,
                'ten_chu_de' => 'Chương 2: Thực hành trên lớp',
                'lop_hoc_phan_id' => 88,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-06-26 21:37:00',
                'ngay_cap_nhat' => '2024-06-26 21:37:00',
            ),
            138 => 
            array (
                'id' => 139,
                'ten_chu_de' => 'Chương 1: Ôn tập giữa kỳ',
                'lop_hoc_phan_id' => 89,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-02-28 11:11:00',
                'ngay_cap_nhat' => '2025-02-28 11:11:00',
            ),
            139 => 
            array (
                'id' => 140,
                'ten_chu_de' => 'Chương 2: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 89,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-06-16 12:53:00',
                'ngay_cap_nhat' => '2026-06-16 12:53:00',
            ),
            140 => 
            array (
                'id' => 141,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 90,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-07-25 20:39:00',
                'ngay_cap_nhat' => '2025-07-25 20:39:00',
            ),
            141 => 
            array (
                'id' => 142,
                'ten_chu_de' => 'Chương 1: Lý thuyết cơ bản',
                'lop_hoc_phan_id' => 91,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-07-22 08:44:00',
                'ngay_cap_nhat' => '2024-07-22 08:44:00',
            ),
            142 => 
            array (
                'id' => 143,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 92,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-09-24 13:38:00',
                'ngay_cap_nhat' => '2025-09-24 13:38:00',
            ),
            143 => 
            array (
                'id' => 144,
                'ten_chu_de' => 'Chương 1: Bài tập thực hành',
                'lop_hoc_phan_id' => 93,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-06-23 18:07:00',
                'ngay_cap_nhat' => '2024-06-23 18:07:00',
            ),
            144 => 
            array (
                'id' => 145,
                'ten_chu_de' => 'Chương 2: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 93,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-01-05 16:27:00',
                'ngay_cap_nhat' => '2026-01-05 16:27:00',
            ),
            145 => 
            array (
                'id' => 146,
                'ten_chu_de' => 'Tài liệu tham khảo môn học',
                'lop_hoc_phan_id' => 94,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-12-31 06:12:00',
                'ngay_cap_nhat' => '2025-12-31 06:12:00',
            ),
            146 => 
            array (
                'id' => 147,
                'ten_chu_de' => 'Chương 2: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 94,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-10-21 23:31:00',
                'ngay_cap_nhat' => '2024-10-21 23:31:00',
            ),
            147 => 
            array (
                'id' => 148,
                'ten_chu_de' => 'Chương 1: Bài tập thực hành',
                'lop_hoc_phan_id' => 95,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-09-06 06:52:00',
                'ngay_cap_nhat' => '2025-09-06 06:52:00',
            ),
            148 => 
            array (
                'id' => 149,
                'ten_chu_de' => 'Chương 2: Thực hành trên lớp',
                'lop_hoc_phan_id' => 95,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2026-01-14 21:12:00',
                'ngay_cap_nhat' => '2026-01-14 21:12:00',
            ),
            149 => 
            array (
                'id' => 150,
                'ten_chu_de' => 'Chương 1: Bài tập thực hành',
                'lop_hoc_phan_id' => 96,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-01-30 09:16:00',
                'ngay_cap_nhat' => '2024-01-30 09:16:00',
            ),
            150 => 
            array (
                'id' => 151,
                'ten_chu_de' => 'Chương 2: Thực hành trên lớp',
                'lop_hoc_phan_id' => 96,
                'thu_tu' => 2,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-09-24 14:58:00',
                'ngay_cap_nhat' => '2025-09-24 14:58:00',
            ),
            151 => 
            array (
                'id' => 152,
                'ten_chu_de' => 'Chương 1: Đồ án nhóm',
                'lop_hoc_phan_id' => 97,
                'thu_tu' => 1,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2025-12-01 20:29:00',
                'ngay_cap_nhat' => '2025-12-01 20:29:00',
            ),
            152 => 
            array (
                'id' => 153,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 98,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-05-16 10:44:00',
                'ngay_cap_nhat' => '2024-05-16 10:44:00',
            ),
            153 => 
            array (
                'id' => 154,
                'ten_chu_de' => 'Chương 1: Thực hành trên lớp',
                'lop_hoc_phan_id' => 99,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2025-12-26 13:47:00',
                'ngay_cap_nhat' => '2025-12-26 13:47:00',
            ),
            154 => 
            array (
                'id' => 155,
                'ten_chu_de' => 'Chương 2: Đồ án nhóm',
                'lop_hoc_phan_id' => 99,
                'thu_tu' => 2,
                'trang_thai' => 'da_dong',
                'ngay_tao' => '2024-09-19 02:06:00',
                'ngay_cap_nhat' => '2024-09-19 02:06:00',
            ),
            155 => 
            array (
                'id' => 156,
                'ten_chu_de' => 'Chương 1: Giới thiệu tổng quan',
                'lop_hoc_phan_id' => 100,
                'thu_tu' => 1,
                'trang_thai' => 'dang_mo',
                'ngay_tao' => '2024-08-28 15:58:00',
                'ngay_cap_nhat' => '2024-08-28 15:58:00',
            ),
        ));
        
        
    }
}