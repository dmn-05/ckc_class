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
        Schema::table('bai_viet', function (Blueprint $table) {
            $table->unsignedInteger('bai_tap_id')->nullable()->after('chu_de_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('bai_viet', function (Blueprint $table) {
            $table->dropColumn('bai_tap_id');
        });
    }
};
