<?php

namespace App\Http\Controllers\Lecturer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StudentListController extends Controller
{
    private function getGiangVienId()
    {
        $user = auth()->user();
        if (!$user) abort(403, 'Unauthorized');
        if ($user->vai_tro_id === 1) return null; // Admin
        if (!$user->giangVien) abort(403, 'Unauthorized');
        return $user->giangVien->id;
    }

    public function index($sectionId)
    {
        $giangVienId = $this->getGiangVienId();
        
        $query = \App\Models\LopHocPhan::query();
        if ($giangVienId) {
            $query->where(function ($q) use ($giangVienId) {
                $q->where('giang_vien_id', $giangVienId)
                  ->orWhereHas('giangViens', function ($q2) use ($giangVienId) {
                      $q2->where('giang_vien.id', $giangVienId);
                  });
            });
        }
        $section = $query->findOrFail($sectionId);

        $students = $section->sinhViens()->with('nguoiDung', 'lop')->get();
        
        return response()->json([
            'data' => $students,
            'section' => [
                'id' => $section->id,
                'ma_lop_hoc_phan' => $section->ma_lop_hoc_phan,
                'ten_lop' => $section->ten_lop,
                'trang_thai' => $section->trang_thai,
            ]
        ]);
    }

    public function store(Request $request, $sectionId)
    {
        $giangVienId = $this->getGiangVienId();
        
        $query = \App\Models\LopHocPhan::query();
        if ($giangVienId) {
            $query->where(function ($q) use ($giangVienId) {
                $q->where('giang_vien_id', $giangVienId)
                  ->orWhereHas('giangViens', function ($q2) use ($giangVienId) {
                      $q2->where('giang_vien.id', $giangVienId);
                  });
            });
        }
        $section = $query->findOrFail($sectionId);

        $validated = $request->validate([
            'ma_sinh_vien' => 'required|string|exists:sinh_vien,ma_sinh_vien',
        ]);

        $student = \App\Models\SinhVien::where('ma_sinh_vien', $validated['ma_sinh_vien'])->firstOrFail();

        // Check if course section is locked or ended
        if (in_array($section->trang_thai, ['da_khoa', 'da_ket_thuc'])) {
            return response()->json(['message' => 'Không thể thêm sinh viên vào lớp học phần đã khóa hoặc kết thúc'], 422);
        }

        // Check if student is suspended or graduated
        if ($student->trang_thai !== 'dang_hoc') {
            return response()->json(['message' => 'Chỉ có thể thêm sinh viên đang học vào lớp'], 422);
        }

        // Check if already in class
        if ($section->sinhViens()->where('sinh_vien.id', $student->id)->exists()) {
            return response()->json(['message' => 'Sinh viên đã tồn tại trong lớp học phần này'], 422);
        }

        // Add to class
        $section->sinhViens()->attach($student->id, [
            'ngay_tao' => now(),
            'ngay_cap_nhat' => now(),
        ]);

        $student->load('nguoiDung', 'lop');

        return response()->json(['message' => 'Thêm sinh viên thành công', 'data' => $student], 201);
    }

    public function destroy($sectionId, $studentId)
    {
        $giangVienId = $this->getGiangVienId();
        
        $query = \App\Models\LopHocPhan::query();
        if ($giangVienId) {
            $query->where(function ($q) use ($giangVienId) {
                $q->where('giang_vien_id', $giangVienId)
                  ->orWhereHas('giangViens', function ($q2) use ($giangVienId) {
                      $q2->where('giang_vien.id', $giangVienId);
                  });
            });
        }
        $section = $query->findOrFail($sectionId);

        $section->sinhViens()->detach($studentId);

        return response()->json(['message' => 'Đã xóa sinh viên khỏi lớp']);
    }

    public function search(Request $request)
    {
        $this->getGiangVienId(); // Ensure user is a lecturer

        $query = $request->get('q', '');
        $sectionId = $request->get('section_id');
        $classId = $request->get('class_id');
        
        $students = \App\Models\SinhVien::with('nguoiDung', 'lop')
            ->where('trang_thai', 'dang_hoc')
            ->when(strlen($query) >= 2, function($q) use ($query) {
                $q->where(function($sub) use ($query) {
                    $sub->where('ma_sinh_vien', 'like', "%{$query}%")
                        ->orWhereHas('nguoiDung', function($subQ) use ($query) {
                            $subQ->where('ho_ten', 'like', "%{$query}%");
                        });
                });
            })
            ->when($sectionId, function($q) use ($sectionId) {
                $q->whereDoesntHave('lopHocPhans', function($subQ) use ($sectionId) {
                    $subQ->where('lop_hoc_phan_id', $sectionId);
                });
            })
            ->when($classId, function($q) use ($classId) {
                $q->where(function($sub) use ($classId) {
                    $sub->where('lop_id', '!=', $classId)->orWhereNull('lop_id');
                });
            })
            ->limit(20)
            ->get();

        return response()->json(['data' => $students]);
    }
}
