<?php

namespace App\Http\Controllers\Lecturer;

use App\Http\Controllers\Controller;
use App\Models\DangKyHocPhan;
use App\Models\LopHocPhan;
use Illuminate\Http\Request;

class EnrollmentController extends Controller
{
    private function getGiangVienId()
    {
        $user = auth()->user();
        if ($user->vai_tro_id != 2 || !$user->giangVien) {
            abort(403, 'Unauthorized. Only lecturers can perform this action.');
        }
        return $user->giangVien->id;
    }

    /**
     * GET /lecturer/enrollments/{sectionId}
     * Lấy danh sách sinh viên đăng ký theo lớp học phần
     */
    public function bySection($sectionId)
    {
        $giangVienId = $this->getGiangVienId();

        // Chỉ cho phép xem lớp của mình
        $section = LopHocPhan::where('giang_vien_id', $giangVienId)
            ->with(['monHoc'])
            ->findOrFail($sectionId);

        $enrollments = DangKyHocPhan::where('lop_hoc_phan_id', $sectionId)
            ->with(['sinhVien.nguoiDung', 'sinhVien.lop', 'sinhVien.khoa'])
            ->orderBy('ngay_dang_ky', 'desc')
            ->get()
            ->map(function ($e) {
                $sv = $e->sinhVien;
                return [
                    'id' => $e->id,
                    'trang_thai' => $e->trang_thai,
                    'ngay_dang_ky' => $e->ngay_dang_ky,
                    'sinh_vien' => $sv ? [
                        'id' => $sv->id,
                        'ma_sinh_vien' => $sv->ma_sinh_vien,
                        'ho_ten' => $sv->nguoiDung ? $sv->nguoiDung->ho_ten : 'N/A',
                        'email' => $sv->nguoiDung ? $sv->nguoiDung->email : null,
                        'lop' => $sv->lop ? $sv->lop->ten_lop ?? $sv->lop->ma_lop ?? null : null,
                        'khoa' => $sv->khoa ? $sv->khoa->ten_khoa ?? null : null,
                    ] : null,
                ];
            });

        return response()->json([
            'section' => [
                'id' => $section->id,
                'ma_lop_hoc_phan' => $section->ma_lop_hoc_phan,
                'ten_lop' => $section->ten_lop,
                'hoc_ky' => $section->hoc_ky,
                'nam_hoc' => $section->nam_hoc,
                'si_so_toi_da' => $section->si_so_toi_da,
                'trang_thai' => $section->trang_thai,
                'mon_hoc' => $section->monHoc ? [
                    'ten_mon' => $section->monHoc->ten_mon,
                    'ma_mon' => $section->monHoc->ma_mon,
                    'tin_chi' => $section->monHoc->tin_chi,
                ] : null,
            ],
            'enrollments' => $enrollments,
            'stats' => [
                'total' => $enrollments->count(),
                'da_duyet' => $enrollments->where('trang_thai', 'da_duyet')->count(),
                'cho_duyet' => $enrollments->where('trang_thai', 'cho_duyet')->count(),
                'da_huy' => $enrollments->where('trang_thai', 'da_huy')->count(),
            ],
        ]);
    }

    /**
     * PATCH /lecturer/enrollments/{id}/cancel
     * Giảng viên hủy đăng ký của sinh viên
     */
    public function cancelByLecturer($id)
    {
        $giangVienId = $this->getGiangVienId();

        $enrollment = DangKyHocPhan::with('lopHocPhan')->findOrFail($id);

        // Chỉ cho phép thao tác trên lớp của mình
        if ((int)$enrollment->lopHocPhan->giang_vien_id !== (int)$giangVienId) {
            abort(403, 'Unauthorized.');
        }

        if ($enrollment->trang_thai === 'da_huy') {
            return response()->json(['message' => 'Đăng ký này đã bị hủy rồi.'], 422);
        }

        $enrollment->update(['trang_thai' => 'da_huy']);

        return response()->json(['message' => 'Đã hủy đăng ký của sinh viên thành công.']);
    }
}
