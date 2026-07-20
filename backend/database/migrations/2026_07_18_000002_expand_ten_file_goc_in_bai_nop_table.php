<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (DB::getDriverName() === 'mysql') {
            if (Schema::hasTable('bai_nop')) {
                DB::statement("ALTER TABLE bai_nop MODIFY ten_file_goc VARCHAR(255) NULL DEFAULT NULL");
            }
            if (Schema::hasTable('tep_tin')) {
                DB::statement("ALTER TABLE tep_tin MODIFY duong_dan TEXT NULL DEFAULT NULL");
                DB::statement("ALTER TABLE tep_tin MODIFY ten_file VARCHAR(255) NULL DEFAULT NULL");
                DB::statement("ALTER TABLE tep_tin MODIFY ten_file_luu VARCHAR(255) NULL DEFAULT NULL");
            }
        }
    }

    public function down(): void
    {
        if (DB::getDriverName() === 'mysql') {
            if (Schema::hasTable('bai_nop')) {
                DB::statement("ALTER TABLE bai_nop MODIFY ten_file_goc VARCHAR(50) NULL DEFAULT NULL");
            }
            if (Schema::hasTable('tep_tin')) {
                DB::statement("ALTER TABLE tep_tin MODIFY duong_dan VARCHAR(255) NOT NULL");
            }
        }
    }
};
