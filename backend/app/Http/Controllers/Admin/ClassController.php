<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lop;
use App\Models\SinhVien;
use Illuminate\Http\Request;

class ClassController extends Controller
{
    public function index()
    {
        $classes = Lop::with('khoa')->withCount('sinhViens')->get();
        return response()->json($classes);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'ma_lop' => 'required|string|max:20|unique:lop,ma_lop',
            'ten_lop' => 'required|string|max:100',
            'khoa_id' => 'required|exists:khoa,id',
            'nam_nhap_hoc' => 'required|integer',
            'trang_thai' => 'required|in:dang_hoc,da_tot_nghiep',
        ]);

        $lop = Lop::create($validated);
        return response()->json($lop, 201);
    }

    public function show($id)
    {
        $lop = Lop::with('khoa')->findOrFail($id);
        return response()->json($lop);
    }

    public function update(Request $request, $id)
    {
        $lop = Lop::findOrFail($id);

        $validated = $request->validate([
            'ma_lop' => 'required|string|max:20|unique:lop,ma_lop,' . $id,
            'ten_lop' => 'required|string|max:100',
            'khoa_id' => 'required|exists:khoa,id',
            'nam_nhap_hoc' => 'required|integer',
            'trang_thai' => 'required|in:dang_hoc,da_tot_nghiep',
        ]);

        $lop->update($validated);
        return response()->json($lop);
    }

    public function destroy($id)
    {
        $lop = Lop::findOrFail($id);
        $lop->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }

    public function getStudents($id)
    {
        $lop = Lop::findOrFail($id);
        $students = $lop->sinhViens()->with('nguoiDung', 'khoa', 'lop')->get();
        return response()->json(['data' => $students]);
    }

    public function addStudent(Request $request, $id)
    {
        $lop = Lop::findOrFail($id);
        $validated = $request->validate([
            'ma_sinh_vien' => 'required|string|exists:sinh_vien,ma_sinh_vien',
        ]);
        $student = SinhVien::where('ma_sinh_vien', $validated['ma_sinh_vien'])->firstOrFail();

        if ($student->lop_id == $lop->id) {
            return response()->json(['message' => 'Sinh viên này đã thuộc lớp ' . $lop->ma_lop], 422);
        }

        $student->lop_id = $lop->id;
        if ($lop->khoa_id) {
            $student->khoa_id = $lop->khoa_id;
        }
        $student->save();
        $student->load('nguoiDung', 'khoa', 'lop');

        \App\Helpers\NotificationHelper::createForStudent(
            $student->id,
            "Được thêm vào lớp học",
            "Bạn vừa được thêm vào danh sách lớp " . $lop->ten_lop . " (" . $lop->ma_lop . ").",
            'them_vao_lop',
            '/student/profile',
            null,
            Auth::id()
        );

        return response()->json(['message' => 'Thêm sinh viên vào lớp thành công', 'data' => $student], 201);
    }

    public function removeStudent($id, $studentId)
    {
        $lop = Lop::findOrFail($id);
        $student = SinhVien::where('lop_id', $lop->id)->findOrFail($studentId);
        $student->lop_id = null;
        $student->save();
        return response()->json(['message' => 'Đã xóa sinh viên khỏi lớp']);
    }
}
