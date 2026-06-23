<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StudentProfileController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user() ?? \App\Models\NguoiDung::find(4); // Fallback for testing

        // Eager load relationships: sinhVien, lop, khoa
        $user->load('sinhVien.lop.khoa');

        return response()->json([
            'success' => true,
            'data' => $user,
        ]);
    }

    public function update(Request $request)
    {
        $user = $request->user() ?? \App\Models\NguoiDung::find(4); // Fallback for testing

        $validatedData = $request->validate([
            'ho_ten' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255|unique:nguoi_dung,email,' . $user->id,
            'ngay_sinh' => 'nullable|date',
            'gioi_tinh' => 'nullable|in:nam,nu,khac',
            'cccd' => 'nullable|string|max:20',
            'so_dien_thoai' => 'nullable|string|max:20',
            'dia_chi' => 'nullable|string|max:255',
        ]);

        if (isset($validatedData['ho_ten'])) {
            $user->ho_ten = $validatedData['ho_ten'];
        }
        if (isset($validatedData['email'])) {
            $user->email = $validatedData['email'];
        }
        $user->save();

        if ($user->sinhVien) {
            if (array_key_exists('ngay_sinh', $validatedData)) {
                $user->sinhVien->ngay_sinh = $validatedData['ngay_sinh'];
            }
            if (array_key_exists('gioi_tinh', $validatedData)) {
                $user->sinhVien->gioi_tinh = $validatedData['gioi_tinh'];
            }
            if (array_key_exists('cccd', $validatedData)) {
                $user->sinhVien->cccd = $validatedData['cccd'];
            }
            if (array_key_exists('so_dien_thoai', $validatedData)) {
                $user->sinhVien->so_dien_thoai = $validatedData['so_dien_thoai'];
            }
            if (array_key_exists('dia_chi', $validatedData)) {
                $user->sinhVien->dia_chi = $validatedData['dia_chi'];
            }
            $user->sinhVien->save();
        }

        return response()->json([
            'success' => true,
            'message' => 'Cập nhật hồ sơ thành công!',
            'data' => $user->load('sinhVien.lop.khoa')
        ]);
    }
}
