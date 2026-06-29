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
        Schema::create('chi_tiet_ket_qua', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ket_qua_kiem_tra_id')->constrained('ket_qua_kiem_tra')->onDelete('cascade');
            $table->foreignId('cau_hoi_id')->constrained('cau_hoi')->onDelete('cascade');
            // For single_choice / true_false
            $table->foreignId('dap_an_id')->nullable()->constrained('dap_an')->onDelete('set null');
            // For multiple_choice (comma separated or JSON)
            $table->json('dap_an_ids')->nullable();
            // For essay
            $table->text('dap_an_tu_luan')->nullable();
            
            $table->float('diem_dat')->default(0);
            
            $table->timestamp('ngay_tao')->useCurrent();
            $table->timestamp('ngay_cap_nhat')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chi_tiet_ket_qua');
    }
};
