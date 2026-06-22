<?php

namespace App\Http\Controllers;

use App\Models\NguoiDung;
use Illuminate\Http\Request;

class NguoiDungController extends Controller
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
