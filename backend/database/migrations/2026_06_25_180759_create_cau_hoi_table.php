<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('cau_hoi')) {
            return;
        }

        Schema::create('cau_hoi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('bai_kiem_tra_id')->constrained('bai_kiem_tra')->onDelete('cascade');
            $table->enum('loai', ['single_choice', 'multiple_choice', 'true_false', 'essay']);
            $table->text('noi_dung');
            $table->decimal('diem', 5, 1)->default(1);
            $table->text('giai_thich')->nullable();
            $table->integer('thu_tu')->default(0);
            $table->timestamp('ngay_tao')->useCurrent();
            $table->timestamp('ngay_cap_nhat')->useCurrent()->useCurrentOnUpdate();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cau_hoi');
    }
};
