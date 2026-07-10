<?php

namespace App\Http\Controllers\Lecturer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LecturerProfileController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user() ?? \App\Models\NguoiDung::find(2); // Fallback to GV001 for testing

        // Eager load relationships: giangVien, boMon, khoa
        $user->load('giangVien.boMon.khoa');

        return response()->json([
            'success' => true,
            'data' => $user,
        ]);
    }

    public function update(Request $request)
    {
        $user = $request->user() ?? \App\Models\NguoiDung::find(2); // Fallback to GV001 for testing

        $validatedData = $request->validate([
            'ho_ten' => 'nullable|string|max:255',
            'email' => ['nullable', 'email', 'regex:/^[a-zA-Z0-9._%+-]+@ckc\.edu\.vn$/i', 'unique:nguoi_dung,email,' . $user->id],
            'ngay_sinh' => 'nullable|date',
            'gioi_tinh' => 'nullable|in:nam,nu,khac',
            'cccd' => 'nullable|regex:/^\d{12}$/',
            'so_dien_thoai' => 'nullable|regex:/^\d{10}$/',
            'dia_chi' => 'nullable|string|max:255',
        ], [
            'email.email' => 'Email không đúng chuẩn email.',
            'email.regex' => 'Email phải có đuôi @ckc.edu.vn.',
            'cccd.regex' => 'Số CCCD / CMND phải gồm đúng 12 chữ số.',
            'so_dien_thoai.regex' => 'Số điện thoại phải gồm đúng 10 chữ số.',
        ]);

        if (isset($validatedData['ho_ten'])) {
            $user->ho_ten = $validatedData['ho_ten'];
        }
        if (isset($validatedData['email'])) {
            $user->email = $validatedData['email'];
        }
        $user->save();

        if ($user->giangVien) {
            if (array_key_exists('ngay_sinh', $validatedData)) {
                $user->giangVien->ngay_sinh = $validatedData['ngay_sinh'];
            }
            if (array_key_exists('gioi_tinh', $validatedData)) {
                $user->giangVien->gioi_tinh = $validatedData['gioi_tinh'];
            }
            if (array_key_exists('cccd', $validatedData)) {
                $user->giangVien->cccd = $validatedData['cccd'];
            }
            if (array_key_exists('so_dien_thoai', $validatedData)) {
                $user->giangVien->so_dien_thoai = $validatedData['so_dien_thoai'];
            }
            if (array_key_exists('dia_chi', $validatedData)) {
                $user->giangVien->dia_chi = $validatedData['dia_chi'];
            }
            $user->giangVien->save();
        }

        return response()->json([
            'success' => true,
            'message' => 'Cập nhật hồ sơ thành công!',
            'data' => $user->load('giangVien.boMon.khoa')
        ]);
    }
}
