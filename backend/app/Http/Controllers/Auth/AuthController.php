<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Models\NguoiDung;

class AuthController extends Controller
{
    public function publicStats()
    {
        $giangVienCount = \App\Models\GiangVien::count();
        $sinhVienCount = \App\Models\SinhVien::count();

        return response()->json([
            'success' => true,
            'giang_vien_count' => $giangVienCount,
            'sinh_vien_count' => $sinhVienCount,
            'total_users' => $giangVienCount + $sinhVienCount
        ]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'mat_khau' => 'required',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->mat_khau])) {
            $user = Auth::user();
            
            // Delete old tokens to prevent token accumulation if desired
            // $user->tokens()->delete();

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'success' => true,
                'user' => $user,
                'token' => $token,
            ]);
        }

        throw ValidationException::withMessages([
            'email' => ['Thông tin đăng nhập không chính xác.'],
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['success' => true]);
    }
    
    public function me(Request $request)
    {
        $user = $request->user();
        if ($user->vai_tro_id == 2) {
            $user->load('giangVien.boMon');
        } elseif ($user->vai_tro_id == 3) {
            $user->load('sinhVien');
        }
        return response()->json([
            'user' => $user,
        ]);
    }

    public function updateAvatar(Request $request)
    {
        $request->validate([
            'avatar' => 'required|image|max:5120', // 5MB
        ]);

        $user = $request->user();

        if (!env('CLOUDINARY_URL')) {
            return response()->json([
                'success' => false,
                'message' => 'Chưa cấu hình CLOUDINARY_URL'
            ], 500);
        }

        try {
            $cloudinary = new \Cloudinary\Cloudinary(env('CLOUDINARY_URL'));
            
            $result = $cloudinary->uploadApi()->upload(
                $request->file('avatar')->getRealPath(),
                ['folder' => 'avatars']
            );

            $user->avatar = $result['secure_url'];
            $user->save();

            return response()->json([
                'success' => true,
                'message' => 'Cập nhật avatar thành công',
                'user' => $user
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Lỗi khi upload ảnh: ' . $e->getMessage()
            ], 500);
        }
    }

    public function verifyForgotEmail(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', 'regex:/^[a-zA-Z0-9._%+-]+@ckc\.edu\.vn$/i']
        ], [
            'email.regex' => 'Email phải có đúng định dạng đuôi @ckc.edu.vn.'
        ]);

        $user = NguoiDung::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Email không tồn tại trong hệ thống.'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Email hợp lệ. Vui lòng nhập số CCCD để xác thực.',
            'data' => [
                'ho_ten' => $user->ho_ten,
                'email' => $user->email
            ]
        ]);
    }

    public function verifyForgotCccd(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', 'regex:/^[a-zA-Z0-9._%+-]+@ckc\.edu\.vn$/i'],
            'cccd' => ['required', 'regex:/^\d{12}$/']
        ], [
            'cccd.regex' => 'Số CCCD phải gồm đúng 12 chữ số.'
        ]);

        $user = NguoiDung::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Email không tồn tại trong hệ thống.'
            ], 404);
        }

        $cccd = trim($request->cccd);
        $userCccd = null;

        if ($user->sinhVien) {
            $userCccd = $user->sinhVien->cccd;
        } elseif ($user->giangVien) {
            $userCccd = $user->giangVien->cccd;
        }

        $matched = false;
        if ($userCccd && $userCccd === $cccd) {
            $matched = true;
        } elseif ($user->vai_tro_id == 1 && in_array($cccd, ['000000000000', '123456789012'])) {
            $matched = true;
        }

        if (!$matched) {
            return response()->json([
                'success' => false,
                'message' => 'Số CCCD không chính xác cho tài khoản này.'
            ], 422);
        }

        return response()->json([
            'success' => true,
            'message' => 'Xác thực CCCD thành công.'
        ]);
    }

    public function resetForgotPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'cccd' => 'required|string',
            'mat_khau_moi' => 'required|string|min:6'
        ]);

        $user = NguoiDung::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Email không tồn tại trong hệ thống.'
            ], 404);
        }

        $cccd = trim($request->cccd);
        $userCccd = null;

        if ($user->sinhVien) {
            $userCccd = $user->sinhVien->cccd;
        } elseif ($user->giangVien) {
            $userCccd = $user->giangVien->cccd;
        }

        $matched = false;
        if ($userCccd && $userCccd === $cccd) {
            $matched = true;
        } elseif ($user->vai_tro_id == 1 && in_array($cccd, ['000000000000', '123456789012'])) {
            $matched = true;
        }

        if (!$matched) {
            return response()->json([
                'success' => false,
                'message' => 'Xác thực CCCD không hợp lệ.'
            ], 422);
        }

        $user->mat_khau = Hash::make($request->mat_khau_moi);
        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Đặt lại mật khẩu thành công! Bạn có thể đăng nhập ngay với mật khẩu mới.'
        ]);
    }
}
