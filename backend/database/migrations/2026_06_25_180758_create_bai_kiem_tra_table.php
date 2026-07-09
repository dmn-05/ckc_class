<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('bai_kiem_tra')) {
            return;
        }

        Schema::create('bai_kiem_tra', function (Blueprint $table) {
            $table->id();

            // Thông tin cơ bản
            $table->string('tieu_de', 255);
            $table->text('mo_ta')->nullable();                          // Mô tả / hướng dẫn chung

            // Liên kết lớp học phần và người tạo
            $table->foreignId('lop_hoc_phan_id')->index();
            $table->unsignedBigInteger('nguoi_tao_id');
            $table->foreign('nguoi_tao_id')->references('id')->on('nguoi_dung')->onDelete('cascade');

            // Cấu hình thời gian
            $table->datetime('thoi_gian_bat_dau')->nullable();          // Thời điểm mở đề
            $table->datetime('thoi_gian_ket_thuc')->nullable();         // Thời điểm đóng đề
            $table->unsignedSmallInteger('thoi_gian_lam_bai')->default(60); // Phút làm bài

            // Cấu hình điểm & lượt thi
            $table->decimal('diem_toi_da', 5, 1)->default(10);
            $table->decimal('diem_dat', 5, 1)->default(5);              // Điểm đạt (để tính qua/trượt)
            $table->unsignedTinyInteger('so_lan_thi_toi_da')->default(1);

            // Hình thức
            $table->enum('hinh_thuc', ['trac_nghiem', 'tu_luan', 'hon_hop'])->default('trac_nghiem');
            $table->boolean('xao_tron_cau_hoi')->default(true);
            $table->boolean('xao_tron_dap_an')->default(true);
            $table->boolean('hien_dap_an_sau_nop')->default(false);     // Có hiện đáp án sau khi nộp không

            // Trạng thái
            $table->enum('trang_thai', ['nhap', 'hien_thi', 'an'])->default('nhap');

            $table->timestamp('ngay_tao')->useCurrent();
            $table->timestamp('ngay_cap_nhat')->useCurrent()->useCurrentOnUpdate();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bai_kiem_tra');
    }
};
