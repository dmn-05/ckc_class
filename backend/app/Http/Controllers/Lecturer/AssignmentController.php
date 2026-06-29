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
        return LopHocPhan::where('giang_vien_id', $giangVienId)->pluck('id');
    }

    public function index()
    {
        $sectionIds = $this->getSectionIds();

        $assignments = BaiTap::with(['lopHocPhan.monHoc', 'nguoiTao'])
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
        }

        $baiTap->load(['lopHocPhan.monHoc', 'nguoiTao']);
        $totalStudents = $baiTap->lopHocPhan->sinhViens()->count();

        return response()->json(['data' => $this->formatAssignment($baiTap, $totalStudents)]);
    }

    public function destroy($id)
    {
        $sectionIds = $this->getSectionIds();

        $baiTap = BaiTap::whereIn('lop_hoc_phan_id', $sectionIds)->findOrFail($id);
        $baiTap->delete();

        return response()->json(['message' => 'Assignment deleted successfully']);
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
                'submitted'    => 0,
                'total'        => $totalStudents,
                'needsGrading' => 0,
            ],
            'createdAt' => $item->ngay_tao,
        ];
    }
}
