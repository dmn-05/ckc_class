<?php

namespace App\Http\Controllers\Lecturer;

use App\Http\Controllers\Controller;
use App\Models\BaiTap;
use App\Models\LopHocPhan;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AssignmentController extends Controller
{
    private function getGiangVienId()
    {
        $user = auth()->user();
        if (!$user || !$user->giangVien) {
            abort(403, 'Unauthorized');
        }
        return $user->giangVien->id;
    }

    private function getSectionIds()
    {
        $giangVienId = $this->getGiangVienId();
        return LopHocPhan::where(function ($q) use ($giangVienId) {
            $q->where('giang_vien_id', $giangVienId)
              ->orWhereHas('giangViens', function ($q2) use ($giangVienId) {
                  $q2->where('giang_vien.id', $giangVienId);
              });
        })->pluck('id');
    }

    public function index()
    {
        $sectionIds = $this->getSectionIds();

        $assignments = BaiTap::with(['lopHocPhan.monHoc', 'nguoiTao', 'tepTinBaiTap.tepTin'])
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->orderBy('ngay_tao', 'desc')
            ->get()
            ->map(function ($item) {
                $totalStudents = $item->lopHocPhan ? $item->lopHocPhan->sinhViens()->count() : 0;
                return $this->formatAssignment($item, $totalStudents);
            });

        return response()->json(['data' => $assignments]);
    }

    public function store(Request $request)
    {
        $sectionIds = $this->getSectionIds();

        $validated = $request->validate([
            'tieu_de'          => 'required|string|max:255',
            'noi_dung'         => 'nullable|string',
            'huong_dan'        => 'nullable|string',
            'lop_hoc_phan_id'  => 'required|integer|exists:lop_hoc_phan,id',
            'diem_toi_da'      => 'nullable|numeric|min:1|max:100',
            'han_nop'          => 'nullable|date',
            'cho_phep_nop_tre' => 'nullable|boolean',
            'tyle_phat_tre'    => 'nullable|integer|min:0|max:100',
            'trang_thai'       => 'nullable|string|in:hien_thi,an',
            'files'            => 'nullable|array',
            'files.*'          => 'nullable|file|max:51200', // max 50MB
        ]);

        if (!in_array($validated['lop_hoc_phan_id'], $sectionIds->toArray())) {
            abort(403, 'You do not own this course section');
        }

        $secCheck = \App\Models\LopHocPhan::find($validated['lop_hoc_phan_id']);
        if ($secCheck && $secCheck->trang_thai === 'da_khoa') {
            abort(403, 'Lớp học phần đã được lưu trữ, không thể chỉnh sửa trừ phi được khôi phục');
        }

        $baiTap = BaiTap::create([
            'tieu_de'          => $validated['tieu_de'],
            'noi_dung'         => $validated['noi_dung'] ?? null,
            'huong_dan'        => $validated['huong_dan'] ?? null,
            'file_url'         => null, // Legacy field
            'file_name'        => null, // Legacy field
            'lop_hoc_phan_id'  => $validated['lop_hoc_phan_id'],
            'nguoi_tao_id'     => Auth::id(),
            'diem_toi_da'      => $validated['diem_toi_da'] ?? 10,
            'han_nop'          => $validated['han_nop'] ?? null,
            'cho_phep_nop_tre' => $validated['cho_phep_nop_tre'] ?? false,
            'tyle_phat_tre'    => $validated['tyle_phat_tre'] ?? 10,
            'trang_thai'       => $validated['trang_thai'] ?? 'hien_thi',
        ]);

        if ($request->hasFile('files') && env('CLOUDINARY_URL')) {
            $cloudinary = new \Cloudinary\Cloudinary(env('CLOUDINARY_URL'));
            foreach ($request->file('files') as $file) {
                if ($file->getSize() === 0) continue;
                $originalFileName = $file->getClientOriginalName();
                try {
                    $result = $cloudinary->uploadApi()->upload(
                        $file->getRealPath(),
                        [
                            'folder'        => 'assignments',
                            'resource_type' => 'auto',
                            'filename_override' => $originalFileName,
                            'use_filename'  => true,
                        ]
                    );
                } catch (\Exception $e) {
                    $result = $cloudinary->uploadApi()->upload(
                        $file->getRealPath(),
                        [
                            'folder'        => 'assignments',
                            'resource_type' => 'raw',
                            'filename_override' => $originalFileName,
                            'use_filename'  => true,
                        ]
                    );
                }

                $tepTin = \App\Models\TepTin::create([
                    'ten_file'     => $file->getClientOriginalName(),
                    'ten_file_luu' => basename($result['secure_url']),
                    'duong_dan'    => $result['secure_url'],
                    'loai_file'    => $file->getClientOriginalExtension() ?: 'unknown',
                    'kich_thuoc'   => $file->getSize(),
                    'nguoi_tao_id' => Auth::id(),
                    'trang_thai'   => 'dang_su_dung',
                ]);

                \App\Models\TepTinBaiTap::create([
                    'tep_tin_id' => $tepTin->id,
                    'bai_tap_id' => $baiTap->id,
                ]);
            }
        }

        \App\Models\BaiViet::create([
            'tieu_de'          => $baiTap->tieu_de,
            'noi_dung'         => '',
            'lop_hoc_phan_id'  => $baiTap->lop_hoc_phan_id,
            'nguoi_tao_id'     => Auth::id(),
            'loai_bai_viet'    => 'bai_tap',
            'bai_tap_id'       => $baiTap->id,
            'trang_thai'       => $baiTap->trang_thai,
            'han_nop'          => $baiTap->han_nop,
        ]);

        \App\Helpers\NotificationHelper::createForClass(
            $baiTap->lop_hoc_phan_id,
            "Bài tập mới: " . $baiTap->tieu_de,
            "Giảng viên vừa tạo bài tập mới. Hạn nộp: " . ($baiTap->han_nop ? \Carbon\Carbon::parse($baiTap->han_nop)->format('d/m/Y H:i') : 'Không hạn') ,
            'bai_tap_moi',
            '/student/assignments/' . $baiTap->id,
            Auth::id()
        );

        $baiTap->load(['lopHocPhan.monHoc', 'nguoiTao']);
        $totalStudents = $baiTap->lopHocPhan->sinhViens()->count();

        return response()->json(['data' => $this->formatAssignment($baiTap, $totalStudents)], 201);
    }

    public function show($id)
    {
        $sectionIds = $this->getSectionIds();

        $baiTap = BaiTap::with(['lopHocPhan.monHoc', 'nguoiTao', 'tepTinBaiTap.tepTin'])
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->findOrFail($id);

        $totalStudents = $baiTap->lopHocPhan->sinhViens()->count();

        return response()->json(['data' => $this->formatAssignment($baiTap, $totalStudents)]);
    }

    public function update(Request $request, $id)
    {
        $sectionIds = $this->getSectionIds();

        $baiTap = BaiTap::whereIn('lop_hoc_phan_id', $sectionIds)->findOrFail($id);
        if ($baiTap->lopHocPhan && $baiTap->lopHocPhan->trang_thai === 'da_khoa') {
            abort(403, 'Lớp học phần đã được lưu trữ, không thể chỉnh sửa trừ phi được khôi phục');
        }

        $validated = $request->validate([
            'tieu_de'          => 'sometimes|string|max:255',
            'noi_dung'         => 'nullable|string',
            'huong_dan'        => 'nullable|string',
            'diem_toi_da'      => 'nullable|numeric|min:1|max:100',
            'han_nop'          => 'nullable|date',
            'cho_phep_nop_tre' => 'nullable|boolean',
            'tyle_phat_tre'    => 'nullable|integer|min:0|max:100',
            'trang_thai'       => 'sometimes|string|in:hien_thi,an',
            'files'            => 'nullable|array',
            'files.*'          => 'nullable|file|max:51200',
            'remove_file_ids'  => 'nullable|array',
            'remove_file_ids.*'=> 'integer',
            'remove_file'      => 'nullable|boolean', // Legacy
        ]);

        $updateData = [];
        foreach (['tieu_de', 'noi_dung', 'huong_dan', 'diem_toi_da', 'han_nop', 'cho_phep_nop_tre', 'tyle_phat_tre', 'trang_thai'] as $field) {
            if (array_key_exists($field, $validated)) {
                $updateData[$field] = $validated[$field];
            }
        }

        // Xóa file đính kèm dựa vào remove_file_ids
        if (!empty($validated['remove_file_ids'])) {
            $tepTins = \App\Models\TepTinBaiTap::where('bai_tap_id', $baiTap->id)
                ->whereIn('tep_tin_id', $validated['remove_file_ids'])
                ->get();
            foreach ($tepTins as $ttbt) {
                // Có thể gọi Cloudinary delete nếu cần, nhưng tạm thời chỉ xóa khỏi db
                $ttbt->tepTin()->delete(); // Xóa TepTin cascade sẽ xóa TepTinBaiTap
            }
        }

        // Upload file mới lên Cloudinary
        if ($request->hasFile('files') && env('CLOUDINARY_URL')) {
            $cloudinary = new \Cloudinary\Cloudinary(env('CLOUDINARY_URL'));
            foreach ($request->file('files') as $file) {
                $result = $cloudinary->uploadApi()->upload(
                    $file->getRealPath(),
                    [
                        'folder'        => 'assignments',
                        'resource_type' => 'auto',
                    ]
                );

                $tepTin = \App\Models\TepTin::create([
                    'ten_file'     => $file->getClientOriginalName(),
                    'ten_file_luu' => basename($result['secure_url']),
                    'duong_dan'    => $result['secure_url'],
                    'loai_file'    => $file->getClientOriginalExtension() ?: 'unknown',
                    'kich_thuoc'   => $file->getSize(),
                    'nguoi_tao_id' => Auth::id(),
                    'trang_thai'   => 'dang_su_dung',
                ]);

                \App\Models\TepTinBaiTap::create([
                    'tep_tin_id' => $tepTin->id,
                    'bai_tap_id' => $baiTap->id,
                ]);
            }
        }

        if (!empty($updateData)) {
            $baiTap->update($updateData);
            
            \App\Models\BaiViet::where('bai_tap_id', $baiTap->id)->update([
                'tieu_de'    => $baiTap->tieu_de,
                'trang_thai' => $baiTap->trang_thai,
                'han_nop'    => $baiTap->han_nop,
            ]);
        }

        $baiTap->load(['lopHocPhan.monHoc', 'nguoiTao']);
        $totalStudents = $baiTap->lopHocPhan->sinhViens()->count();

        return response()->json(['data' => $this->formatAssignment($baiTap, $totalStudents)]);
    }

    public function destroy($id)
    {
        $sectionIds = $this->getSectionIds();

        $baiTap = BaiTap::whereIn('lop_hoc_phan_id', $sectionIds)->findOrFail($id);
        \App\Models\BaiViet::where('bai_tap_id', $baiTap->id)->delete();
        $baiTap->delete();

        return response()->json(['message' => 'Assignment deleted successfully']);
    }

    public function submissions($id)
    {
        $sectionIds = $this->getSectionIds();
        $baiTap = BaiTap::whereIn('lop_hoc_phan_id', $sectionIds)->findOrFail($id);

        $submissions = \Illuminate\Support\Facades\DB::table('bai_nop')
            ->join('sinh_vien', 'bai_nop.sinh_vien_id', '=', 'sinh_vien.id')
            ->join('nguoi_dung', 'sinh_vien.nguoi_dung_id', '=', 'nguoi_dung.id')
            ->where('bai_tap_id', $baiTap->id)
            ->select(
                'bai_nop.*',
                'nguoi_dung.ho_ten as student_name',
                'sinh_vien.ma_sinh_vien as student_code'
            )
            ->get()
            ->map(function ($sub) {
                // Map status
                $status = 'submitted';
                if ($sub->trang_thai === 'nop_muon') $status = 'late';
                if ($sub->trang_thai === 'da_cham' || $sub->diem !== null) $status = 'graded';
                if ($sub->trang_thai === 'da_tra') $status = 'returned';
                
                return [
                    'id' => (string)$sub->id,
                    'studentId' => (string)$sub->sinh_vien_id,
                    'studentName' => $sub->student_name,
                    'studentCode' => $sub->student_code,
                    'submittedAt' => \Carbon\Carbon::parse($sub->ngay_nop)->format('d/m/Y H:i'),
                    'fileUrl' => $sub->duong_dan_file,
                    'fileName' => $sub->duong_dan_file ? basename($sub->duong_dan_file) : 'submission.pdf',
                    'status' => $status,
                    'score' => $sub->diem !== null ? (float)$sub->diem : null,
                    'feedback' => $sub->nhan_xet
                ];
            });

        return response()->json(['data' => $submissions]);
    }

    public function gradeSubmission(Request $request, $id, $submissionId)
    {
        $sectionIds = $this->getSectionIds();
        $baiTap = BaiTap::whereIn('lop_hoc_phan_id', $sectionIds)->findOrFail($id);

        $baiNop = \Illuminate\Support\Facades\DB::table('bai_nop')
            ->where('id', $submissionId)
            ->where('bai_tap_id', $baiTap->id)
            ->first();

        if (!$baiNop) {
            abort(404, 'Submission not found');
        }

        $validated = $request->validate([
            'diem' => 'required|numeric|min:0|max:' . ($baiTap->diem_toi_da ?? 10),
            'nhan_xet' => 'nullable|string'
        ]);

        $newStatus = ($baiNop->trang_thai === 'da_tra') ? 'da_tra' : 'da_cham';

        \Illuminate\Support\Facades\DB::table('bai_nop')
            ->where('id', $submissionId)
            ->update([
                'diem' => $validated['diem'],
                'nhan_xet' => $validated['nhan_xet'],
                'trang_thai' => $newStatus
            ]);

        \App\Helpers\NotificationHelper::createForStudent(
            $baiNop->sinh_vien_id,
            "Bài làm đã được chấm điểm",
            "Bài tập '{$baiTap->tieu_de}' của bạn đã được giảng viên chấm: {$validated['diem']} điểm.",
            'da_cham_diem',
            '/student/assignments/' . $baiTap->id,
            Auth::id()
        );

        return response()->json(['message' => 'Graded successfully']);
    }

    public function returnSubmissions(Request $request, $id)
    {
        $sectionIds = $this->getSectionIds();
        $baiTap = BaiTap::whereIn('lop_hoc_phan_id', $sectionIds)->findOrFail($id);

        $validated = $request->validate([
            'submission_ids' => 'required|array',
            'submission_ids.*' => 'integer'
        ]);

        \Illuminate\Support\Facades\DB::table('bai_nop')
            ->whereIn('id', $validated['submission_ids'])
            ->where('bai_tap_id', $baiTap->id)
            ->update([
                'trang_thai' => 'da_tra'
            ]);

        return response()->json(['message' => 'Submissions returned successfully']);
    }

    public function scoresReport()
    {
        $sectionIds = $this->getSectionIds();

        $sections = LopHocPhan::with('monHoc')
            ->whereIn('id', $sectionIds)
            ->get();

        $report = $sections->map(function ($sec) {
            $scores = \Illuminate\Support\Facades\DB::table('bai_nop')
                ->join('bai_tap', 'bai_nop.bai_tap_id', '=', 'bai_tap.id')
                ->where('bai_tap.lop_hoc_phan_id', $sec->id)
                ->whereNotNull('bai_nop.diem')
                ->pluck('bai_nop.diem');

            $totalStudents = $sec->sinhViens()->count();

            return [
                'secId' => $sec->ma_lop_hoc_phan,
                'name' => $sec->monHoc ? $sec->monHoc->ten_mon_hoc : $sec->ten_lop,
                'avgScore' => $scores->count() > 0 ? round($scores->avg(), 1) : 0,
                'highest' => $scores->count() > 0 ? (float) $scores->max() : 0,
                'lowest' => $scores->count() > 0 ? (float) $scores->min() : 0,
                'totalStudents' => $totalStudents,
                'gradedCount' => $scores->count(),
            ];
        })->values();

        return response()->json(['data' => $report]);
    }

    private function formatAssignment($item, int $totalStudents)
    {
        $now    = now();
        $hanNop = $item->han_nop ? \Carbon\Carbon::parse($item->han_nop) : null;

        if ($item->trang_thai === 'an') {
            $status = 'draft';
        } elseif ($hanNop && $now->greaterThan($hanNop)) {
            $status = 'closed';
        } else {
            $status = 'open';
        }

        $baiNops = \Illuminate\Support\Facades\DB::table('bai_nop')->where('bai_tap_id', $item->id)->get();
        $submittedCount = $baiNops->count();
        $needsGradingCount = $baiNops->where('diem', null)->count();

        return [
            'id'             => (string) $item->id,
            'title'          => $item->tieu_de,
            'description'    => $item->noi_dung ?? '',
            'instructions'   => $item->huong_dan ?? '',
            'files'          => $item->tepTinBaiTap ? $item->tepTinBaiTap->map(function($ttbt) {
                                    return [
                                        'id' => $ttbt->tep_tin_id,
                                        'name' => $ttbt->tepTin->ten_file,
                                        'url' => $ttbt->tepTin->duong_dan,
                                        'size' => $ttbt->tepTin->kich_thuoc,
                                    ];
                                })->toArray() : [],
            'fileUrl'        => $item->file_url, // Legacy
            'fileName'       => $item->file_name, // Legacy
            'maxScore'       => (float) ($item->diem_toi_da ?? 10),
            'dueDate'        => $hanNop ? $hanNop->format('d/m/Y H:i') : 'Không có hạn',
            'allowLate'      => (bool) ($item->cho_phep_nop_tre ?? false),
            'latePenaltyPct' => (int) ($item->tyle_phat_tre ?? 10),
            'isPublished'    => $item->trang_thai === 'hien_thi',
            'sectionId'      => (string) $item->lop_hoc_phan_id,
            'sectionName'    => $item->lopHocPhan->ten_lop ?? $item->lopHocPhan->monHoc->ten_mon ?? '',
            'status'         => $status,
            'stats'          => [
                'submitted'    => $submittedCount,
                'total'        => $totalStudents,
                'needsGrading' => $needsGradingCount,
            ],
            'createdAt' => $item->ngay_tao,
        ];
    }
}
