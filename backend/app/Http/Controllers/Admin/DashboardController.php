<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\Khoa;
use App\Models\BoMon;
use App\Models\SinhVien;
use App\Models\GiangVien;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function stats()
    {
        $totalKhoa = Khoa::count();
        $totalBoMon = BoMon::count();
        
        // Sinh viên (chỉ đếm những sinh viên chưa bị xóa soft-delete)
        $totalSinhVien = SinhVien::count();
        
        // Giảng viên (chỉ đếm những giảng viên chưa bị xóa soft-delete)
        $totalGiangVien = GiangVien::count();

        return response()->json([
            'faculties' => $totalKhoa,
            'departments' => $totalBoMon,
            'students' => $totalSinhVien,
            'lecturers' => $totalGiangVien,
        ]);
    }
}
