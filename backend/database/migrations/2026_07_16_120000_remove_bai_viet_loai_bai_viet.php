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
        if (Schema::hasTable('bai_viet')) {
            // Update existing records from 'bai_viet' to 'thong_bao'
            DB::table('bai_viet')
                ->where('loai_bai_viet', 'bai_viet')
                ->orWhereNull('loai_bai_viet')
                ->orWhere('loai_bai_viet', '')
                ->update(['loai_bai_viet' => 'thong_bao']);

            // Change default value of column loai_bai_viet to 'thong_bao'
            try {
                DB::statement("ALTER TABLE bai_viet ALTER COLUMN loai_bai_viet SET DEFAULT 'thong_bao'");
            } catch (\Exception $e) {
                // MySQL fallback syntax if needed
                try {
                    DB::statement("ALTER TABLE bai_viet MODIFY loai_bai_viet VARCHAR(50) DEFAULT 'thong_bao'");
                } catch (\Exception $ex) {
                    // Ignore if syntax differs by engine
                }
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // No reverse required as 'bai_viet' status is deprecated
    }
};
