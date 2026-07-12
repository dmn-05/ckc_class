<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\BaiTap;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StudentAssignmentController extends Controller
{
    private function formatAssignment($item, $studentId = null): array
    {
        $submission = null;
        if ($studentId) {
            $sub = \Illuminate\Support\Facades\DB::table('bai_nop')
                ->where('bai_tap_id', $item->id)
                ->where('sinh_vien_id', $studentId)
                ->first();
            if ($sub) {
                $isReturned = ($sub->trang_thai === 'da_tra');
                $displayStatus = 'da_nop';
                if ($isReturned) {
                    $displayStatus = 'da_cham';
                } elseif ($sub->trang_thai === 'nop_muon') {
                    $displayStatus = 'nop_muon';
                }

                $submission = [
                    'id' => $sub->id,
                    'ngay_nop' => $sub->ngay_nop ? \Carbon\Carbon::parse($sub->ngay_nop)->format('H:i, d/m/Y') : null,
                    'duong_dan_file' => $sub->duong_dan_file,
                    'ten_file' => $sub->duong_dan_file ? basename($sub->duong_dan_file) : null,
                    'trang_thai' => $displayStatus,
                    'diem' => $isReturned ? $sub->diem : null,
                    'nhan_xet' => $isReturned ? $sub->nhan_xet : null,
                ];
            }
        }

        return [
            'id'              => $item->id,
            'tieu_de'         => $item->tieu_de,
            'noi_dung'        => $item->noi_dung,
            'huong_dan'       => $item->huong_dan,
            'lop_hoc_phan_id' => $item->lop_hoc_phan_id,
            'nguoi_tao'       => $item->nguoiTao ? $item->nguoiTao->ho_ten : null,
            'diem_toi_da'     => $item->diem_toi_da,
            'han_nop'         => $item->han_nop ? \Carbon\Carbon::parse($item->han_nop)->format('H:i, d/m/Y') : null,
            'cho_phep_nop_tre' => (bool) $item->cho_phep_nop_tre,
            'ngay_tao'        => $item->ngay_tao,
            'ten_mon'         => $item->lopHocPhan?->monHoc?->ten_mon ?? 'N/A',
            'ten_lop'         => $item->lopHocPhan?->ten_lop ?? null,
            'files'           => $item->tepTinBaiTap ? $item->tepTinBaiTap->map(fn($t) => [
                'id'   => $t->tep_tin_id,
                'name' => $t->tepTin?->ten_file,
                'url'  => $t->tepTin?->duong_dan,
                'size' => $t->tepTin?->kich_thuoc ?? 0,
            ])->filter(fn($f) => $f['id'])->values()->toArray() : [],
            'submission'      => $submission,
        ];
    }

    public function index(Request $request)
    {
        $user = Auth::user();
        if ($user->vai_tro_id !== 3 || !$user->sinhVien) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $student = $user->sinhVien;

        $query = BaiTap::where('trang_thai', 'hien_thi')
            ->with(['lopHocPhan.monHoc', 'nguoiTao', 'tepTinBaiTap.tepTin']);

        if ($request->has('lop_hoc_phan_id') && $request->lop_hoc_phan_id) {
            $query->where('lop_hoc_phan_id', (int) $request->lop_hoc_phan_id);
        } else {
            $sectionIds = $student->lopHocPhans()->pluck('lop_hoc_phan.id');
            $query->whereIn('lop_hoc_phan_id', $sectionIds);
        }

        $assignments = $query->orderBy('ngay_tao', 'desc')
            ->get()
            ->map(fn($item) => $this->formatAssignment($item, $student->id));

        return response()->json(['data' => $assignments]);
    }

    public function show($id)
    {
        $user = Auth::user();
        if ($user->vai_tro_id !== 3 || !$user->sinhVien) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $student = $user->sinhVien;
        $sectionIds = $student->lopHocPhans()->pluck('lop_hoc_phan.id');

        $baiTap = BaiTap::where('trang_thai', 'hien_thi')
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->with(['lopHocPhan.monHoc', 'nguoiTao', 'tepTinBaiTap.tepTin'])
            ->findOrFail($id);

        return response()->json(['data' => $this->formatAssignment($baiTap, $student->id)]);
    }

    public function submit(Request $request, $id)
    {
        $user = Auth::user();
        if ($user->vai_tro_id !== 3 || !$user->sinhVien) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $student = $user->sinhVien;

        $baiTap = BaiTap::where('trang_thai', 'hien_thi')
            ->findOrFail($id);

        $isEnrolled = $student->lopHocPhans()->where('lop_hoc_phan.id', $baiTap->lop_hoc_phan_id)->exists();
        if (!$isEnrolled) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $existing = \Illuminate\Support\Facades\DB::table('bai_nop')
            ->where('bai_tap_id', $baiTap->id)
            ->where('sinh_vien_id', $student->id)
            ->first();
        if ($existing && ($existing->trang_thai === 'da_cham' || $existing->trang_thai === 'da_tra')) {
            return response()->json(['message' => 'Bài tập đã được chấm điểm, không thể nộp lại'], 400);
        }

        $request->validate([
            'file' => 'required|file|max:51200', // 50MB max
        ]);

        $fileUrl = null;
        $originalFileName = null;
        if ($request->hasFile('file') && env('CLOUDINARY_URL')) {
            $file = $request->file('file');
            if ($file->getSize() === 0) {
                return response()->json(['message' => 'File bài làm đang trống (0 KB). Vui lòng chọn file có nội dung trước khi nộp!'], 400);
            }
            $originalFileName = $file->getClientOriginalName();
            $cloudinary = new \Cloudinary\Cloudinary(env('CLOUDINARY_URL'));
            try {
                $result = $cloudinary->uploadApi()->upload(
                    $file->getRealPath(),
                    [
                        'folder' => 'submissions',
                        'resource_type' => 'auto',
                        'filename_override' => $originalFileName,
                        'use_filename' => true,
                        'unique_filename' => false,
                    ]
                );
                $fileUrl = $result['secure_url'];
            } catch (\Exception $e) {
                try {
                    $result = $cloudinary->uploadApi()->upload(
                        $file->getRealPath(),
                        [
                            'folder' => 'submissions',
                            'resource_type' => 'raw',
                            'filename_override' => $originalFileName,
                            'use_filename' => true,
                            'unique_filename' => false,
                        ]
                    );
                    $fileUrl = $result['secure_url'];
                } catch (\Exception $ex) {
                    return response()->json(['message' => 'Lỗi tải file lên server: ' . $ex->getMessage()], 400);
                }
            }
        } else {
            return response()->json(['message' => 'Server missing Cloudinary configuration'], 500);
        }

        $trangThai = 'da_nop';
        if ($baiTap->han_nop && \Carbon\Carbon::now()->greaterThan(\Carbon\Carbon::parse($baiTap->han_nop))) {
            if (!$baiTap->cho_phep_nop_tre) {
                return response()->json(['message' => 'Đã quá hạn nộp bài'], 400);
            }
            $trangThai = 'nop_muon';
        }

        $now = \Carbon\Carbon::now();

        \Illuminate\Support\Facades\DB::table('bai_nop')->updateOrInsert(
            [
                'bai_tap_id' => $baiTap->id,
                'sinh_vien_id' => $student->id
            ],
            [
                'duong_dan_file' => $fileUrl,
                'trang_thai' => $trangThai,
                'ngay_nop' => $now,
                'ngay_cap_nhat' => $now
            ]
        );

        return response()->json(['message' => 'Nộp bài thành công', 'trang_thai' => $trangThai]);
    }
}
