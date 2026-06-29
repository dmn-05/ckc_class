<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('khoa', function (Blueprint $table) {
            $table->id();
            $table->string('ma_khoa', 50)->unique();
            $table->string('ten_khoa', 255);
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });

        Schema::create('bo_mon', function (Blueprint $table) {
            $table->id();
            $table->string('ma_bo_mon', 50)->unique();
            $table->string('ten_bo_mon', 255);
            $table->foreignId('khoa_id')->constrained('khoa')->onDelete('cascade');
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });

        Schema::create('mon_hoc', function (Blueprint $table) {
            $table->id();
            $table->string('ma_mon', 50)->unique();
            $table->string('ten_mon', 255);
            $table->integer('tin_chi')->default(1);
            $table->foreignId('khoa_id')->constrained('khoa')->onDelete('cascade');
            $table->foreignId('bo_mon_id')->nullable()->constrained('bo_mon')->onDelete('set null');
            $table->string('trang_thai', 50)->default('dang_mo');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });

        Schema::create('lop', function (Blueprint $table) {
            $table->id();
            $table->string('ma_lop', 50)->unique();
            $table->string('ten_lop', 255);
            $table->foreignId('khoa_id')->constrained('khoa')->onDelete('cascade');
            $table->integer('nam_nhap_hoc')->nullable();
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });

        Schema::create('nguoi_dung', function (Blueprint $table) {
            $table->id();
            $table->string('ho_ten', 255);
            $table->string('email', 255)->unique();
            $table->string('mat_khau', 255);
            $table->integer('vai_tro_id')->default(1);
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });

        Schema::create('giang_vien', function (Blueprint $table) {
            $table->id();
            $table->foreignId('nguoi_dung_id')->constrained('nguoi_dung')->onDelete('cascade');
            $table->string('ma_giang_vien', 50)->unique();
            $table->date('ngay_sinh')->nullable();
            $table->string('gioi_tinh', 20)->nullable();
            $table->string('so_dien_thoai', 20)->nullable();
            $table->string('cccd', 20)->nullable();
            $table->string('dia_chi', 255)->nullable();
            $table->foreignId('bo_mon_id')->nullable()->constrained('bo_mon')->onDelete('set null');
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });

        Schema::create('sinh_vien', function (Blueprint $table) {
            $table->id();
            $table->foreignId('nguoi_dung_id')->constrained('nguoi_dung')->onDelete('cascade');
            $table->string('ma_sinh_vien', 50)->unique();
            $table->date('ngay_sinh')->nullable();
            $table->string('gioi_tinh', 20)->nullable();
            $table->string('so_dien_thoai', 20)->nullable();
            $table->string('cccd', 20)->nullable();
            $table->string('dia_chi', 255)->nullable();
            $table->foreignId('lop_id')->nullable()->constrained('lop')->onDelete('set null');
            $table->foreignId('khoa_id')->nullable()->constrained('khoa')->onDelete('set null');
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });

        Schema::create('lop_hoc_phan', function (Blueprint $table) {
            $table->id();
            $table->string('ma_lop_hoc_phan', 50)->unique();
            $table->string('ten_lop', 255);
            $table->foreignId('mon_hoc_id')->constrained('mon_hoc')->onDelete('cascade');
            $table->foreignId('giang_vien_id')->nullable()->constrained('giang_vien')->onDelete('set null');
            $table->integer('hoc_ky')->default(1);
            $table->string('nam_hoc', 20)->nullable();
            $table->integer('si_so_toi_da')->default(50);
            $table->string('trang_thai', 50)->default('dang_mo');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });

        Schema::create('bai_viet', function (Blueprint $table) {
            $table->id();
            $table->string('tieu_de', 255);
            $table->text('noi_dung')->nullable();
            $table->foreignId('lop_hoc_phan_id')->constrained('lop_hoc_phan')->onDelete('cascade');
            $table->unsignedBigInteger('chu_de_id')->nullable();
            $table->foreignId('nguoi_tao_id')->constrained('nguoi_dung')->onDelete('cascade');
            $table->string('loai_bai_viet', 50)->default('bai_viet');
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->integer('luot_xem')->default(0);
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });

        Schema::create('binh_luan', function (Blueprint $table) {
            $table->id();
            $table->text('noi_dung');
            $table->foreignId('nguoi_dung_id')->constrained('nguoi_dung')->onDelete('cascade');
            $table->foreignId('lop_hoc_phan_id')->constrained('lop_hoc_phan')->onDelete('cascade');
            $table->foreignId('bai_viet_id')->constrained('bai_viet')->onDelete('cascade');
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });

        Schema::create('tep_tin', function (Blueprint $table) {
            $table->id();
            $table->string('ten_file', 255);
            $table->string('ten_file_luu', 255);
            $table->string('duong_dan', 255);
            $table->string('loai_file', 50)->nullable();
            $table->integer('kich_thuoc')->default(0);
            $table->foreignId('nguoi_tao_id')->constrained('nguoi_dung')->onDelete('cascade');
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->timestamp('ngay_tao')->nullable();
        });

        Schema::create('tep_tin_bai_viet', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tep_tin_id')->constrained('tep_tin')->onDelete('cascade');
            $table->foreignId('bai_viet_id')->constrained('bai_viet')->onDelete('cascade');
            $table->timestamp('ngay_tao')->nullable();
        });

        Schema::create('bai_tap', function (Blueprint $table) {
            $table->id();
            $table->string('tieu_de', 255);
            $table->text('noi_dung')->nullable();
            $table->text('huong_dan')->nullable();
            $table->foreignId('lop_hoc_phan_id')->constrained('lop_hoc_phan')->onDelete('cascade');
            $table->foreignId('nguoi_tao_id')->constrained('nguoi_dung')->onDelete('cascade');
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bai_tap');
        Schema::dropIfExists('tep_tin_bai_viet');
        Schema::dropIfExists('tep_tin');
        Schema::dropIfExists('binh_luan');
        Schema::dropIfExists('bai_viet');
        Schema::dropIfExists('lop_hoc_phan');
        Schema::dropIfExists('sinh_vien');
        Schema::dropIfExists('giang_vien');
        Schema::dropIfExists('nguoi_dung');
        Schema::dropIfExists('lop');
        Schema::dropIfExists('mon_hoc');
        Schema::dropIfExists('bo_mon');
        Schema::dropIfExists('khoa');
    }
};
