<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $fixForeignKey = function ($tableName, $columnName, $referencedTable, $referencedColumn = 'id') {
            if (!Schema::hasTable($tableName) || !Schema::hasTable($referencedTable) || !Schema::hasColumn($tableName, $columnName)) {
                return;
            }

            // Tìm và xóa tất cả ràng buộc khóa ngoại hiện có trên cột này
            $constraints = DB::select("
                SELECT CONSTRAINT_NAME 
                FROM information_schema.KEY_COLUMN_USAGE 
                WHERE TABLE_SCHEMA = DATABASE() 
                  AND TABLE_NAME = ? 
                  AND COLUMN_NAME = ? 
                  AND REFERENCED_TABLE_NAME IS NOT NULL
            ", [$tableName, $columnName]);

            foreach ($constraints as $constraint) {
                Schema::table($tableName, function (Blueprint $table) use ($constraint) {
                    try {
                        $table->dropForeign($constraint->CONSTRAINT_NAME);
                    } catch (\Exception $e) {
                        // Bỏ qua nếu có lỗi khi drop
                    }
                });
            }

            // Thêm lại khóa ngoại với ON DELETE CASCADE
            Schema::table($tableName, function (Blueprint $table) use ($columnName, $referencedTable, $referencedColumn) {
                try {
                    $table->foreign($columnName)
                          ->references($referencedColumn)
                          ->on($referencedTable)
                          ->onDelete('cascade');
                } catch (\Exception $e) {
                    // Bỏ qua nếu không thể tạo (lỗi kiểu dữ liệu hoặc dữ liệu mồ côi)
                }
            });
        };

        // 1. bai_nop -> bai_tap & sinh_vien
        $fixForeignKey('bai_nop', 'bai_tap_id', 'bai_tap');
        $fixForeignKey('bai_nop', 'sinh_vien_id', 'sinh_vien');

        // 2. tep_tin_bai_tap -> bai_tap & tep_tin
        $fixForeignKey('tep_tin_bai_tap', 'bai_tap_id', 'bai_tap');
        $fixForeignKey('tep_tin_bai_tap', 'tep_tin_id', 'tep_tin');

        // 3. cau_hoi -> bai_kiem_tra
        $fixForeignKey('cau_hoi', 'bai_kiem_tra_id', 'bai_kiem_tra');

        // 4. dap_an -> cau_hoi
        $fixForeignKey('dap_an', 'cau_hoi_id', 'cau_hoi');

        // 5. ket_qua_kiem_tra -> bai_kiem_tra & sinh_vien
        $fixForeignKey('ket_qua_kiem_tra', 'bai_kiem_tra_id', 'bai_kiem_tra');
        $fixForeignKey('ket_qua_kiem_tra', 'sinh_vien_id', 'sinh_vien');

        // 6. chi_tiet_ket_qua -> ket_qua_kiem_tra & cau_hoi
        $fixForeignKey('chi_tiet_ket_qua', 'ket_qua_kiem_tra_id', 'ket_qua_kiem_tra');
        $fixForeignKey('chi_tiet_ket_qua', 'cau_hoi_id', 'cau_hoi');

        // 7. binh_luan -> bai_viet & lop_hoc_phan
        $fixForeignKey('binh_luan', 'bai_viet_id', 'bai_viet');
        $fixForeignKey('binh_luan', 'lop_hoc_phan_id', 'lop_hoc_phan');

        // 8. tep_tin_bai_viet -> bai_viet & tep_tin
        $fixForeignKey('tep_tin_bai_viet', 'bai_viet_id', 'bai_viet');
        $fixForeignKey('tep_tin_bai_viet', 'tep_tin_id', 'tep_tin');

        // 9. bai_viet -> lop_hoc_phan
        $fixForeignKey('bai_viet', 'lop_hoc_phan_id', 'lop_hoc_phan');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // No strict reverse required as CASCADE is the desired behavior across schema revisions.
    }
};
