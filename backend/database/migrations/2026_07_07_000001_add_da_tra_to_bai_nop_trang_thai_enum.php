<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('bai_nop')) {
            DB::statement("SET sql_mode = ''");
            DB::statement("ALTER TABLE bai_nop MODIFY trang_thai ENUM('da_nop', 'nop_muon', 'da_cham', 'da_tra') NULL DEFAULT 'da_nop'");
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('bai_nop')) {
            DB::statement("SET sql_mode = ''");
            DB::statement("UPDATE bai_nop SET trang_thai = 'da_cham' WHERE trang_thai = 'da_tra'");
            DB::statement("ALTER TABLE bai_nop MODIFY trang_thai ENUM('da_nop', 'nop_muon', 'da_cham') NULL DEFAULT 'da_nop'");
        }
    }
};
