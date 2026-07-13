<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\BaiTap;
use App\Models\BaiKiemTra;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function stats(Request $request)
    {
        $user = Auth::user();
        if ($user->vai_tro_id !== 3 || !$user->sinhVien) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $student = $user->sinhVien;
        $sectionIds = $student->lopHocPhans()->pluck('lop_hoc_phan.id');

        $totalSections = $sectionIds->count();

        // Count assignments not submitted
        $submittedAssignmentIds = DB::table('bai_nop')
            ->where('sinh_vien_id', $student->id)
            ->pluck('bai_tap_id');

        $pendingAssignments = BaiTap::whereIn('lop_hoc_phan_id', $sectionIds)
            ->where('trang_thai', 'hien_thi')
            ->whereNotIn('id', $submittedAssignmentIds)
            ->count();

        // Count quizzes not attempted
        $attemptedQuizIds = DB::table('ket_qua_kiem_tra')
            ->where('sinh_vien_id', $student->id)
            ->pluck('bai_kiem_tra_id');

        $pendingQuizzes = BaiKiemTra::whereIn('lop_hoc_phan_id', $sectionIds)
            ->whereNotIn('id', $attemptedQuizIds)
            ->count();

        return response()->json([
            'totalSections' => $totalSections,
            'pendingAssignments' => $pendingAssignments,
            'pendingQuizzes' => $pendingQuizzes,
        ]);
    }
}
