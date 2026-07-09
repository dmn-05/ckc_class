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
        if (!Schema::hasTable('tep_tin_bai_tap')) {
            Schema::create('tep_tin_bai_tap', function (Blueprint $table) {
                $table->id();
                $table->foreignId('bai_tap_id')->constrained('bai_tap')->onDelete('cascade');
                $table->foreignId('tep_tin_id')->constrained('tep_tin')->onDelete('cascade');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tep_tin_bai_tap');
    }
};
