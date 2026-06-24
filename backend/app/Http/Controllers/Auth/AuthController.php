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
}
