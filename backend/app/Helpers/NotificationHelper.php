<?php

namespace App\Helpers;

use App\Models\ThongBao;
use App\Models\SinhVien;
use Illuminate\Support\Facades\Log;

class NotificationHelper
{
    /**
     * Tạo 1 thông báo chung cho toàn bộ sinh viên trong Lớp Học Phần (không lưu nguoi_nhan_id)
     */
    public static function createForClass($lopHocPhanId, $tieuDe, $noiDung, $loaiThongBao = 'chung', $lienKet = null, $nguoiTaoId = null)
    {
        try {
            ThongBao::create([
                'tieu_de' => $tieuDe,
                'noi_dung' => $noiDung,
                'lop_hoc_phan_id' => $lopHocPhanId,
                'nguoi_tao_id' => $nguoiTaoId,
                'nguoi_nhan_id' => null,
                'loai_thong_bao' => $loaiThongBao,
                'lien_ket' => $lienKet,
                'da_doc' => false,
                'danh_sach_da_doc' => null,
                'trang_thai' => 'hien_thi',
            ]);
        } catch (\Exception $e) {
            Log::error('Error creating class notification: ' . $e->getMessage());
        }
    }

    /**
     * Tạo thông báo riêng cho 1 user cụ thể (không lưu lop_hoc_phan_id)
     */
    public static function createForUser($nguoiNhanId, $tieuDe, $noiDung, $loaiThongBao = 'chung', $lienKet = null, $nguoiTaoId = null)
    {
        try {
            if (!$nguoiNhanId) return;

            ThongBao::create([
                'tieu_de' => $tieuDe,
                'noi_dung' => $noiDung,
                'lop_hoc_phan_id' => null,
                'nguoi_tao_id' => $nguoiTaoId,
                'nguoi_nhan_id' => $nguoiNhanId,
                'loai_thong_bao' => $loaiThongBao,
                'lien_ket' => $lienKet,
                'da_doc' => false,
                'trang_thai' => 'hien_thi',
            ]);
        } catch (\Exception $e) {
            Log::error('Error creating user notification: ' . $e->getMessage());
        }
    }

    /**
     * Tạo thông báo riêng cho 1 SinhVien ID cụ thể (không lưu lop_hoc_phan_id)
     */
    public static function createForStudent($sinhVienId, $tieuDe, $noiDung, $loaiThongBao = 'chung', $lienKet = null, $nguoiTaoId = null)
    {
        try {
            $sv = SinhVien::find($sinhVienId);
            if ($sv && $sv->nguoi_dung_id) {
                self::createForUser($sv->nguoi_dung_id, $tieuDe, $noiDung, $loaiThongBao, $lienKet, $nguoiTaoId);
            }
        } catch (\Exception $e) {
            Log::error('Error creating student notification: ' . $e->getMessage());
        }
    }
}
