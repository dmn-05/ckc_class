<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('lop', function (Blueprint $table) {
            $table->dropColumn('nam_nhap_hoc');
        });
    }

    public function down(): void
    {
        Schema::table('lop', function (Blueprint $table) {
            $table->string('nam_nhap_hoc', 50)->nullable()->after('khoa_id');
        });
    }
};
