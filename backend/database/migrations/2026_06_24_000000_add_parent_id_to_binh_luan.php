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
        if (Schema::hasTable('binh_luan') && !Schema::hasColumn('binh_luan', 'binh_luan_cha_id')) {
            Schema::table('binh_luan', function (Blueprint $table) {
                $table->foreignId('binh_luan_cha_id')->nullable()->after('bai_viet_id')->constrained('binh_luan')->onDelete('cascade');
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
