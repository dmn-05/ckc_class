<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\NguoiDung;
use Illuminate\Support\Facades\Hash;

class AdminProfileController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user() ?? NguoiDung::where('vai_tro_id', 1)->first() ?? NguoiDung::find(1);

        return response()->json([
            'success' => true,
            'data' => $user,
        ]);
    }

    public function update(Request $request)
    {
        $user = $request->user() ?? NguoiDung::where('vai_tro_id', 1)->first() ?? NguoiDung::find(1);

        $validatedData = $request->validate([
            'ho_ten' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255|unique:nguoi_dung,email,' . $user->id,
            'mat_khau_cu' => 'nullable|string',
            'mat_khau_moi' => 'nullable|string|min:6',
        ]);

        if (isset($validatedData['ho_ten'])) {
            $user->ho_ten = $validatedData['ho_ten'];
        }
        if (isset($validatedData['email'])) {
            $user->email = $validatedData['email'];
        }

        if (!empty($validatedData['mat_khau_moi'])) {
            if (!empty($validatedData['mat_khau_cu']) && !Hash::check($validatedData['mat_khau_cu'], $user->mat_khau)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Mật khẩu cũ không chính xác!',
                ], 400);
            }
            $user->mat_khau = Hash::make($validatedData['mat_khau_moi']);
        }

        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Cập nhật thông tin tài khoản thành công!',
            'data' => $user
        ]);
    }
}
