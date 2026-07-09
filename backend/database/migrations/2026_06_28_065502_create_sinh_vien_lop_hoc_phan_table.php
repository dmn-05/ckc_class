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
        if (!Schema::hasTable('sinh_vien_lop_hoc_phan')) {
            Schema::create('sinh_vien_lop_hoc_phan', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('sinh_vien_id');
                $table->unsignedBigInteger('lop_hoc_phan_id');
                $table->timestamp('ngay_tao')->nullable();
                $table->timestamp('ngay_cap_nhat')->nullable();
                
                $table->foreign('sinh_vien_id')->references('id')->on('sinh_vien')->onDelete('cascade');
                $table->foreign('lop_hoc_phan_id')->references('id')->on('lop_hoc_phan')->onDelete('cascade');
                
                $table->unique(['sinh_vien_id', 'lop_hoc_phan_id']);
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sinh_vien_lop_hoc_phan');
    }
};
