<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('dang_ky_hoc_phan', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sinh_vien_id');
            $table->unsignedBigInteger('lop_hoc_phan_id');
            $table->timestamp('ngay_dang_ky')->useCurrent();
            $table->enum('trang_thai', ['cho_duyet', 'da_duyet', 'da_huy'])->default('da_duyet');
            $table->timestamp('ngay_tao')->useCurrent();
            $table->timestamp('ngay_cap_nhat')->useCurrent()->useCurrentOnUpdate();
            $table->unique(['sinh_vien_id', 'lop_hoc_phan_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dang_ky_hoc_phan');
    }
};

