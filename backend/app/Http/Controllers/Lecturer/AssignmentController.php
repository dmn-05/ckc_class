<?php

namespace App\Http\Controllers\Lecturer;

use App\Http\Controllers\Controller;
use App\Models\BaiViet;
use App\Models\LopHocPhan;
use App\Models\DangKyHocPhan;
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
        return LopHocPhan::where('giang_vien_id', $giangVienId)->pluck('id');
    }

    public function index()
    {
        $sectionIds = $this->getSectionIds();

        $assignments = BaiViet::with(['lopHocPhan.monHoc', 'nguoiTao'])
            ->where('loai_bai_viet', 'bai_tap')
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->orderBy('ngay_tao', 'desc')
            ->get()
            ->map(function ($item) {
                $totalStudents = DangKyHocPhan::where('lop_hoc_phan_id', $item->lop_hoc_phan_id)
                    ->where('trang_thai', 'da_duyet')
                    ->count();
                return $this->formatAssignment($item, $totalStudents);
            });

        return response()->json(['data' => $assignments]);
    }

    public function store(Request $request)
    {
        $sectionIds = $this->getSectionIds();

        $validated = $request->validate([
            'tieu_de' => 'required|string|max:255',
            'noi_dung' => 'nullable|string',
            'lop_hoc_phan_id' => 'required|integer|exists:lop_hoc_phan,id',
            'diem_toi_da' => 'nullable|numeric|min:1|max:100',
            'han_nop' => 'nullable|date',
            'cho_phep_nop_tre' => 'nullable|boolean',
            'tyle_phat_tre' => 'nullable|integer|min:0|max:100',
            'trang_thai' => 'nullable|string|in:hien_thi,an',
        ]);

        if (!in_array($validated['lop_hoc_phan_id'], $sectionIds->toArray())) {
            abort(403, 'You do not own this course section');
        }

        $chu_de_id = \Illuminate\Support\Facades\DB::table('chu_de')
            ->where('lop_hoc_phan_id', $validated['lop_hoc_phan_id'])
            ->where('ten_chu_de', 'Bài tập')
            ->value('id');

        $post = BaiViet::create([
            'tieu_de' => $validated['tieu_de'],
            'noi_dung' => $validated['noi_dung'] ?? '',
            'lop_hoc_phan_id' => $validated['lop_hoc_phan_id'],
            'chu_de_id' => $chu_de_id,
            'nguoi_tao_id' => Auth::id(),
            'loai_bai_viet' => 'bai_tap',
            'trang_thai' => $validated['trang_thai'] ?? 'hien_thi',
            'diem_toi_da' => $validated['diem_toi_da'] ?? 10,
            'han_nop' => $validated['han_nop'] ?? null,
            'cho_phep_nop_tre' => $validated['cho_phep_nop_tre'] ?? false,
            'tyle_phat_tre' => $validated['tyle_phat_tre'] ?? 10,
        ]);

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $path = $file->store('attachments', 'public');

            $tepTin = \App\Models\TepTin::create([
                'ten_file' => $file->getClientOriginalName(),
                'ten_file_luu' => basename($path),
                'duong_dan' => '/storage/' . $path,
                'loai_file' => $file->getClientOriginalExtension() ?: 'unknown',
                'kich_thuoc' => $file->getSize(),
                'nguoi_tao_id' => Auth::id(),
                'trang_thai' => 'dang_su_dung',
            ]);

            \App\Models\TepTinBaiViet::create([
                'tep_tin_id' => $tepTin->id,
                'bai_viet_id' => $post->id,
            ]);
        }

        $post->load(['lopHocPhan.monHoc', 'nguoiTao']);
        $totalStudents = DangKyHocPhan::where('lop_hoc_phan_id', $post->lop_hoc_phan_id)
            ->where('trang_thai', 'da_duyet')
            ->count();

        return response()->json(['data' => $this->formatAssignment($post, $totalStudents)], 201);
    }

    public function show($id)
    {
        $sectionIds = $this->getSectionIds();

        $assignment = BaiViet::with(['lopHocPhan.monHoc', 'nguoiTao', 'tepTinBaiViet.tepTin'])
            ->where('loai_bai_viet', 'bai_tap')
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->findOrFail($id);

        $totalStudents = DangKyHocPhan::where('lop_hoc_phan_id', $assignment->lop_hoc_phan_id)
            ->where('trang_thai', 'da_duyet')
            ->count();

        return response()->json(['data' => $this->formatAssignment($assignment, $totalStudents)]);
    }

    public function update(Request $request, $id)
    {
        $sectionIds = $this->getSectionIds();

        $assignment = BaiViet::where('loai_bai_viet', 'bai_tap')
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->findOrFail($id);

        $validated = $request->validate([
            'tieu_de' => 'sometimes|string|max:255',
            'noi_dung' => 'nullable|string',
            'diem_toi_da' => 'nullable|numeric|min:1|max:100',
            'han_nop' => 'nullable|date',
            'cho_phep_nop_tre' => 'nullable|boolean',
            'tyle_phat_tre' => 'nullable|integer|min:0|max:100',
            'trang_thai' => 'sometimes|string|in:hien_thi,an',
        ]);

        $updateData = [];
        foreach (['tieu_de', 'noi_dung', 'diem_toi_da', 'han_nop', 'cho_phep_nop_tre', 'tyle_phat_tre', 'trang_thai'] as $field) {
            if (isset($validated[$field])) {
                $updateData[$field] = $validated[$field];
            }
        }

        if (!empty($updateData)) {
            $assignment->update($updateData);
        }

        $assignment->load(['lopHocPhan.monHoc', 'nguoiTao']);
        $totalStudents = DangKyHocPhan::where('lop_hoc_phan_id', $assignment->lop_hoc_phan_id)
            ->where('trang_thai', 'da_duyet')
            ->count();

        return response()->json(['data' => $this->formatAssignment($assignment, $totalStudents)]);
    }

    public function destroy($id)
    {
        $sectionIds = $this->getSectionIds();

        $assignment = BaiViet::where('loai_bai_viet', 'bai_tap')
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->findOrFail($id);

        \App\Models\TepTinBaiViet::where('bai_viet_id', $assignment->id)->delete();
        \App\Models\BinhLuan::where('bai_viet_id', $assignment->id)->delete();
        $assignment->delete();

        return response()->json(['message' => 'Assignment deleted successfully']);
    }

    private function formatAssignment($item, int $totalStudents)
    {
        $now = now();
        $hanNop = $item->han_nop ? \Carbon\Carbon::parse($item->han_nop) : null;

        if ($item->trang_thai === 'an') {
            $status = 'draft';
        } elseif ($hanNop && $now->greaterThan($hanNop)) {
            $status = 'closed';
        } else {
            $status = 'open';
        }

        return [
            'id' => (string) $item->id,
            'title' => $item->tieu_de,
            'description' => $item->noi_dung ?? '',
            'instructions' => $item->noi_dung ?? '',
            'maxScore' => (float) ($item->diem_toi_da ?? 10),
            'dueDate' => $hanNop ? $hanNop->format('d/m/Y H:i') : 'Không có hạn',
            'allowLate' => (bool) ($item->cho_phep_nop_tre ?? false),
            'latePenaltyPct' => (int) ($item->tyle_phat_tre ?? 10),
            'isPublished' => $item->trang_thai === 'hien_thi',
            'sectionId' => (string) $item->lop_hoc_phan_id,
            'sectionName' => $item->lop_hoc_phan->ten_lop ?? $item->lop_hoc_phan->monHoc->ten_mon ?? '',
            'status' => $status,
            'stats' => [
                'submitted' => 0,
                'total' => $totalStudents,
                'needsGrading' => 0,
            ],
            'createdAt' => $item->ngay_tao,
        ];
    }
}
