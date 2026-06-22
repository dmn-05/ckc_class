<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\NguoiDung;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getLecturers()
    {
        // vai_tro_id = 2 is giang_vien
        $lecturers = NguoiDung::where('vai_tro_id', 2)
            ->with(['giangVien.boMon.khoa'])
            ->get();
            
        return response()->json($lecturers);
    }

    public function getStudents()
    {
        // vai_tro_id = 3 is sinh_vien
        $students = NguoiDung::where('vai_tro_id', 3)
            ->whereHas('sinhVien')
            ->with(['sinhVien.khoa', 'sinhVien.lop'])
            ->get();
            
        return response()->json($students);
    }

    public function getStudentById($id)
    {
        $student = NguoiDung::where('vai_tro_id', 3)
            ->with(['sinhVien.khoa', 'sinhVien.lop'])
            ->findOrFail($id);
        return response()->json($student);
    }

    public function storeStudent(Request $request)
    {
        $validated = $request->validate([
            'ho_ten' => 'required|string|max:100',
            'email' => 'required|email|unique:nguoi_dung,email',
            'mat_khau' => 'nullable|string|min:6',
            'so_dien_thoai' => 'nullable|string|max:15',
            'ngay_sinh' => 'nullable|date',
            'gioi_tinh' => 'required|in:nam,nu,khac',
            'ma_sinh_vien' => 'required|string|unique:sinh_vien,ma_sinh_vien',
            'khoa_id' => 'required|exists:khoa,id',
            'lop_id' => 'required|exists:lop,id',
            'trang_thai' => 'required|in:dang_hoc,tam_nghi,da_tot_nghiep',
        ]);

        \DB::beginTransaction();
        try {
            $user = NguoiDung::create([
                'ho_ten' => $validated['ho_ten'],
                'email' => $validated['email'],
                'mat_khau' => \Hash::make($validated['mat_khau'] ?? '123456'),
                'vai_tro_id' => 3,
                'trang_thai' => 'dang_hoat_dong',
            ]);

            \App\Models\SinhVien::create([
                'nguoi_dung_id' => $user->id,
                'ma_sinh_vien' => $validated['ma_sinh_vien'],
                'khoa_id' => $validated['khoa_id'],
                'lop_id' => $validated['lop_id'],
                'so_dien_thoai' => $validated['so_dien_thoai'],
                'ngay_sinh' => $validated['ngay_sinh'],
                'gioi_tinh' => $validated['gioi_tinh'],
                'trang_thai' => $validated['trang_thai'],
            ]);

            \DB::commit();
            return response()->json(['message' => 'Thêm sinh viên thành công', 'data' => $user], 201);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['message' => 'Lỗi thêm sinh viên', 'error' => $e->getMessage()], 500);
        }
    }

    public function updateStudent(Request $request, $id)
    {
        $user = NguoiDung::where('vai_tro_id', 3)->findOrFail($id);

        $validated = $request->validate([
            'ho_ten' => 'required|string|max:100',
            'email' => 'required|email|unique:nguoi_dung,email,' . $id,
            'so_dien_thoai' => 'nullable|string|max:15',
            'ngay_sinh' => 'nullable|date',
            'gioi_tinh' => 'required|in:nam,nu,khac',
            'ma_sinh_vien' => 'required|string|unique:sinh_vien,ma_sinh_vien,' . $user->sinhVien->id,
            'khoa_id' => 'required|exists:khoa,id',
            'lop_id' => 'required|exists:lop,id',
            'trang_thai' => 'required|in:dang_hoc,tam_nghi,da_tot_nghiep',
        ]);

        \DB::beginTransaction();
        try {
            $user->update([
                'ho_ten' => $validated['ho_ten'],
                'email' => $validated['email'],
            ]);

            $user->sinhVien()->update([
                'ma_sinh_vien' => $validated['ma_sinh_vien'],
                'khoa_id' => $validated['khoa_id'],
                'lop_id' => $validated['lop_id'],
                'so_dien_thoai' => $validated['so_dien_thoai'],
                'ngay_sinh' => $validated['ngay_sinh'],
                'gioi_tinh' => $validated['gioi_tinh'],
                'trang_thai' => $validated['trang_thai'],
            ]);

            \DB::commit();
            return response()->json(['message' => 'Cập nhật sinh viên thành công', 'data' => $user]);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['message' => 'Lỗi cập nhật sinh viên', 'error' => $e->getMessage()], 500);
        }
    }

    public function resetStudentPassword($id)
    {
        $user = NguoiDung::where('vai_tro_id', 3)->findOrFail($id);
        $user->mat_khau = \Hash::make('123456');
        $user->save();

        return response()->json(['message' => 'Đặt lại mật khẩu thành công']);
    }

    public function destroyStudent($id)
    {
        try {
            \DB::beginTransaction();

            $user = NguoiDung::where('vai_tro_id', 3)->findOrFail($id);
            
            // Soft delete the SinhVien record
            if ($user->sinhVien) {
                $user->sinhVien()->delete();
            }

            // Also lock the user account
            $user->update(['trang_thai' => 'bi_khoa']);

            \DB::commit();
            return response()->json(['message' => 'Xóa sinh viên thành công']);
        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json(['message' => 'Lỗi xóa sinh viên', 'error' => $e->getMessage()], 500);
        }
    }
}
