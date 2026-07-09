<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class KhoaTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('khoa')->delete();
        
        \DB::table('khoa')->insert(array (
            0 => 
            array (
                'id' => 1,
                'ma_khoa' => 'CNTT',
                'ten_khoa' => 'Khoa Công nghệ Thông tin',
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-20 13:01:00',
                'ngay_cap_nhat' => '2024-07-20 13:01:00',
                'truong_khoa' => 'ThS. Nguyễn Văn Hùng',
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'ma_khoa' => 'CK',
                'ten_khoa' => 'Khoa Cơ khí',
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-23 18:15:00',
                'ngay_cap_nhat' => '2024-07-23 18:15:00',
                'truong_khoa' => 'ThS. Trần Văn Bình',
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'ma_khoa' => 'DDT',
                'ten_khoa' => 'Khoa Điện - Điện tử',
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-07 14:47:00',
                'ngay_cap_nhat' => '2024-07-07 14:47:00',
                'truong_khoa' => 'TS. Lê Quang Huy',
                'deleted_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'ma_khoa' => 'CKDL',
                'ten_khoa' => 'Khoa Cơ khí Động lực',
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-04 07:47:00',
                'ngay_cap_nhat' => '2024-07-04 07:47:00',
                'truong_khoa' => 'ThS. Phạm Văn Sơn',
                'deleted_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'ma_khoa' => 'KT',
                'ten_khoa' => 'Khoa Kinh tế',
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-29 03:05:00',
                'ngay_cap_nhat' => '2024-07-29 03:05:00',
                'truong_khoa' => 'ThS. Hoàng Thị Lan',
                'deleted_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'ma_khoa' => 'XD',
                'ten_khoa' => 'Khoa Xây dựng',
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-18 23:02:00',
                'ngay_cap_nhat' => '2024-07-18 23:02:00',
                'truong_khoa' => 'ThS. Đỗ Văn Tài',
                'deleted_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'ma_khoa' => 'NN',
                'ten_khoa' => 'Khoa Ngoại ngữ',
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-06-30 12:13:00',
                'ngay_cap_nhat' => '2024-06-30 12:13:00',
                'truong_khoa' => 'ThS. Vũ Thị Mai',
                'deleted_at' => NULL,
            ),
            7 => 
            array (
                'id' => 8,
                'ma_khoa' => 'HOA',
                'ten_khoa' => 'Khoa Công nghệ Hóa học',
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-08 02:38:00',
                'ngay_cap_nhat' => '2024-07-08 02:38:00',
                'truong_khoa' => 'TS. Ngô Thị Hương',
                'deleted_at' => NULL,
            ),
            8 => 
            array (
                'id' => 9,
                'ma_khoa' => 'DL',
                'ten_khoa' => 'Khoa Du lịch - Nhà hàng',
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-01 03:12:00',
                'ngay_cap_nhat' => '2024-07-01 03:12:00',
                'truong_khoa' => 'ThS. Bùi Văn Long',
                'deleted_at' => NULL,
            ),
            9 => 
            array (
                'id' => 10,
                'ma_khoa' => 'SP',
                'ten_khoa' => 'Khoa Lý luận Chính trị',
                'trang_thai' => 'dang_hoat_dong',
                'ngay_tao' => '2024-07-23 06:44:00',
                'ngay_cap_nhat' => '2024-07-23 06:44:00',
                'truong_khoa' => 'ThS. Đặng Văn Minh',
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}