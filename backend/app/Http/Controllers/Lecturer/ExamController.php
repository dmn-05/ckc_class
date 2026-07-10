<?php

namespace App\Http\Controllers\Lecturer;

use App\Http\Controllers\Controller;
use App\Models\BaiKiemTra;
use App\Models\LopHocPhan;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class ExamController extends Controller
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

        $exams = BaiKiemTra::with(['lopHocPhan.monHoc', 'nguoiTao'])
            ->whereIn('lop_hoc_phan_id', $sectionIds)
            ->orderBy('ngay_tao', 'desc')
            ->get()
            ->map(fn($item) => $this->format($item));

        return response()->json(['data' => $exams]);
    }

    public function store(Request $request)
    {
        $sectionIds = $this->getSectionIds();

        $validated = $request->validate([
            'tieu_de'              => 'required|string|max:255',
            'mo_ta'                => 'nullable|string',
            'lop_hoc_phan_id'      => 'required|integer|exists:lop_hoc_phan,id',
            'thoi_gian_bat_dau'    => 'nullable|date',
            'thoi_gian_ket_thuc'   => 'nullable|date|after:thoi_gian_bat_dau',
            'thoi_gian_lam_bai'    => 'nullable|integer|min:1|max:480',
            'diem_toi_da'          => 'nullable|numeric|min:1|max:100',
            'diem_dat'             => 'nullable|numeric|min:0|max:100',
            'so_lan_thi_toi_da'    => 'nullable|integer|min:1|max:10',
            'hinh_thuc'            => 'nullable|string|in:trac_nghiem,tu_luan,hon_hop',
            'xao_tron_cau_hoi'     => 'nullable|boolean',
            'xao_tron_dap_an'      => 'nullable|boolean',
            'hien_dap_an_sau_nop'  => 'nullable|boolean',
            'trang_thai'           => 'nullable|string|in:nhap,hien_thi,an',
        ]);

        if (!in_array($validated['lop_hoc_phan_id'], $sectionIds->toArray())) {
            abort(403, 'You do not own this course section');
        }

        $exam = BaiKiemTra::create([
            'tieu_de'             => $validated['tieu_de'],
            'mo_ta'               => $validated['mo_ta'] ?? null,
            'lop_hoc_phan_id'     => $validated['lop_hoc_phan_id'],
            'nguoi_tao_id'        => Auth::id(),
            'thoi_gian_bat_dau'   => $validated['thoi_gian_bat_dau'] ?? null,
            'thoi_gian_ket_thuc'  => $validated['thoi_gian_ket_thuc'] ?? null,
            'thoi_gian_lam_bai'   => $validated['thoi_gian_lam_bai'] ?? 60,
            'diem_toi_da'         => $validated['diem_toi_da'] ?? 10,
            'diem_dat'            => $validated['diem_dat'] ?? 5,
            'so_lan_thi_toi_da'   => $validated['so_lan_thi_toi_da'] ?? 1,
            'hinh_thuc'           => $validated['hinh_thuc'] ?? 'trac_nghiem',
            'xao_tron_cau_hoi'    => $validated['xao_tron_cau_hoi'] ?? true,
            'xao_tron_dap_an'     => $validated['xao_tron_dap_an'] ?? true,
            'hien_dap_an_sau_nop' => $validated['hien_dap_an_sau_nop'] ?? false,
            'trang_thai'          => $validated['trang_thai'] ?? 'nhap',
        ]);

        $exam->load(['lopHocPhan.monHoc', 'nguoiTao']);

        return response()->json(['data' => $this->format($exam)], 201);
    }

    public function show($id)
    {
        $exam = BaiKiemTra::with(['lopHocPhan.monHoc', 'nguoiTao'])
            ->whereIn('lop_hoc_phan_id', $this->getSectionIds())
            ->findOrFail($id);

        return response()->json(['data' => $this->format($exam)]);
    }

    public function update(Request $request, $id)
    {
        $exam = BaiKiemTra::whereIn('lop_hoc_phan_id', $this->getSectionIds())->findOrFail($id);

        $validated = $request->validate([
            'tieu_de'             => 'sometimes|string|max:255',
            'mo_ta'               => 'nullable|string',
            'thoi_gian_bat_dau'   => 'nullable|date',
            'thoi_gian_ket_thuc'  => 'nullable|date|after:thoi_gian_bat_dau',
            'thoi_gian_lam_bai'   => 'nullable|integer|min:1|max:480',
            'diem_toi_da'         => 'nullable|numeric|min:1|max:100',
            'diem_dat'            => 'nullable|numeric|min:0|max:100',
            'so_lan_thi_toi_da'   => 'nullable|integer|min:1|max:10',
            'hinh_thuc'           => 'sometimes|string|in:trac_nghiem,tu_luan,hon_hop',
            'xao_tron_cau_hoi'    => 'nullable|boolean',
            'xao_tron_dap_an'     => 'nullable|boolean',
            'hien_dap_an_sau_nop' => 'nullable|boolean',
            'trang_thai'          => 'sometimes|string|in:nhap,hien_thi,an',
        ]);

        $fields = ['tieu_de','mo_ta','thoi_gian_bat_dau','thoi_gian_ket_thuc',
                   'thoi_gian_lam_bai','diem_toi_da','diem_dat','so_lan_thi_toi_da',
                   'hinh_thuc','xao_tron_cau_hoi','xao_tron_dap_an','hien_dap_an_sau_nop','trang_thai'];

        $updateData = [];
        foreach ($fields as $f) {
            if (array_key_exists($f, $validated)) {
                $updateData[$f] = $validated[$f];
            }
        }

        if (!empty($updateData)) {
            $exam->update($updateData);
        }

        $exam->load(['lopHocPhan.monHoc', 'nguoiTao']);

        return response()->json(['data' => $this->format($exam)]);
    }

    public function destroy($id)
    {
        $exam = BaiKiemTra::whereIn('lop_hoc_phan_id', $this->getSectionIds())->findOrFail($id);
        $exam->delete();

        return response()->json(['message' => 'Exam deleted successfully']);
    }

    public function getResults($id)
    {
        $exam = BaiKiemTra::whereIn('lop_hoc_phan_id', $this->getSectionIds())->findOrFail($id);
        
        $results = \App\Models\KetQuaKiemTra::with(['sinhVien.nguoiDung', 'chiTiet.cauHoi'])
            ->where('bai_kiem_tra_id', $exam->id)
            ->orderBy('sinh_vien_id')
            ->orderBy('ngay_tao')
            ->get();

        $studentAttempts = [];
        
        $mappedResults = $results->map(function ($kq) use (&$studentAttempts) {
            if (!isset($studentAttempts[$kq->sinh_vien_id])) {
                $studentAttempts[$kq->sinh_vien_id] = 0;
            }
            $studentAttempts[$kq->sinh_vien_id]++;
            $attemptNumber = $studentAttempts[$kq->sinh_vien_id];
            
            $essayAnswers = [];
            foreach ($kq->chiTiet as $ct) {
                if ($ct->cauHoi->loai === 'essay') {
                    $essayAnswers[] = [
                        'questionId' => (string) $ct->cau_hoi_id,
                        'questionContent' => $ct->cauHoi->noi_dung ?? '',
                        'maxScore' => $ct->cauHoi->diem ?? 1,
                        'answer' => $ct->dap_an_tu_luan ?? '',
                        'score' => $ct->diem_dat,
                    ];
                }
            }
            
            return [
                'id' => (string) $kq->id,
                'studentId' => (string) $kq->sinh_vien_id,
                'studentCode' => $kq->sinhVien->ma_sinh_vien ?? '',
                'studentName' => $kq->sinhVien->nguoiDung->ho_ten ?? '',
                'attemptNumber' => $attemptNumber,
                'submittedAt' => $kq->thoi_gian_nop_bai ? $kq->thoi_gian_nop_bai->format('d/m/Y H:i') : null,
                'status' => $kq->trang_thai === 'da_nop' ? 'needs_grading' : 'graded',
                'autoScore' => $kq->diem_trac_nghiem,
                'essayScore' => $kq->diem_tu_luan,
                'totalScore' => $kq->tong_diem,
                'essayAnswers' => $essayAnswers,
            ];
        });

        return response()->json(['data' => $mappedResults]);
    }

    public function gradeEssay(Request $request, $id, $attemptId)
    {
        $exam = BaiKiemTra::whereIn('lop_hoc_phan_id', $this->getSectionIds())->findOrFail($id);
        $ketQua = \App\Models\KetQuaKiemTra::where('bai_kiem_tra_id', $exam->id)->findOrFail($attemptId);

        $validated = $request->validate([
            'essayScore' => 'required|numeric|min:0',
            'essayAnswers' => 'array',
        ]);

        $ketQua->diem_tu_luan = $validated['essayScore'];
        $ketQua->tong_diem = $ketQua->diem_trac_nghiem + $validated['essayScore'];
        $ketQua->trang_thai = 'da_cham';
        $ketQua->save();

        if (isset($validated['essayAnswers'])) {
            foreach ($validated['essayAnswers'] as $ans) {
                $chiTiet = \App\Models\ChiTietKetQua::where('ket_qua_kiem_tra_id', $ketQua->id)
                    ->where('cau_hoi_id', $ans['questionId'])
                    ->first();
                if ($chiTiet) {
                    $chiTiet->diem_dat = $ans['score'];
                    $chiTiet->save();
                }
            }
        }

        return response()->json(['message' => 'Graded successfully']);
    }

    private function format(BaiKiemTra $item): array
    {
        $now   = now();
        $start = $item->thoi_gian_bat_dau;
        $end   = $item->thoi_gian_ket_thuc;

        if ($item->trang_thai === 'nhap') {
            $status = 'draft';
        } elseif ($start && $now->lt($start)) {
            $status = 'upcoming';
        } elseif ($end && $now->gt($end)) {
            $status = 'ended';
        } else {
            $status = 'open';
        }

        return [
            'id'                 => (string) $item->id,
            'title'              => $item->tieu_de,
            'description'        => $item->mo_ta ?? '',
            'sectionId'          => (string) $item->lop_hoc_phan_id,
            'sectionName'        => $item->lopHocPhan?->ten_lop ?? $item->lopHocPhan?->monHoc?->ten_mon ?? '',
            'startTime'          => $start?->format('d/m/Y H:i'),
            'endTime'            => $end?->format('d/m/Y H:i'),
            'duration'           => $item->thoi_gian_lam_bai,
            'maxScore'           => (float) $item->diem_toi_da,
            'passingScore'       => (float) $item->diem_dat,
            'maxAttempts'        => (int) $item->so_lan_thi_toi_da,
            'type'               => $item->hinh_thuc,
            'shuffleQuestions'   => (bool) $item->xao_tron_cau_hoi,
            'shuffleAnswers'     => (bool) $item->xao_tron_dap_an,
            'showAnswerAfter'    => (bool) $item->hien_dap_an_sau_nop,
            'isPublished'        => $item->trang_thai === 'hien_thi',
            'status'             => $status,
            'createdAt'          => $item->ngay_tao,
            'submittedCount'     => $item->ketQuas()->distinct('sinh_vien_id')->count('sinh_vien_id'),
            'totalStudents'      => $item->lopHocPhan ? $item->lopHocPhan->sinhViens()->count() : 0,
        ];
    }
}
