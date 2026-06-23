<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LopHocPhan;
use Illuminate\Http\Request;

class CourseSectionController extends Controller
{
    public function index()
    {
        $sections = LopHocPhan::with(['monHoc.khoa', 'giangVien.nguoiDung'])->get();
        return response()->json($sections);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'ma_lop_hoc_phan' => 'required|string|max:30|unique:lop_hoc_phan,ma_lop_hoc_phan',
            'ten_lop' => 'required|string|max:100',
            'mon_hoc_id' => 'required|exists:mon_hoc,id',
            'giang_vien_id' => 'required|exists:giang_vien,id',
            'hoc_ky' => 'required|in:HK1,HK2,HK3',
            'nam_hoc' => 'required|string|max:20',
            'si_so_toi_da' => 'required|integer|min:1',
            'trang_thai' => 'required|in:dang_mo,da_khoa,da_ket_thuc',
        ]);

        $section = LopHocPhan::create($validated);
        return response()->json($section, 201);
    }

    public function show($id)
    {
        $section = LopHocPhan::with(['monHoc.khoa', 'giangVien.nguoiDung'])->findOrFail($id);
        return response()->json($section);
    }

    public function update(Request $request, $id)
    {
        $section = LopHocPhan::findOrFail($id);

        $validated = $request->validate([
            'ma_lop_hoc_phan' => 'required|string|max:30|unique:lop_hoc_phan,ma_lop_hoc_phan,' . $id,
            'ten_lop' => 'required|string|max:100',
            'mon_hoc_id' => 'required|exists:mon_hoc,id',
            'giang_vien_id' => 'required|exists:giang_vien,id',
            'hoc_ky' => 'required|in:HK1,HK2,HK3',
            'nam_hoc' => 'required|string|max:20',
            'si_so_toi_da' => 'required|integer|min:1',
            'trang_thai' => 'required|in:dang_mo,da_khoa,da_ket_thuc',
        ]);

        $section->update($validated);
        return response()->json($section);
    }

    public function destroy($id)
    {
        $section = LopHocPhan::findOrFail($id);
        $section->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
