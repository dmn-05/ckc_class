<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BoMonTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('bo_mon')->delete();
        
        \DB::table('bo_mon')->insert(array (
            0 => 
            array (
                'id' => 1,
                'ma_bo_mon' => 'BM011',
                'ten_bo_mon' => 'Bộ môn Công nghệ Phần mềm',
                'khoa_id' => 1,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-08-03 23:14:00',
                'ngay_cap_nhat' => '2024-08-03 23:14:00',
                'truong_bo_mon' => 'ThS. Bùi Thị Ngọc',
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'ma_bo_mon' => 'BM012',
                'ten_bo_mon' => 'Bộ môn Hệ thống Mạng & ATTT',
                'khoa_id' => 1,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-08-06 18:51:00',
                'ngay_cap_nhat' => '2024-08-06 18:51:00',
                'truong_bo_mon' => 'ThS. Nguyễn Thị Hoa',
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'ma_bo_mon' => 'BM021',
                'ten_bo_mon' => 'Bộ môn Cơ khí Chế tạo máy',
                'khoa_id' => 2,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-08-17 15:44:00',
                'ngay_cap_nhat' => '2024-08-17 15:44:00',
                'truong_bo_mon' => 'ThS. Đỗ Văn Phúc',
                'deleted_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'ma_bo_mon' => 'BM022',
                'ten_bo_mon' => 'Bộ môn Cơ khí Chính xác',
                'khoa_id' => 2,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-21 18:09:00',
                'ngay_cap_nhat' => '2024-07-21 18:09:00',
                'truong_bo_mon' => 'ThS. Phạm Văn Khoa',
                'deleted_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'ma_bo_mon' => 'BM031',
                'ten_bo_mon' => 'Bộ môn Điện công nghiệp',
                'khoa_id' => 3,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-08-17 20:06:00',
                'ngay_cap_nhat' => '2024-08-17 20:06:00',
                'truong_bo_mon' => 'ThS. Trần Văn Đức',
                'deleted_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'ma_bo_mon' => 'BM032',
                'ten_bo_mon' => 'Bộ môn Điện tử Viễn thông',
                'khoa_id' => 3,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-24 13:22:00',
                'ngay_cap_nhat' => '2024-07-24 13:22:00',
                'truong_bo_mon' => 'ThS. Vũ Thị Hằng',
                'deleted_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'ma_bo_mon' => 'BM041',
                'ten_bo_mon' => 'Bộ môn Công nghệ Ô tô',
                'khoa_id' => 4,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-08-07 18:51:00',
                'ngay_cap_nhat' => '2024-08-07 18:51:00',
                'truong_bo_mon' => 'ThS. Nguyễn Thị Hoa',
                'deleted_at' => NULL,
            ),
            7 => 
            array (
                'id' => 8,
                'ma_bo_mon' => 'BM042',
                'ten_bo_mon' => 'Bộ môn Cơ điện tử',
                'khoa_id' => 4,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-08-16 00:34:00',
                'ngay_cap_nhat' => '2024-08-16 00:34:00',
                'truong_bo_mon' => 'ThS. Trần Văn Đức',
                'deleted_at' => NULL,
            ),
            8 => 
            array (
                'id' => 9,
                'ma_bo_mon' => 'BM051',
                'ten_bo_mon' => 'Bộ môn Kế toán - Tài chính',
                'khoa_id' => 5,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-08-28 22:05:00',
                'ngay_cap_nhat' => '2024-08-28 22:05:00',
                'truong_bo_mon' => 'ThS. Hoàng Văn Nam',
                'deleted_at' => NULL,
            ),
            9 => 
            array (
                'id' => 10,
                'ma_bo_mon' => 'BM052',
                'ten_bo_mon' => 'Bộ môn Quản trị Kinh doanh',
                'khoa_id' => 5,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-08-23 06:39:00',
                'ngay_cap_nhat' => '2024-08-23 06:39:00',
                'truong_bo_mon' => 'ThS. Vũ Thị Hằng',
                'deleted_at' => NULL,
            ),
            10 => 
            array (
                'id' => 11,
                'ma_bo_mon' => 'BM061',
                'ten_bo_mon' => 'Bộ môn Xây dựng Dân dụng',
                'khoa_id' => 6,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-08-05 16:45:00',
                'ngay_cap_nhat' => '2024-08-05 16:45:00',
                'truong_bo_mon' => 'ThS. Trần Văn Đức',
                'deleted_at' => NULL,
            ),
            11 => 
            array (
                'id' => 12,
                'ma_bo_mon' => 'BM062',
                'ten_bo_mon' => 'Bộ môn Trắc địa',
                'khoa_id' => 6,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-03 07:14:00',
                'ngay_cap_nhat' => '2024-07-03 07:14:00',
                'truong_bo_mon' => 'ThS. Hoàng Văn Nam',
                'deleted_at' => NULL,
            ),
            12 => 
            array (
                'id' => 13,
                'ma_bo_mon' => 'BM071',
                'ten_bo_mon' => 'Bộ môn Anh văn',
                'khoa_id' => 7,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-05 17:55:00',
                'ngay_cap_nhat' => '2024-07-05 17:55:00',
                'truong_bo_mon' => 'ThS. Trần Văn Đức',
                'deleted_at' => NULL,
            ),
            13 => 
            array (
                'id' => 14,
                'ma_bo_mon' => 'BM072',
                'ten_bo_mon' => 'Bộ môn Nhật văn',
                'khoa_id' => 7,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-24 18:29:00',
                'ngay_cap_nhat' => '2024-07-24 18:29:00',
                'truong_bo_mon' => 'ThS. Vũ Thị Hằng',
                'deleted_at' => NULL,
            ),
            14 => 
            array (
                'id' => 15,
                'ma_bo_mon' => 'BM081',
                'ten_bo_mon' => 'Bộ môn Hóa Phân tích',
                'khoa_id' => 8,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-10 21:22:00',
                'ngay_cap_nhat' => '2024-07-10 21:22:00',
                'truong_bo_mon' => 'ThS. Phạm Văn Khoa',
                'deleted_at' => NULL,
            ),
            15 => 
            array (
                'id' => 16,
                'ma_bo_mon' => 'BM082',
                'ten_bo_mon' => 'Bộ môn Công nghệ Hóa Vật liệu',
                'khoa_id' => 8,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-08-11 18:44:00',
                'ngay_cap_nhat' => '2024-08-11 18:44:00',
                'truong_bo_mon' => 'ThS. Trần Văn Đức',
                'deleted_at' => NULL,
            ),
            16 => 
            array (
                'id' => 17,
                'ma_bo_mon' => 'BM091',
                'ten_bo_mon' => 'Bộ môn Quản trị Du lịch',
                'khoa_id' => 9,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-08-08 06:10:00',
                'ngay_cap_nhat' => '2024-08-08 06:10:00',
                'truong_bo_mon' => 'ThS. Phạm Văn Khoa',
                'deleted_at' => NULL,
            ),
            17 => 
            array (
                'id' => 18,
                'ma_bo_mon' => 'BM092',
                'ten_bo_mon' => 'Bộ môn Kỹ thuật Nhà hàng',
                'khoa_id' => 9,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-11 00:24:00',
                'ngay_cap_nhat' => '2024-07-11 00:24:00',
                'truong_bo_mon' => 'ThS. Hoàng Văn Nam',
                'deleted_at' => NULL,
            ),
            18 => 
            array (
                'id' => 19,
                'ma_bo_mon' => 'BM101',
                'ten_bo_mon' => 'Bộ môn Giáo dục Chính trị',
                'khoa_id' => 10,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-08-29 06:44:00',
                'ngay_cap_nhat' => '2024-08-29 06:44:00',
                'truong_bo_mon' => 'ThS. Phạm Văn Khoa',
                'deleted_at' => NULL,
            ),
            19 => 
            array (
                'id' => 20,
                'ma_bo_mon' => 'BM102',
                'ten_bo_mon' => 'Bộ môn Giáo dục Thể chất',
                'khoa_id' => 10,
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-08-12 20:53:00',
                'ngay_cap_nhat' => '2024-08-12 20:53:00',
                'truong_bo_mon' => 'ThS. Nguyễn Thị Hoa',
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}