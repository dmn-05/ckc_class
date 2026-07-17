<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (DB::getDriverName() === 'mysql') {
            DB::statement("SET sql_mode = ''");

            if (Schema::hasTable('bai_viet')) {
                DB::statement("ALTER TABLE bai_viet MODIFY trang_thai ENUM('hien_thi', 'an', 'da_xoa') NULL DEFAULT 'hien_thi'");
            }
            if (Schema::hasTable('binh_luan')) {
                DB::statement("ALTER TABLE binh_luan MODIFY trang_thai ENUM('hien_thi', 'an', 'da_xoa') NULL DEFAULT 'hien_thi'");
            }
            if (Schema::hasTable('bai_tap')) {
                DB::statement("ALTER TABLE bai_tap MODIFY trang_thai ENUM('hien_thi', 'an', 'da_xoa') NULL DEFAULT 'hien_thi'");
            }
            if (Schema::hasTable('bai_kiem_tra')) {
                DB::statement("ALTER TABLE bai_kiem_tra MODIFY trang_thai ENUM('nhap', 'hien_thi', 'an', 'da_xoa') NULL DEFAULT 'nhap'");
            }
            if (Schema::hasTable('tai_lieu')) {
                DB::statement("ALTER TABLE tai_lieu MODIFY trang_thai ENUM('hien_thi', 'an', 'da_xoa') NULL DEFAULT 'hien_thi'");
            }
            if (Schema::hasTable('thong_bao')) {
                DB::statement("ALTER TABLE thong_bao MODIFY trang_thai ENUM('hien_thi', 'an', 'da_xoa') NULL DEFAULT 'hien_thi'");
            }
        }
    }

    public function down(): void
    {
        if (DB::getDriverName() === 'mysql') {
            DB::statement("SET sql_mode = ''");

            if (Schema::hasTable('bai_viet')) {
                DB::statement("UPDATE bai_viet SET trang_thai = 'an' WHERE trang_thai = 'da_xoa'");
                DB::statement("ALTER TABLE bai_viet MODIFY trang_thai ENUM('hien_thi', 'an') NULL DEFAULT 'hien_thi'");
            }
            if (Schema::hasTable('binh_luan')) {
                DB::statement("UPDATE binh_luan SET trang_thai = 'an' WHERE trang_thai = 'da_xoa'");
                DB::statement("ALTER TABLE binh_luan MODIFY trang_thai ENUM('hien_thi', 'an') NULL DEFAULT 'hien_thi'");
            }
            if (Schema::hasTable('bai_tap')) {
                DB::statement("UPDATE bai_tap SET trang_thai = 'an' WHERE trang_thai = 'da_xoa'");
                DB::statement("ALTER TABLE bai_tap MODIFY trang_thai ENUM('hien_thi', 'an') NULL DEFAULT 'hien_thi'");
            }
            if (Schema::hasTable('bai_kiem_tra')) {
                DB::statement("UPDATE bai_kiem_tra SET trang_thai = 'an' WHERE trang_thai = 'da_xoa'");
                DB::statement("ALTER TABLE bai_kiem_tra MODIFY trang_thai ENUM('nhap', 'hien_thi', 'an') NULL DEFAULT 'nhap'");
            }
            if (Schema::hasTable('tai_lieu')) {
                DB::statement("UPDATE tai_lieu SET trang_thai = 'an' WHERE trang_thai = 'da_xoa'");
                DB::statement("ALTER TABLE tai_lieu MODIFY trang_thai ENUM('hien_thi', 'an') NULL DEFAULT 'hien_thi'");
            }
            if (Schema::hasTable('thong_bao')) {
                DB::statement("UPDATE thong_bao SET trang_thai = 'an' WHERE trang_thai = 'da_xoa'");
                DB::statement("ALTER TABLE thong_bao MODIFY trang_thai ENUM('hien_thi', 'an') NULL DEFAULT 'hien_thi'");
            }
        }
    }
};
