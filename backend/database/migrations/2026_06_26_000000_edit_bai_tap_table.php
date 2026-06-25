<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Tạo bảng nếu chưa có
        if (!Schema::hasTable('bai_tap')) {
            Schema::create('bai_tap', function (Blueprint $table) {
                $table->id();
                $table->string('tieu_de', 255);
                $table->text('noi_dung')->nullable();
                $table->text('huong_dan')->nullable();
                $table->foreignId('lop_hoc_phan_id')->constrained('lop_hoc_phan')->onDelete('cascade');
                $table->foreignId('nguoi_tao_id')->constrained('nguoi_dung')->onDelete('cascade');
                $table->decimal('diem_toi_da', 5, 1)->default(10);
                $table->datetime('han_nop')->nullable();
                $table->boolean('cho_phep_nop_tre')->default(false);
                $table->integer('tyle_phat_tre')->default(10);
                $table->enum('trang_thai', ['hien_thi', 'an'])->default('hien_thi');
                $table->timestamp('ngay_tao')->useCurrent();
                $table->timestamp('ngay_cap_nhat')->useCurrent()->useCurrentOnUpdate();
            });
            return;
        }

        // Bảng đã tồn tại — thêm các cột còn thiếu
        Schema::table('bai_tap', function (Blueprint $table) {
            if (!Schema::hasColumn('bai_tap', 'noi_dung')) {
                $table->text('noi_dung')->nullable()->after('tieu_de');
            }
            if (!Schema::hasColumn('bai_tap', 'huong_dan')) {
                $table->text('huong_dan')->nullable()->after('noi_dung');
            }
            if (!Schema::hasColumn('bai_tap', 'diem_toi_da')) {
                $table->decimal('diem_toi_da', 5, 1)->default(10)->after('nguoi_tao_id');
            }
            if (!Schema::hasColumn('bai_tap', 'han_nop')) {
                $table->datetime('han_nop')->nullable()->after('diem_toi_da');
            }
            if (!Schema::hasColumn('bai_tap', 'cho_phep_nop_tre')) {
                $table->boolean('cho_phep_nop_tre')->default(false)->after('han_nop');
            }
            if (!Schema::hasColumn('bai_tap', 'tyle_phat_tre')) {
                $table->integer('tyle_phat_tre')->default(10)->after('cho_phep_nop_tre');
            }
            if (!Schema::hasColumn('bai_tap', 'trang_thai')) {
                $table->enum('trang_thai', ['hien_thi', 'an'])->default('hien_thi')->after('tyle_phat_tre');
            }
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bai_tap');
    }
};
