<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
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
        return response()->json([
            'user' => $request->user(),
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
}
