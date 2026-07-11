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
        if (Schema::hasTable('bai_nop') && !Schema::hasColumn('bai_nop', 'ten_file')) {
            Schema::table('bai_nop', function (Blueprint $table) {
                $table->string('ten_file', 255)->nullable()->after('duong_dan_file');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasTable('bai_nop') && Schema::hasColumn('bai_nop', 'ten_file')) {
            Schema::table('bai_nop', function (Blueprint $table) {
                $table->dropColumn('ten_file');
            });
        }
    }
};
