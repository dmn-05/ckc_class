<?php

namespace App\Http\Controllers;

use App\Models\Khoa;
use App\Models\BoMon;
use App\Models\NguoiDung;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function stats()
    {
        $totalKhoa = Khoa::count();
        $totalBoMon = BoMon::count();
        
        // Sinh viên (vai_tro_id = 3)
        $totalSinhVien = NguoiDung::where('vai_tro_id', 3)->count();
        
        // Giảng viên (vai_tro_id = 2)
        $totalGiangVien = NguoiDung::where('vai_tro_id', 2)->count();

        return response()->json([
            'faculties' => $totalKhoa,
            'departments' => $totalBoMon,
            'students' => $totalSinhVien,
            'lecturers' => $totalGiangVien,
        ]);
    }
}
