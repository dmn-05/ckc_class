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
        $tables = ['khoa', 'bo_mon', 'giang_vien', 'sinh_vien', 'mon_hoc', 'lop'];

        foreach ($tables as $table) {
            Schema::table($table, function (Blueprint $tableBlueprint) use ($table) {
                if (!Schema::hasColumn($table, 'deleted_at')) {
                    $tableBlueprint->softDeletes();
                }
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $tables = ['khoa', 'bo_mon', 'giang_vien', 'sinh_vien', 'mon_hoc', 'lop'];

        foreach ($tables as $table) {
            Schema::table($table, function (Blueprint $tableBlueprint) use ($table) {
                if (Schema::hasColumn($table, 'deleted_at')) {
                    $tableBlueprint->dropSoftDeletes();
                }
            });
        }
    }
};
