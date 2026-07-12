<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\BaiKiemTra;

class StudentQuizController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        if ($user->vai_tro_id !== 3 || !$user->sinhVien) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $student = $user->sinhVien;

        // Get all section IDs the student is enrolled in
        $sectionIds = $student->lopHocPhans()->pluck('lop_hoc_phan.id');

        $quizzesQuery = BaiKiemTra::query();
        if ($request->has('lop_hoc_phan_id') && $request->lop_hoc_phan_id) {
            $quizzesQuery->where('lop_hoc_phan_id', (int) $request->lop_hoc_phan_id);
        } else {
            $quizzesQuery->whereIn('lop_hoc_phan_id', $sectionIds);
        }

        $quizzes = $quizzesQuery
            ->with(['lopHocPhan.monHoc', 'ketQuas' => function($q) use ($student) {
                $q->where('sinh_vien_id', $student->id);
            }])
            ->withCount('cauHois')
            ->get()
            ->map(function ($quiz) {
                $attemptsUsed = $quiz->ketQuas->count();
                $lastAttempt = $quiz->ketQuas->sortByDesc('ngay_tao')->first();
                $status = 'pending';
                if ($attemptsUsed > 0) {
                    $status = $attemptsUsed >= $quiz->so_lan_thi_toi_da ? 'completed' : 'pending';
                }

                $attemptHistory = $quiz->ketQuas->sortBy('ngay_tao')->map(function ($k) {
                    return [
                        'score' => $k->tong_diem,
                        'date' => $k->thoi_gian_nop_bai ? $k->thoi_gian_nop_bai->format('d/m/Y H:i') : null,
                        'status' => $k->trang_thai
                    ];
                })->values()->toArray();

                // Return mapped format suitable for frontend
                return [
                    'id' => (string) $quiz->id,
                    'title' => $quiz->tieu_de,
                    'subjectName' => $quiz->lopHocPhan && $quiz->lopHocPhan->monHoc ? $quiz->lopHocPhan->monHoc->ten_mon : 'N/A',
                    'durationMinutes' => $quiz->thoi_gian_lam_bai,
                    'questionCount' => $quiz->cau_hois_count,
                    'attemptsUsed' => $attemptsUsed,
                    'maxAttempts' => $quiz->so_lan_thi_toi_da,
                    'isPublished' => $quiz->trang_thai === 'dang_mo' || $quiz->trang_thai === 'da_cong_bo',
                    'startTime' => $quiz->thoi_gian_bat_dau ? $quiz->thoi_gian_bat_dau->toIso8601String() : null,
                    'endTime' => $quiz->thoi_gian_ket_thuc ? $quiz->thoi_gian_ket_thuc->toIso8601String() : null,
                    'thoi_gian_bat_dau' => $quiz->thoi_gian_bat_dau ? $quiz->thoi_gian_bat_dau->toIso8601String() : null,
                    'thoi_gian_ket_thuc' => $quiz->thoi_gian_ket_thuc ? $quiz->thoi_gian_ket_thuc->toIso8601String() : null,
                    'status' => $status,
                    'lastScore' => $lastAttempt ? $lastAttempt->tong_diem : null,
                    'lastDate' => $lastAttempt && $lastAttempt->thoi_gian_nop_bai ? $lastAttempt->thoi_gian_nop_bai->format('d/m/Y H:i') : null,
                    'attemptHistory' => $attemptHistory,
                ];
            });

        return response()->json(['data' => $quizzes]);
    }

    public function show($id)
    {
        $user = Auth::user();
        if ($user->vai_tro_id !== 3 || !$user->sinhVien) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $student = $user->sinhVien;
        $sectionIds = $student->lopHocPhans()->pluck('lop_hoc_phan.id');

        $quiz = BaiKiemTra::whereIn('lop_hoc_phan_id', $sectionIds)
            ->with(['lopHocPhan.monHoc'])
            ->find($id);

        if (!$quiz) {
            return response()->json(['message' => 'Quiz not found or unauthorized'], 404);
        }

        if ($quiz->thoi_gian_bat_dau && now()->lt($quiz->thoi_gian_bat_dau)) {
            $quiz->setRelation('cauHois', collect());
        } else {
            $quiz->load(['cauHois.dapAns']);

            // Xáo trộn câu hỏi nếu được bật
            if ($quiz->xao_tron_cau_hoi) {
                $shuffled = $quiz->cauHois->shuffle();
                $quiz->setRelation('cauHois', $shuffled);
            }

            // Xáo trộn đáp án nếu được bật
            if ($quiz->xao_tron_dap_an) {
                $quiz->cauHois->each(function ($cauHoi) {
                    $cauHoi->setRelation('dapAns', $cauHoi->dapAns->shuffle());
                });
            }
        }

        return response()->json(['data' => $quiz]);
    }

    public function submit($id, Request $request)
    {
        $user = Auth::user();
        if ($user->vai_tro_id !== 3 || !$user->sinhVien) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $student = $user->sinhVien;
        $sectionIds = $student->lopHocPhans()->pluck('lop_hoc_phan.id');

        $quiz = BaiKiemTra::whereIn('lop_hoc_phan_id', $sectionIds)
            ->with(['cauHois.dapAns'])
            ->find($id);

        if (!$quiz) {
            return response()->json(['message' => 'Quiz not found or unauthorized'], 404);
        }

        if ($quiz->thoi_gian_bat_dau && now()->lt($quiz->thoi_gian_bat_dau)) {
            return response()->json(['message' => 'Chưa đến thời gian bắt đầu làm bài kiểm tra'], 403);
        }

        $validated = $request->validate([
            'answers'           => 'required|array',
            'thoi_gian_bat_dau' => 'nullable|date',
            'thoi_gian_nop_bai' => 'nullable|date',
        ]);

        $attemptsUsed = \App\Models\KetQuaKiemTra::where('sinh_vien_id', $student->id)
            ->where('bai_kiem_tra_id', $quiz->id)->count();
        if ($attemptsUsed >= $quiz->so_lan_thi_toi_da) {
            return response()->json(['message' => 'Maximum attempts reached'], 403);
        }

        $answers = $validated['answers'];
        $correctCount = 0;
        $autoScore = 0;
        $hasEssay = false;

        $chiTiets = [];

        foreach ($quiz->cauHois as $cauHoi) {
            $uAns = $answers[$cauHoi->id] ?? null;
            $diemDat = 0;
            $chiTiet = [
                'cau_hoi_id'     => $cauHoi->id,
                'dap_an_id'      => null,
                'dap_an_ids'     => null,
                'dap_an_tu_luan' => null,
                'diem_dat'       => 0,
            ];

            if ($cauHoi->loai === 'essay') {
                $hasEssay = true;
                $chiTiet['dap_an_tu_luan'] = $uAns;
            } else if ($cauHoi->loai === 'multiple_choice') {
                if (is_array($uAns)) {
                    $chiTiet['dap_an_ids'] = $uAns;
                    $correctDapAns = $cauHoi->dapAns->where('la_dap_an_dung', true)->pluck('id')->toArray();
                    sort($uAns);
                    sort($correctDapAns);
                    if ($uAns == $correctDapAns && count($uAns) > 0) {
                        $diemDat = $cauHoi->diem;
                        $autoScore += $diemDat;
                        $correctCount++;
                    }
                }
            } else {
                // single_choice or true_false
                $chiTiet['dap_an_id'] = $uAns;
                $correctDapAn = $cauHoi->dapAns->where('la_dap_an_dung', true)->first();
                if ($correctDapAn && $uAns == $correctDapAn->id) {
                    $diemDat = $cauHoi->diem;
                    $autoScore += $diemDat;
                    $correctCount++;
                }
            }

            $chiTiet['diem_dat'] = $diemDat;
            $chiTiets[] = $chiTiet;
        }

        // Cap total autoScore to max score if needed, but normally it's sum of parts
        $ketQua = \App\Models\KetQuaKiemTra::create([
            'sinh_vien_id'      => $student->id,
            'bai_kiem_tra_id'   => $quiz->id,
            'thoi_gian_bat_dau' => $validated['thoi_gian_bat_dau'] ?? now(),
            'thoi_gian_nop_bai' => $validated['thoi_gian_nop_bai'] ?? now(),
            'diem_trac_nghiem'  => $autoScore,
            'diem_tu_luan'      => 0,
            'tong_diem'         => $autoScore,
            'trang_thai'        => $hasEssay ? 'da_nop' : 'da_cham',
        ]);

        foreach ($chiTiets as $ct) {
            $ct['ket_qua_kiem_tra_id'] = $ketQua->id;
            \App\Models\ChiTietKetQua::create($ct);
        }

        return response()->json([
            'message' => 'Submitted successfully',
            'data'    => $ketQua->load('chiTiet')
        ]);
    }

    public function result($id)
    {
        $user = Auth::user();
        if ($user->vai_tro_id !== 3 || !$user->sinhVien) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $student = $user->sinhVien;

        $quiz = BaiKiemTra::with(['cauHois.dapAns'])->find($id);
        if (!$quiz) {
            return response()->json(['message' => 'Quiz not found'], 404);
        }

        $attempts = \App\Models\KetQuaKiemTra::where('sinh_vien_id', $student->id)
            ->where('bai_kiem_tra_id', $quiz->id)
            ->orderBy('ngay_tao', 'asc')
            ->with('chiTiet')
            ->get();

        if ($attempts->isEmpty()) {
            return response()->json(['message' => 'No result found'], 404);
        }

        $correctAnswers = [];
        $explanations = [];

        if ($quiz->hien_dap_an_sau_nop) {
            foreach ($quiz->cauHois as $cauHoi) {
                if ($cauHoi->loai === 'single_choice' || $cauHoi->loai === 'true_false') {
                    $dung = $cauHoi->dapAns->where('la_dap_an_dung', true)->first();
                    if ($dung) $correctAnswers[$cauHoi->id] = (string)$dung->id;
                } else if ($cauHoi->loai === 'multiple_choice') {
                    $dungIds = $cauHoi->dapAns->where('la_dap_an_dung', true)->pluck('id')->map(fn($id) => (string)$id)->toArray();
                    $correctAnswers[$cauHoi->id] = $dungIds;
                }
                if ($cauHoi->giai_thich) {
                    $explanations[$cauHoi->id] = $cauHoi->giai_thich;
                }
            }
        }

        return response()->json([
            'data' => $attempts,
            'correctAnswers' => $correctAnswers,
            'explanations' => $explanations,
            'quiz' => [
                'thoi_gian_lam_bai' => $quiz->thoi_gian_lam_bai
            ]
        ]);
    }
}

