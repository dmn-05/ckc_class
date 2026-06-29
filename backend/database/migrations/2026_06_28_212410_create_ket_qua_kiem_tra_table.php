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
        Schema::create('ket_qua_kiem_tra', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sinh_vien_id')->constrained('sinh_vien')->onDelete('cascade');
            $table->foreignId('bai_kiem_tra_id')->constrained('bai_kiem_tra')->onDelete('cascade');
            $table->timestamp('thoi_gian_bat_dau')->nullable();
            $table->timestamp('thoi_gian_nop_bai')->nullable();
            $table->float('diem_trac_nghiem')->default(0);
            $table->float('diem_tu_luan')->default(0);
            $table->float('tong_diem')->default(0);
            $table->enum('trang_thai', ['dang_lam', 'da_nop', 'da_cham'])->default('dang_lam');
            $table->timestamp('ngay_tao')->useCurrent();
            $table->timestamp('ngay_cap_nhat')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ket_qua_kiem_tra');
    }
};
