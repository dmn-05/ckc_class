<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\NguoiDung;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getGiangVien()
    {
        // vai_tro_id = 2 is giang_vien
        $giangVien = NguoiDung::where('vai_tro_id', 2)
            ->where('trang_thai', 'dang_hoat_dong')
            ->get(['id', 'ho_ten']);
            
        return response()->json($giangVien);
    }
}
