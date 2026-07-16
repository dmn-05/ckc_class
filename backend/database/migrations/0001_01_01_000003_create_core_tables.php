<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('vai_tro')) {
            Schema::create('vai_tro', function (Blueprint $table) {
            $table->id();
            $table->string('ten_vai_tro', 50)->unique();
            $table->string('mo_ta', 255)->nullable();
            $table->timestamps();
        });
        }

        if (!Schema::hasTable('khoa')) {
            Schema::create('khoa', function (Blueprint $table) {
            $table->id();
            $table->string('ma_khoa', 50)->unique();
            $table->string('ten_khoa', 255);
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });
        }

        if (!Schema::hasTable('bo_mon')) {
            Schema::create('bo_mon', function (Blueprint $table) {
            $table->id();
            $table->string('ma_bo_mon', 50)->unique();
            $table->string('ten_bo_mon', 255);
            $table->foreignId('khoa_id')->constrained('khoa')->onDelete('cascade');
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });
        }

        if (!Schema::hasTable('mon_hoc')) {
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
        }

        if (!Schema::hasTable('lop')) {
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
        }

        if (!Schema::hasTable('nguoi_dung')) {
            Schema::create('nguoi_dung', function (Blueprint $table) {
            $table->id();
            $table->string('ho_ten', 255);
            $table->string('email', 255)->unique();
            $table->string('mat_khau', 255);
            $table->foreignId('vai_tro_id')->default(1)->constrained('vai_tro')->onDelete('cascade');
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });
        }

        if (!Schema::hasTable('quen_mat_khau')) {
            Schema::create('quen_mat_khau', function (Blueprint $table) {
            $table->id();
            $table->string('email')->index();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });
        }

        if (!Schema::hasTable('giang_vien')) {
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
        }

        if (!Schema::hasTable('sinh_vien')) {
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
        }

        if (!Schema::hasTable('lop_hoc_phan')) {
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
        }

        if (!Schema::hasTable('chu_de')) {
            Schema::create('chu_de', function (Blueprint $table) {
            $table->id();
            $table->string('ten_chu_de', 255);
            $table->foreignId('lop_hoc_phan_id')->constrained('lop_hoc_phan')->onDelete('cascade');
            $table->integer('thu_tu')->default(0);
            $table->string('trang_thai', 50)->default('dang_mo');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });
        }

        if (!Schema::hasTable('tai_lieu')) {
            Schema::create('tai_lieu', function (Blueprint $table) {
            $table->id();
            $table->string('tieu_de', 255);
            $table->text('mo_ta')->nullable();
            $table->string('duong_dan_file', 500)->nullable();
            $table->foreignId('lop_hoc_phan_id')->constrained('lop_hoc_phan')->onDelete('cascade');
            $table->foreignId('nguoi_tao_id')->constrained('nguoi_dung')->onDelete('cascade');
            $table->string('trang_thai', 50)->default('hien_thi');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });
        }

        if (!Schema::hasTable('thong_bao')) {
            Schema::create('thong_bao', function (Blueprint $table) {
            $table->id();
            $table->string('tieu_de', 255);
            $table->text('noi_dung')->nullable();
            $table->foreignId('lop_hoc_phan_id')->constrained('lop_hoc_phan')->onDelete('cascade');
            $table->foreignId('nguoi_tao_id')->constrained('nguoi_dung')->onDelete('cascade');
            $table->string('trang_thai', 50)->default('hien_thi');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });
        }

        if (!Schema::hasTable('bai_viet')) {
            Schema::create('bai_viet', function (Blueprint $table) {
            $table->id();
            $table->string('tieu_de', 255);
            $table->text('noi_dung')->nullable();
            $table->foreignId('lop_hoc_phan_id')->constrained('lop_hoc_phan')->onDelete('cascade');
            $table->unsignedBigInteger('chu_de_id')->nullable();
            $table->foreignId('nguoi_tao_id')->constrained('nguoi_dung')->onDelete('cascade');
            $table->string('loai_bai_viet', 50)->default('thong_bao');
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->integer('luot_xem')->default(0);
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });
        }

        if (!Schema::hasTable('binh_luan')) {
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
        }

        if (!Schema::hasTable('tep_tin')) {
            Schema::create('tep_tin', function (Blueprint $table) {
            $table->id();
            $table->string('ten_file', 255);
            $table->string('ten_file_luu', 255);
            $table->string('duong_dan', 255);
            $table->string('loai_file', 255)->nullable();
            $table->decimal('kich_thuoc', 15, 2)->default(0);
            $table->foreignId('nguoi_tao_id')->constrained('nguoi_dung')->onDelete('cascade');
            $table->string('trang_thai', 50)->default('dang_hoat_dong');
            $table->timestamp('ngay_tao')->nullable();
        });
        }

        if (!Schema::hasTable('tep_tin_bai_viet')) {
            Schema::create('tep_tin_bai_viet', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tep_tin_id')->constrained('tep_tin')->onDelete('cascade');
            $table->foreignId('bai_viet_id')->constrained('bai_viet')->onDelete('cascade');
            $table->timestamp('ngay_tao')->nullable();
        });
        }

        if (!Schema::hasTable('bai_tap')) {
            Schema::create('bai_tap', function (Blueprint $table) {
            $table->id();
            $table->string('tieu_de', 255);
            $table->text('noi_dung')->nullable();
            $table->text('huong_dan')->nullable();
            $table->text('mo_ta')->nullable();
            $table->string('file_url', 500)->nullable();
            $table->string('file_name', 255)->nullable();
            $table->decimal('diem_toi_da', 5, 1)->default(10);
            $table->datetime('han_nop')->nullable();
            $table->boolean('cho_phep_nop_tre')->default(false);
            $table->integer('tyle_phat_tre')->default(10);
            $table->foreignId('lop_hoc_phan_id')->constrained('lop_hoc_phan')->onDelete('cascade');
            $table->foreignId('nguoi_tao_id')->constrained('nguoi_dung')->onDelete('cascade');
            $table->string('trang_thai', 50)->default('hien_thi');
            $table->timestamp('ngay_tao')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });
        }

        if (!Schema::hasTable('bai_nop')) {
            Schema::create('bai_nop', function (Blueprint $table) {
            $table->id();
            $table->foreignId('bai_tap_id')->constrained('bai_tap')->onDelete('cascade');
            $table->foreignId('sinh_vien_id')->constrained('sinh_vien')->onDelete('cascade');
            $table->string('duong_dan_file', 500)->nullable();
            $table->decimal('diem', 5, 2)->nullable();
            $table->text('nhan_xet')->nullable();
            $table->string('trang_thai', 50)->default('da_nop');
            $table->datetime('ngay_cham')->nullable();
            $table->foreignId('giang_vien_cham_id')->nullable()->constrained('giang_vien')->onDelete('set null');
            $table->datetime('ngay_nop')->nullable();
            $table->timestamp('ngay_cap_nhat')->nullable();
        });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('bai_nop');
        Schema::dropIfExists('bai_tap');
        Schema::dropIfExists('tep_tin_bai_viet');
        Schema::dropIfExists('tep_tin');
        Schema::dropIfExists('binh_luan');
        Schema::dropIfExists('bai_viet');
        Schema::dropIfExists('thong_bao');
        Schema::dropIfExists('tai_lieu');
        Schema::dropIfExists('chu_de');
        Schema::dropIfExists('lop_hoc_phan');
        Schema::dropIfExists('sinh_vien');
        Schema::dropIfExists('giang_vien');
        Schema::dropIfExists('quen_mat_khau');
        Schema::dropIfExists('nguoi_dung');
        Schema::dropIfExists('lop');
        Schema::dropIfExists('mon_hoc');
        Schema::dropIfExists('bo_mon');
        Schema::dropIfExists('khoa');
        Schema::dropIfExists('vai_tro');
    }
};
