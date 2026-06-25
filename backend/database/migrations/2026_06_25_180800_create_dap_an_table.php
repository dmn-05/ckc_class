<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('dap_an')) {
            return;
        }

        Schema::create('dap_an', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cau_hoi_id')->constrained('cau_hoi')->onDelete('cascade');
            $table->text('noi_dung');
            $table->boolean('la_dap_an_dung')->default(false);
            $table->integer('thu_tu')->default(0);
            $table->timestamp('ngay_tao')->useCurrent();
            $table->timestamp('ngay_cap_nhat')->useCurrent()->useCurrentOnUpdate();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dap_an');
    }
};
