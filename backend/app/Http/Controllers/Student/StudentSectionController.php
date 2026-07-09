<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StudentSectionController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        if ($user->vai_tro_id !== 3 || !$user->sinhVien) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $student = $user->sinhVien;

        $sections = $student->lopHocPhans()
            ->with(['giangVien.nguoiDung', 'monHoc', 'giangViens.nguoiDung'])
            ->withCount('sinhViens')
            ->get();

        return response()->json(['data' => $sections]);
    }

    public function show($id)
    {
        $user = Auth::user();
        if ($user->vai_tro_id !== 3 || !$user->sinhVien) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $student = $user->sinhVien;

        // Check if student is enrolled in this section
        $section = $student->lopHocPhans()
            ->with(['giangVien.nguoiDung', 'monHoc', 'sinhViens.nguoiDung', 'giangViens.nguoiDung'])
            ->find($id);

        if (!$section) {
            return response()->json(['message' => 'Section not found or not enrolled'], 404);
        }

        return response()->json(['data' => $section]);
    }
}
