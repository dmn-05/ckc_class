<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\DangKyHocPhan;
use App\Models\LopHocPhan;
use Illuminate\Http\Request;

class EnrollmentController extends Controller
{
    /**
     * Lấy sinh_vien_id từ user đang đăng nhập
     */
    private function getSinhVienId()
    {
        $user = auth()->user();
        if ($user->vai_tro_id != 3 || !$user->sinhVien) {
            abort(403, 'Unauthorized. Only students can perform this action.');
        }
        return $user->sinhVien->id;
    }

    /**
     * GET /student/course-sections
     * Danh sách học phần có thể đăng ký (đang mở, còn chỗ, chưa đăng ký)
     */
    public function availableSections(Request $request)
    {
        $sinhVienId = $this->getSinhVienId();

        // Lấy những lop_hoc_phan_id sinh viên đã đăng ký (không bị hủy)
        $enrolledIds = DangKyHocPhan::where('sinh_vien_id', $sinhVienId)
            ->whereIn('trang_thai', ['cho_duyet', 'da_duyet'])
            ->pluck('lop_hoc_phan_id')
            ->toArray();

        $query = LopHocPhan::with(['monHoc.khoa', 'giangVien.nguoiDung'])
            ->where('trang_thai', 'dang_mo')
            ->whereNotIn('id', $enrolledIds)
            ->withCount(['dangKy' => function ($q) {
                $q->whereIn('trang_thai', ['cho_duyet', 'da_duyet']);
            }]);

        // Bộ lọc tìm kiếm
        if ($request->has('hoc_ky') && $request->hoc_ky) {
            $query->where('hoc_ky', $request->hoc_ky);
        }
        if ($request->has('nam_hoc') && $request->nam_hoc) {
            $query->where('nam_hoc', $request->nam_hoc);
        }
        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('ma_lop_hoc_phan', 'like', "%{$search}%")
                  ->orWhere('ten_lop', 'like', "%{$search}%")
                  ->orWhereHas('monHoc', function ($q2) use ($search) {
                      $q2->where('ten_mon', 'like', "%{$search}%")
                         ->orWhere('ma_mon', 'like', "%{$search}%");
                  });
            });
        }

        $sections = $query->get()->map(function ($s) {
            return [
                'id' => $s->id,
                'ma_lop_hoc_phan' => $s->ma_lop_hoc_phan,
                'ten_lop' => $s->ten_lop,
                'hoc_ky' => $s->hoc_ky,
                'nam_hoc' => $s->nam_hoc,
                'si_so_toi_da' => $s->si_so_toi_da,
                'si_so_hien_tai' => $s->dang_ky_count,
                'trang_thai' => $s->trang_thai,
                'mon_hoc' => $s->monHoc ? [
                    'id' => $s->monHoc->id,
                    'ma_mon' => $s->monHoc->ma_mon,
                    'ten_mon' => $s->monHoc->ten_mon,
                    'tin_chi' => $s->monHoc->tin_chi,
                    'khoa' => $s->monHoc->khoa ? ['ten_khoa' => $s->monHoc->khoa->ten_khoa] : null,
                ] : null,
                'giang_vien' => $s->giangVien && $s->giangVien->nguoiDung ? [
                    'ho_ten' => $s->giangVien->nguoiDung->ho_ten,
                    'ma_giang_vien' => $s->giangVien->ma_giang_vien,
                ] : null,
            ];
        });

        return response()->json($sections);
    }

    /**
     * GET /student/enrollments
     * Danh sách học phần đã đăng ký của sinh viên
     */
    public function myEnrollments()
    {
        $sinhVienId = $this->getSinhVienId();

        $enrollments = DangKyHocPhan::where('sinh_vien_id', $sinhVienId)
            ->with(['lopHocPhan.monHoc.khoa', 'lopHocPhan.giangVien.nguoiDung'])
            ->orderBy('ngay_dang_ky', 'desc')
            ->get()
            ->map(function ($e) {
                $s = $e->lopHocPhan;
                return [
                    'id' => $e->id,
                    'trang_thai' => $e->trang_thai,
                    'ngay_dang_ky' => $e->ngay_dang_ky,
                    'lop_hoc_phan' => $s ? [
                        'id' => $s->id,
                        'ma_lop_hoc_phan' => $s->ma_lop_hoc_phan,
                        'ten_lop' => $s->ten_lop,
                        'hoc_ky' => $s->hoc_ky,
                        'nam_hoc' => $s->nam_hoc,
                        'si_so_toi_da' => $s->si_so_toi_da,
                        'trang_thai' => $s->trang_thai,
                        'mon_hoc' => $s->monHoc ? [
                            'ten_mon' => $s->monHoc->ten_mon,
                            'ma_mon' => $s->monHoc->ma_mon,
                            'tin_chi' => $s->monHoc->tin_chi,
                        ] : null,
                        'giang_vien' => $s->giangVien && $s->giangVien->nguoiDung ? [
                            'ho_ten' => $s->giangVien->nguoiDung->ho_ten,
                        ] : null,
                    ] : null,
                ];
            });

        return response()->json($enrollments);
    }

    /**
     * POST /student/enrollments
     * Đăng ký học phần
     */
    public function enroll(Request $request)
    {
        $sinhVienId = $this->getSinhVienId();

        $validated = $request->validate([
            'lop_hoc_phan_id' => 'required|exists:lop_hoc_phan,id',
        ]);

        $section = LopHocPhan::findOrFail($validated['lop_hoc_phan_id']);

        // Kiểm tra học phần đang mở
        if ($section->trang_thai !== 'dang_mo') {
            return response()->json(['message' => 'Học phần này không còn mở đăng ký.'], 422);
        }

        // Kiểm tra tất cả record, kể cả da_huy
        $existing = DangKyHocPhan::where('sinh_vien_id', $sinhVienId)
            ->where('lop_hoc_phan_id', $validated['lop_hoc_phan_id'])
            ->first();

        if ($existing) {
            if (in_array($existing->trang_thai, ['cho_duyet', 'da_duyet'])) {
                return response()->json(['message' => 'Bạn đã đăng ký học phần này rồi.'], 422);
            }
            // Đã từng đăng ký rồi hủy → kích hoạt lại thay vì INSERT mới
            $existing->update(['trang_thai' => 'da_duyet', 'ngay_dang_ky' => now()]);
            return response()->json(['message' => 'Đăng ký học phần thành công!', 'data' => $existing], 200);
        }

        // Kiểm tra sĩ số
        $currentCount = DangKyHocPhan::where('lop_hoc_phan_id', $validated['lop_hoc_phan_id'])
            ->whereIn('trang_thai', ['cho_duyet', 'da_duyet'])
            ->count();

        if ($currentCount >= $section->si_so_toi_da) {
            return response()->json(['message' => 'Học phần này đã đầy, không thể đăng ký.'], 422);
        }

        $enrollment = DangKyHocPhan::create([
            'sinh_vien_id' => $sinhVienId,
            'lop_hoc_phan_id' => $validated['lop_hoc_phan_id'],
            'ngay_dang_ky' => now(),
            'trang_thai' => 'da_duyet',
        ]);

        return response()->json(['message' => 'Đăng ký học phần thành công!', 'data' => $enrollment], 201);
    }

    /**
     * DELETE /student/enrollments/{id}
     * Hủy đăng ký học phần
     */
    public function cancel($id)
    {
        $sinhVienId = $this->getSinhVienId();

        $enrollment = DangKyHocPhan::where('sinh_vien_id', $sinhVienId)
            ->findOrFail($id);

        if ($enrollment->trang_thai === 'da_huy') {
            return response()->json(['message' => 'Đăng ký này đã bị hủy rồi.'], 422);
        }

        $enrollment->update(['trang_thai' => 'da_huy']);

        return response()->json(['message' => 'Hủy đăng ký thành công.']);
    }
}
