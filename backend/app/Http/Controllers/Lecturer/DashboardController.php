<?php

namespace App\Http\Controllers\Lecturer;

use App\Http\Controllers\Controller;
use App\Models\LopHocPhan;
use App\Models\BaiTap;
use App\Models\BaiKiemTra;
use App\Models\BaiViet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    private function getGiangVienId()
    {
        $user = auth()->user();
        if (!$user || !$user->giangVien) {
            abort(403, 'Unauthorized');
        }
        return $user->giangVien->id;
    }

    public function stats()
    {
        $giangVienId = $this->getGiangVienId();

        $sectionIds = LopHocPhan::where(function ($q) use ($giangVienId) {
            $q->where('giang_vien_id', $giangVienId)
              ->orWhereHas('giangViens', function ($q2) use ($giangVienId) {
                  $q2->where('giang_vien.id', $giangVienId);
              });
        })->pluck('id');

        $totalSections = $sectionIds->count();

        // Count unique students enrolled in these sections
        $totalStudents = 0;
        if ($totalSections > 0) {
            $totalStudents = DB::table('sinh_vien_lop_hoc_phan')
                ->whereIn('lop_hoc_phan_id', $sectionIds)
                ->distinct('sinh_vien_id')
                ->count('sinh_vien_id');
        }

        // Count exams / quizzes
        $totalExams = BaiKiemTra::whereIn('lop_hoc_phan_id', $sectionIds)->count();

        // Count assignments
        $totalAssignments = BaiTap::whereIn('lop_hoc_phan_id', $sectionIds)->count();

        // Count resources / posts
        $totalResources = BaiViet::whereIn('lop_hoc_phan_id', $sectionIds)->count();

        return response()->json([
            'sections' => $totalSections,
            'students' => $totalStudents,
            'exams' => $totalExams,
            'assignments' => $totalAssignments,
            'resources' => $totalResources,
        ]);
    }
}
