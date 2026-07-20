<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        if (Schema::hasTable('lop_hoc_phan')) {
            if (!Schema::hasColumn('lop_hoc_phan', 'lop_id')) {
                Schema::table('lop_hoc_phan', function (Blueprint $table) {
                    $table->integer('lop_id')->nullable()->after('mon_hoc_id');
                });
            } else {
                Schema::table('lop_hoc_phan', function (Blueprint $table) {
                    $table->integer('lop_id')->nullable()->change();
                });
            }

            // Check if foreign key exists before adding
            $foreignKeys = DB::select("
                SELECT CONSTRAINT_NAME 
                FROM information_schema.KEY_COLUMN_USAGE 
                WHERE TABLE_SCHEMA = DATABASE() 
                AND TABLE_NAME = 'lop_hoc_phan' 
                AND CONSTRAINT_NAME = 'lop_hoc_phan_lop_id_foreign'
            ");

            if (empty($foreignKeys)) {
                try {
                    Schema::table('lop_hoc_phan', function (Blueprint $table) {
                        $table->foreign('lop_id')->references('id')->on('lop')->onDelete('set null');
                    });
                } catch (\Exception $e) {
                    // Ignore foreign key error if already added or types slightly mismatch in some MySQL envs
                }
            }

            // Backfill lop_id for existing course sections from enrolled students
            $sections = DB::table('lop_hoc_phan')->get();
            foreach ($sections as $sec) {
                $mostCommonLopId = DB::table('sinh_vien_lop_hoc_phan')
                    ->join('sinh_vien', 'sinh_vien_lop_hoc_phan.sinh_vien_id', '=', 'sinh_vien.id')
                    ->where('sinh_vien_lop_hoc_phan.lop_hoc_phan_id', $sec->id)
                    ->whereNotNull('sinh_vien.lop_id')
                    ->select('sinh_vien.lop_id', DB::raw('count(*) as total'))
                    ->groupBy('sinh_vien.lop_id')
                    ->orderByDesc('total')
                    ->value('sinh_vien.lop_id');

                if ($mostCommonLopId) {
                    DB::table('lop_hoc_phan')->where('id', $sec->id)->update(['lop_id' => $mostCommonLopId]);
                }
            }
        }
    }

    public function down()
    {
        if (Schema::hasTable('lop_hoc_phan') && Schema::hasColumn('lop_hoc_phan', 'lop_id')) {
            Schema::table('lop_hoc_phan', function (Blueprint $table) {
                try {
                    $table->dropForeign(['lop_id']);
                } catch (\Exception $e) {}
                $table->dropColumn('lop_id');
            });
        }
    }
};
