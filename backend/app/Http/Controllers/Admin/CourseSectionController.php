<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LopHocPhan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourseSectionController extends Controller
{
    public function index()
    {
        $sections = LopHocPhan::with(['monHoc.khoa', 'giangVien.nguoiDung', 'giangViens.nguoiDung', 'lop'])
            ->withCount(['sinhViens', 'baiTaps', 'baiKiemTras'])
            ->get();
        return response()->json($sections);
    }

    private function syncLecturersWithRoles($section, $mainId, $subIds = [], $flatIds = [])
    {
        $syncData = [];
        if (empty($mainId) && !empty($flatIds)) {
            $mainId = $flatIds[0];
        }
        if (!empty($flatIds)) {
            foreach ($flatIds as $id) {
                if ($id != $mainId && !in_array($id, $subIds)) {
                    $subIds[] = $id;
                }
            }
        }

        if ($mainId) {
            $syncData[$mainId] = ['vai_tro' => 'chinh', 'ngay_tao' => now(), 'ngay_cap_nhat' => now()];
        }
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
        $validated = $request->validate([
            'ma_lop_hoc_phan' => 'required|string|max:30|unique:lop_hoc_phan,ma_lop_hoc_phan',
            'ten_lop' => 'required|string|max:100',
            'mon_hoc_id' => 'required|exists:mon_hoc,id',
            'giang_vien_id' => 'nullable|exists:giang_vien,id',
            'giang_vien_phu_ids' => 'nullable|array',
            'giang_vien_phu_ids.*' => 'exists:giang_vien,id',
            'giang_vien_ids' => 'nullable|array',
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

        $mainLecturerId = $validated['giang_vien_id'] ?? null;
        $subLecturerIds = $validated['giang_vien_phu_ids'] ?? [];
        $flatIds = $validated['giang_vien_ids'] ?? [];

        if (empty($mainLecturerId) && empty($flatIds)) {
            return response()->json(['message' => 'Vui lòng chọn giảng viên phụ trách chính'], 422);
        }

        if (empty($mainLecturerId) && !empty($flatIds)) {
            $mainLecturerId = $flatIds[0];
        }

        $baseClassId = $validated['base_class_id'] ?? null;
        unset($validated['base_class_id'], $validated['giang_vien_ids'], $validated['giang_vien_phu_ids']);

        $validated['giang_vien_id'] = $mainLecturerId;
        $validated['lop_id'] = $baseClassId;

        \DB::beginTransaction();
        try {
            $section = LopHocPhan::create($validated);
            $this->syncLecturersWithRoles($section, $mainLecturerId, $subLecturerIds, $flatIds);

            if ($baseClassId) {
                $studentIds = \App\Models\SinhVien::where('lop_id', $baseClassId)
                    ->where('trang_thai', 'dang_hoc')
                    ->pluck('id');
                $syncData = [];
                foreach ($studentIds as $id) {
                    $syncData[$id] = ['ngay_tao' => now(), 'ngay_cap_nhat' => now()];
                }
                $section->sinhViens()->attach($syncData);
                foreach ($studentIds as $id) {
                    \App\Helpers\NotificationHelper::createForStudent(
                        $id,
                        "Được thêm vào lớp học phần",
                        "Bạn vừa được thêm vào lớp học phần: " . $section->ten_lop . " (" . $section->ma_lop_hoc_phan . ").",
                        'them_vao_lop',
                        '/student/courses/' . $section->id,
                        Auth::id()
                    );
                }
            }

            \DB::commit();
            $section->load(['monHoc.khoa', 'giangVien.nguoiDung', 'giangViens.nguoiDung', 'lop']);
            return response()->json($section, 201);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['message' => $e->getMessage() ?: 'Lỗi khi tạo lớp học phần'], 500);
        }
    }

    public function show($id)
    {
        $section = LopHocPhan::with(['monHoc.khoa', 'giangVien.nguoiDung', 'giangViens.nguoiDung', 'lop'])
            ->withCount(['sinhViens', 'baiTaps', 'baiKiemTras'])
            ->findOrFail($id);
        return response()->json($section);
    }

    public function update(Request $request, $id)
    {
        $section = LopHocPhan::findOrFail($id);

        $validated = $request->validate([
            'ma_lop_hoc_phan' => 'required|string|max:30|unique:lop_hoc_phan,ma_lop_hoc_phan,' . $id,
            'ten_lop' => 'required|string|max:100',
            'mon_hoc_id' => 'required|exists:mon_hoc,id',
            'giang_vien_id' => 'nullable|exists:giang_vien,id',
            'giang_vien_phu_ids' => 'nullable|array',
            'giang_vien_phu_ids.*' => 'exists:giang_vien,id',
            'giang_vien_ids' => 'nullable|array',
            'giang_vien_ids.*' => 'exists:giang_vien,id',
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

        $mainLecturerId = $validated['giang_vien_id'] ?? null;
        $subLecturerIds = $validated['giang_vien_phu_ids'] ?? [];
        $flatIds = $validated['giang_vien_ids'] ?? [];

        if (empty($mainLecturerId) && empty($flatIds)) {
            return response()->json(['message' => 'Vui lòng chọn giảng viên phụ trách chính'], 422);
        }

        if (empty($mainLecturerId) && !empty($flatIds)) {
            $mainLecturerId = $flatIds[0];
        }

        $baseClassId = $validated['base_class_id'] ?? null;
        unset($validated['base_class_id'], $validated['giang_vien_ids'], $validated['giang_vien_phu_ids']);

        if ($baseClassId) {
            $targetStatus = $validated['trang_thai'] ?? $section->trang_thai;
            if (in_array($targetStatus, ['da_khoa', 'da_ket_thuc'])) {
                return response()->json(['message' => 'Không thể tự động thêm sinh viên vào lớp học phần đã khóa hoặc kết thúc'], 422);
            }
        }

        $validated['giang_vien_id'] = $mainLecturerId;
        if (array_key_exists('base_class_id', $request->all()) || $baseClassId !== null) {
            $validated['lop_id'] = $baseClassId;
        }

        \DB::beginTransaction();
        try {
            $section->update($validated);
            $this->syncLecturersWithRoles($section, $mainLecturerId, $subLecturerIds, $flatIds);

            if ($baseClassId) {
                $studentIds = \App\Models\SinhVien::where('lop_id', $baseClassId)
                    ->where('trang_thai', 'dang_hoc')
                    ->pluck('id');
                $section->sinhViens()->syncWithoutDetaching($studentIds);
            }

            \DB::commit();
            $section->load(['monHoc.khoa', 'giangVien.nguoiDung', 'giangViens.nguoiDung', 'lop']);
            return response()->json($section);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['message' => $e->getMessage() ?: 'Lỗi khi cập nhật lớp học phần'], 500);
        }
    }

    public function updateStatus(Request $request, $id)
    {
        $section = LopHocPhan::findOrFail($id);
        $validated = $request->validate([
            'trang_thai' => 'required|in:dang_mo,da_khoa,da_ket_thuc'
        ]);
        $section->update($validated);
        $section->load(['monHoc.khoa', 'giangVien.nguoiDung', 'giangViens.nguoiDung']);
        return response()->json($section);
    }

    public function destroy($id)
    {
        $section = LopHocPhan::findOrFail($id);
        $section->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
