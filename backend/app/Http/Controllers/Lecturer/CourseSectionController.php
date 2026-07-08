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
        $sections = LopHocPhan::where('giang_vien_id', $giangVienId)
            ->with(['monHoc.khoa', 'giangVien.nguoiDung'])
            ->get();
        return response()->json($sections);
    }

    public function store(Request $request)
    {
        $giangVienId = $this->getGiangVienId();

        $validated = $request->validate([
            'ma_lop_hoc_phan' => 'required|string|max:30|unique:lop_hoc_phan,ma_lop_hoc_phan',
            'ten_lop' => 'required|string|max:100',
            'mon_hoc_id' => 'required|exists:mon_hoc,id',
            // giang_vien_id is forced
            'hoc_ky' => 'required|in:HK1,HK2,HK3,HK4,HK5,HK6',
            'nam_hoc' => 'required|string|max:20',
            'si_so_toi_da' => 'required|integer|min:1',
            'trang_thai' => 'required|in:dang_mo,da_khoa,da_ket_thuc',
            'base_class_id' => 'nullable|exists:lop,id'
        ]);
        
        $validated['giang_vien_id'] = $giangVienId;
        $baseClassId = $validated['base_class_id'] ?? null;
        unset($validated['base_class_id']);

        $section = LopHocPhan::create($validated);

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
        $section = LopHocPhan::where('giang_vien_id', $giangVienId)
            ->with(['monHoc.khoa', 'giangVien.nguoiDung'])
            ->findOrFail($id);
        return response()->json($section);
    }

    public function update(Request $request, $id)
    {
        $giangVienId = $this->getGiangVienId();
        $section = LopHocPhan::where('giang_vien_id', $giangVienId)->findOrFail($id);

        $validated = $request->validate([
            'ma_lop_hoc_phan' => 'required|string|max:30|unique:lop_hoc_phan,ma_lop_hoc_phan,' . $id,
            'ten_lop' => 'required|string|max:100',
            'mon_hoc_id' => 'required|exists:mon_hoc,id',
            // giang_vien_id is forced
            'hoc_ky' => 'required|in:HK1,HK2,HK3,HK4,HK5,HK6',
            'nam_hoc' => 'required|string|max:20',
            'si_so_toi_da' => 'required|integer|min:1',
            'trang_thai' => 'required|in:dang_mo,da_khoa,da_ket_thuc',
            'base_class_id' => 'nullable|exists:lop,id'
        ]);
        
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
