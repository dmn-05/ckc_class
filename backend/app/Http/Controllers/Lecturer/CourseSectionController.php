<?php

namespace App\Http\Controllers\Lecturer;

use App\Http\Controllers\Controller;
use App\Models\LopHocPhan;
use Illuminate\Http\Request;

class CourseSectionController extends Controller
{
    private function getGiangVienId()
    {
        $user = auth()->user();
        if ($user->vai_tro_id != 2 || !$user->giangVien) {
            abort(403, 'Unauthorized. Only lecturers can perform this action.');
        }
        return $user->giangVien->id;
    }

    public function index()
    {
        $giangVienId = $this->getGiangVienId();
        $sections = LopHocPhan::where(function ($q) use ($giangVienId) {
            $q->where('giang_vien_id', $giangVienId)
              ->orWhereHas('giangViens', function ($q2) use ($giangVienId) {
                  $q2->where('giang_vien.id', $giangVienId);
              });
        })
        ->with(['monHoc.khoa', 'giangVien.nguoiDung', 'giangViens.nguoiDung'])
        ->withCount(['sinhViens', 'baiTaps', 'baiKiemTras'])
        ->get();
        return response()->json($sections);
    }

    private function syncLecturersWithRoles($section, $mainId, $subIds = [])
    {
        $syncData = [
            $mainId => ['vai_tro' => 'chinh', 'ngay_tao' => now(), 'ngay_cap_nhat' => now()]
        ];
        if (!empty($subIds) && is_array($subIds)) {
            foreach ($subIds as $subId) {
                if ($subId && $subId != $mainId) {
                    $syncData[$subId] = ['vai_tro' => 'phu', 'ngay_tao' => now(), 'ngay_cap_nhat' => now()];
                }
            }
        }
        $section->giangViens()->sync($syncData);
    }

    public function store(Request $request)
    {
        $giangVienId = $this->getGiangVienId();

        $validated = $request->validate([
            'ma_lop_hoc_phan' => 'required|string|max:30|unique:lop_hoc_phan,ma_lop_hoc_phan',
            'ten_lop' => 'required|string|max:100',
            'mon_hoc_id' => 'required|exists:mon_hoc,id',
            'giang_vien_phu_ids' => 'nullable|array',
            'giang_vien_phu_ids.*' => 'exists:giang_vien,id',
            'hoc_ky' => 'required',
            'nam_hoc' => 'required|string|max:20',
            'si_so_toi_da' => 'required|integer|min:1',
            'trang_thai' => 'required|in:dang_mo,da_khoa,da_ket_thuc',
            'base_class_id' => 'nullable|exists:lop,id'
        ]);

        if (isset($validated['hoc_ky'])) {
            $val = $validated['hoc_ky'];
            $validated['hoc_ky'] = is_string($val) && preg_match('/(\d+)/', $val, $m) ? (int)$m[1] : (int)$val;
        }

        $subLecturerIds = $validated['giang_vien_phu_ids'] ?? [];
        unset($validated['giang_vien_phu_ids']);

        $validated['giang_vien_id'] = $giangVienId;
        $baseClassId = $validated['base_class_id'] ?? null;
        unset($validated['base_class_id']);

        $section = LopHocPhan::create($validated);
        $this->syncLecturersWithRoles($section, $giangVienId, $subLecturerIds);

        if ($baseClassId) {
            $studentIds = \App\Models\SinhVien::where('lop_id', $baseClassId)
                ->where('trang_thai', 'dang_hoc')
                ->pluck('id');
            $syncData = [];
            foreach ($studentIds as $id) {
                $syncData[$id] = ['ngay_tao' => now(), 'ngay_cap_nhat' => now()];
            }
            $section->sinhViens()->attach($syncData);
        }

        return response()->json($section, 201);
    }

    public function show($id)
    {
        $giangVienId = $this->getGiangVienId();
        $section = LopHocPhan::where(function ($q) use ($giangVienId) {
            $q->where('giang_vien_id', $giangVienId)
              ->orWhereHas('giangViens', function ($q2) use ($giangVienId) {
                  $q2->where('giang_vien.id', $giangVienId);
              });
        })
        ->with(['monHoc.khoa', 'giangVien.nguoiDung', 'giangViens.nguoiDung'])
        ->withCount(['sinhViens', 'baiTaps', 'baiKiemTras'])
        ->findOrFail($id);
        return response()->json($section);
    }

    public function update(Request $request, $id)
    {
        $giangVienId = $this->getGiangVienId();
        $section = LopHocPhan::where(function ($q) use ($giangVienId) {
            $q->where('giang_vien_id', $giangVienId)
              ->orWhereHas('giangViens', function ($q2) use ($giangVienId) {
                  $q2->where('giang_vien.id', $giangVienId);
              });
        })->findOrFail($id);

        $validated = $request->validate([
            'ma_lop_hoc_phan' => 'required|string|max:30|unique:lop_hoc_phan,ma_lop_hoc_phan,' . $id,
            'ten_lop' => 'required|string|max:100',
            'mon_hoc_id' => 'required|exists:mon_hoc,id',
            'giang_vien_phu_ids' => 'nullable|array',
            'giang_vien_phu_ids.*' => 'exists:giang_vien,id',
            'hoc_ky' => 'required',
            'nam_hoc' => 'required|string|max:20',
            'si_so_toi_da' => 'required|integer|min:1',
            'trang_thai' => 'required|in:dang_mo,da_khoa,da_ket_thuc',
            'base_class_id' => 'nullable|exists:lop,id'
        ]);

        if (isset($validated['hoc_ky'])) {
            $val = $validated['hoc_ky'];
            $validated['hoc_ky'] = is_string($val) && preg_match('/(\d+)/', $val, $m) ? (int)$m[1] : (int)$val;
        }

        $subLecturerIds = $validated['giang_vien_phu_ids'] ?? [];
        unset($validated['giang_vien_phu_ids']);

        $validated['giang_vien_id'] = $giangVienId;
        $baseClassId = $validated['base_class_id'] ?? null;
        unset($validated['base_class_id']);

        if ($baseClassId) {
            $targetStatus = $validated['trang_thai'] ?? $section->trang_thai;
            if (in_array($targetStatus, ['da_khoa', 'da_ket_thuc'])) {
                return response()->json(['message' => 'Không thể tự động thêm sinh viên vào lớp học phần đã khóa hoặc kết thúc'], 422);
            }
        }

        $section->update($validated);
        $this->syncLecturersWithRoles($section, $giangVienId, $subLecturerIds);

        if ($baseClassId) {
            $studentIds = \App\Models\SinhVien::where('lop_id', $baseClassId)
                ->where('trang_thai', 'dang_hoc')
                ->pluck('id');
            // attach will only insert new records if we use syncWithoutDetaching
            $section->sinhViens()->syncWithoutDetaching($studentIds);
        }

        return response()->json($section);
    }
}
