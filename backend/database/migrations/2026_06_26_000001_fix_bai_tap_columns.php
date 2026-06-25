<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // Tắt strict mode để tránh warning -> error khi đổi ENUM
        DB::statement("SET sql_mode = ''");

        // Đổi ENUM trước (bao gồm cả giá trị cũ để tránh truncate)
        DB::statement("ALTER TABLE bai_tap MODIFY trang_thai ENUM('dang_mo','da_dong','hien_thi','an') NULL DEFAULT 'hien_thi'");

        // Cập nhật dữ liệu cũ
        DB::statement("UPDATE bai_tap SET trang_thai = 'hien_thi' WHERE trang_thai = 'dang_mo' OR trang_thai IS NULL");
        DB::statement("UPDATE bai_tap SET trang_thai = 'an' WHERE trang_thai = 'da_dong'");

        // Thu hẹp ENUM về đúng giá trị mới
        DB::statement("ALTER TABLE bai_tap MODIFY trang_thai ENUM('hien_thi','an') NOT NULL DEFAULT 'hien_thi'");

        // Đổi tên cột mo_ta -> noi_dung nếu cần
        if (Schema::hasColumn('bai_tap', 'mo_ta') && !Schema::hasColumn('bai_tap', 'noi_dung')) {
            DB::statement("ALTER TABLE bai_tap CHANGE mo_ta noi_dung TEXT NULL");
        }

        // Đổi tên cột duong_dan_file -> huong_dan nếu cần
        if (Schema::hasColumn('bai_tap', 'duong_dan_file') && !Schema::hasColumn('bai_tap', 'huong_dan')) {
            DB::statement("ALTER TABLE bai_tap CHANGE duong_dan_file huong_dan TEXT NULL");
        }

        // Thêm cột còn thiếu
        Schema::table('bai_tap', function (Blueprint $table) {
            if (!Schema::hasColumn('bai_tap', 'noi_dung')) {
                $table->text('noi_dung')->nullable()->after('tieu_de');
            }
            if (!Schema::hasColumn('bai_tap', 'huong_dan')) {
                $table->text('huong_dan')->nullable()->after('noi_dung');
            }
        });
    }

    public function down(): void
    {
        DB::statement("SET sql_mode = ''");
        DB::statement("ALTER TABLE bai_tap MODIFY trang_thai ENUM('dang_mo','da_dong','hien_thi','an') NULL DEFAULT 'dang_mo'");
        DB::statement("UPDATE bai_tap SET trang_thai = 'dang_mo' WHERE trang_thai = 'hien_thi'");
        DB::statement("UPDATE bai_tap SET trang_thai = 'da_dong' WHERE trang_thai = 'an'");
        DB::statement("ALTER TABLE bai_tap MODIFY trang_thai ENUM('dang_mo','da_dong') NULL DEFAULT 'dang_mo'");
    }
};
