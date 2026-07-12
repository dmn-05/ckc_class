<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('thong_bao', function (Blueprint $table) {
            if (!Schema::hasColumn('thong_bao', 'nguoi_nhan_id')) {
                $table->unsignedBigInteger('nguoi_nhan_id')->nullable()->after('nguoi_tao_id');
            }
            if (!Schema::hasColumn('thong_bao', 'loai_thong_bao')) {
                $table->string('loai_thong_bao', 50)->nullable()->after('nguoi_nhan_id');
            }
            if (!Schema::hasColumn('thong_bao', 'lien_ket')) {
                $table->string('lien_ket', 500)->nullable()->after('loai_thong_bao');
            }
            if (!Schema::hasColumn('thong_bao', 'da_doc')) {
                $table->boolean('da_doc')->default(false)->after('lien_ket');
            }
            if (!Schema::hasColumn('thong_bao', 'danh_sach_da_doc')) {
                $table->text('danh_sach_da_doc')->nullable()->after('da_doc');
            }
        });
    }

    public function down(): void
    {
        Schema::table('thong_bao', function (Blueprint $table) {
            $table->dropColumn(['nguoi_nhan_id', 'loai_thong_bao', 'lien_ket', 'da_doc', 'danh_sach_da_doc']);
        });
    }
};
