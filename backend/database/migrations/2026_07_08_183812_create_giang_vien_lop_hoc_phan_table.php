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
        Schema::dropIfExists('giang_vien_lop_hoc_phan');

        Schema::create('giang_vien_lop_hoc_phan', function (Blueprint $table) {
            $table->id();
            $table->integer('lop_hoc_phan_id');
            $table->integer('giang_vien_id');
            $table->string('vai_tro', 50)->default('chinh')->nullable();
            $table->timestamp('ngay_tao')->useCurrent();
            $table->timestamp('ngay_cap_nhat')->useCurrent()->useCurrentOnUpdate();

            $table->foreign('lop_hoc_phan_id')->references('id')->on('lop_hoc_phan')->onDelete('cascade');
            $table->foreign('giang_vien_id')->references('id')->on('giang_vien')->onDelete('cascade');
            $table->unique(['lop_hoc_phan_id', 'giang_vien_id']);
        });

        // Migrate existing giang_vien_id from lop_hoc_phan to giang_vien_lop_hoc_phan
        $existing = DB::table('lop_hoc_phan')->whereNotNull('giang_vien_id')->get();
        foreach ($existing as $row) {
            DB::table('giang_vien_lop_hoc_phan')->insertOrIgnore([
                'lop_hoc_phan_id' => $row->id,
                'giang_vien_id'   => $row->giang_vien_id,
                'vai_tro'         => 'chinh',
                'ngay_tao'        => now(),
                'ngay_cap_nhat'   => now(),
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('giang_vien_lop_hoc_phan');
    }
};
