<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('bai_viet')) {
            return;
        }
        Schema::table('bai_viet', function (Blueprint $table) {
            if (!Schema::hasColumn('bai_viet', 'diem_toi_da')) {
                $table->decimal('diem_toi_da', 5, 1)->default(10);
            }
            if (!Schema::hasColumn('bai_viet', 'han_nop')) {
                $table->datetime('han_nop')->nullable();
            }
            if (!Schema::hasColumn('bai_viet', 'cho_phep_nop_tre')) {
                $table->boolean('cho_phep_nop_tre')->default(false);
            }
            if (!Schema::hasColumn('bai_viet', 'tyle_phat_tre')) {
                $table->integer('tyle_phat_tre')->default(10);
            }
        });
    }

    public function down(): void
    {
        Schema::table('bai_viet', function (Blueprint $table) {
            $columns = ['diem_toi_da', 'han_nop', 'cho_phep_nop_tre', 'tyle_phat_tre'];
            foreach ($columns as $col) {
                if (Schema::hasColumn('bai_viet', $col)) {
                    $table->dropColumn($col);
                }
            }
        });
    }
};
