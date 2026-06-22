<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('khoa', function (Blueprint $table) {
            if (!Schema::hasColumn('khoa', 'truong_khoa')) {
                $table->string('truong_khoa', 100)->nullable()->after('ten_khoa');
            }
        });

        Schema::table('bo_mon', function (Blueprint $table) {
            if (!Schema::hasColumn('bo_mon', 'truong_bo_mon')) {
                $table->string('truong_bo_mon', 100)->nullable()->after('ten_bo_mon');
            }
        });

        // Ensure ENUM for trang_thai contains 'cho_phe_duyet' in both tables
        DB::statement("ALTER TABLE khoa MODIFY COLUMN trang_thai ENUM('dang_hoat_dong', 'ngung_hoat_dong', 'cho_phe_duyet') DEFAULT 'dang_hoat_dong'");
        DB::statement("ALTER TABLE bo_mon MODIFY COLUMN trang_thai ENUM('dang_hoat_dong', 'ngung_hoat_dong', 'cho_phe_duyet') DEFAULT 'dang_hoat_dong'");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('khoa', function (Blueprint $table) {
            if (Schema::hasColumn('khoa', 'truong_khoa')) {
                $table->dropColumn('truong_khoa');
            }
        });

        Schema::table('bo_mon', function (Blueprint $table) {
            if (Schema::hasColumn('bo_mon', 'truong_bo_mon')) {
                $table->dropColumn('truong_bo_mon');
            }
        });

        // Reverting the ENUM might drop the new state if it exists in data, so we usually just leave the ENUM type alone or revert it carefully
        DB::statement("ALTER TABLE khoa MODIFY COLUMN trang_thai ENUM('dang_hoat_dong', 'ngung_hoat_dong') DEFAULT 'dang_hoat_dong'");
        DB::statement("ALTER TABLE bo_mon MODIFY COLUMN trang_thai ENUM('dang_hoat_dong', 'ngung_hoat_dong') DEFAULT 'dang_hoat_dong'");
    }
};
