<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (Schema::hasTable('binh_luan')) {
            Schema::table('binh_luan', function (Blueprint $table) {
                if (Schema::hasColumn('binh_luan', 'binh_luan_cha_id')) {
                    $table->dropColumn('binh_luan_cha_id');
                }
            });

            Schema::table('binh_luan', function (Blueprint $table) {
                // Khớp đúng kiểu dữ liệu INT (signed) theo cấu trúc bảng hiện tại
                $table->integer('binh_luan_cha_id')->nullable()->after('bai_viet_id');
                $table->foreign('binh_luan_cha_id')->references('id')->on('binh_luan')->onDelete('cascade');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasTable('binh_luan') && Schema::hasColumn('binh_luan', 'binh_luan_cha_id')) {
            Schema::table('binh_luan', function (Blueprint $table) {
                $table->dropForeign(['binh_luan_cha_id']);
                $table->dropColumn('binh_luan_cha_id');
            });
        }
    }
};
