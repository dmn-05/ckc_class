<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // Nếu cột duong_dan_file tồn tại thì đổi tên thành file_url
        if (Schema::hasColumn('bai_tap', 'duong_dan_file') && !Schema::hasColumn('bai_tap', 'file_url')) {
            DB::statement("ALTER TABLE bai_tap CHANGE duong_dan_file file_url TEXT NULL");
        }

        // Nếu cả hai đều không tồn tại thì tạo mới
        if (!Schema::hasColumn('bai_tap', 'file_url') && !Schema::hasColumn('bai_tap', 'duong_dan_file')) {
            Schema::table('bai_tap', function (Blueprint $table) {
                $table->text('file_url')->nullable()->after('huong_dan');
            });
        }

        // Đảm bảo cột file_name tồn tại để lưu tên file gốc
        if (!Schema::hasColumn('bai_tap', 'file_name')) {
            Schema::table('bai_tap', function (Blueprint $table) {
                $table->string('file_name')->nullable()->after('file_url');
            });
        }
    }

    public function down(): void
    {
        Schema::table('bai_tap', function (Blueprint $table) {
            if (Schema::hasColumn('bai_tap', 'file_url')) {
                $table->dropColumn('file_url');
            }
            if (Schema::hasColumn('bai_tap', 'file_name')) {
                $table->dropColumn('file_name');
            }
        });
    }
};
