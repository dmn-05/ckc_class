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
        Schema::create('tep_tin_bai_tap', function (Blueprint $table) {
            $table->id();
            $table->integer('bai_tap_id');
            $table->integer('tep_tin_id');
            $table->timestamps();

            $table->foreign('bai_tap_id')->references('id')->on('bai_tap')->onDelete('cascade');
            $table->foreign('tep_tin_id')->references('id')->on('tep_tin')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tep_tin_bai_tap');
    }
};
